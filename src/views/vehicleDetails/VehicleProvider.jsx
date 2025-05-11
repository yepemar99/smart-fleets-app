// context/VehicleProvider.jsx
'use client'
import {
  API_URL,
  COMBUSTION_SENSOR_NAME,
  ELECTRIC_SENSOR_NAME,
  FAILS_NAME,
  HYBRID_SENSOR_NAME,
  VEHICLE_TYPE,
} from '@/lib/constants'
import { apiService } from '@/services/api'
import { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io(API_URL)

const VehicleContext = createContext()

export const VehicleProvider = ({ children, id = '' }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [vehicleData, setVehicleData] = useState(null)
  const [sensors, setSensors] = useState([])
  const [fails, setFails] = useState([])

  const getVehicleData = async (vehicleId) => {
    try {
      setLoading(true)
      const response = await apiService.getVehicleById(vehicleId)
      setVehicleData(response)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!id) return
    // Obtener datos del vehículo al cargar el componente
    getVehicleData(id)
    // Suscribirse al vehículo específico
    socket.emit('subscribeToVehicle', id)
    console.log(`📡 Suscrito al vehículo ${id}`)

    // Escuchar actualizaciones del servidor
    socket.on('vehicleUpdate', (data) => {
      if (data.id == parseInt(id)) {
        setVehicleData((prev) => ({ ...prev, ...data }))
        //comentario
        console.log('data', data)
        selectSensorType(data)
      }
    })
    socket.on('vehicleFails', (data) => {
      console.log('🚨 Falla del vehículo:', data)
      if (data.id == parseInt(id)) {
        setFails((prevFails) => {
          let auxFails = [...prevFails]

          Object.entries(data).forEach(([key, value]) => {
            let findIndexFail = -1

            auxFails.forEach((fail) => {
              if (fail.id === key) {
                findIndexFail = auxFails.indexOf(fail)
              }
            })

            //comentario
            console.log('findIndexFail', findIndexFail)
            console.log('key', key)

            if (findIndexFail !== -1) {
              auxFails[findIndexFail].value = value
            } else {
              console.log('hola')
              auxFails.push({ id: key, value: value, label: FAILS_NAME[key] || key })
            }
          })

          console.log('auxFails', auxFails)
          const formattedFails = auxFails.filter((fail) => fail.id !== 'id' && !fail.value)

          return formattedFails
        })
      }
    })

    // Limpiar listeners
    return () => {
      socket.off('vehicleUpdate')
      socket.off('vehicleFails')
    }
  }, [id])

  const mapFieldToValue = (field = '', object = {}) => {
    if (!object || !field) return null
    return { label: object[field]?.label || null, total: object[field]?.total || null }
  }

  const mapObjectToCustomArray = (obj = {}, objectNames = {}) => {
    return Object.entries(obj)
      .map(([key, value], index) => ({
        id: `${key}-${index}`,
        label: mapFieldToValue(key, objectNames).label,
        value: value,
        type: typeof value === 'number' ? false : true,
        total: mapFieldToValue(key, objectNames).total,
      }))
      .filter((item) => item.label !== null)
  }

  const selectSensorType = (vehicle) => {
    switch (vehicle?.type) {
      case VEHICLE_TYPE.COMBUSTION:
        if (vehicle?.combustionSensor) {
          const resultCombSens = mapObjectToCustomArray(
            vehicle.combustionSensor,
            COMBUSTION_SENSOR_NAME
          )
          setSensors(resultCombSens)
        }
        break
      case VEHICLE_TYPE.ELECTRIC:
        if (vehicle?.electricSensor) {
          const resultElecSens = mapObjectToCustomArray(
            vehicle.electricSensor,
            ELECTRIC_SENSOR_NAME
          )
          setSensors(resultElecSens)
        }
        break
      case VEHICLE_TYPE.HYBRID:
        if (vehicle?.hybridSensor) {
          const resultHybriSens = mapObjectToCustomArray(vehicle.hybridSensor, HYBRID_SENSOR_NAME)
          setSensors(resultHybriSens)
        }
        break
      default:
        setSensors([])
        break
    }
  }

  return (
    <VehicleContext.Provider value={{ vehicle: vehicleData, sensors, fails }}>
      {children}
    </VehicleContext.Provider>
  )
}

export const useVehicleContext = () => useContext(VehicleContext)

export default VehicleProvider
