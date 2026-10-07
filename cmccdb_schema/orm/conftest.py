# Copyright 2022 Open Reaction Database Project Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Pytest fixtures."""
import os
from typing import Iterator

import pytest
from sqlalchemy import create_engine
from sqlalchemy.engine import make_url
from sqlalchemy.orm import Session
from testing.postgresql import Postgresql

from cmccdb_schema.message_helpers import load_message
from cmccdb_schema.orm.database import add_dataset, prepare_database
from cmccdb_schema.proto import dataset_pb2


@pytest.fixture(scope='session')
def database_engine(tmp_path_factory):
    """Use an explicitly disposable database, or start an ephemeral server."""
    url = os.getenv('CMCCDB_TEST_DATABASE_URL')
    if url:
        if not (make_url(url).database or '').startswith('cmccdb_test_'):
            raise ValueError('CMCCDB_TEST_DATABASE_URL must name a cmccdb_test_* database')
        engine = create_engine(url, future=True)
        try:
            yield engine
        finally:
            engine.dispose()
    else:
        with Postgresql(base_dir=str(tmp_path_factory.mktemp('postgres')),
                        postgres_args='-h 127.0.0.1 -F -c unix_socket_directories=') as postgres:
            engine = create_engine(postgres.url(), future=True)
            try:
                yield engine
            finally:
                engine.dispose()


@pytest.fixture(scope='session')
def rdkit_cartridge(database_engine):
    cartridge = prepare_database(database_engine)
    if os.getenv('CMCCDB_REQUIRE_RDKIT') == '1' and not cartridge:
        pytest.fail('This verification run requires the RDKit PostgreSQL cartridge')
    return cartridge


@pytest.fixture
def corpus_session(database_engine, rdkit_cartridge):
    with Session(database_engine) as session:
        session.info['rdkit_cartridge'] = rdkit_cartridge
        yield session
        session.rollback()


@pytest.fixture
def test_session(database_engine, rdkit_cartridge, request) -> Iterator[Session]:
    if request.node.path.name == 'rdkit_mappers_test.py' and not rdkit_cartridge:
        pytest.skip('RDKit PostgreSQL cartridge is unavailable; use CMCCDB_REQUIRE_RDKIT=1 to require it')
    datasets = [
        load_message(
            os.path.join(os.path.dirname(__file__), "testdata", "ord-nielsen-example.pbtxt"), dataset_pb2.Dataset
        )
    ]
    with Session(database_engine) as session:
        session.info['rdkit_cartridge'] = rdkit_cartridge
        for dataset in datasets:
            add_dataset(dataset, session, rdkit_cartridge=rdkit_cartridge)
        session.flush()
        yield session
        session.rollback()
