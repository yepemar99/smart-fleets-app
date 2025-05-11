export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/'
export const PROJECT_NAME = 'Project Name'
export const PROJECT_DESCRIPTION = 'Project Description'
export const STATUS = {
  OK: 'OK',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
}

export const VEHICLE_TYPE = {
  COMBUSTION: 'Combustion',
  ELECTRIC: 'Electric',
  HYBRID: 'Hybrid',
}

export const FAILS_NAME = {
  lowOilPressureFail: 'Baja Presión de Aceite',
  engineOverheating: 'Sobrecalentamiento del Motor',
  failAlternator: 'Falla del Alternador',
  electricSystem: 'Sistema Eléctrico desestabilizado',
  electricChargeSystem: 'Sobrecarga detectada',
  electricHybridSystem: 'Sistema Eléctrico desestabilizado',
  regenerativeSystem: 'Sistema de Regeneración desestabilizado',
}

export const TOTAL_VALUES_COMBUSTION = {
  SPEED: 180,
  TEMPERATURE: 110,
  PRESSURE: 80,
  GAS: 1.5,
  OIL: 1,
  VOLTAGE: 14.8,
  COOLANT_TEMP: 100,
  RPM: 5000,
  FUEL_MIXTURE: 15.5,
}

export const COMBUSTION_SENSOR_NAME = {
  temperature: { label: 'Temperatura', total: TOTAL_VALUES_COMBUSTION.TEMPERATURE },
  oilPressure: { label: 'Presión de Aceite', total: TOTAL_VALUES_COMBUSTION.PRESSURE },
  oilLevel: { label: 'Nivel de Aceite', total: TOTAL_VALUES_COMBUSTION.OIL },
  rpm: { label: 'RPM', total: TOTAL_VALUES_COMBUSTION.RPM },
  fuelMixture: { label: 'Mezcla de Combustible', total: TOTAL_VALUES_COMBUSTION.FUEL_MIXTURE },
  gasEmissions: { label: 'Emisiones de Gas', total: TOTAL_VALUES_COMBUSTION.GAS },
  coolantTemperature: {
    label: 'Temp del Refrigerante',
    total: TOTAL_VALUES_COMBUSTION.COOLANT_TEMP,
  },
  alternatorVoltage: { label: 'Voltaje del Alternador', total: TOTAL_VALUES_COMBUSTION.VOLTAGE },
}

export const TOTAL_VALUES_ELECTRIC = {
  BATTERY_TEMPERATURE: 60,
  SPEED: 160,
  BATTERY_LEVEL: 100,
  MOTOR_STATUS: 100,
  SHOCK_SENSOR: 100,
  CARGO_DOOR_STATUS: 100,
}

export const ELECTRIC_SENSOR_NAME = {
  batteryTemperature: {
    label: 'Temp de la Batería',
    total: TOTAL_VALUES_ELECTRIC.BATTERY_TEMPERATURE,
  },
  batteryLevel: { label: 'Nivel de Carga', total: TOTAL_VALUES_ELECTRIC.BATTERY_LEVEL },
  motorStatus: { label: 'Estado del Motor', total: TOTAL_VALUES_ELECTRIC.MOTOR_STATUS },
  shockSensor: { label: 'Sensor de Choque', total: TOTAL_VALUES_ELECTRIC.SHOCK_SENSOR },
  cargoDoorStatus: { label: 'Puerta de Carga', total: TOTAL_VALUES_ELECTRIC.CARGO_DOOR_STATUS },
  speed: { label: 'Velocidad', total: TOTAL_VALUES_ELECTRIC.SPEED },
}

export const TOTAL_VALUES_HYBRID = {
  ENGINE_TEMPERATURE: 110,
  SPEED: 180,
  FUEL_LEVEL: 100,
  BATTERY_CHARGE: 100,
  FUEL_EFFICIENCY: 25,
  FUEL_LEVEL: 100,
  BATTERY_TEMPERATURE: 105,
  BATTERY_CURRENT: 50,
  REGEN_EFFICIENCY: 95,
}

export const HYBRID_SENSOR_NAME = {
  engineTemperature: {
    label: 'Temperatura del Motor',
    total: TOTAL_VALUES_HYBRID.ENGINE_TEMPERATURE,
  },
  speed: { label: 'Velocidad', total: TOTAL_VALUES_HYBRID.SPEED },
  fuelLevel: { label: 'Nivel de Combustible', total: TOTAL_VALUES_HYBRID.FUEL_LEVEL },
  batteryCharge: { label: 'Carga de Batería', total: TOTAL_VALUES_HYBRID.BATTERY_CHARGE },
  fuelEfficiency: {
    label: 'Eficiencia de Combustible',
    total: TOTAL_VALUES_HYBRID.FUEL_EFFICIENCY,
  },
  batteryTemperature: {
    label: 'Temperatura de Batería',
    total: TOTAL_VALUES_HYBRID.BATTERY_TEMPERATURE,
  },
  batteryCurrent: { label: 'Corriente de Batería', total: TOTAL_VALUES_HYBRID.BATTERY_CURRENT },
  regenEfficiency: {
    label: 'Eficiencia Regenerativa',
    total: TOTAL_VALUES_HYBRID.REGEN_EFFICIENCY,
  },
}
