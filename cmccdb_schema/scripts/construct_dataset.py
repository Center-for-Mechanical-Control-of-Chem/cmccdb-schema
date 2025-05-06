# Copyright 2020 Open Reaction Database Project Authors
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
"""Creates a Dataset by enumerating a template with a spreadsheet.

Usage:
    construct_dataset.py --data=<str> --name=<str> --email=<str> [--dataset-name=<str> --output=<str> --no-validate --overwrite-ok]

Options:
    --data=<str>            Path to a spreadsheet file with an appropriate template spec
    --dataset-name=<str>    Name of the Dataset
    --output=<str>          Filename for output Dataset
    --name=<str>            The user creating the Dataset
    --email=<str>           The email of the person creating the Dataset
    --no-validate           If set, do not validate Reaction protos
    --overwrite-ok          If set, allow overwriting old data
"""

import docopt

def main(kwargs):
    import os, sys, datetime

    root = __file__
    for _ in range(3): root = os.path.dirname(root)
    sys.path.insert(0, root)

    from cmccdb_schema import message_helpers, templating, dataset_constructor, validations
    from cmccdb_schema.logging_helpers import get_logger

    logger = get_logger(__name__)

    if len(kwargs.get("--name", "")) == 0:
        raise ValueError("contributor name is required")
    if len(kwargs.get("--email", "")) == 0:
        raise ValueError("contributor email is required")

    filename = kwargs["--data"]
    if not os.path.isfile(filename):
        raise IOError("spreadsheet file {} doesn't exist".format(filename))
    data_name = kwargs.get('--dataset-name', "")
    if data_name is not None and len(data_name) == 0:
        data_name = None

    output = kwargs.get('--output')
    if output is None:
        base_name, _ = os.path.splitext(filename)
        output = base_name + ".pbtxt"
        overwrite_ok = kwargs.get('--overwrite-ok')
        if not overwrite_ok and os.path.isfile(output):
            raise IOError("can't clobber old file {} without --overwrite-ok".format(output))

    logger.info(
        "generating new Dataset from %s for %s <%s>",
        kwargs["--data"],
        kwargs["--name"],
        kwargs["--email"]
    )

    dataset = dataset_constructor.DatasetConstructor.enumerate_spreadsheet(
        filename,
        name=data_name,
        optional_fields={
            'record_created': {
                "time": {"value": str(datetime.datetime.now())},
                "name": kwargs["--name"],
                "email": kwargs["--email"]
            }
        }
    )
    if not kwargs.get("--no-validate"):
        validations.validate_datasets({filename: dataset})

    logger.info("writing new Dataset to %s", output)
    message_helpers.write_message(dataset, output)


if __name__ == "__main__":
    main(docopt.docopt(__doc__))