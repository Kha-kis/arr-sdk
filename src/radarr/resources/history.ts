import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'
import type { History, MovieHistoryEventType } from '../types.js'

export interface GetHistoryOptions extends PaginationOptions {
  includeMovie?: boolean
  eventType?: MovieHistoryEventType | MovieHistoryEventType[]
  movieId?: number
  downloadId?: string
  movieIds?: number[]
  languages?: number[]
  quality?: number
}

export class HistoryResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetHistoryOptions): Promise<PaginatedResponse<History>> {
    return this.client.get('/api/v3/history', options)
  }

  async *getAll(options?: Omit<GetHistoryOptions, 'page'>): AsyncGenerator<History, void, undefined> {
    yield* this.client.paginate<History>('/api/v3/history', options)
  }

  async getAllArray(options?: Omit<GetHistoryOptions, 'page'>): Promise<History[]> {
    return this.client.paginateAll<History>('/api/v3/history', options)
  }

  async getMovie(movieId: number, options?: { includeMovie?: boolean }): Promise<History[]> {
    return this.client.get('/api/v3/history/movie', { movieId, ...options })
  }

  async getSince(date: Date | string, options?: { eventType?: MovieHistoryEventType; includeMovie?: boolean }): Promise<History[]> {
    const dateStr = date instanceof Date ? date.toISOString() : date
    return this.client.get('/api/v3/history/since', { date: dateStr, ...options })
  }

  async markAsFailed(id: number): Promise<void> {
    return this.client.post('/api/v3/history/failed', undefined, { id })
  }

  async markAsFailedByHistoryId(historyId: number): Promise<void> {
    return this.client.post(`/api/v3/history/failed/${historyId}`)
  }
}
