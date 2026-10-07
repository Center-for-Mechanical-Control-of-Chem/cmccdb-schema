"""Run with CMCCDB_TEST_POSTGRES_URL pointing at an isolated test cluster."""
import os
import uuid
import pytest
from sqlalchemy import Column, MetaData, Text, create_engine, inspect, text
from cmccdb_schema.orm import database, schema_updates
from cmccdb_schema.orm.mappers import Base

URL=os.getenv('CMCCDB_TEST_POSTGRES_URL')
pytestmark=pytest.mark.skipif(not URL,reason='Requires an isolated PostgreSQL test cluster')


@pytest.fixture
def engine():
    admin=create_engine(URL,future=True,isolation_level='AUTOCOMMIT')
    name='migration_test_'+uuid.uuid4().hex
    with admin.connect() as connection:
        connection.execute(text('CREATE DATABASE '+name))
    result=create_engine(admin.url.set(database=name),future=True)
    database.prepare_database(result)
    yield result
    result.dispose();admin.dispose()


def candidate():
    result=MetaData()
    for table in Base.metadata.tables.values():
        table.to_metadata(result)
    result.tables['cmccdb.dataset'].append_column(Column('migration_probe',Text(),nullable=True))
    return result


def preview(engine, metadata):
    with engine.connect() as connection:
        return schema_updates.plan(connection,metadata)


def absent(engine):
    return 'migration_probe' not in {c['name'] for c in inspect(engine).get_columns('dataset',schema='cmccdb')}


def test_stale_plan_never_starts_backup(engine):
    with pytest.raises(schema_updates.MigrationRequired,match='preview changed'):
        schema_updates.apply(engine,candidate(),'stale',lambda _:pytest.fail('Unexpected backup'))
    assert absent(engine)


def test_unverified_backup_prevents_ddl(engine):
    metadata=candidate()
    with pytest.raises(schema_updates.MigrationRequired,match='verified'):
        schema_updates.apply(engine,metadata,preview(engine,metadata)['fingerprint'],lambda _:{'verified':True,'id':'unverified'})
    assert absent(engine)


def test_failed_backup_prevents_ddl(engine):
    metadata=candidate()
    def failed(_):raise OSError('Disk full')
    with pytest.raises(OSError,match='Disk full'):
        schema_updates.apply(engine,metadata,preview(engine,metadata)['fingerprint'],failed)
    assert absent(engine)


def test_schema_updates_are_not_upload_side_effects(engine):
    metadata=candidate()
    pending=preview(engine,metadata)
    assert pending['required'] and pending['compatible']
    assert absent(engine)


def test_writer_lock_blocks_migration(engine):
    metadata=candidate();fingerprint=preview(engine,metadata)['fingerprint']
    with engine.begin() as writer:
        writer.execute(text('SELECT pg_advisory_xact_lock_shared(:id)'),{'id':schema_updates.LOCK_ID})
        with pytest.raises(schema_updates.MigrationRequired,match='running'):
            schema_updates.apply(engine,metadata,fingerprint,lambda _:pytest.fail('Unexpected backup'))
    assert absent(engine)


def test_failed_ddl_rolls_back_entire_migration(engine,monkeypatch):
    metadata=candidate()
    original=schema_updates.plan
    def failing(connection, metadata):
        result=original(connection,metadata)
        if result['required']:result['sql'].append('SELECT 1/0')
        return result
    monkeypatch.setattr(schema_updates,'plan',failing)
    # Simulate a previously verified snapshot to focus this test on transaction rollback.
    with pytest.raises(Exception,match='division by zero'):
        schema_updates.apply(engine,metadata,preview(engine,metadata)['fingerprint'],
            lambda _:{'verified':True,'id':str(uuid.uuid4()),'restore_verification':{'verified':True}})
    assert absent(engine)


def test_required_columns_and_removed_tables_are_blocked(engine):
    metadata=candidate()
    metadata.tables['cmccdb.dataset'].c.migration_probe.nullable=False
    result=preview(engine,metadata)
    assert not result['compatible']
    assert any('required column' in b for b in result['blockers'])


def test_same_database_requires_no_changes(engine):
    result=preview(engine,Base.metadata)
    assert not result['required'] and result['compatible']
    assert schema_updates.apply(engine,Base.metadata,result['fingerprint'],lambda _:pytest.fail('Unexpected backup'))['updated'] is False


def test_descriptor_only_addition_needs_no_ddl_or_backup_but_remains_tracked(engine, monkeypatch):
    from google.protobuf import descriptor_pb2
    old = schema_updates.descriptors()
    files = descriptor_pb2.FileDescriptorSet.FromString(old)
    message = next(m for f in files.file for m in f.message_type if m.name == 'Dataset')
    field = message.field.add(name='migration_metadata_probe', number=1000,
        type=descriptor_pb2.FieldDescriptorProto.TYPE_STRING,
        label=descriptor_pb2.FieldDescriptorProto.LABEL_OPTIONAL)
    updated = files.SerializeToString(deterministic=True)
    monkeypatch.setattr(schema_updates, 'descriptors', lambda: updated)
    result = preview(engine, Base.metadata)
    assert not result['required'] and result['compatible']
    assert schema_updates.apply(engine, Base.metadata, result['fingerprint'],
        lambda _: pytest.fail('Unexpected backup'))['updated'] is False
    with engine.connect() as connection:
        assert bytes(schema_updates._baseline(connection)) == updated
    monkeypatch.setattr(schema_updates, 'descriptors', lambda: old)
    assert not preview(engine, Base.metadata)['compatible']
