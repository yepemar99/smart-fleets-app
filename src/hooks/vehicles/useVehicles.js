import { apiService, getVehicles } from '@/services/api'
import { useEffect, useState } from 'react'

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchVehicles = async () => {
    try {
      const data = await apiService.getVehicles()
      setVehicles(data)
    } catch (error) {
      console.error('Error fetching vehicles:', error)
      setError(error)
      setVehicles([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVehicles()
  }, [])

  return { vehicles, loading, error }
}
