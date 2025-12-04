import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'
import type { History, EpisodeHistoryEventType } from '../types.js'

export interface GetHistoryOptions extends PaginationOptions {
  includeEpisode?: boolean
  includeSeries?: boolean
  eventType?: EpisodeHistoryEventType | EpisodeHistoryEventType[]
  episodeId?: number
  downloadId?: string
  seriesIds?: number[]
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

  async getSeries(seriesId: number, options?: { seasonNumber?: number; includeEpisode?: boolean; includeSeries?: boolean }): Promise<History[]> {
    return this.client.get('/api/v3/history/series', { seriesId, ...options })
  }

  async getSince(date: Date | string, options?: { eventType?: EpisodeHistoryEventType; includeEpisode?: boolean; includeSeries?: boolean }): Promise<History[]> {
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
