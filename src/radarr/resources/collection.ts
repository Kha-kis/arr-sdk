import type { ClientMethods } from '../../core/resource.js'
import type { Collection, CollectionUpdate } from '../types.js'

export class CollectionResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: { tmdbId?: number }): Promise<Collection[]> {
    return this.client.get('/api/v3/collection', options)
  }

  async getById(id: number): Promise<Collection> {
    return this.client.get(`/api/v3/collection/${id}`)
  }

  async update(id: number, collection: Partial<Collection> & { id: number }): Promise<Collection> {
    return this.client.put(`/api/v3/collection/${id}`, collection)
  }

  async bulkUpdate(update: CollectionUpdate): Promise<Collection[]> {
    return this.client.put('/api/v3/collection', update)
  }
}
