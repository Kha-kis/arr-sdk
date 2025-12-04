import type { ClientMethods } from '../../core/resource.js'
import type { Movie, MovieEditor } from '../types.js'

export interface GetMovieOptions {
  tmdbId?: number
  excludeLocalCovers?: boolean
  [key: string]: unknown
}

export interface DeleteMovieOptions {
  deleteFiles?: boolean
  addImportExclusion?: boolean
  [key: string]: unknown
}

export class MovieResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: GetMovieOptions): Promise<Movie[]> {
    return this.client.get('/api/v3/movie', options)
  }

  async getById(id: number): Promise<Movie> {
    return this.client.get(`/api/v3/movie/${id}`)
  }

  async create(movie: Omit<Movie, 'id'>): Promise<Movie> {
    return this.client.post('/api/v3/movie', movie)
  }

  async update(id: number, movie: Partial<Movie> & { id: number }, moveFiles?: boolean): Promise<Movie> {
    return this.client.put(`/api/v3/movie/${id}`, movie, moveFiles !== undefined ? { moveFiles } : undefined)
  }

  async delete(id: number, options?: DeleteMovieOptions): Promise<void> {
    return this.client.delete(`/api/v3/movie/${id}`, undefined, options)
  }

  async lookup(term: string): Promise<Movie[]> {
    return this.client.get('/api/v3/movie/lookup', { term })
  }

  async lookupByTmdbId(tmdbId: number): Promise<Movie[]> {
    return this.client.get('/api/v3/movie/lookup/tmdb', { tmdbId })
  }

  async lookupByImdbId(imdbId: string): Promise<Movie[]> {
    return this.client.get('/api/v3/movie/lookup/imdb', { imdbId })
  }

  async bulkEdit(resource: MovieEditor): Promise<Movie[]> {
    return this.client.put('/api/v3/movie/editor', resource)
  }

  async bulkDelete(movieIds: number[], options?: DeleteMovieOptions): Promise<void> {
    return this.client.delete('/api/v3/movie/editor', {
      movieIds,
      ...options
    })
  }

  async import(movies: Movie[]): Promise<Movie[]> {
    return this.client.post('/api/v3/movie/import', movies)
  }
}
