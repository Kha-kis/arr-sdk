import type { ClientMethods } from '../../core/resource.js'
import type { Episode, EpisodeFile, EpisodeFileList, RenameEpisode } from '../types.js'

export interface GetEpisodesOptions {
  seriesId?: number
  seasonNumber?: number
  episodeIds?: number[]
  episodeFileId?: number
  includeImages?: boolean
  [key: string]: unknown
}

export interface DeleteEpisodeFileOptions {
  episodeFileId?: number
  [key: string]: unknown
}

export class EpisodeResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: GetEpisodesOptions): Promise<Episode[]> {
    return this.client.get('/api/v3/episode', options)
  }

  async getById(id: number): Promise<Episode> {
    return this.client.get(`/api/v3/episode/${id}`)
  }

  async getBySeries(seriesId: number, options?: { seasonNumber?: number; includeImages?: boolean }): Promise<Episode[]> {
    return this.client.get('/api/v3/episode', { seriesId, ...options })
  }

  async update(id: number, episode: Partial<Episode> & { id: number }): Promise<Episode> {
    return this.client.put(`/api/v3/episode/${id}`, episode)
  }

  async setMonitored(episodeIds: number[], monitored: boolean): Promise<Episode[]> {
    return this.client.put('/api/v3/episode/monitor', { episodeIds, monitored })
  }
}

export class EpisodeFileResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: { seriesId?: number; episodeFileIds?: number[] }): Promise<EpisodeFile[]> {
    return this.client.get('/api/v3/episodefile', options)
  }

  async getById(id: number): Promise<EpisodeFile> {
    return this.client.get(`/api/v3/episodefile/${id}`)
  }

  async getBySeries(seriesId: number): Promise<EpisodeFile[]> {
    return this.client.get('/api/v3/episodefile', { seriesId })
  }

  async update(id: number, file: Partial<EpisodeFile> & { id: number }): Promise<EpisodeFile> {
    return this.client.put(`/api/v3/episodefile/${id}`, file)
  }

  async bulkUpdate(files: EpisodeFileList): Promise<EpisodeFile[]> {
    return this.client.put('/api/v3/episodefile/editor', files)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/episodefile/${id}`)
  }

  async bulkDelete(episodeFileIds: number[]): Promise<void> {
    return this.client.delete('/api/v3/episodefile/bulk', { episodeFileIds })
  }
}

export class RenameEpisodeResource {
  constructor(private client: ClientMethods) {}

  async get(seriesId: number, seasonNumber?: number): Promise<RenameEpisode[]> {
    return this.client.get('/api/v3/rename', { seriesId, seasonNumber })
  }
}
