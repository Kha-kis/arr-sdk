import type { ClientMethods } from '../../core/resource.js'
import type { MovieFile, MovieFileList } from '../types.js'

export class MovieFileResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: { movieId?: number; movieFileIds?: number[] }): Promise<MovieFile[]> {
    return this.client.get('/api/v3/moviefile', options)
  }

  async getById(id: number): Promise<MovieFile> {
    return this.client.get(`/api/v3/moviefile/${id}`)
  }

  async getByMovie(movieId: number): Promise<MovieFile[]> {
    return this.client.get('/api/v3/moviefile', { movieId })
  }

  async update(id: number, file: Partial<MovieFile> & { id: number }): Promise<MovieFile> {
    return this.client.put(`/api/v3/moviefile/${id}`, file)
  }

  async bulkUpdate(files: MovieFileList): Promise<MovieFile[]> {
    return this.client.put('/api/v3/moviefile/editor', files)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/moviefile/${id}`)
  }

  async bulkDelete(movieFileIds: number[]): Promise<void> {
    return this.client.delete('/api/v3/moviefile/bulk', { movieFileIds })
  }
}
