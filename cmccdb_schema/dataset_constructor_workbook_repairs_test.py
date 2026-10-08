"""Import regressions found while repairing the incomplete workbook corpus."""
import pytest
from cmccdb_schema.dataset_constructor import DatasetConstructor, normalize_key, ProtoTemplater
from google.protobuf.json_format import ParseDict
from cmccdb_schema import units
from cmccdb_schema.proto import reaction_pb2

def block(label):
    return [['REACTION',''],['','DOI'],['','10.1039/example'],['VARIANTS',''],
            ['','notes'],['','procedure_details'],['DATA',''],['',label]]

def test_adjacent_blocks_reset_parser_state_and_keep_all_records():
    parsed=DatasetConstructor.from_iter(block('first')+block('second'))
    assert len(parsed)==2
    assert [rows for _,rows in parsed]==[[['first']],[['second']]]
    assert all(parser.common==[['DOI'],['10.1039/example']] for parser,_ in parsed)

def test_unmarked_records_after_blank_separator_are_not_silently_discarded():
    with pytest.raises(ValueError,match='outside a reaction block'):
        DatasetConstructor.from_iter(block('first')+[['',''],['','second']])

def test_comment_spacers_preserve_records_in_current_block():
    parsed=DatasetConstructor.from_iter(block('first')+[['#! Spacer',''],['','second']])
    assert len(parsed)==1
    assert parsed[0][1]==[['first'],['second']]


def test_empty_tuple_row_ends_data_block():
    parsed = DatasetConstructor.from_iter(block('first') + [()] + block('second'))
    assert [rows for _, rows in parsed] == [[['first']], [['second']]]


def test_dimensionless_xlsx_ragged_rows_remain_aligned(monkeypatch):
    import openpyxl
    rows = [(), ['REACTION'], ['', 'provenance'], ['', 'city', 'doi'],
            ['', '', '10.1039/example'], ['VARIANTS'], ['', 'notes'],
            ['', 'procedure_details'], ['DATA'], ['', 'first'], ()]

    class Sheet:
        title = 'No worksheet dimension'

        def iter_rows(self, values_only):
            assert values_only
            return iter(rows)

    class Book:
        worksheets = [Sheet()]

        def close(self):
            pass

    monkeypatch.setattr(openpyxl, 'load_workbook', lambda *args, **kwargs: Book())
    [(parser, data)] = DatasetConstructor.from_spreadsheet('dimensionless.xlsx')
    assert parser.template.spec['provenance']['doi'] == '10.1039/example'
    applied = parser.template.apply(DatasetConstructor.sanitize_csv_data(data[0], len(parser.template.template_paths)))
    reaction = ParseDict(ProtoTemplater.prep_proto(applied, descriptor=reaction_pb2.Reaction.DESCRIPTOR), reaction_pb2.Reaction())
    assert reaction.provenance.city == ''
    assert data == [['first', '']]


def test_interleaved_input_and_product_columns_keep_source_order():
    headers = [['', 'REACTANT', '', 'PRODUCT', '', 'REAGENT'],
               ['', 'SMILES', 'Amount (mmol)', 'SMILES', 'Yield (%)', 'Name', 'Amount (mmol)']]
    values = ['', 'CC=O', '1', 'CCO', '91', 'Sodium borohydride', '2']
    rows = [['REACTION'], ['', 'DOI'], ['', '10.1039/example'],
            ['VARIANTS'], *headers, ['DATA'], values]
    width = max(map(len, rows))
    [(parser, data)] = DatasetConstructor.from_iter([row + [''] * (width - len(row)) for row in rows])
    applied = parser.template.apply(DatasetConstructor.sanitize_csv_data(data[0], len(parser.template.template_paths)))
    reaction = ParseDict(ProtoTemplater.prep_proto(applied, descriptor=reaction_pb2.Reaction.DESCRIPTOR), reaction_pb2.Reaction())
    components = reaction.inputs['inputs-0'].components
    assert [compound.identifiers[0].value for compound in components] == ['CC=O', 'Sodium borohydride']
    assert [compound.amount.moles.value for compound in components] == [1, 2]
    product = reaction.outcomes[0].products[0]
    assert product.identifiers[0].value == 'CCO'
    assert product.measurements[0].percentage.value == 91


def test_interleaved_common_provenance_and_conditions_keep_source_order():
    rows = [['REACTION'], ['', 'provenance', 'conditions', 'provenance'],
            ['', 'city', 'mechanochemistry', 'doi'], ['', '', 'type'],
            ['', 'Wuhu', 'BALL_MILL', '10.1039/example'], ['VARIANTS'],
            ['', 'notes'], ['', 'procedure_details'], ['DATA'], ['', 'test']]
    width = max(map(len, rows))
    [(parser, data)] = DatasetConstructor.from_iter([row + [''] * (width - len(row)) for row in rows])
    applied = parser.template.apply(DatasetConstructor.sanitize_csv_data(data[0], len(parser.template.template_paths)))
    reaction = ParseDict(ProtoTemplater.prep_proto(applied, descriptor=reaction_pb2.Reaction.DESCRIPTOR), reaction_pb2.Reaction())
    assert reaction.provenance.city == 'Wuhu'
    assert reaction.provenance.doi == '10.1039/example'
    assert reaction.conditions.mechanochemistry.type == reaction_pb2.MechanochemistryConditions.BALL_MILL

@pytest.mark.parametrize('unit',['µL','μL','uL'])
def test_both_unicode_micro_symbols_in_workbook_headers(unit):
    assert normalize_key(f'Amount ({unit})')==('amount','microliter')

@pytest.mark.parametrize('unit',['µL','μL','uL'])
def test_both_unicode_micro_symbols_in_value_resolver(unit):
    message=units.UnitResolver().resolve(f'12 {unit}')
    assert message==reaction_pb2.Volume(value=12,units=reaction_pb2.Volume.MICROLITER)
    assert units.UnitResolver().resolve_unit(unit)[1]==reaction_pb2.Volume.MICROLITER


@pytest.mark.parametrize('unit', ['µL', 'μL'])
def test_custom_micro_aliases_and_forbidden_units_use_the_same_normalization(unit):
    resolver = units.UnitResolver(unit_synonyms={reaction_pb2.Volume: {reaction_pb2.Volume.MICROLITER: ['µL', 'μL']}})
    assert resolver.resolve('12 ' + unit).value == 12
    forbidden = units.UnitResolver(forbidden_units={'µL': 'ambiguous custom alias'})
    with pytest.raises(KeyError, match='forbidden units'):
        forbidden.resolve('12 ' + unit)


def test_conflicting_normalized_unit_aliases_are_rejected():
    with pytest.raises(KeyError, match='duplicated unit'):
        units.UnitResolver(unit_synonyms={reaction_pb2.Volume: {
            reaction_pb2.Volume.MICROLITER: ['µL'], reaction_pb2.Volume.MILLILITER: ['μL']}})
