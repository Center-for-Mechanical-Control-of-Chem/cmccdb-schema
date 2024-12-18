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

"""Tests for cmccdb_schema.orm.scripts.add_datasets."""
import os

import docopt
import pytest
from sqlalchemy import create_engine
from testing.postgresql import Postgresql

from cmccdb_schema.orm.database import prepare_database
from cmccdb_schema.orm.scripts import add_datasets


def test_main():
    with Postgresql() as postgres:
        engine = create_engine(postgres.url(), future=True)
        if not prepare_database(engine):
            pytest.skip("RDKit cartridge is required")
        argv = [
            "--url",
            postgres.url(),
            "--pattern",
            os.path.join(os.path.dirname(__file__), "..", "testdata", "ord-nielsen-example.pbtxt"),
        ]
        add_datasets.main(**docopt.docopt(add_datasets.__doc__, argv))