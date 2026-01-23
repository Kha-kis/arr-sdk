import type { ClientMethods } from '../../core/resource.js'
import type { History, HistoryPagingResource, SortDirection, EntityHistoryEventType } from '../types.js'

export interface GetHistoryOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: SortDirection
  includeAuthor?: boolean
  includeBook?: boolean
  eventType?: EntityHistoryEventType
  downloadId?: string
  authorId?: number
  bookId?: number
}

export class HistoryResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetHistoryOptions): Promise<HistoryPagingResource> {
    const params = new URLSearchParams()
    if (options?.page !== undefined) params.set('page', String(options.page))
    if (options?.pageSize !== undefined) params.set('pageSize', String(options.pageSize))
    if (options?.sortKey) params.set('sortKey', options.sortKey)
    if (options?.sortDirection) params.set('sortDirection', options.sortDirection)
    if (options?.includeAuthor !== undefined) params.set('includeAuthor', String(options.includeAuthor))
    if (options?.includeBook !== undefined) params.set('includeBook', String(options.includeBook))
    if (options?.eventType) params.set('eventType', String(options.eventType))
    if (options?.downloadId) params.set('downloadId', options.downloadId)
    if (options?.authorId !== undefined) params.set('authorId', String(options.authorId))
    if (options?.bookId !== undefined) params.set('bookId', String(options.bookId))
    const query = params.toString()
    return this.client.get(`/api/v1/history${query ? `?${query}` : ''}`)
  }

  async getByAuthorId(authorId: number): Promise<History[]> {
    return this.client.get(`/api/v1/history/author?authorId=${authorId}`)
  }

  async markAsFailed(id: number): Promise<void> {
    return this.client.post(`/api/v1/history/failed/${id}`, {})
  }

  async getSince(date: string, eventType?: EntityHistoryEventType): Promise<History[]> {
    const params = new URLSearchParams()
    params.set('date', date)
    if (eventType) params.set('eventType', String(eventType))
    return this.client.get(`/api/v1/history/since?${params.toString()}`)
  }
}
