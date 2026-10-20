"""Human spreadsheet headers compiled against the native importer's grammar.

No unit conversions, map-key renaming or data normalization happen here.
Shorthand is used only when the importer resolves it to the source field.
"""
from dataclasses import dataclass, replace
from functools import lru_cache
import json
from . import dataset_constructor as constructor, units
from .proto import reaction_pb2


@dataclass(frozen=True)
class _Node:
    label: str
    binding: tuple
    path: str
    value: object = None
    children: object = None
    constants: tuple = ()
    liftable: bool = False


_KEEP_SECTIONS = {"mechanochemistry", "temperature", "pressure", "stirring", "illumination",
                  "electrochemistry", "flow", "setup", "workups", "observations", "crystal_parameters"}
_GENERIC = {"key", "value", "type", "units", "precision", "details", "format"}


def _label(name):
    if name in {"reaction_id", "doi", "orcid", "smiles", "cxsmiles"}:
        return name.replace("_", " ").upper()
    if name in _KEEP_SECTIONS or name in {"inputs", "outcomes", "conditions"}:
        return name.replace("_", " ").upper()
    acronyms = {"url": "URL", "id": "ID", "orcid": "ORCID", "doi": "DOI", "ph": "pH"}
    return " ".join(acronyms.get(word, word.title()) for word in name.split("_"))


def _escaped(value):
    return str(value).replace("~", "~0").replace("/", "~1")


def _map_key_label(value_field, key, kind=None):
    """Keep literal keys in headers; quote grammar collisions without renaming."""
    quoted = (not key or key != key.strip() or key.startswith("#!")
              or any(char in key for char in ':()[]{}\n\r"')
              or constructor.normalize_key(key)[0] == "key"
              or kind is None and value_field.message_type is not None
                 and _resolve(value_field.message_type, key) is not None)
    label = json.dumps([key], ensure_ascii=False) if quoted else key
    return label + (" {" + kind + "}" if kind else "")


def _map_entry(field, value_field, key, entry, path):
    desc = value_field.message_type
    kind = None
    if desc is not None and desc.full_name == "cmccdb.Data":
        kind = next((name for name, member in constructor.DATA_COLUMN_KINDS.items() if member in entry), None)
    label = _map_key_label(value_field, key, kind)
    if desc is None:
        return _Node(label, (key,), path, value=entry)
    if set(entry) == {"value"}:
        return _Node(label, (key,), path + "/value", value=entry["value"])
    if kind:
        member = constructor.DATA_COLUMN_KINDS[kind]
        if set(entry) == {member}:
            return _Node(label, (key,), path + "/" + member, value=entry[member])
        children = [_Node("Value", (member,), path + "/" + member, value=entry[member])]
        children.extend(_nodes(desc, entry, path, exclude={member}))
    else:
        children = _nodes(desc, entry, path)
    return _Node(label, (key,), path, children=tuple(children))


def _constant_fields(value):
    if isinstance(value, (constructor.ProtoMessage, constructor.ProtoContainer)):
        value = value.to_template()
    if isinstance(value, dict):
        result = []
        for key, child in value.items():
            if key in {"type", "reaction_role"} and isinstance(child, str):
                result.append((key, child))
            result.extend(_constant_fields(child))
        return result
    if isinstance(value, list):
        return [pair for child in value for pair in _constant_fields(child)]
    return []


@lru_cache(maxsize=4096)
def _resolve(desc, label):
    handler = constructor.ProtoHandler
    # The importer uses the generated Reaction class at its root, and wrapper
    # descriptors below it. Its explicit REACTANT/PRODUCT defaults depend on it.
    root = reaction_pb2.Reaction if desc is reaction_pb2.Reaction.DESCRIPTOR else handler.GProtoDescriptorWrapper.lookup(desc)
    try:
        key, _ = constructor.normalize_key(label)
        path, fields = handler.resolve_insertion_spot(constructor.ProtoType(None, root, None), key)
        return tuple(path), tuple(_constant_fields(fields))
    except (ValueError, KeyError, AttributeError):
        return None


def _alias(desc, label, binding, constant):
    resolved = _resolve(desc, label)
    return resolved is not None and resolved[0] == binding and constant in resolved[1]


def _compact(parent, node):
    if not node.liftable or node.children is None:
        return [node]
    retained, lifted = [], []
    for child in node.children:
        key, _ = constructor.normalize_key(child.label)
        resolved = _resolve(parent, child.label) if key not in _GENERIC else None
        target = node.binding + child.binding
        if resolved is not None and resolved[0] == target and resolved[1] == child.constants:
            lifted.append(replace(child, binding=target))
        else:
            retained.append(child)
    # A map's key/metadata must be initialized before promoted role groups.
    return ([replace(node, children=tuple(retained))] if retained else []) + lifted


def _unit(desc, data):
    if "value" not in data:
        return None
    if desc.name == "Percentage":
        return "%"
    if desc.name == "FloatValue":
        return "unitless"
    field = desc.fields_by_name.get("units")
    if field is None or "units" not in data or data["units"] not in field.enum_type.values_by_name:
        return None
    number = field.enum_type.values_by_name[data["units"]].number
    for proto, aliases in units._UNIT_SYNONYMS.items():
        if proto.DESCRIPTOR.full_name == desc.full_name and number in aliases:
            return aliases[number][0]
    return None


def _message_node(parent, field, data, path, *, liftable):
    desc = field.message_type
    label, binding = _label(field.name), (field.name,)
    unit = _unit(desc, data)
    if unit is not None:
        label += " (" + unit + ")"
        if set(data) <= {"value", "units"}:
            return _Node(label, binding, path + "/value", value=data["value"])
        return _Node(label, binding, path, children=tuple(_nodes(desc, data, path, exclude={"units"})))
    # Amount's oneof is conveyed by the unit, as in the authored workbooks.
    if desc.name == "Amount" and len(data) == 1:
        kind, quantity = next(iter(data.items()))
        child = desc.fields_by_name.get(kind)
        if child and isinstance(quantity, dict):
            unit = _unit(child.message_type, quantity)
            if unit is not None and set(quantity) <= {"value", "units"}:
                return _Node(label + " (" + unit + ")", binding, path + "/" + kind + "/value",
                             value=quantity["value"])
            if kind == "unmeasured" and set(quantity) == {"type"}:
                return _Node(label + " (unmeasured)", binding, path + "/unmeasured/type", value=quantity["type"])
    constants, exclude = (), set()
    identifier = "type" in desc.fields_by_name and "value" in desc.fields_by_name
    if field.label == field.LABEL_REPEATED or identifier:
        role = data.get("reaction_role")
        if isinstance(role, str) and role != "UNSPECIFIED" and _alias(parent, role, binding, ("reaction_role", role)):
            label, constants, exclude = role, (("reaction_role", role),), {"reaction_role"}
        kind = data.get("type")
        if (not constants and (identifier or desc.name == "ProductMeasurement")
                and isinstance(kind, str) and kind != "UNSPECIFIED"
                and _alias(parent, kind, binding, ("type", kind))):
            label, constants, exclude = kind, (("type", kind),), {"type"}
            if set(data) == {"type", "value"}:
                return _Node(label, binding, path + "/value", value=data["value"], constants=constants)
            if desc.name == "ProductMeasurement":
                for numeric, unit in (("percentage", "%"), ("float_value", "unitless")):
                    if set(data) == {"type", numeric} and set(data[numeric]) == {"value"}:
                        return _Node(label + " (" + unit + ")", binding, path + "/" + numeric + "/value",
                                     value=data[numeric]["value"], constants=constants)
    if set(data) == {"value"}:
        return _Node(label, binding, path + "/value", value=data["value"], constants=constants)
    children = _nodes(desc, data, path, exclude=exclude)
    if identifier and constants:
        children.sort(key=lambda child: child.binding != ("value",))
    return _Node(label, binding, path, constants=constants,
                 children=tuple(children),
                 liftable=liftable and not constants and field.name not in _KEEP_SECTIONS)


def _nodes(desc, data, pointer="", exclude=()):
    result = []
    for field in desc.fields:
        if field.name not in data or field.name in exclude:
            continue
        value, path = data[field.name], pointer + "/" + _escaped(field.name)
        if field.message_type and field.message_type.GetOptions().map_entry:
            vf = field.message_type.fields_by_name["value"]
            entries = []
            for key, entry in value.items():
                child = path + "/" + _escaped(key)
                node = _map_entry(field, vf, key, entry, child)
                if node.children is None or node.children:
                    entries.append(node)
            if entries:
                result.append(_Node(_label(field.name), (field.name,), path, children=tuple(entries)))
        elif field.label == field.LABEL_REPEATED:
            for index, entry in enumerate(value):
                child = path + "/" + str(index)
                if field.message_type:
                    node = _message_node(desc, field, entry, child, liftable=len(value) == 1)
                    if node.children is None or node.children:
                        result.extend(_compact(desc, node))
                else:
                    result.append(_Node(_label(field.name), (field.name,), child, value=entry))
        elif field.message_type:
            node = _message_node(desc, field, value, path, liftable=True)
            if node.children is None or node.children:
                result.extend(_compact(desc, node))
        else:
            result.append(_Node(_label(field.name), (field.name,), path, value=value))
    return result


def readable_columns(desc, data):
    """Return schema-path columns with human labels and unchanged cell values."""
    def walk(nodes, labels=(), groups=()):
        for node in nodes:
            names, branches = labels + (node.label,), groups + (node.path,)
            if node.children is None:
                yield dict(path=node.path, labels=names, groups=branches, value=node.value)
            else:
                yield from walk(node.children, names, branches)
    return list(walk(_nodes(desc, data)))
