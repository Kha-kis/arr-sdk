import type { ClientMethods } from '../../core/resource.js'
import type { CustomFormat, CustomFormatBulk } from '../types.js'

export class CustomFormatResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<CustomFormat[]> {
    return this.client.get('/api/v3/customformat')
  }

  async getById(id: number): Promise<CustomFormat> {
    return this.client.get(`/api/v3/customformat/${id}`)
  }

  async create(format: Omit<CustomFormat, 'id'>): Promise<CustomFormat> {
    return this.client.post('/api/v3/customformat', format)
  }

  async update(id: number, format: Partial<CustomFormat> & { id: number }): Promise<CustomFormat> {
    return this.client.put(`/api/v3/customformat/${id}`, format)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/customformat/${id}`)
  }

  async bulkDelete(ids: number[]): Promise<void> {
    return this.client.delete('/api/v3/customformat/bulk', { ids })
  }

  async bulkUpdate(formats: CustomFormatBulk): Promise<CustomFormat[]> {
    return this.client.put('/api/v3/customformat/bulk', formats)
  }

  async getSchema(): Promise<CustomFormat[]> {
    return this.client.get('/api/v3/customformat/schema')
  }
}
