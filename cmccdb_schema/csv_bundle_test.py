"""CSV bundles keep binary files out of cells and preserve portable datasets."""
import csv
import hashlib
import io
import json
import tempfile
import unittest
import zipfile
from pathlib import Path
from unittest.mock import patch
from cmccdb_schema import spreadsheet
from cmccdb_schema.spreadsheet_test import dataset


def contents(payload):
    with zipfile.ZipFile(io.BytesIO(payload)) as archive:
        return {name: archive.read(name) for name in archive.namelist()}


def repack(files):
    stream = io.BytesIO()
    with zipfile.ZipFile(stream, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for name, body in files.items():
            archive.writestr(name, body)
    return stream.getvalue()


class BundleTests(unittest.TestCase):
    def test_binary_files_metadata_and_ids_round_trip_without_xlsx_or_large_cells(self):
        source = dataset(6)
        raw = bytes(range(256)) * 6000
        data = source.reactions[0].provenance.reaction_metadata["attachment:audit.json.gz"]
        data.bytes_value = raw; data.format = "gz"; data.description = "Original audit"
        before = source.SerializeToString(deterministic=True)
        with patch.object(spreadsheet.subprocess, "run", side_effect=AssertionError("No Node")):
            payload = spreadsheet.serialize_csv_bundle(source)
        files = contents(payload)
        text = files["reactions.csv"].decode()
        manifest = json.loads(files["manifest.json"])
        self.assertNotIn("bytes_value", text)
        self.assertIn("attachments/", text)
        self.assertTrue(any(row[:2] == ["DATASET ID", source.dataset_id] for row in csv.reader(io.StringIO(text))))
        self.assertIn("REACTION ID", text)
        self.assertTrue(any(body == raw for name, body in files.items() if name.startswith("attachments/")))
        self.assertTrue(all(ref["sha256"] == hashlib.sha256(files[ref["file"]]).hexdigest()
                            for ref in manifest["attachments"]))
        actual = spreadsheet.load_csv_bundle(payload)
        self.assertEqual({r.reaction_id: r for r in actual.reactions}, {r.reaction_id: r for r in source.reactions})
        self.assertEqual(actual.dataset_id, source.dataset_id)
        self.assertEqual(actual.description, source.description)
        self.assertEqual(source.SerializeToString(deterministic=True), before)
        self.assertEqual(payload, spreadsheet.serialize_csv_bundle(source))

    def test_no_attachments_still_has_a_predictable_zip_and_preserves_absent_dataset_id(self):
        source = dataset(2); source.ClearField("dataset_id")
        payload = spreadsheet.serialize_csv_bundle(source)
        self.assertEqual(set(contents(payload)), {"reactions.csv", "manifest.json"})
        self.assertEqual(spreadsheet.load_csv_bundle(payload), source)

    def test_local_urls_use_the_resolver_and_remote_urls_remain_links(self):
        source = dataset()
        local = source.reactions[0].provenance.reaction_metadata["spectrum"]
        local.url = "old-spectra/raw.csv"; local.format = "csv"; local.description = "Keep description"
        remote = source.reactions[0].provenance.reaction_metadata["remote"]
        remote.url = "https://example.invalid/spectrum.csv"
        with patch.object(spreadsheet, "urlsplit", wraps=spreadsheet.urlsplit), \
             patch.object(spreadsheet.subprocess, "run", side_effect=AssertionError("No network")):
            resolver = unittest.mock.Mock(return_value=b"x,y\n1,2\n")
            payload = spreadsheet.serialize_csv_bundle(source, resolve_attachment=resolver)
        resolver.assert_called_once_with(source.reactions[0].reaction_id, local.url)
        actual = spreadsheet.load_csv_bundle(payload)
        self.assertEqual(actual.reactions[0].provenance.reaction_metadata["spectrum"].bytes_value, b"x,y\n1,2\n")
        self.assertEqual(actual.reactions[0].provenance.reaction_metadata["spectrum"].description, local.description)
        self.assertEqual(actual.reactions[0].provenance.reaction_metadata["remote"], remote)
        self.assertEqual(source.reactions[0].provenance.reaction_metadata["spectrum"].url, local.url)

    def test_missing_local_files_fail_without_creating_a_zip(self):
        source = dataset(); source.reactions[0].provenance.reaction_metadata["local"].url = "missing.csv"
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "failed.zip"
            with self.assertRaisesRegex(ValueError, "resolver is required.*missing.csv"):
                spreadsheet.export_dataset(source, output)
            self.assertFalse(output.exists())
        with self.assertRaisesRegex(ValueError, "Missing or unreadable.*missing.csv"):
            spreadsheet.serialize_csv_bundle(source, resolve_attachment=lambda *_: None)

    def test_duplicate_names_are_distinct_and_identical_file_contents_can_be_shared(self):
        source = dataset(2)
        for index, reaction in enumerate(source.reactions):
            reaction.provenance.reaction_metadata["attachment:same.bin"].bytes_value = bytes([index])
            reaction.provenance.reaction_metadata["attachment:shared.bin"].bytes_value = b"shared"
        payload = spreadsheet.serialize_csv_bundle(source)
        files = contents(payload)
        manifest = json.loads(files["manifest.json"])
        self.assertEqual(len(manifest["attachments"]), 4)
        self.assertEqual(sum(name.startswith("attachments/") for name in files), 3)
        self.assertEqual(spreadsheet.load_csv_bundle(payload), source)

    def test_empty_bytes_are_a_real_empty_file_and_unsafe_names_are_sanitized(self):
        source = dataset()
        source.reactions[0].provenance.reaction_metadata["attachment:../../escape.gz"].bytes_value = b""
        payload = spreadsheet.serialize_csv_bundle(source)
        files = contents(payload)
        attachment = next(name for name in files if name.startswith("attachments/"))
        self.assertTrue(attachment.endswith("/escape.gz"))
        self.assertNotIn("..", attachment)
        self.assertEqual(files[attachment], b"")
        self.assertEqual(spreadsheet.load_csv_bundle(payload), source)

    def test_changed_csv_file_or_attachment_is_rejected(self):
        source = dataset()
        source.reactions[0].provenance.reaction_metadata["attachment:audit.gz"].bytes_value = b"audit"
        original = contents(spreadsheet.serialize_csv_bundle(source))
        attachment = next(name for name in original if name.startswith("attachments/"))
        for member in ("reactions.csv", attachment):
            with self.subTest(member=member):
                files = dict(original); files[member] += b"changed"
                with self.assertRaisesRegex(ValueError, "checksum|size mismatch"):
                    spreadsheet.load_csv_bundle(repack(files))

    def test_plain_csv_does_not_silently_embed_files_or_omit_them(self):
        source = dataset()
        for kind in ("bytes_value", "url"):
            data = source.reactions[0].provenance.reaction_metadata["attachment:file.bin"]
            setattr(data, kind, b"binary" if kind == "bytes_value" else "local.bin")
            with self.subTest(kind=kind), self.assertRaisesRegex(ValueError, "Attachments require a .zip"):
                spreadsheet.serialize_csv(source)

    def test_failed_zip_export_preserves_an_existing_output(self):
        source = dataset(); source.reactions[0].notes.procedure_details = " boundary text "
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / "existing.zip"; output.write_bytes(b"existing artifact")
            with self.assertRaises(FileExistsError):
                spreadsheet.export_dataset(source, output)
            with self.assertRaises(ValueError):
                spreadsheet.export_dataset(source, output, overwrite=True)
            self.assertEqual(output.read_bytes(), b"existing artifact")


if __name__ == "__main__":
    unittest.main()
