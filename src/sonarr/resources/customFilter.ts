import type { ClientMethods } from '../../core/resource.js'
import type { CustomFilter } from '../types.js'

export class CustomFilterResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<CustomFilter[]> {
    return this.client.get('/api/v3/customfilter')
  }

  async getById(id: number): Promise<CustomFilter> {
    return this.client.get(`/api/v3/customfilter/${id}`)
  }

  async create(filter: Omit<CustomFilter, 'id'>): Promise<CustomFilter> {
    return this.client.post('/api/v3/customfilter', filter)
  }

  async update(id: number, filter: Partial<CustomFilter> & { id: number }): Promise<CustomFilter> {
    return this.client.put(`/api/v3/customfilter/${id}`, filter)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/customfilter/${id}`)
  }
}
