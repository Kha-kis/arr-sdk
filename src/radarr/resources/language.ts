import type { ClientMethods } from '../../core/resource.js'
import type { LanguageResource } from '../types.js'

export class LanguageResourceApi {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<LanguageResource[]> {
    return this.client.get('/api/v3/language')
  }

  async getById(id: number): Promise<LanguageResource> {
    return this.client.get(`/api/v3/language/${id}`)
  }
}
