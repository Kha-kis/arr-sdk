import type { ClientMethods } from '../../core/resource.js'
import type { AppProfile } from '../types.js'

export class AppProfileResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<AppProfile[]> {
    return this.client.get('/api/v1/appprofile')
  }

  async getById(id: number): Promise<AppProfile> {
    return this.client.get(`/api/v1/appprofile/${id}`)
  }

  async create(profile: Omit<AppProfile, 'id'>): Promise<AppProfile> {
    return this.client.post('/api/v1/appprofile', profile)
  }

  async update(id: number, profile: Partial<AppProfile> & { id: number }): Promise<AppProfile> {
    return this.client.put(`/api/v1/appprofile/${id}`, profile)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/appprofile/${id}`)
  }

  async getSchema(): Promise<AppProfile> {
    return this.client.get('/api/v1/appprofile/schema')
  }
}
