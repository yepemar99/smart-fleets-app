import axios from 'axios'
import { API_URL } from '@/lib/constants'
import { routes } from '@/routes'

class ApiService {
  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
    })
  }

  //Vehicles
  async getVehicles() {
    const res = await this.client.get(routes.api.vehicles.url)
    return res.data.data
  }

  async getVehicleIDs() {
    const res = await this.client.get(routes.api.ids.url)
    return res.data
  }

  async getVehicleById(id) {
    const res = await this.client.get(routes.api.vehicles.url + `/${id}`)
    return res.data
  }

  async createVehicle(data) {
    const res = await this.client.post(routes.api.vehicles.url, data)
    return res.data
  }

  async deleteVehicle(id) {
    const res = await this.client.delete(routes.api.vehicles.url + `/${id}`)
    return res.data
  }

  // Alerts
  async getAlerts(page = 1, size = 1) {
    const res = await this.client.get(routes.api.alerts.url + `?page=${page}&limit=${size}`)

    return res.data
  }

  async deleteAlert(id) {
    const res = await this.client.delete(routes.api.alerts.url + `/${id}`)
    return res.data
  }
}

export const apiService = new ApiService(API_URL)
