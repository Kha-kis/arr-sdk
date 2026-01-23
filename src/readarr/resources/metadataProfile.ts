import type { ClientMethods } from '../../core/resource.js'
import type { MetadataProfile } from '../types.js'

export class MetadataProfileResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<MetadataProfile[]> {
    return this.client.get('/api/v1/metadataprofile')
  }

  async getById(id: number): Promise<MetadataProfile> {
    return this.client.get(`/api/v1/metadataprofile/${id}`)
  }

  async create(profile: Omit<MetadataProfile, 'id'>): Promise<MetadataProfile> {
    return this.client.post('/api/v1/metadataprofile', profile)
  }

  async update(id: number, profile: MetadataProfile): Promise<MetadataProfile> {
    return this.client.put(`/api/v1/metadataprofile/${id}`, profile)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/metadataprofile/${id}`)
  }
}
