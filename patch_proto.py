"""Check generated wrappers without bypassing Protobuf runtime validation."""
from pathlib import Path
import re
from cmccdb_schema.proto import dataset_pb2, reaction_pb2, test_pb2


def preserve_js_presence(path, descriptor):
    """Keep unset optional/oneof scalars undefined in jspb.toObject()."""
    source = path.read_text()

    def visit(message):
        nonlocal source
        symbol = 'proto.' + message.full_name
        pattern = re.compile(re.escape(symbol) + r'\.toObject = function\(includeInstance, msg\) \{.*?\n\};', re.S)

        def patch_object(match):
            body = match.group()
            for field in message.fields:
                if not field.has_presence or field.message_type is not None:
                    continue
                getter = ''.join(part.capitalize() for part in field.name.split('_'))
                key = field.json_name
                line = re.compile(r'(^\s+' + re.escape(key) + r': )([^\n]+)', re.M)
                def patch_value(value):
                    expression = value[2]
                    comma = ',' if expression.endswith(',') else ''
                    expression = expression.removesuffix(',')
                    if not expression.startswith('msg.has' + getter + '() ?'):
                        expression = f'msg.has{getter}() ? {expression} : undefined'
                    return value[1] + expression + comma
                body = line.sub(patch_value, body)
            return body

        source = pattern.sub(patch_object, source)
        for child in message.nested_types:
            if not child.GetOptions().map_entry:
                visit(child)

    for message in descriptor.message_types_by_name.values():
        visit(message)
    path.write_text(source)


def main():
    root = Path(__file__).resolve().parent / "cmccdb_schema" / "proto"
    for name in ("dataset_pb2.py", "reaction_pb2.py", "test_pb2.py"):
        if "runtime_shim" in (root / name).read_text():
            raise RuntimeError(f"{name} bypasses the Protobuf runtime check; regenerate it")
    print("Generated wrappers imported with Protobuf runtime validation enabled")
    js_root = root.parents[1] / 'js' / 'cmccdb-schema' / 'proto'
    for name, descriptor in [('reaction_pb.js', reaction_pb2.DESCRIPTOR), ('dataset_pb.js', dataset_pb2.DESCRIPTOR)]:
        preserve_js_presence(js_root / name, descriptor)


if __name__ == "__main__":
    main()
