import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'
import type { History, HistoryEventType } from '../types.js'

// Numeric values pinned to upstream Prowlarr enum
// (src/NzbDrone.Core/History/History.cs — HistoryEventType).
// The .NET model binder rejects the string form even though the OpenAPI
// spec declares it; numeric values are stable across releases.
const HISTORY_EVENT_TYPE_VALUES = {
  unknown: 0,
  releaseGrabbed: 1,
  indexerQuery: 2,
  indexerRss: 3,
  indexerAuth: 4,
  indexerInfo: 5,
} as const satisfies Record<HistoryEventType, number>

export type EventTypeInput = HistoryEventType | number
export type EventTypeFilter = EventTypeInput | EventTypeInput[]

function encodeEventType(value: EventTypeInput): number
function encodeEventType(value: EventTypeFilter): number | number[]
function encodeEventType(value: EventTypeFilter | undefined): number | number[] | undefined
function encodeEventType(value: EventTypeFilter | undefined): number | number[] | undefined {
  if (value === undefined) return undefined
  if (Array.isArray(value)) {
    return value.map((v) => (typeof v === 'number' ? v : HISTORY_EVENT_TYPE_VALUES[v]))
  }
  return typeof value === 'number' ? value : HISTORY_EVENT_TYPE_VALUES[value]
}

export interface GetHistoryOptions extends PaginationOptions {
  eventType?: EventTypeFilter
  indexerId?: number
  indexerIds?: number[]
  downloadId?: string
  successful?: boolean
}

function normalize(options: GetHistoryOptions | undefined) {
  if (!options) return options
  const { eventType, ...rest } = options
  return eventType === undefined ? rest : { ...rest, eventType: encodeEventType(eventType) }
}

export class HistoryResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetHistoryOptions): Promise<PaginatedResponse<History>> {
    return this.client.get('/api/v1/history', normalize(options))
  }

  async *getAll(options?: Omit<GetHistoryOptions, 'page'>): AsyncGenerator<History, void, undefined> {
    yield* this.client.paginate<History>('/api/v1/history', normalize(options))
  }

  async getAllArray(options?: Omit<GetHistoryOptions, 'page'>): Promise<History[]> {
    return this.client.paginateAll<History>('/api/v1/history', normalize(options))
  }

  async getByIndexer(indexerId: number, options?: { limit?: number }): Promise<History[]> {
    return this.client.get('/api/v1/history/indexer', { indexerId, ...options })
  }

  async getSince(date: Date | string, options?: { eventType?: EventTypeInput }): Promise<History[]> {
    const dateStr = date instanceof Date ? date.toISOString() : date
    const { eventType, ...rest } = options ?? {}
    return this.client.get('/api/v1/history/since', {
      date: dateStr,
      ...rest,
      ...(eventType !== undefined && { eventType: encodeEventType(eventType) }),
    })
  }
}
