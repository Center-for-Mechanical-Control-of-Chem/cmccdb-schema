"""Helpers for translating strings with units."""

import re

from ord_schema.proto import ord_schema_pb2 as schema

# Accepted synonyms for units. Note that all values will be converted to
# lowercase.
_UNIT_SYNONYMS = {
    schema.Time: {
        schema.Time.HOUR: ['h', 'hour', 'hours', 'hr', 'hrs'],
        schema.Time.MINUTE: ['m', 'min', 'mins', 'minute', 'minutes'],
        schema.Time.SECOND: ['s', 'sec', 'secs', 'second', 'seconds'],
    },
    schema.Mass: {
        schema.Mass.GRAM: ['g', 'gram', 'grams', 'gs', 'gm', 'gms'],
        schema.Mass.MILLIGRAM: ['mg', 'mgs', 'milligrams', 'milligram'],
        schema.Mass.MICROGRAM: ['ug', 'ugs', 'micg', 'micgs', 'micrograms',
                                'microgram'],
        schema.Mass.KILOGRAM: ['kg', 'kgs', 'kilogram', 'kilograms'],
    },
    schema.Moles: {
        schema.Moles.MOLES: ['mol', 'mols', 'mole', 'moles'],
        schema.Moles.MILLIMOLES: ['mmol', 'millimoles', 'mmols'],
        schema.Moles.MICROMOLES: ['umol', 'umols', 'micromoles'],
        schema.Moles.NANOMOLES: ['nmol', 'nanomoles'],
    },
    schema.Volume: {
        schema.Volume.MILLILITER: ['ml', 'milliliters'],
        schema.Volume.MICROLITER: ['ul', 'micl', 'microliters'],
        schema.Volume.LITER: ['l', 'liters', 'litres'],
    },
    # TODO(coley): others
}


class UnitResolver:
    """Resolver class for translating value+unit strings into messages."""

    def __init__(self):
        self._resolver = {}
        for message in _UNIT_SYNONYMS:
            for unit in _UNIT_SYNONYMS[message]:
                for string_unit in _UNIT_SYNONYMS[message][unit]:
                    string_unit = string_unit.lower()
                    if string_unit in self._resolver:
                        raise KeyError(f'duplicated unit: {string_unit}')
                    self._resolver[string_unit] = (message, unit)
        # Values must have zero or one decimal point. Whitespace between the
        # value and the unit is optional.
        self._pattern = re.compile(r'(\d+.?\d*)\s*(\w+)')

    def resolve(self, string):
        """Resolves a string into a message containing a value with units.

        Args:
            string: The string to parse; must contain a numeric value and a
                string unit. For example: "1.25 h".

        Returns:
            Message containing a numeric value with units listed in the schema.

        Raises:
            ValueError: If string does not contain a value with units.
        """
        # NOTE(kearnes): Use fullmatch() to catch cases with multiple matches.
        match = self._pattern.fullmatch(string.strip())
        if not match:
            raise ValueError(
                f'string does not contain a value with units: {string}')
        value, string_unit = match.groups()
        string_unit = string_unit.lower()
        if string_unit not in self._resolver:
            raise KeyError(f'unrecognized units: {string_unit}')
        message, unit = self._resolver[string_unit]
        return message(value=float(value), units=unit)