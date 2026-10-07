"""Verify association updates under SQLAlchemy 1.4 without an RDKit server."""
from types import SimpleNamespace

from sqlalchemy import Column, ForeignKey, Integer, String, create_engine, select
from sqlalchemy.orm import Session, declarative_base

from cmccdb_schema.orm import database


def test_structure_associations_preserve_primary_keys_and_other_datasets(monkeypatch):
    # Minimal SQL tables isolate the association-update logic; RDKit parsing is
    # separately exercised by the PostgreSQL tests and live contribution suite.
    base = declarative_base()

    class Dataset(base):
        __tablename__ = 'dataset'
        id = Column(Integer, primary_key=True)
        dataset_id = Column(String)

    class Reaction(base):
        __tablename__ = 'reaction'
        id = Column(Integer, primary_key=True)
        dataset_id = Column(Integer, ForeignKey('dataset.id'))
        reaction_smiles = Column(String)
        rdkit_reaction_id = Column(Integer)

    class ReactionInput(base):
        __tablename__ = 'reaction_input'
        id = Column(Integer, primary_key=True)
        reaction_id = Column(Integer, ForeignKey('reaction.id'))

    class Compound(base):
        __tablename__ = 'compound'
        id = Column(Integer, primary_key=True)
        reaction_input_id = Column(Integer, ForeignKey('reaction_input.id'))
        smiles = Column(String)
        rdkit_mol_id = Column(Integer)

    class ReactionOutcome(base):
        __tablename__ = 'reaction_outcome'
        id = Column(Integer, primary_key=True)
        reaction_id = Column(Integer, ForeignKey('reaction.id'))

    class ProductCompound(base):
        __tablename__ = 'product_compound'
        id = Column(Integer, primary_key=True)
        reaction_outcome_id = Column(Integer, ForeignKey('reaction_outcome.id'))
        smiles = Column(String)
        rdkit_mol_id = Column(Integer)

    class RDKitReaction(base):
        __tablename__ = 'rdkit_reaction'
        id = Column(Integer, primary_key=True)
        reaction_smiles = Column(String)

    class RDKitMol(base):
        __tablename__ = 'rdkit_mol'
        id = Column(Integer, primary_key=True)
        smiles = Column(String)

    monkeypatch.setattr(database, 'Mappers', SimpleNamespace(Dataset=Dataset, Reaction=Reaction,
        ReactionInput=ReactionInput, Compound=Compound, ReactionOutcome=ReactionOutcome,
        ProductCompound=ProductCompound))
    monkeypatch.setattr(database, 'RDKitReaction', RDKitReaction)
    monkeypatch.setattr(database, 'RDKitMol', RDKitMol)
    engine = create_engine('sqlite://', future=True)
    base.metadata.create_all(engine)
    try:
        with Session(engine) as session:
            session.add_all([Dataset(id=1, dataset_id='existing'), Dataset(id=2, dataset_id='incoming')])
            for row_id, smiles, rxn in [(10, 'N', 'N>>N'), (20, 'CCO', 'CCO>>CC=O'),
                                        (21, 'O', 'O>>O')]:
                session.add_all([
                    RDKitReaction(id=row_id + 100, reaction_smiles=rxn),
                    RDKitMol(id=row_id + 200, smiles=smiles),
                    Reaction(id=row_id, dataset_id=1 if row_id == 10 else 2,
                        reaction_smiles=rxn, rdkit_reaction_id=110 if row_id == 10 else None),
                    ReactionInput(id=row_id, reaction_id=row_id),
                    Compound(id=row_id, reaction_input_id=row_id, smiles=smiles,
                        rdkit_mol_id=210 if row_id == 10 else None),
                    ReactionOutcome(id=row_id, reaction_id=row_id),
                    ProductCompound(id=row_id, reaction_outcome_id=row_id, smiles=smiles,
                        rdkit_mol_id=210 if row_id == 10 else None),
                ])
            session.flush()
            # A repeated update and an absent dataset must also be harmless.
            for name in ['incoming', 'incoming', 'absent']:
                database.update_rdkit_ids(name, session)
                session.flush()
                session.expire_all()
                for mapper, index_field, offset in [(Reaction, 'rdkit_reaction_id', 100),
                    (Compound, 'rdkit_mol_id', 200), (ProductCompound, 'rdkit_mol_id', 200)]:
                    rows = session.execute(select(mapper.id, getattr(mapper, index_field)).order_by(mapper.id)).all()
                    assert rows == [(10, 10 + offset), (20, 20 + offset), (21, 21 + offset)]
    finally:
        engine.dispose()
