"""Exercise reserved metadata through the real public CSV constructor."""
import csv
import pytest
from cmccdb_schema.dataset_constructor import DatasetConstructor, DATASET_METADATA_MARKER


def source(tmp_path, metadata):
    rows = metadata + [["REACTION"], ["", "notes"], ["", "procedure_details"],
                       ["", "Literal source"], ["VARIANTS"], ["", "reaction_id"],
                       ["DATA"], ["", "cmcc-source-row"]]
    width = max(map(len, rows))
    path = tmp_path / "input.csv"
    with path.open("w", newline="") as handle:
        csv.writer(handle).writerows([row + [""]*(width-len(row)) for row in rows])
    return path


def test_literal_metadata_and_existing_reaction_data(tmp_path):
    description = "  NO / 00123 / α\nsecond line  "
    path = source(tmp_path, [["#!", DATASET_METADATA_MARKER, "name", "Human title"],
                             ["#!", DATASET_METADATA_MARKER, "description", description]])
    dataset = DatasetConstructor.enumerate_spreadsheet(path, id="a"*32)
    assert dataset.name == "Human title"
    assert dataset.description == description
    assert dataset.dataset_id == "cmcc_dataset-"+"a"*32
    assert dataset.reactions[0].reaction_id == "cmcc-source-row"
    assert dataset.reactions[0].notes.procedure_details == "Literal source"
    assert DatasetConstructor.enumerate_spreadsheet(path, name="Caller title", id="a"*32).name == "Caller title"


def test_absent_metadata_preserves_legacy_default(tmp_path):
    dataset = DatasetConstructor.enumerate_spreadsheet(source(tmp_path, []), id="a"*32)
    assert dataset.name == "input" and dataset.description == ""


def test_upload_fallback_does_not_override_workbook_metadata(tmp_path):
    path = source(tmp_path, [["#!", DATASET_METADATA_MARKER, "name", "Paper title"]])
    assert DatasetConstructor.enumerate_spreadsheet(path, default_name="Uploaded filename").name == "Paper title"
    assert DatasetConstructor.enumerate_spreadsheet(path, name="Explicit override", default_name="Uploaded filename").name == "Explicit override"
    legacy = source(tmp_path, [])
    assert DatasetConstructor.enumerate_spreadsheet(legacy, default_name="Original filename").name == "Original filename"


def test_native_cli_preserves_metadata_with_fallback(tmp_path):
    from cmccdb_schema.scripts.construct_dataset import main
    path = source(tmp_path, [["#!", DATASET_METADATA_MARKER, "name", "Paper title"],
                             ["#!", DATASET_METADATA_MARKER, "description", "Source audit"]])
    result = main({"--data": str(path), "--name": "Fixture", "--email": "fixture@example.invalid",
                   "--fallback-dataset-name": "Original filename", "--no-validate": True})
    assert result.name == "Paper title" and result.description == "Source audit"


def test_identical_repeated_metadata_allowed(tmp_path):
    row = ["#!", DATASET_METADATA_MARKER, "description", "same literal"]
    assert DatasetConstructor.enumerate_spreadsheet(source(tmp_path, [row, row])).description == "same literal"


@pytest.mark.parametrize("metadata,reason", [
    ([["#!", DATASET_METADATA_MARKER, "description", "one"], ["#!", DATASET_METADATA_MARKER, "description", "two"]], "Conflicting"),
    ([["#!", DATASET_METADATA_MARKER, "dataset_id", "malicious override"]], "Unsupported"),
    ([["#!", DATASET_METADATA_MARKER, "description", "value", "extra nonempty cell"]], "exactly"),
])
def test_ambiguous_or_identity_overriding_metadata_rejected(tmp_path, metadata, reason):
    with pytest.raises(ValueError, match=reason):
        DatasetConstructor.enumerate_spreadsheet(source(tmp_path, metadata))
