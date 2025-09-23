
import cmccdb_schema.proto.reaction_pb2
from cmccdb_schema.dataset_constructor import ProtoHandler, ProtoType
import re

def camelCase(name):
    return "".join(b.capitalize() for b in name.split("_"))

def build_proto_tree(root):

    if ProtoHandler.is_enum_type(root):
        return {'allowedValues':dict(ProtoHandler.enum_num_iter(root))}
    else:
        oneofs = ProtoHandler.oneof_iter(root)
        if len(oneofs) == 1 and oneofs[0].__name__ == "kind":
            return {
                camelCase(oneofs[0].__name__) + "Case":build_proto_tree(oneofs[0])
            }
        else:
            if isinstance(root, ProtoType):
                root = root.value_type
            if isinstance(root, type) and root in {str, float, bool, int, bytes}:
                return {str:"string", float:"float", bool:"bool", int:"int", bytes:"ByteArray"}[root]
            else:
                return {
                    camelCase(p.name):build_proto_tree(p.type)
                    for p in ProtoHandler.field_iter(root)
                }

import json
with open("js/cmccdb-schema/reaction_pb.json", 'w+') as pbjson:
    json.dump(build_proto_tree(cmccdb_schema.proto.reaction_pb2.Reaction), pbjson)
# pprint.pprint(build_proto_tree(cmccdb_schema.proto.reaction_pb2.Reaction))