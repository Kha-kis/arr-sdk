import type { ClientMethods } from '../../core/resource.js'
import type { CommandResource } from '../types.js'

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
}
