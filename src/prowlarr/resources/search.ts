import type { ClientMethods } from '../../core/resource.js'
import type { Release } from '../types.js'

export interface SearchOptions {
  query?: string
  type?: 'search' | 'tvsearch' | 'movie' | 'music' | 'book'
  indexerIds?: number[]
  categories?: number[]
  limit?: number
  offset?: number
  [key: string]: unknown
}

export class SearchResource {
  constructor(private client: ClientMethods) {}

  async query(options: SearchOptions): Promise<Release[]> {
    return this.client.get('/api/v1/search', options)
  }

  async getById(guid: string): Promise<Release> {
    return this.client.get(`/api/v1/search/${guid}`)
  }

  async grab(release: { guid: string; indexerId: number }): Promise<Release> {
    return this.client.post('/api/v1/search', release)
  }

  async bulkGrab(releases: { guid: string; indexerId: number }[]): Promise<Release[]> {
    return this.client.post('/api/v1/search/bulk', releases)
  }
}
