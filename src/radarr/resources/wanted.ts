import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'
import type { Movie } from '../types.js'

export interface GetWantedOptions extends PaginationOptions {
  includeImages?: boolean
  monitored?: boolean
}

export class WantedResource {
  constructor(private client: ClientMethods) {}

  /**
   * Get movies that don't meet quality cutoff
   */
  async cutoff(options?: GetWantedOptions): Promise<PaginatedResponse<Movie>> {
    return this.client.get('/api/v3/wanted/cutoff', options)
  }

  /**
   * Get all movies not meeting quality cutoff (async generator)
   */
  async *cutoffAll(options?: Omit<GetWantedOptions, 'page'>): AsyncGenerator<Movie, void, undefined> {
    yield* this.client.paginate<Movie>('/api/v3/wanted/cutoff', options)
  }

  /**
   * Get all movies not meeting quality cutoff as array
   */
  async cutoffAllArray(options?: Omit<GetWantedOptions, 'page'>): Promise<Movie[]> {
    return this.client.paginateAll<Movie>('/api/v3/wanted/cutoff', options)
  }

  /**
   * Get missing movies
   */
  async missing(options?: GetWantedOptions): Promise<PaginatedResponse<Movie>> {
    return this.client.get('/api/v3/wanted/missing', options)
  }

  /**
   * Get all missing movies (async generator)
   */
  async *missingAll(options?: Omit<GetWantedOptions, 'page'>): AsyncGenerator<Movie, void, undefined> {
    yield* this.client.paginate<Movie>('/api/v3/wanted/missing', options)
  }

  /**
   * Get all missing movies as array
   */
  async missingAllArray(options?: Omit<GetWantedOptions, 'page'>): Promise<Movie[]> {
    return this.client.paginateAll<Movie>('/api/v3/wanted/missing', options)
  }
}
