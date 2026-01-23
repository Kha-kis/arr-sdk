import type { ClientMethods } from '../../core/resource.js'
import type { Artist, ArtistEditor } from '../types.js'

export interface GetArtistOptions {
  mbId?: string
  [key: string]: unknown
}

export interface DeleteArtistOptions {
  deleteFiles?: boolean
  addImportListExclusion?: boolean
  [key: string]: unknown
}

export class ArtistResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: GetArtistOptions): Promise<Artist[]> {
    return this.client.get('/api/v1/artist', options)
  }

  async getById(id: number): Promise<Artist> {
    return this.client.get(`/api/v1/artist/${id}`)
  }

  async create(artist: Omit<Artist, 'id'>): Promise<Artist> {
    return this.client.post('/api/v1/artist', artist)
  }

  async update(id: number, artist: Partial<Artist> & { id: number }, moveFiles?: boolean): Promise<Artist> {
    return this.client.put(`/api/v1/artist/${id}`, artist, moveFiles !== undefined ? { moveFiles } : undefined)
  }

  async delete(id: number, options?: DeleteArtistOptions): Promise<void> {
    return this.client.delete(`/api/v1/artist/${id}`, undefined, options)
  }

  async lookup(term: string): Promise<Artist[]> {
    return this.client.get('/api/v1/artist/lookup', { term })
  }

  async bulkEdit(resource: ArtistEditor): Promise<Artist[]> {
    return this.client.put('/api/v1/artist/editor', resource)
  }

  async bulkDelete(artistIds: number[], options?: DeleteArtistOptions): Promise<void> {
    return this.client.delete('/api/v1/artist/editor', {
      artistIds,
      ...options
    })
  }

  async refresh(artistId?: number): Promise<void> {
    return this.client.post('/api/v1/command', {
      name: 'RefreshArtist',
      artistId
    })
  }
}
