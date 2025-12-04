import type { ClientMethods } from '../../core/resource.js'
import type { CommandResource } from '../types.js'

export type SonarrCommand =
  | { name: 'ApplicationCheckUpdate' }
  | { name: 'Backup' }
  | { name: 'ClearBlocklist' }
  | { name: 'ClearLog' }
  | { name: 'Cutoff'; seriesId?: number }
  | { name: 'DownloadedEpisodesScan'; path?: string; downloadClientId?: string; importMode?: 'Auto' | 'Move' | 'Copy' }
  | { name: 'EpisodeSearch'; episodeIds: number[] }
  | { name: 'MissingEpisodeSearch'; seriesId?: number }
  | { name: 'MoveSeries'; seriesIds: number[]; destinationRootFolder: string }
  | { name: 'RefreshSeries'; seriesId?: number }
  | { name: 'RenameSeries'; seriesIds: number[] }
  | { name: 'RenameFiles'; seriesId: number; files: number[] }
  | { name: 'Rescan' }
  | { name: 'RssSync' }
  | { name: 'SeasonSearch'; seriesId: number; seasonNumber: number }
  | { name: 'SeriesSearch'; seriesId: number }
  | { name: 'UpdateAll' }

export class CommandResource_ {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<CommandResource[]> {
    return this.client.get('/api/v3/command')
  }

  async getById(id: number): Promise<CommandResource> {
    return this.client.get(`/api/v3/command/${id}`)
  }

  async execute(command: SonarrCommand): Promise<CommandResource> {
    return this.client.post('/api/v3/command', command)
  }

  async cancel(id: number): Promise<void> {
    return this.client.delete(`/api/v3/command/${id}`)
  }

  // Convenience methods
  async refreshSeries(seriesId?: number): Promise<CommandResource> {
    return this.execute({ name: 'RefreshSeries', seriesId })
  }

  async rescan(): Promise<CommandResource> {
    return this.execute({ name: 'Rescan' })
  }

  async rssSync(): Promise<CommandResource> {
    return this.execute({ name: 'RssSync' })
  }

  async episodeSearch(episodeIds: number[]): Promise<CommandResource> {
    return this.execute({ name: 'EpisodeSearch', episodeIds })
  }

  async seasonSearch(seriesId: number, seasonNumber: number): Promise<CommandResource> {
    return this.execute({ name: 'SeasonSearch', seriesId, seasonNumber })
  }

  async seriesSearch(seriesId: number): Promise<CommandResource> {
    return this.execute({ name: 'SeriesSearch', seriesId })
  }

  async missingEpisodeSearch(seriesId?: number): Promise<CommandResource> {
    return this.execute({ name: 'MissingEpisodeSearch', seriesId })
  }

  async backup(): Promise<CommandResource> {
    return this.execute({ name: 'Backup' })
  }

  async clearBlocklist(): Promise<CommandResource> {
    return this.execute({ name: 'ClearBlocklist' })
  }

  async renameSeries(seriesIds: number[]): Promise<CommandResource> {
    return this.execute({ name: 'RenameSeries', seriesIds })
  }

  async renameFiles(seriesId: number, files: number[]): Promise<CommandResource> {
    return this.execute({ name: 'RenameFiles', seriesId, files })
  }

  async downloadedEpisodesScan(options?: { path?: string; downloadClientId?: string; importMode?: 'Auto' | 'Move' | 'Copy' }): Promise<CommandResource> {
    return this.execute({ name: 'DownloadedEpisodesScan', ...options })
  }

  async moveSeries(seriesIds: number[], destinationRootFolder: string): Promise<CommandResource> {
    return this.execute({ name: 'MoveSeries', seriesIds, destinationRootFolder })
  }
}
