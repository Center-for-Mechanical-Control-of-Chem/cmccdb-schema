# Dataset metadata in spreadsheets

The converter accepts optional reserved comment rows on any worksheet or in a
rectangular CSV. The four cells are:

| A | B | C | D |
| --- | --- | --- | --- |
| `#!` | `Dataset (v1)` | `name` | Human-readable dataset name |
| `#!` | `Dataset (v1)` | `description` | Literal dataset description |

Only `name` and `description` are accepted. Values retain their literal text,
including whitespace, newlines and numeric-looking strings. Identical duplicates
across worksheets are allowed; conflicting values or nonempty extra cells are
rejected. IDs cannot be overridden through these comments. Normal REACTION,
VARIANTS and DATA blocks continue to work unchanged.

An explicit `name` argument to `enumerate_spreadsheet` takes precedence over the
workbook name. Without that argument, the workbook name is used if supplied,
otherwise `default_name` supplies a fallback, or the existing file-stem default
applies when no fallback is supplied. The native CLI provides
`--fallback-dataset-name` for upload/batch callers that keep the original filename
while parsing a temporary file. `--dataset-name` remains an explicit override.
A missing description stays empty for legacy files.

## Dataset identity

An optional directive uses two cells, independently of REACTION/VARIANTS/DATA:

| A | B |
| --- | --- |
| `DATASET ID` | `cmcc_dataset-0123456789abcdef0123456789abcdef` |

The ID must be the full `cmcc_dataset-` ID with 32 lowercase hexadecimal
characters. Put it before the first REACTION block, between blocks, or on an
identity worksheet. The directive is also recognized inside a block without
being interpreted as a reaction data row. Additional cells must be empty.
Identical repeated directives are allowed; conflicting or malformed IDs fail
import, including conflicts across worksheets.

`enumerate_spreadsheet(id=...)` is an explicit override, accepting a full ID or
its hexadecimal suffix. Otherwise the directive wins, then `default_id`, then
a new random ID. The upload CLI supplies its previous file hash as `default_id`,
so legacy files retain their behavior and identity-bearing files retain their
declared ID. This provides metadata for future dataset updates; it does not
implement replacement, merging, or authorization to overwrite existing data.

## Reaction identity

Use a `REACTION ID` column in the VARIANTS header. For example, these are CSV
records (the first column is reserved for directives):

```csv
DATASET ID,cmcc_dataset-0123456789abcdef0123456789abcdef
REACTION
VARIANTS
,REACTION ID,notes
,,procedure_details
DATA
,cmcc-fedcba9876543210fedcba9876543210,A reaction with a supplied ID
,,A reaction assigned an ID during conversion
```

The importer already normalizes `REACTION ID` to the protobuf `reaction_id`
field; exports now use the readable label. Supplied IDs are preserved; blank
cells use the existing dataset-based sequence. Reaction IDs must be unique
across all blocks/worksheets, including collisions with generated IDs. Existing
schema validation checks the `cmcc-` plus 32 lowercase hexadecimal convention.
No existing reaction is updated automatically just because its ID is supplied.

## Exported common values

Standalone CSV/ZIP/XLSX exports put the optional `DATASET ID` directive first.
Each human-readable reaction block moves eligible shared fields (including
identifiers such as `REACTION_TYPE` and provenance) into its `REACTION` section.
Inputs, outcomes (including products) and observations always remain in
`VARIANTS`, even when identical across rows. Conditions remain in `VARIANTS`
for a one-reaction block, and can be shared for blocks with multiple reactions.
Reaction IDs remain explicit columns under `VARIANTS`, even for one-row blocks.
Repeated records are shared only as an identical leading sequence, and map
entries are shared whole, so importing preserves ordering and record identity.
Different values or fields absent from some rows stay in `VARIANTS`.

## Maps as column headers

Each map key can be a header, with its value in the data row beneath it. For
example, `Features` → `reported-mol` with a data value of `10` imports a Data
integer. Bare keys infer integer/float values from numeric cells, including
scientific notation; other text stays text, including `NO` and `TRUE`.

Exported Data entries use optional inline kinds to retain the exact protobuf
choice: `{float}`, `{integer}`, `{string}`, `{url}` or `{bytes}`. Thus
`reported-mol {float}` with `10.0` preserves a float, and `label {string}` with
`00123` preserves literal text. Explicit string columns also preserve an empty
string. URL values are literal URL text; bytes values are base64 text. The web
CSV ZIP still transports binary attachments as separate files, using URL
references in the CSV.

An entry with description/format metadata uses child columns named `Value`,
`Description` and `Format`; its key stays in the header. For example:

```csv
REACTION
VARIANTS
,INPUTS
,reagents
,REACTANT
,Features
,reported-mol {float},,label {string}
,Value,Description
DATA
,10,Source loading,00123
```

Structured map values such as inputs and analyses use their key as a group
header above their normal fields. Scalar maps use one column per key. All
eight map fields reachable from Reaction support this grammar.

Keys are case-sensitive and retain their exact spelling. To disambiguate a key
that collides with a schema field or contains header punctuation, write a JSON
array containing one string, e.g. `["Key"] {string}`, `["a:b"] {float}` or
`[" key with boundary spaces "] {string}`. Empty keys use `[""]`. This quoting
escapes only the header grammar and does not rename the key. Duplicate named
keys in the same map are rejected. Legacy Key/String Value/Float Value columns
continue to import for compatibility.

The web search download retains the source dataset ID when every result belongs
to the same known dataset. Mixed-dataset or unknown-origin searches omit the
directive rather than claiming an incorrect identity. A source ID identifies
the dataset containing the selected reactions; it does not claim that a search
includes every reaction or automatically replace existing data on upload.

The extraction harness writes these rows on Overview and compares actual parsed
dataset metadata in its XLSX round-trip check. It does not restore a missing
description after parsing. Use matching schema and harness revisions.
