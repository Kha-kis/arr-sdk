import type { ClientMethods } from '../../core/resource.js'
import type { Indexer, IndexerBulk, IndexerConfig, IndexerFlag } from '../types.js'

export class IndexerResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Indexer[]> {
    return this.client.get('/api/v3/indexer')
  }

  async getById(id: number): Promise<Indexer> {
    return this.client.get(`/api/v3/indexer/${id}`)
  }

  async create(indexer: Omit<Indexer, 'id'>): Promise<Indexer> {
    return this.client.post('/api/v3/indexer', indexer)
  }

  async update(id: number, indexer: Partial<Indexer> & { id: number }, forceSave?: boolean): Promise<Indexer> {
    return this.client.put(`/api/v3/indexer/${id}`, indexer, forceSave !== undefined ? { forceSave } : undefined)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/indexer/${id}`)
  }

  async bulkUpdate(indexers: IndexerBulk): Promise<Indexer[]> {
    return this.client.put('/api/v3/indexer/bulk', indexers)
  }

  async bulkDelete(ids: number[]): Promise<void> {
    return this.client.delete('/api/v3/indexer/bulk', { ids })
  }

  async getSchema(): Promise<Indexer[]> {
    return this.client.get('/api/v3/indexer/schema')
  }

  async test(indexer: Partial<Indexer>): Promise<void> {
    return this.client.post('/api/v3/indexer/test', indexer)
  }

  async testAll(): Promise<void> {
    return this.client.post('/api/v3/indexer/testall')
  }
}

export class IndexerConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<IndexerConfig> {
    return this.client.get('/api/v3/config/indexer')
  }

  async update(config: Partial<IndexerConfig> & { id: number }): Promise<IndexerConfig> {
    return this.client.put(`/api/v3/config/indexer/${config.id}`, config)
  }
}

export class IndexerFlagResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<IndexerFlag[]> {
    return this.client.get('/api/v3/indexerflag')
  }
}
