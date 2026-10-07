"""Preview and apply conservative, transactional PostgreSQL schema updates.

Existing databases are never upgraded as a side effect of an upload. Destructive
or ambiguous changes require a separately reviewed migration, not this helper.
"""
import hashlib
import json
import re
from contextlib import contextmanager

from google.protobuf import descriptor_pb2
from sqlalchemy import Enum, inspect, text
from sqlalchemy.dialects.postgresql import CreateEnumType
from sqlalchemy.schema import AddConstraint, CreateColumn, CreateIndex, CreateTable
from sqlalchemy.types import NullType

LOCK_ID = 0x434D43434442


class MigrationRequired(ValueError):
    pass


def descriptors():
    from cmccdb_schema.proto import dataset_pb2, reaction_pb2
    result = descriptor_pb2.FileDescriptorSet()
    seen = set()

    def add(file):
        if file.name in seen:
            return
        seen.add(file.name)
        for dependency in file.dependencies:
            add(dependency)
        file.CopyToProto(result.file.add())

    add(reaction_pb2.DESCRIPTOR)
    add(dataset_pb2.DESCRIPTOR)
    return result.SerializeToString(deterministic=True)


def descriptor_hash(payload):
    return hashlib.sha256(payload).hexdigest()


def compatibility(old, new):
    """Check wire AND database/API naming compatibility, including nested maps."""
    def unpack(payload):
        descriptor = descriptor_pb2.FileDescriptorSet.FromString(payload)
        messages, enums = {}, {}

        def visit(message, prefix):
            name = prefix + '.' + message.name
            messages[name] = message
            for child in message.nested_type:
                visit(child, name)
            for enum in message.enum_type:
                enums[name + '.' + enum.name] = enum

        for file in descriptor.file:
            for message in file.message_type:
                visit(message, '.' + file.package)
            for enum in file.enum_type:
                enums['.' + file.package + '.' + enum.name] = enum
        return messages, enums

    before, before_enums = unpack(old)
    after, after_enums = unpack(new)
    errors = []
    for name, message in before.items():
        if name not in after:
            errors.append(f'Removed message {name}')
            continue
        candidate = after[name]
        fields = {f.number: f for f in candidate.field}
        for field in message.field:
            target = fields.get(field.number)
            if target is None:
                errors.append(f'Removed field {name}.{field.name} ({field.number})')
                continue
            attributes = ('name', 'type', 'type_name', 'label', 'proto3_optional', 'default_value', 'json_name')
            if any(getattr(field, a) != getattr(target, a) for a in attributes):
                errors.append(f'Changed field {name}.{field.name} ({field.number})')
            def oneof(f, owner):
                return owner.oneof_decl[f.oneof_index].name if f.HasField('oneof_index') else None
            if oneof(field, message) != oneof(target, candidate):
                errors.append(f'Changed presence/oneof {name}.{field.name}')
        old_names = {f.name: f.number for f in message.field}
        for field in candidate.field:
            if field.name in old_names and old_names[field.name] != field.number:
                errors.append(f'Renumbered field {name}.{field.name}')
        if message.options.map_entry != candidate.options.map_entry:
            errors.append(f'Changed map representation {name}')
    for name, enum in before_enums.items():
        target = after_enums.get(name)
        values = {} if target is None else {v.name: v.number for v in target.value}
        for value in enum.value:
            if values.get(value.name) != value.number:
                errors.append(f'Removed/renumbered enum {name}.{value.name}')
    return errors


def _baseline(connection):
    if not inspect(connection).has_table('schema_versions', schema='cmccdb_meta'):
        return None
    return connection.scalar(text('SELECT descriptor FROM cmccdb_meta.schema_versions ORDER BY id DESC LIMIT 1'))


def record_version(connection, snapshot_id=None):
    connection.execute(text('CREATE SCHEMA IF NOT EXISTS cmccdb_meta'))
    connection.execute(text('''CREATE TABLE IF NOT EXISTS cmccdb_meta.schema_versions (
        id bigserial PRIMARY KEY, applied_at timestamptz NOT NULL DEFAULT now(),
        descriptor bytea NOT NULL, sha256 text NOT NULL, snapshot_id text)'''))
    payload = descriptors()
    connection.execute(text('''INSERT INTO cmccdb_meta.schema_versions(descriptor, sha256, snapshot_id)
        VALUES (:descriptor, :sha256, :snapshot_id)'''),
        {'descriptor': payload, 'sha256': descriptor_hash(payload), 'snapshot_id': snapshot_id})


def plan(connection, metadata):
    inspector = inspect(connection)
    quote = connection.dialect.identifier_preparer.quote
    operations, blockers = [], []
    physical_types = {(schema, table, column): value.upper() for schema, table, column, value in connection.execute(text('''
        SELECT n.nspname, c.relname, a.attname, format_type(a.atttypid, a.atttypmod)
        FROM pg_attribute a JOIN pg_class c ON c.oid=a.attrelid
        JOIN pg_namespace n ON n.oid=c.relnamespace
        WHERE a.attnum>0 AND NOT a.attisdropped AND n.nspname IN ('cmccdb','rdkit')''')).all()}
    enums = {(e['schema'], e['name']): e['labels'] for e in inspector.get_enums(schema='*')}
    seen = set()
    for table in metadata.sorted_tables:
        for column in table.columns:
            if not isinstance(column.type, Enum):
                continue
            key = (column.type.schema or 'public', column.type.name)
            if key in seen:
                continue
            seen.add(key)
            if key not in enums:
                operations.append(str(CreateEnumType(column.type).compile(dialect=connection.dialect)))
            else:
                removed = set(enums[key]) - set(column.type.enums)
                if removed:
                    blockers.append(f'Removed enum values {key}: {sorted(removed)}')
                for value in column.type.enums:
                    if value not in enums[key]:
                        literal = "'" + value.replace("'", "''") + "'"
                        operations.append(f'ALTER TYPE {quote(key[0])}.{quote(key[1])} ADD VALUE IF NOT EXISTS {literal}')
    missing_tables = set()
    for table in metadata.sorted_tables:
        if not inspector.has_table(table.name, schema=table.schema):
            missing_tables.add(table.fullname)
            operations.append(str(CreateTable(table).compile(dialect=connection.dialect)))
            for index in sorted(table.indexes, key=lambda i: i.name):
                operations.append(str(CreateIndex(index).compile(dialect=connection.dialect)))
            continue
        columns = {c['name']: c for c in inspector.get_columns(table.name, schema=table.schema)}
        qualified = connection.dialect.identifier_preparer.format_table(table)
        for column in table.columns:
            previous = columns.get(column.name)
            if previous is None:
                if not column.nullable:
                    blockers.append(f'Cannot add required column {table.fullname}.{column.name}')
                else:
                    definition = str(CreateColumn(column).compile(dialect=connection.dialect))
                    operations.append(f'ALTER TABLE {qualified} ADD COLUMN {definition}')
                continue
            actual = physical_types.get((table.schema, table.name, column.name)) if isinstance(previous['type'], NullType) else previous['type'].compile(dialect=connection.dialect).upper()
            if actual is not None:
                desired = column.type.compile(dialect=connection.dialect).upper()
                # PostgreSQL's unqualified FLOAT is an alias of DOUBLE PRECISION.
                canonical = lambda value: re.sub(r'\bFLOAT\b(?!\s*\()', 'DOUBLE PRECISION', value)
                if canonical(actual) != canonical(desired):
                    blockers.append(f'Type change {table.fullname}.{column.name}: {actual} -> {desired}')
            if previous['nullable'] and not column.nullable:
                blockers.append(f'Cannot make {table.fullname}.{column.name} required')
        for name in columns.keys() - {c.name for c in table.columns}:
            blockers.append(f'Removed column {table.fullname}.{name}')
        existing = inspector.get_foreign_keys(table.name, schema=table.schema)
        for constraint in table.foreign_key_constraints:
            foreign_columns = [element.parent.name for element in constraint.elements]
            target = constraint.elements[0].column.table
            matches = [f for f in existing if f['constrained_columns'] == foreign_columns]
            targets = [element.column.name for element in constraint.elements]
            if matches and not any(f['referred_table'] == target.name and f['referred_schema'] == target.schema
                                   and f['referred_columns'] == targets and f.get('options', {}).get('ondelete') == constraint.ondelete
                                   for f in matches):
                blockers.append(f'Changed foreign key {table.fullname}.{foreign_columns}')
            elif not matches:
                operations.append(str(AddConstraint(constraint).compile(dialect=connection.dialect)))
    baseline = _baseline(connection)
    expected_tables = {(t.schema or 'public', t.name) for t in metadata.tables.values()}
    for schema in {'cmccdb', 'rdkit'}:
        if schema in inspector.get_schema_names():
            for table_name in inspector.get_table_names(schema=schema):
                if (schema, table_name) not in expected_tables:
                    blockers.append(f'Removed table {schema}.{table_name}')
    if baseline is not None:
        blockers.extend(compatibility(bytes(baseline), descriptors()))
    physical = {'sql': operations, 'blockers': sorted(set(blockers)),
                'schema_sha256': descriptor_hash(descriptors()),
                'baseline_sha256': descriptor_hash(bytes(baseline)) if baseline is not None else None}
    physical['fingerprint'] = hashlib.sha256(json.dumps(physical, sort_keys=True).encode()).hexdigest()
    physical['required'] = bool(operations)
    physical['compatible'] = not blockers
    physical['tracked'] = baseline is not None
    return physical


@contextmanager
def migration_lock(engine):
    """Cross-process lock; readers/writers take the shared version on their transaction."""
    with engine.connect() as connection:
        acquired = connection.scalar(text('SELECT pg_try_advisory_lock(:id)'), {'id': LOCK_ID})
        connection.commit()
        if not acquired:
            raise MigrationRequired('Another database migration is running')
        try:
            yield connection
        finally:
            if connection.in_transaction():
                connection.rollback()
            connection.execute(text('SELECT pg_advisory_unlock(:id)'), {'id': LOCK_ID})
            connection.commit()


def apply(engine, metadata, fingerprint, create_snapshot):
    """Require a verified pre-change snapshot and a current preview before any DDL."""
    with migration_lock(engine) as connection:
        preview = plan(connection, metadata)
        connection.commit()
        if preview['fingerprint'] != fingerprint:
            raise MigrationRequired('Migration preview changed; request a new plan')
        if not preview['compatible']:
            raise MigrationRequired('; '.join(preview['blockers']))
        if not preview['required']:
            # Track compatible descriptor-only additions so a later removal cannot
            # escape compatibility checks merely because it needed no SQL today.
            if preview['tracked'] and preview['baseline_sha256'] != preview['schema_sha256']:
                with connection.begin():
                    record_version(connection)
            return {'updated': False, 'required': False, 'snapshot_id': None}
        if not preview['tracked']:
            raise MigrationRequired('Untracked schema: create a baseline backup using the OLD schema before updating code')
        snapshot = create_snapshot(connection)
        if not snapshot or not snapshot.get('verified') or not snapshot.get('restore_verification', {}).get('verified'):
            raise MigrationRequired('A verified pre-migration backup is required')
        with connection.begin():
            connection.execute(text("SET LOCAL lock_timeout = '5s'"))
            connection.execute(text("SET LOCAL statement_timeout = '120s'"))
            for sql in preview['sql']:
                connection.execute(text(sql))
            record_version(connection, snapshot['id'])
            remaining = plan(connection, metadata)
            if remaining['required'] or not remaining['compatible']:
                raise MigrationRequired('Post-migration schema validation failed')
        return {'updated': True, 'required': False, 'snapshot_id': snapshot['id']}
