import type { ClientMethods } from '../../core/resource.js'
import type { QualityProfile, QualityDefinition } from '../types.js'

export class QualityProfileResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<QualityProfile[]> {
    return this.client.get('/api/v1/qualityprofile')
  }

  async getById(id: number): Promise<QualityProfile> {
    return this.client.get(`/api/v1/qualityprofile/${id}`)
  }

  async create(profile: Omit<QualityProfile, 'id'>): Promise<QualityProfile> {
    return this.client.post('/api/v1/qualityprofile', profile)
  }

  async update(id: number, profile: Partial<QualityProfile> & { id: number }): Promise<QualityProfile> {
    return this.client.put(`/api/v1/qualityprofile/${id}`, profile)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/qualityprofile/${id}`)
  }
}

export class QualityDefinitionResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<QualityDefinition[]> {
    return this.client.get('/api/v1/qualitydefinition')
  }

  async getById(id: number): Promise<QualityDefinition> {
    return this.client.get(`/api/v1/qualitydefinition/${id}`)
  }

  async update(id: number, definition: Partial<QualityDefinition> & { id: number }): Promise<QualityDefinition> {
    return this.client.put(`/api/v1/qualitydefinition/${id}`, definition)
  }

  async updateAll(definitions: QualityDefinition[]): Promise<QualityDefinition[]> {
    return this.client.put('/api/v1/qualitydefinition/update', definitions)
  }
}
