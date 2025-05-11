import { apiService } from '@/services/api'
import { toast } from 'react-toastify'
import useSWR from 'swr'

const useAlerts = (page = 1, size = 1) => {
  const { data, mutate } = useSWR(`/alerts/${page}/${size}`, () => apiService.getAlerts(page, size))

  const onDelete = async (id) => {
    try {
      await apiService.deleteAlert(id)
      mutate()
      toast.success('Alert deleted successfully')
    } catch (error) {
      toast.error('Alert deleted unsuccessfully')
      console.error('Error deleting alert:', error)
      return false
    }
  }

  //comentario
  console.log('data', data)

  return {
    alerts: data?.data || [],
    onDelete,
    total: data?.total || 0,
    isLoading: false,
    error: false,
  }
}

export default useAlerts
