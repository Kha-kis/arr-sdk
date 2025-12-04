import type { ClientMethods } from '../../core/resource.js'
import type { Release, ReleaseProfile } from '../types.js'

export interface SearchReleasesOptions {
  episodeId?: number
  seriesId?: number
  seasonNumber?: number
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

export class ReleaseProfileResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<ReleaseProfile[]> {
    return this.client.get('/api/v3/releaseprofile')
  }

  async getById(id: number): Promise<ReleaseProfile> {
    return this.client.get(`/api/v3/releaseprofile/${id}`)
  }

  async create(profile: Omit<ReleaseProfile, 'id'>): Promise<ReleaseProfile> {
    return this.client.post('/api/v3/releaseprofile', profile)
  }

  async update(id: number, profile: Partial<ReleaseProfile> & { id: number }): Promise<ReleaseProfile> {
    return this.client.put(`/api/v3/releaseprofile/${id}`, profile)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/releaseprofile/${id}`)
  }
}
