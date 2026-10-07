"""Strict corpus and descriptor coverage, with real PostgreSQL roundtrips."""
import hashlib
import json
import os
from pathlib import Path

import pytest
from google.protobuf.descriptor import FieldDescriptor as F
from sqlalchemy import select, text
from sqlalchemy.orm import Session

from cmccdb_schema import message_helpers
from cmccdb_schema.dataset_constructor import DatasetConstructor
from cmccdb_schema.orm.database import add_dataset, get_dataset_size, prepare_database
from cmccdb_schema.orm.mappers import Mappers, from_proto, to_proto
from cmccdb_schema.proto import dataset_pb2, reaction_pb2

DATA_ROOT = Path(os.getenv('CMCCDB_DATA_ROOT', Path(__file__).resolve().parents[3] / 'cmccdb-data'))
MANIFEST = json.loads(Path(__file__).with_name('corpus_manifest.json').read_text())
SUFFIXES = ('.xlsx', '.csv', '.pbtxt', '.pb', '.json', '.pb.gz', '.pbtxt.gz', '.json.gz')
FILES = sorted(p for p in DATA_ROOT.rglob('*') if p.is_file()
    and p.name.endswith(SUFFIXES) and '.git' not in p.parts and p.parent.name != 'aux')


def load_dataset(path):
    if path.suffix in {'.xlsx', '.csv'}:
        return DatasetConstructor.enumerate_spreadsheet(path, id=hashlib.md5(path.read_bytes()).hexdigest())
    return message_helpers.load_message(str(path), dataset_pb2.Dataset)


@pytest.mark.parametrize('path', FILES, ids=lambda p: str(p.relative_to(DATA_ROOT)))
def test_corpus_roundtrip(path, corpus_session, record_property):
    digest = hashlib.sha256(path.read_bytes()).hexdigest()
    record_property('sha256', digest)
    expected = MANIFEST['invalid'].get(str(path.relative_to(DATA_ROOT)))
    if expected:
        assert digest == expected['sha256'], 'Changed corpus input needs a new review'
        with pytest.raises(Exception) as caught:
            load_dataset(path)
        assert type(caught.value).__name__ == expected['exception']
        assert expected['message'] in str(caught.value)
        return
    dataset = load_dataset(path)
    record_property('reactions', len(dataset.reactions))
    record_property('reaction_types', sorted({i.value for r in dataset.reactions for i in r.identifiers}))
    assert to_proto(from_proto(dataset)) == dataset
    add_dataset(dataset, corpus_session, rdkit_cartridge=corpus_session.info['rdkit_cartridge'])
    corpus_session.flush()
    corpus_session.expire_all()
    stored = corpus_session.execute(select(Mappers.Dataset)
        .where(Mappers.Dataset.dataset_id == dataset.dataset_id)).scalar_one()
    assert to_proto(stored) == dataset
    assert get_dataset_size(dataset.dataset_id, corpus_session) == (len(dataset.reactions) or len(dataset.reaction_ids))
    for original, mapped in zip(dataset.reactions, stored.reactions):
        assert reaction_pb2.Reaction.FromString(bytes(mapped.proto)) == original


def test_corpus_present_and_inventory():
    assert DATA_ROOT.is_dir(), 'Set CMCCDB_DATA_ROOT to the local cmccdb-data checkout'
    assert FILES, 'Corpus coverage must not silently skip an empty directory'
    actual = {str(p.relative_to(DATA_ROOT)) for p in FILES}
    assert set(MANIFEST['invalid']) <= actual, 'Known invalid inputs disappeared; update the inventory'


REFERENCE_ID = 'cmcc-' + 'f' * 32


def fill_message(message, variant, stride=1, coverage=None):
    """Enumerate nested oneofs and enums without coupling their choices."""
    selected = {o.name: o.fields[(variant // stride) % len(o.fields)] for o in message.DESCRIPTOR.oneofs}
    for field in message.DESCRIPTOR.fields:
        if field.containing_oneof and selected[field.containing_oneof.name] is not field:
            continue
        sub_stride = stride * (len(field.containing_oneof.fields) if field.containing_oneof else 1)
        if coverage is not None:
            coverage['fields'].add(field.full_name)
        if field.type == F.TYPE_MESSAGE:
            if field.message_type.GetOptions().map_entry:
                child = getattr(message, field.name)['sample']
            elif field.label == F.LABEL_REPEATED:
                child = getattr(message, field.name).add()
            else:
                child = getattr(message, field.name)
            fill_message(child, variant, sub_stride, coverage)
        else:
            if field.type == F.TYPE_ENUM:
                value = field.enum_type.values[(variant // sub_stride) % len(field.enum_type.values)].number
                if coverage is not None:
                    coverage['enums'].add((field.enum_type.full_name, value))
            elif field.type == F.TYPE_STRING:
                value = REFERENCE_ID if field.name == 'reaction_id' else f'sample-{variant}'
            elif field.type == F.TYPE_BYTES:
                value = b'\x00\xffsample'
            elif field.type == F.TYPE_BOOL:
                value = bool(variant % 2)
            elif field.type in {F.TYPE_FLOAT, F.TYPE_DOUBLE}:
                value = 1.25
            else:
                value = 17
            if field.label == F.LABEL_REPEATED:
                getattr(message, field.name).extend([value, value])
            else:
                setattr(message, field.name, value)
    return message


def schema_dataset():
    dataset = dataset_pb2.Dataset(dataset_id='cmcc_dataset-' + 'e' * 32,
        name='Descriptor coverage', description='All representable reaction fields')
    coverage = {'fields': {'cmccdb.Dataset.' + name for name in ['dataset_id', 'name', 'description', 'reactions']}, 'enums': set()}
    for variant in range(160):
        reaction = fill_message(dataset.reactions.add(), variant, coverage=coverage)
        reaction.reaction_id = 'cmcc-' + f'{variant:032x}'
    dataset.reactions.add(reaction_id=REFERENCE_ID)
    return dataset, coverage


def test_every_schema_field_and_enum(corpus_session):
    dataset, coverage = schema_dataset()
    example = fill_message(dataset_pb2.DatasetExample(), 1, coverage=coverage)
    reference = dataset_pb2.Dataset(dataset_id='cmcc_dataset-' + '9' * 32,
        name='Descriptor references', description='All dataset fields', reaction_ids=[REFERENCE_ID])
    coverage['fields'].add('cmccdb.Dataset.reaction_ids')
    expected_fields, expected_enums, seen = set(), set(), set()

    def visit(descriptor):
        if descriptor.full_name in seen:
            return
        seen.add(descriptor.full_name)
        for field in descriptor.fields:
            expected_fields.add(field.full_name)
            if field.type == F.TYPE_ENUM:
                expected_enums.update((field.enum_type.full_name, v.number) for v in field.enum_type.values)
            elif field.type == F.TYPE_MESSAGE:
                child = field.message_type
                if child.GetOptions().map_entry:
                    child = child.fields_by_name['value'].message_type
                visit(child)

    visit(dataset_pb2.Dataset.DESCRIPTOR)
    visit(dataset_pb2.DatasetExample.DESCRIPTOR)
    assert expected_fields <= coverage['fields']
    assert expected_enums <= coverage['enums']
    assert to_proto(from_proto(dataset)) == dataset
    # Descriptor examples exercise storage, including intentionally nonchemical strings.
    # RDKit-specific query tests use the chemically valid fixture separately.
    add_dataset(dataset, corpus_session, rdkit_cartridge=False)
    add_dataset(reference, corpus_session, rdkit_cartridge=False)
    mapped_example = from_proto(example)
    corpus_session.add(mapped_example)
    corpus_session.flush()
    corpus_session.expire_all()
    stored = corpus_session.execute(select(Mappers.Dataset).where(Mappers.Dataset.dataset_id == dataset.dataset_id)).scalar_one()
    assert to_proto(stored) == dataset
    assert to_proto(mapped_example) == example
    assert to_proto(corpus_session.execute(select(Mappers.Dataset)
        .where(Mappers.Dataset.dataset_id == reference.dataset_id)).scalar_one()) == reference


def test_reference_only_and_empty_datasets(corpus_session):
    source = dataset_pb2.Dataset(dataset_id='cmcc_dataset-' + '1' * 32)
    source.reactions.add(reaction_id='cmcc-' + '2' * 32)
    add_dataset(source, corpus_session, rdkit_cartridge=corpus_session.info['rdkit_cartridge'])
    corpus_session.flush()
    for dataset in [dataset_pb2.Dataset(dataset_id='cmcc_dataset-' + '3' * 32, reaction_ids=[source.reactions[0].reaction_id]),
                    dataset_pb2.Dataset(dataset_id='cmcc_dataset-' + '4' * 32)]:
        add_dataset(dataset, corpus_session, rdkit_cartridge=corpus_session.info['rdkit_cartridge'])
        corpus_session.flush()
        stored = corpus_session.execute(select(Mappers.Dataset).where(Mappers.Dataset.dataset_id == dataset.dataset_id)).scalar_one()
        assert to_proto(stored) == dataset
    bad = dataset_pb2.Dataset(dataset_id='cmcc_dataset-' + '5' * 32, reaction_ids=['cmcc-' + '0' * 32])
    with pytest.raises(ValueError, match='unknown reaction'):
        add_dataset(bad, corpus_session)
    source.reaction_ids.append(source.reactions[0].reaction_id)
    with pytest.raises(ValueError, match='both'):
        add_dataset(source, corpus_session)


def test_present_zero_values(corpus_session):
    dataset = dataset_pb2.Dataset(dataset_id='cmcc_dataset-' + '6' * 32)
    reaction = dataset.reactions.add(reaction_id='cmcc-' + '7' * 32)
    for key, value in {'float_value': 0.0, 'integer_value': 0, 'bytes_value': b'', 'string_value': '', 'url': ''}.items():
        setattr(reaction.provenance.reaction_metadata[key], key, value)
    reaction.notes.is_exothermic = False
    reaction.conditions.mechanochemistry.frequency.value = 0
    add_dataset(dataset, corpus_session, rdkit_cartridge=corpus_session.info['rdkit_cartridge'])
    corpus_session.flush()
    corpus_session.expire_all()
    assert to_proto(corpus_session.execute(select(Mappers.Dataset).where(Mappers.Dataset.dataset_id == dataset.dataset_id)).scalar_one()) == dataset


def test_upgrade_existing_database(database_engine):
    # database_engine only accepts explicitly disposable cmccdb_test_* databases.
    dataset = dataset_pb2.Dataset(dataset_id='cmcc_dataset-' + 'd' * 32)
    reaction = dataset.reactions.add(reaction_id='cmcc-' + 'd' * 32)
    reaction.conditions.mechanochemistry.geometry.extend(['one', 'two'])
    with Session(database_engine) as session:
        add_dataset(dataset, session, rdkit_cartridge=False)
        session.commit()
    with database_engine.begin() as connection:
        connection.execute(text('ALTER TABLE cmccdb.mechanochemistry_conditions ALTER COLUMN geometry TYPE text USING geometry::text'))
        connection.execute(text('ALTER TABLE cmccdb.mechanochemistry_conditions DROP COLUMN liquid_assisted'))
    prepare_database(database_engine)
    prepare_database(database_engine)  # Idempotent when the schema already matches.
    with database_engine.connect() as connection:
        rows = dict(connection.execute(text("SELECT column_name, data_type FROM information_schema.columns WHERE table_schema='cmccdb' AND table_name='mechanochemistry_conditions'")).all())
        assert rows['geometry'] == 'ARRAY'
        assert rows['liquid_assisted'] == 'boolean'
    from cmccdb_schema.orm.database import delete_dataset
    with Session(database_engine) as session:
        stored = session.execute(select(Mappers.Dataset).where(Mappers.Dataset.dataset_id == dataset.dataset_id)).scalar_one()
        assert to_proto(stored) == dataset
        delete_dataset(dataset.dataset_id, session)
        session.commit()


def test_additive_upgrade_types_and_foreign_keys(database_engine):
    from sqlalchemy import Column, Enum, ForeignKey, Integer, MetaData, Table, inspect
    from cmccdb_schema.orm.migrations import upgrade_database
    metadata = MetaData()
    parent = Table('migration_test_parent', metadata, Column('id', Integer, primary_key=True), schema='cmccdb')
    child = Table('migration_test_child', metadata,
        Column('id', Integer, primary_key=True),
        Column('status', Enum('OLD', 'NEW', name='migration_test_status', schema='cmccdb')),
        Column('added_kind', Enum('VALUE', name='migration_test_kind', schema='cmccdb')),
        Column('parent_id', ForeignKey(parent.c.id)), schema='cmccdb')
    try:
        with database_engine.begin() as connection:
            connection.execute(text("CREATE TYPE cmccdb.migration_test_status AS ENUM ('OLD')"))
            connection.execute(text('CREATE TABLE cmccdb.migration_test_child (id integer PRIMARY KEY, status cmccdb.migration_test_status)'))
            connection.execute(text("INSERT INTO cmccdb.migration_test_child VALUES (1, 'OLD')"))
        upgrade_database(database_engine, metadata)
        upgrade_database(database_engine, metadata)
        with database_engine.begin() as connection:
            connection.execute(parent.insert().values(id=1))
            connection.execute(child.update().values(status='NEW', added_kind='VALUE', parent_id=1))
            assert connection.execute(select(child)).one() == (1, 'NEW', 'VALUE', 1)
        assert inspect(database_engine).get_foreign_keys(child.name, schema='cmccdb')
    finally:
        metadata.drop_all(database_engine)
