import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions } from '../../core/types.js'
import type { History, HistoryPagingResource, EntityHistoryEventType } from '../types.js'

// Numeric values pinned to upstream Lidarr enum
// (src/NzbDrone.Core/History/EntityHistory.cs — EntityHistoryEventType).
// The .NET model binder rejects the string form even though the OpenAPI
// spec declares it; numeric values are stable across releases.
const ENTITY_HISTORY_EVENT_TYPE_VALUES = {
  unknown: 0,
  grabbed: 1,
  artistFolderImported: 2,
  trackFileImported: 3,
  downloadFailed: 4,
  trackFileDeleted: 5,
  trackFileRenamed: 6,
  albumImportIncomplete: 7,
  downloadImported: 8,
  trackFileRetagged: 9,
  downloadIgnored: 10,
} as const satisfies Record<EntityHistoryEventType, number>

export type EventTypeInput = EntityHistoryEventType | number
export type EventTypeFilter = EventTypeInput | EventTypeInput[]

function encodeEventType(value: EventTypeInput): number
function encodeEventType(value: EventTypeFilter): number | number[]
function encodeEventType(value: EventTypeFilter | undefined): number | number[] | undefined
function encodeEventType(value: EventTypeFilter | undefined): number | number[] | undefined {
  if (value === undefined) return undefined
  if (Array.isArray(value)) {
    return value.map((v) => (typeof v === 'number' ? v : ENTITY_HISTORY_EVENT_TYPE_VALUES[v]))
  }
  return typeof value === 'number' ? value : ENTITY_HISTORY_EVENT_TYPE_VALUES[value]
}

export interface GetHistoryOptions extends PaginationOptions {
  includeArtist?: boolean
  includeAlbum?: boolean
  includeTrack?: boolean
  eventType?: EventTypeFilter
  downloadId?: string
  artistId?: number
  albumId?: number
}

function normalize(options: GetHistoryOptions | undefined) {
  if (!options) return options
  const { eventType, ...rest } = options
  return eventType === undefined ? rest : { ...rest, eventType: encodeEventType(eventType) }
}

export class HistoryResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetHistoryOptions): Promise<HistoryPagingResource> {
    return this.client.get('/api/v1/history', normalize(options))
  }

  async getSince(date: string, eventType?: EventTypeInput): Promise<History[]> {
    return this.client.get('/api/v1/history/since', { date, eventType: encodeEventType(eventType) })
  }

  async getForArtist(artistId: number, albumId?: number, eventType?: EventTypeInput): Promise<History[]> {
    return this.client.get('/api/v1/history/artist', { artistId, albumId, eventType: encodeEventType(eventType) })
  }

  async markAsFailed(id: number): Promise<void> {
    return this.client.post(`/api/v1/history/failed/${id}`)
  }
}
