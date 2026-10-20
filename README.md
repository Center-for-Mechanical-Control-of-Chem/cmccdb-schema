# Mechanochemistry Reaction Database: Schema (cmccdb-schema)

This repository contains the schema for the Mechanochemistry Reaction Database fork of the Open Reaction Database initiative

## Dataset protobuf to CSV with attachment files, or Excel

`cmccdb_schema.spreadsheet` owns both directions of the CSV/XLSX export round trip:
protobuf-driven headers/rows, Dataset metadata, the packaged XLSX writer, and
verification through the native `DatasetConstructor` importer. It does not
require `cmccdb-data`, an extraction run, MCP, an LLM, or a database.

```python
from cmccdb_schema import message_helpers
from cmccdb_schema.proto import dataset_pb2
from cmccdb_schema.spreadsheet import export_dataset

dataset = message_helpers.load_message("dataset.pb.gz", dataset_pb2.Dataset)
receipt = export_dataset(dataset, "dataset.zip")  # CSV + attachment files; Python only
```

The same operation is available from the command line after installing this
package:

```bash
cmccdb-export-spreadsheet dataset.pb.gz dataset.zip
# Equivalent module invocation:
python -m cmccdb_schema.scripts.export_spreadsheet dataset.pb.gz dataset.zip
```

The existing loader accepts `.pb`, `.pbtxt`, `.json` and their `.gz` forms. The
Dataset must contain embedded reactions and stable, unique reaction IDs;
reference-only `reaction_ids` datasets are rejected rather than resolved or
silently omitted. Each export preserves the source message and checks all
Dataset metadata and every populated Reaction field by ID. Grouping compatible headers
may reorder rows. This checks transport fidelity, not scientific correctness.

CSV uses Python's standard CSV writer and the native importer. It does not call
Node, write an XLSX intermediary, or require Artifact Tool. Web CSV downloads use
`serialize_csv_bundle(dataset)` and return a `.zip` containing:

- `reactions.csv`, with relative file references instead of base64 attachment cells;
- `attachments/<sha256>/<filename>`, preserving file bytes separately;
- `manifest.json`, associating files with reaction IDs and schema field paths,
  with sizes, checksums, original reference kinds and original local URLs.

`load_csv_bundle(payload)` reads that format and restores attachment bytes to a
portable Dataset. Each export verifies the CSV, file contents and reconstructed
Dataset before publication. Hash directories prevent same-named files with
different contents from colliding. Identical content/name pairs share one file.
Source protobufs are never mutated. Standalone `.csv`/`serialize_csv(dataset)`
is available for records without attachments and rejects embedded bytes or
unresolved local files with instructions to use `.zip` instead.

Local Data.url files require an explicit `resolve_attachment(reaction_id, url)`
callback returning bytes. The web interface uses its existing file resolver,
with each reaction's original dataset ID. Missing/ambiguous local files fail
with a diagnostic; remote URLs remain links and are never downloaded.
The standalone CLI supports embedded attachments; for local URL files use the
Python API with an authorized resolver. Native ZIP loading does not add ZIP
upload support to the web application.

CSV contains CMCCDB's hierarchical
REACTION/VARIANTS/DATA blocks, rather than a flat reaction summary table.

Standalone exports use the authored spreadsheet grammar: REACTANT/REAGENT/
SOLVENT/CATALYST and PRODUCT group headings, NAME/SMILES/CSD identifier headings,
inline units such as `Amount (mmol)` and `Frequency (Hz)`, `YIELD (%)`, and
condition sections such as MECHANOCHEMISTRY. Provenance uses unambiguously
resolved fields such as DOI, Publication URL and Record Created. Values and
stored units are preserved without rescaling. Different roles, identifier types
or units produce distinct header blocks.

The exporter asks the native importer where a shorthand resolves before
removing its containing path. Ambiguous fields keep enough context to identify
their location; map keys and repeated-record boundaries are preserved. Explicit
Value/Details and Value/Precision refinements preserve metadata alongside a
typed or unit-bearing header. The matching importer fixes are required when
re-importing these refinements.

For annotated workbook consumers, low-level `spreadsheet_rows()` and
`reaction_sheet()` retain their established cell-coordinate layout by default.
Pass `readable=True` to those APIs to request the same human layout used by
standalone CSV/ZIP/XLSX exports. The raw `flatten()` API is unchanged.

Optional `.xlsx` output (and the legacy `cmccdb-export-xlsx` command) uses the
existing separately provisioned Node
`@oai/artifact-tool` runtime. Set `CMCCDB_XLSX_NODE` (or pass `--node`) and
`NODE_PATH` for that compatible runtime. Installing this Python package does
not install Node or the artifact package. `spreadsheet_capabilities()` reports
backend availability. Backend limits remain `CMCCDB_XLSX_HEAP_MIB` and
`CMCCDB_XLSX_TIMEOUT_SECONDS`; invalid limits fail explicitly.

The standalone workbook has one editable `ReactionData` sheet. CSV and XLSX
exports carry a `DATASET ID` directive with the full ID in the following column,
when the source has a dataset ID. This directive is the first row of standalone
exports. Search-result datasets without an ID omit it;
import assigns a fresh dataset ID. Reaction IDs use a `REACTION ID` VARIANTS
header. Literal metadata comments carry name/description.

Readable exports place eligible values shared by every reaction in each layout
block under `REACTION`, including `REACTION_TYPE` and provenance. Inputs,
outcomes (including products), and observations always stay under `VARIANTS`.
Conditions stay there too when a block contains just one reaction; conditions
can be common only for blocks with multiple reactions. Repeated common records
share only an unchanged leading sequence; map entries move as whole records.
This preserves ordering and the native importer's common/variant merge rules.
Quantities with different values stay intact, including their inline units.
Low-level canonical layouts retain their existing behavior.

Maps use their literal keys as column headers, rather than a Key column paired
with String Value or Float Value columns. Data-valued entries declare their kind
inline, e.g. `reported-mol {float}` or `label {string}`. A simple value is directly
below its header. Entries with metadata use Value, Description and Format child
columns. Structured maps (inputs, analyses) use key headers above the normal
message columns. Quoted headers such as `["Key"]` preserve reserved names and
punctuation. The importer also accepts simple untyped key headers and retains
support for legacy Key/value columns. See the spreadsheet metadata documentation
for examples and type rules.
`verify_round_trip(dataset, workbook)` reads identity from the exported file;
it does not supply a replacement ID that could conceal a missing directive.
See [spreadsheet metadata and identity](docs/spreadsheet-metadata.md) for import
precedence and examples. Preserving identity does not enable database overwrites.

Valueless optional message wrappers and entirely empty repeated-message fields
may disappear during conversion. This does not discard populated scientific
values. Empty oneof selections and empty positions in mixed repeated lists remain
significant in verification; loss of those is rejected.
No source text is silently trimmed. Values that cannot survive the existing
converter or Excel limits fail export rather than being changed or truncated.
An existing output is preserved by default; `--force`/`overwrite=True` replaces
it only after the new file passes verification.

The extraction harness calls this module for schema layout, writing and
round-trip verification. Its evidence, review, figure annotations and attachment
transport remain in `cmccdb-data`. Other applications can use the generic
`reaction_sheet()`, `dataset_metadata_rows()`, `write_workbook()` and
`verify_round_trip()` APIs to add their own presentation without implementing
a second schema converter.

## Draft crystal structure compatibility change

`Compound.crystal_parameters` remains tag 100. `ProductCompound` now supports the
same optional `CrystalParameters` field at tag 100. Existing binary fields and
message tags are unchanged. `LengthUnit.ANGSTROM=6` adds the standard crystal cell
unit (1e-8 centimeter); Å, Å, angstrom and angstroms resolve through UnitResolver.
No cell, CSD identity or periodic molecular graph is generated by the schema.

Generated wrappers must be updated with the existing `compile_proto_wrappers.sh`
pipeline, using `PYTHON` for the configured dependency interpreter and `PROTOC`
for the established compiler. It produces Python/pyi/JS files, runs `patch_proto.py`
without disabling runtime validation, and regenerates `reaction_pb.json` through
`write_proto_json.py`. The separate chemistry review layer in the extraction
harness binds source-reviewed identities to current claims/data; schema validation
alone does not constitute scientific approval.
