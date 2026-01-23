import type { ClientMethods } from '../../core/resource.js'
import type { Queue, QueueStatus, QueuePagingResource, SortDirection } from '../types.js'

export interface GetQueueOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: SortDirection
  includeUnknownAuthorItems?: boolean
  includeAuthor?: boolean
  includeBook?: boolean
  authorIds?: number[]
  bookIds?: number[]
  protocol?: string
  quality?: number[]
}

export class QueueResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetQueueOptions): Promise<QueuePagingResource> {
    const params = new URLSearchParams()
    if (options?.page !== undefined) params.set('page', String(options.page))
    if (options?.pageSize !== undefined) params.set('pageSize', String(options.pageSize))
    if (options?.sortKey) params.set('sortKey', options.sortKey)
    if (options?.sortDirection) params.set('sortDirection', options.sortDirection)
    if (options?.includeUnknownAuthorItems !== undefined) {
      params.set('includeUnknownAuthorItems', String(options.includeUnknownAuthorItems))
    }
    if (options?.includeAuthor !== undefined) params.set('includeAuthor', String(options.includeAuthor))
    if (options?.includeBook !== undefined) params.set('includeBook', String(options.includeBook))
    if (options?.authorIds?.length) {
      options.authorIds.forEach(id => params.append('authorIds', String(id)))
    }
    if (options?.bookIds?.length) {
      options.bookIds.forEach(id => params.append('bookIds', String(id)))
    }
    if (options?.protocol) params.set('protocol', options.protocol)
    if (options?.quality?.length) {
      options.quality.forEach(q => params.append('quality', String(q)))
    }
    const query = params.toString()
    return this.client.get(`/api/v1/queue${query ? `?${query}` : ''}`)
  }

  async getById(id: number): Promise<Queue> {
    return this.client.get(`/api/v1/queue/${id}`)
  }

  async getStatus(): Promise<QueueStatus> {
    return this.client.get('/api/v1/queue/status')
  }

  async delete(id: number, options?: { removeFromClient?: boolean; blocklist?: boolean; skipRedownload?: boolean; changeCategory?: boolean }): Promise<void> {
    const params = new URLSearchParams()
    if (options?.removeFromClient !== undefined) params.set('removeFromClient', String(options.removeFromClient))
    if (options?.blocklist !== undefined) params.set('blocklist', String(options.blocklist))
    if (options?.skipRedownload !== undefined) params.set('skipRedownload', String(options.skipRedownload))
    if (options?.changeCategory !== undefined) params.set('changeCategory', String(options.changeCategory))
    const query = params.toString()
    return this.client.delete(`/api/v1/queue/${id}${query ? `?${query}` : ''}`)
  }

  async bulkDelete(ids: number[], options?: { removeFromClient?: boolean; blocklist?: boolean; skipRedownload?: boolean; changeCategory?: boolean }): Promise<void> {
    const params = new URLSearchParams()
    if (options?.removeFromClient !== undefined) params.set('removeFromClient', String(options.removeFromClient))
    if (options?.blocklist !== undefined) params.set('blocklist', String(options.blocklist))
    if (options?.skipRedownload !== undefined) params.set('skipRedownload', String(options.skipRedownload))
    if (options?.changeCategory !== undefined) params.set('changeCategory', String(options.changeCategory))
    const query = params.toString()
    return this.client.delete(`/api/v1/queue/bulk${query ? `?${query}` : ''}`, { ids })
  }
}
