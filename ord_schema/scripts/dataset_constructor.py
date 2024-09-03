import collections
import dataclasses, os, sys
import enum
import uuid

class Placeholders:
    TemplateParameter = "$"

def normalize_key(k):
    k_bits = k.split("(", 1)
    if len(k_bits) == 2:
        k, units = k_bits
    else:
        units = None
    k = k.strip().replace(" ", "_").lower()
    if units is not None:
        units = units.replace(")", "").strip().replace(" ", "_").lower()
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
        field_names = [f.name for f in dataclasses.fields(self.type)]
        if field_name not in field_names:
            raise ValueError("bad field {} for type {} (allowed fields are {})".format(field_name, self.type, field_names))
        if field_name not in self.fields:
            subtype = ProtoHandler.get_field_type(self.type, field_name)
            self.fields[field_name] = ProtoContainer(subtype)
        return self.fields[field_name]
    def insert_field(self, field_name):
        key_path, fields = ProtoHandler.resolve_insertion_spot(ProtoType(None, self.type, None), field_name)
        if self.has_path(key_path):
            raise ValueError(...)
        msg = self
        if len(key_path) > 0:
            msg = msg[key_path[0]]
            primary = msg
            for m in key_path[1:]:
                msg = msg[m]
        else:
            primary = msg
        if fields is not None:
            msg.update(fields)
        return primary
    def insert_tree(self, subtree):
        msg = self
        for header in subtree:
            if isinstance(header, str):
                msg = self.insert_field(header)
            else:
                msg.insert_tree(header) # subtree

    def has_path(self, key_path):
        if len(key_path) == 0:
            return False
        key, rest = key_path[0], key_path[1:]
        if key not in self.fields:
            return False
        else:
            if len(key_path) > 0:
                return self.fields[key].has_path(rest)
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
    def to_template(self):
        return {
            k: v.to_template() if isinstance(v, (ProtoMessage, ProtoContainer)) else v
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
        self.template_keys.append(key)
        if len(self.keys) > 0:
            if self.keys[-1] is None:
                self.keys[-1] = Placeholders.TemplateParameter
        else:
            self.keys.append(Placeholders.TemplateParameter)

    def add_message(self, data_or_key:'ProtoMessage|str', data:ProtoMessage=None, key_name=None):
        if data is None:
            key = None
            data = data_or_key
        else:
            key = data_or_key

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
        return self.get_default_message().get_field(field_name)
    def __getitem__(self, item):
        return self.get_field(item)

    mapping_key = "key"
    def insert_field(self, field_name):
        field_name, units = normalize_key(field_name)
        if field_name == self.mapping_key: # reserved for keys in maps
            self.add_key(field_name)
            return self
        else:
            key_path, fields = ProtoHandler.resolve_insertion_spot(self.type, field_name)
            msg = self.get_default_message()
            if msg.has_path(key_path):
                msg = ProtoMessage(self.type.value_type)
                self.add_message(msg)
            if len(key_path) > 0:
                msg = msg[key_path[0]]
                primary = msg
                for m in key_path[1:]:
                    msg = msg[m]
            else:
                primary = msg
            if units is not None:
                unit_field = ProtoHandler.resolve_unit_message(msg, units)

                msg.add_message(unit_field)
            if fields is not None:
                msg.update(fields)
            return primary
    def insert_tree(self, subtree):
        msg = self
        for header in subtree:
            if isinstance(header, str):
                msg = self.insert_field(header)
            else:
                msg.insert_tree(header) # subtree
    def __setitem__(self, key, value):
        self.get_default_message().__setitem__(key, value)
    def update(self, proto:'ProtoContainer'):
        if isinstance(proto, (ProtoMessage,dict)):
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

    def to_template(self):
        if self.type.key_type is not None:
            return [
                {
                    "key": k,
                    "value": v.to_template()
                }
                for k, v in zip(self.keys, self.values)
            ]
        elif self.type.container_type is not None:
            return [v.to_template() for v in self.values]
        else:
            return self.values[0].to_template()

    def has_path(self, key_path):
        return self.get_default_message().has_path(key_path)

class ProtoHandler:
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import parallel_proto # TODO: should use the real proto eventually, but this works for now

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
    @classmethod
    def _build_maps(cls):
        identifier_types = {}
        kinds_types = {}
        units_types = {}
        for type_name in cls.parallel_proto.__all__:
            type_obj = getattr(cls.parallel_proto, type_name)
            # if isinstance(type_obj, enum.Enum):
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
        return identifier_types, units_types, kinds_types
    @classmethod
    def build_maps(cls):
        if (
                cls._identifiers_map is None
                or cls._units_map is None
                or cls._kind_map is None
        ):
            cls._identifiers_map, cls._units_map, cls._kind_map = cls._build_maps()
        return cls._identifiers_map, cls._units_map, cls._kind_map

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
    def is_value_type(cls, field):
        return field in cls.get_value_type_map()
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


    default_paths = {
        parallel_proto.Reaction: dict(
            {
                s: (["inputs", "components"], {"reaction_role":s})
                for s in
                ['reactant', 'reagent', 'workup', 'authentic_standard', 'catalyst', 'internal_standard', 'solvent']
            },
            **{
                s: (["outcomes", "products"], {"reaction_role":s})
                for s in ['byproduct', 'side_product', 'product']
            }
        )
    }

    @classmethod
    def resolve_identifier_fields(cls, key_path, field_type, field_name, key_name):
        if issubclass(field_type.value_type, enum.Enum):
            msg = {field_name:key_name}
            key_path = key_path[:-1]
        else:
            msg = ProtoContainer(field_type)
            submsg = ProtoMessage(
                field_type.value_type,
                {
                    "type": key_name,
                    "value": Placeholders.TemplateParameter
                })
            msg.add_message(submsg)
        return key_path, msg
    @classmethod
    def resolve_insertion_spot(cls, root_type:ProtoType, key_name):
        # we resolve where a given key should be added to a given
        # type by running a breadth-first search for the key name
        key_name, units = normalize_key(key_name)
        if key_name in cls.default_paths.get(root_type.value_type, []):
            return cls.default_paths[root_type.value_type][key_name]

        id_map = cls.get_identifier_type_map()
        def test(field_name, field_type, full_path, key_path):
            if field_name == key_name:
                if units is not None:
                    raise ValueError(field_name, units)
                return True, (key_path, None)
            elif key_name in id_map.get(field_type.value_type, []):
                return True, cls.resolve_identifier_fields(key_path, field_type, field_name, key_name)
            else:
                return False, None

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
        type = unit_map.get(units, None)
        if type is None:
            raise ValueError("unknown unit specifier {}; known types are {}".format(
                units, "\n".join(unit_map.keys())
            ))
        unit_msg = ProtoMessage(type, {"units":units, "value":Placeholders.TemplateParameter})

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

class PropertySpec:
    def __init__(self, name_field_map:'dict[str,list]'): # we take advantage of the ordering of python dicts since python 3.x
        self.name_field_map = name_field_map
        self.num_fields = sum(len(f) for f in name_field_map.values())

    @classmethod
    def get_reaction_proto(cls):
        return ProtoMessage(
            ProtoType(None, ProtoHandler.parallel_proto.Reaction, None)
        )
    @classmethod
    def infer_reaction_data_type(cls, key) -> (str, ProtoType):
        key, _ = normalize_key(key)
        base_field_map = ProtoHandler.get_reaction_fields()
        if key in base_field_map:
            return "key"
            # return key, {'data_type':base_field_map[key], 'fields':{}}

        role_data = ProtoHandler.get_reaction_role_map().get(key, None)
        if role_data is not None:
            return role_data
            # if role_data == 'outcomes':
            #     core_data = ProtoType(None, ProtoHandler.parallel_proto.ReactionOutcome, None)
            # else:
            #     core_data = ProtoType(str, ProtoHandler.parallel_proto.ReactionInput, dict)
            # return {
            #         'data_type': core_data, #,
            #         'fields': {
            #             'reaction_role': key
            #         }
            #     }

        conditions_type = ProtoHandler.get_reaction_conditions_map().get(key, None)
        if conditions_type is not None:
            return "conditions"
            # return 'conditions', {
            #     'data_type': ProtoType(None, conditions_type, list, []),
            #     'fields': {
            #     }
            # }

        raise ValueError("nothing matches")

    @classmethod
    def resolve_proto_key(cls, key, root=None):
        if root is None:
            root = ProtoHandler.parallel_proto.Reaction
        if key in ProtoHandler.alias_map[root]:
            new_root = ProtoHandler.alias_map[root]
        else:
            new_root = getattr(root, key)
        return new_root

    mapping_key = "key"
    @classmethod
    def resolve_proto_spec(cls, primary_key, subtree_keys, subkeys):
        if primary_key is None:
            primary_key = cls.infer_reaction_data_type(subtree_keys[0])
        primary_key = normalize_key(primary_key)
        root_type = ProtoHandler.get_field_type(ProtoHandler.parallel_proto.Reaction, primary_key)
        subtree_keys = [normalize_key(k) for k in subtree_keys]
        base_path = [primary_key] + subtree_keys
        type_path = [root_type]
        for st in subtree_keys:
            root_type = ProtoHandler.get_field_type(root_type.value_type, st)
            if root_type is None:
                ...
            else:
                type_path.append(root_type)

        template_types = []
        template_keys = []
        for subkey in subkeys:
            subkey = normalize_key(subkey)
            if root_type.key_type is str and subkey == cls.mapping_key:
                # template_parameters.append(cls.mapping_key)
                template_keys.append([primary_key])
                template_types.append([root_type])
            else:
                types, keys = ProtoHandler.resolve_insertion_spot(root_type, subkey)
                # template_parameters.append(cls.mapping_key)
                template_keys.append([primary_key] + keys)
                template_types.append(types)


        return template_types, template_keys

    def parse_rows(self, block):
        block = [
            list(row) + [""] * (self.num_fields - len(row)) # pad rows if necessary
            for row in block
        ]
        p = 0
        records = [{} for _ in range(len(block))]
        for n,f in self.name_field_map.items():
            nf = len(f)
            for record, row in zip(records, block):
                record[n] = row[p:p+nf]
            p += nf
        return records
    def parse(self, row):
        return self.parse_rows([row])[0]

    @classmethod
    def parse_kf(self, key_row, fields_row):
        key_row = list(key_row) + [""]*(len(fields_row) - len(key_row))

        key_splits = {}
        key = None
        start = 0
        for n,k in enumerate(key_row):
            k = k.strip()
            if len(k) > 0: # not the empty string
                if key is not None:
                    key_splits[key] = (start, n)
                key = k
                start = n
        else:
            if key is None:
                raise ValueError("spec had no keys")
            key_splits[key] = (start, len(key_row)-1)

        return {
            k:fields_row[s[0]:s[1]]
            for k,s in key_splits.items()
        }
    @classmethod
    def from_csv_rows(cls, key_row, fields_row):
        return cls(cls.parse_kf(key_row, fields_row))

class ReactantSpec:

    def __init__(self, common_block, variant_structure):
        self.common = common_block
        self.variant = variant_structure

    def build_dict(self, variant_data):
        new_data = self.variant.parse(variant_data)
        base_data = self.common.asdict()
        return dict(base_data, **new_data)

class DatasetConstructor:
    """
    An alternate CSV input wrapper
    """

    def __init__(self, common_block, variant_structure):
        self.common = common_block
        self.variant = variant_structure

    def build_dict(self, variant_data):
        new_data = self.variant.parse(variant_data)
        base_data = self.common.asdict()
        return dict(base_data, **new_data)


if __name__ == "__main__":
    rxn = ProtoMessage(ProtoHandler.parallel_proto.Reaction)
    rxn.insert_tree([
        "INPUTS",
        [
            "key", "REACTANT",
                    ["INCHI", "SMILES", "Amount (gram)"]
         ]
    ])
    # rxn.insert_tree("REACTANT")
    raise Exception(rxn.to_template())

    raise Exception(
        PropertySpec.resolve_proto_spec(None, ["Reactant"], ["Key", "INCHI", "SMILES", "Amount"])
    )

    raise Exception(
        ProtoHandler.get_role_identifier_types()
    )

    type_names = ProtoHandler.get_quantity_type_map()
    for k,v in type_names.items():
        print("=="*5, k, "=="*5)
        print(v)
    raise Exception(...)

    # raise Exception(
    #     ProtoHandler.build_proto_map(ProtoHandler.parallel_proto.Compound)[0]
    # )
    # print(ProtoHandler.infer_reaction_data_type(ProtoHandler.parallel_proto.Compound, 'mass'))
    # raise Exception(...)
    for k,v in ProtoHandler.get_proto_map().items():
        print("=="*5, k, "=="*5)
        if isinstance(v, dict):
            for k2,v2 in v.items():
                print("   ", "=="*5, k2, "=="*5)
                print("   ", v2)
        else:
            print(v)