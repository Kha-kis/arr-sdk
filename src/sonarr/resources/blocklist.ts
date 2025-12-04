import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'
import type { Blocklist } from '../types.js'

export interface GetBlocklistOptions extends PaginationOptions {
  seriesIds?: number[]
}

export class BlocklistResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetBlocklistOptions): Promise<PaginatedResponse<Blocklist>> {
    return this.client.get('/api/v3/blocklist', options)
  }

  async *getAll(options?: Omit<GetBlocklistOptions, 'page'>): AsyncGenerator<Blocklist, void, undefined> {
    yield* this.client.paginate<Blocklist>('/api/v3/blocklist', options)
  }

  async getAllArray(options?: Omit<GetBlocklistOptions, 'page'>): Promise<Blocklist[]> {
    return this.client.paginateAll<Blocklist>('/api/v3/blocklist', options)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/blocklist/${id}`)
  }

  async bulkDelete(ids: number[]): Promise<void> {
    return this.client.delete('/api/v3/blocklist/bulk', { ids })
  }
}
