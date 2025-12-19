import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'
import type { History, HistoryEventType } from '../types.js'

export interface GetHistoryOptions extends PaginationOptions {
  eventType?: HistoryEventType | HistoryEventType[]
  indexerId?: number
  indexerIds?: number[]
  downloadId?: string
  successful?: boolean
}

export class HistoryResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetHistoryOptions): Promise<PaginatedResponse<History>> {
    return this.client.get('/api/v1/history', options)
  }

  async *getAll(options?: Omit<GetHistoryOptions, 'page'>): AsyncGenerator<History, void, undefined> {
    yield* this.client.paginate<History>('/api/v1/history', options)
  }

  async getAllArray(options?: Omit<GetHistoryOptions, 'page'>): Promise<History[]> {
    return this.client.paginateAll<History>('/api/v1/history', options)
  }

  async getByIndexer(indexerId: number, options?: { limit?: number }): Promise<History[]> {
    return this.client.get('/api/v1/history/indexer', { indexerId, ...options })
  }

  async getSince(date: Date | string, options?: { eventType?: HistoryEventType }): Promise<History[]> {
    const dateStr = date instanceof Date ? date.toISOString() : date
    return this.client.get('/api/v1/history/since', { date: dateStr, ...options })
  }
}
