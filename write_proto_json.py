
import cmccdb_schema.proto.reaction_pb2
from cmccdb_schema.dataset_constructor import ProtoHandler

def build_proto_tree(root):
    if ProtoHandler.is_enum_type(root):
        return {'allowedFields':ProtoHandler.enum_vals_iter()}
    elif isinstance(root, type):
        return root
    else:
        return {
            p.name:build_proto_tree(p.type)
            for p in ProtoHandler.field_iter(root)
        }

print(build_proto_tree(cmccdb_schema.proto.reaction_pb2.Reaction))