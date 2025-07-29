cd /tmp

PB_VERSION=27.3
PB_REL="https://github.com/protocolbuffers/protobuf/releases"
curl -LO $PB_REL/download/v$PB_VERSION/protoc-$PB_VERSION-linux-x86_64.zip
unzip protoc-$PB_VERSION-linux-x86_64.zip -d /usr/local


PB_JS_VERSION=3.21.4
PB_JS="https://github.com/protocolbuffers/protobuf-javascript/releases"
curl -LO $PB_JS/download/v$PB_JS_VERSION/protobuf-javascript-$PB_JS_VERSION-linux-x86_64.zip
unzip protobuf-javascript-$PB_JS_VERSION-linux-x86_64.zip -d /usr/local

mkdir -p /home/cmccdb-dependencies/google-protobuf
cp /usr/local/package.json /home/cmccdb-dependencies/google-protobuf
cp -r /usr/local/google /home/cmccdb-dependencies/google-protobuf