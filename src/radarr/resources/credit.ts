import type { ClientMethods } from '../../core/resource.js'
import type { Credit } from '../types.js'

export class CreditResource {
  constructor(private client: ClientMethods) {}

  async getByMovie(movieId: number, options?: { movieMetadataId?: number }): Promise<Credit[]> {
    return this.client.get('/api/v3/credit', { movieId, ...options })
  }

  async getById(id: number): Promise<Credit> {
    return this.client.get(`/api/v3/credit/${id}`)
  }
}
