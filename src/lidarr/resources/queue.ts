import type { ClientMethods } from '../../core/resource.js'
import type { Queue, QueueBulk, QueueStatus, QueuePagingResource, SortDirection } from '../types.js'

export interface GetQueueOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: SortDirection
  includeUnknownArtistItems?: boolean
  includeArtist?: boolean
  includeAlbum?: boolean
  [key: string]: unknown
}

export interface GetQueueDetailsOptions {
  artistId?: number
  albumIds?: number[]
  includeArtist?: boolean
  includeAlbum?: boolean
  [key: string]: unknown
}

export interface DeleteQueueOptions {
  removeFromClient?: boolean
  blocklist?: boolean
  skipRedownload?: boolean
  changeCategory?: boolean
  [key: string]: unknown
}

export class QueueResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetQueueOptions): Promise<QueuePagingResource> {
    return this.client.get('/api/v1/queue', options)
  }

  async getDetails(options?: GetQueueDetailsOptions): Promise<Queue[]> {
    return this.client.get('/api/v1/queue/details', options)
  }

  async getStatus(): Promise<QueueStatus> {
    return this.client.get('/api/v1/queue/status')
  }

  async delete(id: number, options?: DeleteQueueOptions): Promise<void> {
    return this.client.delete(`/api/v1/queue/${id}`, undefined, options)
  }

  async bulkDelete(data: QueueBulk & DeleteQueueOptions): Promise<void> {
    return this.client.delete('/api/v1/queue/bulk', data)
  }

  async grab(ids: number[]): Promise<void> {
    return this.client.post('/api/v1/queue/grab/bulk', { ids })
  }
}
