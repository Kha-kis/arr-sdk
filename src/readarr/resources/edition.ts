import type { ClientMethods } from '../../core/resource.js'
import type { Edition } from '../types.js'

export class EditionResource {
  constructor(private client: ClientMethods) {}

  async getById(id: number): Promise<Edition> {
    return this.client.get(`/api/v1/edition/${id}`)
  }
}
