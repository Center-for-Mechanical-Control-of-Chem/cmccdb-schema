"""Readable exporter grammar, ambiguity guards and native import fidelity."""
import io
import json
import unittest
import zipfile
from google.protobuf.json_format import ParseDict
from cmccdb_schema import dataset_constructor as constructor, spreadsheet
from cmccdb_schema.proto import reaction_pb2
from cmccdb_schema.spreadsheet_test import dataset


def reaction_from_headers(headers, values):
    template = constructor.DatasetConstructor.setup_template([], headers)
    text = [str(value) for value in values]
    applied = template.apply(constructor.DatasetConstructor.sanitize_csv_data(
        text, len(template.template_paths), template=template))
    return ParseDict(constructor.ProtoTemplater.prep_proto(applied,
        descriptor=reaction_pb2.Reaction.DESCRIPTOR), reaction_pb2.Reaction())


class HeaderGrammarTests(unittest.TestCase):
    def test_refined_identifier_keeps_one_record_and_its_details(self):
        actual = reaction_from_headers([
            ["REACTANT"], ["SMILES"], ["Value", "Details"]], ["CCO", "Source identifier"])
        identifiers = actual.inputs["inputs-0"].components[0].identifiers
        self.assertEqual(len(identifiers), 1)
        self.assertEqual(identifiers[0].type, reaction_pb2.CompoundIdentifier.SMILES)
        self.assertEqual(identifiers[0].value, "CCO")
        self.assertEqual(identifiers[0].details, "Source identifier")

    def test_inline_units_allow_explicit_value_and_precision_columns(self):
        actual = reaction_from_headers([
            ["MECHANOCHEMISTRY"],
            ["Frequency (Hz)", "", "Ball Radius (cm)"],
            ["Value", "Precision", "Value", "Precision"]], [30, 0.1, 0.25, 0.01])
        mc = actual.conditions.mechanochemistry
        self.assertEqual(mc.frequency.value, 30)
        self.assertAlmostEqual(mc.frequency.precision, 0.1)
        self.assertEqual(mc.frequency.units, reaction_pb2.Frequency.HERTZ)
        self.assertAlmostEqual(mc.ball_radius.value, 0.25)
        self.assertAlmostEqual(mc.ball_radius.precision, 0.01)
        self.assertEqual(mc.ball_radius.units, reaction_pb2.Length.CENTIMETER)

    def test_value_message_leaf_works_in_variants_with_literal_text(self):
        actual = reaction_from_headers([["Record Created"], ["Time", "Name"]],
                                       ["2026-10-20T12:00:00.000001+0000", "00123"])
        self.assertEqual(actual.provenance.record_created.time.value, "2026-10-20T12:00:00.000001+0000")
        self.assertEqual(actual.provenance.record_created.person.name, "00123")

    def test_uniquely_located_repeated_headers_keep_separate_compounds(self):
        actual = reaction_from_headers([
            ["WORKUPS"], ["Components", "", "Components"],
            ["NAME", "SMILES", "NAME"]], ["ethyl acetate", "CCOC(C)=O", "petroleum ether"])
        compounds = actual.workups[0].input.components
        self.assertEqual(len(compounds), 2)
        self.assertEqual([i.value for i in compounds[0].identifiers], ["ethyl acetate", "CCOC(C)=O"])
        self.assertEqual([i.value for i in compounds[1].identifiers], ["petroleum ether"])


class ReadableExportTests(unittest.TestCase):
    def test_low_level_coordinate_layout_remains_available_to_annotated_workbook_consumers(self):
        source = dataset()
        canonical = spreadsheet.spreadsheet_rows(source)
        readable = spreadsheet.spreadsheet_rows(source, readable=True)
        self.assertTrue(any(cell["path"].endswith("/units") for cell in canonical[1]))
        self.assertFalse(any(cell["path"].endswith("/units") for cell in readable[1]))
        self.assertIn("MECHANOCHEMISTRY", [value for row in readable[0] for value in row])

    def assert_round_trip(self, source):
        before = source.SerializeToString(deterministic=True)
        payload = spreadsheet.serialize_csv_bundle(source)
        actual = spreadsheet.load_csv_bundle(payload)
        self.assertEqual(actual.dataset_id, source.dataset_id)
        self.assertEqual({r.reaction_id: r for r in actual.reactions}, {r.reaction_id: r for r in source.reactions})
        self.assertEqual(source.SerializeToString(deterministic=True), before)
        return payload

    def test_authored_workbook_style_role_unit_condition_and_provenance_headers(self):
        source = dataset()
        source.reactions[0].provenance.doi = "10.1000/readable"
        source.reactions[0].provenance.publication_url = "https://doi.org/10.1000/readable"
        payload = self.assert_round_trip(source)
        with zipfile.ZipFile(io.BytesIO(payload)) as archive:
            text = archive.read("reactions.csv").decode()
        for label in ("REACTANT", "PRODUCT", "MECHANOCHEMISTRY", "Frequency (Hz)", "Amount (g)",
                      "YIELD (%)", "DOI", "Publication URL", "REACTION ID", "DATASET ID"):
            self.assertIn(label, text)
        for internal in ("reaction_role", "identifiers", "provenance", ",units", ",GRAM", ",HERTZ"):
            self.assertNotIn(internal, text)

    def test_quantities_preserve_value_unit_and_precision_without_rescaling(self):
        source = dataset()
        compound = source.reactions[0].inputs["00123"].components[0]
        compound.amount.mass.precision = 0.001
        source.reactions[0].conditions.mechanochemistry.frequency.precision = 0.01
        source.reactions[0].outcomes[0].products[0].measurements[0].percentage.precision = 0.2
        source.reactions[0].conditions.mechanochemistry.ball_radius.CopyFrom(
            reaction_pb2.Length(value=0.25, units=reaction_pb2.Length.CENTIMETER, precision=0.005))
        compound.crystal_parameters.a.CopyFrom(reaction_pb2.Length(value=12.4366,
            units=reaction_pb2.Length.ANGSTROM, precision=0.0004))
        self.assert_round_trip(source)

    def test_mixed_units_and_roles_are_encoded_in_distinct_block_headers(self):
        source = dataset(2)
        first = source.reactions[0].inputs["00123"].components[0]
        first.amount.ClearField("mass")
        first.amount.moles.CopyFrom(reaction_pb2.Moles(value=0.0002, units=reaction_pb2.Moles.MOLE))
        second = source.reactions[1].inputs["00123"].components[0]
        second.amount.ClearField("mass")
        second.amount.moles.CopyFrom(reaction_pb2.Moles(value=0.2, units=reaction_pb2.Moles.MILLIMOLE))
        second.reaction_role = reaction_pb2.ReactionRole.CATALYST
        payload = self.assert_round_trip(source)
        with zipfile.ZipFile(io.BytesIO(payload)) as archive:
            text = archive.read("reactions.csv").decode()
        self.assertIn("Amount (mol)", text)
        self.assertIn("Amount (mmol)", text)
        self.assertIn("CATALYST", text)
        self.assertEqual(text.count("#! End of reaction block"), 2)

    def test_map_keys_and_repeated_roles_identifiers_outcomes_and_workups_are_preserved(self):
        source = dataset(6)
        rxn = source.reactions[0]
        compound = rxn.inputs["00123"].components[0]
        compound.identifiers.add(type=reaction_pb2.CompoundIdentifier.NAME, value="second name", details="Keep detail")
        rxn.inputs["00123"].components.add().CopyFrom(compound)
        rxn.inputs["other/key~name"].components.add().CopyFrom(compound)
        outcome = rxn.outcomes.add(); outcome.CopyFrom(rxn.outcomes[0])
        outcome.products[0].identifiers[0].value = "different product"
        workup = rxn.workups.add(type=reaction_pb2.ReactionWorkup.FILTRATION)
        for names in (["ethyl acetate", "EtOAc"], ["petroleum ether"]):
            component = workup.input.components.add()
            for name in names:
                component.identifiers.add(type=reaction_pb2.CompoundIdentifier.NAME, value=name)
        self.assert_round_trip(source)

    def test_ambiguous_temperature_fields_keep_their_context(self):
        source = dataset()
        temperature = reaction_pb2.Temperature(value=25, units=reaction_pb2.Temperature.CELSIUS)
        source.reactions[0].conditions.temperature.setpoint.CopyFrom(temperature)
        source.reactions[0].workups.add(type=reaction_pb2.ReactionWorkup.FILTRATION).temperature.setpoint.CopyFrom(temperature)
        self.assert_round_trip(source)

    def test_unspecified_units_are_preserved_instead_of_invented(self):
        source = dataset()
        source.reactions[0].conditions.mechanochemistry.frequency.units = reaction_pb2.Frequency.UNSPECIFIED
        self.assert_round_trip(source)

    def test_different_creation_times_are_preserved_in_variant_cells(self):
        source = dataset(2)
        source.reactions[1].provenance.record_created.time.value = "2026-10-20T17:08:09.000001+0000"
        self.assert_round_trip(source)

    def test_inline_identifier_details_and_attachment_pointers_survive(self):
        source = dataset(3)
        source.reactions[0].inputs["00123"].components[0].identifiers[0].details = "Literal identifier detail"
        attachment = source.reactions[0].provenance.reaction_metadata["attachment:raw.bin"]
        attachment.bytes_value = b"\x00\xfforiginal-file"; attachment.format = "bin"
        payload = self.assert_round_trip(source)
        with zipfile.ZipFile(io.BytesIO(payload)) as archive:
            manifest = json.loads(archive.read("manifest.json"))
            self.assertTrue(any(archive.read(ref["file"]) == attachment.bytes_value for ref in manifest["attachments"]))


if __name__ == "__main__":
    unittest.main()
