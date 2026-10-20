"""Common REACTION fields and visible identity in human-readable exports."""
import csv
import io
import tempfile
import unittest
from pathlib import Path

from cmccdb_schema import spreadsheet
from cmccdb_schema.proto import reaction_pb2
from cmccdb_schema.spreadsheet_test import dataset


class SharedReactionTests(unittest.TestCase):
    def round_trip(self, source):
        before = source.SerializeToString(deterministic=True)
        actual = spreadsheet.load_csv_bundle(spreadsheet.serialize_csv_bundle(source))
        self.assertEqual(actual, source)
        self.assertEqual(source.SerializeToString(deterministic=True), before)
        return spreadsheet.dataset_workbook_plan(source)

    def test_dataset_id_is_the_first_row_and_every_cell_coordinate_stays_correct(self):
        source = dataset(2)
        plan = self.round_trip(source)
        rows = plan["sheets"][0]["rows"]
        self.assertEqual(rows[0], ["DATASET ID", source.dataset_id])
        self.assertTrue(plan["data_cells"])
        for cell in plan["data_cells"]:
            self.assertEqual(rows[cell["row"] - 1][cell["column"] - 1], cell["value"])
        for index in plan["sheets"][0]["header_rows"]:
            self.assertTrue(any(rows[index - 1]))

    def test_shared_reaction_type_and_conditions_are_common_but_ids_and_yields_vary(self):
        source = dataset(2)
        for index, reaction in enumerate(source.reactions):
            reaction.identifiers.add(type=reaction_pb2.ReactionIdentifier.REACTION_TYPE, value="Pericyclic")
            reaction.outcomes[0].products[0].measurements[0].percentage.value = 90 + index
        rows = self.round_trip(source)["sheets"][0]["rows"]
        r = next(i for i, row in enumerate(rows) if row[0] == "REACTION")
        v = next(i for i, row in enumerate(rows) if row[0] == "VARIANTS")
        d = next(i for i, row in enumerate(rows) if row[0] == "DATA")
        common = [value for row in rows[r + 1:v] for value in row]
        variants = [value for row in rows[v + 1:d] for value in row]
        for field in ("REACTION_TYPE", "Pericyclic", "MECHANOCHEMISTRY", "Frequency (Hz)"):
            self.assertIn(field, common)
            self.assertNotIn(field, variants)
        self.assertIn("REACTION ID", variants)
        self.assertIn("YIELD (%)", variants)
        self.assertNotIn("REACTION ID", common)

    def test_partially_shared_conditions_keep_whole_quantities_in_their_section(self):
        source = dataset(2)
        source.reactions[1].conditions.mechanochemistry.frequency.value = 40
        rows = self.round_trip(source)["sheets"][0]["rows"]
        v = next(i for i, row in enumerate(rows) if row[0] == "VARIANTS")
        self.assertIn("Type", [value for row in rows[:v] for value in row])
        self.assertIn("Frequency (Hz)", [value for row in rows[v:] for value in row])
        self.assertNotIn("Units", [value for row in rows for value in row])

    def test_different_types_are_values_in_variants(self):
        source = dataset(2)
        for reaction, kind in zip(source.reactions, ("Pericyclic", "Coupling")):
            reaction.identifiers.add(type=reaction_pb2.ReactionIdentifier.REACTION_TYPE, value=kind)
        rows = self.round_trip(source)["sheets"][0]["rows"]
        v = next(i for i, row in enumerate(rows) if row[0] == "VARIANTS")
        self.assertNotIn("REACTION_TYPE", [value for row in rows[:v] for value in row])
        self.assertIn("REACTION_TYPE", [value for row in rows[v:] for value in row])

    def test_common_fields_are_computed_per_layout_block(self):
        source = dataset(4)
        for index, reaction in enumerate(source.reactions):
            # Keep the same input shape within each unit-specific block.
            reaction.ClearField("inputs")
            compound = reaction.inputs["source"].components.add(reaction_role=reaction_pb2.ReactionRole.REACTANT)
            compound.identifiers.add(type=reaction_pb2.CompoundIdentifier.SMILES, value="CCO")
            compound.amount.moles.value = 1
            compound.amount.moles.units = (reaction_pb2.Moles.MOLE if index < 2 else reaction_pb2.Moles.MILLIMOLE)
            reaction.identifiers.add(type=reaction_pb2.ReactionIdentifier.REACTION_TYPE,
                                     value="First type" if index < 2 else "Second type")
            reaction.outcomes[0].products[0].measurements[0].percentage.value = index
            reaction.outcomes[0].products[0].ClearField("features")
        rows = self.round_trip(source)["sheets"][0]["rows"]
        self.assertEqual(sum(row[0] == "REACTION" for row in rows), 2)
        self.assertEqual(sum("REACTION_TYPE" in row for row in rows), 2)
        self.assertEqual(sum(row[0] == "DATASET ID" for row in rows), 1)

    def test_repeated_records_and_map_entries_are_never_split(self):
        source = dataset(2)
        for index, reaction in enumerate(source.reactions):
            reaction.identifiers.add(type=reaction_pb2.ReactionIdentifier.REACTION_TYPE, value="Shared")
            reaction.identifiers.add(type=reaction_pb2.ReactionIdentifier.CUSTOM, value=f"Variant {index}")
            reaction.inputs["common"].components.add().CopyFrom(reaction.inputs["00123"].components[0])
            reaction.inputs["00123"].components[0].identifiers[0].value = f"Compound {index}"
        payload = spreadsheet.dataset_payload(source)
        common, variants = spreadsheet.split_common_reaction_values(payload["reactions"])
        self.assertEqual(len(common["identifiers"]), 1)
        self.assertEqual(common["identifiers"][0]["value"], "Shared")
        self.assertTrue(all(len(variant["identifiers"]) == 1 for variant in variants))
        self.assertEqual(set(common["inputs"]), {"common"})
        self.assertTrue(all(set(variant["inputs"]) == {"00123"} for variant in variants))
        plan = self.round_trip(source)
        self.assertTrue(any(cell["path"] == "/identifiers/1/value" for cell in plan["data_cells"]))

    def test_only_identity_varies_and_single_reaction_identity_stays_in_variants(self):
        for count in (1, 2):
            with self.subTest(count=count):
                source = dataset(count)
                plan = self.round_trip(source)
                rows = plan["sheets"][0]["rows"]
                v = next(i for i, row in enumerate(rows) if row[0] == "VARIANTS")
                self.assertEqual([value for value in rows[v + 1][1:] if value], ["REACTION ID"])

    def test_idless_exports_omit_identity_directive_without_inventing_one(self):
        source = dataset(2)
        source.ClearField("dataset_id")
        payload = spreadsheet.serialize_csv(source)
        rows = list(csv.reader(io.StringIO(payload.decode())))
        self.assertFalse(any(row[0] == "DATASET ID" for row in rows))
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "results.csv"
            path.write_bytes(payload)
            actual = spreadsheet.verify_round_trip(source, path)
        self.assertEqual(list(actual.reactions), list(source.reactions))
        self.assertEqual(source.dataset_id, "")


if __name__ == "__main__":
    unittest.main()
