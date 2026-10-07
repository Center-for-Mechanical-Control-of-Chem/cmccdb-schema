"""Descriptor compatibility is stricter than binary parsability alone."""
from google.protobuf import descriptor_pb2
import pytest
from cmccdb_schema.orm import schema_updates


@pytest.mark.parametrize('change', ['remove','renumber','rename','retype','relabel','presence'])
def test_incompatible_descriptor(change):
    old=schema_updates.descriptors()
    new=descriptor_pb2.FileDescriptorSet.FromString(old)
    message=next(m for f in new.file for m in f.message_type if m.name=='MechanochemistryConditions')
    field=message.field[0]
    if change=='remove': del message.field[0]
    if change=='renumber': field.number=999
    if change=='rename': field.name='replacement'
    if change=='retype': field.type=field.TYPE_STRING
    if change=='relabel': field.label=field.LABEL_REPEATED
    if change=='presence': field.oneof_index=len(message.oneof_decl); message.oneof_decl.add(name='new_group')
    assert schema_updates.compatibility(old,new.SerializeToString())


def test_added_optional_field_compatible():
    old=schema_updates.descriptors()
    new=descriptor_pb2.FileDescriptorSet.FromString(old)
    message=next(m for f in new.file for m in f.message_type if m.name=='MechanochemistryConditions')
    field=message.field.add(name='future_condition',number=999,type=descriptor_pb2.FieldDescriptorProto.TYPE_FLOAT,
                            label=descriptor_pb2.FieldDescriptorProto.LABEL_OPTIONAL)
    assert schema_updates.compatibility(old,new.SerializeToString()) == []


def test_enum_renumbering_rejected():
    old=schema_updates.descriptors()
    new=descriptor_pb2.FileDescriptorSet.FromString(old)
    message=next(m for f in new.file for m in f.message_type if m.name=='MechanochemistryConditions')
    message.enum_type[0].value[1].number=999
    assert schema_updates.compatibility(old,new.SerializeToString())
