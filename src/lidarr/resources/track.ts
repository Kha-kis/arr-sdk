import type { ClientMethods } from '../../core/resource.js'
import type { Track, TrackFile, TrackFileList } from '../types.js'

export interface GetTrackOptions {
  artistId?: number
  albumId?: number
  albumReleaseId?: number
  trackIds?: number[]
  [key: string]: unknown
}

export class TrackResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: GetTrackOptions): Promise<Track[]> {
    return this.client.get('/api/v1/track', options)
  }

  async getById(id: number): Promise<Track> {
    return this.client.get(`/api/v1/track/${id}`)
  }
}

export class TrackFileResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: { artistId?: number; albumId?: number; trackFileIds?: number[] }): Promise<TrackFile[]> {
    return this.client.get('/api/v1/trackfile', options)
  }

  async getById(id: number): Promise<TrackFile> {
    return this.client.get(`/api/v1/trackfile/${id}`)
  }

  async update(id: number, trackFile: Partial<TrackFile> & { id: number }): Promise<TrackFile> {
    return this.client.put(`/api/v1/trackfile/${id}`, trackFile)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/trackfile/${id}`)
  }

  async bulkDelete(trackFileIds: number[]): Promise<void> {
    return this.client.delete('/api/v1/trackfile/bulk', { trackFileIds })
  }

  async updateList(trackFiles: TrackFileList): Promise<TrackFile[]> {
    return this.client.put('/api/v1/trackfile/editor', trackFiles)
  }
}
