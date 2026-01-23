import type { ClientMethods } from '../../core/resource.js'
import type { CommandResource } from '../types.js'

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
  | { name: 'DownloadedAlbumsScan'; path?: string }
  | { name: 'RssSync' }
  | { name: 'Housekeeping' }

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
}
