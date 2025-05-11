import { apiService } from '@/services/api'
import VehicleDetails from '@/views/vehicleDetails'
import VehicleProvider from '@/views/vehicleDetails/VehicleProvider'

export async function generateStaticParams() {
  let vehicleIds = []
  try {
    vehicleIds = await apiService.getVehicleIDs()
  } catch (error) {
    console.error('Error fetching vehicle IDs:', error)
  }
  return vehicleIds.map((vehicleID) => ({
    id: vehicleID.toString(),
  }))
}

const VehicleDetailsPage = ({ params }) => {
  const { id } = params
  return (
    <VehicleProvider id={id}>
      <VehicleDetails />
    </VehicleProvider>
  )
}

export default VehicleDetailsPage
