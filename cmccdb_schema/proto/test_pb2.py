# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: cmccdb-schema/proto/test.proto
# Protobuf Python Version: 5.27.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    27,
    3,
    '',
    'cmccdb-schema/proto/test.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1e\x63mccdb-schema/proto/test.proto\x12\x08ord_test\"\xaf\x01\n\x06Scalar\x12\x13\n\x0bint32_value\x18\x01 \x01(\x05\x12\x13\n\x0bint64_value\x18\x02 \x01(\x03\x12\x18\n\x0b\x66loat_value\x18\x03 \x01(\x02H\x00\x88\x01\x01\x12\x14\n\x0cstring_value\x18\x04 \x01(\t\x12\x13\n\x0b\x62ytes_value\x18\x05 \x01(\x0c\x12\x17\n\nbool_value\x18\x06 \x01(\x08H\x01\x88\x01\x01\x42\x0e\n\x0c_float_valueB\r\n\x0b_bool_value\" \n\x0eRepeatedScalar\x12\x0e\n\x06values\x18\x01 \x03(\x02\"f\n\x04\x45num\x12(\n\x05value\x18\x01 \x01(\x0e\x32\x19.ord_test.Enum.EnumValues\"4\n\nEnumValues\x12\x0f\n\x0bUNSPECIFIED\x10\x00\x12\t\n\x05\x46IRST\x10\x01\x12\n\n\x06SECOND\x10\x02\"w\n\x0cRepeatedEnum\x12\x31\n\x06values\x18\x01 \x03(\x0e\x32!.ord_test.RepeatedEnum.EnumValues\"4\n\nEnumValues\x12\x0f\n\x0bUNSPECIFIED\x10\x00\x12\t\n\x05\x46IRST\x10\x01\x12\n\n\x06SECOND\x10\x02\"V\n\x06Nested\x12%\n\x05\x63hild\x18\x01 \x01(\x0b\x32\x16.ord_test.Nested.Child\x1a%\n\x05\x43hild\x12\x12\n\x05value\x18\x01 \x01(\x02H\x00\x88\x01\x01\x42\x08\n\x06_value\"i\n\x0eRepeatedNested\x12\x30\n\x08\x63hildren\x18\x01 \x03(\x0b\x32\x1e.ord_test.RepeatedNested.Child\x1a%\n\x05\x43hild\x12\x12\n\x05value\x18\x01 \x01(\x02H\x00\x88\x01\x01\x42\x08\n\x06_value\"_\n\x03Map\x12)\n\x06values\x18\x01 \x03(\x0b\x32\x19.ord_test.Map.ValuesEntry\x1a-\n\x0bValuesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\xb3\x01\n\tMapNested\x12\x33\n\x08\x63hildren\x18\x01 \x03(\x0b\x32!.ord_test.MapNested.ChildrenEntry\x1a%\n\x05\x43hild\x12\x12\n\x05value\x18\x01 \x01(\x02H\x00\x88\x01\x01\x42\x08\n\x06_value\x1aJ\n\rChildrenEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12(\n\x05value\x18\x02 \x01(\x0b\x32\x19.ord_test.MapNested.Child:\x02\x38\x01\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'cmccdb_schema.proto.test_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_MAP_VALUESENTRY']._loaded_options = None
  _globals['_MAP_VALUESENTRY']._serialized_options = b'8\001'
  _globals['_MAPNESTED_CHILDRENENTRY']._loaded_options = None
  _globals['_MAPNESTED_CHILDRENENTRY']._serialized_options = b'8\001'
  _globals['_SCALAR']._serialized_start=45
  _globals['_SCALAR']._serialized_end=220
  _globals['_REPEATEDSCALAR']._serialized_start=222
  _globals['_REPEATEDSCALAR']._serialized_end=254
  _globals['_ENUM']._serialized_start=256
  _globals['_ENUM']._serialized_end=358
  _globals['_ENUM_ENUMVALUES']._serialized_start=306
  _globals['_ENUM_ENUMVALUES']._serialized_end=358
  _globals['_REPEATEDENUM']._serialized_start=360
  _globals['_REPEATEDENUM']._serialized_end=479
  _globals['_REPEATEDENUM_ENUMVALUES']._serialized_start=306
  _globals['_REPEATEDENUM_ENUMVALUES']._serialized_end=358
  _globals['_NESTED']._serialized_start=481
  _globals['_NESTED']._serialized_end=567
  _globals['_NESTED_CHILD']._serialized_start=530
  _globals['_NESTED_CHILD']._serialized_end=567
  _globals['_REPEATEDNESTED']._serialized_start=569
  _globals['_REPEATEDNESTED']._serialized_end=674
  _globals['_REPEATEDNESTED_CHILD']._serialized_start=530
  _globals['_REPEATEDNESTED_CHILD']._serialized_end=567
  _globals['_MAP']._serialized_start=676
  _globals['_MAP']._serialized_end=771
  _globals['_MAP_VALUESENTRY']._serialized_start=726
  _globals['_MAP_VALUESENTRY']._serialized_end=771
  _globals['_MAPNESTED']._serialized_start=774
  _globals['_MAPNESTED']._serialized_end=953
  _globals['_MAPNESTED_CHILD']._serialized_start=530
  _globals['_MAPNESTED_CHILD']._serialized_end=567
  _globals['_MAPNESTED_CHILDRENENTRY']._serialized_start=879
  _globals['_MAPNESTED_CHILDRENENTRY']._serialized_end=953
# @@protoc_insertion_point(module_scope)