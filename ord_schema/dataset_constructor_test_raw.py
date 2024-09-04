

if __name__ == "__main__":
    import os, sys
    root = __file__
    for _ in range(2): root = os.path.dirname(root)
    sys.path.insert(0, root)

    from ord_schema import dataset_constructor
    from ord_schema.proto import reaction_pb2
    from ord_schema import validations

    rxns = dataset_constructor.DatasetConstructor.enumerate_csv(
        os.path.join(os.path.dirname(__file__), "../../cmccdb-data/extended_template.csv")
    )

    textpb = "\n".join(rxns)
    wtf = textpb.encode("utf-8")
    dataset = reaction_pb2.Reaction.FromString(wtf)
    validations.validate_datasets({"<text>": dataset})


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