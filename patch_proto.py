import os


def patch_google_runtime_info(file):
    with open(file) as f:
        text = f.read()
    text = text.replace(
        "from google.protobuf import runtime_version as _runtime_version",
        (
                "# from google.protobuf import runtime_version as _runtime_version" 
                "\nfrom .runtime_shim import _runtime_version"
        )
    )
    with open(file, 'w+') as f:
        f.write(text)

cur_dir = os.getcwd()
try:
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    for file in [
        "cmccdb_schema/proto/dataset_pb2.py",
        "cmccdb_schema/proto/reaction_pb2.py",
    ]:
        print(f"PATCHING: {file}")
        patch_google_runtime_info(file)
finally:
    os.chdir(cur_dir)