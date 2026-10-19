"""Native reverse conversion; no harness dependency or chemistry claims."""
import copy
import gzip
import json
import os
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
from google.protobuf import json_format
from cmccdb_schema import spreadsheet
from cmccdb_schema.proto import dataset_pb2

NODE = os.environ.get("CMCCDB_XLSX_NODE")


def fixture(index=1, extra=False):
    """Format-only data: literal identity text, zero/false, bytes, maps and lists."""
    reaction = dict(reaction_id="cmcc-" + f"{index:032x}",
        provenance=dict(is_mined=True, record_created=dict(time=dict(value="2026-10-19T12:00:00.000001+0000"),
            person=dict(name="Format fixture", email="fixture@example.invalid"))),
        inputs={"00123": dict(components=[dict(identifiers=[dict(type="NAME", value="00123")],
            amount=dict(mass=dict(value=0, units="GRAM")), reaction_role="REACTANT", is_limiting=False)])},
        conditions=dict(mechanochemistry=dict(type="BALL_MILL", frequency=dict(value=30, units="HERTZ"),
            geometry=["NO", "00123", "kneading"], number_of_balls=0)),
        outcomes=[dict(products=[dict(identifiers=[dict(type="NAME", value="FALSE")], is_desired_product=False,
            reaction_role="PRODUCT", measurements=[dict(type="YIELD", percentage=dict(value=0))])])],
        notes=dict(procedure_details="NO"))
    if extra:
        reaction["inputs"]["second/key~name"] = dict(components=[dict(identifiers=[dict(type="NAME", value="extra")],
            amount=dict(mass=dict(value=2, units="GRAM")), reaction_role="ADDITIVE")])
        reaction["outcomes"][0]["products"][0]["features"] = {
            "numeric-text": dict(string_value="123", format="text"),
            "binary": dict(bytes_value="AP8=", format="binary")}
    return reaction


def dataset(count=1):
    return json_format.ParseDict(dict(dataset_id="cmcc_dataset-" + "a"*32,
        name="00123", description="Literal description\nwith Unicode μ and Å.",
        reactions=[fixture(i, extra=i % 3 == 0) for i in range(1, count+1)]), dataset_pb2.Dataset())


class LayoutTests(unittest.TestCase):
    def test_proto_and_mapping_use_same_layout_without_mutation(self):
        source = dataset(6); before = source.SerializeToString(deterministic=True)
        left = spreadsheet.spreadsheet_rows(source)
        right = spreadsheet.spreadsheet_rows(json_format.MessageToDict(source, preserving_proto_field_name=True))
        self.assertEqual(left, right)
        self.assertEqual(source.SerializeToString(deterministic=True), before)
        self.assertEqual(sum(row[0] == "REACTION" for row in left[0] if row), 2)
        self.assertTrue(any("second~1key~0name" in cell["path"] for cell in left[1]))

    def test_empty_common_fields_are_not_invented(self):
        source = dataset(2)
        for reaction in source.reactions:
            reaction.ClearField("provenance")
        rows, _, _ = spreadsheet.spreadsheet_rows(source)
        self.assertEqual(rows[0][0], "REACTION")
        self.assertEqual(rows[1][0], "VARIANTS")

    def test_reference_only_datasets_are_rejected(self):
        with self.assertRaisesRegex(ValueError, "reaction_ids"):
            spreadsheet.dataset_workbook_plan(dataset_pb2.Dataset(reaction_ids=["cmcc-" + "b"*32]))

    def test_duplicate_or_missing_reaction_identity_is_rejected(self):
        for count, missing in ((2, False), (1, True)):
            source = dataset(count)
            source.reactions[-1].reaction_id = "" if missing else source.reactions[0].reaction_id
            with self.assertRaisesRegex(ValueError, "unique reaction IDs"):
                spreadsheet.verify_round_trip(source, "not-opened.xlsx")

    def test_normalization_remains_explicit_and_does_not_change_input(self):
        source = json_format.MessageToDict(dataset(), preserving_proto_field_name=True)
        source["reactions"][0]["notes"]["procedure_details"] = " boundary text "
        original = copy.deepcopy(source)
        normalized, changes = spreadsheet.export_text_boundaries(source)
        self.assertEqual(source, original)
        self.assertEqual(normalized["reactions"][0]["notes"]["procedure_details"], "boundary text")
        self.assertEqual(changes[0]["original"], " boundary text ")

    def test_failed_backend_leaves_existing_output_untouched(self):
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "protected.xlsx"; output.write_bytes(b"human workbook")
            with self.assertRaises(FileExistsError):
                spreadsheet.export_dataset(dataset(), output)
            with patch.object(spreadsheet, "write_workbook", side_effect=ValueError("backend failed")):
                with self.assertRaisesRegex(ValueError, "backend failed"):
                    spreadsheet.export_dataset(dataset(), output, overwrite=True)
            self.assertEqual(output.read_bytes(), b"human workbook")
            self.assertEqual(list(Path(temp).iterdir()), [output])


@unittest.skipUnless(NODE, "Set CMCCDB_XLSX_NODE and NODE_PATH for real XLSX integration")
class RoundTripTests(unittest.TestCase):
    def test_120_records_metadata_mixed_headers_and_source_types(self):
        source = dataset(120); before = source.SerializeToString(deterministic=True)
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "dataset.xlsx"
            result = spreadsheet.export_dataset(source, output, node=NODE)
            self.assertTrue(result["round_trip_verified"])
            self.assertEqual(result["reactions"], 120)
            actual = spreadsheet.verify_round_trip(source, output)
            self.assertEqual(actual.name, "00123")
            self.assertEqual(actual.description, source.description)
            self.assertEqual({r.reaction_id: r for r in actual.reactions}, {r.reaction_id: r for r in source.reactions})
            self.assertEqual(source.SerializeToString(deterministic=True), before)
            self.assertEqual(list(Path(temp).iterdir()), [output])

    def test_no_shared_provenance_uses_native_empty_common_block(self):
        source = dataset(2)
        for r in source.reactions:
            r.ClearField("provenance")
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "no-common.xlsx"
            spreadsheet.export_dataset(source, output, node=NODE)
            actual = spreadsheet.verify_round_trip(source, output)
            self.assertTrue(all(not r.HasField("provenance") for r in actual.reactions))

    def test_lossy_text_does_not_publish_or_replace_output(self):
        source = dataset(); source.reactions[0].notes.procedure_details = " boundary text "
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "preserved.xlsx"; output.write_bytes(b"original workbook")
            with self.assertRaisesRegex(ValueError, "round-trip changed"):
                spreadsheet.export_dataset(source, output, node=NODE, overwrite=True)
            self.assertEqual(output.read_bytes(), b"original workbook")

    def test_module_cli_reads_pb_gz_without_harness(self):
        with tempfile.TemporaryDirectory() as temp:
            source = dataset(); path = Path(temp) / "input.pb.gz"
            path.write_bytes(gzip.compress(source.SerializeToString(deterministic=True)))
            output = Path(temp) / "cli.xlsx"
            environment = dict(os.environ)
            dependencies = [p for p in environment.get("PYTHONPATH", "").split(os.pathsep)
                            if p and not (Path(p) / "cmccdb_extraction").is_dir()
                            and "cmccdb-data/harness" not in p]
            environment["PYTHONPATH"] = os.pathsep.join([str(Path(__file__).resolve().parents[1]), *dependencies])
            proc = subprocess.run([sys.executable, "-m", "cmccdb_schema.scripts.export_spreadsheet",
                str(path), str(output), "--node", NODE], env=environment, capture_output=True, text=True, timeout=180)
            self.assertEqual(proc.returncode, 0, proc.stderr)
            self.assertTrue(json.loads(proc.stdout)["round_trip_verified"])
            self.assertEqual(spreadsheet.verify_round_trip(source, output), source)


if __name__ == "__main__":
    unittest.main()
