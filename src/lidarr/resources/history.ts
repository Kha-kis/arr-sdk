import type { ClientMethods } from '../../core/resource.js'
import type { History, HistoryPagingResource, SortDirection, EntityHistoryEventType } from '../types.js'

export interface GetHistoryOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: SortDirection
  includeArtist?: boolean
  includeAlbum?: boolean
  includeTrack?: boolean
  eventType?: EntityHistoryEventType
  downloadId?: string
  artistId?: number
  albumId?: number
  [key: string]: unknown
}

export class HistoryResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetHistoryOptions): Promise<HistoryPagingResource> {
    return this.client.get('/api/v1/history', options)
  }

  async getSince(date: string, eventType?: EntityHistoryEventType): Promise<History[]> {
    return this.client.get('/api/v1/history/since', { date, eventType })
  }

  async getForArtist(artistId: number, albumId?: number, eventType?: EntityHistoryEventType): Promise<History[]> {
    return this.client.get('/api/v1/history/artist', { artistId, albumId, eventType })
  }

  async markAsFailed(id: number): Promise<void> {
    return this.client.post(`/api/v1/history/failed/${id}`)
  }
}
