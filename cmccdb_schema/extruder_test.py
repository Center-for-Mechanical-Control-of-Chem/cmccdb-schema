"""Extruder unit/header, wire-format, and ORM regression tests."""
import pytest
from google.protobuf.json_format import ParseDict

from cmccdb_schema import units, validations
from cmccdb_schema.dataset_constructor import DatasetConstructor, ProtoTemplater
from cmccdb_schema.orm.mappers import from_proto, to_proto
from cmccdb_schema.proto import reaction_pb2


@pytest.mark.parametrize('speed', ['Screw Speed (RPM)', 'Extruder Screw Speed (rpm)', 'Frequency (rev/min)'])
@pytest.mark.parametrize('rate', ['Feed Rate (cm^3/min)', 'Feed Rate (cm³/min)', 'Extruder Feed Rate (mL/min)'])
def test_extruder_headers(speed, rate):
    rows = [['REACTION'], ['', 'conditions'], ['', 'mechanochemistry'],
            ['', 'type', speed, rate], ['', 'TWIN_SCREW', '120', '2.5'],
            ['VARIANTS'], ['', 'notes'], ['', 'procedure_details'], ['DATA'], ['', 'Synthetic extruder test']]
    width = max(map(len, rows))
    parser, data = DatasetConstructor.from_iter([r + [''] * (width-len(r)) for r in rows])[0]
    message = parser.template.apply(DatasetConstructor.sanitize_csv_data(data[0], len(parser.template.template_paths)))
    reaction = ParseDict(ProtoTemplater.prep_proto(message, descriptor=reaction_pb2.Reaction.DESCRIPTOR), reaction_pb2.Reaction())
    mechanics = reaction.conditions.mechanochemistry
    assert mechanics.type == mechanics.TWIN_SCREW
    assert mechanics.frequency.value == 120 and mechanics.frequency.units == reaction_pb2.Frequency.RPM
    assert mechanics.feed_rate.value == 2.5 and mechanics.feed_rate.units == reaction_pb2.FlowRate.MILLILITER_PER_MINUTE
    validations.validate_message(mechanics)
    assert to_proto(from_proto(reaction)) == reaction
    assert reaction_pb2.Reaction.FromString(reaction.SerializeToString()) == reaction


@pytest.mark.parametrize('spelling', ['cm^3/min', 'cm³/min', 'cm3/min', 'cc/min', 'mL/min'])
def test_cubic_centimetres_equal_millilitres(spelling):
    resolver = units.UnitResolver()
    rate = resolver.resolve('2.5 ' + spelling)
    assert rate.units == reaction_pb2.FlowRate.MILLILITER_PER_MINUTE
    assert resolver.convert(rate, reaction_pb2.FlowRate.MICROLITER_PER_MINUTE).value == 2500


def test_rpm_converts_to_hertz_with_precision():
    converted = units.UnitResolver().convert(reaction_pb2.Frequency(value=120, precision=6, units=reaction_pb2.Frequency.RPM), 'Hz')
    assert converted.value == 2
    assert converted.precision == pytest.approx(.1)


@pytest.mark.parametrize('rate', [reaction_pb2.FlowRate(value=-1, units=reaction_pb2.FlowRate.MILLILITER_PER_MINUTE),
                                reaction_pb2.FlowRate(value=1)])
def test_bad_feed_rates_rejected(rate):
    with pytest.raises(validations.ValidationError):
        validations.validate_message(reaction_pb2.MechanochemistryConditions(type='TWIN_SCREW', feed_rate=rate))


def test_old_extruder_messages_remain_valid():
    old = reaction_pb2.MechanochemistryConditions(type='TWIN_SCREW', frequency={'value':120, 'units':'RPM'})
    restored = reaction_pb2.MechanochemistryConditions.FromString(old.SerializeToString())
    assert not restored.HasField('feed_rate')
    assert restored == old
    validations.validate_message(restored)
