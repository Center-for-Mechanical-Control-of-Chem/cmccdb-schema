"""Native Dataset protobuf -> CMCCDB CSV/XLSX conversion and checked re-import.

This module owns schema layout and file serialization. It has no dependency on
the extraction harness, MCP, a database, or paper-specific evidence stores.
"""
import copy
import csv
import hashlib
import io
import json
import mimetypes
import os
import re
import shutil
import subprocess
import tempfile
import zipfile
from collections import OrderedDict
from pathlib import Path, PurePosixPath
from urllib.parse import urlsplit
from google.protobuf import json_format
from . import dataset_constructor
from .proto import dataset_pb2, reaction_pb2
from .spreadsheet_headers import readable_columns


def canonical(value):
    return json.dumps(value, sort_keys=True, separators=(",", ":"), ensure_ascii=False, allow_nan=False)


def escaped(token):
    return str(token).replace("~", "~0").replace("/", "~1")


def is_map(field):
    return field.message_type is not None and field.message_type.GetOptions().map_entry


def repeated(field):
    return field.is_repeated if hasattr(field, "is_repeated") else field.label == field.LABEL_REPEATED


def dataset_message(dataset):
    """Copy a Dataset protobuf or parse its protobuf-JSON mapping strictly."""
    result = dataset_pb2.Dataset()
    if isinstance(dataset, dataset_pb2.Dataset):
        result.CopyFrom(dataset)
    elif isinstance(dataset, dict):
        json_format.ParseDict(dataset, result)
    else:
        raise TypeError("Expected a cmccdb Dataset protobuf or protobuf-JSON dictionary")
    if result.reaction_ids:
        raise ValueError("Spreadsheet export requires embedded reactions; reaction_ids references cannot be resolved here")
    return result


def dataset_payload(dataset):
    return json_format.MessageToDict(dataset_message(dataset), preserving_proto_field_name=True)


def flatten(desc, data, pointer="", labels=(), groups=()):
    columns = []
    for field in desc.fields:
        if field.name not in data:
            continue
        value = data[field.name]
        path = pointer + "/" + escaped(field.name)
        label = "REACTION ID" if not pointer and field.name == "reaction_id" else field.name
        names = labels + (label,)
        if is_map(field):
            vf = field.message_type.fields_by_name["value"]
            for key, entry in value.items():
                child = path + "/" + escaped(key)
                branch = groups + (child,)
                columns.append(dict(path=child + "/@key", labels=names + ("key",),
                                    groups=branch + (child + "/@key",), value=key))
                if vf.message_type:
                    columns += flatten(vf.message_type, entry, child, names, branch)
                else:
                    columns.append(dict(path=child, labels=names + ("value",),
                                        groups=branch + (child + "/value",), value=entry))
        elif repeated(field):
            for index, item in enumerate(value):
                child = path + "/" + str(index)
                branch = groups + (child,)
                if field.message_type:
                    columns += flatten(field.message_type, item, child, names, branch)
                else:
                    columns.append(dict(path=child, labels=names, groups=branch, value=item))
        elif field.message_type:
            columns += flatten(field.message_type, value, path, names, groups + (path,))
        else:
            columns.append(dict(path=path, labels=names, groups=groups + (path,), value=value))
    return columns


def header_rows(columns):
    depth = max((len(c["labels"]) for c in columns), default=0)
    rows = [[""] * len(columns) for _ in range(depth)]
    for index, column in enumerate(columns):
        for level, label in enumerate(column["labels"]):
            if index == 0 or column["groups"][:level + 1] != columns[index - 1]["groups"][:level + 1]:
                rows[level][index] = label
    return rows


def common_provenance(reactions):
    first = reactions[0].get("provenance", {})
    keys = [k for k in first if all(r.get("provenance", {}).get(k) == first[k] for r in reactions)]
    common = dict(provenance={k: copy.deepcopy(first[k]) for k in keys})
    return common if common["provenance"] else {}


def split_common_reaction_values(reactions):
    """Factor values that the native REACTION/VARIANTS merge can reconstruct.

    Singular messages can share individual fields. Maps share complete entries;
    repeated fields share only a prefix of complete records, since the importer
    concatenates common and variant records. Records are never split/reordered.
    Reaction identity always remains in VARIANTS, even for a one-row block.
    """
    variants = copy.deepcopy(reactions)

    def split(desc, records):
        common = {}
        for field in desc.fields:
            key = field.name
            if (desc is reaction_pb2.Reaction.DESCRIPTOR and key == "reaction_id"
                    or not all(key in record for record in records)):
                continue
            values = [record[key] for record in records]
            if all(value == values[0] for value in values[1:]):
                common[key] = copy.deepcopy(values[0])
                for record in records:
                    record.pop(key)
            elif is_map(field):
                entries = {entry: copy.deepcopy(value) for entry, value in values[0].items()
                           if all(entry in other and other[entry] == value for other in values[1:])}
                if entries:
                    common[key] = entries
                    for record in records:
                        for entry in entries:
                            record[key].pop(entry)
                        if not record[key]:
                            record.pop(key)
            elif repeated(field):
                prefix = []
                for entries in zip(*values):
                    if any(entry != entries[0] for entry in entries[1:]):
                        break
                    prefix.append(copy.deepcopy(entries[0]))
                if prefix:
                    common[key] = prefix
                    for record in records:
                        record[key] = record[key][len(prefix):]
                        if not record[key]:
                            record.pop(key)
            elif (field.message_type and not repeated(field)
                    and field.containing_oneof is None
                    and "value" not in field.message_type.fields_by_name):
                child = split(field.message_type, values)
                if child:
                    common[key] = child
                    for record in records:
                        if not record[key]:
                            record.pop(key)
        return common

    return split(reaction_pb2.Reaction.DESCRIPTOR, variants), variants


def _variant_source_paths(columns, common, variant):
    """Keep source cell pointers when shared repeated records were prepended."""
    for column in columns:
        source, base, child = [], common, variant
        for token in column["path"].split("/")[1:]:
            key = token.replace("~1", "/").replace("~0", "~")
            if isinstance(child, list):
                index = int(key)
                source.append(str(index + (len(base) if isinstance(base, list) else 0)))
                base, child = None, child[index]
            else:
                source.append(token)
                base = base.get(key) if isinstance(base, dict) else None
                child = child.get(key) if isinstance(child, dict) else None
        column["path"] = "/" + "/".join(source)
    return columns


def spreadsheet_rows(dataset, *, readable=False):
    """Build rows; readable=True uses the importer's human header grammar.

    The low-level default retains schema-path cell coordinates for existing
    annotated-workbook consumers. Native standalone exports select readable.
    """
    dataset = dataset_payload(dataset)
    reactions = dataset.get("reactions", [])
    if not reactions:
        raise ValueError("Cannot export an empty extraction as reaction data")
    common = {} if readable else common_provenance(reactions)
    columns_for = readable_columns if readable else flatten
    blocks = OrderedDict()
    for reaction in reactions:
        variant = copy.deepcopy(reaction)
        for key in common.get("provenance", {}):
            variant["provenance"].pop(key)
        if "provenance" in variant and not variant["provenance"]:
            variant.pop("provenance")
        columns = columns_for(reaction_pb2.Reaction.DESCRIPTOR, variant)
        headers = header_rows(columns)
        key = canonical(headers)
        blocks.setdefault(key, dict(headers=headers, records=[]))["records"].append((reaction, columns))
    rows, data_cells, header_indices = [], [], []
    for block in blocks.values():
        if readable:
            common, variants = split_common_reaction_values([reaction for reaction, _ in block["records"]])
            records = [(reaction, _variant_source_paths(
                            columns_for(reaction_pb2.Reaction.DESCRIPTOR, variant), common, variant))
                       for (reaction, _), variant in zip(block["records"], variants)]
            variant_headers = header_rows(records[0][1])
            if any(header_rows(columns) != variant_headers for _, columns in records[1:]):
                raise ValueError("Common reaction values produced inconsistent variant headers")
        else:
            records, variant_headers = block["records"], block["headers"]
        common_columns = columns_for(reaction_pb2.Reaction.DESCRIPTOR, common)
        common_headers = header_rows(common_columns)
        rows.append(["REACTION"])
        header_indices.append(len(rows))
        if common_columns:
            header_indices += list(range(len(rows)+1, len(rows)+1+len(common_headers)))
            rows += [[""] + header for header in common_headers]
            rows.append([""] + [c["value"] for c in common_columns])
            if readable:
                for reaction, _ in records:
                    for i, column in enumerate(common_columns, 2):
                        data_cells.append(dict(reaction_id=reaction["reaction_id"], path=column["path"],
                                               row=len(rows), column=i, value=column["value"]))
        rows.append(["VARIANTS"])
        header_indices.append(len(rows))
        header_indices += list(range(len(rows)+1, len(rows)+1+len(variant_headers)))
        rows += [[""] + header for header in variant_headers]
        rows.append(["DATA"])
        header_indices.append(len(rows))
        for reaction, columns in records:
            rows.append([""] + [c["value"] for c in columns])
            for i, column in enumerate(columns, 2):
                data_cells.append(dict(reaction_id=reaction["reaction_id"], path=column["path"],
                                       row=len(rows), column=i, value=column["value"]))
        rows.append(["#! End of reaction block"])
        # Blank separates blocks for compatibility with older converter releases.
        rows.append([])
    width = max(len(r) for r in rows)
    if width > 16384 or len(rows) > 1048576:
        raise ValueError("Extraction exceeds Excel worksheet limits")
    rows = [r + [""] * (width - len(r)) for r in rows]
    return rows, data_cells, header_indices


def address(row, column):
    text = ""
    while column:
        column, remain = divmod(column - 1, 26)
        text = chr(65 + remain) + text
    return text + str(row)


def export_text_boundaries(dataset):
    """Declare the existing converter's boundary-whitespace normalization.

    Original worker values remain in the immutable audit. No internal text,
    numbers, units or array positions are changed by this export accommodation.
    """
    normalized = copy.deepcopy(dataset)
    changes = []
    for reaction in normalized["reactions"]:
        for column in flatten(reaction_pb2.Reaction.DESCRIPTOR, reaction):
            value = column["value"]
            if isinstance(value, str) and value != value.strip():
                if column["path"].endswith("/@key"):
                    raise ValueError("Whitespace in map keys requires explicit manager remapping")
                changes.append(dict(reaction_id=reaction["reaction_id"], path=column["path"],
                                    original=value, exported=value.strip()))
                tokens = [s.replace("~1", "/").replace("~0", "~") for s in column["path"].split("/")[1:]]
                parent = reaction
                for token in tokens[:-1]:
                    parent = parent[int(token)] if isinstance(parent, list) else parent[token]
                if isinstance(parent, list):
                    parent[int(tokens[-1])] = value.strip()
                else:
                    parent[tokens[-1]] = value.strip()
    return normalized, changes


def excel_backend_limits(environment=None):
    """Explicit finite child-process budgets; large audits need an 8 GiB heap."""
    env = os.environ if environment is None else environment
    result = {}
    for name, default, low, high in [("CMCCDB_XLSX_HEAP_MIB", 8192, 512, 8192),
                                     ("CMCCDB_XLSX_TIMEOUT_SECONDS", 600, 30, 1800)]:
        try:
            value = int(env.get(name, default))
        except (ValueError, TypeError) as error:
            raise ValueError(f"{name} must be an integer between {low} and {high}") from error
        if not low <= value <= high:
            raise ValueError(f"{name} must be an integer between {low} and {high}")
        result[name] = value
    return result


def dataset_metadata_rows(dataset):
    """Explicit identity directive and literal metadata for CSV and XLSX."""
    data = dataset_payload(dataset)
    rows = ([["DATASET ID", data["dataset_id"]]] if data.get("dataset_id") else [])
    return rows + [["#!", dataset_constructor.DATASET_METADATA_MARKER, key, data.get(key, "")]
                   for key in ("name", "description")]


def reaction_sheet(dataset, *, readable=False):
    """Return the native ReactionData sheet and schema-path cell coordinates."""
    rows, cells, headers = spreadsheet_rows(dataset, readable=readable)
    widths = [14] + [20] * (max(map(len, rows)) - 1)
    for cell in cells:
        value = rows[cell["row"]-1][cell["column"]-1]
        if isinstance(value, str) and len(value) > 60:
            widths[cell["column"]-1] = max(widths[cell["column"]-1], min(72, max(32, len(value)//4)))
    return dict(name="ReactionData", rows=rows, notes=[], header_rows=headers,
                widths=widths, freeze_rows=0), cells


def dataset_workbook_plan(dataset):
    """Build a plain, editable workbook without extraction-specific tabs."""
    sheet, cells = reaction_sheet(dataset, readable=True)
    metadata = dataset_metadata_rows(dataset)
    sheet["rows"] = metadata + sheet["rows"]
    sheet["header_rows"] = [row + len(metadata) for row in sheet["header_rows"]]
    for cell in cells:
        cell["row"] += len(metadata)
    return dict(sheets=[sheet], data_cells=cells)


def workbook_writer_path():
    return Path(__file__).with_name("write_workbook.mjs")


def spreadsheet_capabilities(node=None):
    executable = node or os.environ.get("CMCCDB_XLSX_NODE") or shutil.which("node")
    error = "Node is not configured"
    if executable:
        if not workbook_writer_path().is_file():
            error = "cmccdb-schema XLSX writer is missing; reinstall the schema package"
        else:
            try:
                proc = subprocess.run([str(executable), "-e", "require.resolve('@oai/artifact-tool')"],
                                      capture_output=True, text=True, timeout=10)
                error = "" if proc.returncode == 0 else "Node cannot resolve @oai/artifact-tool; configure NODE_PATH"
            except (OSError, subprocess.TimeoutExpired) as exc:
                error = str(exc)
    return dict(ready=not error, error=error, node=str(executable) if executable else None,
                backend="cmccdb-schema/ArtifactTool")


def write_workbook(plan, output, *, node=None, plan_path=None):
    """Serialize a schema workbook plan with the packaged, bounded backend.

    Evidence annotations/images may be supplied by a caller; this generic writer
    neither reads an evidence store nor decides scientific approval.
    """
    executable = node or os.environ.get("CMCCDB_XLSX_NODE") or shutil.which("node")
    if not executable:
        raise ValueError("Excel export requires a configured Node/Artifact Tool backend")
    output = Path(output)
    with tempfile.TemporaryDirectory(prefix="cmccdb-xlsx-plan-") as temp:
        source = Path(plan_path) if plan_path is not None else Path(temp) / "workbook-plan.json"
        source.write_text(canonical(plan), encoding="utf-8")
        limits = excel_backend_limits()
        try:
            proc = subprocess.run([str(executable), f"--max-old-space-size={limits['CMCCDB_XLSX_HEAP_MIB']}",
                str(workbook_writer_path()), str(source), str(output)], capture_output=True, text=True,
                timeout=limits["CMCCDB_XLSX_TIMEOUT_SECONDS"])
        except subprocess.TimeoutExpired as error:
            raise ValueError(f"Excel backend exceeded its configured {limits['CMCCDB_XLSX_TIMEOUT_SECONDS']} second limit; export withheld") from error
        if proc.returncode:
            detail = proc.stderr if len(proc.stderr) <= 3000 else proc.stderr[:1500] + "\n[diagnostics shortened]\n" + proc.stderr[-1500:]
            raise ValueError("Excel backend failed: " + detail)
    return output


class SpreadsheetRoundTripError(ValueError):
    """The parsed workbook differs from its source protobuf; never approve it."""
    def __init__(self, actual):
        super().__init__("Spreadsheet round-trip changed scientific data or dataset metadata; export withheld")
        self.actual = actual


def _without_empty_messages(message):
    """Ignore valueless wrappers, retaining oneof choices and mixed list slots.

    An entirely empty repeated-message field carries no exported values. Empty
    entries in a mixed list retain their positions; dropping them fails checking.
    """
    result = type(message)()
    result.CopyFrom(message)
    for field, value in list(result.ListFields()):
        if field.message_type is None:
            continue
        if is_map(field):
            if field.message_type.fields_by_name["value"].message_type:
                for child in value.values():
                    child.CopyFrom(_without_empty_messages(child))
        elif repeated(field):
            for child in value:
                child.CopyFrom(_without_empty_messages(child))
            if all(not child.ListFields() for child in value):
                result.ClearField(field.name)
        else:
            value.CopyFrom(_without_empty_messages(value))
            if not value.ListFields() and field.containing_oneof is None:
                result.ClearField(field.name)
    return result


def verify_round_trip(dataset, workbook):
    """Check metadata, identity and all populated values, allowing empty wrappers.

    IDs are read from the file, so the check proves they survive re-import.
    Search results without a dataset ID acquire one on import; it is excluded
    from comparison only when the source itself has no dataset identity.
    """
    original = dataset_message(dataset)
    ids = [reaction.reaction_id for reaction in original.reactions]
    if not ids or any(not value for value in ids) or len(set(ids)) != len(ids):
        raise ValueError("Spreadsheet verification requires nonempty, unique reaction IDs")
    actual = dataset_constructor.DatasetConstructor.enumerate_spreadsheet(str(workbook))
    _verify_dataset_values(original, actual)
    return actual


def _verify_dataset_values(original, actual):
    left, right = dataset_pb2.Dataset(), dataset_pb2.Dataset()
    left.CopyFrom(original); right.CopyFrom(actual)
    left.ClearField("reactions"); right.ClearField("reactions")
    if not original.dataset_id:
        right.ClearField("dataset_id")
    if (left != right or len(actual.reactions) != len(original.reactions)
        or len({r.reaction_id for r in actual.reactions}) != len(actual.reactions)
        or {r.reaction_id: _without_empty_messages(r) for r in original.reactions}
           != {r.reaction_id: _without_empty_messages(r) for r in actual.reactions}):
        raise SpreadsheetRoundTripError(actual)


def _data_locations(message, pointer=""):
    """Visit Data fields with stable protobuf JSON-pointer paths, including maps."""
    if message.DESCRIPTOR.full_name == "cmccdb.Data":
        yield pointer, message
        return
    for field, value in message.ListFields():
        if field.message_type is None:
            continue
        path = pointer + "/" + escaped(field.name)
        if is_map(field):
            if field.message_type.fields_by_name["value"].message_type:
                for key in sorted(value):
                    yield from _data_locations(value[key], path + "/" + escaped(key))
        elif repeated(field):
            for index, child in enumerate(value):
                yield from _data_locations(child, path + "/" + str(index))
        else:
            yield from _data_locations(value, path)


def _local_attachment(data):
    if data.WhichOneof("kind") != "url":
        return False
    parts = urlsplit(data.url)
    return not parts.scheme and not parts.netloc


def _attachment_filename(data, pointer):
    key = pointer.rsplit("/", 1)[-1].replace("~1", "/").replace("~0", "~")
    if key.startswith("attachment:"):
        name = key.removeprefix("attachment:")
    elif data.WhichOneof("kind") == "url":
        name = urlsplit(data.url).path
    else:
        suffix = mimetypes.guess_extension(data.format) if "/" in data.format else None
        if not suffix and re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._-]{0,15}", data.format):
            suffix = "." + data.format
        name = "attachment" + (suffix or ".bin")
    name = PurePosixPath(name.replace("\\", "/")).name
    name = re.sub(r"[^\w.\-]", "_", name).strip(".")[:160]
    return name or "attachment.bin"


def serialize_csv_bundle(dataset, *, resolve_attachment=None):
    """Return a verified ZIP of reactions.csv, manifest.json and attachment files.

    Embedded bytes become relative Data.url references in the CSV. Local URLs
    are read only through the caller's existing attachment resolver, accepting
    (reaction_id, url) and returning bytes. Remote URLs remain links; no network
    requests or arbitrary filesystem reads are performed here.
    """
    original = dataset_message(dataset)
    projected = dataset_message(original)
    portable = dataset_message(original)
    files, references = {}, []
    for index, reaction in enumerate(projected.reactions):
        expected = dict(_data_locations(portable.reactions[index]))
        for pointer, data in _data_locations(reaction):
            kind = data.WhichOneof("kind")
            if kind != "bytes_value" and not _local_attachment(data):
                continue
            original_url = data.url if kind == "url" else None
            if kind == "bytes_value":
                body = data.bytes_value
            else:
                if resolve_attachment is None:
                    raise ValueError("A local attachment resolver is required for: " + data.url)
                body = resolve_attachment(reaction.reaction_id, data.url)
                if not isinstance(body, bytes):
                    raise ValueError("Missing or unreadable local attachment: " + data.url)
            digest = hashlib.sha256(body).hexdigest()
            name = _attachment_filename(data, pointer)
            member = "attachments/" + digest + "/" + name
            files[member] = body
            references.append(dict(reaction_id=reaction.reaction_id, path=pointer, file=member,
                                   original_kind=kind, original_url=original_url,
                                   sha256=digest, size=len(body)))
            expected[pointer].bytes_value = body
            data.url = member  # Protobuf oneof clears the embedded bytes.
    csv_bytes = _serialize_csv(projected, bundle_references=True)
    manifest = dict(format="cmccdb-csv-attachments-v1", csv="reactions.csv",
                    csv_sha256=hashlib.sha256(csv_bytes).hexdigest(),
                    dataset_id=original.dataset_id, attachments=references)
    content = {"reactions.csv": csv_bytes, "manifest.json": (canonical(manifest) + "\n").encode("utf-8"), **files}
    output = io.BytesIO()
    with zipfile.ZipFile(output, "w") as archive:
        for name, body in sorted(content.items()):
            info = zipfile.ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, body)
    payload = output.getvalue()
    _verify_dataset_values(portable, load_csv_bundle(payload))
    return payload


def load_csv_bundle(payload):
    """Read this archive format without extracting paths; restore file bytes.

    This native loader does not enable ZIP uploads in the web application.
    Local URL attachments become portable embedded bytes; their original URLs
    remain recorded in manifest.json. Dataset and reaction IDs are preserved.
    """
    with zipfile.ZipFile(io.BytesIO(payload)) as archive:
        infos = archive.infolist()
        names = [info.filename for info in infos]
        if len(names) != len(set(names)) or sum(info.file_size for info in infos) > 512 * 1024 * 1024:
            raise ValueError("Duplicate archive members or CSV bundle exceeds 512 MiB uncompressed")
        manifest = json.loads(archive.read("manifest.json"))
        if manifest.get("format") != "cmccdb-csv-attachments-v1" or manifest.get("csv") != "reactions.csv":
            raise ValueError("Unsupported CSV attachment bundle format")
        csv_bytes = archive.read("reactions.csv")
        if hashlib.sha256(csv_bytes).hexdigest() != manifest["csv_sha256"]:
            raise ValueError("CSV checksum mismatch")
        with tempfile.TemporaryDirectory(prefix="cmccdb-csv-bundle-") as temp:
            source = Path(temp) / "reactions.csv"
            source.write_bytes(csv_bytes)
            actual = dataset_constructor.DatasetConstructor.enumerate_spreadsheet(str(source))
        if manifest["dataset_id"]:
            if actual.dataset_id != manifest["dataset_id"]:
                raise ValueError("CSV dataset ID differs from the attachment manifest")
        else:
            actual.ClearField("dataset_id")
        reaction_ids = [reaction.reaction_id for reaction in actual.reactions]
        if not reaction_ids or any(not value for value in reaction_ids) or len(set(reaction_ids)) != len(reaction_ids):
            raise ValueError("CSV bundle requires nonempty, unique reaction IDs")
        locations = {(reaction.reaction_id, pointer): data for reaction in actual.reactions
                     for pointer, data in _data_locations(reaction)}
        used, members = set(), {"manifest.json", "reactions.csv"}
        for reference in manifest["attachments"]:
            member = reference["file"]
            parts = PurePosixPath(member).parts
            if (len(parts) != 3 or parts[0] != "attachments" or parts[-1] in {".", ".."}
                    or not re.fullmatch("[0-9a-f]{64}", parts[1]) or "\\" in member
                    or member != PurePosixPath(member).as_posix()):
                raise ValueError("Invalid attachment archive path")
            key = reference["reaction_id"], reference["path"]
            data = locations.get(key)
            if key in used or data is None or data.WhichOneof("kind") != "url" or data.url != member:
                raise ValueError("Attachment reference does not match its CSV field")
            body = archive.read(member)
            if (len(body) != reference["size"] or hashlib.sha256(body).hexdigest() != reference["sha256"]
                    or reference["sha256"] != parts[1]):
                raise ValueError("Attachment checksum or size mismatch: " + member)
            data.bytes_value = body
            used.add(key); members.add(member)
        if set(names) != members:
            raise ValueError("Unlisted attachment archive members")
        # No relative attachment links may be silently omitted from the bundle.
        if any(_local_attachment(data) for data in locations.values()):
            raise ValueError("Unresolved local attachment in CSV bundle")
        return actual


def _write_csv(dataset, output, *, bundle_references=False):
    for reaction in dataset_message(dataset).reactions:
        for _, data in _data_locations(reaction):
            if data.WhichOneof("kind") == "bytes_value" or (_local_attachment(data) and not bundle_references):
                raise ValueError("Attachments require a .zip export; use serialize_csv_bundle or a .zip output filename")
    rows = dataset_workbook_plan(dataset)["sheets"][0]["rows"]
    width = max(map(len, rows))
    with open(output, "w", encoding="utf-8", newline="") as stream:
        writer = csv.writer(stream)
        writer.writerows(row + [""] * (width - len(row)) for row in rows)


def serialize_csv(dataset):
    """Return plain CSV for records without local files; use ZIP for attachments."""
    return _serialize_csv(dataset)


def _serialize_csv(dataset, *, bundle_references=False):
    original = dataset_message(dataset)
    with tempfile.TemporaryDirectory(prefix="cmccdb-csv-") as temp:
        candidate = Path(temp) / "dataset.csv"
        _write_csv(original, candidate, bundle_references=bundle_references)
        verify_round_trip(original, candidate)
        return candidate.read_bytes()


def export_dataset(dataset, output, *, node=None, overwrite=False, resolve_attachment=None):
    """Export CSV, ZIP with attachments, or XLSX after a checked round trip.

    Existing output files are preserved unless overwrite=True. Source messages
    are never mutated, whitespace is not silently trimmed, and no LLM/MCP or
    database is required. Unsupported/lossy values fail instead of being omitted.
    """
    original = dataset_message(dataset)
    output = Path(output).expanduser().absolute()
    suffix = output.suffix.lower()
    if suffix not in {".csv", ".zip", ".xlsx"}:
        raise ValueError("Output filename must end in .csv, .zip or .xlsx")
    if output.exists() and not overwrite:
        raise FileExistsError(output)
    with tempfile.TemporaryDirectory(prefix=".cmccdb-spreadsheet-", dir=output.parent) as temp:
        candidate = Path(temp) / ("dataset" + suffix)
        if suffix == ".zip":
            candidate.write_bytes(serialize_csv_bundle(original, resolve_attachment=resolve_attachment))
            actual = load_csv_bundle(candidate.read_bytes())
        elif suffix == ".csv":
            _write_csv(original, candidate)
        else:
            write_workbook(dataset_workbook_plan(original), candidate, node=node)
        if suffix != ".zip":
            actual = verify_round_trip(original, candidate)
        digest = hashlib.sha256(candidate.read_bytes()).hexdigest()
        if overwrite:
            os.replace(candidate, output)
        else:
            # Same-filesystem link provides atomic create-without-clobber.
            os.link(candidate, output)
    return dict(workbook=str(output), workbook_sha256=digest, round_trip_verified=True,
                reactions=len(actual.reactions), dataset_id=original.dataset_id)
