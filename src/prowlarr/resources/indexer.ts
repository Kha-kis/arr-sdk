import type { ClientMethods } from '../../core/resource.js'
import type { Indexer, IndexerBulk, IndexerStats, IndexerStatus } from '../types.js'

export class IndexerResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Indexer[]> {
    return this.client.get('/api/v1/indexer')
  }

  async getById(id: number): Promise<Indexer> {
    return this.client.get(`/api/v1/indexer/${id}`)
  }

  async create(indexer: Omit<Indexer, 'id'>): Promise<Indexer> {
    return this.client.post('/api/v1/indexer', indexer)
  }

  async update(id: number, indexer: Partial<Indexer> & { id: number }, forceSave?: boolean): Promise<Indexer> {
    return this.client.put(`/api/v1/indexer/${id}`, indexer, forceSave !== undefined ? { forceSave } : undefined)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/indexer/${id}`)
  }

  async bulkUpdate(indexers: IndexerBulk): Promise<Indexer[]> {
    return this.client.put('/api/v1/indexer/bulk', indexers)
  }

  async bulkDelete(ids: number[]): Promise<void> {
    return this.client.delete('/api/v1/indexer/bulk', { ids })
  }

  async getSchema(): Promise<Indexer[]> {
    return this.client.get('/api/v1/indexer/schema')
  }

  async test(indexer: Partial<Indexer>): Promise<void> {
    return this.client.post('/api/v1/indexer/test', indexer)
  }

  async testAll(): Promise<void> {
    return this.client.post('/api/v1/indexer/testall')
  }
}

export class IndexerStatsResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<IndexerStats> {
    return this.client.get('/api/v1/indexerstats')
  }
}

export class IndexerStatusResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<IndexerStatus[]> {
    return this.client.get('/api/v1/indexerstatus')
  }

  async getById(id: number): Promise<IndexerStatus> {
    return this.client.get(`/api/v1/indexerstatus/${id}`)
  }
}
