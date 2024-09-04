import csv, os, sys
import enum, dataclasses, uuid, collections
import itertools
import re
import pandas as pd


class Placeholders(enum.Enum):
    TemplateKey = "key"
    TemplateParameter = "$tp"
    InvalidParameterPlaceholder = "-invalid-"

unit_aliases = {
    "%":"percentage",
    "Hz":"hertz",
    # "mol":"mole",
    # "mmol":"millimole",
    "s":"second",
    "hr":"hour",
    "N":"newton",
    "mN":"millinewton",
    "min":"minute",
    "L":"liter",
    "mL":"milliliter",
    "nm":"nanometer",
    "atm":"atmosphere"
}
def normalize_key(k):
    k_bits = k.split("(", 1)
    if len(k_bits) == 2:
        k, units = k_bits
    else:
        units = None
    k = k.strip().replace(" ", "_").lower()
    if units is not None:
        units = units.replace(")", "").strip()
        units = unit_aliases.get(units, units).replace(" ", "_").lower()
    return k, units

class ProtoType:
    def __init__(self,
                 key_type,
                 value_type,
                 container_type
                 ):
        self.key_type = key_type
        self.value_type = value_type
        self.container_type = container_type
    def __eq__(self, other):
        return (
            self.key_type is other.key_type
            and self.value_type is other.value_type
            and self.container_type is other.container_type
        )

    def __repr__(self):
        if self.key_type is not None:
            return "{}<{}:{}>".format(
                type(self).__name__,
                self.key_type.__name__,
                self.value_type.__name__
            )
        elif self.container_type is not None:
            return "{}[{}]".format(
                type(self).__name__,
                # self.key_type.__name__,
                self.value_type.__name__
            )
        else:
            return "{}<{}>".format(
                type(self).__name__,
                # self.key_type.__name__,
                self.value_type.__name__
            )
class ProtoMessage:
    def __init__(self, proto_type, data:dict=None):
        self.type = proto_type
        self.fields = data if data is not None else {}
    def __repr__(self):
        return "{}({}, {})".format(
            type(self).__name__,
            self.type,
            self.fields
        )
    def validate(self):
        for f,v in self.fields.items():
            if not hasattr(self.type, f):
                raise ValueError("bad field {} for type {}".format(f, self.type))
            if isinstance(v, (ProtoMessage, ProtoContainer)):
                v.validate()
            # field_type = ProtoHandler.get_field_type(self.type, f)
    def get_field(self, field_name):
        kmap = ProtoHandler.get_kind_type_map().get(self.type, {})
        if field_name in kmap.values():
            subtype = None
            for tt, name in kmap.items():
                if name == field_name:
                    subtype = tt
                    break
            else:
                raise ValueError("???")
        else:
            field_names = [f.name for f in dataclasses.fields(self.type)]
            if field_name not in field_names:
                raise ValueError("bad field '{}' for type {} (allowed fields are {})".format(field_name, self.type, field_names))

            subtype = ProtoHandler.get_field_type(self.type, field_name)
        if field_name not in self.fields:
            self.fields[field_name] = ProtoContainer(subtype)
        return self.fields[field_name]
    def insert_field(self, field_name, data=None):
        field_name, units = normalize_key(field_name)
        key_path, fields = ProtoHandler.resolve_insertion_spot(ProtoType(None, self.type, None), field_name)
        if data is not None:
            key_path, final_key = key_path[:-1], key_path[-1]
            if fields is None:
                fields = {}
            fields.update({final_key:data})

        if field_name == "time":
            raise ValueError(key_path)
        msg = self
        if len(key_path) > 0:
            msg = msg[key_path[0]]
            for m in key_path[1:]:
                msg = msg[m]
        if fields is not None:
            if units is not None:
                unit_field = ProtoHandler.resolve_unit_message(fields, units)
                fields.update(unit_field)
            msg.update(fields)
        elif units is not None:
            unit_field = ProtoHandler.resolve_unit_message(msg, units)
            msg.add_message(unit_field)
        return msg
    def insert_tree(self, subtree):
        msg = self
        for header in subtree:
            if isinstance(header, str):
                msg = self.insert_field(header)
            else:
                msg.insert_tree(header) # subtree
    def insert_dict(self, subtree):
        for header,subtree in subtree.items():
            if isinstance(subtree, dict):
                msg = self.insert_field(header)
                msg.insert_dict(subtree)
            elif isinstance(subtree, list):
                msg = self.insert_field(header)
                for submsg in subtree:
                    msg.add_message(submsg)
            else:
                msg = self.insert_field(header, data=subtree)

    def has_path(self, key_path):
        if len(key_path) == 0:
            return False
        key, rest = key_path[0], key_path[1:]
        if key not in self.fields:
            return False
        else:
            subtype = self.fields[key]
            if len(rest) > 0:
                return subtype.has_path(rest)
            else:
                if isinstance(subtype, ProtoContainer) and subtype.type.container_type is not None:
                    return False
                else:
                    return True
    def __getitem__(self, item):
        return self.get_field(item)
    def __setitem__(self, key, value):
        self.fields[key] = value
    def update(self, proto:'ProtoMessage'):
        if isinstance(proto, dict):
            self.fields.update(proto)
        else:
            if proto.type is not self.type:
                raise ValueError("can't merge protos of different types {} and {}".format(
                    self.type, proto.type
                ))
            self.fields.update(proto.fields)
    def to_template(self, key_name=None):
        return {
            k: v.to_template(key_name=k) if isinstance(v, (ProtoMessage, ProtoContainer)) else v
            for k, v in self.fields.items()
        }

class ProtoContainer:
    def __init__(self, proto_type:ProtoType):
        self.type = proto_type
        self.template_keys = []
        self.keys = []
        self.values = []
    # def get_message(self):
    #     return ProtoMessage(self.type.value_type)
    def __repr__(self):
        if self.type.key_type is not None:
            return "{}({}, {}:{})".format(
                type(self).__name__,
                self.type,
                self.keys,
                self.values
            )
        elif self.type.container_type is not None:
            return "{}({}, {})".format(
                type(self).__name__,
                self.type,
                self.values
            )
        else:
            return "{}({}, {})".format(
                type(self).__name__,
                self.type,
                self.values[-1] if len(self.values) > 0 else None
            )
    def add_key(self, key):
        if len(self.keys) > 0 and self.keys[-1] is None:
            self.keys[-1] = Placeholders.TemplateParameter
        else:
            msg = ProtoMessage(self.type.value_type)
            self.add_message(Placeholders.TemplateParameter, msg)

    def add_message(self, data_or_key:'ProtoMessage|str', data:ProtoMessage=None, key_name=None):
        if data is None:
            key = None
            data = data_or_key
        else:
            key = data_or_key

        if isinstance(data, dict):
            data = ProtoMessage(self.type.value_type, data)

        if data.type is not self.type.value_type:
            raise ValueError(data.type, self.type.value_type)

        if self.type.key_type is not None:
            if key is not None:
                self.template_keys.append(key)
            self.keys.append(key)
            self.values.append(data)
        else:
            if key is not None:
                raise ValueError("message key not supported for data of type {}".format(self.type))
            if self.type.container_type is not None or len(self.values) == 0:
                self.values.append(data)
            else:
                raise ValueError("message already added for data of type {}".format(self.type))

    def get_default_message(self):
        if len(self.values) == 0:
            self.add_message(ProtoMessage(self.type.value_type))
        return self.values[-1]
    def get_field(self, field_name):
        if isinstance(field_name, str):
            return self.get_default_message().get_field(field_name)
        else:
            if self.type.key_type is not None:
                return {
                    "key": self.keys[field_name],
                    "value": self.values[field_name]
                }
            else:
                return self.values[field_name]
    def __getitem__(self, item):
        return self.get_field(item)

    def insert_field(self, field_name, data=None):
        field_name, units = normalize_key(field_name)
        if field_name == Placeholders.TemplateKey.value: # reserved for keys in maps
            self.add_key(field_name)
            return self
        else:
            key_path, fields = ProtoHandler.resolve_insertion_spot(self.type, field_name)
            if data is not None:
                key_path, final_key = key_path[:-1], key_path[-1]
                if fields is None:
                    fields = {}
                fields.update({final_key: data})
            msg = self.get_default_message()
            if msg.has_path(key_path) and self.type.container_type is not None:
                msg = ProtoMessage(self.type.value_type)
                self.add_message(msg)
            if len(key_path) > 0:
                msg = msg[key_path[0]]
                for m in key_path[1:]:
                    msg = msg[m]
            if fields is not None:
                if units is not None:
                    unit_field = ProtoHandler.resolve_unit_message(fields, units)
                    fields.update(unit_field)
                msg.update(fields)
            elif units is not None:
                unit_field = ProtoHandler.resolve_unit_message(msg, units)
                msg.add_message(unit_field)
            return msg
    def insert_tree(self, subtree):
        msg = self
        for header in subtree:
            if isinstance(header, str):
                msg = self.insert_field(header)
            else:
                msg.insert_tree(header) # subtree
    def insert_dict(self, subtree):
        for header,subtree in subtree.items():
            if isinstance(subtree, dict):
                msg = self.insert_field(header)
                msg.insert_dict(subtree)
            elif isinstance(subtree, list):
                msg = self.insert_field(header)
                for submsg in subtree:
                    msg.add_message(submsg)
            else:
                msg = self.insert_field(header, data=subtree)
    def __setitem__(self, key, value):
        self.get_default_message().__setitem__(key, value)
    def update(self, proto:'ProtoContainer|ProtoMessage|dict'):
        if isinstance(proto, (ProtoMessage,dict)):
            msg = self.get_default_message()
            fields = proto.fields if isinstance(proto, ProtoMessage) else proto
            if any(msg.has_path([f]) for f in fields.keys()):
                msg = ProtoMessage(self.type.value_type)
                self.add_message(msg)
            self.get_default_message().update(proto)
        else:
            if proto.type != self.type:
                raise ValueError("can't merge protos of different types {} and {}".format(
                    self.type, proto.type
                ))
            self.keys.extend(proto.keys)
            self.values.extend(proto.values)
        # proto.keys = None # should I invalidate the old proto?

    def validate(self):
        if self.type.key_type is not None:
            for k in self.keys:
                if not isinstance(k, self.type.key_type): raise TypeError("bad value {} for {}".format(k, self.type.key_type))
        for m in self.values:
            m.validate()

    def to_template(self, key_name=None):
        if self.type.key_type is not None:
            return [
                {
                    "key": k if k is not None else key_name+"-"+str(uuid.uuid4())[:6],
                    "value": v.to_template()
                }
                for k, v in zip(self.keys, self.values)
            ]
        elif self.type.container_type is not None:
            return [v.to_template() for v in self.values]
        else:
            if ProtoHandler.is_value_type(self.type.value_type):
                return Placeholders.TemplateParameter
            else:
                return self.values[0].to_template()

    def has_path(self, key_path):
        return self.get_default_message().has_path(key_path)


class ProtoTemplater:
    def __init__(self, template_spec, validator=None):
        self.spec = template_spec
        self.validator = validator
        self._paths = None
    @classmethod
    def from_proto(cls, proto:'ProtoContainer|ProtoMessage'):
        return cls(proto.to_template(), proto)
    @property
    def template_paths(self):
        if self._paths is None:
            self._paths = self.get_template_paths(self.spec)
        return self._paths
    @classmethod
    def get_template_paths(cls, template):

        if isinstance(template, dict):
            return [
                p
                for k,v in template.items()
                for p in (
                             [[Placeholders.TemplateKey]]
                                if k is Placeholders.TemplateParameter else
                             []
                         ) + [
                        [k] + pp
                        for pp in cls.get_template_paths(v)
                    ]
            ]
        elif isinstance(template, list):
            return [
                [i] + p
                for i, m in enumerate(template)
                for p in cls.get_template_paths(m)
            ]
        elif template is Placeholders.TemplateParameter:
            return [[]]
        else:
            return []

    @classmethod
    def merge_templates(cls, base:dict, vars:dict):
        new = {}
        for k in vars.keys():
            if k in base.keys():
                if isinstance(base[k], dict):
                    new[k] = cls.merge_templates(base[k], vars[k])
                elif isinstance(base[k], list):
                    new[k] = base[k] + vars[k]
                else:
                    new[k] = vars[k]
            else:
                new[k] = vars[k]
        for k in base.keys() - vars.keys():
            new[k] = base[k]
        return new

    def validate_value(self, validator, key, value):
        valid = True
        if key == "type":
            if value == "":
                value = "UNSPECIFIED"
            else:
                if isinstance(validator, ProtoMessage):
                    validator_type = ProtoHandler.get_field_type(validator.type, key)
                elif isinstance(validator, ProtoContainer):
                    validator_type = ProtoHandler.get_field_type(validator.type.value_type, key)
                else:
                    raise ValueError("unexpected validator {}".format(validator))
                value, _ = normalize_key(value)
                value = ProtoHandler.get_enum_values_map().get(
                    validator_type.value_type,
                    {value:value}
                )[value]
        elif isinstance(value, str) and value == "":
            valid = False
        return valid, value
    def apply(self, values):
        if len(values) != len(self.template_paths):
            raise ValueError("expected {} values got {}".format(
                len(self.template_paths), len(values)
            ))
        copy_tree = self.spec.copy() # shallow copy
        if self.validator is not None:
            validator_tree = {
                "_value":self.validator,
                "children":{}
            }
        else:
            validator_tree = None
        for path, val in zip(self.template_paths, values):
            if validator_tree is not None:
                vtree = validator_tree
            else:
                vtree = None
            parent_tree = None
            subtree = copy_tree
            base_tree = self.spec
            p = None
            for p in path[:-1]:
                if subtree[p] is base_tree[p]:
                    subtree[p] = subtree[p].copy()
                if vtree is not None:
                    if p not in vtree["children"]:
                        subval = vtree["_value"][p]
                        vtree["children"][p] = {
                            "_value":subval,
                            "children":{}
                        }
                    vtree = vtree["children"][p]
                parent_tree = subtree
                subtree = subtree[p]
                base_tree = base_tree[p]

            if vtree is not None:
                valid, val = self.validate_value(vtree["_value"], path[-1], val)
                if not valid:
                    if isinstance(subtree, dict):
                        if (
                                path[-1] == "value"
                                and len(subtree) == 2
                                and ("units" in subtree or "type" in subtree)
                        ): # TODO: implement a better check for an optional value type
                            parent_tree[p] = Placeholders.InvalidParameterPlaceholder
                        else:
                            subtree[path[-1]] = Placeholders.InvalidParameterPlaceholder
                    else:
                        subtree[path[-1]] = Placeholders.InvalidParameterPlaceholder
                else:
                    subtree[path[-1]] = val
            else:
                subtree[path[-1]] = val
        return copy_tree

    @classmethod
    def prep_proto(cls, proto):
        if isinstance(proto, dict):
            new = {}
            for k,v in proto.items():
                if v is not Placeholders.InvalidParameterPlaceholder:
                    if isinstance(v, list) and all(
                        isinstance(vv, dict) and list(sorted(vv.keys())) == ["key", "value"]
                        for vv in v
                    ):
                        subv = {}
                        for vv in v:
                            if vv["key"] is Placeholders.InvalidParameterPlaceholder: continue
                            if vv["value"] is Placeholders.InvalidParameterPlaceholder: continue
                            prepped = cls.prep_proto(vv["value"])
                            if prepped is Placeholders.InvalidParameterPlaceholder: continue
                            subv[vv["key"]] = prepped
                            vv["key"]:cls.prep_proto(vv["value"])
                        if len(subv) > 0:
                            new[k] = subv
                    else:
                        prepped = cls.prep_proto(v)
                        if prepped is not Placeholders.InvalidParameterPlaceholder:
                            new[k] = prepped
            if len(new) == 0 or len(new) == 1 and next(iter(new.keys())) == "reaction_role":
                new = Placeholders.InvalidParameterPlaceholder
        elif isinstance(proto, list):
            new = []
            for p in proto:
                if p is Placeholders.InvalidParameterPlaceholder: continue
                prepped = cls.prep_proto(p)
                if prepped is Placeholders.InvalidParameterPlaceholder:continue
                new.append(prepped)
            if len(new) == 0:
                new = Placeholders.InvalidParameterPlaceholder
        else:
            new = proto
        return new


    @classmethod
    def build_proto(cls, proto):
        from .proto import reaction_pb2
        from google.protobuf.json_format import ParseDict
        proto = cls.prep_proto(proto)
        rxn = ParseDict(proto, reaction_pb2.Reaction())
        return rxn

class ProtoHandler:
    from .proto import parallel_proto # TODO: should use the real proto eventually, but this works for now

    _proto_map = None
    _alias_map = None
    _value_map = None
    @classmethod
    def get_proto_map(cls):
        if cls._proto_map is None:
            cls._proto_map, cls._alias_map, _ = cls.build_proto_map(cls.parallel_proto.Reaction)
        return cls._proto_map
    @classmethod
    def get_alias_map(cls):
        if cls._alias_map is None:
            cls._proto_map, cls._alias_map, _ = cls.build_proto_map(cls.parallel_proto.Reaction)
        return cls._alias_map
    atomic_types_map = {
        "str":str,
        "bool":bool,
        "int":int,
        "float":float,
        "bytes":bytes
    }
    @classmethod
    def build_proto_map(cls, root):
        map = {}
        type_aliases = {}
        bad_aliases = set()
        for field in dataclasses.fields(root):
            field_type = field.type
            if isinstance(field_type, str): # parallel_proto is compiled to str by default
                if field_type.startswith("list["):
                    field_type = field_type[5:-1]
                elif field_type.startswith("dict["):
                    field_type = field_type[:-1].split(", ", 1)[1]

            if field_type in cls.atomic_types_map:
                map[field.name] = cls.atomic_types_map[field_type]
            else:
                subtype = getattr(cls.parallel_proto, field_type)
                if dataclasses.is_dataclass(subtype):
                    submap, subaliases, subbad_aliases = cls.build_proto_map(subtype)
                    map[field.name] = submap
                    bad_aliases.update(subbad_aliases)
                else:
                    map[field.name] = subtype
                    subaliases = {}
                    if issubclass(subtype, enum.Enum):
                        for e in subtype:
                            if e.value not in bad_aliases:
                                subaliases[e.value] = field
                for a,v in subaliases.items():
                    if a not in bad_aliases:
                        if a in type_aliases:
                            del type_aliases[a]
                            bad_aliases.add(a)
                        else:
                            type_aliases[a] = v

        return map, type_aliases, bad_aliases

    @classmethod
    def get_unique_key_map(cls):
        unique_key_names = []
        for type_name in cls.parallel_proto.__all__:
            if type_name.startswith("TagTypeUnion"):
                unique_key_names.append(type_name)
        return unique_key_names

    @classmethod
    def get_value_type_map(cls):
        if cls._value_map is None:
            value_types = {}
            for type_name in cls.parallel_proto.__all__:
                type_obj = getattr(cls.parallel_proto, type_name)
                if dataclasses.is_dataclass(type_obj):
                    for field in dataclasses.fields(type_obj):
                        if field.name == "value":
                            value_types[type_obj] = cls.resolve_typestr(field.type)
            cls._value_map = value_types
        return cls._value_map

    _identifiers_map = None
    _units_map = None
    _kind_map = None
    _enum_map = None
    @classmethod
    def _build_maps(cls):
        identifier_types = {}
        kinds_types = {}
        units_types = {}
        enum_types = {}
        for type_name in cls.parallel_proto.__all__:
            type_obj = getattr(cls.parallel_proto, type_name)
            if issubclass(type_obj, enum.Enum):
                enum_types[type_obj] = {
                    e.value:e.name
                    for e in type_obj
                }
            if type_obj is cls.parallel_proto.ReactionRoleType: # very special cased
                identifier_types[type_obj] = [
                    e.value for e in type_obj
                ]
            elif dataclasses.is_dataclass(type_obj):
                for field in dataclasses.fields(type_obj):
                    field_type = cls.resolve_typestr(field.type)
                    if field.name == "units":
                        for e in cls.resolve_typestr(field.type):
                            if e.value != "unspecified":
                                units_types[e.value] = type_obj
                    elif field_type is not None and issubclass(field_type, cls.parallel_proto.OneOfType):
                        kinds_types[type_obj] = {
                            cls.resolve_typestr(subfield.type):subfield.name
                            for subfield in dataclasses.fields(field_type)
                        }
                    elif field.name == "type":
                        identifier_types[type_obj] = [
                            e.value for e in cls.resolve_typestr(field.type)
                        ]
        return identifier_types, units_types, kinds_types, enum_types
    @classmethod
    def build_maps(cls):
        if (
                cls._identifiers_map is None
                or cls._units_map is None
                or cls._kind_map is None
                or cls._enum_map is None
        ):
            cls._identifiers_map, cls._units_map, cls._kind_map, cls._enum_map = cls._build_maps()
        return cls._identifiers_map, cls._units_map, cls._kind_map, cls._enum_map

    @classmethod
    def get_identifier_type_map(cls):
        return cls.build_maps()[0]
    @classmethod
    def get_units_type_map(cls):
        return cls.build_maps()[1]
    @classmethod
    def get_kind_type_map(cls):
        return cls.build_maps()[2]
    @classmethod
    def get_enum_values_map(cls):
        return cls.build_maps()[3]
    @classmethod
    def get_nounit_value_type_map(cls):
        return {
            "percentage":cls.parallel_proto.Percentage,
            "unitless":cls.parallel_proto.FloatValue
        }

    @classmethod
    def get_reaction_conditions_map(cls):
        return {
            f.name:getattr(cls.parallel_proto, f.type)
            for f in dataclasses.fields(cls.parallel_proto.ReactionConditions)
            if f.type not in cls.atomic_types_map
        }
    @classmethod
    def get_reaction_role_map(cls):
        return dict(
            {
                s: "inputs"
                for s in
                ['reactant', 'reagent', 'workup', 'authentic_standard', 'catalyst', 'internal_standard', 'solvent']
            },
            **{
                s: "outcomes"
                for s in ['byproduct', 'side_product', 'product']
            }
        )

    @classmethod
    def infer_reaction_data_type(cls, root, key):
        map, aliases, _ = cls.build_proto_map(root)
        if key in map:
            return map[key]
        else:
            if key in aliases: return aliases[key]
            raise KeyError("can't determine where {} fits into the reaction schema".format(key))

    @classmethod
    def resolve_typestr(cls, typestr):
        if typestr in cls.atomic_types_map:
            return cls.atomic_types_map[typestr]
        elif typestr.startswith("dict[") or typestr.startswith("list["):
            return None
        else:
            return getattr(cls.parallel_proto, typestr)
    @classmethod
    def resolve_type(cls, type_name:str):
        if type_name in cls.atomic_types_map:
            key_type = None
            value_type = cls.atomic_types_map[type_name]
            container_type = None
        elif type_name.startswith("dict["):
            key_type, value_type = [cls.resolve_typestr(t) for t in type_name[5:-1].split(", ", 1)]
            container_type = dict
        elif type_name.startswith("list["):
            key_type = None
            value_type = cls.resolve_typestr(type_name[5:-1])
            container_type = list
        else:
            key_type = None
            value_type = getattr(cls.parallel_proto, type_name)
            container_type = None
        return ProtoType(key_type, value_type, container_type)
    @classmethod
    def get_field_type(cls, root_type, field_name):
        for f in cls.field_iter(root_type):
            if f.name == field_name: return cls.resolve_type(f.type)
        raise ValueError("no field '{}' in {}".format(
            field_name, root_type
        ))

    @classmethod
    def field_iter(cls, type_obj):
        try:
            fields = dataclasses.fields(type_obj)
        except (TypeError, AttributeError):
            fields = []
        return fields

    @classmethod
    def is_value_type(cls, type):
        return (
            type in cls.atomic_types_map.values()
            or (
                not issubclass(type, cls.parallel_proto.OneOfType)
                and issubclass(type, enum.Enum)
            )
        )
    @classmethod
    def is_identifier_type(cls, field):
        return field in cls.get_identifier_type_map()

    @classmethod
    def bfs_search(cls, root_type:ProtoType, test):

        bfs_queue = collections.deque()
        bfs_queue.append([[root_type], []])

        while bfs_queue:
            path, keys = bfs_queue.pop()
            root = path[-1]
            for field in cls.field_iter(root.value_type):
                field_type = cls.resolve_type(field.type)
                full_path = path + [field_type]
                key_path = keys + [field.name]
                match, result = test(field.name, field_type, full_path, key_path)
                if match: return result
                bfs_queue.append([full_path, key_path])


    default_paths = {}
    @classmethod
    def get_default_paths(cls):
        role_map = cls.get_enum_values_map()[cls.parallel_proto.ReactionRoleType]
        return {
            cls.parallel_proto.Reaction: dict(
                {
                    s: (["inputs", "components"], {"reaction_role":role_map[s]})
                    for s in
                    ['reactant', 'reagent', 'workup', 'authentic_standard', 'catalyst', 'internal_standard', 'solvent']
                },
                **{
                    s: (["outcomes", "products"], {"reaction_role":role_map[s]})
                    for s in ['byproduct', 'side_product', 'product']
                }
            )
        }
    @classmethod
    def resolve_identifier_fields(cls, key_path, field_type, field_name, key_name):
        if issubclass(field_type.value_type, enum.Enum):
            value_name = cls.get_enum_values_map()[field_type.value_type][key_name]
            msg = {field_name:value_name}
            key_path = key_path[:-1]
        else:
            core_type = cls.get_field_type(field_type.value_type, "type").value_type
            value_name = cls.get_enum_values_map()[core_type][key_name]
            if field_type.value_type in cls.get_kind_type_map():
                msg = ProtoMessage(
                    field_type.value_type,
                    {
                        "type": value_name
                    })
            else:
                msg = ProtoMessage(
                    field_type.value_type,
                    {
                        "type": value_name,
                        "value": Placeholders.TemplateParameter
                    })
            if field_type.key_type is not None or field_type.container_type is not None:
                submsg = msg
                msg = ProtoContainer(field_type)
                msg.add_message(submsg)
        return key_path, msg
    @classmethod
    def resolve_insertion_spot(cls, root_type:ProtoType, key_name):
        # we resolve where a given key should be added to a given
        # type by running a breadth-first search for the key name
        key_name, units = normalize_key(key_name)
        default_paths = cls.get_default_paths()
        if key_name in default_paths.get(root_type.value_type, []):
            return default_paths[root_type.value_type][key_name]

        id_map = cls.get_identifier_type_map()
        def test(field_name, field_type, full_path, key_path):
            if field_name is not None and field_name == key_name:
                if units is not None:
                    raise ValueError(field_name, units)
                return True, (key_path, None)
            elif key_name in id_map.get(field_type.value_type, []):
                return True, cls.resolve_identifier_fields(key_path, field_type, field_name, key_name)
            else:
                return False, None

        if key_name in id_map.get(root_type.value_type, []):
            woof = cls.resolve_identifier_fields([], ProtoType(None, root_type.value_type, None), "type", key_name)
            return woof

        res = cls.bfs_search(root_type, test)
        if res is not None: return res

        raise ValueError("can't find where to insert '{}' into {}".format(
            key_name, root_type
        ))

    @classmethod
    def get_reaction_fields(cls):
        return {
            f.name:cls.resolve_type(f.type)
            for f in dataclasses.fields(cls.parallel_proto.Reaction)
        }

    @classmethod
    def resolve_unit_message(cls, msg, units):
        unit_map = cls.get_units_type_map()
        nounit_map = cls.get_nounit_value_type_map()
        type = unit_map.get(units, None)
        if type is None:
            type = nounit_map.get(units, None)
            if type is not None: units = None
        if type is None:
            raise ValueError("unknown unit specifier {}; known types are {}".format(
                units, "\n".join(itertools.chain(unit_map.keys(), nounit_map.keys()))
            ))
        if units is None:
            unit_msg = ProtoMessage(type, {"value":Placeholders.TemplateParameter})
        else:
            core_type = cls.get_field_type(type, "units").value_type
            value_name = cls.get_enum_values_map()[core_type][units]
            unit_msg = ProtoMessage(type, {"units":value_name, "value":Placeholders.TemplateParameter})

        kind_map = cls.get_kind_type_map()
        if isinstance(msg, ProtoContainer):
            msg_type = msg.type.value_type
        else:
            msg_type = msg.type
        if msg_type in kind_map:
            msg = ProtoMessage(
                msg_type,
                {
                    kind_map[msg_type][type]: unit_msg
                }
            )
        else:
            msg = unit_msg
        return msg

class DatasetBlocks(enum.Enum):
    REACTION_BLOCK = "REACTION"
    VARIANTS_BLOCK = "VARIANTS"
    DATA_BLOCK = "DATA"
    COMMENT = '#!'
class DatasetConstructor:
    """
    An alternate CSV input wrapper
    """

    def __init__(self, common_block, variant_structure, extra_fields=None):
        self.common = common_block
        self.variant = variant_structure
        self.extra_fields = extra_fields
        self._template = None

    @classmethod
    def from_iter(cls, iterable, extra_fields=None):
        blocks = []
        common = []
        variants = []
        data = []
        active = None
        for row in iterable:
            if row[0].startswith(DatasetBlocks.COMMENT.value):
                continue
            key = row[0].upper()
            if key == DatasetBlocks.REACTION_BLOCK.value:
                if active is None:
                    active = DatasetBlocks.REACTION_BLOCK
                elif active is not DatasetBlocks.DATA_BLOCK:
                    raise ValueError("expected to be on a data block")
                else:
                    blocks.append([common, variants, data])
                    common = []
                    variants = []
                    data = []
            elif key == DatasetBlocks.VARIANTS_BLOCK.value:
                if active is None or active is not DatasetBlocks.REACTION_BLOCK:
                    raise ValueError("expected to be on a reaction block")
                active = DatasetBlocks.VARIANTS_BLOCK
            elif key == DatasetBlocks.DATA_BLOCK.value:
                if active is None or active is not DatasetBlocks.VARIANTS_BLOCK:
                    raise ValueError("expected to be on a variants block")
                active = DatasetBlocks.DATA_BLOCK
            elif active is not None and len(row[0]) > 0:
                raise ValueError("unknown block specifier {}".format(row[0]))
            elif active is not None and all(r=="" for r in row):
                if active is not DatasetBlocks.DATA_BLOCK:
                    raise ValueError("expected to be on a data block")
                active = None
                blocks.append([common, variants, data])
                common = []
                variants = []
                data = []
            elif active is DatasetBlocks.REACTION_BLOCK:
                common.append(row[1:])
            elif active is DatasetBlocks.VARIANTS_BLOCK:
                variants.append(row[1:])
            elif active is DatasetBlocks.DATA_BLOCK:
                data.append(row[1:])
        else:
            if active is not None:
                if active is not DatasetBlocks.DATA_BLOCK:
                    raise ValueError("expected to be on a data block")
                blocks.append([common, variants, data])
                common = []
                variants = []
                data = []

        return [
            (cls(com, var, extra_fields=extra_fields), dat)
            for com,var,dat in blocks
        ]

    @classmethod
    def from_spreadsheet(cls, file_name_or_buffer, suffix=None, extra_fields=None):
        # adapted from templating.py
        if suffix is None:
            _, suffix = os.path.splitext(file_name_or_buffer)
        if suffix in [".xls", ".xlsx"]:
            data = pd.read_excel(file_name_or_buffer, dtype=str, keep_default_na=False)
        else:
            data = pd.read_csv(file_name_or_buffer, dtype=str, keep_default_na=False)
        return cls.from_iter(data.values, extra_fields=extra_fields)

    @classmethod
    def _parse_csv_rows(cls, csv_rows):
        key_row, child_rows = csv_rows[0], csv_rows[1:]
        if len(child_rows) == 0:
            return cls.strip_empties([key_row])

        keys = []
        splits = []
        key = ""
        start = 0
        for n, k in enumerate(key_row):
            k = k.strip()
            if len(k) > 0:  # not the empty string
                if start < n:
                    keys.append(key)
                    splits.append([start, n])
                key = k
                start = n
        else:
            # if key == "": raise ValueError("spec had no keys")
            keys.append(key)
            splits.append([start, len(key_row)])

        parser = lambda r:r[0] if len(r) == 1 else cls._parse_csv_rows(r)
        flat_tree = sum(
            # concatenate parse trees, lift empty keys up a level
            [
                parser([
                    r[s[0]:s[1]]
                    for r in child_rows
                ])
                    if k == "" else
                [k, parser([
                    r[s[0]:s[1]]
                    for r in child_rows
                ])]
                for k, s in zip(keys, splits)
            ],
            []
        )

        return cls.strip_empties(flat_tree)
    @classmethod
    def strip_empties(cls, tree_list):
        return [
            s
                if isinstance(s, str) else
            cls.strip_empties(s)
            for s in tree_list
            if (isinstance(s, str) and len(s) > 0 or len(cls.strip_empties(s)) > 0)
        ]

    comment_char = "#!"
    @classmethod
    def comment_index(cls, row):
        n = 0
        for r in row:
            if r.startswith(DatasetBlocks.COMMENT.value): break
            n += 1
        return n
    @classmethod
    def parse_csv_rows(cls, csv_rows):
        csv_rows = [
            r[:cls.comment_index(r)]
            for r in csv_rows
        ]
        max_len = max(len(r) for r in csv_rows)
        csv_rows = [
            [s.strip() for s in r] + [""] * (max_len - len(r))
            for r in csv_rows
        ]
        return cls._parse_csv_rows(csv_rows)
    int_regex = re.compile(r'\-?\d{1,10}')
    num_regex = re.compile(r'\-?\d{1,10}\.\d{1,10}')
    false_regex = re.compile(r'FALSE|NO', re.IGNORECASE)
    true_regex = re.compile(r'TRUE|YES', re.IGNORECASE)
    @classmethod
    def sanitize_csv_data(cls, row, max_row=None):
        row = [r.strip() for r in row]
        if max_row is not None and len(row) > max_row:
            trailing_spaces = 0
            for _ in reversed(row):
                if _ == "":
                    trailing_spaces += 1
                else:
                    break
            if trailing_spaces > 0:
                diff = max_row - len(row)
                trailing_spaces = min(trailing_spaces, diff)
                row = row[:-trailing_spaces]
        return [
                False if cls.false_regex.fullmatch(d) else
                True if cls.true_regex.fullmatch(d) else
                int(d) if cls.int_regex.fullmatch(d) else
                float(d) if cls.num_regex.fullmatch(d) else
                d
                for d in row
            ]

    @classmethod
    def sort_reaction_keys(cls, template):
        new = {}
        reaction_fields = [
            f.name for f in dataclasses.fields(ProtoHandler.parallel_proto.Reaction)
        ]
        for k in sorted(template.keys(), key=lambda rk:reaction_fields.index(rk)):
            new[k] = template[k]
        return new
    @classmethod
    def setup_template(cls, common, variant, extra_fields=None):

        rxn = ProtoMessage(ProtoHandler.parallel_proto.Reaction)
        nt_tree = cls.parse_csv_rows(common[:-1])
        rxn.insert_tree(nt_tree)
        if extra_fields is not None:
            rxn.insert_dict(extra_fields)
        templater = ProtoTemplater.from_proto(rxn)
        base_template = templater.apply(
            cls.sanitize_csv_data(
                [s for s in common[-1] if len(s) > 0],
                len(templater.template_paths)
            )
        )

        rxn = ProtoMessage(ProtoHandler.parallel_proto.Reaction)
        var_tree = cls.parse_csv_rows(variant)
        rxn.insert_tree(var_tree)
        var_template = rxn.to_template()

        return ProtoTemplater(
            ProtoTemplater.merge_templates(
                base_template,
                var_template
            ),
            rxn
        )

    @property
    def template(self):
        if self._template is None:
            self._template = self.setup_template(self.common, self.variant, extra_fields=self.extra_fields)
        return self._template

    @classmethod
    def enumerate_spreadsheet(cls, file,
                              name=None,
                              id=None,
                              extra_fields=None
                              ):
        from google.protobuf.json_format import ParseDict
        from .proto import dataset_pb2

        if name is None:
            name, _ = os.path.splitext(os.path.basename(file))
        if id is None:
            id = str(uuid.uuid4()).replace("-", "")[:32]

        parser_data = cls.from_spreadsheet(file, extra_fields=extra_fields)
        protos = []
        total_rxns = len([r for _,d in parser_data for r in d])
        ndig = max([4, len(str(total_rxns))])
        subid = id[:-ndig]
        templ = "{:0>"+str(ndig)+"}"
        reaction_num = 0
        for parser, data in parser_data:
            for row in data:
                reaction_num += 1
                protos.append(
                    dict(
                        ProtoTemplater.prep_proto(
                            parser.template.apply(
                                cls.sanitize_csv_data(row, len(parser.template.template_paths))
                            )
                        ),
                        reaction_id="cmcc-" + subid + templ.format(reaction_num)
                    )
                )

        return ParseDict(
            {
                "name":name,
                "dataset_id":"cmcc_dataset-"+id,
                "reactions": protos
            },
            dataset_pb2.Dataset()
        )
