import type { ClientMethods } from '../../core/resource.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'
import type { Episode } from '../types.js'

export interface GetWantedOptions extends PaginationOptions {
  includeSeries?: boolean
  includeEpisodeFile?: boolean
  includeImages?: boolean
  monitored?: boolean
}

export class WantedResource {
  constructor(private client: ClientMethods) {}

  /**
   * Get episodes that don't meet quality cutoff
   */
  async cutoff(options?: GetWantedOptions): Promise<PaginatedResponse<Episode>> {
    return this.client.get('/api/v3/wanted/cutoff', options)
  }

  /**
   * Get all episodes not meeting quality cutoff (async generator)
   */
  async *cutoffAll(options?: Omit<GetWantedOptions, 'page'>): AsyncGenerator<Episode, void, undefined> {
    yield* this.client.paginate<Episode>('/api/v3/wanted/cutoff', options)
  }

  /**
   * Get all episodes not meeting quality cutoff as array
   */
  async cutoffAllArray(options?: Omit<GetWantedOptions, 'page'>): Promise<Episode[]> {
    return this.client.paginateAll<Episode>('/api/v3/wanted/cutoff', options)
  }

  /**
   * Get missing episodes
   */
  async missing(options?: GetWantedOptions): Promise<PaginatedResponse<Episode>> {
    return this.client.get('/api/v3/wanted/missing', options)
  }

  /**
   * Get all missing episodes (async generator)
   */
  async *missingAll(options?: Omit<GetWantedOptions, 'page'>): AsyncGenerator<Episode, void, undefined> {
    yield* this.client.paginate<Episode>('/api/v3/wanted/missing', options)
  }

  /**
   * Get all missing episodes as array
   */
  async missingAllArray(options?: Omit<GetWantedOptions, 'page'>): Promise<Episode[]> {
    return this.client.paginateAll<Episode>('/api/v3/wanted/missing', options)
  }
}
