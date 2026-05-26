import type { ClientMethods } from '../../core/resource.js'
import type { History, HistoryPagingResource, SortDirection, EntityHistoryEventType } from '../types.js'

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

function encodeEventType(value: EventTypeInput | undefined): number | undefined {
  if (value === undefined) return undefined
  return typeof value === 'number' ? value : ENTITY_HISTORY_EVENT_TYPE_VALUES[value]
}

export interface GetHistoryOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: SortDirection
  includeArtist?: boolean
  includeAlbum?: boolean
  includeTrack?: boolean
  eventType?: EventTypeInput
  downloadId?: string
  artistId?: number
  albumId?: number
  [key: string]: unknown
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
