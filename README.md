# Mechanochemistry Reaction Database: Schema (cmccdb-schema)

This repository contains the schema for the Mechanochemistry Reaction Database fork of the Open Reaction Database initiative

This package is designed to make it easier to convert a 

`ord-schema` is
designed to store the database schema and tools for creating, validating, and submitting data to the database.

## Installation

```shell
$ pip install ord-schema
```

## Examples

The `examples/` directory contains examples of dataset creation and use. To run locally, install with:

```shell
$ pip install "ord-schema[examples]"
```

Click here to run the examples with Binder:
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/open-reaction-database/ord-schema/HEAD?labpath=examples)

## Development

To install in editable/development mode:

```shell
$ git clone https://github.com/open-reaction-database/ord-schema.git
$ cd ord-schema
$ pip install -e .
```

If you make changes to the protocol buffer definitions, [install](https://grpc.io/docs/protoc-installation/) `protoc`
and run `./compile_proto_wrappers.sh` to rebuild the wrappers.

## Conventions

### 1. convention: compound stoichiometry

##### Created: 2023.07.04

##### Last updated: 2023.07.04

##### Description: 
1. The preferred field for compound stoichiometry is the map `Compound.features` or `ProductCompound.features`.
2. The key should be "stoichiometric_coefficient" or "stoichiometric_ratio".
3. The value should be a `Data` message with its `float_value` representing the compound's stoichiometric 
coefficient or ratio.

##### Related links: 
[#683](https://github.com/open-reaction-database/ord-schema/issues/683) 
[#684](https://github.com/open-reaction-database/ord-schema/pull/684)