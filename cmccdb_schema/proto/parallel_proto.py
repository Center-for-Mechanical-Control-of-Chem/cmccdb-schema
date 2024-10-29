
import enum, dataclasses

__all__ = [
 "ReactionIdentifierType", "AdditionSpeedType", "AdditionDeviceType", "UnmeasuredAmountType", "TextureType", "ReactionRoleType", "CompoundPreparationType", "CompoundIdentifierType",
 "VesselType", "VesselMaterialType", "VesselAttachmentType", "VesselPreparationType", "ReactionEnvironmentType", "TemperatureControlType", "TemperatureMeasurementType", "PressureControlType",
 "AtmosphereType", "PressureMeasurementType", "StirringMethodType", "StirringRateType", "IlluminationType", "ElectrochemistryType", "ElectrochemistryCellType", "MechanochemistryType",
 "FlowType", "TubingType", "ReactionWorkupType", "ProductMeasurementType", "MassSpecMeasurementType", "SelectivityType", "AnalysisType", "TimeUnit",
 "ForceUnit", "FrequencyUnit", "MassUnit", "MolesUnit", "VolumeUnit", "ConcentrationUnit", "PressureUnit", "TemperatureUnit",
 "CurrentUnit", "VoltageUnit", "LengthUnit", "WavelengthUnit", "FlowRateUnit", "TypeTagUnion_massmolesvolumeunmeasured", "TypeTagUnion_percentagefloat_valuestr_valueamount", "TypeTagUnion_float_valueinteger_valuebytes_valuestr_valueurl",
 "Reaction", "ReactionIdentifier", "ReactionInput", "AdditionSpeed", "AdditionDevice", "Amount", "UnmeasuredAmount", "Texture",
 "CrudeComponent", "Compound", "Source", "CompoundPreparation", "CompoundIdentifier", "Vessel", "VesselMaterial", "VesselAttachment",
 "VesselPreparation", "ReactionSetup", "ReactionEnvironment", "ReactionConditions", "TemperatureConditions", "TemperatureControl", "TemperatureMeasurement", "PressureConditions",
 "PressureControl", "Atmosphere", "PressureMeasurement", "StirringConditions", "StirringRate", "IlluminationConditions", "ElectrochemistryConditions", "ElectrochemistryMeasurement",
 "ElectrochemistryCell", "MechanochemistryConditions", "FlowConditions", "Tubing", "ReactionNotes", "ReactionObservation", "ReactionWorkup", "ReactionOutcome",
 "ProductCompound", "ProductMeasurement", "MassSpecMeasurementDetails", "Selectivity", "DateTime", "Analysis", "ReactionProvenance", "Person",
 "RecordEvent", "Time", "Force", "Frequency", "Mass", "Moles", "Volume", "Concentration",
 "Pressure", "Temperature", "Current", "Voltage", "Length", "Wavelength", "FlowRate", "Percentage",
 "FloatValue", "Data"
]

class OneOfType:
    ...

class ReactionIdentifierType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  REACTION_SMILES = "reaction_smiles"
  REACTION_CXSMILES = "reaction_cxsmiles"
  RDFILE = "rdfile"
  RINCHI = "rinchi"
  REACTION_TYPE = "reaction_type"

class AdditionSpeedType(enum.Enum):
  UNSPECIFIED = "unspecified"
  ALL_AT_ONCE = "all_at_once"
  FAST = "fast"
  SLOW = "slow"
  DROPWISE = "dropwise"
  CONTINUOUS = "continuous"
  PORTIONWISE = "portionwise"

class AdditionDeviceType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  NONE = "none"
  SYRINGE = "syringe"
  CANNULA = "cannula"
  ADDITION_FUNNEL = "addition_funnel"
  PIPETTE = "pipette"
  POSITIVE_DISPLACEMENT_PIPETTE = "positive_displacement_pipette"

class UnmeasuredAmountType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  SATURATED = "saturated"
  CATALYTIC = "catalytic"
  TITRATED = "titrated"

class TextureType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  POWDER = "powder"
  CRYSTAL = "crystal"
  OIL = "oil"
  AMORPHOUS_SOLID = "amorphous_solid"
  FOAM = "foam"
  WAX = "wax"
  SEMI_SOLID = "semi_solid"
  SOLID = "solid"
  LIQUID = "liquid"
  GAS = "gas"

class ReactionRoleType(enum.Enum):
  UNSPECIFIED = "unspecified"
  REACTANT = "reactant"
  REAGENT = "reagent"
  SOLVENT = "solvent"
  CATALYST = "catalyst"
  WORKUP = "workup"
  INTERNAL_STANDARD = "internal_standard"
  AUTHENTIC_STANDARD = "authentic_standard"
  PRODUCT = "product"
  BYPRODUCT = "byproduct"
  SIDE_PRODUCT = "side_product"

class CompoundPreparationType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  NONE = "none"
  REPURIFIED = "repurified"
  SPARGED = "sparged"
  DRIED = "dried"
  SYNTHESIZED = "synthesized"

class CompoundIdentifierType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  SMILES = "smiles"
  INCHI = "inchi"
  MOLBLOCK = "molblock"
  IUPAC_NAME = "iupac_name"
  NAME = "name"
  CAS_NUMBER = "cas_number"
  PUBCHEM_CID = "pubchem_cid"
  CHEMSPIDER_ID = "chemspider_id"
  CXSMILES = "cxsmiles"
  INCHI_KEY = "inchi_key"
  XYZ = "xyz"
  UNIPROT_ID = "uniprot_id"
  PDB_ID = "pdb_id"
  AMINO_ACID_SEQUENCE = "amino_acid_sequence"
  HELM = "helm"
  MDL = "mdl"

class VesselType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  ROUND_BOTTOM_FLASK = "round_bottom_flask"
  VIAL = "vial"
  WELL_PLATE = "well_plate"
  MICROWAVE_VIAL = "microwave_vial"
  TUBE = "tube"
  CONTINUOUS_STIRRED_TANK_REACTOR = "continuous_stirred_tank_reactor"
  PACKED_BED_REACTOR = "packed_bed_reactor"
  NMR_TUBE = "nmr_tube"
  PRESSURE_FLASK = "pressure_flask"
  PRESSURE_REACTOR = "pressure_reactor"
  ELECTROCHEMICAL_CELL = "electrochemical_cell"
  BALL = "ball"

class VesselMaterialType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  GLASS = "glass"
  POLYPROPYLENE = "polypropylene"
  PLASTIC = "plastic"
  METAL = "metal"
  QUARTZ = "quartz"

class VesselAttachmentType(enum.Enum):
  UNSPECIFIED = "unspecified"
  NONE = "none"
  CUSTOM = "custom"
  SEPTUM = "septum"
  CAP = "cap"
  MAT = "mat"
  REFLUX_CONDENSER = "reflux_condenser"
  VENT_NEEDLE = "vent_needle"
  DEAN_STARK = "dean_stark"
  VACUUM_TUBE = "vacuum_tube"
  ADDITION_FUNNEL = "addition_funnel"
  DRYING_TUBE = "drying_tube"
  ALUMINUM_FOIL = "aluminum_foil"
  THERMOCOUPLE = "thermocouple"
  BALLOON = "balloon"
  GAS_ADAPTER = "gas_adapter"
  PRESSURE_REGULATOR = "pressure_regulator"
  RELEASE_VALVE = "release_valve"

class VesselPreparationType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  NONE = "none"
  OVEN_DRIED = "oven_dried"
  FLAME_DRIED = "flame_dried"
  EVACUATED_BACKFILLED = "evacuated_backfilled"
  PURGED = "purged"

class ReactionEnvironmentType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  FUME_HOOD = "fume_hood"
  BENCH_TOP = "bench_top"
  GLOVE_BOX = "glove_box"
  GLOVE_BAG = "glove_bag"

class TemperatureControlType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  AMBIENT = "ambient"
  OIL_BATH = "oil_bath"
  WATER_BATH = "water_bath"
  SAND_BATH = "sand_bath"
  ICE_BATH = "ice_bath"
  DRY_ALUMINUM_PLATE = "dry_aluminum_plate"
  MICROWAVE = "microwave"
  DRY_ICE_BATH = "dry_ice_bath"
  AIR_FAN = "air_fan"
  LIQUID_NITROGEN = "liquid_nitrogen"

class TemperatureMeasurementType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  THERMOCOUPLE_INTERNAL = "thermocouple_internal"
  THERMOCOUPLE_EXTERNAL = "thermocouple_external"
  INFRARED = "infrared"

class PressureControlType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  AMBIENT = "ambient"
  SLIGHT_POSITIVE = "slight_positive"
  SEALED = "sealed"
  PRESSURIZED = "pressurized"

class AtmosphereType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  AIR = "air"
  NITROGEN = "nitrogen"
  ARGON = "argon"
  OXYGEN = "oxygen"
  HYDROGEN = "hydrogen"
  CARBON_MONOXIDE = "carbon_monoxide"
  CARBON_DIOXIDE = "carbon_dioxide"
  METHANE = "methane"
  AMMONIA = "ammonia"
  OZONE = "ozone"
  ETHYLENE = "ethylene"
  ACETYLENE = "acetylene"

class PressureMeasurementType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  PRESSURE_TRANSDUCER = "pressure_transducer"

class StirringMethodType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  NONE = "none"
  STIR_BAR = "stir_bar"
  OVERHEAD_MIXER = "overhead_mixer"
  AGITATION = "agitation"
  BALL_MILLING = "ball_milling"
  SONICATION = "sonication"

class StirringRateType(enum.Enum):
  UNSPECIFIED = "unspecified"
  HIGH = "high"
  MEDIUM = "medium"
  LOW = "low"

class IlluminationType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  AMBIENT = "ambient"
  DARK = "dark"
  LED = "led"
  HALOGEN_LAMP = "halogen_lamp"
  DEUTERIUM_LAMP = "deuterium_lamp"
  SOLAR_SIMULATOR = "solar_simulator"
  BROAD_SPECTRUM = "broad_spectrum"

class ElectrochemistryType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  CONSTANT_CURRENT = "constant_current"
  CONSTANT_VOLTAGE = "constant_voltage"

class ElectrochemistryCellType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  DIVIDED_CELL = "divided_cell"
  UNDIVIDED_CELL = "undivided_cell"

class MechanochemistryType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  TIP_ARRAY = "tip_array"
  BALL_MILL = "ball_mill"
  HAND_GRIND = "hand_grind"
  TWIN_SCREW = "twin_screw"
  ANVIL_CELL = "anvil_cell"

class FlowType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  PLUG_FLOW_REACTOR = "plug_flow_reactor"
  CONTINUOUS_STIRRED_TANK_REACTOR = "continuous_stirred_tank_reactor"
  PACKED_BED_REACTOR = "packed_bed_reactor"

class TubingType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  STEEL = "steel"
  COPPER = "copper"
  PFA = "pfa"
  FEP = "fep"
  TEFLONAF = "teflonaf"
  PTFE = "ptfe"
  GLASS = "glass"
  QUARTZ = "quartz"
  SILICON = "silicon"
  PDMS = "pdms"

class ReactionWorkupType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  ADDITION = "addition"
  ALIQUOT = "aliquot"
  TEMPERATURE = "temperature"
  CONCENTRATION = "concentration"
  EXTRACTION = "extraction"
  FILTRATION = "filtration"
  WASH = "wash"
  DRY_IN_VACUUM = "dry_in_vacuum"
  DRY_WITH_MATERIAL = "dry_with_material"
  FLASH_CHROMATOGRAPHY = "flash_chromatography"
  OTHER_CHROMATOGRAPHY = "other_chromatography"
  SCAVENGING = "scavenging"
  WAIT = "wait"
  STIRRING = "stirring"
  PH_ADJUST = "ph_adjust"
  DISSOLUTION = "dissolution"
  DISTILLATION = "distillation"

class ProductMeasurementType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  IDENTITY = "identity"
  YIELD = "yield"
  SELECTIVITY = "selectivity"
  PURITY = "purity"
  AREA = "area"
  COUNTS = "counts"
  INTENSITY = "intensity"
  AMOUNT = "amount"

class MassSpecMeasurementType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  TIC = "tic"
  TIC_POSITIVE = "tic_positive"
  TIC_NEGATIVE = "tic_negative"
  EIC = "eic"

class SelectivityType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  EE = "ee"
  ER = "er"
  DR = "dr"
  EZ = "ez"
  ZE = "ze"

class AnalysisType(enum.Enum):
  UNSPECIFIED = "unspecified"
  CUSTOM = "custom"
  LC = "lc"
  GC = "gc"
  IR = "ir"
  NMR_1H = "nmr_1h"
  NMR_13C = "nmr_13c"
  NMR_OTHER = "nmr_other"
  MP = "mp"
  UV = "uv"
  TLC = "tlc"
  MS = "ms"
  HRMS = "hrms"
  MSMS = "msms"
  WEIGHT = "weight"
  LCMS = "lcms"
  GCMS = "gcms"
  ELSD = "elsd"
  CD = "cd"
  SFC = "sfc"
  EPR = "epr"
  XRD = "xrd"
  RAMAN = "raman"
  ED = "ed"
  OPTICAL_ROTATION = "optical_rotation"
  CAD = "cad"

class TimeUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  DAY = "day"
  HOUR = "hour"
  MINUTE = "minute"
  SECOND = "second"

class ForceUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  NEWTON = "newton"
  MILLINEWTON = "millinewton"

class FrequencyUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  HERTZ = "hertz"
  RPM = "rpm"

class MassUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  KILOGRAM = "kilogram"
  GRAM = "gram"
  MILLIGRAM = "milligram"
  MICROGRAM = "microgram"

class MolesUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  MOLE = "mole"
  MILLIMOLE = "millimole"
  MICROMOLE = "micromole"
  NANOMOLE = "nanomole"

class VolumeUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  LITER = "liter"
  MILLILITER = "milliliter"
  MICROLITER = "microliter"
  NANOLITER = "nanoliter"

class ConcentrationUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  MOLAR = "molar"
  MILLIMOLAR = "millimolar"
  MICROMOLAR = "micromolar"

class PressureUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  BAR = "bar"
  ATMOSPHERE = "atmosphere"
  PSI = "psi"
  KPSI = "kpsi"
  PASCAL = "pascal"
  KILOPASCAL = "kilopascal"
  TORR = "torr"
  MM_HG = "mm_hg"

class TemperatureUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  CELSIUS = "celsius"
  FAHRENHEIT = "fahrenheit"
  KELVIN = "kelvin"

class CurrentUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  AMPERE = "ampere"
  MILLIAMPERE = "milliampere"

class VoltageUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  VOLT = "volt"
  MILLIVOLT = "millivolt"

class LengthUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  CENTIMETER = "centimeter"
  MILLIMETER = "millimeter"
  METER = "meter"
  INCH = "inch"
  FOOT = "foot"

class WavelengthUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  NANOMETER = "nanometer"
  WAVENUMBER = "wavenumber"

class FlowRateUnit(enum.Enum):
  UNSPECIFIED = "unspecified"
  MICROLITER_PER_MINUTE = "microliter_per_minute"
  MICROLITER_PER_SECOND = "microliter_per_second"
  MILLILITER_PER_MINUTE = "milliliter_per_minute"
  MILLILITER_PER_SECOND = "milliliter_per_second"
  MICROLITER_PER_HOUR = "microliter_per_hour"

@dataclasses.dataclass
class TypeTagUnion_massmolesvolumeunmeasured(OneOfType):
  mass: 'Mass' = None
  moles: 'Moles' = None
  unmeasured: 'UnmeasuredAmount' = None
  volume: 'Volume' = None

@dataclasses.dataclass
class TypeTagUnion_percentagefloat_valuestr_valueamount(OneOfType):
  amount: 'Amount' = None
  float_value: 'FloatValue' = None
  percentage: 'Percentage' = None
  string_value: 'str' = None

@dataclasses.dataclass
class TypeTagUnion_float_valueinteger_valuebytes_valuestr_valueurl(OneOfType):
  bytes_value: 'bytes' = None
  float_value: 'float' = None
  integer_value: 'int' = None
  string_value: 'str' = None
  url: 'str' = None

@dataclasses.dataclass
class Reaction:
  inputs: 'dict[str, ReactionInput]'
  conditions: 'ReactionConditions'
  notes: 'ReactionNotes'
  provenance: 'ReactionProvenance'
  setup: 'ReactionSetup'
  reaction_id: 'str'
  identifiers: 'list[ReactionIdentifier]' = None
  observations: 'list[ReactionObservation]' = None
  outcomes: 'list[ReactionOutcome]' = None
  workups: 'list[ReactionWorkup]' = None

@dataclasses.dataclass
class ReactionIdentifier:
  type: 'ReactionIdentifierType'
  details: 'str'
  value: 'str'
  is_mapped: 'bool' = None

@dataclasses.dataclass
class ReactionInput:
  addition_device: 'AdditionDevice'
  addition_speed: 'AdditionSpeed'
  flow_rate: 'FlowRate'
  addition_order: 'int'
  addition_temperature: 'Temperature'
  texture: 'Texture'
  addition_duration: 'Time'
  addition_time: 'Time'
  components: 'list[Compound]' = None
  crude_components: 'list[CrudeComponent]' = None

@dataclasses.dataclass
class AdditionSpeed:
  type: 'AdditionSpeedType'
  details: 'str'

@dataclasses.dataclass
class AdditionDevice:
  type: 'AdditionDeviceType'
  details: 'str'

@dataclasses.dataclass
class Amount:
  kind: 'TypeTagUnion_massmolesvolumeunmeasured'
  volume_includes_solutes: 'bool' = None

@dataclasses.dataclass
class UnmeasuredAmount:
  details: 'str'
  type: 'UnmeasuredAmountType'

@dataclasses.dataclass
class Texture:
  details: 'str'
  type: 'TextureType'

@dataclasses.dataclass
class CrudeComponent:
  amount: 'Amount'
  reaction_id: 'str'
  texture: 'Texture'
  has_derived_amount: 'bool' = None
  includes_workup: 'bool' = None

@dataclasses.dataclass
class Compound:
  amount: 'Amount'
  analyses: 'dict[str, Analysis]'
  features: 'dict[str, Data]'
  reaction_role: 'ReactionRoleType'
  source: 'Source'
  texture: 'Texture'
  identifiers: 'list[CompoundIdentifier]' = None
  preparations: 'list[CompoundPreparation]' = None
  is_limiting: 'bool' = None

@dataclasses.dataclass
class Source:
  catalog_id: 'str'
  lot: 'str'
  vendor: 'str'

@dataclasses.dataclass
class CompoundPreparation:
  type: 'CompoundPreparationType'
  details: 'str'
  reaction_id: 'str'

@dataclasses.dataclass
class CompoundIdentifier:
  type: 'CompoundIdentifierType'
  details: 'str'
  value: 'str'

@dataclasses.dataclass
class Vessel:
  col: 'str'
  details: 'str'
  position: 'str'
  row: 'str'
  vessel_id: 'str'
  material: 'VesselMaterial'
  type: 'VesselType'
  volume: 'Volume'
  attachments: 'list[VesselAttachment]' = None
  preparations: 'list[VesselPreparation]' = None

@dataclasses.dataclass
class VesselMaterial:
  details: 'str'
  type: 'VesselMaterialType'

@dataclasses.dataclass
class VesselAttachment:
  details: 'str'
  type: 'VesselAttachmentType'

@dataclasses.dataclass
class VesselPreparation:
  details: 'str'
  type: 'VesselPreparationType'

@dataclasses.dataclass
class ReactionSetup:
  automation_code: 'dict[str, Data]'
  environment: 'ReactionEnvironment'
  automation_platform: 'str'
  vessel: 'Vessel'
  is_automated: 'bool' = None

@dataclasses.dataclass
class ReactionEnvironment:
  type: 'ReactionEnvironmentType'
  details: 'str'

@dataclasses.dataclass
class ReactionConditions:
  electrochemistry: 'ElectrochemistryConditions'
  flow: 'FlowConditions'
  illumination: 'IlluminationConditions'
  mechanochemistry: 'MechanochemistryConditions'
  pressure: 'PressureConditions'
  stirring: 'StirringConditions'
  details: 'str'
  temperature: 'TemperatureConditions'
  conditions_are_dynamic: 'bool' = None
  reflux: 'bool' = None
  ph: 'float' = None

@dataclasses.dataclass
class TemperatureConditions:
  setpoint: 'Temperature'
  control: 'TemperatureControl'
  measurements: 'list[TemperatureMeasurement]' = None

@dataclasses.dataclass
class TemperatureControl:
  details: 'str'
  type: 'TemperatureControlType'

@dataclasses.dataclass
class TemperatureMeasurement:
  details: 'str'
  temperature: 'Temperature'
  type: 'TemperatureMeasurementType'
  time: 'Time'

@dataclasses.dataclass
class PressureConditions:
  atmosphere: 'Atmosphere'
  setpoint: 'Pressure'
  control: 'PressureControl'
  measurements: 'list[PressureMeasurement]' = None

@dataclasses.dataclass
class PressureControl:
  type: 'PressureControlType'
  details: 'str'

@dataclasses.dataclass
class Atmosphere:
  type: 'AtmosphereType'
  details: 'str'

@dataclasses.dataclass
class PressureMeasurement:
  pressure: 'Pressure'
  type: 'PressureMeasurementType'
  details: 'str'
  time: 'Time'

@dataclasses.dataclass
class StirringConditions:
  type: 'StirringMethodType'
  rate: 'StirringRate'
  details: 'str'

@dataclasses.dataclass
class StirringRate:
  rpm: 'int'
  type: 'StirringRateType'
  details: 'str'

@dataclasses.dataclass
class IlluminationConditions:
  type: 'IlluminationType'
  distance_to_vessel: 'Length'
  color: 'str'
  details: 'str'
  peak_wavelength: 'Wavelength'

@dataclasses.dataclass
class ElectrochemistryConditions:
  current: 'Current'
  cell: 'ElectrochemistryCell'
  type: 'ElectrochemistryType'
  electrode_separation: 'Length'
  anode_material: 'str'
  cathode_material: 'str'
  details: 'str'
  voltage: 'Voltage'
  measurements: 'list[ElectrochemistryMeasurement]' = None

@dataclasses.dataclass
class ElectrochemistryMeasurement:
  current: 'Current'
  time: 'Time'
  voltage: 'Voltage'

@dataclasses.dataclass
class ElectrochemistryCell:
  type: 'ElectrochemistryCellType'
  details: 'str'

@dataclasses.dataclass
class MechanochemistryConditions:
  type: 'MechanochemistryType'
  details: 'str'
  liquid_assisted: 'bool' = None
  force: 'Force' = None
  frequency: 'Frequency' = None
  ball_material: 'str' = None
  cell_material: 'str' = None
  duration: 'Time' = None

@dataclasses.dataclass
class FlowConditions:
  type: 'FlowType'
  details: 'str'
  pump_type: 'str'
  tubing: 'Tubing'

@dataclasses.dataclass
class Tubing:
  diameter: 'Length'
  details: 'str'
  type: 'TubingType'

@dataclasses.dataclass
class ReactionNotes:
  procedure_details: 'str'
  safety_notes: 'str'
  forms_precipitate: 'bool' = None
  is_exothermic: 'bool' = None
  is_heterogeneous: 'bool' = None
  is_sensitive_to_light: 'bool' = None
  is_sensitive_to_moisture: 'bool' = None
  is_sensitive_to_oxygen: 'bool' = None
  offgasses: 'bool' = None

@dataclasses.dataclass
class ReactionObservation:
  image: 'Data'
  comment: 'str'
  time: 'Time'

@dataclasses.dataclass
class ReactionWorkup:
  amount: 'Amount'
  input: 'ReactionInput'
  type: 'ReactionWorkupType'
  stirring: 'StirringConditions'
  details: 'str'
  keep_phase: 'str'
  temperature: 'TemperatureConditions'
  duration: 'Time'
  is_automated: 'bool' = None
  target_ph: 'float' = None

@dataclasses.dataclass
class ReactionOutcome:
  analyses: 'dict[str, Analysis]'
  conversion: 'Percentage'
  reaction_time: 'Time'
  products: 'list[ProductCompound]' = None

@dataclasses.dataclass
class ProductCompound:
  features: 'dict[str, Data]'
  reaction_role: 'ReactionRoleType'
  isolated_color: 'str'
  texture: 'Texture'
  identifiers: 'list[CompoundIdentifier]' = None
  measurements: 'list[ProductMeasurement]' = None
  is_desired_product: 'bool' = None

@dataclasses.dataclass
class ProductMeasurement:
  authentic_standard: 'Compound'
  mass_spec_details: 'MassSpecMeasurementDetails'
  type: 'ProductMeasurementType'
  selectivity: 'Selectivity'
  analysis_key: 'str'
  details: 'str'
  retention_time: 'Time'
  value: 'TypeTagUnion_percentagefloat_valuestr_valueamount'
  wavelength: 'Wavelength'
  is_normalized: 'bool' = None
  uses_authentic_standard: 'bool' = None
  uses_internal_standard: 'bool' = None

@dataclasses.dataclass
class MassSpecMeasurementDetails:
  type: 'MassSpecMeasurementType'
  details: 'str'
  eic_masses: 'list[float]' = None
  tic_maximum_mz: 'float' = None
  tic_minimum_mz: 'float' = None

@dataclasses.dataclass
class Selectivity:
  type: 'SelectivityType'
  details: 'str'

@dataclasses.dataclass
class DateTime:
  value: 'str'

@dataclasses.dataclass
class Analysis:
  type: 'AnalysisType'
  instrument_last_calibrated: 'DateTime'
  data: 'dict[str, Data]'
  chmo_id: 'int'
  details: 'str'
  instrument_manufacturer: 'str'
  is_of_isolated_species: 'bool' = None

@dataclasses.dataclass
class ReactionProvenance:
  experiment_start: 'DateTime'
  reaction_metadata: 'dict[str, Data]'
  experimenter: 'Person'
  record_created: 'RecordEvent'
  city: 'str'
  doi: 'str'
  patent: 'str'
  publication_url: 'str'
  record_modified: 'list[RecordEvent]' = None
  is_mined: 'bool' = None

@dataclasses.dataclass
class Person:
  email: 'str'
  name: 'str'
  orcid: 'str'
  organization: 'str'
  username: 'str'

@dataclasses.dataclass
class RecordEvent:
  time: 'DateTime'
  person: 'Person'
  details: 'str'

@dataclasses.dataclass
class Time:
  units: 'TimeUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Force:
  units: 'ForceUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Frequency:
  units: 'FrequencyUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Mass:
  units: 'MassUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Moles:
  units: 'MolesUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Volume:
  units: 'VolumeUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Concentration:
  units: 'ConcentrationUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Pressure:
  units: 'PressureUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Temperature:
  units: 'TemperatureUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Current:
  units: 'CurrentUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Voltage:
  units: 'VoltageUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Length:
  units: 'LengthUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Wavelength:
  units: 'WavelengthUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class FlowRate:
  units: 'FlowRateUnit'
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Percentage:
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class FloatValue:
  precision: 'float' = None
  value: 'float' = None

@dataclasses.dataclass
class Data:
  description: 'str'
  format: 'str'
  kind: 'TypeTagUnion_float_valueinteger_valuebytes_valuestr_valueurl'
