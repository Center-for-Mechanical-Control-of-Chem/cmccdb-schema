#!/bin/bash
# Copyright 2022 Open Reaction Database Project Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Compiles protocol buffers.
# Make sure you have protoc in your PATH; see https://grpc.io/docs/protoc-installation/.
set -euo pipefail
cd "$(dirname "$0")"
: "${PYTHON:?Set PYTHON to the interpreter containing the schema dependencies}"
PROTOC="${PROTOC:-protoc}"
build_dir="$(mktemp -d "$PWD/.proto-build.XXXXXX")"
trap 'rm -rf "$build_dir"' EXIT
"$PROTOC" \
  --proto_path=.. \
  --python_out="$build_dir" \
  --pyi_out="$build_dir" \
  --js_out=import_style=commonjs,binary:js \
  ../cmccdb-schema/proto/reaction.proto \
  ../cmccdb-schema/proto/dataset.proto \
  ../cmccdb-schema/proto/test.proto
cp "$build_dir"/cmccdb_schema/proto/*_pb2.py "$build_dir"/cmccdb_schema/proto/*_pb2.pyi cmccdb_schema/proto/
cp proto/{reaction,dataset,test}.proto js/cmccdb-schema/proto/
"$PYTHON" patch_proto.py
"$PYTHON" write_proto_json.py

#echo 'WARNING: due to current code structure, you will need to run `protoParsing.nb` to rebuild `parallel_proto.py`'
#echo 'WARNING: due to Google proto version issues, you will need to edit `cmccdb_schema/proto/dataset_pb2.py` and `cmccdb_schema/proto/reaction_pb2.py`'
