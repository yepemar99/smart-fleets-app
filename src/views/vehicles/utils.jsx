import { STATUS, VEHICLE_TYPE } from '@/lib/constants'

export const STATUS_OPTIONS = [
  { value: STATUS.OK, label: 'OK', icon: '✅' },
  { value: STATUS.ERROR, label: 'ERROR', icon: '❌' },
  { value: STATUS.WARNING, label: 'WARNING', icon: '⚠️' },
]

export const VEHICLE_TYPE_OPTIONS = [
  { value: VEHICLE_TYPE.COMBUSTION, label: 'Combustion', icon: '⛽' },
  { value: VEHICLE_TYPE.ELECTRIC, label: 'Electric', icon: '⚡' },
  { value: VEHICLE_TYPE.HYBRID, label: 'Hybrid', icon: '🚗' },
]
