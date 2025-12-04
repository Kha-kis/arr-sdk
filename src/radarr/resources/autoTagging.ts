import type { ClientMethods } from '../../core/resource.js'
import type { AutoTagging } from '../types.js'

export class AutoTaggingResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<AutoTagging[]> {
    return this.client.get('/api/v3/autotagging')
  }

  async getById(id: number): Promise<AutoTagging> {
    return this.client.get(`/api/v3/autotagging/${id}`)
  }

  async create(autoTagging: Omit<AutoTagging, 'id'>): Promise<AutoTagging> {
    return this.client.post('/api/v3/autotagging', autoTagging)
  }

  async update(id: number, autoTagging: Partial<AutoTagging> & { id: number }): Promise<AutoTagging> {
    return this.client.put(`/api/v3/autotagging/${id}`, autoTagging)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/autotagging/${id}`)
  }

  async getSchema(): Promise<AutoTagging> {
    return this.client.get('/api/v3/autotagging/schema')
  }
}
