import type { ClientMethods } from '../../core/resource.js'
import type { CommandResource } from '../types.js'

export type ProwlarrCommand =
  | { name: 'ApplicationCheckUpdate' }
  | { name: 'ApplicationIndexerSync'; forceSync?: boolean }
  | { name: 'Backup' }
  | { name: 'ClearLog' }
  | { name: 'IndexerStatus' }
  | { name: 'RssSync' }
  | { name: 'RefreshIndexers' }

export class CommandResource_ {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<CommandResource[]> {
    return this.client.get('/api/v1/command')
  }

  async getById(id: number): Promise<CommandResource> {
    return this.client.get(`/api/v1/command/${id}`)
  }

  async execute(command: ProwlarrCommand): Promise<CommandResource> {
    return this.client.post('/api/v1/command', command)
  }

  async cancel(id: number): Promise<void> {
    return this.client.delete(`/api/v1/command/${id}`)
  }

  // Convenience methods
  async refreshIndexers(): Promise<CommandResource> {
    return this.execute({ name: 'RefreshIndexers' })
  }

  async rssSync(): Promise<CommandResource> {
    return this.execute({ name: 'RssSync' })
  }

  async backup(): Promise<CommandResource> {
    return this.execute({ name: 'Backup' })
  }

  async applicationIndexerSync(forceSync?: boolean): Promise<CommandResource> {
    return this.execute({ name: 'ApplicationIndexerSync', forceSync })
  }
}
