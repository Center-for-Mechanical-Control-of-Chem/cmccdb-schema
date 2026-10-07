"""Compatibility entry point; existing databases require explicit migrations."""
from cmccdb_schema.orm.schema_updates import MigrationRequired, plan


def upgrade_database(engine, metadata):
    """Check synchronization without making unbacked changes to existing data."""
    with engine.connect() as connection:
        preview = plan(connection, metadata)
    if preview['required'] or not preview['compatible']:
        raise MigrationRequired('Use the backup and migration API: ' + '; '.join(preview['blockers']))
    return preview
