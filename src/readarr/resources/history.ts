import type { ClientMethods } from '../../core/resource.js'
import type { History, HistoryPagingResource, SortDirection, EntityHistoryEventType } from '../types.js'

// Numeric values pinned to upstream Readarr enum
// (src/NzbDrone.Core/History/EntityHistory.cs — EntityHistoryEventType).
// The .NET model binder rejects the string form even though the OpenAPI
// spec declares it; numeric values are stable across releases.
const ENTITY_HISTORY_EVENT_TYPE_VALUES = {
  unknown: 0,
  grabbed: 1,
  bookFileImported: 3,
  downloadFailed: 4,
  bookFileDeleted: 5,
  bookFileRenamed: 6,
  bookImportIncomplete: 7,
  downloadImported: 8,
  bookFileRetagged: 9,
  downloadIgnored: 10,
} as const satisfies Record<EntityHistoryEventType, number>

export type EventTypeInput = EntityHistoryEventType | number

function encodeEventType(value: EventTypeInput | undefined): string | undefined {
  if (value === undefined) return undefined
  const numeric = typeof value === 'number' ? value : ENTITY_HISTORY_EVENT_TYPE_VALUES[value]
  return String(numeric)
}

export interface GetHistoryOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: SortDirection
  includeAuthor?: boolean
  includeBook?: boolean
  eventType?: EventTypeInput
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
    const encoded = encodeEventType(options?.eventType)
    if (encoded !== undefined) params.set('eventType', encoded)
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

  async getSince(date: string, eventType?: EventTypeInput): Promise<History[]> {
    const params = new URLSearchParams()
    params.set('date', date)
    const encoded = encodeEventType(eventType)
    if (encoded !== undefined) params.set('eventType', encoded)
    return this.client.get(`/api/v1/history/since?${params.toString()}`)
  }
}
