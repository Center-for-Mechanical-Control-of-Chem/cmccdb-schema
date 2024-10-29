

if __name__ == "__main__":
    import os, sys, datetime
    root = __file__
    for _ in range(2): root = os.path.dirname(root)
    sys.path.insert(0, root)

    from cmccdb_schema import dataset_constructor
    from cmccdb_schema.proto import reaction_pb2
    from cmccdb_schema import validations

    rxns = dataset_constructor.DatasetConstructor.enumerate_spreadsheet(
        # os.path.join(os.path.dirname(__file__), "../../cmccdb-data/extended_template.csv"),
        os.path.join(os.path.dirname(__file__), "../../cmccdb-data/Arylation.xlsx"),
        extra_fields={
            'record_created': {
                "time": {"value":str(datetime.datetime.now())},
                "username": "maboyer",
                "email": "maboyer@tamu.edu"
            }
        }
    )
    validations.validate_datasets({"<text>": rxns})


    # print(
    #     DatasetConstructor.parse_csv_rows([
    #         ["INPUTS", "", "", "", ""],
    #         ["", "REACTANT", "", "", "REACTANT", ""],
    #         ["Key", "SMILES", "INCHI", "Amount (grams)", "SMILES", "Amount (grams)"]
    #     ])
    # )

    # rxn = ProtoMessage(ProtoHandler.parallel_proto.Reaction)
    # rxn.insert_tree([
    #     "INPUTS",
    #     [
    #         "key",
    #         "REACTANT", ["INCHI", "SMILES", "Amount (gram)"],
    #         "REACTANT", ["SMILES", "Amount (mole)"]
    #     ]
    # ])
    # rxn.insert_tree([
    #     "REACTANT", ["INCHI", "SMILES", "Amount (gram)"],
    #     "REACTANT", ["SMILES", "Amount (mole)"],
    #     "PRODUCT", ["SMILES", "Yield (percentage)"]
    # ])
    # template = ProtoTemplater(rxn.to_template())
    # raise Exception(
    #     rxn.to_template()
    # )

    # print(
    #     ProtoTemplater.format_proto(
    #         {"reactions":template.apply(["C", "C", .25, "CC", 1.2, "CCCC", .8])}
    #     )
    # )
    # print(
    #     template.apply(["CHHC", "HC", .25, "OO", 1.2])
    # )
    # print(template.spec)