import type { ClientMethods } from '../../core/resource.js'
import type { CommandResource, QualityModel } from '../types.js'

/**
 * File entry for the ManualImport command
 */
export interface ReadarrManualImportFile {
  path: string
  folderName?: string
  downloadId?: string
  quality?: QualityModel
  releaseGroup?: string
  indexerFlags?: number
  authorId?: number
  bookId?: number
  foreignEditionId?: string
  disableReleaseSwitching?: boolean
  replaceExistingFiles?: boolean
}

export type ReadarrCommand =
  | { name: 'RefreshAuthor'; authorId?: number }
  | { name: 'RefreshBook'; bookId?: number }
  | { name: 'RenameAuthor'; authorIds: number[] }
  | { name: 'RenameFiles'; authorId: number; files: number[] }
  | { name: 'RescanFolders' }
  | { name: 'RssSync' }
  | { name: 'BookSearch'; bookIds: number[] }
  | { name: 'AuthorSearch'; authorId: number }
  | { name: 'MissingBookSearch'; filterKey?: string; filterValue?: string }
  | { name: 'CutoffUnmetBookSearch'; filterKey?: string; filterValue?: string }
  | { name: 'RetagAuthor'; authorId: number }
  | { name: 'RetagFiles'; authorId: number; files: number[] }
  | { name: 'ApplicationUpdateCheck' }
  | { name: 'Backup' }
  | { name: 'RefreshMonitoredDownloads' }
  | { name: 'CheckHealth' }
  | { name: 'CleanUpRecycleBin' }
  | { name: 'ClearBlocklist' }
  | { name: 'MessagingCleanup' }
  | { name: 'ImportListSync' }
  | { name: 'DownloadedBooksScan'; path?: string; downloadClientId?: string; importMode?: 'Auto' | 'Move' | 'Copy' }
  | { name: 'ManualImport'; files: ReadarrManualImportFile[]; importMode?: 'Auto' | 'Move' | 'Copy' }

export class CommandResource_ {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<CommandResource[]> {
    return this.client.get('/api/v1/command')
  }

  async getById(id: number): Promise<CommandResource> {
    return this.client.get(`/api/v1/command/${id}`)
  }

  async execute(command: ReadarrCommand): Promise<CommandResource> {
    return this.client.post('/api/v1/command', command)
  }

  async cancel(id: number): Promise<void> {
    return this.client.delete(`/api/v1/command/${id}`)
  }

  // Convenience methods
  async refreshAuthor(authorId?: number): Promise<CommandResource> {
    return this.execute({ name: 'RefreshAuthor', authorId })
  }

  async refreshBook(bookId?: number): Promise<CommandResource> {
    return this.execute({ name: 'RefreshBook', bookId })
  }

  async rescanFolders(): Promise<CommandResource> {
    return this.execute({ name: 'RescanFolders' })
  }

  async authorSearch(authorId: number): Promise<CommandResource> {
    return this.execute({ name: 'AuthorSearch', authorId })
  }

  async bookSearch(bookIds: number[]): Promise<CommandResource> {
    return this.execute({ name: 'BookSearch', bookIds })
  }

  async missingBookSearch(filterKey?: string, filterValue?: string): Promise<CommandResource> {
    return this.execute({ name: 'MissingBookSearch', filterKey, filterValue })
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

  async downloadedBooksScan(options?: { path?: string; downloadClientId?: string; importMode?: 'Auto' | 'Move' | 'Copy' }): Promise<CommandResource> {
    return this.execute({ name: 'DownloadedBooksScan', ...options })
  }

  async manualImport(files: ReadarrManualImportFile[], importMode?: 'Auto' | 'Move' | 'Copy'): Promise<CommandResource> {
    return this.execute({ name: 'ManualImport', files, importMode })
  }
}
