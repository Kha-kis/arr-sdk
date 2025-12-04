import type { ClientMethods } from '../../core/resource.js'
import type { Release } from '../types.js'

export interface SearchReleasesOptions {
  movieId?: number
  [key: string]: unknown
}

export class ReleaseResource {
  constructor(private client: ClientMethods) {}

  async get(options?: SearchReleasesOptions): Promise<Release[]> {
    return this.client.get('/api/v3/release', options)
  }

  async getById(id: number): Promise<Release> {
    return this.client.get(`/api/v3/release/${id}`)
  }

  async download(release: { guid: string; indexerId: number }): Promise<Release> {
    return this.client.post('/api/v3/release', release)
  }

  async push(release: Release): Promise<Release[]> {
    return this.client.post('/api/v3/release/push', release)
  }
}
