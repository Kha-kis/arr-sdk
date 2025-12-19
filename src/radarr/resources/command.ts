import type { ClientMethods } from '../../core/resource.js'
import type { CommandResource, QualityModel, Language } from '../types.js'

/**
 * File entry for the ManualImport command
 */
export interface RadarrManualImportFile {
  path: string
  folderName?: string
  downloadId?: string
  quality?: QualityModel
  languages?: Language[]
  releaseGroup?: string
  indexerFlags?: number
  movieId?: number
  movieFileId?: number
}

export type RadarrCommand =
  | { name: 'ApplicationCheckUpdate' }
  | { name: 'Backup' }
  | { name: 'CleanUpRecycleBin' }
  | { name: 'ClearBlocklist' }
  | { name: 'ClearLog' }
  | { name: 'Cutoff'; filterKey?: string; filterValue?: string }
  | { name: 'DownloadedMoviesScan'; path?: string; downloadClientId?: string; importMode?: 'Auto' | 'Move' | 'Copy' }
  | { name: 'MissingMoviesSearch'; filterKey?: string; filterValue?: string }
  | { name: 'MoviesSearch'; movieIds: number[] }
  | { name: 'RefreshCollections' }
  | { name: 'RefreshMonitoredDownloads' }
  | { name: 'RefreshMovie'; movieIds?: number[] }
  | { name: 'RenameFiles'; movieId: number; files: number[] }
  | { name: 'RenameMovie'; movieIds: number[] }
  | { name: 'Rescan'; movieId?: number }
  | { name: 'RssSync' }
  | { name: 'ManualImport'; files: RadarrManualImportFile[]; importMode?: 'auto' | 'move' | 'copy' }

export class CommandResource_ {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<CommandResource[]> {
    return this.client.get('/api/v3/command')
  }

  async getById(id: number): Promise<CommandResource> {
    return this.client.get(`/api/v3/command/${id}`)
  }

  async execute(command: RadarrCommand): Promise<CommandResource> {
    return this.client.post('/api/v3/command', command)
  }

  async cancel(id: number): Promise<void> {
    return this.client.delete(`/api/v3/command/${id}`)
  }

  // Convenience methods
  async refreshMovie(movieIds?: number[]): Promise<CommandResource> {
    return this.execute({ name: 'RefreshMovie', movieIds })
  }

  async rescan(movieId?: number): Promise<CommandResource> {
    return this.execute({ name: 'Rescan', movieId })
  }

  async rssSync(): Promise<CommandResource> {
    return this.execute({ name: 'RssSync' })
  }

  async moviesSearch(movieIds: number[]): Promise<CommandResource> {
    return this.execute({ name: 'MoviesSearch', movieIds })
  }

  async missingMoviesSearch(options?: { filterKey?: string; filterValue?: string }): Promise<CommandResource> {
    return this.execute({ name: 'MissingMoviesSearch', ...options })
  }

  async backup(): Promise<CommandResource> {
    return this.execute({ name: 'Backup' })
  }

  async clearBlocklist(): Promise<CommandResource> {
    return this.execute({ name: 'ClearBlocklist' })
  }

  async renameMovie(movieIds: number[]): Promise<CommandResource> {
    return this.execute({ name: 'RenameMovie', movieIds })
  }

  async renameFiles(movieId: number, files: number[]): Promise<CommandResource> {
    return this.execute({ name: 'RenameFiles', movieId, files })
  }

  async downloadedMoviesScan(options?: { path?: string; downloadClientId?: string; importMode?: 'Auto' | 'Move' | 'Copy' }): Promise<CommandResource> {
    return this.execute({ name: 'DownloadedMoviesScan', ...options })
  }

  async refreshCollections(): Promise<CommandResource> {
    return this.execute({ name: 'RefreshCollections' })
  }

  async manualImport(files: RadarrManualImportFile[], importMode?: 'auto' | 'move' | 'copy'): Promise<CommandResource> {
    return this.execute({ name: 'ManualImport', files, importMode })
  }
}
