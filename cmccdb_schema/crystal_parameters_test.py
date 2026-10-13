"""Compatible source crystal metadata and unit conversion tests."""
import unittest
from google.protobuf.json_format import ParseDict, MessageToDict
from cmccdb_schema import units, validations
from cmccdb_schema.proto import reaction_pb2

class CrystalParametersTests(unittest.TestCase):
    def test_absence_remains_absent_and_tags_are_compatible(self):
        product=reaction_pb2.ProductCompound();self.assertFalse(product.HasField('crystal_parameters'))
        self.assertNotIn('crystal_parameters',MessageToDict(product,preserving_proto_field_name=True))
        self.assertEqual(product.DESCRIPTOR.fields_by_name['crystal_parameters'].number,100)
        self.assertEqual(reaction_pb2.Compound.DESCRIPTOR.fields_by_name['crystal_parameters'].number,100)
        self.assertEqual(product.DESCRIPTOR.fields_by_name['reaction_role'].number,7)
        self.assertEqual(reaction_pb2.Length.FOOT,5);self.assertEqual(reaction_pb2.Length.ANGSTROM,6)

    def test_source_product_crystal_json_and_binary_roundtrip(self):
        # Synthetic unit fixture only; no scientific CSD/cell inference.
        source=dict(identifiers=[dict(type='NAME',value='Fixture crystal')],crystal_parameters=dict(type='CUSTOM',details='Synthetic test data.',database_identifier=dict(type='CSD',value='1234567'),a=dict(value=4.25,units='ANGSTROM'),alpha=dict(value=90,units='DEGREES')))
        product=ParseDict(source,reaction_pb2.ProductCompound());restored=reaction_pb2.ProductCompound.FromString(product.SerializeToString())
        self.assertEqual(restored,product);self.assertEqual(MessageToDict(restored,preserving_proto_field_name=True),source)
        result=validations.validate_message(product,raise_on_error=False,options=validations.ValidationOptions(require_provenance=False))
        self.assertEqual(result.errors,[])

    def test_angstrom_aliases_and_existing_length_units(self):
        resolver=units.UnitResolver()
        for alias in ['Å','Å','angstrom','angstroms']:
            cls,num=resolver.resolve_unit(alias);self.assertIs(cls,reaction_pb2.Length);self.assertEqual(num,reaction_pb2.Length.ANGSTROM)
        value=reaction_pb2.Length(value=5,precision=.1,units=reaction_pb2.Length.ANGSTROM)
        centimeter=resolver.convert(value,reaction_pb2.Length.CENTIMETER);self.assertAlmostEqual(centimeter.value,5e-8,places=14)
        back=resolver.convert(centimeter,reaction_pb2.Length.ANGSTROM);self.assertAlmostEqual(back.value,5);self.assertAlmostEqual(back.precision,.1)
        self.assertAlmostEqual(resolver.convert(reaction_pb2.Length(value=10,units=reaction_pb2.Length.MILLIMETER),reaction_pb2.Length.CENTIMETER).value,1)

if __name__=='__main__':unittest.main()
