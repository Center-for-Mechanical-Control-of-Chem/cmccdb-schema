"""String cells use the template's scalar types, rather than their spelling."""

import unittest
from google.protobuf.json_format import ParseDict
from cmccdb_schema.dataset_constructor import DatasetConstructor, ProtoTemplater
from cmccdb_schema.proto import reaction_pb2


def reaction_from_rows(rows):
    width = max(map(len, rows))
    parser, data = DatasetConstructor.from_iter([r + [""] * (width-len(r)) for r in rows])[0]
    values = DatasetConstructor.sanitize_csv_data(data[0], len(parser.template.template_paths), template=parser.template)
    applied = parser.template.apply(values)
    return ParseDict(ProtoTemplater.prep_proto(applied, descriptor=reaction_pb2.Reaction.DESCRIPTOR), reaction_pb2.Reaction())


class StringCellTests(unittest.TestCase):
    def test_numeric_map_key_and_identifier_remain_text(self):
        reaction = reaction_from_rows([
            ["REACTION"], ["", "notes"], ["", "procedure_details"], ["", "NO"],
            ["VARIANTS"], ["", "inputs"], ["", "key", "components"],
            ["", "", "identifiers"], ["", "", "type", "value"],
            ["DATA"], ["", "123", "NAME", "00123"]])
        self.assertEqual(reaction.notes.procedure_details, "NO")
        self.assertEqual(reaction.inputs["123"].components[0].identifiers[0].value, "00123")

    def test_boolean_and_zero_still_have_numeric_types(self):
        reaction = reaction_from_rows([
            ["REACTION"], ["", "notes"], ["", "procedure_details"], ["", "FALSE"],
            ["VARIANTS"], ["", "conditions"], ["", "mechanochemistry"],
            ["", "number_of_balls", "liquid_assisted"], ["DATA"], ["", "0", "FALSE"]])
        self.assertEqual(reaction.notes.procedure_details, "FALSE")
        self.assertTrue(reaction.conditions.mechanochemistry.HasField("number_of_balls"))
        self.assertEqual(reaction.conditions.mechanochemistry.number_of_balls, 0)
        self.assertTrue(reaction.conditions.mechanochemistry.HasField("liquid_assisted"))
        self.assertFalse(reaction.conditions.mechanochemistry.liquid_assisted)

    def test_repeated_scalar_text_remains_ordered_text(self):
        reaction = reaction_from_rows([
            ["REACTION"], ["", "notes"], ["", "procedure_details"], ["", "test"],
            ["VARIANTS"], ["", "conditions"], ["", "mechanochemistry"],
            ["", "geometry", "geometry", "geometry"], ["DATA"], ["", "NO", "00123", "FALSE"]])
        self.assertEqual(list(reaction.conditions.mechanochemistry.geometry), ["NO", "00123", "FALSE"])

    def test_raw_sanitizer_api_remains_compatible(self):
        self.assertEqual(DatasetConstructor.sanitize_csv_data(["FALSE", "1", "1.25"]), [False, 1, 1.25])


if __name__ == "__main__":
    unittest.main()
