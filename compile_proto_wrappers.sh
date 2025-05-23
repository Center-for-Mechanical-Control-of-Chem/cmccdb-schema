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
set -ex
protoc \
  --proto_path=.. \
  --python_out=. \
  --pyi_out=. \
  --js_out=import_style=commonjs,binary:js \
  ../cmccdb-schema/proto/*.proto

python patch_proto.py

#echo 'WARNING: due to current code structure, you will need to run `protoParsing.nb` to rebuild `parallel_proto.py`'
#echo 'WARNING: due to Google proto version issues, you will need to edit `cmccdb_schema/proto/dataset_pb2.py` and `cmccdb_schema/proto/reaction_pb2.py`'
