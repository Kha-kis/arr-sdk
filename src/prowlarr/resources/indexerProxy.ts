import type { ClientMethods } from '../../core/resource.js'
import type { IndexerProxy } from '../types.js'

export class IndexerProxyResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<IndexerProxy[]> {
    return this.client.get('/api/v1/indexerproxy')
  }

  async getById(id: number): Promise<IndexerProxy> {
    return this.client.get(`/api/v1/indexerproxy/${id}`)
  }

  async create(proxy: Omit<IndexerProxy, 'id'>): Promise<IndexerProxy> {
    return this.client.post('/api/v1/indexerproxy', proxy)
  }

  async update(id: number, proxy: Partial<IndexerProxy> & { id: number }, forceSave?: boolean): Promise<IndexerProxy> {
    return this.client.put(`/api/v1/indexerproxy/${id}`, proxy, forceSave !== undefined ? { forceSave } : undefined)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/indexerproxy/${id}`)
  }

  async getSchema(): Promise<IndexerProxy[]> {
    return this.client.get('/api/v1/indexerproxy/schema')
  }

  async test(proxy: Partial<IndexerProxy>): Promise<void> {
    return this.client.post('/api/v1/indexerproxy/test', proxy)
  }

  async testAll(): Promise<void> {
    return this.client.post('/api/v1/indexerproxy/testall')
  }
}
