// source: cmccdb-schema/proto/reaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.cmccdb.Amount', null, global);
goog.exportSymbol('proto.cmccdb.Amount.KindCase', null, global);
goog.exportSymbol('proto.cmccdb.Analysis', null, global);
goog.exportSymbol('proto.cmccdb.Analysis.AnalysisType', null, global);
goog.exportSymbol('proto.cmccdb.Compound', null, global);
goog.exportSymbol('proto.cmccdb.Compound.Source', null, global);
goog.exportSymbol('proto.cmccdb.CompoundIdentifier', null, global);
goog.exportSymbol('proto.cmccdb.CompoundIdentifier.CompoundIdentifierType', null, global);
goog.exportSymbol('proto.cmccdb.CompoundPreparation', null, global);
goog.exportSymbol('proto.cmccdb.CompoundPreparation.CompoundPreparationType', null, global);
goog.exportSymbol('proto.cmccdb.Concentration', null, global);
goog.exportSymbol('proto.cmccdb.Concentration.ConcentrationUnit', null, global);
goog.exportSymbol('proto.cmccdb.CrudeComponent', null, global);
goog.exportSymbol('proto.cmccdb.Current', null, global);
goog.exportSymbol('proto.cmccdb.Current.CurrentUnit', null, global);
goog.exportSymbol('proto.cmccdb.Data', null, global);
goog.exportSymbol('proto.cmccdb.Data.KindCase', null, global);
goog.exportSymbol('proto.cmccdb.DateTime', null, global);
goog.exportSymbol('proto.cmccdb.ElectrochemistryConditions', null, global);
goog.exportSymbol('proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell', null, global);
goog.exportSymbol('proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.ElectrochemistryCellType', null, global);
goog.exportSymbol('proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement', null, global);
goog.exportSymbol('proto.cmccdb.ElectrochemistryConditions.ElectrochemistryType', null, global);
goog.exportSymbol('proto.cmccdb.FloatValue', null, global);
goog.exportSymbol('proto.cmccdb.FlowConditions', null, global);
goog.exportSymbol('proto.cmccdb.FlowConditions.FlowType', null, global);
goog.exportSymbol('proto.cmccdb.FlowConditions.Tubing', null, global);
goog.exportSymbol('proto.cmccdb.FlowConditions.Tubing.TubingType', null, global);
goog.exportSymbol('proto.cmccdb.FlowRate', null, global);
goog.exportSymbol('proto.cmccdb.FlowRate.FlowRateUnit', null, global);
goog.exportSymbol('proto.cmccdb.Force', null, global);
goog.exportSymbol('proto.cmccdb.Force.ForceUnit', null, global);
goog.exportSymbol('proto.cmccdb.Frequency', null, global);
goog.exportSymbol('proto.cmccdb.Frequency.FrequencyUnit', null, global);
goog.exportSymbol('proto.cmccdb.IlluminationConditions', null, global);
goog.exportSymbol('proto.cmccdb.IlluminationConditions.IlluminationType', null, global);
goog.exportSymbol('proto.cmccdb.Length', null, global);
goog.exportSymbol('proto.cmccdb.Length.LengthUnit', null, global);
goog.exportSymbol('proto.cmccdb.Mass', null, global);
goog.exportSymbol('proto.cmccdb.Mass.MassUnit', null, global);
goog.exportSymbol('proto.cmccdb.MechanochemistryConditions', null, global);
goog.exportSymbol('proto.cmccdb.MechanochemistryConditions.MechanochemistryType', null, global);
goog.exportSymbol('proto.cmccdb.Moles', null, global);
goog.exportSymbol('proto.cmccdb.Moles.MolesUnit', null, global);
goog.exportSymbol('proto.cmccdb.Percentage', null, global);
goog.exportSymbol('proto.cmccdb.Person', null, global);
goog.exportSymbol('proto.cmccdb.Pressure', null, global);
goog.exportSymbol('proto.cmccdb.Pressure.PressureUnit', null, global);
goog.exportSymbol('proto.cmccdb.PressureConditions', null, global);
goog.exportSymbol('proto.cmccdb.PressureConditions.Atmosphere', null, global);
goog.exportSymbol('proto.cmccdb.PressureConditions.Atmosphere.AtmosphereType', null, global);
goog.exportSymbol('proto.cmccdb.PressureConditions.PressureControl', null, global);
goog.exportSymbol('proto.cmccdb.PressureConditions.PressureControl.PressureControlType', null, global);
goog.exportSymbol('proto.cmccdb.PressureConditions.PressureMeasurement', null, global);
goog.exportSymbol('proto.cmccdb.PressureConditions.PressureMeasurement.PressureMeasurementType', null, global);
goog.exportSymbol('proto.cmccdb.ProductCompound', null, global);
goog.exportSymbol('proto.cmccdb.ProductMeasurement', null, global);
goog.exportSymbol('proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails', null, global);
goog.exportSymbol('proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.MassSpecMeasurementType', null, global);
goog.exportSymbol('proto.cmccdb.ProductMeasurement.ProductMeasurementType', null, global);
goog.exportSymbol('proto.cmccdb.ProductMeasurement.Selectivity', null, global);
goog.exportSymbol('proto.cmccdb.ProductMeasurement.Selectivity.SelectivityType', null, global);
goog.exportSymbol('proto.cmccdb.ProductMeasurement.ValueCase', null, global);
goog.exportSymbol('proto.cmccdb.Reaction', null, global);
goog.exportSymbol('proto.cmccdb.ReactionConditions', null, global);
goog.exportSymbol('proto.cmccdb.ReactionIdentifier', null, global);
goog.exportSymbol('proto.cmccdb.ReactionIdentifier.ReactionIdentifierType', null, global);
goog.exportSymbol('proto.cmccdb.ReactionInput', null, global);
goog.exportSymbol('proto.cmccdb.ReactionInput.AdditionDevice', null, global);
goog.exportSymbol('proto.cmccdb.ReactionInput.AdditionDevice.AdditionDeviceType', null, global);
goog.exportSymbol('proto.cmccdb.ReactionInput.AdditionSpeed', null, global);
goog.exportSymbol('proto.cmccdb.ReactionInput.AdditionSpeed.AdditionSpeedType', null, global);
goog.exportSymbol('proto.cmccdb.ReactionNotes', null, global);
goog.exportSymbol('proto.cmccdb.ReactionObservation', null, global);
goog.exportSymbol('proto.cmccdb.ReactionOutcome', null, global);
goog.exportSymbol('proto.cmccdb.ReactionProvenance', null, global);
goog.exportSymbol('proto.cmccdb.ReactionRole', null, global);
goog.exportSymbol('proto.cmccdb.ReactionRole.ReactionRoleType', null, global);
goog.exportSymbol('proto.cmccdb.ReactionSetup', null, global);
goog.exportSymbol('proto.cmccdb.ReactionSetup.ReactionEnvironment', null, global);
goog.exportSymbol('proto.cmccdb.ReactionSetup.ReactionEnvironment.ReactionEnvironmentType', null, global);
goog.exportSymbol('proto.cmccdb.ReactionWorkup', null, global);
goog.exportSymbol('proto.cmccdb.ReactionWorkup.ReactionWorkupType', null, global);
goog.exportSymbol('proto.cmccdb.RecordEvent', null, global);
goog.exportSymbol('proto.cmccdb.StirringConditions', null, global);
goog.exportSymbol('proto.cmccdb.StirringConditions.StirringMethodType', null, global);
goog.exportSymbol('proto.cmccdb.StirringConditions.StirringRate', null, global);
goog.exportSymbol('proto.cmccdb.StirringConditions.StirringRate.StirringRateType', null, global);
goog.exportSymbol('proto.cmccdb.Temperature', null, global);
goog.exportSymbol('proto.cmccdb.Temperature.TemperatureUnit', null, global);
goog.exportSymbol('proto.cmccdb.TemperatureConditions', null, global);
goog.exportSymbol('proto.cmccdb.TemperatureConditions.TemperatureControl', null, global);
goog.exportSymbol('proto.cmccdb.TemperatureConditions.TemperatureControl.TemperatureControlType', null, global);
goog.exportSymbol('proto.cmccdb.TemperatureConditions.TemperatureMeasurement', null, global);
goog.exportSymbol('proto.cmccdb.TemperatureConditions.TemperatureMeasurement.TemperatureMeasurementType', null, global);
goog.exportSymbol('proto.cmccdb.Texture', null, global);
goog.exportSymbol('proto.cmccdb.Texture.TextureType', null, global);
goog.exportSymbol('proto.cmccdb.Time', null, global);
goog.exportSymbol('proto.cmccdb.Time.TimeUnit', null, global);
goog.exportSymbol('proto.cmccdb.UnmeasuredAmount', null, global);
goog.exportSymbol('proto.cmccdb.UnmeasuredAmount.UnmeasuredAmountType', null, global);
goog.exportSymbol('proto.cmccdb.Vessel', null, global);
goog.exportSymbol('proto.cmccdb.Vessel.VesselType', null, global);
goog.exportSymbol('proto.cmccdb.VesselAttachment', null, global);
goog.exportSymbol('proto.cmccdb.VesselAttachment.VesselAttachmentType', null, global);
goog.exportSymbol('proto.cmccdb.VesselMaterial', null, global);
goog.exportSymbol('proto.cmccdb.VesselMaterial.VesselMaterialType', null, global);
goog.exportSymbol('proto.cmccdb.VesselPreparation', null, global);
goog.exportSymbol('proto.cmccdb.VesselPreparation.VesselPreparationType', null, global);
goog.exportSymbol('proto.cmccdb.Voltage', null, global);
goog.exportSymbol('proto.cmccdb.Voltage.VoltageUnit', null, global);
goog.exportSymbol('proto.cmccdb.Volume', null, global);
goog.exportSymbol('proto.cmccdb.Volume.VolumeUnit', null, global);
goog.exportSymbol('proto.cmccdb.Wavelength', null, global);
goog.exportSymbol('proto.cmccdb.Wavelength.WavelengthUnit', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Reaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.Reaction.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.Reaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Reaction.displayName = 'proto.cmccdb.Reaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionIdentifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionIdentifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionIdentifier.displayName = 'proto.cmccdb.ReactionIdentifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.ReactionInput.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.ReactionInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionInput.displayName = 'proto.cmccdb.ReactionInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionInput.AdditionSpeed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionInput.AdditionSpeed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionInput.AdditionSpeed.displayName = 'proto.cmccdb.ReactionInput.AdditionSpeed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionInput.AdditionDevice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionInput.AdditionDevice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionInput.AdditionDevice.displayName = 'proto.cmccdb.ReactionInput.AdditionDevice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Amount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cmccdb.Amount.oneofGroups_);
};
goog.inherits(proto.cmccdb.Amount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Amount.displayName = 'proto.cmccdb.Amount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.UnmeasuredAmount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.UnmeasuredAmount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.UnmeasuredAmount.displayName = 'proto.cmccdb.UnmeasuredAmount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Texture = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Texture, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Texture.displayName = 'proto.cmccdb.Texture';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.CrudeComponent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.CrudeComponent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.CrudeComponent.displayName = 'proto.cmccdb.CrudeComponent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Compound = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.Compound.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.Compound, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Compound.displayName = 'proto.cmccdb.Compound';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Compound.Source = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Compound.Source, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Compound.Source.displayName = 'proto.cmccdb.Compound.Source';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionRole.displayName = 'proto.cmccdb.ReactionRole';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.CompoundPreparation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.CompoundPreparation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.CompoundPreparation.displayName = 'proto.cmccdb.CompoundPreparation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.CompoundIdentifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.CompoundIdentifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.CompoundIdentifier.displayName = 'proto.cmccdb.CompoundIdentifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Vessel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.Vessel.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.Vessel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Vessel.displayName = 'proto.cmccdb.Vessel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.VesselMaterial = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.VesselMaterial, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.VesselMaterial.displayName = 'proto.cmccdb.VesselMaterial';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.VesselAttachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.VesselAttachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.VesselAttachment.displayName = 'proto.cmccdb.VesselAttachment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.VesselPreparation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.VesselPreparation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.VesselPreparation.displayName = 'proto.cmccdb.VesselPreparation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionSetup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionSetup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionSetup.displayName = 'proto.cmccdb.ReactionSetup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionSetup.ReactionEnvironment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionSetup.ReactionEnvironment.displayName = 'proto.cmccdb.ReactionSetup.ReactionEnvironment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionConditions.displayName = 'proto.cmccdb.ReactionConditions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.TemperatureConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.TemperatureConditions.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.TemperatureConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.TemperatureConditions.displayName = 'proto.cmccdb.TemperatureConditions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.TemperatureConditions.TemperatureControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.TemperatureConditions.TemperatureControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.TemperatureConditions.TemperatureControl.displayName = 'proto.cmccdb.TemperatureConditions.TemperatureControl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.TemperatureConditions.TemperatureMeasurement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.TemperatureConditions.TemperatureMeasurement.displayName = 'proto.cmccdb.TemperatureConditions.TemperatureMeasurement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.PressureConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.PressureConditions.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.PressureConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.PressureConditions.displayName = 'proto.cmccdb.PressureConditions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.PressureConditions.PressureControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.PressureConditions.PressureControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.PressureConditions.PressureControl.displayName = 'proto.cmccdb.PressureConditions.PressureControl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.PressureConditions.Atmosphere = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.PressureConditions.Atmosphere, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.PressureConditions.Atmosphere.displayName = 'proto.cmccdb.PressureConditions.Atmosphere';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.PressureConditions.PressureMeasurement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.PressureConditions.PressureMeasurement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.PressureConditions.PressureMeasurement.displayName = 'proto.cmccdb.PressureConditions.PressureMeasurement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.StirringConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.StirringConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.StirringConditions.displayName = 'proto.cmccdb.StirringConditions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.StirringConditions.StirringRate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.StirringConditions.StirringRate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.StirringConditions.StirringRate.displayName = 'proto.cmccdb.StirringConditions.StirringRate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.IlluminationConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.IlluminationConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.IlluminationConditions.displayName = 'proto.cmccdb.IlluminationConditions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ElectrochemistryConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.ElectrochemistryConditions.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.ElectrochemistryConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ElectrochemistryConditions.displayName = 'proto.cmccdb.ElectrochemistryConditions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.displayName = 'proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.displayName = 'proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.MechanochemistryConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.MechanochemistryConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.MechanochemistryConditions.displayName = 'proto.cmccdb.MechanochemistryConditions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.FlowConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.FlowConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.FlowConditions.displayName = 'proto.cmccdb.FlowConditions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.FlowConditions.Tubing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.FlowConditions.Tubing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.FlowConditions.Tubing.displayName = 'proto.cmccdb.FlowConditions.Tubing';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionNotes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionNotes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionNotes.displayName = 'proto.cmccdb.ReactionNotes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionObservation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionObservation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionObservation.displayName = 'proto.cmccdb.ReactionObservation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionWorkup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ReactionWorkup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionWorkup.displayName = 'proto.cmccdb.ReactionWorkup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionOutcome = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.ReactionOutcome.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.ReactionOutcome, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionOutcome.displayName = 'proto.cmccdb.ReactionOutcome';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ProductCompound = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.ProductCompound.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.ProductCompound, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ProductCompound.displayName = 'proto.cmccdb.ProductCompound';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ProductMeasurement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cmccdb.ProductMeasurement.oneofGroups_);
};
goog.inherits(proto.cmccdb.ProductMeasurement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ProductMeasurement.displayName = 'proto.cmccdb.ProductMeasurement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.displayName = 'proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ProductMeasurement.Selectivity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.ProductMeasurement.Selectivity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ProductMeasurement.Selectivity.displayName = 'proto.cmccdb.ProductMeasurement.Selectivity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.DateTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.DateTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.DateTime.displayName = 'proto.cmccdb.DateTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Analysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Analysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Analysis.displayName = 'proto.cmccdb.Analysis';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.ReactionProvenance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cmccdb.ReactionProvenance.repeatedFields_, null);
};
goog.inherits(proto.cmccdb.ReactionProvenance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.ReactionProvenance.displayName = 'proto.cmccdb.ReactionProvenance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Person.displayName = 'proto.cmccdb.Person';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.RecordEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.RecordEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.RecordEvent.displayName = 'proto.cmccdb.RecordEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Time = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Time, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Time.displayName = 'proto.cmccdb.Time';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Force = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Force, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Force.displayName = 'proto.cmccdb.Force';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Frequency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Frequency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Frequency.displayName = 'proto.cmccdb.Frequency';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Mass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Mass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Mass.displayName = 'proto.cmccdb.Mass';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Moles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Moles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Moles.displayName = 'proto.cmccdb.Moles';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Volume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Volume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Volume.displayName = 'proto.cmccdb.Volume';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Concentration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Concentration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Concentration.displayName = 'proto.cmccdb.Concentration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Pressure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Pressure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Pressure.displayName = 'proto.cmccdb.Pressure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Temperature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Temperature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Temperature.displayName = 'proto.cmccdb.Temperature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Current = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Current, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Current.displayName = 'proto.cmccdb.Current';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Voltage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Voltage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Voltage.displayName = 'proto.cmccdb.Voltage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Length = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Length, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Length.displayName = 'proto.cmccdb.Length';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Wavelength = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Wavelength, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Wavelength.displayName = 'proto.cmccdb.Wavelength';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.FlowRate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.FlowRate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.FlowRate.displayName = 'proto.cmccdb.FlowRate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Percentage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.Percentage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Percentage.displayName = 'proto.cmccdb.Percentage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.FloatValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cmccdb.FloatValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.FloatValue.displayName = 'proto.cmccdb.FloatValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cmccdb.Data = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cmccdb.Data.oneofGroups_);
};
goog.inherits(proto.cmccdb.Data, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cmccdb.Data.displayName = 'proto.cmccdb.Data';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.Reaction.repeatedFields_ = [1,6,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Reaction.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Reaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Reaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Reaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifiersList: jspb.Message.toObjectList(msg.getIdentifiersList(),
    proto.cmccdb.ReactionIdentifier.toObject, includeInstance),
    inputsMap: (f = msg.getInputsMap()) ? f.toObject(includeInstance, proto.cmccdb.ReactionInput.toObject) : [],
    setup: (f = msg.getSetup()) && proto.cmccdb.ReactionSetup.toObject(includeInstance, f),
    conditions: (f = msg.getConditions()) && proto.cmccdb.ReactionConditions.toObject(includeInstance, f),
    notes: (f = msg.getNotes()) && proto.cmccdb.ReactionNotes.toObject(includeInstance, f),
    observationsList: jspb.Message.toObjectList(msg.getObservationsList(),
    proto.cmccdb.ReactionObservation.toObject, includeInstance),
    workupsList: jspb.Message.toObjectList(msg.getWorkupsList(),
    proto.cmccdb.ReactionWorkup.toObject, includeInstance),
    outcomesList: jspb.Message.toObjectList(msg.getOutcomesList(),
    proto.cmccdb.ReactionOutcome.toObject, includeInstance),
    provenance: (f = msg.getProvenance()) && proto.cmccdb.ReactionProvenance.toObject(includeInstance, f),
    reactionId: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Reaction}
 */
proto.cmccdb.Reaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Reaction;
  return proto.cmccdb.Reaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Reaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Reaction}
 */
proto.cmccdb.Reaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.ReactionIdentifier;
      reader.readMessage(value,proto.cmccdb.ReactionIdentifier.deserializeBinaryFromReader);
      msg.addIdentifiers(value);
      break;
    case 2:
      var value = msg.getInputsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cmccdb.ReactionInput.deserializeBinaryFromReader, "", new proto.cmccdb.ReactionInput());
         });
      break;
    case 3:
      var value = new proto.cmccdb.ReactionSetup;
      reader.readMessage(value,proto.cmccdb.ReactionSetup.deserializeBinaryFromReader);
      msg.setSetup(value);
      break;
    case 4:
      var value = new proto.cmccdb.ReactionConditions;
      reader.readMessage(value,proto.cmccdb.ReactionConditions.deserializeBinaryFromReader);
      msg.setConditions(value);
      break;
    case 5:
      var value = new proto.cmccdb.ReactionNotes;
      reader.readMessage(value,proto.cmccdb.ReactionNotes.deserializeBinaryFromReader);
      msg.setNotes(value);
      break;
    case 6:
      var value = new proto.cmccdb.ReactionObservation;
      reader.readMessage(value,proto.cmccdb.ReactionObservation.deserializeBinaryFromReader);
      msg.addObservations(value);
      break;
    case 7:
      var value = new proto.cmccdb.ReactionWorkup;
      reader.readMessage(value,proto.cmccdb.ReactionWorkup.deserializeBinaryFromReader);
      msg.addWorkups(value);
      break;
    case 8:
      var value = new proto.cmccdb.ReactionOutcome;
      reader.readMessage(value,proto.cmccdb.ReactionOutcome.deserializeBinaryFromReader);
      msg.addOutcomes(value);
      break;
    case 9:
      var value = new proto.cmccdb.ReactionProvenance;
      reader.readMessage(value,proto.cmccdb.ReactionProvenance.deserializeBinaryFromReader);
      msg.setProvenance(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setReactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Reaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Reaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Reaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Reaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifiersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cmccdb.ReactionIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getInputsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cmccdb.ReactionInput.serializeBinaryToWriter);
  }
  f = message.getSetup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.ReactionSetup.serializeBinaryToWriter
    );
  }
  f = message.getConditions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.ReactionConditions.serializeBinaryToWriter
    );
  }
  f = message.getNotes();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.ReactionNotes.serializeBinaryToWriter
    );
  }
  f = message.getObservationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.cmccdb.ReactionObservation.serializeBinaryToWriter
    );
  }
  f = message.getWorkupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.cmccdb.ReactionWorkup.serializeBinaryToWriter
    );
  }
  f = message.getOutcomesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.cmccdb.ReactionOutcome.serializeBinaryToWriter
    );
  }
  f = message.getProvenance();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cmccdb.ReactionProvenance.serializeBinaryToWriter
    );
  }
  f = message.getReactionId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * repeated ReactionIdentifier identifiers = 1;
 * @return {!Array<!proto.cmccdb.ReactionIdentifier>}
 */
proto.cmccdb.Reaction.prototype.getIdentifiersList = function() {
  return /** @type{!Array<!proto.cmccdb.ReactionIdentifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.ReactionIdentifier, 1));
};


/**
 * @param {!Array<!proto.cmccdb.ReactionIdentifier>} value
 * @return {!proto.cmccdb.Reaction} returns this
*/
proto.cmccdb.Reaction.prototype.setIdentifiersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cmccdb.ReactionIdentifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.ReactionIdentifier}
 */
proto.cmccdb.Reaction.prototype.addIdentifiers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cmccdb.ReactionIdentifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.clearIdentifiersList = function() {
  return this.setIdentifiersList([]);
};


/**
 * map<string, ReactionInput> inputs = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cmccdb.ReactionInput>}
 */
proto.cmccdb.Reaction.prototype.getInputsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cmccdb.ReactionInput>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.cmccdb.ReactionInput));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.clearInputsMap = function() {
  this.getInputsMap().clear();
  return this;
};


/**
 * optional ReactionSetup setup = 3;
 * @return {?proto.cmccdb.ReactionSetup}
 */
proto.cmccdb.Reaction.prototype.getSetup = function() {
  return /** @type{?proto.cmccdb.ReactionSetup} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ReactionSetup, 3));
};


/**
 * @param {?proto.cmccdb.ReactionSetup|undefined} value
 * @return {!proto.cmccdb.Reaction} returns this
*/
proto.cmccdb.Reaction.prototype.setSetup = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.clearSetup = function() {
  return this.setSetup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Reaction.prototype.hasSetup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ReactionConditions conditions = 4;
 * @return {?proto.cmccdb.ReactionConditions}
 */
proto.cmccdb.Reaction.prototype.getConditions = function() {
  return /** @type{?proto.cmccdb.ReactionConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ReactionConditions, 4));
};


/**
 * @param {?proto.cmccdb.ReactionConditions|undefined} value
 * @return {!proto.cmccdb.Reaction} returns this
*/
proto.cmccdb.Reaction.prototype.setConditions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.clearConditions = function() {
  return this.setConditions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Reaction.prototype.hasConditions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ReactionNotes notes = 5;
 * @return {?proto.cmccdb.ReactionNotes}
 */
proto.cmccdb.Reaction.prototype.getNotes = function() {
  return /** @type{?proto.cmccdb.ReactionNotes} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ReactionNotes, 5));
};


/**
 * @param {?proto.cmccdb.ReactionNotes|undefined} value
 * @return {!proto.cmccdb.Reaction} returns this
*/
proto.cmccdb.Reaction.prototype.setNotes = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.clearNotes = function() {
  return this.setNotes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Reaction.prototype.hasNotes = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated ReactionObservation observations = 6;
 * @return {!Array<!proto.cmccdb.ReactionObservation>}
 */
proto.cmccdb.Reaction.prototype.getObservationsList = function() {
  return /** @type{!Array<!proto.cmccdb.ReactionObservation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.ReactionObservation, 6));
};


/**
 * @param {!Array<!proto.cmccdb.ReactionObservation>} value
 * @return {!proto.cmccdb.Reaction} returns this
*/
proto.cmccdb.Reaction.prototype.setObservationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.cmccdb.ReactionObservation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.ReactionObservation}
 */
proto.cmccdb.Reaction.prototype.addObservations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.cmccdb.ReactionObservation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.clearObservationsList = function() {
  return this.setObservationsList([]);
};


/**
 * repeated ReactionWorkup workups = 7;
 * @return {!Array<!proto.cmccdb.ReactionWorkup>}
 */
proto.cmccdb.Reaction.prototype.getWorkupsList = function() {
  return /** @type{!Array<!proto.cmccdb.ReactionWorkup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.ReactionWorkup, 7));
};


/**
 * @param {!Array<!proto.cmccdb.ReactionWorkup>} value
 * @return {!proto.cmccdb.Reaction} returns this
*/
proto.cmccdb.Reaction.prototype.setWorkupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.cmccdb.ReactionWorkup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.ReactionWorkup}
 */
proto.cmccdb.Reaction.prototype.addWorkups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.cmccdb.ReactionWorkup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.clearWorkupsList = function() {
  return this.setWorkupsList([]);
};


/**
 * repeated ReactionOutcome outcomes = 8;
 * @return {!Array<!proto.cmccdb.ReactionOutcome>}
 */
proto.cmccdb.Reaction.prototype.getOutcomesList = function() {
  return /** @type{!Array<!proto.cmccdb.ReactionOutcome>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.ReactionOutcome, 8));
};


/**
 * @param {!Array<!proto.cmccdb.ReactionOutcome>} value
 * @return {!proto.cmccdb.Reaction} returns this
*/
proto.cmccdb.Reaction.prototype.setOutcomesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.cmccdb.ReactionOutcome=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.ReactionOutcome}
 */
proto.cmccdb.Reaction.prototype.addOutcomes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.cmccdb.ReactionOutcome, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.clearOutcomesList = function() {
  return this.setOutcomesList([]);
};


/**
 * optional ReactionProvenance provenance = 9;
 * @return {?proto.cmccdb.ReactionProvenance}
 */
proto.cmccdb.Reaction.prototype.getProvenance = function() {
  return /** @type{?proto.cmccdb.ReactionProvenance} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ReactionProvenance, 9));
};


/**
 * @param {?proto.cmccdb.ReactionProvenance|undefined} value
 * @return {!proto.cmccdb.Reaction} returns this
*/
proto.cmccdb.Reaction.prototype.setProvenance = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.clearProvenance = function() {
  return this.setProvenance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Reaction.prototype.hasProvenance = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string reaction_id = 10;
 * @return {string}
 */
proto.cmccdb.Reaction.prototype.getReactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Reaction} returns this
 */
proto.cmccdb.Reaction.prototype.setReactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionIdentifier.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionIdentifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionIdentifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionIdentifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isMapped: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionIdentifier}
 */
proto.cmccdb.ReactionIdentifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionIdentifier;
  return proto.cmccdb.ReactionIdentifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionIdentifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionIdentifier}
 */
proto.cmccdb.ReactionIdentifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.ReactionIdentifier.ReactionIdentifierType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMapped(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionIdentifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionIdentifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionIdentifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionIdentifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ReactionIdentifier.ReactionIdentifierType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  REACTION_SMILES: 2,
  REACTION_CXSMILES: 6,
  RDFILE: 3,
  RINCHI: 4,
  REACTION_TYPE: 5
};

/**
 * optional ReactionIdentifierType type = 1;
 * @return {!proto.cmccdb.ReactionIdentifier.ReactionIdentifierType}
 */
proto.cmccdb.ReactionIdentifier.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ReactionIdentifier.ReactionIdentifierType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.ReactionIdentifier.ReactionIdentifierType} value
 * @return {!proto.cmccdb.ReactionIdentifier} returns this
 */
proto.cmccdb.ReactionIdentifier.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.ReactionIdentifier.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionIdentifier} returns this
 */
proto.cmccdb.ReactionIdentifier.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.cmccdb.ReactionIdentifier.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionIdentifier} returns this
 */
proto.cmccdb.ReactionIdentifier.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_mapped = 4;
 * @return {boolean}
 */
proto.cmccdb.ReactionIdentifier.prototype.getIsMapped = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionIdentifier} returns this
 */
proto.cmccdb.ReactionIdentifier.prototype.setIsMapped = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionIdentifier} returns this
 */
proto.cmccdb.ReactionIdentifier.prototype.clearIsMapped = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionIdentifier.prototype.hasIsMapped = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.ReactionInput.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionInput.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    componentsList: jspb.Message.toObjectList(msg.getComponentsList(),
    proto.cmccdb.Compound.toObject, includeInstance),
    crudeComponentsList: jspb.Message.toObjectList(msg.getCrudeComponentsList(),
    proto.cmccdb.CrudeComponent.toObject, includeInstance),
    additionOrder: jspb.Message.getFieldWithDefault(msg, 3, 0),
    additionTime: (f = msg.getAdditionTime()) && proto.cmccdb.Time.toObject(includeInstance, f),
    additionSpeed: (f = msg.getAdditionSpeed()) && proto.cmccdb.ReactionInput.AdditionSpeed.toObject(includeInstance, f),
    additionDuration: (f = msg.getAdditionDuration()) && proto.cmccdb.Time.toObject(includeInstance, f),
    flowRate: (f = msg.getFlowRate()) && proto.cmccdb.FlowRate.toObject(includeInstance, f),
    additionDevice: (f = msg.getAdditionDevice()) && proto.cmccdb.ReactionInput.AdditionDevice.toObject(includeInstance, f),
    additionTemperature: (f = msg.getAdditionTemperature()) && proto.cmccdb.Temperature.toObject(includeInstance, f),
    texture: (f = msg.getTexture()) && proto.cmccdb.Texture.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionInput}
 */
proto.cmccdb.ReactionInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionInput;
  return proto.cmccdb.ReactionInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionInput}
 */
proto.cmccdb.ReactionInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.Compound;
      reader.readMessage(value,proto.cmccdb.Compound.deserializeBinaryFromReader);
      msg.addComponents(value);
      break;
    case 2:
      var value = new proto.cmccdb.CrudeComponent;
      reader.readMessage(value,proto.cmccdb.CrudeComponent.deserializeBinaryFromReader);
      msg.addCrudeComponents(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdditionOrder(value);
      break;
    case 4:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setAdditionTime(value);
      break;
    case 5:
      var value = new proto.cmccdb.ReactionInput.AdditionSpeed;
      reader.readMessage(value,proto.cmccdb.ReactionInput.AdditionSpeed.deserializeBinaryFromReader);
      msg.setAdditionSpeed(value);
      break;
    case 6:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setAdditionDuration(value);
      break;
    case 7:
      var value = new proto.cmccdb.FlowRate;
      reader.readMessage(value,proto.cmccdb.FlowRate.deserializeBinaryFromReader);
      msg.setFlowRate(value);
      break;
    case 8:
      var value = new proto.cmccdb.ReactionInput.AdditionDevice;
      reader.readMessage(value,proto.cmccdb.ReactionInput.AdditionDevice.deserializeBinaryFromReader);
      msg.setAdditionDevice(value);
      break;
    case 9:
      var value = new proto.cmccdb.Temperature;
      reader.readMessage(value,proto.cmccdb.Temperature.deserializeBinaryFromReader);
      msg.setAdditionTemperature(value);
      break;
    case 10:
      var value = new proto.cmccdb.Texture;
      reader.readMessage(value,proto.cmccdb.Texture.deserializeBinaryFromReader);
      msg.setTexture(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cmccdb.Compound.serializeBinaryToWriter
    );
  }
  f = message.getCrudeComponentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cmccdb.CrudeComponent.serializeBinaryToWriter
    );
  }
  f = message.getAdditionOrder();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAdditionTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = message.getAdditionSpeed();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.ReactionInput.AdditionSpeed.serializeBinaryToWriter
    );
  }
  f = message.getAdditionDuration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = message.getFlowRate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cmccdb.FlowRate.serializeBinaryToWriter
    );
  }
  f = message.getAdditionDevice();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.cmccdb.ReactionInput.AdditionDevice.serializeBinaryToWriter
    );
  }
  f = message.getAdditionTemperature();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cmccdb.Temperature.serializeBinaryToWriter
    );
  }
  f = message.getTexture();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.cmccdb.Texture.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionInput.AdditionSpeed.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionInput.AdditionSpeed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionInput.AdditionSpeed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionInput.AdditionSpeed.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionInput.AdditionSpeed}
 */
proto.cmccdb.ReactionInput.AdditionSpeed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionInput.AdditionSpeed;
  return proto.cmccdb.ReactionInput.AdditionSpeed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionInput.AdditionSpeed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionInput.AdditionSpeed}
 */
proto.cmccdb.ReactionInput.AdditionSpeed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.ReactionInput.AdditionSpeed.AdditionSpeedType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionInput.AdditionSpeed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionInput.AdditionSpeed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionInput.AdditionSpeed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionInput.AdditionSpeed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ReactionInput.AdditionSpeed.AdditionSpeedType = {
  UNSPECIFIED: 0,
  ALL_AT_ONCE: 1,
  FAST: 2,
  SLOW: 3,
  DROPWISE: 4,
  CONTINUOUS: 5,
  PORTIONWISE: 6
};

/**
 * optional AdditionSpeedType type = 1;
 * @return {!proto.cmccdb.ReactionInput.AdditionSpeed.AdditionSpeedType}
 */
proto.cmccdb.ReactionInput.AdditionSpeed.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ReactionInput.AdditionSpeed.AdditionSpeedType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.ReactionInput.AdditionSpeed.AdditionSpeedType} value
 * @return {!proto.cmccdb.ReactionInput.AdditionSpeed} returns this
 */
proto.cmccdb.ReactionInput.AdditionSpeed.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.ReactionInput.AdditionSpeed.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionInput.AdditionSpeed} returns this
 */
proto.cmccdb.ReactionInput.AdditionSpeed.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionInput.AdditionDevice.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionInput.AdditionDevice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionInput.AdditionDevice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionInput.AdditionDevice.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionInput.AdditionDevice}
 */
proto.cmccdb.ReactionInput.AdditionDevice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionInput.AdditionDevice;
  return proto.cmccdb.ReactionInput.AdditionDevice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionInput.AdditionDevice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionInput.AdditionDevice}
 */
proto.cmccdb.ReactionInput.AdditionDevice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.ReactionInput.AdditionDevice.AdditionDeviceType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionInput.AdditionDevice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionInput.AdditionDevice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionInput.AdditionDevice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionInput.AdditionDevice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ReactionInput.AdditionDevice.AdditionDeviceType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  NONE: 2,
  SYRINGE: 3,
  CANNULA: 4,
  ADDITION_FUNNEL: 5,
  PIPETTE: 6,
  POSITIVE_DISPLACEMENT_PIPETTE: 7
};

/**
 * optional AdditionDeviceType type = 1;
 * @return {!proto.cmccdb.ReactionInput.AdditionDevice.AdditionDeviceType}
 */
proto.cmccdb.ReactionInput.AdditionDevice.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ReactionInput.AdditionDevice.AdditionDeviceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.ReactionInput.AdditionDevice.AdditionDeviceType} value
 * @return {!proto.cmccdb.ReactionInput.AdditionDevice} returns this
 */
proto.cmccdb.ReactionInput.AdditionDevice.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.ReactionInput.AdditionDevice.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionInput.AdditionDevice} returns this
 */
proto.cmccdb.ReactionInput.AdditionDevice.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Compound components = 1;
 * @return {!Array<!proto.cmccdb.Compound>}
 */
proto.cmccdb.ReactionInput.prototype.getComponentsList = function() {
  return /** @type{!Array<!proto.cmccdb.Compound>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.Compound, 1));
};


/**
 * @param {!Array<!proto.cmccdb.Compound>} value
 * @return {!proto.cmccdb.ReactionInput} returns this
*/
proto.cmccdb.ReactionInput.prototype.setComponentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cmccdb.Compound=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.Compound}
 */
proto.cmccdb.ReactionInput.prototype.addComponents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cmccdb.Compound, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.clearComponentsList = function() {
  return this.setComponentsList([]);
};


/**
 * repeated CrudeComponent crude_components = 2;
 * @return {!Array<!proto.cmccdb.CrudeComponent>}
 */
proto.cmccdb.ReactionInput.prototype.getCrudeComponentsList = function() {
  return /** @type{!Array<!proto.cmccdb.CrudeComponent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.CrudeComponent, 2));
};


/**
 * @param {!Array<!proto.cmccdb.CrudeComponent>} value
 * @return {!proto.cmccdb.ReactionInput} returns this
*/
proto.cmccdb.ReactionInput.prototype.setCrudeComponentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cmccdb.CrudeComponent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.CrudeComponent}
 */
proto.cmccdb.ReactionInput.prototype.addCrudeComponents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cmccdb.CrudeComponent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.clearCrudeComponentsList = function() {
  return this.setCrudeComponentsList([]);
};


/**
 * optional int32 addition_order = 3;
 * @return {number}
 */
proto.cmccdb.ReactionInput.prototype.getAdditionOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.setAdditionOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Time addition_time = 4;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.ReactionInput.prototype.getAdditionTime = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 4));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.ReactionInput} returns this
*/
proto.cmccdb.ReactionInput.prototype.setAdditionTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.clearAdditionTime = function() {
  return this.setAdditionTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionInput.prototype.hasAdditionTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AdditionSpeed addition_speed = 5;
 * @return {?proto.cmccdb.ReactionInput.AdditionSpeed}
 */
proto.cmccdb.ReactionInput.prototype.getAdditionSpeed = function() {
  return /** @type{?proto.cmccdb.ReactionInput.AdditionSpeed} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ReactionInput.AdditionSpeed, 5));
};


/**
 * @param {?proto.cmccdb.ReactionInput.AdditionSpeed|undefined} value
 * @return {!proto.cmccdb.ReactionInput} returns this
*/
proto.cmccdb.ReactionInput.prototype.setAdditionSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.clearAdditionSpeed = function() {
  return this.setAdditionSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionInput.prototype.hasAdditionSpeed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Time addition_duration = 6;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.ReactionInput.prototype.getAdditionDuration = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 6));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.ReactionInput} returns this
*/
proto.cmccdb.ReactionInput.prototype.setAdditionDuration = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.clearAdditionDuration = function() {
  return this.setAdditionDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionInput.prototype.hasAdditionDuration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FlowRate flow_rate = 7;
 * @return {?proto.cmccdb.FlowRate}
 */
proto.cmccdb.ReactionInput.prototype.getFlowRate = function() {
  return /** @type{?proto.cmccdb.FlowRate} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.FlowRate, 7));
};


/**
 * @param {?proto.cmccdb.FlowRate|undefined} value
 * @return {!proto.cmccdb.ReactionInput} returns this
*/
proto.cmccdb.ReactionInput.prototype.setFlowRate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.clearFlowRate = function() {
  return this.setFlowRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionInput.prototype.hasFlowRate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AdditionDevice addition_device = 8;
 * @return {?proto.cmccdb.ReactionInput.AdditionDevice}
 */
proto.cmccdb.ReactionInput.prototype.getAdditionDevice = function() {
  return /** @type{?proto.cmccdb.ReactionInput.AdditionDevice} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ReactionInput.AdditionDevice, 8));
};


/**
 * @param {?proto.cmccdb.ReactionInput.AdditionDevice|undefined} value
 * @return {!proto.cmccdb.ReactionInput} returns this
*/
proto.cmccdb.ReactionInput.prototype.setAdditionDevice = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.clearAdditionDevice = function() {
  return this.setAdditionDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionInput.prototype.hasAdditionDevice = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Temperature addition_temperature = 9;
 * @return {?proto.cmccdb.Temperature}
 */
proto.cmccdb.ReactionInput.prototype.getAdditionTemperature = function() {
  return /** @type{?proto.cmccdb.Temperature} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Temperature, 9));
};


/**
 * @param {?proto.cmccdb.Temperature|undefined} value
 * @return {!proto.cmccdb.ReactionInput} returns this
*/
proto.cmccdb.ReactionInput.prototype.setAdditionTemperature = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.clearAdditionTemperature = function() {
  return this.setAdditionTemperature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionInput.prototype.hasAdditionTemperature = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Texture texture = 10;
 * @return {?proto.cmccdb.Texture}
 */
proto.cmccdb.ReactionInput.prototype.getTexture = function() {
  return /** @type{?proto.cmccdb.Texture} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Texture, 10));
};


/**
 * @param {?proto.cmccdb.Texture|undefined} value
 * @return {!proto.cmccdb.ReactionInput} returns this
*/
proto.cmccdb.ReactionInput.prototype.setTexture = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionInput} returns this
 */
proto.cmccdb.ReactionInput.prototype.clearTexture = function() {
  return this.setTexture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionInput.prototype.hasTexture = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cmccdb.Amount.oneofGroups_ = [[1,2,3,5]];

/**
 * @enum {number}
 */
proto.cmccdb.Amount.KindCase = {
  KIND_NOT_SET: 0,
  MASS: 1,
  MOLES: 2,
  VOLUME: 3,
  UNMEASURED: 5
};

/**
 * @return {proto.cmccdb.Amount.KindCase}
 */
proto.cmccdb.Amount.prototype.getKindCase = function() {
  return /** @type {proto.cmccdb.Amount.KindCase} */(jspb.Message.computeOneofCase(this, proto.cmccdb.Amount.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Amount.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Amount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Amount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Amount.toObject = function(includeInstance, msg) {
  var f, obj = {
    mass: (f = msg.getMass()) && proto.cmccdb.Mass.toObject(includeInstance, f),
    moles: (f = msg.getMoles()) && proto.cmccdb.Moles.toObject(includeInstance, f),
    volume: (f = msg.getVolume()) && proto.cmccdb.Volume.toObject(includeInstance, f),
    unmeasured: (f = msg.getUnmeasured()) && proto.cmccdb.UnmeasuredAmount.toObject(includeInstance, f),
    volumeIncludesSolutes: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Amount}
 */
proto.cmccdb.Amount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Amount;
  return proto.cmccdb.Amount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Amount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Amount}
 */
proto.cmccdb.Amount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.Mass;
      reader.readMessage(value,proto.cmccdb.Mass.deserializeBinaryFromReader);
      msg.setMass(value);
      break;
    case 2:
      var value = new proto.cmccdb.Moles;
      reader.readMessage(value,proto.cmccdb.Moles.deserializeBinaryFromReader);
      msg.setMoles(value);
      break;
    case 3:
      var value = new proto.cmccdb.Volume;
      reader.readMessage(value,proto.cmccdb.Volume.deserializeBinaryFromReader);
      msg.setVolume(value);
      break;
    case 5:
      var value = new proto.cmccdb.UnmeasuredAmount;
      reader.readMessage(value,proto.cmccdb.UnmeasuredAmount.deserializeBinaryFromReader);
      msg.setUnmeasured(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVolumeIncludesSolutes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Amount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Amount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Amount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Amount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMass();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.Mass.serializeBinaryToWriter
    );
  }
  f = message.getMoles();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cmccdb.Moles.serializeBinaryToWriter
    );
  }
  f = message.getVolume();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Volume.serializeBinaryToWriter
    );
  }
  f = message.getUnmeasured();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.UnmeasuredAmount.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Mass mass = 1;
 * @return {?proto.cmccdb.Mass}
 */
proto.cmccdb.Amount.prototype.getMass = function() {
  return /** @type{?proto.cmccdb.Mass} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Mass, 1));
};


/**
 * @param {?proto.cmccdb.Mass|undefined} value
 * @return {!proto.cmccdb.Amount} returns this
*/
proto.cmccdb.Amount.prototype.setMass = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.cmccdb.Amount.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Amount} returns this
 */
proto.cmccdb.Amount.prototype.clearMass = function() {
  return this.setMass(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Amount.prototype.hasMass = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Moles moles = 2;
 * @return {?proto.cmccdb.Moles}
 */
proto.cmccdb.Amount.prototype.getMoles = function() {
  return /** @type{?proto.cmccdb.Moles} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Moles, 2));
};


/**
 * @param {?proto.cmccdb.Moles|undefined} value
 * @return {!proto.cmccdb.Amount} returns this
*/
proto.cmccdb.Amount.prototype.setMoles = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.cmccdb.Amount.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Amount} returns this
 */
proto.cmccdb.Amount.prototype.clearMoles = function() {
  return this.setMoles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Amount.prototype.hasMoles = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Volume volume = 3;
 * @return {?proto.cmccdb.Volume}
 */
proto.cmccdb.Amount.prototype.getVolume = function() {
  return /** @type{?proto.cmccdb.Volume} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Volume, 3));
};


/**
 * @param {?proto.cmccdb.Volume|undefined} value
 * @return {!proto.cmccdb.Amount} returns this
*/
proto.cmccdb.Amount.prototype.setVolume = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cmccdb.Amount.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Amount} returns this
 */
proto.cmccdb.Amount.prototype.clearVolume = function() {
  return this.setVolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Amount.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional UnmeasuredAmount unmeasured = 5;
 * @return {?proto.cmccdb.UnmeasuredAmount}
 */
proto.cmccdb.Amount.prototype.getUnmeasured = function() {
  return /** @type{?proto.cmccdb.UnmeasuredAmount} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.UnmeasuredAmount, 5));
};


/**
 * @param {?proto.cmccdb.UnmeasuredAmount|undefined} value
 * @return {!proto.cmccdb.Amount} returns this
*/
proto.cmccdb.Amount.prototype.setUnmeasured = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.cmccdb.Amount.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Amount} returns this
 */
proto.cmccdb.Amount.prototype.clearUnmeasured = function() {
  return this.setUnmeasured(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Amount.prototype.hasUnmeasured = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool volume_includes_solutes = 4;
 * @return {boolean}
 */
proto.cmccdb.Amount.prototype.getVolumeIncludesSolutes = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.Amount} returns this
 */
proto.cmccdb.Amount.prototype.setVolumeIncludesSolutes = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Amount} returns this
 */
proto.cmccdb.Amount.prototype.clearVolumeIncludesSolutes = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Amount.prototype.hasVolumeIncludesSolutes = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.UnmeasuredAmount.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.UnmeasuredAmount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.UnmeasuredAmount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.UnmeasuredAmount.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.UnmeasuredAmount}
 */
proto.cmccdb.UnmeasuredAmount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.UnmeasuredAmount;
  return proto.cmccdb.UnmeasuredAmount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.UnmeasuredAmount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.UnmeasuredAmount}
 */
proto.cmccdb.UnmeasuredAmount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.UnmeasuredAmount.UnmeasuredAmountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.UnmeasuredAmount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.UnmeasuredAmount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.UnmeasuredAmount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.UnmeasuredAmount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.UnmeasuredAmount.UnmeasuredAmountType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  SATURATED: 2,
  CATALYTIC: 3,
  TITRATED: 4
};

/**
 * optional UnmeasuredAmountType type = 1;
 * @return {!proto.cmccdb.UnmeasuredAmount.UnmeasuredAmountType}
 */
proto.cmccdb.UnmeasuredAmount.prototype.getType = function() {
  return /** @type {!proto.cmccdb.UnmeasuredAmount.UnmeasuredAmountType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.UnmeasuredAmount.UnmeasuredAmountType} value
 * @return {!proto.cmccdb.UnmeasuredAmount} returns this
 */
proto.cmccdb.UnmeasuredAmount.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.UnmeasuredAmount.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.UnmeasuredAmount} returns this
 */
proto.cmccdb.UnmeasuredAmount.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Texture.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Texture.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Texture} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Texture.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Texture}
 */
proto.cmccdb.Texture.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Texture;
  return proto.cmccdb.Texture.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Texture} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Texture}
 */
proto.cmccdb.Texture.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.Texture.TextureType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Texture.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Texture.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Texture} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Texture.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Texture.TextureType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  POWDER: 2,
  CRYSTAL: 3,
  OIL: 4,
  AMORPHOUS_SOLID: 5,
  FOAM: 6,
  WAX: 7,
  SEMI_SOLID: 8,
  SOLID: 9,
  LIQUID: 10,
  GAS: 11
};

/**
 * optional TextureType type = 1;
 * @return {!proto.cmccdb.Texture.TextureType}
 */
proto.cmccdb.Texture.prototype.getType = function() {
  return /** @type {!proto.cmccdb.Texture.TextureType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.Texture.TextureType} value
 * @return {!proto.cmccdb.Texture} returns this
 */
proto.cmccdb.Texture.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.Texture.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Texture} returns this
 */
proto.cmccdb.Texture.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.CrudeComponent.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.CrudeComponent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.CrudeComponent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.CrudeComponent.toObject = function(includeInstance, msg) {
  var f, obj = {
    reactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includesWorkup: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    hasDerivedAmount: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    amount: (f = msg.getAmount()) && proto.cmccdb.Amount.toObject(includeInstance, f),
    texture: (f = msg.getTexture()) && proto.cmccdb.Texture.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.CrudeComponent}
 */
proto.cmccdb.CrudeComponent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.CrudeComponent;
  return proto.cmccdb.CrudeComponent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.CrudeComponent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.CrudeComponent}
 */
proto.cmccdb.CrudeComponent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReactionId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludesWorkup(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasDerivedAmount(value);
      break;
    case 4:
      var value = new proto.cmccdb.Amount;
      reader.readMessage(value,proto.cmccdb.Amount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 5:
      var value = new proto.cmccdb.Texture;
      reader.readMessage(value,proto.cmccdb.Texture.deserializeBinaryFromReader);
      msg.setTexture(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.CrudeComponent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.CrudeComponent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.CrudeComponent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.CrudeComponent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getTexture();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.Texture.serializeBinaryToWriter
    );
  }
};


/**
 * optional string reaction_id = 1;
 * @return {string}
 */
proto.cmccdb.CrudeComponent.prototype.getReactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.CrudeComponent} returns this
 */
proto.cmccdb.CrudeComponent.prototype.setReactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool includes_workup = 2;
 * @return {boolean}
 */
proto.cmccdb.CrudeComponent.prototype.getIncludesWorkup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.CrudeComponent} returns this
 */
proto.cmccdb.CrudeComponent.prototype.setIncludesWorkup = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.CrudeComponent} returns this
 */
proto.cmccdb.CrudeComponent.prototype.clearIncludesWorkup = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.CrudeComponent.prototype.hasIncludesWorkup = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool has_derived_amount = 3;
 * @return {boolean}
 */
proto.cmccdb.CrudeComponent.prototype.getHasDerivedAmount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.CrudeComponent} returns this
 */
proto.cmccdb.CrudeComponent.prototype.setHasDerivedAmount = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.CrudeComponent} returns this
 */
proto.cmccdb.CrudeComponent.prototype.clearHasDerivedAmount = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.CrudeComponent.prototype.hasHasDerivedAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Amount amount = 4;
 * @return {?proto.cmccdb.Amount}
 */
proto.cmccdb.CrudeComponent.prototype.getAmount = function() {
  return /** @type{?proto.cmccdb.Amount} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Amount, 4));
};


/**
 * @param {?proto.cmccdb.Amount|undefined} value
 * @return {!proto.cmccdb.CrudeComponent} returns this
*/
proto.cmccdb.CrudeComponent.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.CrudeComponent} returns this
 */
proto.cmccdb.CrudeComponent.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.CrudeComponent.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Texture texture = 5;
 * @return {?proto.cmccdb.Texture}
 */
proto.cmccdb.CrudeComponent.prototype.getTexture = function() {
  return /** @type{?proto.cmccdb.Texture} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Texture, 5));
};


/**
 * @param {?proto.cmccdb.Texture|undefined} value
 * @return {!proto.cmccdb.CrudeComponent} returns this
*/
proto.cmccdb.CrudeComponent.prototype.setTexture = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.CrudeComponent} returns this
 */
proto.cmccdb.CrudeComponent.prototype.clearTexture = function() {
  return this.setTexture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.CrudeComponent.prototype.hasTexture = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.Compound.repeatedFields_ = [1,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Compound.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Compound.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Compound} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Compound.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifiersList: jspb.Message.toObjectList(msg.getIdentifiersList(),
    proto.cmccdb.CompoundIdentifier.toObject, includeInstance),
    amount: (f = msg.getAmount()) && proto.cmccdb.Amount.toObject(includeInstance, f),
    reactionRole: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isLimiting: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    preparationsList: jspb.Message.toObjectList(msg.getPreparationsList(),
    proto.cmccdb.CompoundPreparation.toObject, includeInstance),
    source: (f = msg.getSource()) && proto.cmccdb.Compound.Source.toObject(includeInstance, f),
    featuresMap: (f = msg.getFeaturesMap()) ? f.toObject(includeInstance, proto.cmccdb.Data.toObject) : [],
    analysesMap: (f = msg.getAnalysesMap()) ? f.toObject(includeInstance, proto.cmccdb.Analysis.toObject) : [],
    texture: (f = msg.getTexture()) && proto.cmccdb.Texture.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Compound}
 */
proto.cmccdb.Compound.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Compound;
  return proto.cmccdb.Compound.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Compound} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Compound}
 */
proto.cmccdb.Compound.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.CompoundIdentifier;
      reader.readMessage(value,proto.cmccdb.CompoundIdentifier.deserializeBinaryFromReader);
      msg.addIdentifiers(value);
      break;
    case 2:
      var value = new proto.cmccdb.Amount;
      reader.readMessage(value,proto.cmccdb.Amount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.ReactionRole.ReactionRoleType} */ (reader.readEnum());
      msg.setReactionRole(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLimiting(value);
      break;
    case 5:
      var value = new proto.cmccdb.CompoundPreparation;
      reader.readMessage(value,proto.cmccdb.CompoundPreparation.deserializeBinaryFromReader);
      msg.addPreparations(value);
      break;
    case 6:
      var value = new proto.cmccdb.Compound.Source;
      reader.readMessage(value,proto.cmccdb.Compound.Source.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 7:
      var value = msg.getFeaturesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cmccdb.Data.deserializeBinaryFromReader, "", new proto.cmccdb.Data());
         });
      break;
    case 8:
      var value = msg.getAnalysesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cmccdb.Analysis.deserializeBinaryFromReader, "", new proto.cmccdb.Analysis());
         });
      break;
    case 9:
      var value = new proto.cmccdb.Texture;
      reader.readMessage(value,proto.cmccdb.Texture.deserializeBinaryFromReader);
      msg.setTexture(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Compound.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Compound.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Compound} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Compound.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifiersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cmccdb.CompoundIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cmccdb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getReactionRole();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPreparationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.cmccdb.CompoundPreparation.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cmccdb.Compound.Source.serializeBinaryToWriter
    );
  }
  f = message.getFeaturesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cmccdb.Data.serializeBinaryToWriter);
  }
  f = message.getAnalysesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cmccdb.Analysis.serializeBinaryToWriter);
  }
  f = message.getTexture();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cmccdb.Texture.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Compound.Source.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Compound.Source.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Compound.Source} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Compound.Source.toObject = function(includeInstance, msg) {
  var f, obj = {
    vendor: jspb.Message.getFieldWithDefault(msg, 1, ""),
    catalogId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lot: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Compound.Source}
 */
proto.cmccdb.Compound.Source.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Compound.Source;
  return proto.cmccdb.Compound.Source.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Compound.Source} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Compound.Source}
 */
proto.cmccdb.Compound.Source.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVendor(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatalogId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Compound.Source.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Compound.Source.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Compound.Source} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Compound.Source.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVendor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCatalogId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLot();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string vendor = 1;
 * @return {string}
 */
proto.cmccdb.Compound.Source.prototype.getVendor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Compound.Source} returns this
 */
proto.cmccdb.Compound.Source.prototype.setVendor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string catalog_id = 2;
 * @return {string}
 */
proto.cmccdb.Compound.Source.prototype.getCatalogId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Compound.Source} returns this
 */
proto.cmccdb.Compound.Source.prototype.setCatalogId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lot = 3;
 * @return {string}
 */
proto.cmccdb.Compound.Source.prototype.getLot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Compound.Source} returns this
 */
proto.cmccdb.Compound.Source.prototype.setLot = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated CompoundIdentifier identifiers = 1;
 * @return {!Array<!proto.cmccdb.CompoundIdentifier>}
 */
proto.cmccdb.Compound.prototype.getIdentifiersList = function() {
  return /** @type{!Array<!proto.cmccdb.CompoundIdentifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.CompoundIdentifier, 1));
};


/**
 * @param {!Array<!proto.cmccdb.CompoundIdentifier>} value
 * @return {!proto.cmccdb.Compound} returns this
*/
proto.cmccdb.Compound.prototype.setIdentifiersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cmccdb.CompoundIdentifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.CompoundIdentifier}
 */
proto.cmccdb.Compound.prototype.addIdentifiers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cmccdb.CompoundIdentifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.clearIdentifiersList = function() {
  return this.setIdentifiersList([]);
};


/**
 * optional Amount amount = 2;
 * @return {?proto.cmccdb.Amount}
 */
proto.cmccdb.Compound.prototype.getAmount = function() {
  return /** @type{?proto.cmccdb.Amount} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Amount, 2));
};


/**
 * @param {?proto.cmccdb.Amount|undefined} value
 * @return {!proto.cmccdb.Compound} returns this
*/
proto.cmccdb.Compound.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Compound.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReactionRole.ReactionRoleType reaction_role = 3;
 * @return {!proto.cmccdb.ReactionRole.ReactionRoleType}
 */
proto.cmccdb.Compound.prototype.getReactionRole = function() {
  return /** @type {!proto.cmccdb.ReactionRole.ReactionRoleType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.ReactionRole.ReactionRoleType} value
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.setReactionRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool is_limiting = 4;
 * @return {boolean}
 */
proto.cmccdb.Compound.prototype.getIsLimiting = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.setIsLimiting = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.clearIsLimiting = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Compound.prototype.hasIsLimiting = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CompoundPreparation preparations = 5;
 * @return {!Array<!proto.cmccdb.CompoundPreparation>}
 */
proto.cmccdb.Compound.prototype.getPreparationsList = function() {
  return /** @type{!Array<!proto.cmccdb.CompoundPreparation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.CompoundPreparation, 5));
};


/**
 * @param {!Array<!proto.cmccdb.CompoundPreparation>} value
 * @return {!proto.cmccdb.Compound} returns this
*/
proto.cmccdb.Compound.prototype.setPreparationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.cmccdb.CompoundPreparation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.CompoundPreparation}
 */
proto.cmccdb.Compound.prototype.addPreparations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.cmccdb.CompoundPreparation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.clearPreparationsList = function() {
  return this.setPreparationsList([]);
};


/**
 * optional Source source = 6;
 * @return {?proto.cmccdb.Compound.Source}
 */
proto.cmccdb.Compound.prototype.getSource = function() {
  return /** @type{?proto.cmccdb.Compound.Source} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Compound.Source, 6));
};


/**
 * @param {?proto.cmccdb.Compound.Source|undefined} value
 * @return {!proto.cmccdb.Compound} returns this
*/
proto.cmccdb.Compound.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Compound.prototype.hasSource = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, Data> features = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cmccdb.Data>}
 */
proto.cmccdb.Compound.prototype.getFeaturesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cmccdb.Data>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.cmccdb.Data));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.clearFeaturesMap = function() {
  this.getFeaturesMap().clear();
  return this;
};


/**
 * map<string, Analysis> analyses = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cmccdb.Analysis>}
 */
proto.cmccdb.Compound.prototype.getAnalysesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cmccdb.Analysis>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.cmccdb.Analysis));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.clearAnalysesMap = function() {
  this.getAnalysesMap().clear();
  return this;
};


/**
 * optional Texture texture = 9;
 * @return {?proto.cmccdb.Texture}
 */
proto.cmccdb.Compound.prototype.getTexture = function() {
  return /** @type{?proto.cmccdb.Texture} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Texture, 9));
};


/**
 * @param {?proto.cmccdb.Texture|undefined} value
 * @return {!proto.cmccdb.Compound} returns this
*/
proto.cmccdb.Compound.prototype.setTexture = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Compound} returns this
 */
proto.cmccdb.Compound.prototype.clearTexture = function() {
  return this.setTexture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Compound.prototype.hasTexture = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionRole.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionRole.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionRole}
 */
proto.cmccdb.ReactionRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionRole;
  return proto.cmccdb.ReactionRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionRole}
 */
proto.cmccdb.ReactionRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.cmccdb.ReactionRole.ReactionRoleType = {
  UNSPECIFIED: 0,
  REACTANT: 1,
  REAGENT: 2,
  SOLVENT: 3,
  CATALYST: 4,
  WORKUP: 5,
  INTERNAL_STANDARD: 6,
  AUTHENTIC_STANDARD: 7,
  PRODUCT: 8,
  BYPRODUCT: 9,
  SIDE_PRODUCT: 10
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.CompoundPreparation.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.CompoundPreparation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.CompoundPreparation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.CompoundPreparation.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reactionId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.CompoundPreparation}
 */
proto.cmccdb.CompoundPreparation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.CompoundPreparation;
  return proto.cmccdb.CompoundPreparation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.CompoundPreparation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.CompoundPreparation}
 */
proto.cmccdb.CompoundPreparation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.CompoundPreparation.CompoundPreparationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.CompoundPreparation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.CompoundPreparation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.CompoundPreparation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.CompoundPreparation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReactionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.CompoundPreparation.CompoundPreparationType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  NONE: 2,
  REPURIFIED: 3,
  SPARGED: 4,
  DRIED: 5,
  SYNTHESIZED: 6
};

/**
 * optional CompoundPreparationType type = 1;
 * @return {!proto.cmccdb.CompoundPreparation.CompoundPreparationType}
 */
proto.cmccdb.CompoundPreparation.prototype.getType = function() {
  return /** @type {!proto.cmccdb.CompoundPreparation.CompoundPreparationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.CompoundPreparation.CompoundPreparationType} value
 * @return {!proto.cmccdb.CompoundPreparation} returns this
 */
proto.cmccdb.CompoundPreparation.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.CompoundPreparation.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.CompoundPreparation} returns this
 */
proto.cmccdb.CompoundPreparation.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string reaction_id = 3;
 * @return {string}
 */
proto.cmccdb.CompoundPreparation.prototype.getReactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.CompoundPreparation} returns this
 */
proto.cmccdb.CompoundPreparation.prototype.setReactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.CompoundIdentifier.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.CompoundIdentifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.CompoundIdentifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.CompoundIdentifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.CompoundIdentifier}
 */
proto.cmccdb.CompoundIdentifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.CompoundIdentifier;
  return proto.cmccdb.CompoundIdentifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.CompoundIdentifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.CompoundIdentifier}
 */
proto.cmccdb.CompoundIdentifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.CompoundIdentifier.CompoundIdentifierType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.CompoundIdentifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.CompoundIdentifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.CompoundIdentifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.CompoundIdentifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.CompoundIdentifier.CompoundIdentifierType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  SMILES: 2,
  INCHI: 3,
  MOLBLOCK: 4,
  IUPAC_NAME: 5,
  NAME: 6,
  CAS_NUMBER: 7,
  PUBCHEM_CID: 8,
  CHEMSPIDER_ID: 9,
  CXSMILES: 10,
  INCHI_KEY: 11,
  XYZ: 12,
  UNIPROT_ID: 13,
  PDB_ID: 14,
  AMINO_ACID_SEQUENCE: 15,
  HELM: 16,
  MDL: 17
};

/**
 * optional CompoundIdentifierType type = 1;
 * @return {!proto.cmccdb.CompoundIdentifier.CompoundIdentifierType}
 */
proto.cmccdb.CompoundIdentifier.prototype.getType = function() {
  return /** @type {!proto.cmccdb.CompoundIdentifier.CompoundIdentifierType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.CompoundIdentifier.CompoundIdentifierType} value
 * @return {!proto.cmccdb.CompoundIdentifier} returns this
 */
proto.cmccdb.CompoundIdentifier.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.CompoundIdentifier.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.CompoundIdentifier} returns this
 */
proto.cmccdb.CompoundIdentifier.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.cmccdb.CompoundIdentifier.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.CompoundIdentifier} returns this
 */
proto.cmccdb.CompoundIdentifier.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.Vessel.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Vessel.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Vessel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Vessel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Vessel.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    material: (f = msg.getMaterial()) && proto.cmccdb.VesselMaterial.toObject(includeInstance, f),
    preparationsList: jspb.Message.toObjectList(msg.getPreparationsList(),
    proto.cmccdb.VesselPreparation.toObject, includeInstance),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.cmccdb.VesselAttachment.toObject, includeInstance),
    volume: (f = msg.getVolume()) && proto.cmccdb.Volume.toObject(includeInstance, f),
    vesselId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    position: jspb.Message.getFieldWithDefault(msg, 8, ""),
    row: jspb.Message.getFieldWithDefault(msg, 9, ""),
    col: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Vessel}
 */
proto.cmccdb.Vessel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Vessel;
  return proto.cmccdb.Vessel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Vessel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Vessel}
 */
proto.cmccdb.Vessel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.Vessel.VesselType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = new proto.cmccdb.VesselMaterial;
      reader.readMessage(value,proto.cmccdb.VesselMaterial.deserializeBinaryFromReader);
      msg.setMaterial(value);
      break;
    case 4:
      var value = new proto.cmccdb.VesselPreparation;
      reader.readMessage(value,proto.cmccdb.VesselPreparation.deserializeBinaryFromReader);
      msg.addPreparations(value);
      break;
    case 5:
      var value = new proto.cmccdb.VesselAttachment;
      reader.readMessage(value,proto.cmccdb.VesselAttachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    case 6:
      var value = new proto.cmccdb.Volume;
      reader.readMessage(value,proto.cmccdb.Volume.deserializeBinaryFromReader);
      msg.setVolume(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVesselId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRow(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Vessel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Vessel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Vessel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Vessel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaterial();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.VesselMaterial.serializeBinaryToWriter
    );
  }
  f = message.getPreparationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.cmccdb.VesselPreparation.serializeBinaryToWriter
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.cmccdb.VesselAttachment.serializeBinaryToWriter
    );
  }
  f = message.getVolume();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cmccdb.Volume.serializeBinaryToWriter
    );
  }
  f = message.getVesselId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPosition();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRow();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCol();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Vessel.VesselType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  ROUND_BOTTOM_FLASK: 2,
  VIAL: 3,
  WELL_PLATE: 4,
  MICROWAVE_VIAL: 5,
  TUBE: 6,
  CONTINUOUS_STIRRED_TANK_REACTOR: 7,
  PACKED_BED_REACTOR: 8,
  NMR_TUBE: 9,
  PRESSURE_FLASK: 10,
  PRESSURE_REACTOR: 11,
  ELECTROCHEMICAL_CELL: 12,
  BALL: 13
};

/**
 * optional VesselType type = 1;
 * @return {!proto.cmccdb.Vessel.VesselType}
 */
proto.cmccdb.Vessel.prototype.getType = function() {
  return /** @type {!proto.cmccdb.Vessel.VesselType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.Vessel.VesselType} value
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.Vessel.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional VesselMaterial material = 3;
 * @return {?proto.cmccdb.VesselMaterial}
 */
proto.cmccdb.Vessel.prototype.getMaterial = function() {
  return /** @type{?proto.cmccdb.VesselMaterial} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.VesselMaterial, 3));
};


/**
 * @param {?proto.cmccdb.VesselMaterial|undefined} value
 * @return {!proto.cmccdb.Vessel} returns this
*/
proto.cmccdb.Vessel.prototype.setMaterial = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.clearMaterial = function() {
  return this.setMaterial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Vessel.prototype.hasMaterial = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated VesselPreparation preparations = 4;
 * @return {!Array<!proto.cmccdb.VesselPreparation>}
 */
proto.cmccdb.Vessel.prototype.getPreparationsList = function() {
  return /** @type{!Array<!proto.cmccdb.VesselPreparation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.VesselPreparation, 4));
};


/**
 * @param {!Array<!proto.cmccdb.VesselPreparation>} value
 * @return {!proto.cmccdb.Vessel} returns this
*/
proto.cmccdb.Vessel.prototype.setPreparationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cmccdb.VesselPreparation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.VesselPreparation}
 */
proto.cmccdb.Vessel.prototype.addPreparations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cmccdb.VesselPreparation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.clearPreparationsList = function() {
  return this.setPreparationsList([]);
};


/**
 * repeated VesselAttachment attachments = 5;
 * @return {!Array<!proto.cmccdb.VesselAttachment>}
 */
proto.cmccdb.Vessel.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.cmccdb.VesselAttachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.VesselAttachment, 5));
};


/**
 * @param {!Array<!proto.cmccdb.VesselAttachment>} value
 * @return {!proto.cmccdb.Vessel} returns this
*/
proto.cmccdb.Vessel.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.cmccdb.VesselAttachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.VesselAttachment}
 */
proto.cmccdb.Vessel.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.cmccdb.VesselAttachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional Volume volume = 6;
 * @return {?proto.cmccdb.Volume}
 */
proto.cmccdb.Vessel.prototype.getVolume = function() {
  return /** @type{?proto.cmccdb.Volume} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Volume, 6));
};


/**
 * @param {?proto.cmccdb.Volume|undefined} value
 * @return {!proto.cmccdb.Vessel} returns this
*/
proto.cmccdb.Vessel.prototype.setVolume = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.clearVolume = function() {
  return this.setVolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Vessel.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string vessel_id = 7;
 * @return {string}
 */
proto.cmccdb.Vessel.prototype.getVesselId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.setVesselId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string position = 8;
 * @return {string}
 */
proto.cmccdb.Vessel.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.setPosition = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string row = 9;
 * @return {string}
 */
proto.cmccdb.Vessel.prototype.getRow = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.setRow = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string col = 10;
 * @return {string}
 */
proto.cmccdb.Vessel.prototype.getCol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Vessel} returns this
 */
proto.cmccdb.Vessel.prototype.setCol = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.VesselMaterial.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.VesselMaterial.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.VesselMaterial} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.VesselMaterial.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.VesselMaterial}
 */
proto.cmccdb.VesselMaterial.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.VesselMaterial;
  return proto.cmccdb.VesselMaterial.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.VesselMaterial} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.VesselMaterial}
 */
proto.cmccdb.VesselMaterial.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.VesselMaterial.VesselMaterialType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.VesselMaterial.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.VesselMaterial.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.VesselMaterial} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.VesselMaterial.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.VesselMaterial.VesselMaterialType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  GLASS: 2,
  POLYPROPYLENE: 3,
  PLASTIC: 4,
  METAL: 5,
  QUARTZ: 6
};

/**
 * optional VesselMaterialType type = 1;
 * @return {!proto.cmccdb.VesselMaterial.VesselMaterialType}
 */
proto.cmccdb.VesselMaterial.prototype.getType = function() {
  return /** @type {!proto.cmccdb.VesselMaterial.VesselMaterialType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.VesselMaterial.VesselMaterialType} value
 * @return {!proto.cmccdb.VesselMaterial} returns this
 */
proto.cmccdb.VesselMaterial.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.VesselMaterial.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.VesselMaterial} returns this
 */
proto.cmccdb.VesselMaterial.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.VesselAttachment.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.VesselAttachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.VesselAttachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.VesselAttachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.VesselAttachment}
 */
proto.cmccdb.VesselAttachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.VesselAttachment;
  return proto.cmccdb.VesselAttachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.VesselAttachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.VesselAttachment}
 */
proto.cmccdb.VesselAttachment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.VesselAttachment.VesselAttachmentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.VesselAttachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.VesselAttachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.VesselAttachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.VesselAttachment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.VesselAttachment.VesselAttachmentType = {
  UNSPECIFIED: 0,
  NONE: 1,
  CUSTOM: 2,
  SEPTUM: 3,
  CAP: 4,
  MAT: 5,
  REFLUX_CONDENSER: 6,
  VENT_NEEDLE: 7,
  DEAN_STARK: 8,
  VACUUM_TUBE: 9,
  ADDITION_FUNNEL: 10,
  DRYING_TUBE: 11,
  ALUMINUM_FOIL: 12,
  THERMOCOUPLE: 13,
  BALLOON: 14,
  GAS_ADAPTER: 15,
  PRESSURE_REGULATOR: 16,
  RELEASE_VALVE: 17
};

/**
 * optional VesselAttachmentType type = 1;
 * @return {!proto.cmccdb.VesselAttachment.VesselAttachmentType}
 */
proto.cmccdb.VesselAttachment.prototype.getType = function() {
  return /** @type {!proto.cmccdb.VesselAttachment.VesselAttachmentType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.VesselAttachment.VesselAttachmentType} value
 * @return {!proto.cmccdb.VesselAttachment} returns this
 */
proto.cmccdb.VesselAttachment.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.VesselAttachment.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.VesselAttachment} returns this
 */
proto.cmccdb.VesselAttachment.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.VesselPreparation.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.VesselPreparation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.VesselPreparation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.VesselPreparation.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.VesselPreparation}
 */
proto.cmccdb.VesselPreparation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.VesselPreparation;
  return proto.cmccdb.VesselPreparation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.VesselPreparation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.VesselPreparation}
 */
proto.cmccdb.VesselPreparation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.VesselPreparation.VesselPreparationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.VesselPreparation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.VesselPreparation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.VesselPreparation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.VesselPreparation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.VesselPreparation.VesselPreparationType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  NONE: 2,
  OVEN_DRIED: 3,
  FLAME_DRIED: 4,
  EVACUATED_BACKFILLED: 5,
  PURGED: 6
};

/**
 * optional VesselPreparationType type = 1;
 * @return {!proto.cmccdb.VesselPreparation.VesselPreparationType}
 */
proto.cmccdb.VesselPreparation.prototype.getType = function() {
  return /** @type {!proto.cmccdb.VesselPreparation.VesselPreparationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.VesselPreparation.VesselPreparationType} value
 * @return {!proto.cmccdb.VesselPreparation} returns this
 */
proto.cmccdb.VesselPreparation.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.VesselPreparation.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.VesselPreparation} returns this
 */
proto.cmccdb.VesselPreparation.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionSetup.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionSetup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionSetup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionSetup.toObject = function(includeInstance, msg) {
  var f, obj = {
    vessel: (f = msg.getVessel()) && proto.cmccdb.Vessel.toObject(includeInstance, f),
    isAutomated: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    automationPlatform: jspb.Message.getFieldWithDefault(msg, 3, ""),
    automationCodeMap: (f = msg.getAutomationCodeMap()) ? f.toObject(includeInstance, proto.cmccdb.Data.toObject) : [],
    environment: (f = msg.getEnvironment()) && proto.cmccdb.ReactionSetup.ReactionEnvironment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionSetup}
 */
proto.cmccdb.ReactionSetup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionSetup;
  return proto.cmccdb.ReactionSetup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionSetup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionSetup}
 */
proto.cmccdb.ReactionSetup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.Vessel;
      reader.readMessage(value,proto.cmccdb.Vessel.deserializeBinaryFromReader);
      msg.setVessel(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAutomated(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAutomationPlatform(value);
      break;
    case 4:
      var value = msg.getAutomationCodeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cmccdb.Data.deserializeBinaryFromReader, "", new proto.cmccdb.Data());
         });
      break;
    case 5:
      var value = new proto.cmccdb.ReactionSetup.ReactionEnvironment;
      reader.readMessage(value,proto.cmccdb.ReactionSetup.ReactionEnvironment.deserializeBinaryFromReader);
      msg.setEnvironment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionSetup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionSetup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionSetup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionSetup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVessel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.Vessel.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAutomationPlatform();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAutomationCodeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cmccdb.Data.serializeBinaryToWriter);
  }
  f = message.getEnvironment();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.ReactionSetup.ReactionEnvironment.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionSetup.ReactionEnvironment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionSetup.ReactionEnvironment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionSetup.ReactionEnvironment}
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionSetup.ReactionEnvironment;
  return proto.cmccdb.ReactionSetup.ReactionEnvironment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionSetup.ReactionEnvironment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionSetup.ReactionEnvironment}
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.ReactionSetup.ReactionEnvironment.ReactionEnvironmentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionSetup.ReactionEnvironment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionSetup.ReactionEnvironment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.ReactionEnvironmentType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  FUME_HOOD: 2,
  BENCH_TOP: 3,
  GLOVE_BOX: 4,
  GLOVE_BAG: 5
};

/**
 * optional ReactionEnvironmentType type = 1;
 * @return {!proto.cmccdb.ReactionSetup.ReactionEnvironment.ReactionEnvironmentType}
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ReactionSetup.ReactionEnvironment.ReactionEnvironmentType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.ReactionSetup.ReactionEnvironment.ReactionEnvironmentType} value
 * @return {!proto.cmccdb.ReactionSetup.ReactionEnvironment} returns this
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionSetup.ReactionEnvironment} returns this
 */
proto.cmccdb.ReactionSetup.ReactionEnvironment.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Vessel vessel = 1;
 * @return {?proto.cmccdb.Vessel}
 */
proto.cmccdb.ReactionSetup.prototype.getVessel = function() {
  return /** @type{?proto.cmccdb.Vessel} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Vessel, 1));
};


/**
 * @param {?proto.cmccdb.Vessel|undefined} value
 * @return {!proto.cmccdb.ReactionSetup} returns this
*/
proto.cmccdb.ReactionSetup.prototype.setVessel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionSetup} returns this
 */
proto.cmccdb.ReactionSetup.prototype.clearVessel = function() {
  return this.setVessel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionSetup.prototype.hasVessel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_automated = 2;
 * @return {boolean}
 */
proto.cmccdb.ReactionSetup.prototype.getIsAutomated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionSetup} returns this
 */
proto.cmccdb.ReactionSetup.prototype.setIsAutomated = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionSetup} returns this
 */
proto.cmccdb.ReactionSetup.prototype.clearIsAutomated = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionSetup.prototype.hasIsAutomated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string automation_platform = 3;
 * @return {string}
 */
proto.cmccdb.ReactionSetup.prototype.getAutomationPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionSetup} returns this
 */
proto.cmccdb.ReactionSetup.prototype.setAutomationPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, Data> automation_code = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cmccdb.Data>}
 */
proto.cmccdb.ReactionSetup.prototype.getAutomationCodeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cmccdb.Data>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.cmccdb.Data));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cmccdb.ReactionSetup} returns this
 */
proto.cmccdb.ReactionSetup.prototype.clearAutomationCodeMap = function() {
  this.getAutomationCodeMap().clear();
  return this;
};


/**
 * optional ReactionEnvironment environment = 5;
 * @return {?proto.cmccdb.ReactionSetup.ReactionEnvironment}
 */
proto.cmccdb.ReactionSetup.prototype.getEnvironment = function() {
  return /** @type{?proto.cmccdb.ReactionSetup.ReactionEnvironment} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ReactionSetup.ReactionEnvironment, 5));
};


/**
 * @param {?proto.cmccdb.ReactionSetup.ReactionEnvironment|undefined} value
 * @return {!proto.cmccdb.ReactionSetup} returns this
*/
proto.cmccdb.ReactionSetup.prototype.setEnvironment = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionSetup} returns this
 */
proto.cmccdb.ReactionSetup.prototype.clearEnvironment = function() {
  return this.setEnvironment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionSetup.prototype.hasEnvironment = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    temperature: (f = msg.getTemperature()) && proto.cmccdb.TemperatureConditions.toObject(includeInstance, f),
    pressure: (f = msg.getPressure()) && proto.cmccdb.PressureConditions.toObject(includeInstance, f),
    stirring: (f = msg.getStirring()) && proto.cmccdb.StirringConditions.toObject(includeInstance, f),
    illumination: (f = msg.getIllumination()) && proto.cmccdb.IlluminationConditions.toObject(includeInstance, f),
    electrochemistry: (f = msg.getElectrochemistry()) && proto.cmccdb.ElectrochemistryConditions.toObject(includeInstance, f),
    mechanochemistry: (f = msg.getMechanochemistry()) && proto.cmccdb.MechanochemistryConditions.toObject(includeInstance, f),
    flow: (f = msg.getFlow()) && proto.cmccdb.FlowConditions.toObject(includeInstance, f),
    reflux: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    ph: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    conditionsAreDynamic: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    details: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionConditions}
 */
proto.cmccdb.ReactionConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionConditions;
  return proto.cmccdb.ReactionConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionConditions}
 */
proto.cmccdb.ReactionConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.TemperatureConditions;
      reader.readMessage(value,proto.cmccdb.TemperatureConditions.deserializeBinaryFromReader);
      msg.setTemperature(value);
      break;
    case 2:
      var value = new proto.cmccdb.PressureConditions;
      reader.readMessage(value,proto.cmccdb.PressureConditions.deserializeBinaryFromReader);
      msg.setPressure(value);
      break;
    case 3:
      var value = new proto.cmccdb.StirringConditions;
      reader.readMessage(value,proto.cmccdb.StirringConditions.deserializeBinaryFromReader);
      msg.setStirring(value);
      break;
    case 4:
      var value = new proto.cmccdb.IlluminationConditions;
      reader.readMessage(value,proto.cmccdb.IlluminationConditions.deserializeBinaryFromReader);
      msg.setIllumination(value);
      break;
    case 5:
      var value = new proto.cmccdb.ElectrochemistryConditions;
      reader.readMessage(value,proto.cmccdb.ElectrochemistryConditions.deserializeBinaryFromReader);
      msg.setElectrochemistry(value);
      break;
    case 6:
      var value = new proto.cmccdb.MechanochemistryConditions;
      reader.readMessage(value,proto.cmccdb.MechanochemistryConditions.deserializeBinaryFromReader);
      msg.setMechanochemistry(value);
      break;
    case 7:
      var value = new proto.cmccdb.FlowConditions;
      reader.readMessage(value,proto.cmccdb.FlowConditions.deserializeBinaryFromReader);
      msg.setFlow(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReflux(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPh(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConditionsAreDynamic(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemperature();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.TemperatureConditions.serializeBinaryToWriter
    );
  }
  f = message.getPressure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cmccdb.PressureConditions.serializeBinaryToWriter
    );
  }
  f = message.getStirring();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.StirringConditions.serializeBinaryToWriter
    );
  }
  f = message.getIllumination();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.IlluminationConditions.serializeBinaryToWriter
    );
  }
  f = message.getElectrochemistry();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.ElectrochemistryConditions.serializeBinaryToWriter
    );
  }
  f = message.getMechanochemistry();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cmccdb.MechanochemistryConditions.serializeBinaryToWriter
    );
  }
  f = message.getFlow();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cmccdb.FlowConditions.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional TemperatureConditions temperature = 1;
 * @return {?proto.cmccdb.TemperatureConditions}
 */
proto.cmccdb.ReactionConditions.prototype.getTemperature = function() {
  return /** @type{?proto.cmccdb.TemperatureConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.TemperatureConditions, 1));
};


/**
 * @param {?proto.cmccdb.TemperatureConditions|undefined} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
*/
proto.cmccdb.ReactionConditions.prototype.setTemperature = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearTemperature = function() {
  return this.setTemperature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasTemperature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PressureConditions pressure = 2;
 * @return {?proto.cmccdb.PressureConditions}
 */
proto.cmccdb.ReactionConditions.prototype.getPressure = function() {
  return /** @type{?proto.cmccdb.PressureConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.PressureConditions, 2));
};


/**
 * @param {?proto.cmccdb.PressureConditions|undefined} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
*/
proto.cmccdb.ReactionConditions.prototype.setPressure = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearPressure = function() {
  return this.setPressure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasPressure = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StirringConditions stirring = 3;
 * @return {?proto.cmccdb.StirringConditions}
 */
proto.cmccdb.ReactionConditions.prototype.getStirring = function() {
  return /** @type{?proto.cmccdb.StirringConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.StirringConditions, 3));
};


/**
 * @param {?proto.cmccdb.StirringConditions|undefined} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
*/
proto.cmccdb.ReactionConditions.prototype.setStirring = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearStirring = function() {
  return this.setStirring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasStirring = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional IlluminationConditions illumination = 4;
 * @return {?proto.cmccdb.IlluminationConditions}
 */
proto.cmccdb.ReactionConditions.prototype.getIllumination = function() {
  return /** @type{?proto.cmccdb.IlluminationConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.IlluminationConditions, 4));
};


/**
 * @param {?proto.cmccdb.IlluminationConditions|undefined} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
*/
proto.cmccdb.ReactionConditions.prototype.setIllumination = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearIllumination = function() {
  return this.setIllumination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasIllumination = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ElectrochemistryConditions electrochemistry = 5;
 * @return {?proto.cmccdb.ElectrochemistryConditions}
 */
proto.cmccdb.ReactionConditions.prototype.getElectrochemistry = function() {
  return /** @type{?proto.cmccdb.ElectrochemistryConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ElectrochemistryConditions, 5));
};


/**
 * @param {?proto.cmccdb.ElectrochemistryConditions|undefined} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
*/
proto.cmccdb.ReactionConditions.prototype.setElectrochemistry = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearElectrochemistry = function() {
  return this.setElectrochemistry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasElectrochemistry = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MechanochemistryConditions mechanochemistry = 6;
 * @return {?proto.cmccdb.MechanochemistryConditions}
 */
proto.cmccdb.ReactionConditions.prototype.getMechanochemistry = function() {
  return /** @type{?proto.cmccdb.MechanochemistryConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.MechanochemistryConditions, 6));
};


/**
 * @param {?proto.cmccdb.MechanochemistryConditions|undefined} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
*/
proto.cmccdb.ReactionConditions.prototype.setMechanochemistry = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearMechanochemistry = function() {
  return this.setMechanochemistry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasMechanochemistry = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FlowConditions flow = 7;
 * @return {?proto.cmccdb.FlowConditions}
 */
proto.cmccdb.ReactionConditions.prototype.getFlow = function() {
  return /** @type{?proto.cmccdb.FlowConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.FlowConditions, 7));
};


/**
 * @param {?proto.cmccdb.FlowConditions|undefined} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
*/
proto.cmccdb.ReactionConditions.prototype.setFlow = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearFlow = function() {
  return this.setFlow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasFlow = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool reflux = 8;
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.getReflux = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.setReflux = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearReflux = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasReflux = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional float ph = 9;
 * @return {number}
 */
proto.cmccdb.ReactionConditions.prototype.getPh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.setPh = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearPh = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasPh = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool conditions_are_dynamic = 10;
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.getConditionsAreDynamic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.setConditionsAreDynamic = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.clearConditionsAreDynamic = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionConditions.prototype.hasConditionsAreDynamic = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string details = 11;
 * @return {string}
 */
proto.cmccdb.ReactionConditions.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionConditions} returns this
 */
proto.cmccdb.ReactionConditions.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.TemperatureConditions.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.TemperatureConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.TemperatureConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.TemperatureConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.TemperatureConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    control: (f = msg.getControl()) && proto.cmccdb.TemperatureConditions.TemperatureControl.toObject(includeInstance, f),
    setpoint: (f = msg.getSetpoint()) && proto.cmccdb.Temperature.toObject(includeInstance, f),
    measurementsList: jspb.Message.toObjectList(msg.getMeasurementsList(),
    proto.cmccdb.TemperatureConditions.TemperatureMeasurement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.TemperatureConditions}
 */
proto.cmccdb.TemperatureConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.TemperatureConditions;
  return proto.cmccdb.TemperatureConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.TemperatureConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.TemperatureConditions}
 */
proto.cmccdb.TemperatureConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.TemperatureConditions.TemperatureControl;
      reader.readMessage(value,proto.cmccdb.TemperatureConditions.TemperatureControl.deserializeBinaryFromReader);
      msg.setControl(value);
      break;
    case 2:
      var value = new proto.cmccdb.Temperature;
      reader.readMessage(value,proto.cmccdb.Temperature.deserializeBinaryFromReader);
      msg.setSetpoint(value);
      break;
    case 3:
      var value = new proto.cmccdb.TemperatureConditions.TemperatureMeasurement;
      reader.readMessage(value,proto.cmccdb.TemperatureConditions.TemperatureMeasurement.deserializeBinaryFromReader);
      msg.addMeasurements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.TemperatureConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.TemperatureConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.TemperatureConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.TemperatureConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getControl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.TemperatureConditions.TemperatureControl.serializeBinaryToWriter
    );
  }
  f = message.getSetpoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cmccdb.Temperature.serializeBinaryToWriter
    );
  }
  f = message.getMeasurementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cmccdb.TemperatureConditions.TemperatureMeasurement.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.TemperatureConditions.TemperatureControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.TemperatureConditions.TemperatureControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureControl}
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.TemperatureConditions.TemperatureControl;
  return proto.cmccdb.TemperatureConditions.TemperatureControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.TemperatureConditions.TemperatureControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureControl}
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.TemperatureConditions.TemperatureControl.TemperatureControlType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.TemperatureConditions.TemperatureControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.TemperatureConditions.TemperatureControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.TemperatureControlType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  AMBIENT: 2,
  OIL_BATH: 3,
  WATER_BATH: 4,
  SAND_BATH: 5,
  ICE_BATH: 6,
  DRY_ALUMINUM_PLATE: 7,
  MICROWAVE: 8,
  DRY_ICE_BATH: 9,
  AIR_FAN: 10,
  LIQUID_NITROGEN: 11
};

/**
 * optional TemperatureControlType type = 1;
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureControl.TemperatureControlType}
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.prototype.getType = function() {
  return /** @type {!proto.cmccdb.TemperatureConditions.TemperatureControl.TemperatureControlType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.TemperatureConditions.TemperatureControl.TemperatureControlType} value
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureControl} returns this
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureControl} returns this
 */
proto.cmccdb.TemperatureConditions.TemperatureControl.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.TemperatureConditions.TemperatureMeasurement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: (f = msg.getTime()) && proto.cmccdb.Time.toObject(includeInstance, f),
    temperature: (f = msg.getTemperature()) && proto.cmccdb.Temperature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.TemperatureConditions.TemperatureMeasurement;
  return proto.cmccdb.TemperatureConditions.TemperatureMeasurement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement.TemperatureMeasurementType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = new proto.cmccdb.Temperature;
      reader.readMessage(value,proto.cmccdb.Temperature.deserializeBinaryFromReader);
      msg.setTemperature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.TemperatureConditions.TemperatureMeasurement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTemperature();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.Temperature.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.TemperatureMeasurementType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  THERMOCOUPLE_INTERNAL: 2,
  THERMOCOUPLE_EXTERNAL: 3,
  INFRARED: 4
};

/**
 * optional TemperatureMeasurementType type = 1;
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement.TemperatureMeasurementType}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.getType = function() {
  return /** @type {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement.TemperatureMeasurementType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement.TemperatureMeasurementType} value
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement} returns this
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement} returns this
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Time time = 3;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.getTime = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 3));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement} returns this
*/
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement} returns this
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Temperature temperature = 4;
 * @return {?proto.cmccdb.Temperature}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.getTemperature = function() {
  return /** @type{?proto.cmccdb.Temperature} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Temperature, 4));
};


/**
 * @param {?proto.cmccdb.Temperature|undefined} value
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement} returns this
*/
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.setTemperature = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement} returns this
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.clearTemperature = function() {
  return this.setTemperature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.TemperatureConditions.TemperatureMeasurement.prototype.hasTemperature = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TemperatureControl control = 1;
 * @return {?proto.cmccdb.TemperatureConditions.TemperatureControl}
 */
proto.cmccdb.TemperatureConditions.prototype.getControl = function() {
  return /** @type{?proto.cmccdb.TemperatureConditions.TemperatureControl} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.TemperatureConditions.TemperatureControl, 1));
};


/**
 * @param {?proto.cmccdb.TemperatureConditions.TemperatureControl|undefined} value
 * @return {!proto.cmccdb.TemperatureConditions} returns this
*/
proto.cmccdb.TemperatureConditions.prototype.setControl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.TemperatureConditions} returns this
 */
proto.cmccdb.TemperatureConditions.prototype.clearControl = function() {
  return this.setControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.TemperatureConditions.prototype.hasControl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Temperature setpoint = 2;
 * @return {?proto.cmccdb.Temperature}
 */
proto.cmccdb.TemperatureConditions.prototype.getSetpoint = function() {
  return /** @type{?proto.cmccdb.Temperature} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Temperature, 2));
};


/**
 * @param {?proto.cmccdb.Temperature|undefined} value
 * @return {!proto.cmccdb.TemperatureConditions} returns this
*/
proto.cmccdb.TemperatureConditions.prototype.setSetpoint = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.TemperatureConditions} returns this
 */
proto.cmccdb.TemperatureConditions.prototype.clearSetpoint = function() {
  return this.setSetpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.TemperatureConditions.prototype.hasSetpoint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated TemperatureMeasurement measurements = 3;
 * @return {!Array<!proto.cmccdb.TemperatureConditions.TemperatureMeasurement>}
 */
proto.cmccdb.TemperatureConditions.prototype.getMeasurementsList = function() {
  return /** @type{!Array<!proto.cmccdb.TemperatureConditions.TemperatureMeasurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.TemperatureConditions.TemperatureMeasurement, 3));
};


/**
 * @param {!Array<!proto.cmccdb.TemperatureConditions.TemperatureMeasurement>} value
 * @return {!proto.cmccdb.TemperatureConditions} returns this
*/
proto.cmccdb.TemperatureConditions.prototype.setMeasurementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.TemperatureConditions.TemperatureMeasurement}
 */
proto.cmccdb.TemperatureConditions.prototype.addMeasurements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cmccdb.TemperatureConditions.TemperatureMeasurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.TemperatureConditions} returns this
 */
proto.cmccdb.TemperatureConditions.prototype.clearMeasurementsList = function() {
  return this.setMeasurementsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.PressureConditions.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.PressureConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.PressureConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.PressureConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.PressureConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    control: (f = msg.getControl()) && proto.cmccdb.PressureConditions.PressureControl.toObject(includeInstance, f),
    setpoint: (f = msg.getSetpoint()) && proto.cmccdb.Pressure.toObject(includeInstance, f),
    atmosphere: (f = msg.getAtmosphere()) && proto.cmccdb.PressureConditions.Atmosphere.toObject(includeInstance, f),
    measurementsList: jspb.Message.toObjectList(msg.getMeasurementsList(),
    proto.cmccdb.PressureConditions.PressureMeasurement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.PressureConditions}
 */
proto.cmccdb.PressureConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.PressureConditions;
  return proto.cmccdb.PressureConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.PressureConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.PressureConditions}
 */
proto.cmccdb.PressureConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.PressureConditions.PressureControl;
      reader.readMessage(value,proto.cmccdb.PressureConditions.PressureControl.deserializeBinaryFromReader);
      msg.setControl(value);
      break;
    case 2:
      var value = new proto.cmccdb.Pressure;
      reader.readMessage(value,proto.cmccdb.Pressure.deserializeBinaryFromReader);
      msg.setSetpoint(value);
      break;
    case 3:
      var value = new proto.cmccdb.PressureConditions.Atmosphere;
      reader.readMessage(value,proto.cmccdb.PressureConditions.Atmosphere.deserializeBinaryFromReader);
      msg.setAtmosphere(value);
      break;
    case 4:
      var value = new proto.cmccdb.PressureConditions.PressureMeasurement;
      reader.readMessage(value,proto.cmccdb.PressureConditions.PressureMeasurement.deserializeBinaryFromReader);
      msg.addMeasurements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.PressureConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.PressureConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.PressureConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.PressureConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getControl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.PressureConditions.PressureControl.serializeBinaryToWriter
    );
  }
  f = message.getSetpoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cmccdb.Pressure.serializeBinaryToWriter
    );
  }
  f = message.getAtmosphere();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.PressureConditions.Atmosphere.serializeBinaryToWriter
    );
  }
  f = message.getMeasurementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.cmccdb.PressureConditions.PressureMeasurement.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.PressureConditions.PressureControl.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.PressureConditions.PressureControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.PressureConditions.PressureControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.PressureConditions.PressureControl.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.PressureConditions.PressureControl}
 */
proto.cmccdb.PressureConditions.PressureControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.PressureConditions.PressureControl;
  return proto.cmccdb.PressureConditions.PressureControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.PressureConditions.PressureControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.PressureConditions.PressureControl}
 */
proto.cmccdb.PressureConditions.PressureControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.PressureConditions.PressureControl.PressureControlType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.PressureConditions.PressureControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.PressureConditions.PressureControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.PressureConditions.PressureControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.PressureConditions.PressureControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.PressureConditions.PressureControl.PressureControlType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  AMBIENT: 2,
  SLIGHT_POSITIVE: 3,
  SEALED: 4,
  PRESSURIZED: 5
};

/**
 * optional PressureControlType type = 1;
 * @return {!proto.cmccdb.PressureConditions.PressureControl.PressureControlType}
 */
proto.cmccdb.PressureConditions.PressureControl.prototype.getType = function() {
  return /** @type {!proto.cmccdb.PressureConditions.PressureControl.PressureControlType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.PressureConditions.PressureControl.PressureControlType} value
 * @return {!proto.cmccdb.PressureConditions.PressureControl} returns this
 */
proto.cmccdb.PressureConditions.PressureControl.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.PressureConditions.PressureControl.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.PressureConditions.PressureControl} returns this
 */
proto.cmccdb.PressureConditions.PressureControl.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.PressureConditions.Atmosphere.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.PressureConditions.Atmosphere.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.PressureConditions.Atmosphere} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.PressureConditions.Atmosphere.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.PressureConditions.Atmosphere}
 */
proto.cmccdb.PressureConditions.Atmosphere.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.PressureConditions.Atmosphere;
  return proto.cmccdb.PressureConditions.Atmosphere.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.PressureConditions.Atmosphere} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.PressureConditions.Atmosphere}
 */
proto.cmccdb.PressureConditions.Atmosphere.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.PressureConditions.Atmosphere.AtmosphereType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.PressureConditions.Atmosphere.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.PressureConditions.Atmosphere.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.PressureConditions.Atmosphere} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.PressureConditions.Atmosphere.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.PressureConditions.Atmosphere.AtmosphereType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  AIR: 2,
  NITROGEN: 3,
  ARGON: 4,
  OXYGEN: 5,
  HYDROGEN: 6,
  CARBON_MONOXIDE: 7,
  CARBON_DIOXIDE: 8,
  METHANE: 9,
  AMMONIA: 10,
  OZONE: 11,
  ETHYLENE: 12,
  ACETYLENE: 13
};

/**
 * optional AtmosphereType type = 1;
 * @return {!proto.cmccdb.PressureConditions.Atmosphere.AtmosphereType}
 */
proto.cmccdb.PressureConditions.Atmosphere.prototype.getType = function() {
  return /** @type {!proto.cmccdb.PressureConditions.Atmosphere.AtmosphereType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.PressureConditions.Atmosphere.AtmosphereType} value
 * @return {!proto.cmccdb.PressureConditions.Atmosphere} returns this
 */
proto.cmccdb.PressureConditions.Atmosphere.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.PressureConditions.Atmosphere.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.PressureConditions.Atmosphere} returns this
 */
proto.cmccdb.PressureConditions.Atmosphere.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.PressureConditions.PressureMeasurement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.PressureConditions.PressureMeasurement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.PressureConditions.PressureMeasurement.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: (f = msg.getTime()) && proto.cmccdb.Time.toObject(includeInstance, f),
    pressure: (f = msg.getPressure()) && proto.cmccdb.Pressure.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.PressureConditions.PressureMeasurement;
  return proto.cmccdb.PressureConditions.PressureMeasurement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.PressureConditions.PressureMeasurement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.PressureConditions.PressureMeasurement.PressureMeasurementType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = new proto.cmccdb.Pressure;
      reader.readMessage(value,proto.cmccdb.Pressure.deserializeBinaryFromReader);
      msg.setPressure(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.PressureConditions.PressureMeasurement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.PressureConditions.PressureMeasurement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.PressureConditions.PressureMeasurement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = message.getPressure();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.Pressure.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.PressureMeasurementType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  PRESSURE_TRANSDUCER: 2
};

/**
 * optional PressureMeasurementType type = 1;
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement.PressureMeasurementType}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.getType = function() {
  return /** @type {!proto.cmccdb.PressureConditions.PressureMeasurement.PressureMeasurementType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.PressureConditions.PressureMeasurement.PressureMeasurementType} value
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement} returns this
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement} returns this
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Time time = 3;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.getTime = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 3));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement} returns this
*/
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement} returns this
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Pressure pressure = 4;
 * @return {?proto.cmccdb.Pressure}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.getPressure = function() {
  return /** @type{?proto.cmccdb.Pressure} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Pressure, 4));
};


/**
 * @param {?proto.cmccdb.Pressure|undefined} value
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement} returns this
*/
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.setPressure = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement} returns this
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.clearPressure = function() {
  return this.setPressure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.PressureConditions.PressureMeasurement.prototype.hasPressure = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PressureControl control = 1;
 * @return {?proto.cmccdb.PressureConditions.PressureControl}
 */
proto.cmccdb.PressureConditions.prototype.getControl = function() {
  return /** @type{?proto.cmccdb.PressureConditions.PressureControl} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.PressureConditions.PressureControl, 1));
};


/**
 * @param {?proto.cmccdb.PressureConditions.PressureControl|undefined} value
 * @return {!proto.cmccdb.PressureConditions} returns this
*/
proto.cmccdb.PressureConditions.prototype.setControl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.PressureConditions} returns this
 */
proto.cmccdb.PressureConditions.prototype.clearControl = function() {
  return this.setControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.PressureConditions.prototype.hasControl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Pressure setpoint = 2;
 * @return {?proto.cmccdb.Pressure}
 */
proto.cmccdb.PressureConditions.prototype.getSetpoint = function() {
  return /** @type{?proto.cmccdb.Pressure} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Pressure, 2));
};


/**
 * @param {?proto.cmccdb.Pressure|undefined} value
 * @return {!proto.cmccdb.PressureConditions} returns this
*/
proto.cmccdb.PressureConditions.prototype.setSetpoint = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.PressureConditions} returns this
 */
proto.cmccdb.PressureConditions.prototype.clearSetpoint = function() {
  return this.setSetpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.PressureConditions.prototype.hasSetpoint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Atmosphere atmosphere = 3;
 * @return {?proto.cmccdb.PressureConditions.Atmosphere}
 */
proto.cmccdb.PressureConditions.prototype.getAtmosphere = function() {
  return /** @type{?proto.cmccdb.PressureConditions.Atmosphere} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.PressureConditions.Atmosphere, 3));
};


/**
 * @param {?proto.cmccdb.PressureConditions.Atmosphere|undefined} value
 * @return {!proto.cmccdb.PressureConditions} returns this
*/
proto.cmccdb.PressureConditions.prototype.setAtmosphere = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.PressureConditions} returns this
 */
proto.cmccdb.PressureConditions.prototype.clearAtmosphere = function() {
  return this.setAtmosphere(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.PressureConditions.prototype.hasAtmosphere = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated PressureMeasurement measurements = 4;
 * @return {!Array<!proto.cmccdb.PressureConditions.PressureMeasurement>}
 */
proto.cmccdb.PressureConditions.prototype.getMeasurementsList = function() {
  return /** @type{!Array<!proto.cmccdb.PressureConditions.PressureMeasurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.PressureConditions.PressureMeasurement, 4));
};


/**
 * @param {!Array<!proto.cmccdb.PressureConditions.PressureMeasurement>} value
 * @return {!proto.cmccdb.PressureConditions} returns this
*/
proto.cmccdb.PressureConditions.prototype.setMeasurementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cmccdb.PressureConditions.PressureMeasurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.PressureConditions.PressureMeasurement}
 */
proto.cmccdb.PressureConditions.prototype.addMeasurements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cmccdb.PressureConditions.PressureMeasurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.PressureConditions} returns this
 */
proto.cmccdb.PressureConditions.prototype.clearMeasurementsList = function() {
  return this.setMeasurementsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.StirringConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.StirringConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.StirringConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.StirringConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rate: (f = msg.getRate()) && proto.cmccdb.StirringConditions.StirringRate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.StirringConditions}
 */
proto.cmccdb.StirringConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.StirringConditions;
  return proto.cmccdb.StirringConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.StirringConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.StirringConditions}
 */
proto.cmccdb.StirringConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.StirringConditions.StirringMethodType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = new proto.cmccdb.StirringConditions.StirringRate;
      reader.readMessage(value,proto.cmccdb.StirringConditions.StirringRate.deserializeBinaryFromReader);
      msg.setRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.StirringConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.StirringConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.StirringConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.StirringConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.StirringConditions.StirringRate.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.StirringConditions.StirringMethodType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  NONE: 2,
  STIR_BAR: 3,
  OVERHEAD_MIXER: 4,
  AGITATION: 5,
  BALL_MILLING: 6,
  SONICATION: 7
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.StirringConditions.StirringRate.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.StirringConditions.StirringRate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.StirringConditions.StirringRate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.StirringConditions.StirringRate.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rpm: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.StirringConditions.StirringRate}
 */
proto.cmccdb.StirringConditions.StirringRate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.StirringConditions.StirringRate;
  return proto.cmccdb.StirringConditions.StirringRate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.StirringConditions.StirringRate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.StirringConditions.StirringRate}
 */
proto.cmccdb.StirringConditions.StirringRate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.StirringConditions.StirringRate.StirringRateType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRpm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.StirringConditions.StirringRate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.StirringConditions.StirringRate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.StirringConditions.StirringRate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.StirringConditions.StirringRate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRpm();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.StirringConditions.StirringRate.StirringRateType = {
  UNSPECIFIED: 0,
  HIGH: 1,
  MEDIUM: 2,
  LOW: 3
};

/**
 * optional StirringRateType type = 1;
 * @return {!proto.cmccdb.StirringConditions.StirringRate.StirringRateType}
 */
proto.cmccdb.StirringConditions.StirringRate.prototype.getType = function() {
  return /** @type {!proto.cmccdb.StirringConditions.StirringRate.StirringRateType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.StirringConditions.StirringRate.StirringRateType} value
 * @return {!proto.cmccdb.StirringConditions.StirringRate} returns this
 */
proto.cmccdb.StirringConditions.StirringRate.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.StirringConditions.StirringRate.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.StirringConditions.StirringRate} returns this
 */
proto.cmccdb.StirringConditions.StirringRate.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 rpm = 3;
 * @return {number}
 */
proto.cmccdb.StirringConditions.StirringRate.prototype.getRpm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.StirringConditions.StirringRate} returns this
 */
proto.cmccdb.StirringConditions.StirringRate.prototype.setRpm = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional StirringMethodType type = 1;
 * @return {!proto.cmccdb.StirringConditions.StirringMethodType}
 */
proto.cmccdb.StirringConditions.prototype.getType = function() {
  return /** @type {!proto.cmccdb.StirringConditions.StirringMethodType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.StirringConditions.StirringMethodType} value
 * @return {!proto.cmccdb.StirringConditions} returns this
 */
proto.cmccdb.StirringConditions.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.StirringConditions.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.StirringConditions} returns this
 */
proto.cmccdb.StirringConditions.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional StirringRate rate = 3;
 * @return {?proto.cmccdb.StirringConditions.StirringRate}
 */
proto.cmccdb.StirringConditions.prototype.getRate = function() {
  return /** @type{?proto.cmccdb.StirringConditions.StirringRate} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.StirringConditions.StirringRate, 3));
};


/**
 * @param {?proto.cmccdb.StirringConditions.StirringRate|undefined} value
 * @return {!proto.cmccdb.StirringConditions} returns this
*/
proto.cmccdb.StirringConditions.prototype.setRate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.StirringConditions} returns this
 */
proto.cmccdb.StirringConditions.prototype.clearRate = function() {
  return this.setRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.StirringConditions.prototype.hasRate = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.IlluminationConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.IlluminationConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.IlluminationConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.IlluminationConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    peakWavelength: (f = msg.getPeakWavelength()) && proto.cmccdb.Wavelength.toObject(includeInstance, f),
    color: jspb.Message.getFieldWithDefault(msg, 4, ""),
    distanceToVessel: (f = msg.getDistanceToVessel()) && proto.cmccdb.Length.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.IlluminationConditions}
 */
proto.cmccdb.IlluminationConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.IlluminationConditions;
  return proto.cmccdb.IlluminationConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.IlluminationConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.IlluminationConditions}
 */
proto.cmccdb.IlluminationConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.IlluminationConditions.IlluminationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = new proto.cmccdb.Wavelength;
      reader.readMessage(value,proto.cmccdb.Wavelength.deserializeBinaryFromReader);
      msg.setPeakWavelength(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 5:
      var value = new proto.cmccdb.Length;
      reader.readMessage(value,proto.cmccdb.Length.deserializeBinaryFromReader);
      msg.setDistanceToVessel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.IlluminationConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.IlluminationConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.IlluminationConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.IlluminationConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPeakWavelength();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Wavelength.serializeBinaryToWriter
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDistanceToVessel();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.Length.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.IlluminationConditions.IlluminationType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  AMBIENT: 2,
  DARK: 3,
  LED: 4,
  HALOGEN_LAMP: 5,
  DEUTERIUM_LAMP: 6,
  SOLAR_SIMULATOR: 7,
  BROAD_SPECTRUM: 8
};

/**
 * optional IlluminationType type = 1;
 * @return {!proto.cmccdb.IlluminationConditions.IlluminationType}
 */
proto.cmccdb.IlluminationConditions.prototype.getType = function() {
  return /** @type {!proto.cmccdb.IlluminationConditions.IlluminationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.IlluminationConditions.IlluminationType} value
 * @return {!proto.cmccdb.IlluminationConditions} returns this
 */
proto.cmccdb.IlluminationConditions.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.IlluminationConditions.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.IlluminationConditions} returns this
 */
proto.cmccdb.IlluminationConditions.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Wavelength peak_wavelength = 3;
 * @return {?proto.cmccdb.Wavelength}
 */
proto.cmccdb.IlluminationConditions.prototype.getPeakWavelength = function() {
  return /** @type{?proto.cmccdb.Wavelength} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Wavelength, 3));
};


/**
 * @param {?proto.cmccdb.Wavelength|undefined} value
 * @return {!proto.cmccdb.IlluminationConditions} returns this
*/
proto.cmccdb.IlluminationConditions.prototype.setPeakWavelength = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.IlluminationConditions} returns this
 */
proto.cmccdb.IlluminationConditions.prototype.clearPeakWavelength = function() {
  return this.setPeakWavelength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.IlluminationConditions.prototype.hasPeakWavelength = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string color = 4;
 * @return {string}
 */
proto.cmccdb.IlluminationConditions.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.IlluminationConditions} returns this
 */
proto.cmccdb.IlluminationConditions.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Length distance_to_vessel = 5;
 * @return {?proto.cmccdb.Length}
 */
proto.cmccdb.IlluminationConditions.prototype.getDistanceToVessel = function() {
  return /** @type{?proto.cmccdb.Length} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Length, 5));
};


/**
 * @param {?proto.cmccdb.Length|undefined} value
 * @return {!proto.cmccdb.IlluminationConditions} returns this
*/
proto.cmccdb.IlluminationConditions.prototype.setDistanceToVessel = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.IlluminationConditions} returns this
 */
proto.cmccdb.IlluminationConditions.prototype.clearDistanceToVessel = function() {
  return this.setDistanceToVessel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.IlluminationConditions.prototype.hasDistanceToVessel = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.ElectrochemistryConditions.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ElectrochemistryConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ElectrochemistryConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ElectrochemistryConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    current: (f = msg.getCurrent()) && proto.cmccdb.Current.toObject(includeInstance, f),
    voltage: (f = msg.getVoltage()) && proto.cmccdb.Voltage.toObject(includeInstance, f),
    anodeMaterial: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cathodeMaterial: jspb.Message.getFieldWithDefault(msg, 6, ""),
    electrodeSeparation: (f = msg.getElectrodeSeparation()) && proto.cmccdb.Length.toObject(includeInstance, f),
    measurementsList: jspb.Message.toObjectList(msg.getMeasurementsList(),
    proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.toObject, includeInstance),
    cell: (f = msg.getCell()) && proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ElectrochemistryConditions}
 */
proto.cmccdb.ElectrochemistryConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ElectrochemistryConditions;
  return proto.cmccdb.ElectrochemistryConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ElectrochemistryConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ElectrochemistryConditions}
 */
proto.cmccdb.ElectrochemistryConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = new proto.cmccdb.Current;
      reader.readMessage(value,proto.cmccdb.Current.deserializeBinaryFromReader);
      msg.setCurrent(value);
      break;
    case 4:
      var value = new proto.cmccdb.Voltage;
      reader.readMessage(value,proto.cmccdb.Voltage.deserializeBinaryFromReader);
      msg.setVoltage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnodeMaterial(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCathodeMaterial(value);
      break;
    case 7:
      var value = new proto.cmccdb.Length;
      reader.readMessage(value,proto.cmccdb.Length.deserializeBinaryFromReader);
      msg.setElectrodeSeparation(value);
      break;
    case 8:
      var value = new proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement;
      reader.readMessage(value,proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.deserializeBinaryFromReader);
      msg.addMeasurements(value);
      break;
    case 9:
      var value = new proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell;
      reader.readMessage(value,proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.deserializeBinaryFromReader);
      msg.setCell(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ElectrochemistryConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ElectrochemistryConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ElectrochemistryConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCurrent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Current.serializeBinaryToWriter
    );
  }
  f = message.getVoltage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.Voltage.serializeBinaryToWriter
    );
  }
  f = message.getAnodeMaterial();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCathodeMaterial();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getElectrodeSeparation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cmccdb.Length.serializeBinaryToWriter
    );
  }
  f = message.getMeasurementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.serializeBinaryToWriter
    );
  }
  f = message.getCell();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  CONSTANT_CURRENT: 2,
  CONSTANT_VOLTAGE: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && proto.cmccdb.Time.toObject(includeInstance, f),
    current: (f = msg.getCurrent()) && proto.cmccdb.Current.toObject(includeInstance, f),
    voltage: (f = msg.getVoltage()) && proto.cmccdb.Voltage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement;
  return proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = new proto.cmccdb.Current;
      reader.readMessage(value,proto.cmccdb.Current.deserializeBinaryFromReader);
      msg.setCurrent(value);
      break;
    case 3:
      var value = new proto.cmccdb.Voltage;
      reader.readMessage(value,proto.cmccdb.Voltage.deserializeBinaryFromReader);
      msg.setVoltage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCurrent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cmccdb.Current.serializeBinaryToWriter
    );
  }
  f = message.getVoltage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Voltage.serializeBinaryToWriter
    );
  }
};


/**
 * optional Time time = 1;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.getTime = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 1));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement} returns this
*/
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement} returns this
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Current current = 2;
 * @return {?proto.cmccdb.Current}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.getCurrent = function() {
  return /** @type{?proto.cmccdb.Current} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Current, 2));
};


/**
 * @param {?proto.cmccdb.Current|undefined} value
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement} returns this
*/
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.setCurrent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement} returns this
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.clearCurrent = function() {
  return this.setCurrent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.hasCurrent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Voltage voltage = 3;
 * @return {?proto.cmccdb.Voltage}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.getVoltage = function() {
  return /** @type{?proto.cmccdb.Voltage} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Voltage, 3));
};


/**
 * @param {?proto.cmccdb.Voltage|undefined} value
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement} returns this
*/
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.setVoltage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement} returns this
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.clearVoltage = function() {
  return this.setVoltage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement.prototype.hasVoltage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell;
  return proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.ElectrochemistryCellType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.ElectrochemistryCellType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  DIVIDED_CELL: 2,
  UNDIVIDED_CELL: 3
};

/**
 * optional ElectrochemistryCellType type = 1;
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.ElectrochemistryCellType}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.ElectrochemistryCellType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.ElectrochemistryCellType} value
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell} returns this
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell} returns this
 */
proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ElectrochemistryType type = 1;
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryType}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryType} value
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
 */
proto.cmccdb.ElectrochemistryConditions.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
 */
proto.cmccdb.ElectrochemistryConditions.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Current current = 3;
 * @return {?proto.cmccdb.Current}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.getCurrent = function() {
  return /** @type{?proto.cmccdb.Current} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Current, 3));
};


/**
 * @param {?proto.cmccdb.Current|undefined} value
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
*/
proto.cmccdb.ElectrochemistryConditions.prototype.setCurrent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
 */
proto.cmccdb.ElectrochemistryConditions.prototype.clearCurrent = function() {
  return this.setCurrent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.hasCurrent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Voltage voltage = 4;
 * @return {?proto.cmccdb.Voltage}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.getVoltage = function() {
  return /** @type{?proto.cmccdb.Voltage} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Voltage, 4));
};


/**
 * @param {?proto.cmccdb.Voltage|undefined} value
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
*/
proto.cmccdb.ElectrochemistryConditions.prototype.setVoltage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
 */
proto.cmccdb.ElectrochemistryConditions.prototype.clearVoltage = function() {
  return this.setVoltage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.hasVoltage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string anode_material = 5;
 * @return {string}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.getAnodeMaterial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
 */
proto.cmccdb.ElectrochemistryConditions.prototype.setAnodeMaterial = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string cathode_material = 6;
 * @return {string}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.getCathodeMaterial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
 */
proto.cmccdb.ElectrochemistryConditions.prototype.setCathodeMaterial = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Length electrode_separation = 7;
 * @return {?proto.cmccdb.Length}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.getElectrodeSeparation = function() {
  return /** @type{?proto.cmccdb.Length} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Length, 7));
};


/**
 * @param {?proto.cmccdb.Length|undefined} value
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
*/
proto.cmccdb.ElectrochemistryConditions.prototype.setElectrodeSeparation = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
 */
proto.cmccdb.ElectrochemistryConditions.prototype.clearElectrodeSeparation = function() {
  return this.setElectrodeSeparation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.hasElectrodeSeparation = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated ElectrochemistryMeasurement measurements = 8;
 * @return {!Array<!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement>}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.getMeasurementsList = function() {
  return /** @type{!Array<!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement, 8));
};


/**
 * @param {!Array<!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement>} value
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
*/
proto.cmccdb.ElectrochemistryConditions.prototype.setMeasurementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.addMeasurements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.cmccdb.ElectrochemistryConditions.ElectrochemistryMeasurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
 */
proto.cmccdb.ElectrochemistryConditions.prototype.clearMeasurementsList = function() {
  return this.setMeasurementsList([]);
};


/**
 * optional ElectrochemistryCell cell = 9;
 * @return {?proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.getCell = function() {
  return /** @type{?proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell, 9));
};


/**
 * @param {?proto.cmccdb.ElectrochemistryConditions.ElectrochemistryCell|undefined} value
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
*/
proto.cmccdb.ElectrochemistryConditions.prototype.setCell = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ElectrochemistryConditions} returns this
 */
proto.cmccdb.ElectrochemistryConditions.prototype.clearCell = function() {
  return this.setCell(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ElectrochemistryConditions.prototype.hasCell = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.MechanochemistryConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.MechanochemistryConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.MechanochemistryConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.MechanochemistryConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    frequency: (f = msg.getFrequency()) && proto.cmccdb.Frequency.toObject(includeInstance, f),
    force: (f = msg.getForce()) && proto.cmccdb.Force.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && proto.cmccdb.Time.toObject(includeInstance, f),
    ballMaterial: jspb.Message.getFieldWithDefault(msg, 6, ""),
    liquidAssisted: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    cellMaterial: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.MechanochemistryConditions}
 */
proto.cmccdb.MechanochemistryConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.MechanochemistryConditions;
  return proto.cmccdb.MechanochemistryConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.MechanochemistryConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.MechanochemistryConditions}
 */
proto.cmccdb.MechanochemistryConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.MechanochemistryConditions.MechanochemistryType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = new proto.cmccdb.Frequency;
      reader.readMessage(value,proto.cmccdb.Frequency.deserializeBinaryFromReader);
      msg.setFrequency(value);
      break;
    case 4:
      var value = new proto.cmccdb.Force;
      reader.readMessage(value,proto.cmccdb.Force.deserializeBinaryFromReader);
      msg.setForce(value);
      break;
    case 5:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBallMaterial(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLiquidAssisted(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCellMaterial(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.MechanochemistryConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.MechanochemistryConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.MechanochemistryConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.MechanochemistryConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFrequency();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Frequency.serializeBinaryToWriter
    );
  }
  f = message.getForce();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.Force.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.MechanochemistryConditions.MechanochemistryType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  TIP_ARRAY: 2,
  BALL_MILL: 3,
  HAND_GRIND: 4,
  TWIN_SCREW: 5,
  ANVIL_CELL: 6
};

/**
 * optional MechanochemistryType type = 1;
 * @return {!proto.cmccdb.MechanochemistryConditions.MechanochemistryType}
 */
proto.cmccdb.MechanochemistryConditions.prototype.getType = function() {
  return /** @type {!proto.cmccdb.MechanochemistryConditions.MechanochemistryType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.MechanochemistryConditions.MechanochemistryType} value
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.MechanochemistryConditions.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Frequency frequency = 3;
 * @return {?proto.cmccdb.Frequency}
 */
proto.cmccdb.MechanochemistryConditions.prototype.getFrequency = function() {
  return /** @type{?proto.cmccdb.Frequency} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Frequency, 3));
};


/**
 * @param {?proto.cmccdb.Frequency|undefined} value
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
*/
proto.cmccdb.MechanochemistryConditions.prototype.setFrequency = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.clearFrequency = function() {
  return this.setFrequency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.MechanochemistryConditions.prototype.hasFrequency = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Force force = 4;
 * @return {?proto.cmccdb.Force}
 */
proto.cmccdb.MechanochemistryConditions.prototype.getForce = function() {
  return /** @type{?proto.cmccdb.Force} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Force, 4));
};


/**
 * @param {?proto.cmccdb.Force|undefined} value
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
*/
proto.cmccdb.MechanochemistryConditions.prototype.setForce = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.clearForce = function() {
  return this.setForce(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.MechanochemistryConditions.prototype.hasForce = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Time duration = 5;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.MechanochemistryConditions.prototype.getDuration = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 5));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
*/
proto.cmccdb.MechanochemistryConditions.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.MechanochemistryConditions.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string ball_material = 6;
 * @return {string}
 */
proto.cmccdb.MechanochemistryConditions.prototype.getBallMaterial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.setBallMaterial = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.clearBallMaterial = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.MechanochemistryConditions.prototype.hasBallMaterial = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool liquid_assisted = 7;
 * @return {boolean}
 */
proto.cmccdb.MechanochemistryConditions.prototype.getLiquidAssisted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.setLiquidAssisted = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.clearLiquidAssisted = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.MechanochemistryConditions.prototype.hasLiquidAssisted = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string cell_material = 8;
 * @return {string}
 */
proto.cmccdb.MechanochemistryConditions.prototype.getCellMaterial = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.setCellMaterial = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.MechanochemistryConditions} returns this
 */
proto.cmccdb.MechanochemistryConditions.prototype.clearCellMaterial = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.MechanochemistryConditions.prototype.hasCellMaterial = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.FlowConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.FlowConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.FlowConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.FlowConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pumpType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tubing: (f = msg.getTubing()) && proto.cmccdb.FlowConditions.Tubing.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.FlowConditions}
 */
proto.cmccdb.FlowConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.FlowConditions;
  return proto.cmccdb.FlowConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.FlowConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.FlowConditions}
 */
proto.cmccdb.FlowConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.FlowConditions.FlowType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPumpType(value);
      break;
    case 4:
      var value = new proto.cmccdb.FlowConditions.Tubing;
      reader.readMessage(value,proto.cmccdb.FlowConditions.Tubing.deserializeBinaryFromReader);
      msg.setTubing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.FlowConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.FlowConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.FlowConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.FlowConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPumpType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTubing();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.FlowConditions.Tubing.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.FlowConditions.FlowType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  PLUG_FLOW_REACTOR: 2,
  CONTINUOUS_STIRRED_TANK_REACTOR: 3,
  PACKED_BED_REACTOR: 4
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.FlowConditions.Tubing.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.FlowConditions.Tubing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.FlowConditions.Tubing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.FlowConditions.Tubing.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    diameter: (f = msg.getDiameter()) && proto.cmccdb.Length.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.FlowConditions.Tubing}
 */
proto.cmccdb.FlowConditions.Tubing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.FlowConditions.Tubing;
  return proto.cmccdb.FlowConditions.Tubing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.FlowConditions.Tubing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.FlowConditions.Tubing}
 */
proto.cmccdb.FlowConditions.Tubing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.FlowConditions.Tubing.TubingType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = new proto.cmccdb.Length;
      reader.readMessage(value,proto.cmccdb.Length.deserializeBinaryFromReader);
      msg.setDiameter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.FlowConditions.Tubing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.FlowConditions.Tubing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.FlowConditions.Tubing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.FlowConditions.Tubing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDiameter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Length.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.FlowConditions.Tubing.TubingType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  STEEL: 2,
  COPPER: 3,
  PFA: 4,
  FEP: 5,
  TEFLONAF: 6,
  PTFE: 7,
  GLASS: 8,
  QUARTZ: 9,
  SILICON: 10,
  PDMS: 11
};

/**
 * optional TubingType type = 1;
 * @return {!proto.cmccdb.FlowConditions.Tubing.TubingType}
 */
proto.cmccdb.FlowConditions.Tubing.prototype.getType = function() {
  return /** @type {!proto.cmccdb.FlowConditions.Tubing.TubingType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.FlowConditions.Tubing.TubingType} value
 * @return {!proto.cmccdb.FlowConditions.Tubing} returns this
 */
proto.cmccdb.FlowConditions.Tubing.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.FlowConditions.Tubing.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.FlowConditions.Tubing} returns this
 */
proto.cmccdb.FlowConditions.Tubing.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Length diameter = 3;
 * @return {?proto.cmccdb.Length}
 */
proto.cmccdb.FlowConditions.Tubing.prototype.getDiameter = function() {
  return /** @type{?proto.cmccdb.Length} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Length, 3));
};


/**
 * @param {?proto.cmccdb.Length|undefined} value
 * @return {!proto.cmccdb.FlowConditions.Tubing} returns this
*/
proto.cmccdb.FlowConditions.Tubing.prototype.setDiameter = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.FlowConditions.Tubing} returns this
 */
proto.cmccdb.FlowConditions.Tubing.prototype.clearDiameter = function() {
  return this.setDiameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.FlowConditions.Tubing.prototype.hasDiameter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional FlowType type = 1;
 * @return {!proto.cmccdb.FlowConditions.FlowType}
 */
proto.cmccdb.FlowConditions.prototype.getType = function() {
  return /** @type {!proto.cmccdb.FlowConditions.FlowType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.FlowConditions.FlowType} value
 * @return {!proto.cmccdb.FlowConditions} returns this
 */
proto.cmccdb.FlowConditions.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.FlowConditions.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.FlowConditions} returns this
 */
proto.cmccdb.FlowConditions.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string pump_type = 3;
 * @return {string}
 */
proto.cmccdb.FlowConditions.prototype.getPumpType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.FlowConditions} returns this
 */
proto.cmccdb.FlowConditions.prototype.setPumpType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Tubing tubing = 4;
 * @return {?proto.cmccdb.FlowConditions.Tubing}
 */
proto.cmccdb.FlowConditions.prototype.getTubing = function() {
  return /** @type{?proto.cmccdb.FlowConditions.Tubing} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.FlowConditions.Tubing, 4));
};


/**
 * @param {?proto.cmccdb.FlowConditions.Tubing|undefined} value
 * @return {!proto.cmccdb.FlowConditions} returns this
*/
proto.cmccdb.FlowConditions.prototype.setTubing = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.FlowConditions} returns this
 */
proto.cmccdb.FlowConditions.prototype.clearTubing = function() {
  return this.setTubing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.FlowConditions.prototype.hasTubing = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionNotes.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionNotes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionNotes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionNotes.toObject = function(includeInstance, msg) {
  var f, obj = {
    isHeterogeneous: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    formsPrecipitate: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isExothermic: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    offgasses: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isSensitiveToMoisture: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isSensitiveToOxygen: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isSensitiveToLight: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    safetyNotes: jspb.Message.getFieldWithDefault(msg, 8, ""),
    procedureDetails: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionNotes}
 */
proto.cmccdb.ReactionNotes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionNotes;
  return proto.cmccdb.ReactionNotes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionNotes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionNotes}
 */
proto.cmccdb.ReactionNotes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHeterogeneous(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFormsPrecipitate(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExothermic(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOffgasses(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSensitiveToMoisture(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSensitiveToOxygen(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSensitiveToLight(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSafetyNotes(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcedureDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionNotes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionNotes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionNotes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionNotes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getSafetyNotes();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getProcedureDetails();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional bool is_heterogeneous = 1;
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.getIsHeterogeneous = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.setIsHeterogeneous = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.clearIsHeterogeneous = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.hasIsHeterogeneous = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool forms_precipitate = 2;
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.getFormsPrecipitate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.setFormsPrecipitate = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.clearFormsPrecipitate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.hasFormsPrecipitate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_exothermic = 3;
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.getIsExothermic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.setIsExothermic = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.clearIsExothermic = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.hasIsExothermic = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool offgasses = 4;
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.getOffgasses = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.setOffgasses = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.clearOffgasses = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.hasOffgasses = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_sensitive_to_moisture = 5;
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.getIsSensitiveToMoisture = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.setIsSensitiveToMoisture = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.clearIsSensitiveToMoisture = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.hasIsSensitiveToMoisture = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_sensitive_to_oxygen = 6;
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.getIsSensitiveToOxygen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.setIsSensitiveToOxygen = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.clearIsSensitiveToOxygen = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.hasIsSensitiveToOxygen = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_sensitive_to_light = 7;
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.getIsSensitiveToLight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.setIsSensitiveToLight = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.clearIsSensitiveToLight = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionNotes.prototype.hasIsSensitiveToLight = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string safety_notes = 8;
 * @return {string}
 */
proto.cmccdb.ReactionNotes.prototype.getSafetyNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.setSafetyNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string procedure_details = 9;
 * @return {string}
 */
proto.cmccdb.ReactionNotes.prototype.getProcedureDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionNotes} returns this
 */
proto.cmccdb.ReactionNotes.prototype.setProcedureDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionObservation.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionObservation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionObservation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionObservation.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && proto.cmccdb.Time.toObject(includeInstance, f),
    comment: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: (f = msg.getImage()) && proto.cmccdb.Data.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionObservation}
 */
proto.cmccdb.ReactionObservation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionObservation;
  return proto.cmccdb.ReactionObservation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionObservation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionObservation}
 */
proto.cmccdb.ReactionObservation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 3:
      var value = new proto.cmccdb.Data;
      reader.readMessage(value,proto.cmccdb.Data.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionObservation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionObservation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionObservation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionObservation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Data.serializeBinaryToWriter
    );
  }
};


/**
 * optional Time time = 1;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.ReactionObservation.prototype.getTime = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 1));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.ReactionObservation} returns this
*/
proto.cmccdb.ReactionObservation.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionObservation} returns this
 */
proto.cmccdb.ReactionObservation.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionObservation.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string comment = 2;
 * @return {string}
 */
proto.cmccdb.ReactionObservation.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionObservation} returns this
 */
proto.cmccdb.ReactionObservation.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Data image = 3;
 * @return {?proto.cmccdb.Data}
 */
proto.cmccdb.ReactionObservation.prototype.getImage = function() {
  return /** @type{?proto.cmccdb.Data} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Data, 3));
};


/**
 * @param {?proto.cmccdb.Data|undefined} value
 * @return {!proto.cmccdb.ReactionObservation} returns this
*/
proto.cmccdb.ReactionObservation.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionObservation} returns this
 */
proto.cmccdb.ReactionObservation.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionObservation.prototype.hasImage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionWorkup.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionWorkup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionWorkup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionWorkup.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    duration: (f = msg.getDuration()) && proto.cmccdb.Time.toObject(includeInstance, f),
    input: (f = msg.getInput()) && proto.cmccdb.ReactionInput.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto.cmccdb.Amount.toObject(includeInstance, f),
    temperature: (f = msg.getTemperature()) && proto.cmccdb.TemperatureConditions.toObject(includeInstance, f),
    keepPhase: jspb.Message.getFieldWithDefault(msg, 7, ""),
    stirring: (f = msg.getStirring()) && proto.cmccdb.StirringConditions.toObject(includeInstance, f),
    targetPh: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    isAutomated: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionWorkup}
 */
proto.cmccdb.ReactionWorkup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionWorkup;
  return proto.cmccdb.ReactionWorkup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionWorkup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionWorkup}
 */
proto.cmccdb.ReactionWorkup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.ReactionWorkup.ReactionWorkupType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 4:
      var value = new proto.cmccdb.ReactionInput;
      reader.readMessage(value,proto.cmccdb.ReactionInput.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 5:
      var value = new proto.cmccdb.Amount;
      reader.readMessage(value,proto.cmccdb.Amount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 6:
      var value = new proto.cmccdb.TemperatureConditions;
      reader.readMessage(value,proto.cmccdb.TemperatureConditions.deserializeBinaryFromReader);
      msg.setTemperature(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeepPhase(value);
      break;
    case 8:
      var value = new proto.cmccdb.StirringConditions;
      reader.readMessage(value,proto.cmccdb.StirringConditions.deserializeBinaryFromReader);
      msg.setStirring(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargetPh(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAutomated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionWorkup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionWorkup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionWorkup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionWorkup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cmccdb.ReactionInput.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getTemperature();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cmccdb.TemperatureConditions.serializeBinaryToWriter
    );
  }
  f = message.getKeepPhase();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStirring();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.cmccdb.StirringConditions.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ReactionWorkup.ReactionWorkupType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  ADDITION: 2,
  ALIQUOT: 3,
  TEMPERATURE: 4,
  CONCENTRATION: 5,
  EXTRACTION: 6,
  FILTRATION: 7,
  WASH: 8,
  DRY_IN_VACUUM: 9,
  DRY_WITH_MATERIAL: 10,
  FLASH_CHROMATOGRAPHY: 11,
  OTHER_CHROMATOGRAPHY: 12,
  SCAVENGING: 13,
  WAIT: 14,
  STIRRING: 15,
  PH_ADJUST: 16,
  DISSOLUTION: 17,
  DISTILLATION: 18
};

/**
 * optional ReactionWorkupType type = 1;
 * @return {!proto.cmccdb.ReactionWorkup.ReactionWorkupType}
 */
proto.cmccdb.ReactionWorkup.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ReactionWorkup.ReactionWorkupType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.ReactionWorkup.ReactionWorkupType} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.ReactionWorkup.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Time duration = 3;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.ReactionWorkup.prototype.getDuration = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 3));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
*/
proto.cmccdb.ReactionWorkup.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionWorkup.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ReactionInput input = 4;
 * @return {?proto.cmccdb.ReactionInput}
 */
proto.cmccdb.ReactionWorkup.prototype.getInput = function() {
  return /** @type{?proto.cmccdb.ReactionInput} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ReactionInput, 4));
};


/**
 * @param {?proto.cmccdb.ReactionInput|undefined} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
*/
proto.cmccdb.ReactionWorkup.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionWorkup.prototype.hasInput = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Amount amount = 5;
 * @return {?proto.cmccdb.Amount}
 */
proto.cmccdb.ReactionWorkup.prototype.getAmount = function() {
  return /** @type{?proto.cmccdb.Amount} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Amount, 5));
};


/**
 * @param {?proto.cmccdb.Amount|undefined} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
*/
proto.cmccdb.ReactionWorkup.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionWorkup.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TemperatureConditions temperature = 6;
 * @return {?proto.cmccdb.TemperatureConditions}
 */
proto.cmccdb.ReactionWorkup.prototype.getTemperature = function() {
  return /** @type{?proto.cmccdb.TemperatureConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.TemperatureConditions, 6));
};


/**
 * @param {?proto.cmccdb.TemperatureConditions|undefined} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
*/
proto.cmccdb.ReactionWorkup.prototype.setTemperature = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.clearTemperature = function() {
  return this.setTemperature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionWorkup.prototype.hasTemperature = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string keep_phase = 7;
 * @return {string}
 */
proto.cmccdb.ReactionWorkup.prototype.getKeepPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.setKeepPhase = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional StirringConditions stirring = 8;
 * @return {?proto.cmccdb.StirringConditions}
 */
proto.cmccdb.ReactionWorkup.prototype.getStirring = function() {
  return /** @type{?proto.cmccdb.StirringConditions} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.StirringConditions, 8));
};


/**
 * @param {?proto.cmccdb.StirringConditions|undefined} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
*/
proto.cmccdb.ReactionWorkup.prototype.setStirring = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.clearStirring = function() {
  return this.setStirring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionWorkup.prototype.hasStirring = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional float target_ph = 9;
 * @return {number}
 */
proto.cmccdb.ReactionWorkup.prototype.getTargetPh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.setTargetPh = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.clearTargetPh = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionWorkup.prototype.hasTargetPh = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_automated = 10;
 * @return {boolean}
 */
proto.cmccdb.ReactionWorkup.prototype.getIsAutomated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.setIsAutomated = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionWorkup} returns this
 */
proto.cmccdb.ReactionWorkup.prototype.clearIsAutomated = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionWorkup.prototype.hasIsAutomated = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.ReactionOutcome.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionOutcome.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionOutcome.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionOutcome} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionOutcome.toObject = function(includeInstance, msg) {
  var f, obj = {
    reactionTime: (f = msg.getReactionTime()) && proto.cmccdb.Time.toObject(includeInstance, f),
    conversion: (f = msg.getConversion()) && proto.cmccdb.Percentage.toObject(includeInstance, f),
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.cmccdb.ProductCompound.toObject, includeInstance),
    analysesMap: (f = msg.getAnalysesMap()) ? f.toObject(includeInstance, proto.cmccdb.Analysis.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionOutcome}
 */
proto.cmccdb.ReactionOutcome.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionOutcome;
  return proto.cmccdb.ReactionOutcome.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionOutcome} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionOutcome}
 */
proto.cmccdb.ReactionOutcome.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setReactionTime(value);
      break;
    case 2:
      var value = new proto.cmccdb.Percentage;
      reader.readMessage(value,proto.cmccdb.Percentage.deserializeBinaryFromReader);
      msg.setConversion(value);
      break;
    case 3:
      var value = new proto.cmccdb.ProductCompound;
      reader.readMessage(value,proto.cmccdb.ProductCompound.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    case 4:
      var value = msg.getAnalysesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cmccdb.Analysis.deserializeBinaryFromReader, "", new proto.cmccdb.Analysis());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionOutcome.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionOutcome.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionOutcome} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionOutcome.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReactionTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConversion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cmccdb.Percentage.serializeBinaryToWriter
    );
  }
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cmccdb.ProductCompound.serializeBinaryToWriter
    );
  }
  f = message.getAnalysesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cmccdb.Analysis.serializeBinaryToWriter);
  }
};


/**
 * optional Time reaction_time = 1;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.ReactionOutcome.prototype.getReactionTime = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 1));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.ReactionOutcome} returns this
*/
proto.cmccdb.ReactionOutcome.prototype.setReactionTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionOutcome} returns this
 */
proto.cmccdb.ReactionOutcome.prototype.clearReactionTime = function() {
  return this.setReactionTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionOutcome.prototype.hasReactionTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Percentage conversion = 2;
 * @return {?proto.cmccdb.Percentage}
 */
proto.cmccdb.ReactionOutcome.prototype.getConversion = function() {
  return /** @type{?proto.cmccdb.Percentage} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Percentage, 2));
};


/**
 * @param {?proto.cmccdb.Percentage|undefined} value
 * @return {!proto.cmccdb.ReactionOutcome} returns this
*/
proto.cmccdb.ReactionOutcome.prototype.setConversion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionOutcome} returns this
 */
proto.cmccdb.ReactionOutcome.prototype.clearConversion = function() {
  return this.setConversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionOutcome.prototype.hasConversion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProductCompound products = 3;
 * @return {!Array<!proto.cmccdb.ProductCompound>}
 */
proto.cmccdb.ReactionOutcome.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.cmccdb.ProductCompound>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.ProductCompound, 3));
};


/**
 * @param {!Array<!proto.cmccdb.ProductCompound>} value
 * @return {!proto.cmccdb.ReactionOutcome} returns this
*/
proto.cmccdb.ReactionOutcome.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cmccdb.ProductCompound=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.ProductCompound}
 */
proto.cmccdb.ReactionOutcome.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cmccdb.ProductCompound, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.ReactionOutcome} returns this
 */
proto.cmccdb.ReactionOutcome.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};


/**
 * map<string, Analysis> analyses = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cmccdb.Analysis>}
 */
proto.cmccdb.ReactionOutcome.prototype.getAnalysesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cmccdb.Analysis>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.cmccdb.Analysis));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cmccdb.ReactionOutcome} returns this
 */
proto.cmccdb.ReactionOutcome.prototype.clearAnalysesMap = function() {
  this.getAnalysesMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.ProductCompound.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ProductCompound.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ProductCompound.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ProductCompound} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ProductCompound.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifiersList: jspb.Message.toObjectList(msg.getIdentifiersList(),
    proto.cmccdb.CompoundIdentifier.toObject, includeInstance),
    isDesiredProduct: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    measurementsList: jspb.Message.toObjectList(msg.getMeasurementsList(),
    proto.cmccdb.ProductMeasurement.toObject, includeInstance),
    isolatedColor: jspb.Message.getFieldWithDefault(msg, 4, ""),
    texture: (f = msg.getTexture()) && proto.cmccdb.Texture.toObject(includeInstance, f),
    featuresMap: (f = msg.getFeaturesMap()) ? f.toObject(includeInstance, proto.cmccdb.Data.toObject) : [],
    reactionRole: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ProductCompound}
 */
proto.cmccdb.ProductCompound.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ProductCompound;
  return proto.cmccdb.ProductCompound.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ProductCompound} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ProductCompound}
 */
proto.cmccdb.ProductCompound.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.CompoundIdentifier;
      reader.readMessage(value,proto.cmccdb.CompoundIdentifier.deserializeBinaryFromReader);
      msg.addIdentifiers(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDesiredProduct(value);
      break;
    case 3:
      var value = new proto.cmccdb.ProductMeasurement;
      reader.readMessage(value,proto.cmccdb.ProductMeasurement.deserializeBinaryFromReader);
      msg.addMeasurements(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIsolatedColor(value);
      break;
    case 5:
      var value = new proto.cmccdb.Texture;
      reader.readMessage(value,proto.cmccdb.Texture.deserializeBinaryFromReader);
      msg.setTexture(value);
      break;
    case 6:
      var value = msg.getFeaturesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cmccdb.Data.deserializeBinaryFromReader, "", new proto.cmccdb.Data());
         });
      break;
    case 7:
      var value = /** @type {!proto.cmccdb.ReactionRole.ReactionRoleType} */ (reader.readEnum());
      msg.setReactionRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ProductCompound.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ProductCompound.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ProductCompound} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ProductCompound.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifiersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cmccdb.CompoundIdentifier.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMeasurementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cmccdb.ProductMeasurement.serializeBinaryToWriter
    );
  }
  f = message.getIsolatedColor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTexture();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cmccdb.Texture.serializeBinaryToWriter
    );
  }
  f = message.getFeaturesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cmccdb.Data.serializeBinaryToWriter);
  }
  f = message.getReactionRole();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * repeated CompoundIdentifier identifiers = 1;
 * @return {!Array<!proto.cmccdb.CompoundIdentifier>}
 */
proto.cmccdb.ProductCompound.prototype.getIdentifiersList = function() {
  return /** @type{!Array<!proto.cmccdb.CompoundIdentifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.CompoundIdentifier, 1));
};


/**
 * @param {!Array<!proto.cmccdb.CompoundIdentifier>} value
 * @return {!proto.cmccdb.ProductCompound} returns this
*/
proto.cmccdb.ProductCompound.prototype.setIdentifiersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cmccdb.CompoundIdentifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.CompoundIdentifier}
 */
proto.cmccdb.ProductCompound.prototype.addIdentifiers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cmccdb.CompoundIdentifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.ProductCompound} returns this
 */
proto.cmccdb.ProductCompound.prototype.clearIdentifiersList = function() {
  return this.setIdentifiersList([]);
};


/**
 * optional bool is_desired_product = 2;
 * @return {boolean}
 */
proto.cmccdb.ProductCompound.prototype.getIsDesiredProduct = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ProductCompound} returns this
 */
proto.cmccdb.ProductCompound.prototype.setIsDesiredProduct = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ProductCompound} returns this
 */
proto.cmccdb.ProductCompound.prototype.clearIsDesiredProduct = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductCompound.prototype.hasIsDesiredProduct = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProductMeasurement measurements = 3;
 * @return {!Array<!proto.cmccdb.ProductMeasurement>}
 */
proto.cmccdb.ProductCompound.prototype.getMeasurementsList = function() {
  return /** @type{!Array<!proto.cmccdb.ProductMeasurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.ProductMeasurement, 3));
};


/**
 * @param {!Array<!proto.cmccdb.ProductMeasurement>} value
 * @return {!proto.cmccdb.ProductCompound} returns this
*/
proto.cmccdb.ProductCompound.prototype.setMeasurementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cmccdb.ProductMeasurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.ProductMeasurement}
 */
proto.cmccdb.ProductCompound.prototype.addMeasurements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cmccdb.ProductMeasurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.ProductCompound} returns this
 */
proto.cmccdb.ProductCompound.prototype.clearMeasurementsList = function() {
  return this.setMeasurementsList([]);
};


/**
 * optional string isolated_color = 4;
 * @return {string}
 */
proto.cmccdb.ProductCompound.prototype.getIsolatedColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ProductCompound} returns this
 */
proto.cmccdb.ProductCompound.prototype.setIsolatedColor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Texture texture = 5;
 * @return {?proto.cmccdb.Texture}
 */
proto.cmccdb.ProductCompound.prototype.getTexture = function() {
  return /** @type{?proto.cmccdb.Texture} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Texture, 5));
};


/**
 * @param {?proto.cmccdb.Texture|undefined} value
 * @return {!proto.cmccdb.ProductCompound} returns this
*/
proto.cmccdb.ProductCompound.prototype.setTexture = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ProductCompound} returns this
 */
proto.cmccdb.ProductCompound.prototype.clearTexture = function() {
  return this.setTexture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductCompound.prototype.hasTexture = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, Data> features = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cmccdb.Data>}
 */
proto.cmccdb.ProductCompound.prototype.getFeaturesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cmccdb.Data>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.cmccdb.Data));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cmccdb.ProductCompound} returns this
 */
proto.cmccdb.ProductCompound.prototype.clearFeaturesMap = function() {
  this.getFeaturesMap().clear();
  return this;
};


/**
 * optional ReactionRole.ReactionRoleType reaction_role = 7;
 * @return {!proto.cmccdb.ReactionRole.ReactionRoleType}
 */
proto.cmccdb.ProductCompound.prototype.getReactionRole = function() {
  return /** @type {!proto.cmccdb.ReactionRole.ReactionRoleType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.cmccdb.ReactionRole.ReactionRoleType} value
 * @return {!proto.cmccdb.ProductCompound} returns this
 */
proto.cmccdb.ProductCompound.prototype.setReactionRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cmccdb.ProductMeasurement.oneofGroups_ = [[8,9,10,11]];

/**
 * @enum {number}
 */
proto.cmccdb.ProductMeasurement.ValueCase = {
  VALUE_NOT_SET: 0,
  PERCENTAGE: 8,
  FLOAT_VALUE: 9,
  STRING_VALUE: 10,
  AMOUNT: 11
};

/**
 * @return {proto.cmccdb.ProductMeasurement.ValueCase}
 */
proto.cmccdb.ProductMeasurement.prototype.getValueCase = function() {
  return /** @type {proto.cmccdb.ProductMeasurement.ValueCase} */(jspb.Message.computeOneofCase(this, proto.cmccdb.ProductMeasurement.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ProductMeasurement.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ProductMeasurement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ProductMeasurement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ProductMeasurement.toObject = function(includeInstance, msg) {
  var f, obj = {
    analysisKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    details: jspb.Message.getFieldWithDefault(msg, 3, ""),
    usesInternalStandard: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isNormalized: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    usesAuthenticStandard: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    authenticStandard: (f = msg.getAuthenticStandard()) && proto.cmccdb.Compound.toObject(includeInstance, f),
    percentage: (f = msg.getPercentage()) && proto.cmccdb.Percentage.toObject(includeInstance, f),
    floatValue: (f = msg.getFloatValue()) && proto.cmccdb.FloatValue.toObject(includeInstance, f),
    stringValue: jspb.Message.getFieldWithDefault(msg, 10, ""),
    amount: (f = msg.getAmount()) && proto.cmccdb.Amount.toObject(includeInstance, f),
    retentionTime: (f = msg.getRetentionTime()) && proto.cmccdb.Time.toObject(includeInstance, f),
    massSpecDetails: (f = msg.getMassSpecDetails()) && proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.toObject(includeInstance, f),
    selectivity: (f = msg.getSelectivity()) && proto.cmccdb.ProductMeasurement.Selectivity.toObject(includeInstance, f),
    wavelength: (f = msg.getWavelength()) && proto.cmccdb.Wavelength.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ProductMeasurement}
 */
proto.cmccdb.ProductMeasurement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ProductMeasurement;
  return proto.cmccdb.ProductMeasurement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ProductMeasurement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ProductMeasurement}
 */
proto.cmccdb.ProductMeasurement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalysisKey(value);
      break;
    case 2:
      var value = /** @type {!proto.cmccdb.ProductMeasurement.ProductMeasurementType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsesInternalStandard(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNormalized(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsesAuthenticStandard(value);
      break;
    case 7:
      var value = new proto.cmccdb.Compound;
      reader.readMessage(value,proto.cmccdb.Compound.deserializeBinaryFromReader);
      msg.setAuthenticStandard(value);
      break;
    case 8:
      var value = new proto.cmccdb.Percentage;
      reader.readMessage(value,proto.cmccdb.Percentage.deserializeBinaryFromReader);
      msg.setPercentage(value);
      break;
    case 9:
      var value = new proto.cmccdb.FloatValue;
      reader.readMessage(value,proto.cmccdb.FloatValue.deserializeBinaryFromReader);
      msg.setFloatValue(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 11:
      var value = new proto.cmccdb.Amount;
      reader.readMessage(value,proto.cmccdb.Amount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 12:
      var value = new proto.cmccdb.Time;
      reader.readMessage(value,proto.cmccdb.Time.deserializeBinaryFromReader);
      msg.setRetentionTime(value);
      break;
    case 13:
      var value = new proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails;
      reader.readMessage(value,proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.deserializeBinaryFromReader);
      msg.setMassSpecDetails(value);
      break;
    case 14:
      var value = new proto.cmccdb.ProductMeasurement.Selectivity;
      reader.readMessage(value,proto.cmccdb.ProductMeasurement.Selectivity.deserializeBinaryFromReader);
      msg.setSelectivity(value);
      break;
    case 15:
      var value = new proto.cmccdb.Wavelength;
      reader.readMessage(value,proto.cmccdb.Wavelength.deserializeBinaryFromReader);
      msg.setWavelength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ProductMeasurement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ProductMeasurement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ProductMeasurement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ProductMeasurement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnalysisKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getAuthenticStandard();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cmccdb.Compound.serializeBinaryToWriter
    );
  }
  f = message.getPercentage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.cmccdb.Percentage.serializeBinaryToWriter
    );
  }
  f = message.getFloatValue();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cmccdb.FloatValue.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.cmccdb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getRetentionTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.cmccdb.Time.serializeBinaryToWriter
    );
  }
  f = message.getMassSpecDetails();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.serializeBinaryToWriter
    );
  }
  f = message.getSelectivity();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.cmccdb.ProductMeasurement.Selectivity.serializeBinaryToWriter
    );
  }
  f = message.getWavelength();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.cmccdb.Wavelength.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ProductMeasurement.ProductMeasurementType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  IDENTITY: 2,
  YIELD: 3,
  SELECTIVITY: 4,
  PURITY: 5,
  AREA: 6,
  COUNTS: 7,
  INTENSITY: 8,
  AMOUNT: 9
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ticMinimumMz: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    ticMaximumMz: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    eicMassesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails;
  return proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.MassSpecMeasurementType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTicMinimumMz(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTicMaximumMz(value);
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addEicMasses(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getEicMassesList();
  if (f.length > 0) {
    writer.writePackedFloat(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.MassSpecMeasurementType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  TIC: 2,
  TIC_POSITIVE: 3,
  TIC_NEGATIVE: 4,
  EIC: 5
};

/**
 * optional MassSpecMeasurementType type = 1;
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.MassSpecMeasurementType}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.MassSpecMeasurementType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.MassSpecMeasurementType} value
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} returns this
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} returns this
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float tic_minimum_mz = 3;
 * @return {number}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.getTicMinimumMz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} returns this
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.setTicMinimumMz = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} returns this
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.clearTicMinimumMz = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.hasTicMinimumMz = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float tic_maximum_mz = 4;
 * @return {number}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.getTicMaximumMz = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} returns this
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.setTicMaximumMz = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} returns this
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.clearTicMaximumMz = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.hasTicMaximumMz = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated float eic_masses = 5;
 * @return {!Array<number>}
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.getEicMassesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} returns this
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.setEicMassesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} returns this
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.addEicMasses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} returns this
 */
proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails.prototype.clearEicMassesList = function() {
  return this.setEicMassesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ProductMeasurement.Selectivity.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ProductMeasurement.Selectivity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ProductMeasurement.Selectivity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ProductMeasurement.Selectivity.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ProductMeasurement.Selectivity}
 */
proto.cmccdb.ProductMeasurement.Selectivity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ProductMeasurement.Selectivity;
  return proto.cmccdb.ProductMeasurement.Selectivity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ProductMeasurement.Selectivity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ProductMeasurement.Selectivity}
 */
proto.cmccdb.ProductMeasurement.Selectivity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.ProductMeasurement.Selectivity.SelectivityType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ProductMeasurement.Selectivity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ProductMeasurement.Selectivity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ProductMeasurement.Selectivity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ProductMeasurement.Selectivity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.ProductMeasurement.Selectivity.SelectivityType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  EE: 2,
  ER: 3,
  DR: 4,
  EZ: 5,
  ZE: 6
};

/**
 * optional SelectivityType type = 1;
 * @return {!proto.cmccdb.ProductMeasurement.Selectivity.SelectivityType}
 */
proto.cmccdb.ProductMeasurement.Selectivity.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ProductMeasurement.Selectivity.SelectivityType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.ProductMeasurement.Selectivity.SelectivityType} value
 * @return {!proto.cmccdb.ProductMeasurement.Selectivity} returns this
 */
proto.cmccdb.ProductMeasurement.Selectivity.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.ProductMeasurement.Selectivity.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ProductMeasurement.Selectivity} returns this
 */
proto.cmccdb.ProductMeasurement.Selectivity.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string analysis_key = 1;
 * @return {string}
 */
proto.cmccdb.ProductMeasurement.prototype.getAnalysisKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.setAnalysisKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ProductMeasurementType type = 2;
 * @return {!proto.cmccdb.ProductMeasurement.ProductMeasurementType}
 */
proto.cmccdb.ProductMeasurement.prototype.getType = function() {
  return /** @type {!proto.cmccdb.ProductMeasurement.ProductMeasurementType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.cmccdb.ProductMeasurement.ProductMeasurementType} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.cmccdb.ProductMeasurement.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool uses_internal_standard = 4;
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.getUsesInternalStandard = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.setUsesInternalStandard = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearUsesInternalStandard = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasUsesInternalStandard = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_normalized = 5;
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.getIsNormalized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.setIsNormalized = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearIsNormalized = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasIsNormalized = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool uses_authentic_standard = 6;
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.getUsesAuthenticStandard = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.setUsesAuthenticStandard = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearUsesAuthenticStandard = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasUsesAuthenticStandard = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Compound authentic_standard = 7;
 * @return {?proto.cmccdb.Compound}
 */
proto.cmccdb.ProductMeasurement.prototype.getAuthenticStandard = function() {
  return /** @type{?proto.cmccdb.Compound} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Compound, 7));
};


/**
 * @param {?proto.cmccdb.Compound|undefined} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
*/
proto.cmccdb.ProductMeasurement.prototype.setAuthenticStandard = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearAuthenticStandard = function() {
  return this.setAuthenticStandard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasAuthenticStandard = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Percentage percentage = 8;
 * @return {?proto.cmccdb.Percentage}
 */
proto.cmccdb.ProductMeasurement.prototype.getPercentage = function() {
  return /** @type{?proto.cmccdb.Percentage} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Percentage, 8));
};


/**
 * @param {?proto.cmccdb.Percentage|undefined} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
*/
proto.cmccdb.ProductMeasurement.prototype.setPercentage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.cmccdb.ProductMeasurement.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearPercentage = function() {
  return this.setPercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasPercentage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional FloatValue float_value = 9;
 * @return {?proto.cmccdb.FloatValue}
 */
proto.cmccdb.ProductMeasurement.prototype.getFloatValue = function() {
  return /** @type{?proto.cmccdb.FloatValue} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.FloatValue, 9));
};


/**
 * @param {?proto.cmccdb.FloatValue|undefined} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
*/
proto.cmccdb.ProductMeasurement.prototype.setFloatValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.cmccdb.ProductMeasurement.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearFloatValue = function() {
  return this.setFloatValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasFloatValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string string_value = 10;
 * @return {string}
 */
proto.cmccdb.ProductMeasurement.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.cmccdb.ProductMeasurement.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 10, proto.cmccdb.ProductMeasurement.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Amount amount = 11;
 * @return {?proto.cmccdb.Amount}
 */
proto.cmccdb.ProductMeasurement.prototype.getAmount = function() {
  return /** @type{?proto.cmccdb.Amount} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Amount, 11));
};


/**
 * @param {?proto.cmccdb.Amount|undefined} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
*/
proto.cmccdb.ProductMeasurement.prototype.setAmount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.cmccdb.ProductMeasurement.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Time retention_time = 12;
 * @return {?proto.cmccdb.Time}
 */
proto.cmccdb.ProductMeasurement.prototype.getRetentionTime = function() {
  return /** @type{?proto.cmccdb.Time} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Time, 12));
};


/**
 * @param {?proto.cmccdb.Time|undefined} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
*/
proto.cmccdb.ProductMeasurement.prototype.setRetentionTime = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearRetentionTime = function() {
  return this.setRetentionTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasRetentionTime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional MassSpecMeasurementDetails mass_spec_details = 13;
 * @return {?proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails}
 */
proto.cmccdb.ProductMeasurement.prototype.getMassSpecDetails = function() {
  return /** @type{?proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails, 13));
};


/**
 * @param {?proto.cmccdb.ProductMeasurement.MassSpecMeasurementDetails|undefined} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
*/
proto.cmccdb.ProductMeasurement.prototype.setMassSpecDetails = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearMassSpecDetails = function() {
  return this.setMassSpecDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasMassSpecDetails = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Selectivity selectivity = 14;
 * @return {?proto.cmccdb.ProductMeasurement.Selectivity}
 */
proto.cmccdb.ProductMeasurement.prototype.getSelectivity = function() {
  return /** @type{?proto.cmccdb.ProductMeasurement.Selectivity} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.ProductMeasurement.Selectivity, 14));
};


/**
 * @param {?proto.cmccdb.ProductMeasurement.Selectivity|undefined} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
*/
proto.cmccdb.ProductMeasurement.prototype.setSelectivity = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearSelectivity = function() {
  return this.setSelectivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasSelectivity = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Wavelength wavelength = 15;
 * @return {?proto.cmccdb.Wavelength}
 */
proto.cmccdb.ProductMeasurement.prototype.getWavelength = function() {
  return /** @type{?proto.cmccdb.Wavelength} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Wavelength, 15));
};


/**
 * @param {?proto.cmccdb.Wavelength|undefined} value
 * @return {!proto.cmccdb.ProductMeasurement} returns this
*/
proto.cmccdb.ProductMeasurement.prototype.setWavelength = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ProductMeasurement} returns this
 */
proto.cmccdb.ProductMeasurement.prototype.clearWavelength = function() {
  return this.setWavelength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ProductMeasurement.prototype.hasWavelength = function() {
  return jspb.Message.getField(this, 15) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.DateTime.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.DateTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.DateTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.DateTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.DateTime}
 */
proto.cmccdb.DateTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.DateTime;
  return proto.cmccdb.DateTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.DateTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.DateTime}
 */
proto.cmccdb.DateTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.DateTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.DateTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.DateTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.DateTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.cmccdb.DateTime.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.DateTime} returns this
 */
proto.cmccdb.DateTime.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Analysis.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Analysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Analysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Analysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: jspb.Message.getFieldWithDefault(msg, 2, ""),
    chmoId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isOfIsolatedSpecies: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, proto.cmccdb.Data.toObject) : [],
    instrumentManufacturer: jspb.Message.getFieldWithDefault(msg, 6, ""),
    instrumentLastCalibrated: (f = msg.getInstrumentLastCalibrated()) && proto.cmccdb.DateTime.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Analysis}
 */
proto.cmccdb.Analysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Analysis;
  return proto.cmccdb.Analysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Analysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Analysis}
 */
proto.cmccdb.Analysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.cmccdb.Analysis.AnalysisType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChmoId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOfIsolatedSpecies(value);
      break;
    case 5:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cmccdb.Data.deserializeBinaryFromReader, "", new proto.cmccdb.Data());
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentManufacturer(value);
      break;
    case 7:
      var value = new proto.cmccdb.DateTime;
      reader.readMessage(value,proto.cmccdb.DateTime.deserializeBinaryFromReader);
      msg.setInstrumentLastCalibrated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Analysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Analysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Analysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Analysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChmoId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cmccdb.Data.serializeBinaryToWriter);
  }
  f = message.getInstrumentManufacturer();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInstrumentLastCalibrated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cmccdb.DateTime.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Analysis.AnalysisType = {
  UNSPECIFIED: 0,
  CUSTOM: 1,
  LC: 2,
  GC: 3,
  IR: 4,
  NMR_1H: 5,
  NMR_13C: 6,
  NMR_OTHER: 7,
  MP: 8,
  UV: 9,
  TLC: 10,
  MS: 11,
  HRMS: 12,
  MSMS: 13,
  WEIGHT: 14,
  LCMS: 15,
  GCMS: 16,
  ELSD: 17,
  CD: 18,
  SFC: 19,
  EPR: 20,
  XRD: 21,
  RAMAN: 22,
  ED: 23,
  OPTICAL_ROTATION: 24,
  CAD: 25
};

/**
 * optional AnalysisType type = 1;
 * @return {!proto.cmccdb.Analysis.AnalysisType}
 */
proto.cmccdb.Analysis.prototype.getType = function() {
  return /** @type {!proto.cmccdb.Analysis.AnalysisType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.cmccdb.Analysis.AnalysisType} value
 * @return {!proto.cmccdb.Analysis} returns this
 */
proto.cmccdb.Analysis.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string details = 2;
 * @return {string}
 */
proto.cmccdb.Analysis.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Analysis} returns this
 */
proto.cmccdb.Analysis.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 chmo_id = 3;
 * @return {number}
 */
proto.cmccdb.Analysis.prototype.getChmoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Analysis} returns this
 */
proto.cmccdb.Analysis.prototype.setChmoId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_of_isolated_species = 4;
 * @return {boolean}
 */
proto.cmccdb.Analysis.prototype.getIsOfIsolatedSpecies = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.Analysis} returns this
 */
proto.cmccdb.Analysis.prototype.setIsOfIsolatedSpecies = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Analysis} returns this
 */
proto.cmccdb.Analysis.prototype.clearIsOfIsolatedSpecies = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Analysis.prototype.hasIsOfIsolatedSpecies = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, Data> data = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cmccdb.Data>}
 */
proto.cmccdb.Analysis.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cmccdb.Data>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.cmccdb.Data));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cmccdb.Analysis} returns this
 */
proto.cmccdb.Analysis.prototype.clearDataMap = function() {
  this.getDataMap().clear();
  return this;
};


/**
 * optional string instrument_manufacturer = 6;
 * @return {string}
 */
proto.cmccdb.Analysis.prototype.getInstrumentManufacturer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Analysis} returns this
 */
proto.cmccdb.Analysis.prototype.setInstrumentManufacturer = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional DateTime instrument_last_calibrated = 7;
 * @return {?proto.cmccdb.DateTime}
 */
proto.cmccdb.Analysis.prototype.getInstrumentLastCalibrated = function() {
  return /** @type{?proto.cmccdb.DateTime} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.DateTime, 7));
};


/**
 * @param {?proto.cmccdb.DateTime|undefined} value
 * @return {!proto.cmccdb.Analysis} returns this
*/
proto.cmccdb.Analysis.prototype.setInstrumentLastCalibrated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.Analysis} returns this
 */
proto.cmccdb.Analysis.prototype.clearInstrumentLastCalibrated = function() {
  return this.setInstrumentLastCalibrated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Analysis.prototype.hasInstrumentLastCalibrated = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cmccdb.ReactionProvenance.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.ReactionProvenance.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.ReactionProvenance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.ReactionProvenance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionProvenance.toObject = function(includeInstance, msg) {
  var f, obj = {
    experimenter: (f = msg.getExperimenter()) && proto.cmccdb.Person.toObject(includeInstance, f),
    city: jspb.Message.getFieldWithDefault(msg, 2, ""),
    experimentStart: (f = msg.getExperimentStart()) && proto.cmccdb.DateTime.toObject(includeInstance, f),
    doi: jspb.Message.getFieldWithDefault(msg, 4, ""),
    patent: jspb.Message.getFieldWithDefault(msg, 5, ""),
    publicationUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    recordCreated: (f = msg.getRecordCreated()) && proto.cmccdb.RecordEvent.toObject(includeInstance, f),
    recordModifiedList: jspb.Message.toObjectList(msg.getRecordModifiedList(),
    proto.cmccdb.RecordEvent.toObject, includeInstance),
    reactionMetadataMap: (f = msg.getReactionMetadataMap()) ? f.toObject(includeInstance, proto.cmccdb.Data.toObject) : [],
    isMined: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.ReactionProvenance}
 */
proto.cmccdb.ReactionProvenance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.ReactionProvenance;
  return proto.cmccdb.ReactionProvenance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.ReactionProvenance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.ReactionProvenance}
 */
proto.cmccdb.ReactionProvenance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.Person;
      reader.readMessage(value,proto.cmccdb.Person.deserializeBinaryFromReader);
      msg.setExperimenter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 3:
      var value = new proto.cmccdb.DateTime;
      reader.readMessage(value,proto.cmccdb.DateTime.deserializeBinaryFromReader);
      msg.setExperimentStart(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDoi(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPatent(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicationUrl(value);
      break;
    case 7:
      var value = new proto.cmccdb.RecordEvent;
      reader.readMessage(value,proto.cmccdb.RecordEvent.deserializeBinaryFromReader);
      msg.setRecordCreated(value);
      break;
    case 8:
      var value = new proto.cmccdb.RecordEvent;
      reader.readMessage(value,proto.cmccdb.RecordEvent.deserializeBinaryFromReader);
      msg.addRecordModified(value);
      break;
    case 9:
      var value = msg.getReactionMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.cmccdb.Data.deserializeBinaryFromReader, "", new proto.cmccdb.Data());
         });
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMined(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.ReactionProvenance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.ReactionProvenance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.ReactionProvenance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.ReactionProvenance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExperimenter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.Person.serializeBinaryToWriter
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExperimentStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cmccdb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getDoi();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPatent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPublicationUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRecordCreated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cmccdb.RecordEvent.serializeBinaryToWriter
    );
  }
  f = message.getRecordModifiedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.cmccdb.RecordEvent.serializeBinaryToWriter
    );
  }
  f = message.getReactionMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.cmccdb.Data.serializeBinaryToWriter);
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional Person experimenter = 1;
 * @return {?proto.cmccdb.Person}
 */
proto.cmccdb.ReactionProvenance.prototype.getExperimenter = function() {
  return /** @type{?proto.cmccdb.Person} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Person, 1));
};


/**
 * @param {?proto.cmccdb.Person|undefined} value
 * @return {!proto.cmccdb.ReactionProvenance} returns this
*/
proto.cmccdb.ReactionProvenance.prototype.setExperimenter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.clearExperimenter = function() {
  return this.setExperimenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionProvenance.prototype.hasExperimenter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string city = 2;
 * @return {string}
 */
proto.cmccdb.ReactionProvenance.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DateTime experiment_start = 3;
 * @return {?proto.cmccdb.DateTime}
 */
proto.cmccdb.ReactionProvenance.prototype.getExperimentStart = function() {
  return /** @type{?proto.cmccdb.DateTime} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.DateTime, 3));
};


/**
 * @param {?proto.cmccdb.DateTime|undefined} value
 * @return {!proto.cmccdb.ReactionProvenance} returns this
*/
proto.cmccdb.ReactionProvenance.prototype.setExperimentStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.clearExperimentStart = function() {
  return this.setExperimentStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionProvenance.prototype.hasExperimentStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string doi = 4;
 * @return {string}
 */
proto.cmccdb.ReactionProvenance.prototype.getDoi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.setDoi = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string patent = 5;
 * @return {string}
 */
proto.cmccdb.ReactionProvenance.prototype.getPatent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.setPatent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string publication_url = 6;
 * @return {string}
 */
proto.cmccdb.ReactionProvenance.prototype.getPublicationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.setPublicationUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional RecordEvent record_created = 7;
 * @return {?proto.cmccdb.RecordEvent}
 */
proto.cmccdb.ReactionProvenance.prototype.getRecordCreated = function() {
  return /** @type{?proto.cmccdb.RecordEvent} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.RecordEvent, 7));
};


/**
 * @param {?proto.cmccdb.RecordEvent|undefined} value
 * @return {!proto.cmccdb.ReactionProvenance} returns this
*/
proto.cmccdb.ReactionProvenance.prototype.setRecordCreated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.clearRecordCreated = function() {
  return this.setRecordCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionProvenance.prototype.hasRecordCreated = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated RecordEvent record_modified = 8;
 * @return {!Array<!proto.cmccdb.RecordEvent>}
 */
proto.cmccdb.ReactionProvenance.prototype.getRecordModifiedList = function() {
  return /** @type{!Array<!proto.cmccdb.RecordEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cmccdb.RecordEvent, 8));
};


/**
 * @param {!Array<!proto.cmccdb.RecordEvent>} value
 * @return {!proto.cmccdb.ReactionProvenance} returns this
*/
proto.cmccdb.ReactionProvenance.prototype.setRecordModifiedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.cmccdb.RecordEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cmccdb.RecordEvent}
 */
proto.cmccdb.ReactionProvenance.prototype.addRecordModified = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.cmccdb.RecordEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.clearRecordModifiedList = function() {
  return this.setRecordModifiedList([]);
};


/**
 * map<string, Data> reaction_metadata = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.cmccdb.Data>}
 */
proto.cmccdb.ReactionProvenance.prototype.getReactionMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.cmccdb.Data>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      proto.cmccdb.Data));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.clearReactionMetadataMap = function() {
  this.getReactionMetadataMap().clear();
  return this;
};


/**
 * optional bool is_mined = 10;
 * @return {boolean}
 */
proto.cmccdb.ReactionProvenance.prototype.getIsMined = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.setIsMined = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.ReactionProvenance} returns this
 */
proto.cmccdb.ReactionProvenance.prototype.clearIsMined = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.ReactionProvenance.prototype.hasIsMined = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Person.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Person.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orcid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    organization: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Person}
 */
proto.cmccdb.Person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Person;
  return proto.cmccdb.Person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Person}
 */
proto.cmccdb.Person.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrcid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganization(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Person.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrcid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrganization();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.cmccdb.Person.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Person} returns this
 */
proto.cmccdb.Person.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.cmccdb.Person.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Person} returns this
 */
proto.cmccdb.Person.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string orcid = 3;
 * @return {string}
 */
proto.cmccdb.Person.prototype.getOrcid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Person} returns this
 */
proto.cmccdb.Person.prototype.setOrcid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string organization = 4;
 * @return {string}
 */
proto.cmccdb.Person.prototype.getOrganization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Person} returns this
 */
proto.cmccdb.Person.prototype.setOrganization = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.cmccdb.Person.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Person} returns this
 */
proto.cmccdb.Person.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.RecordEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.RecordEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.RecordEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.RecordEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && proto.cmccdb.DateTime.toObject(includeInstance, f),
    person: (f = msg.getPerson()) && proto.cmccdb.Person.toObject(includeInstance, f),
    details: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.RecordEvent}
 */
proto.cmccdb.RecordEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.RecordEvent;
  return proto.cmccdb.RecordEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.RecordEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.RecordEvent}
 */
proto.cmccdb.RecordEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cmccdb.DateTime;
      reader.readMessage(value,proto.cmccdb.DateTime.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = new proto.cmccdb.Person;
      reader.readMessage(value,proto.cmccdb.Person.deserializeBinaryFromReader);
      msg.setPerson(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.RecordEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.RecordEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.RecordEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.RecordEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cmccdb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getPerson();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cmccdb.Person.serializeBinaryToWriter
    );
  }
  f = message.getDetails();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional DateTime time = 1;
 * @return {?proto.cmccdb.DateTime}
 */
proto.cmccdb.RecordEvent.prototype.getTime = function() {
  return /** @type{?proto.cmccdb.DateTime} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.DateTime, 1));
};


/**
 * @param {?proto.cmccdb.DateTime|undefined} value
 * @return {!proto.cmccdb.RecordEvent} returns this
*/
proto.cmccdb.RecordEvent.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.RecordEvent} returns this
 */
proto.cmccdb.RecordEvent.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.RecordEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Person person = 2;
 * @return {?proto.cmccdb.Person}
 */
proto.cmccdb.RecordEvent.prototype.getPerson = function() {
  return /** @type{?proto.cmccdb.Person} */ (
    jspb.Message.getWrapperField(this, proto.cmccdb.Person, 2));
};


/**
 * @param {?proto.cmccdb.Person|undefined} value
 * @return {!proto.cmccdb.RecordEvent} returns this
*/
proto.cmccdb.RecordEvent.prototype.setPerson = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cmccdb.RecordEvent} returns this
 */
proto.cmccdb.RecordEvent.prototype.clearPerson = function() {
  return this.setPerson(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.RecordEvent.prototype.hasPerson = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.cmccdb.RecordEvent.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.RecordEvent} returns this
 */
proto.cmccdb.RecordEvent.prototype.setDetails = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Time.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Time.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Time} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Time.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Time}
 */
proto.cmccdb.Time.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Time;
  return proto.cmccdb.Time.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Time} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Time}
 */
proto.cmccdb.Time.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Time.TimeUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Time.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Time.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Time} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Time.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Time.TimeUnit = {
  UNSPECIFIED: 0,
  DAY: 4,
  HOUR: 1,
  MINUTE: 2,
  SECOND: 3
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Time.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Time} returns this
 */
proto.cmccdb.Time.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Time} returns this
 */
proto.cmccdb.Time.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Time.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Time.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Time} returns this
 */
proto.cmccdb.Time.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Time} returns this
 */
proto.cmccdb.Time.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Time.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TimeUnit units = 3;
 * @return {!proto.cmccdb.Time.TimeUnit}
 */
proto.cmccdb.Time.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Time.TimeUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Time.TimeUnit} value
 * @return {!proto.cmccdb.Time} returns this
 */
proto.cmccdb.Time.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Force.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Force.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Force} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Force.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Force}
 */
proto.cmccdb.Force.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Force;
  return proto.cmccdb.Force.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Force} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Force}
 */
proto.cmccdb.Force.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Force.ForceUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Force.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Force.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Force} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Force.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Force.ForceUnit = {
  UNSPECIFIED: 0,
  NEWTON: 1,
  MILLINEWTON: 2
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Force.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Force} returns this
 */
proto.cmccdb.Force.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Force} returns this
 */
proto.cmccdb.Force.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Force.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Force.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Force} returns this
 */
proto.cmccdb.Force.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Force} returns this
 */
proto.cmccdb.Force.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Force.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ForceUnit units = 3;
 * @return {!proto.cmccdb.Force.ForceUnit}
 */
proto.cmccdb.Force.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Force.ForceUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Force.ForceUnit} value
 * @return {!proto.cmccdb.Force} returns this
 */
proto.cmccdb.Force.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Frequency.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Frequency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Frequency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Frequency.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Frequency}
 */
proto.cmccdb.Frequency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Frequency;
  return proto.cmccdb.Frequency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Frequency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Frequency}
 */
proto.cmccdb.Frequency.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Frequency.FrequencyUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Frequency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Frequency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Frequency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Frequency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Frequency.FrequencyUnit = {
  UNSPECIFIED: 0,
  HERTZ: 1,
  RPM: 2
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Frequency.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Frequency} returns this
 */
proto.cmccdb.Frequency.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Frequency} returns this
 */
proto.cmccdb.Frequency.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Frequency.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Frequency.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Frequency} returns this
 */
proto.cmccdb.Frequency.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Frequency} returns this
 */
proto.cmccdb.Frequency.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Frequency.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FrequencyUnit units = 3;
 * @return {!proto.cmccdb.Frequency.FrequencyUnit}
 */
proto.cmccdb.Frequency.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Frequency.FrequencyUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Frequency.FrequencyUnit} value
 * @return {!proto.cmccdb.Frequency} returns this
 */
proto.cmccdb.Frequency.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Mass.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Mass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Mass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Mass.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Mass}
 */
proto.cmccdb.Mass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Mass;
  return proto.cmccdb.Mass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Mass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Mass}
 */
proto.cmccdb.Mass.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Mass.MassUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Mass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Mass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Mass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Mass.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Mass.MassUnit = {
  UNSPECIFIED: 0,
  KILOGRAM: 1,
  GRAM: 2,
  MILLIGRAM: 3,
  MICROGRAM: 4
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Mass.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Mass} returns this
 */
proto.cmccdb.Mass.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Mass} returns this
 */
proto.cmccdb.Mass.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Mass.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Mass.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Mass} returns this
 */
proto.cmccdb.Mass.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Mass} returns this
 */
proto.cmccdb.Mass.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Mass.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MassUnit units = 3;
 * @return {!proto.cmccdb.Mass.MassUnit}
 */
proto.cmccdb.Mass.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Mass.MassUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Mass.MassUnit} value
 * @return {!proto.cmccdb.Mass} returns this
 */
proto.cmccdb.Mass.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Moles.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Moles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Moles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Moles.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Moles}
 */
proto.cmccdb.Moles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Moles;
  return proto.cmccdb.Moles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Moles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Moles}
 */
proto.cmccdb.Moles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Moles.MolesUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Moles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Moles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Moles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Moles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Moles.MolesUnit = {
  UNSPECIFIED: 0,
  MOLE: 1,
  MILLIMOLE: 2,
  MICROMOLE: 3,
  NANOMOLE: 4
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Moles.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Moles} returns this
 */
proto.cmccdb.Moles.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Moles} returns this
 */
proto.cmccdb.Moles.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Moles.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Moles.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Moles} returns this
 */
proto.cmccdb.Moles.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Moles} returns this
 */
proto.cmccdb.Moles.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Moles.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MolesUnit units = 3;
 * @return {!proto.cmccdb.Moles.MolesUnit}
 */
proto.cmccdb.Moles.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Moles.MolesUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Moles.MolesUnit} value
 * @return {!proto.cmccdb.Moles} returns this
 */
proto.cmccdb.Moles.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Volume.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Volume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Volume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Volume.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Volume}
 */
proto.cmccdb.Volume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Volume;
  return proto.cmccdb.Volume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Volume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Volume}
 */
proto.cmccdb.Volume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Volume.VolumeUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Volume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Volume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Volume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Volume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Volume.VolumeUnit = {
  UNSPECIFIED: 0,
  LITER: 1,
  MILLILITER: 2,
  MICROLITER: 3,
  NANOLITER: 4
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Volume.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Volume} returns this
 */
proto.cmccdb.Volume.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Volume} returns this
 */
proto.cmccdb.Volume.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Volume.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Volume.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Volume} returns this
 */
proto.cmccdb.Volume.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Volume} returns this
 */
proto.cmccdb.Volume.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Volume.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VolumeUnit units = 3;
 * @return {!proto.cmccdb.Volume.VolumeUnit}
 */
proto.cmccdb.Volume.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Volume.VolumeUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Volume.VolumeUnit} value
 * @return {!proto.cmccdb.Volume} returns this
 */
proto.cmccdb.Volume.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Concentration.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Concentration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Concentration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Concentration.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Concentration}
 */
proto.cmccdb.Concentration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Concentration;
  return proto.cmccdb.Concentration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Concentration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Concentration}
 */
proto.cmccdb.Concentration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Concentration.ConcentrationUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Concentration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Concentration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Concentration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Concentration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Concentration.ConcentrationUnit = {
  UNSPECIFIED: 0,
  MOLAR: 1,
  MILLIMOLAR: 2,
  MICROMOLAR: 3
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Concentration.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Concentration} returns this
 */
proto.cmccdb.Concentration.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Concentration} returns this
 */
proto.cmccdb.Concentration.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Concentration.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Concentration.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Concentration} returns this
 */
proto.cmccdb.Concentration.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Concentration} returns this
 */
proto.cmccdb.Concentration.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Concentration.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ConcentrationUnit units = 3;
 * @return {!proto.cmccdb.Concentration.ConcentrationUnit}
 */
proto.cmccdb.Concentration.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Concentration.ConcentrationUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Concentration.ConcentrationUnit} value
 * @return {!proto.cmccdb.Concentration} returns this
 */
proto.cmccdb.Concentration.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Pressure.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Pressure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Pressure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Pressure.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Pressure}
 */
proto.cmccdb.Pressure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Pressure;
  return proto.cmccdb.Pressure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Pressure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Pressure}
 */
proto.cmccdb.Pressure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Pressure.PressureUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Pressure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Pressure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Pressure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Pressure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Pressure.PressureUnit = {
  UNSPECIFIED: 0,
  BAR: 1,
  ATMOSPHERE: 2,
  PSI: 3,
  KPSI: 4,
  PASCAL: 5,
  KILOPASCAL: 6,
  TORR: 7,
  MM_HG: 8
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Pressure.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Pressure} returns this
 */
proto.cmccdb.Pressure.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Pressure} returns this
 */
proto.cmccdb.Pressure.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Pressure.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Pressure.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Pressure} returns this
 */
proto.cmccdb.Pressure.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Pressure} returns this
 */
proto.cmccdb.Pressure.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Pressure.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PressureUnit units = 3;
 * @return {!proto.cmccdb.Pressure.PressureUnit}
 */
proto.cmccdb.Pressure.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Pressure.PressureUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Pressure.PressureUnit} value
 * @return {!proto.cmccdb.Pressure} returns this
 */
proto.cmccdb.Pressure.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Temperature.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Temperature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Temperature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Temperature.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Temperature}
 */
proto.cmccdb.Temperature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Temperature;
  return proto.cmccdb.Temperature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Temperature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Temperature}
 */
proto.cmccdb.Temperature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Temperature.TemperatureUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Temperature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Temperature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Temperature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Temperature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Temperature.TemperatureUnit = {
  UNSPECIFIED: 0,
  CELSIUS: 1,
  FAHRENHEIT: 2,
  KELVIN: 3
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Temperature.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Temperature} returns this
 */
proto.cmccdb.Temperature.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Temperature} returns this
 */
proto.cmccdb.Temperature.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Temperature.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Temperature.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Temperature} returns this
 */
proto.cmccdb.Temperature.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Temperature} returns this
 */
proto.cmccdb.Temperature.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Temperature.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TemperatureUnit units = 3;
 * @return {!proto.cmccdb.Temperature.TemperatureUnit}
 */
proto.cmccdb.Temperature.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Temperature.TemperatureUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Temperature.TemperatureUnit} value
 * @return {!proto.cmccdb.Temperature} returns this
 */
proto.cmccdb.Temperature.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Current.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Current.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Current} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Current.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Current}
 */
proto.cmccdb.Current.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Current;
  return proto.cmccdb.Current.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Current} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Current}
 */
proto.cmccdb.Current.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Current.CurrentUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Current.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Current.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Current} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Current.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Current.CurrentUnit = {
  UNSPECIFIED: 0,
  AMPERE: 1,
  MILLIAMPERE: 2
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Current.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Current} returns this
 */
proto.cmccdb.Current.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Current} returns this
 */
proto.cmccdb.Current.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Current.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Current.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Current} returns this
 */
proto.cmccdb.Current.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Current} returns this
 */
proto.cmccdb.Current.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Current.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CurrentUnit units = 3;
 * @return {!proto.cmccdb.Current.CurrentUnit}
 */
proto.cmccdb.Current.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Current.CurrentUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Current.CurrentUnit} value
 * @return {!proto.cmccdb.Current} returns this
 */
proto.cmccdb.Current.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Voltage.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Voltage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Voltage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Voltage.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Voltage}
 */
proto.cmccdb.Voltage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Voltage;
  return proto.cmccdb.Voltage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Voltage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Voltage}
 */
proto.cmccdb.Voltage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Voltage.VoltageUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Voltage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Voltage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Voltage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Voltage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Voltage.VoltageUnit = {
  UNSPECIFIED: 0,
  VOLT: 1,
  MILLIVOLT: 2
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Voltage.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Voltage} returns this
 */
proto.cmccdb.Voltage.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Voltage} returns this
 */
proto.cmccdb.Voltage.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Voltage.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Voltage.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Voltage} returns this
 */
proto.cmccdb.Voltage.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Voltage} returns this
 */
proto.cmccdb.Voltage.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Voltage.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VoltageUnit units = 3;
 * @return {!proto.cmccdb.Voltage.VoltageUnit}
 */
proto.cmccdb.Voltage.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Voltage.VoltageUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Voltage.VoltageUnit} value
 * @return {!proto.cmccdb.Voltage} returns this
 */
proto.cmccdb.Voltage.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Length.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Length.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Length} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Length.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Length}
 */
proto.cmccdb.Length.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Length;
  return proto.cmccdb.Length.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Length} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Length}
 */
proto.cmccdb.Length.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Length.LengthUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Length.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Length.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Length} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Length.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Length.LengthUnit = {
  UNSPECIFIED: 0,
  CENTIMETER: 1,
  MILLIMETER: 2,
  METER: 3,
  INCH: 4,
  FOOT: 5
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Length.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Length} returns this
 */
proto.cmccdb.Length.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Length} returns this
 */
proto.cmccdb.Length.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Length.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Length.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Length} returns this
 */
proto.cmccdb.Length.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Length} returns this
 */
proto.cmccdb.Length.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Length.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LengthUnit units = 3;
 * @return {!proto.cmccdb.Length.LengthUnit}
 */
proto.cmccdb.Length.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Length.LengthUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Length.LengthUnit} value
 * @return {!proto.cmccdb.Length} returns this
 */
proto.cmccdb.Length.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Wavelength.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Wavelength.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Wavelength} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Wavelength.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Wavelength}
 */
proto.cmccdb.Wavelength.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Wavelength;
  return proto.cmccdb.Wavelength.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Wavelength} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Wavelength}
 */
proto.cmccdb.Wavelength.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.Wavelength.WavelengthUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Wavelength.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Wavelength.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Wavelength} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Wavelength.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.Wavelength.WavelengthUnit = {
  UNSPECIFIED: 0,
  NANOMETER: 1,
  WAVENUMBER: 2
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Wavelength.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Wavelength} returns this
 */
proto.cmccdb.Wavelength.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Wavelength} returns this
 */
proto.cmccdb.Wavelength.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Wavelength.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Wavelength.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Wavelength} returns this
 */
proto.cmccdb.Wavelength.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Wavelength} returns this
 */
proto.cmccdb.Wavelength.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Wavelength.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WavelengthUnit units = 3;
 * @return {!proto.cmccdb.Wavelength.WavelengthUnit}
 */
proto.cmccdb.Wavelength.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.Wavelength.WavelengthUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.Wavelength.WavelengthUnit} value
 * @return {!proto.cmccdb.Wavelength} returns this
 */
proto.cmccdb.Wavelength.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.FlowRate.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.FlowRate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.FlowRate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.FlowRate.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    units: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.FlowRate}
 */
proto.cmccdb.FlowRate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.FlowRate;
  return proto.cmccdb.FlowRate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.FlowRate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.FlowRate}
 */
proto.cmccdb.FlowRate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {!proto.cmccdb.FlowRate.FlowRateUnit} */ (reader.readEnum());
      msg.setUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.FlowRate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.FlowRate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.FlowRate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.FlowRate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUnits();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cmccdb.FlowRate.FlowRateUnit = {
  UNSPECIFIED: 0,
  MICROLITER_PER_MINUTE: 1,
  MICROLITER_PER_SECOND: 2,
  MILLILITER_PER_MINUTE: 3,
  MILLILITER_PER_SECOND: 4,
  MICROLITER_PER_HOUR: 5
};

/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.FlowRate.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.FlowRate} returns this
 */
proto.cmccdb.FlowRate.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.FlowRate} returns this
 */
proto.cmccdb.FlowRate.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.FlowRate.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.FlowRate.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.FlowRate} returns this
 */
proto.cmccdb.FlowRate.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.FlowRate} returns this
 */
proto.cmccdb.FlowRate.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.FlowRate.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FlowRateUnit units = 3;
 * @return {!proto.cmccdb.FlowRate.FlowRateUnit}
 */
proto.cmccdb.FlowRate.prototype.getUnits = function() {
  return /** @type {!proto.cmccdb.FlowRate.FlowRateUnit} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cmccdb.FlowRate.FlowRateUnit} value
 * @return {!proto.cmccdb.FlowRate} returns this
 */
proto.cmccdb.FlowRate.prototype.setUnits = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Percentage.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Percentage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Percentage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Percentage.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Percentage}
 */
proto.cmccdb.Percentage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Percentage;
  return proto.cmccdb.Percentage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Percentage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Percentage}
 */
proto.cmccdb.Percentage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Percentage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Percentage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Percentage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Percentage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.Percentage.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Percentage} returns this
 */
proto.cmccdb.Percentage.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Percentage} returns this
 */
proto.cmccdb.Percentage.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Percentage.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.Percentage.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Percentage} returns this
 */
proto.cmccdb.Percentage.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Percentage} returns this
 */
proto.cmccdb.Percentage.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Percentage.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.FloatValue.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.FloatValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.FloatValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.FloatValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.FloatValue}
 */
proto.cmccdb.FloatValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.FloatValue;
  return proto.cmccdb.FloatValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.FloatValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.FloatValue}
 */
proto.cmccdb.FloatValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.FloatValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.FloatValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.FloatValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.FloatValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.cmccdb.FloatValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.FloatValue} returns this
 */
proto.cmccdb.FloatValue.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.FloatValue} returns this
 */
proto.cmccdb.FloatValue.prototype.clearValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.FloatValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float precision = 2;
 * @return {number}
 */
proto.cmccdb.FloatValue.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.FloatValue} returns this
 */
proto.cmccdb.FloatValue.prototype.setPrecision = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.FloatValue} returns this
 */
proto.cmccdb.FloatValue.prototype.clearPrecision = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.FloatValue.prototype.hasPrecision = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cmccdb.Data.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.cmccdb.Data.KindCase = {
  KIND_NOT_SET: 0,
  FLOAT_VALUE: 1,
  INTEGER_VALUE: 2,
  BYTES_VALUE: 3,
  STRING_VALUE: 4,
  URL: 5
};

/**
 * @return {proto.cmccdb.Data.KindCase}
 */
proto.cmccdb.Data.prototype.getKindCase = function() {
  return /** @type {proto.cmccdb.Data.KindCase} */(jspb.Message.computeOneofCase(this, proto.cmccdb.Data.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cmccdb.Data.prototype.toObject = function(opt_includeInstance) {
  return proto.cmccdb.Data.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cmccdb.Data} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Data.toObject = function(includeInstance, msg) {
  var f, obj = {
    floatValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    integerValue: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bytesValue: msg.getBytesValue_asB64(),
    stringValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
    url: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    format: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cmccdb.Data}
 */
proto.cmccdb.Data.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cmccdb.Data;
  return proto.cmccdb.Data.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cmccdb.Data} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cmccdb.Data}
 */
proto.cmccdb.Data.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloatValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntegerValue(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytesValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cmccdb.Data.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cmccdb.Data.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cmccdb.Data} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cmccdb.Data.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional float float_value = 1;
 * @return {number}
 */
proto.cmccdb.Data.prototype.getFloatValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.setFloatValue = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.cmccdb.Data.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.clearFloatValue = function() {
  return jspb.Message.setOneofField(this, 1, proto.cmccdb.Data.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Data.prototype.hasFloatValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 integer_value = 2;
 * @return {number}
 */
proto.cmccdb.Data.prototype.getIntegerValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.setIntegerValue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.cmccdb.Data.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.clearIntegerValue = function() {
  return jspb.Message.setOneofField(this, 2, proto.cmccdb.Data.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Data.prototype.hasIntegerValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes bytes_value = 3;
 * @return {!(string|Uint8Array)}
 */
proto.cmccdb.Data.prototype.getBytesValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes bytes_value = 3;
 * This is a type-conversion wrapper around `getBytesValue()`
 * @return {string}
 */
proto.cmccdb.Data.prototype.getBytesValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytesValue()));
};


/**
 * optional bytes bytes_value = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesValue()`
 * @return {!Uint8Array}
 */
proto.cmccdb.Data.prototype.getBytesValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytesValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.setBytesValue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.cmccdb.Data.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.clearBytesValue = function() {
  return jspb.Message.setOneofField(this, 3, proto.cmccdb.Data.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Data.prototype.hasBytesValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string string_value = 4;
 * @return {string}
 */
proto.cmccdb.Data.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.cmccdb.Data.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 4, proto.cmccdb.Data.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Data.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.cmccdb.Data.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.setUrl = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.cmccdb.Data.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.clearUrl = function() {
  return jspb.Message.setOneofField(this, 5, proto.cmccdb.Data.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cmccdb.Data.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.cmccdb.Data.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string format = 7;
 * @return {string}
 */
proto.cmccdb.Data.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.cmccdb.Data} returns this
 */
proto.cmccdb.Data.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


goog.object.extend(exports, proto.cmccdb);
