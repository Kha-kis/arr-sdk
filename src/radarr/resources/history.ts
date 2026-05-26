import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'
import type { History, MovieHistoryEventType } from '../types.js'

// Numeric values pinned to upstream Radarr enum
// (src/NzbDrone.Core/History/History.cs — MovieHistoryEventType).
// The .NET model binder rejects the string form even though the OpenAPI
// spec declares it; numeric values are stable across releases.
const MOVIE_HISTORY_EVENT_TYPE_VALUES = {
  unknown: 0,
  grabbed: 1,
  downloadFolderImported: 3,
  downloadFailed: 4,
  movieFileDeleted: 6,
  movieFolderImported: 7,
  movieFileRenamed: 8,
  downloadIgnored: 9,
} as const satisfies Record<MovieHistoryEventType, number>

export type EventTypeInput = MovieHistoryEventType | number
export type EventTypeFilter = EventTypeInput | EventTypeInput[]

function encodeEventType(value: EventTypeInput): number
function encodeEventType(value: EventTypeFilter): number | number[]
function encodeEventType(value: EventTypeFilter | undefined): number | number[] | undefined
function encodeEventType(value: EventTypeFilter | undefined): number | number[] | undefined {
  if (value === undefined) return undefined
  if (Array.isArray(value)) {
    return value.map((v) => (typeof v === 'number' ? v : MOVIE_HISTORY_EVENT_TYPE_VALUES[v]))
  }
  return typeof value === 'number' ? value : MOVIE_HISTORY_EVENT_TYPE_VALUES[value]
}

export interface GetHistoryOptions extends PaginationOptions {
  includeMovie?: boolean
  eventType?: EventTypeFilter
  movieId?: number
  downloadId?: string
  movieIds?: number[]
  languages?: number[]
  quality?: number
}

function normalize(options: GetHistoryOptions | undefined) {
  if (!options) return options
  const { eventType, ...rest } = options
  return eventType === undefined ? rest : { ...rest, eventType: encodeEventType(eventType) }
}

export class HistoryResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetHistoryOptions): Promise<PaginatedResponse<History>> {
    return this.client.get('/api/v3/history', normalize(options))
  }

  async *getAll(options?: Omit<GetHistoryOptions, 'page'>): AsyncGenerator<History, void, undefined> {
    yield* this.client.paginate<History>('/api/v3/history', normalize(options))
  }

  async getAllArray(options?: Omit<GetHistoryOptions, 'page'>): Promise<History[]> {
    return this.client.paginateAll<History>('/api/v3/history', normalize(options))
  }

  async getMovie(movieId: number, options?: { includeMovie?: boolean }): Promise<History[]> {
    return this.client.get('/api/v3/history/movie', { movieId, ...options })
  }

  async getSince(date: Date | string, options?: { eventType?: EventTypeInput; includeMovie?: boolean }): Promise<History[]> {
    const dateStr = date instanceof Date ? date.toISOString() : date
    const { eventType, ...rest } = options ?? {}
    return this.client.get('/api/v3/history/since', {
      date: dateStr,
      ...rest,
      ...(eventType !== undefined && { eventType: encodeEventType(eventType) }),
    })
  }

  async markAsFailed(id: number): Promise<void> {
    return this.client.post('/api/v3/history/failed', undefined, { id })
  }

  async markAsFailedByHistoryId(historyId: number): Promise<void> {
    return this.client.post(`/api/v3/history/failed/${historyId}`)
  }
}
