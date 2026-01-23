import type { ClientMethods } from '../../core/resource.js'
import type { CommandResource, QualityModel } from '../types.js'

/**
 * File entry for the ManualImport command
 */
export interface LidarrManualImportFile {
  path: string
  folderName?: string
  downloadId?: string
  quality?: QualityModel
  releaseGroup?: string
  indexerFlags?: number
  artistId?: number
  albumId?: number
  albumReleaseId?: number
  trackIds?: number[]
  disableReleaseSwitching?: boolean
  replaceExistingFiles?: boolean
}

export type LidarrCommand =
  | { name: 'RefreshArtist'; artistId?: number }
  | { name: 'RefreshAlbum'; albumId?: number }
  | { name: 'RescanArtist'; artistId?: number }
  | { name: 'ArtistSearch'; artistId: number }
  | { name: 'AlbumSearch'; albumIds: number[] }
  | { name: 'MissingAlbumSearch'; artistId?: number }
  | { name: 'CutoffUnmetAlbumSearch'; artistId?: number }
  | { name: 'ApplicationUpdateCheck' }
  | { name: 'Backup' }
  | { name: 'RefreshMonitoredDownloads' }
  | { name: 'ClearBlocklist' }
  | { name: 'CleanUpRecycleBin' }
  | { name: 'DeleteLogFiles' }
  | { name: 'DeleteUpdateLogFiles' }
  | { name: 'DownloadedAlbumsScan'; path?: string; downloadClientId?: string; importMode?: 'Auto' | 'Move' | 'Copy' }
  | { name: 'RssSync' }
  | { name: 'Housekeeping' }
  | { name: 'ManualImport'; files: LidarrManualImportFile[]; importMode?: 'Auto' | 'Move' | 'Copy' }

export class CommandResource_ {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<CommandResource[]> {
    return this.client.get('/api/v1/command')
  }

  async getById(id: number): Promise<CommandResource> {
    return this.client.get(`/api/v1/command/${id}`)
  }

  async execute(command: LidarrCommand): Promise<CommandResource> {
    return this.client.post('/api/v1/command', command)
  }

  async cancel(id: number): Promise<void> {
    return this.client.delete(`/api/v1/command/${id}`)
  }

  // Convenience methods
  async refreshArtist(artistId?: number): Promise<CommandResource> {
    return this.execute({ name: 'RefreshArtist', artistId })
  }

  async refreshAlbum(albumId?: number): Promise<CommandResource> {
    return this.execute({ name: 'RefreshAlbum', albumId })
  }

  async rescanArtist(artistId?: number): Promise<CommandResource> {
    return this.execute({ name: 'RescanArtist', artistId })
  }

  async artistSearch(artistId: number): Promise<CommandResource> {
    return this.execute({ name: 'ArtistSearch', artistId })
  }

  async albumSearch(albumIds: number[]): Promise<CommandResource> {
    return this.execute({ name: 'AlbumSearch', albumIds })
  }

  async missingAlbumSearch(artistId?: number): Promise<CommandResource> {
    return this.execute({ name: 'MissingAlbumSearch', artistId })
  }

  async rssSync(): Promise<CommandResource> {
    return this.execute({ name: 'RssSync' })
  }

  async backup(): Promise<CommandResource> {
    return this.execute({ name: 'Backup' })
  }

  async clearBlocklist(): Promise<CommandResource> {
    return this.execute({ name: 'ClearBlocklist' })
  }

  async downloadedAlbumsScan(options?: { path?: string; downloadClientId?: string; importMode?: 'Auto' | 'Move' | 'Copy' }): Promise<CommandResource> {
    return this.execute({ name: 'DownloadedAlbumsScan', ...options })
  }

  async manualImport(files: LidarrManualImportFile[], importMode?: 'Auto' | 'Move' | 'Copy'): Promise<CommandResource> {
    return this.execute({ name: 'ManualImport', files, importMode })
  }
}
