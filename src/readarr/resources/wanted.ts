import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions } from '../../core/types.js'
import type { BookPagingResource } from '../types.js'

export interface GetWantedOptions extends PaginationOptions {
  includeAuthor?: boolean
}

export class WantedResource {
  constructor(private client: ClientMethods) {}

  async getMissing(options?: GetWantedOptions): Promise<BookPagingResource> {
    const params = new URLSearchParams()
    if (options?.page !== undefined) params.set('page', String(options.page))
    if (options?.pageSize !== undefined) params.set('pageSize', String(options.pageSize))
    if (options?.sortKey) params.set('sortKey', options.sortKey)
    if (options?.sortDirection) params.set('sortDirection', options.sortDirection)
    if (options?.includeAuthor !== undefined) params.set('includeAuthor', String(options.includeAuthor))
    const query = params.toString()
    return this.client.get(`/api/v1/wanted/missing${query ? `?${query}` : ''}`)
  }

  async getCutoffUnmet(options?: GetWantedOptions): Promise<BookPagingResource> {
    const params = new URLSearchParams()
    if (options?.page !== undefined) params.set('page', String(options.page))
    if (options?.pageSize !== undefined) params.set('pageSize', String(options.pageSize))
    if (options?.sortKey) params.set('sortKey', options.sortKey)
    if (options?.sortDirection) params.set('sortDirection', options.sortDirection)
    if (options?.includeAuthor !== undefined) params.set('includeAuthor', String(options.includeAuthor))
    const query = params.toString()
    return this.client.get(`/api/v1/wanted/cutoff${query ? `?${query}` : ''}`)
  }
}
