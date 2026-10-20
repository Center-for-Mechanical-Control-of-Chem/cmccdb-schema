"""Native named-map column grammar, all reaction maps and section placement."""
import io
import unittest
import zipfile
from google.protobuf.json_format import MessageToDict, ParseDict
from cmccdb_schema import dataset_constructor as c, spreadsheet as s
from cmccdb_schema.spreadsheet_headers import readable_columns
from cmccdb_schema.spreadsheet_headers_test import reaction_from_headers
from cmccdb_schema.spreadsheet_test import dataset
from cmccdb_schema.proto import reaction_pb2, test_pb2


def round_trip(test, source):
    before = source.SerializeToString(deterministic=True)
    payload = s.serialize_csv_bundle(source)
    test.assertEqual(s.load_csv_bundle(payload), source)
    test.assertEqual(source.SerializeToString(deterministic=True), before)
    with zipfile.ZipFile(io.BytesIO(payload)) as archive:
        text = archive.read("reactions.csv").decode()
    return s.dataset_workbook_plan(source), text


class MapColumnTests(unittest.TestCase):
    def test_hand_authored_keys_in_headers_infer_numbers_and_preserve_boolean_like_text(self):
        actual = reaction_from_headers([
            ["REACTANT"], ["Features"], ["reported-mol", "note", "small"]], [10, "NO", "1e-8"])
        features = actual.inputs["inputs-0"].components[0].features
        self.assertEqual(features["reported-mol"].integer_value, 10)
        self.assertEqual(features["note"].string_value, "NO")
        self.assertAlmostEqual(features["small"].float_value, 1e-8)

    def test_typed_key_with_value_description_and_format_has_no_key_column(self):
        actual = reaction_from_headers([
            ["REACTANT"], ["Features"], ["reported-mol {float}"],
            ["Value", "Description", "Format"]], [10, "Reported loading", "mol %"])
        feature = actual.inputs["inputs-0"].components[0].features["reported-mol"]
        self.assertEqual(feature.WhichOneof("kind"), "float_value")
        self.assertEqual(feature.float_value, 10)
        self.assertEqual(feature.description, "Reported loading")
        self.assertEqual(feature.format, "mol %")

    def test_typed_bytes_keep_base64_text_even_when_it_looks_numeric(self):
        actual = reaction_from_headers([["REACTANT"], ["Features"], ["raw {bytes}"]], ["1234"])
        self.assertEqual(actual.inputs["inputs-0"].components[0].features["raw"].bytes_value, b"\xd7m\xf8")

    def test_every_data_kind_and_metadata_survives_named_column_export(self):
        source = dataset()
        features = source.reactions[0].inputs["00123"].components[0].features
        entries = {"reported-mol": reaction_pb2.Data(float_value=10, description="Reported mol %"),
                   "count": reaction_pb2.Data(integer_value=0),
                   "label": reaction_pb2.Data(string_value="00123", description="Literal numeric text"),
                   "empty": reaction_pb2.Data(string_value=""),
                   "negative-zero": reaction_pb2.Data(float_value=-0.0),
                   "remote": reaction_pb2.Data(url="https://example.invalid/raw.csv", format="csv"),
                   "raw": reaction_pb2.Data(bytes_value=b"\x00\xfffile", format="bin", description="Raw data")}
        for key, value in entries.items():
            features[key].CopyFrom(value)
        _, text = round_trip(self, source)
        for label in ("reported-mol {float}", "label {string}", "count {integer}", "remote {url}"):
            self.assertIn(label, text)
        for canonical in ("Float Value", "String Value", ",Key,"):
            self.assertNotIn(canonical, text)

    def test_map_keys_keep_exact_spelling_even_when_they_collide_with_header_grammar(self):
        source = dataset()
        features = source.reactions[0].outcomes[0].products[0].features
        keys = ["Name", "Key", "Value", "String Value", "Float Value", "Description", "REACTANT",
                "DOI", "a:b", "x (Hz)", "with {string}", "a/b~c", " spaces ", "", "#!hidden",
                'quote"key', "multi\nline", '["looks quoted"]']
        for key in keys:
            features[key].string_value = "00123"
        round_trip(self, source)

    def test_all_eight_reaction_map_fields_support_column_keys(self):
        source = dataset()
        reaction = source.reactions[0]
        compound = reaction.inputs["00123"].components[0]
        compound.features["loading"].float_value = 10
        compound.analyses["HPLC"].data["trace"].string_value = "Input trace"
        reaction.setup.automation_code["procedure.py"].string_value = "print(1)"
        reaction.outcomes[0].analyses["NMR"].data["trace"].string_value = "Outcome trace"
        reaction.outcomes[0].products[0].features["purity"].float_value = 99
        reaction.provenance.reaction_metadata["operator-note"].string_value = "NO"
        _, text = round_trip(self, source)
        self.assertIn("00123", text)
        self.assertIn("HPLC", text)
        self.assertIn("procedure.py {string}", text)
        seen, maps = set(), set()
        def visit(desc):
            if desc.full_name in seen:
                return
            seen.add(desc.full_name)
            for field in desc.fields:
                if field.message_type:
                    if s.is_map(field):
                        maps.add(field.full_name)
                        value = field.message_type.fields_by_name["value"]
                        if value.message_type:
                            visit(value.message_type)
                    else:
                        visit(field.message_type)
        visit(reaction_pb2.Reaction.DESCRIPTOR)
        self.assertEqual(maps, {"cmccdb.Reaction.inputs", "cmccdb.Compound.features", "cmccdb.Compound.analyses",
            "cmccdb.ReactionSetup.automation_code", "cmccdb.ReactionOutcome.analyses", "cmccdb.ProductCompound.features",
            "cmccdb.Analysis.data", "cmccdb.ReactionProvenance.reaction_metadata"})

    def test_scalar_and_value_message_maps_are_supported_by_the_native_grammar(self):
        for source in (test_pb2.Map(), test_pb2.MapNested()):
            with self.subTest(message=source.DESCRIPTOR.full_name):
                if isinstance(source, test_pb2.Map):
                    source.values["custom key"] = 1.25
                else:
                    source.children["custom key"].value = 1.25
                columns = readable_columns(source.DESCRIPTOR, MessageToDict(source, preserving_proto_field_name=True))
                headers = s.header_rows(columns)
                root = c.ProtoMessage(type(source))
                root.insert_tree(c.DatasetConstructor.parse_csv_rows(headers))
                template = c.ProtoTemplater.from_proto(root)
                applied = template.apply([column["value"] for column in columns])
                actual = ParseDict(c.ProtoTemplater.prep_proto(applied, descriptor=source.DESCRIPTOR), type(source)())
                self.assertEqual(actual, source)

    def test_legacy_key_and_value_columns_still_import(self):
        actual = reaction_from_headers([
            ["REACTANT"], ["Features"], ["Key", "Float Value", "Description"]],
            ["reported-mol", 10, "Source value"])
        feature = actual.inputs["inputs-0"].components[0].features["reported-mol"]
        self.assertEqual(feature.float_value, 10)
        self.assertEqual(feature.description, "Source value")

    def test_duplicate_named_keys_are_rejected_and_quoted_reserved_keys_are_literal(self):
        with self.assertRaises(ValueError):
            reaction_from_headers([["REACTANT"], ["Features"], ["x {float}", "x {float}"]], [1, 2])
        actual = reaction_from_headers([["REACTANT"], ["Features"], ['["Key"] {string}']], ["NO"])
        self.assertEqual(actual.inputs["inputs-0"].components[0].features["Key"].string_value, "NO")


class VariantPlacementTests(unittest.TestCase):
    def test_identical_entities_and_single_block_conditions_never_move_to_common(self):
        for count in (1, 2):
            source = dataset(count)
            for reaction in source.reactions:
                reaction.identifiers.add(type=reaction_pb2.ReactionIdentifier.REACTION_TYPE, value="Shared type")
                reaction.observations.add(comment="Keep observation per reaction")
            plan, _ = round_trip(self, source)
            rows = plan["sheets"][0]["rows"]
            split = next(i + 1 for i, row in enumerate(rows) if row[0] == "VARIANTS")
            for cell in plan["data_cells"]:
                if cell["path"].startswith(("/inputs/", "/outcomes/", "/observations/")):
                    self.assertGreater(cell["row"], split)
                if cell["path"].startswith("/conditions/"):
                    self.assertEqual(cell["row"] > split, count == 1)

    def test_a_single_reaction_within_a_larger_export_keeps_its_conditions_in_variants(self):
        source = dataset(2)
        source.reactions[1].conditions.mechanochemistry.frequency.units = reaction_pb2.Frequency.RPM
        plan, _ = round_trip(self, source)
        rows = plan["sheets"][0]["rows"]
        blocks = [i + 1 for i, row in enumerate(rows) if row[0] == "VARIANTS"]
        self.assertEqual(len(blocks), 2)
        for cell in plan["data_cells"]:
            if cell["path"].startswith("/conditions/"):
                self.assertTrue(any(row < cell["row"] for row in blocks))


if __name__ == "__main__":
    unittest.main()
