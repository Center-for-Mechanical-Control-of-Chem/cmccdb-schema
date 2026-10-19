"""Export a Dataset to CSV, a ZIP with separate attachment files, or XLSX."""
import argparse
import json
from cmccdb_schema import message_helpers
from cmccdb_schema.proto import dataset_pb2
from cmccdb_schema.spreadsheet import export_dataset


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", help="Dataset .pb, .pbtxt or .json file; .gz is supported")
    parser.add_argument("output", help="Destination .zip (CSV + files), .csv (no attachments), or .xlsx file")
    parser.add_argument("--node", help="Node executable for the existing Artifact Tool XLSX backend")
    parser.add_argument("--force", action="store_true", help="Replace the output only after round-trip verification succeeds")
    args = parser.parse_args(argv)
    dataset = message_helpers.load_message(args.input, dataset_pb2.Dataset)
    result = export_dataset(dataset, args.output, node=args.node, overwrite=args.force)
    print(json.dumps(result, sort_keys=True))


if __name__ == "__main__":
    main()
