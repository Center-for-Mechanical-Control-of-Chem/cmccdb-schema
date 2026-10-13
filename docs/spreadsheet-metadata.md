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
A missing description stays
empty for legacy files. The returned Dataset always uses the caller-supplied or
generated ID, and reaction IDs retain their established conversion behavior.

The extraction harness writes these rows on Overview and compares actual parsed
dataset metadata in its XLSX round-trip check. It does not restore a missing
description after parsing. Use matching schema and harness revisions.
