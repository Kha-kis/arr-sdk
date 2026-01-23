import type { ClientMethods } from '../../core/resource.js'
import type { AlbumPagingResource, SortDirection } from '../types.js'

export interface GetWantedOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: SortDirection
  includeArtist?: boolean
  monitored?: boolean
  [key: string]: unknown
}

export class WantedResource {
  constructor(private client: ClientMethods) {}

  async getMissing(options?: GetWantedOptions): Promise<AlbumPagingResource> {
    return this.client.get('/api/v1/wanted/missing', options)
  }

  async getCutoffUnmet(options?: GetWantedOptions): Promise<AlbumPagingResource> {
    return this.client.get('/api/v1/wanted/cutoff', options)
  }
}
