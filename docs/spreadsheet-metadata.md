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

The extraction harness writes these rows on Overview and compares actual parsed
dataset metadata in its XLSX round-trip check. It does not restore a missing
description after parsing. Use matching schema and harness revisions.
