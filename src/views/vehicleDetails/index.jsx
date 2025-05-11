'use client'

import Alerts from './components/Alerts'
import Sensors from './components/Sensors'
import VehicleInfo from './components/VehicleInfo'
import { useVehicleContext } from './VehicleProvider'
import { useState } from 'react'

const VehicleDetails = () => {
  const [showAlerts, setShowAlerts] = useState(false)
  const { vehicle, sensors, fails } = useVehicleContext()

  const handleShowAlerts = () => {
    setShowAlerts(!showAlerts)
  }

  return (
    <div className="p-2">
      <VehicleInfo
        model={vehicle?.model}
        identificador={vehicle?.id}
        tipo={vehicle?.type}
        status={fails.length > 0 ? 'ERROR' : 'OK'}
        description={vehicle?.description}
        fails={fails}
        showAlerts={showAlerts}
        onShowAlerts={handleShowAlerts}
      />
      {!showAlerts && sensors && sensors.length > 0 && (
        <Sensors className="mt-2" sensors={sensors} />
      )}
      {showAlerts && <Alerts className="mt-4" />}
    </div>
  )
}
export default VehicleDetails
