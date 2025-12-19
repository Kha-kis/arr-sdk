import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'
import type { Queue, QueueStatus } from '../types.js'

export interface GetQueueOptions extends PaginationOptions {
  includeUnknownMovieItems?: boolean
  includeMovie?: boolean
  movieIds?: number[]
  protocol?: 'unknown' | 'usenet' | 'torrent'
  languages?: number[]
  quality?: number[]
  status?: ('unknown' | 'queued' | 'paused' | 'downloading' | 'completed' | 'failed' | 'warning' | 'delay' | 'downloadClientUnavailable' | 'fallback')[]
}

export interface GetQueueDetailsOptions {
  movieId?: number
  includeMovie?: boolean
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

  async get(options?: GetQueueOptions): Promise<PaginatedResponse<Queue>> {
    return this.client.get('/api/v3/queue', options)
  }

  async getById(id: number): Promise<Queue> {
    return this.client.get(`/api/v3/queue/${id}`)
  }

  async *getAll(options?: Omit<GetQueueOptions, 'page'>): AsyncGenerator<Queue, void, undefined> {
    yield* this.client.paginate<Queue>('/api/v3/queue', options)
  }

  async getAllArray(options?: Omit<GetQueueOptions, 'page'>): Promise<Queue[]> {
    return this.client.paginateAll<Queue>('/api/v3/queue', options)
  }

  async delete(id: number, options?: DeleteQueueOptions): Promise<void> {
    return this.client.delete(`/api/v3/queue/${id}`, undefined, options)
  }

  async bulkDelete(ids: number[], options?: DeleteQueueOptions): Promise<void> {
    return this.client.delete('/api/v3/queue/bulk', { ids }, options)
  }

  async getStatus(): Promise<QueueStatus> {
    return this.client.get('/api/v3/queue/status')
  }

  async getDetails(options?: GetQueueDetailsOptions): Promise<Queue[]> {
    return this.client.get('/api/v3/queue/details', options)
  }

  async grab(id: number): Promise<void> {
    return this.client.post(`/api/v3/queue/grab/${id}`)
  }

  async bulkGrab(ids: number[]): Promise<void> {
    return this.client.post('/api/v3/queue/grab/bulk', { ids })
  }
}
