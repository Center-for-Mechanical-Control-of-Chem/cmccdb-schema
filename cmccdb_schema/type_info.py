
from typing import Union

import google.protobuf.message  # pytype: disable=import-error
from google.protobuf import descriptor

from .proto import reaction_pb2

# Commonly used types.
FieldDescriptor = descriptor.FieldDescriptor
Message = google.protobuf.message.Message
ScalarType = Union[str, bytes, float, int, bool]

# Messages with 'type' and 'details' fields.
TypeDetailsMessage = Union[  # pylint: disable=invalid-name
    reaction_pb2.Analysis,
    reaction_pb2.CompoundIdentifier,
    reaction_pb2.CompoundPreparation,
    reaction_pb2.ElectrochemistryConditions,
    reaction_pb2.ElectrochemistryConditions.ElectrochemistryCell,
    reaction_pb2.MechanochemistryConditions,
    reaction_pb2.FlowConditions,
    reaction_pb2.FlowConditions.Tubing,
    reaction_pb2.IlluminationConditions,
    reaction_pb2.PressureConditions.Atmosphere,
    reaction_pb2.PressureConditions.PressureMeasurement,
    reaction_pb2.PressureConditions.PressureControl,
    reaction_pb2.ProductMeasurement,
    reaction_pb2.ProductMeasurement.MassSpecMeasurementDetails,
    reaction_pb2.ProductMeasurement.Selectivity,
    reaction_pb2.ReactionIdentifier,
    reaction_pb2.ReactionInput.AdditionDevice,
    reaction_pb2.ReactionSetup.ReactionEnvironment,
    reaction_pb2.ReactionWorkup,
    reaction_pb2.StirringConditions,
    reaction_pb2.TemperatureConditions.TemperatureMeasurement,
    reaction_pb2.TemperatureConditions.TemperatureControl,
    reaction_pb2.Texture,
    reaction_pb2.Vessel,
    reaction_pb2.VesselAttachment,
    reaction_pb2.VesselMaterial,
    reaction_pb2.VesselPreparation,
]

# Messages with 'units' fields.
UnitMessage = Union[
    reaction_pb2.Current,
    reaction_pb2.FlowRate,
    reaction_pb2.Length,
    reaction_pb2.Mass,
    reaction_pb2.Moles,
    reaction_pb2.Pressure,
    reaction_pb2.Temperature,
    reaction_pb2.Time,
    reaction_pb2.Voltage,
    reaction_pb2.Volume,
    reaction_pb2.Wavelength,
    reaction_pb2.Frequency,
    reaction_pb2.Force
]
