import type { ClientMethods } from '../../core/resource.js'
import type { DownloadClient, DownloadClientBulk, DownloadClientConfig } from '../types.js'

export class DownloadClientResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<DownloadClient[]> {
    return this.client.get('/api/v3/downloadclient')
  }

  async getById(id: number): Promise<DownloadClient> {
    return this.client.get(`/api/v3/downloadclient/${id}`)
  }

  async create(client: Omit<DownloadClient, 'id'>): Promise<DownloadClient> {
    return this.client.post('/api/v3/downloadclient', client)
  }

  async update(id: number, client: Partial<DownloadClient> & { id: number }, forceSave?: boolean): Promise<DownloadClient> {
    return this.client.put(`/api/v3/downloadclient/${id}`, client, forceSave !== undefined ? { forceSave } : undefined)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/downloadclient/${id}`)
  }

  async bulkUpdate(clients: DownloadClientBulk): Promise<DownloadClient[]> {
    return this.client.put('/api/v3/downloadclient/bulk', clients)
  }

  async bulkDelete(ids: number[]): Promise<void> {
    return this.client.delete('/api/v3/downloadclient/bulk', { ids })
  }

  async getSchema(): Promise<DownloadClient[]> {
    return this.client.get('/api/v3/downloadclient/schema')
  }

  async test(client: Partial<DownloadClient>): Promise<void> {
    return this.client.post('/api/v3/downloadclient/test', client)
  }

  async testAll(): Promise<void> {
    return this.client.post('/api/v3/downloadclient/testall')
  }
}

export class DownloadClientConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<DownloadClientConfig> {
    return this.client.get('/api/v3/config/downloadclient')
  }

  async update(config: Partial<DownloadClientConfig> & { id: number }): Promise<DownloadClientConfig> {
    return this.client.put(`/api/v3/config/downloadclient/${config.id}`, config)
  }
}
