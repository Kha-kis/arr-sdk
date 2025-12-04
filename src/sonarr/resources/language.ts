import type { ClientMethods } from '../../core/resource.js'
import type { LanguageResource, LanguageProfile } from '../types.js'

export class LanguageResourceApi {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<LanguageResource[]> {
    return this.client.get('/api/v3/language')
  }

  async getById(id: number): Promise<LanguageResource> {
    return this.client.get(`/api/v3/language/${id}`)
  }
}

export class LanguageProfileResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<LanguageProfile[]> {
    return this.client.get('/api/v3/languageprofile')
  }

  async getById(id: number): Promise<LanguageProfile> {
    return this.client.get(`/api/v3/languageprofile/${id}`)
  }

  async getSchema(): Promise<LanguageProfile> {
    return this.client.get('/api/v3/languageprofile/schema')
  }
}
