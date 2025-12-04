import type { ClientMethods } from '../../core/resource.js'
import type { DelayProfile } from '../types.js'

export class DelayProfileResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<DelayProfile[]> {
    return this.client.get('/api/v3/delayprofile')
  }

  async getById(id: number): Promise<DelayProfile> {
    return this.client.get(`/api/v3/delayprofile/${id}`)
  }

  async create(profile: Omit<DelayProfile, 'id'>): Promise<DelayProfile> {
    return this.client.post('/api/v3/delayprofile', profile)
  }

  async update(id: number, profile: Partial<DelayProfile> & { id: number }): Promise<DelayProfile> {
    return this.client.put(`/api/v3/delayprofile/${id}`, profile)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/delayprofile/${id}`)
  }

  async reorder(id: number, afterId?: number): Promise<DelayProfile[]> {
    return this.client.put(`/api/v3/delayprofile/reorder/${id}`, undefined, afterId !== undefined ? { after: afterId } : undefined)
  }
}
