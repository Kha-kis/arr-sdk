import type { ClientMethods } from '../../core/resource.js'
import type { Album, AlbumsMonitored, AddAlbumOptions } from '../types.js'

export interface GetAlbumOptions {
  artistId?: number
  albumIds?: number[]
  foreignAlbumId?: string
  includeAllArtistAlbums?: boolean
  [key: string]: unknown
}

export interface DeleteAlbumOptions {
  deleteFiles?: boolean
  addImportListExclusion?: boolean
  [key: string]: unknown
}

export class AlbumResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: GetAlbumOptions): Promise<Album[]> {
    return this.client.get('/api/v1/album', options)
  }

  async getById(id: number): Promise<Album> {
    return this.client.get(`/api/v1/album/${id}`)
  }

  async create(album: Omit<Album, 'id'> & { addOptions?: AddAlbumOptions }): Promise<Album> {
    return this.client.post('/api/v1/album', album)
  }

  async update(id: number, album: Partial<Album> & { id: number }): Promise<Album> {
    return this.client.put(`/api/v1/album/${id}`, album)
  }

  async delete(id: number, options?: DeleteAlbumOptions): Promise<void> {
    return this.client.delete(`/api/v1/album/${id}`, undefined, options)
  }

  async lookup(term: string): Promise<Album[]> {
    return this.client.get('/api/v1/album/lookup', { term })
  }

  async monitor(data: AlbumsMonitored): Promise<Album[]> {
    return this.client.put('/api/v1/album/monitor', data)
  }
}
