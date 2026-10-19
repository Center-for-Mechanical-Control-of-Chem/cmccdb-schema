"""Native Dataset protobuf -> CMCCDB CSV/XLSX conversion and checked re-import.

This module owns schema layout and file serialization. It has no dependency on
the extraction harness, MCP, a database, or paper-specific evidence stores.
"""
import copy
import csv
import hashlib
import json
import os
import shutil
import subprocess
import tempfile
from collections import OrderedDict
from pathlib import Path
from google.protobuf import json_format
from . import dataset_constructor
from .proto import dataset_pb2, reaction_pb2


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


def spreadsheet_rows(dataset):
    dataset = dataset_payload(dataset)
    reactions = dataset.get("reactions", [])
    if not reactions:
        raise ValueError("Cannot export an empty extraction as reaction data")
    common = common_provenance(reactions)
    common_columns = flatten(reaction_pb2.Reaction.DESCRIPTOR, common)
    common_headers = header_rows(common_columns)
    blocks = OrderedDict()
    for reaction in reactions:
        variant = copy.deepcopy(reaction)
        for key in common.get("provenance", {}):
            variant["provenance"].pop(key)
        if "provenance" in variant and not variant["provenance"]:
            variant.pop("provenance")
        columns = flatten(reaction_pb2.Reaction.DESCRIPTOR, variant)
        headers = header_rows(columns)
        key = canonical(headers)
        blocks.setdefault(key, dict(headers=headers, records=[]))["records"].append((reaction, columns))
    rows, data_cells, header_indices = [], [], []
    for block in blocks.values():
        rows.append(["REACTION"])
        header_indices.append(len(rows))
        if common_columns:
            header_indices += list(range(len(rows)+1, len(rows)+1+len(common_headers)))
            rows += [[""] + header for header in common_headers]
            rows.append([""] + [c["value"] for c in common_columns])
        rows.append(["VARIANTS"])
        header_indices.append(len(rows))
        header_indices += list(range(len(rows)+1, len(rows)+1+len(block["headers"])))
        rows += [[""] + header for header in block["headers"]]
        rows.append(["DATA"])
        header_indices.append(len(rows))
        for reaction, columns in block["records"]:
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


def reaction_sheet(dataset):
    """Return the native ReactionData sheet and schema-path cell coordinates."""
    rows, cells, headers = spreadsheet_rows(dataset)
    widths = [14] + [20] * (max(map(len, rows)) - 1)
    for cell in cells:
        value = rows[cell["row"]-1][cell["column"]-1]
        if isinstance(value, str) and len(value) > 60:
            widths[cell["column"]-1] = max(widths[cell["column"]-1], min(72, max(32, len(value)//4)))
    return dict(name="ReactionData", rows=rows, notes=[], header_rows=headers,
                widths=widths, freeze_rows=0), cells


def dataset_workbook_plan(dataset):
    """Build a plain, editable workbook without extraction-specific tabs."""
    sheet, cells = reaction_sheet(dataset)
    sheet["rows"].extend(dataset_metadata_rows(dataset))
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
    return actual


def _write_csv(dataset, output):
    rows = dataset_workbook_plan(dataset)["sheets"][0]["rows"]
    width = max(map(len, rows))
    with open(output, "w", encoding="utf-8", newline="") as stream:
        writer = csv.writer(stream)
        writer.writerows(row + [""] * (width - len(row)) for row in rows)


def serialize_csv(dataset):
    """Return verified UTF-8 CSV bytes using Python only, with no XLSX backend."""
    original = dataset_message(dataset)
    with tempfile.TemporaryDirectory(prefix="cmccdb-csv-") as temp:
        candidate = Path(temp) / "dataset.csv"
        _write_csv(original, candidate)
        verify_round_trip(original, candidate)
        return candidate.read_bytes()


def export_dataset(dataset, output, *, node=None, overwrite=False):
    """Export CSV or XLSX; publish only after a checked native round trip.

    Existing output files are preserved unless overwrite=True. Source messages
    are never mutated, whitespace is not silently trimmed, and no LLM/MCP or
    database is required. Unsupported/lossy values fail instead of being omitted.
    """
    original = dataset_message(dataset)
    output = Path(output).expanduser().absolute()
    suffix = output.suffix.lower()
    if suffix not in {".csv", ".xlsx"}:
        raise ValueError("Output filename must end in .csv or .xlsx")
    if output.exists() and not overwrite:
        raise FileExistsError(output)
    with tempfile.TemporaryDirectory(prefix=".cmccdb-spreadsheet-", dir=output.parent) as temp:
        candidate = Path(temp) / ("dataset" + suffix)
        if suffix == ".csv":
            _write_csv(original, candidate)
        else:
            write_workbook(dataset_workbook_plan(original), candidate, node=node)
        actual = verify_round_trip(original, candidate)
        digest = hashlib.sha256(candidate.read_bytes()).hexdigest()
        if overwrite:
            os.replace(candidate, output)
        else:
            # Same-filesystem link provides atomic create-without-clobber.
            os.link(candidate, output)
    return dict(workbook=str(output), workbook_sha256=digest, round_trip_verified=True,
                reactions=len(actual.reactions), dataset_id=original.dataset_id)
