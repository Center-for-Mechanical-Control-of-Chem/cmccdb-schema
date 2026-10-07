"""Additive upgrades for databases created by earlier CMCCDB schemas."""
from sqlalchemy import Enum, inspect, text
from sqlalchemy.schema import AddConstraint, CreateColumn


def upgrade_database(engine, metadata):
    """Keep existing rows while adding schema fields and enum values.

    PostgreSQL requires new enum values to be committed before their first use.
    The legacy geometry column held PostgreSQL array literals as text.
    """
    inspector = inspect(engine)
    quote = engine.dialect.identifier_preparer.quote
    enums = {(e['schema'], e['name']): e['labels'] for e in inspector.get_enums(schema='*')}
    enum_types = {(column.type.schema or 'public', column.type.name): column.type
                  for table in metadata.tables.values() for column in table.columns
                  if isinstance(column.type, Enum)}
    for key, enum_type in enum_types.items():
        if key not in enums:
            enum_type.create(engine, checkfirst=True)
    with engine.begin() as connection:
        for table in metadata.tables.values():
            for column in table.columns:
                if not isinstance(column.type, Enum):
                    continue
                key = (column.type.schema or 'public', column.type.name)
                if key not in enums:
                    continue
                for value in column.type.enums:
                    if value not in enums[key]:
                        literal = "'" + value.replace("'", "''") + "'"
                        connection.execute(text(f'ALTER TYPE {quote(key[0])}.{quote(key[1])} ADD VALUE IF NOT EXISTS {literal}'))
    with engine.begin() as connection:
        for table in metadata.tables.values():
            if not inspector.has_table(table.name, schema=table.schema):
                continue
            columns = {c['name']: c for c in inspector.get_columns(table.name, schema=table.schema)}
            qualified = engine.dialect.identifier_preparer.format_table(table)
            for column in table.columns:
                if column.name not in columns:
                    if not column.nullable:
                        raise ValueError(f'Cannot automatically add required column {table.fullname}.{column.name}')
                    definition = str(CreateColumn(column).compile(dialect=engine.dialect))
                    connection.execute(text(f'ALTER TABLE {qualified} ADD COLUMN {definition}'))
            if table.fullname == 'cmccdb.mechanochemistry_conditions' and 'geometry' in columns:
                if str(columns['geometry']['type']).upper() == 'TEXT':
                    connection.execute(text(f'''ALTER TABLE {qualified}
                        ALTER COLUMN geometry TYPE text[] USING
                        CASE WHEN geometry IS NULL THEN NULL
                             WHEN left(geometry, 1) = '{{' THEN geometry::text[]
                             ELSE ARRAY[geometry] END'''))
    # New tables may be targets of foreign keys added to existing tables.
    metadata.create_all(engine)
    inspector = inspect(engine)
    with engine.begin() as connection:
        for table in metadata.tables.values():
            foreign_keys = inspector.get_foreign_keys(table.name, schema=table.schema)
            for constraint in table.foreign_key_constraints:
                foreign_columns = [element.parent.name for element in constraint.elements]
                target = constraint.elements[0].column.table
                if not any(fk['constrained_columns'] == foreign_columns and fk['referred_table'] == target.name
                           and fk['referred_schema'] == target.schema for fk in foreign_keys):
                    connection.execute(AddConstraint(constraint))
