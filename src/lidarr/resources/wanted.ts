import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions } from '../../core/types.js'
import type { AlbumPagingResource } from '../types.js'

export interface GetWantedOptions extends PaginationOptions {
  includeArtist?: boolean
  monitored?: boolean
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
