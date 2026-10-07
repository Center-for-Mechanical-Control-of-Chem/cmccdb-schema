"""Regression cases from the local corpus and auxiliary-data upload flow."""
import pytest
from google.protobuf.json_format import ParseDict

from cmccdb_schema.dataset_constructor import DatasetConstructor, ProtoTemplater, normalize_key
from cmccdb_schema.proto import reaction_pb2


@pytest.mark.parametrize('value,kind', [(1.25, 'float_value'), (17, 'integer_value'),
    ('sample', 'string_value'), (b'\x00\xff', 'bytes_value'), ('url(spectrum.csv)', 'url')])
def test_data_template_kinds(value, kind):
    converted = ProtoTemplater.prep_proto(value, descriptor=reaction_pb2.Data.DESCRIPTOR)
    data = ParseDict(converted, reaction_pb2.Data())
    assert data.WhichOneof('kind') == kind
    assert getattr(data, kind) == ('spectrum.csv' if kind == 'url' else value)


def test_url_macro_does_not_rewrite_literal_identifier():
    reaction = ProtoTemplater.build_proto({'identifiers': [{'type': 'REACTION_TYPE', 'value': 'url(literal)'}]})
    assert reaction.identifiers[0].value == 'url(literal)'


def test_square_bracket_units_and_datetime_value_header():
    assert normalize_key('Frequency [Hz]') == normalize_key('Frequency (Hz)')
    assert DatasetConstructor.split_specifier_fields(['Time:value']) == ['Time']


def test_set_serialization_terminates_and_is_deterministic():
    assert DatasetConstructor.prep_object_json({'b', 'a'}) == ['a', 'b']


def test_empty_auxiliary_reference_rejected():
    with pytest.raises(ValueError, match='requires a file name'):
        ProtoTemplater.prep_proto('url()', descriptor=reaction_pb2.Data.DESCRIPTOR)


def test_generic_url_macro_remains_supported():
    assert ProtoTemplater.prep_proto({'data': 'url(spectrum.csv)'}) == {'data': {'url': 'spectrum.csv'}}


def _reaction_from_rows(rows):
    width=max(map(len,rows))
    parser,data=DatasetConstructor.from_iter([r+['']*(width-len(r)) for r in rows])[0]
    applied=parser.template.apply(DatasetConstructor.sanitize_csv_data(data[0],len(parser.template.template_paths)))
    return ParseDict(ProtoTemplater.prep_proto(applied,descriptor=reaction_pb2.Reaction.DESCRIPTOR),reaction_pb2.Reaction())


def test_repeated_scalar_headers_preserve_order():
    reaction=_reaction_from_rows([
        ['REACTION'],['','conditions'],['','mechanochemistry'],['','type','geometry','geometry'],
        ['','BALL_MILL','conveying','kneading'],['VARIANTS'],['','notes'],['','procedure_details'],['DATA'],['','test']])
    assert list(reaction.conditions.mechanochemistry.geometry)==['conveying','kneading']


def test_workup_temperature_field_does_not_overwrite_type():
    reaction=_reaction_from_rows([
        ['REACTION'],['','workups'],['','type','temperature'],['','','setpoint'],
        ['','','value','units'],['','FILTRATION','20','CELSIUS'],
        ['VARIANTS'],['','notes'],['','procedure_details'],['DATA'],['','test']])
    assert reaction.workups[0].type==reaction_pb2.ReactionWorkup.FILTRATION
    assert reaction.workups[0].temperature.setpoint.value==20
    assert reaction.workups[0].temperature.setpoint.units==reaction_pb2.Temperature.CELSIUS


def test_explicit_data_kind_retains_metadata_and_zero():
    reaction=_reaction_from_rows([
        ['REACTION'],['','provenance'],['','reaction_metadata'],['','key','integer_value','description','format'],
        ['','sample','0','zero preserved','int'],
        ['VARIANTS'],['','notes'],['','procedure_details'],['DATA'],['','test']])
    data=reaction.provenance.reaction_metadata['sample']
    assert data.WhichOneof('kind')=='integer_value'
    assert data.integer_value==0 and data.description=='zero preserved' and data.format=='int'


def test_xlsx_preserves_typed_boolean_cells_and_all_sheets(monkeypatch):
    import openpyxl
    rows=[['REACTION'],['','provenance'],['','is_mined'],['',False],
          ['VARIANTS'],['','notes'],['','procedure_details'],['DATA'],['','test']]
    class Sheet:
        title='Typed cells'
        def iter_rows(self,values_only):
            assert values_only
            return iter(rows)
    class Book:
        worksheets=[Sheet(),Sheet()]
        def close(self): pass
    monkeypatch.setattr(openpyxl,'load_workbook',lambda *args,**kwargs:Book())
    blocks=DatasetConstructor.from_spreadsheet('test.xlsx')
    assert len(blocks)==2
    for parser,data in blocks:
        applied=parser.template.apply(DatasetConstructor.sanitize_csv_data(data[0],len(parser.template.template_paths)))
        assert applied['provenance']['is_mined'] is False


def test_blank_common_value_keeps_following_fields_aligned():
    reaction=_reaction_from_rows([
        ['REACTION'],['','provenance'],['','city','doi'],['','','10.1039/B915669K'],
        ['VARIANTS'],['','notes'],['','procedure_details'],['DATA'],['','test']])
    assert reaction.provenance.city==''
    assert reaction.provenance.doi=='10.1039/B915669K'


def test_declared_reaction_ids_are_preserved(monkeypatch):
    rows=[['REACTION'],['','reaction_id'],['','cmcc-'+'a'*32],
          ['VARIANTS'],['','notes'],['','procedure_details'],['DATA'],['','test']]
    monkeypatch.setattr(DatasetConstructor,'from_spreadsheet',classmethod(lambda cls,*args,**kwargs:cls.from_iter([r+['']*(2-len(r)) for r in rows])))
    dataset=DatasetConstructor.enumerate_spreadsheet('test.xlsx',id='b'*32)
    assert dataset.reactions[0].reaction_id=='cmcc-'+'a'*32


def test_crystal_angles_are_registered_and_validated():
    from cmccdb_schema import validations
    validations.validate_message(reaction_pb2.Angle(value=90,units=reaction_pb2.Angle.DEGREES))
    with pytest.raises(validations.ValidationError,match='units'):
        validations.validate_message(reaction_pb2.Angle(value=90))


def test_repeated_compounds_keep_their_own_identifiers():
    reaction=_reaction_from_rows([
        ['REACTION'],['','inputs'],['','key','components','','components'],
        ['','','identifiers','','identifiers'],['','','value','type','value','type'],
        ['','mixture','CCO','SMILES','O','SMILES'],
        ['VARIANTS'],['','notes'],['','procedure_details'],['DATA'],['','test']])
    components=reaction.inputs['mixture'].components
    assert len(components)==2
    assert [c.identifiers[0].value for c in components]==['CCO','O']
    assert all(len(c.identifiers)==1 for c in components)


def test_repeated_outcomes_keep_separate_products():
    reaction=_reaction_from_rows([
        ['REACTION'],['','outcomes','','outcomes'],['','products','','products'],
        ['','identifiers','','identifiers'],['','value','type','value','type'],
        ['','CC=O','SMILES','C','SMILES'],
        ['VARIANTS'],['','notes'],['','procedure_details'],['DATA'],['','test']])
    assert len(reaction.outcomes)==2
    assert [o.products[0].identifiers[0].value for o in reaction.outcomes]==['CC=O','C']
