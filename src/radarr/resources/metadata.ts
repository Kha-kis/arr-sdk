import type { ClientMethods } from '../../core/resource.js'
import type { Metadata } from '../types.js'

export class MetadataResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Metadata[]> {
    return this.client.get('/api/v3/metadata')
  }

  async getById(id: number): Promise<Metadata> {
    return this.client.get(`/api/v3/metadata/${id}`)
  }

  async create(metadata: Omit<Metadata, 'id'>): Promise<Metadata> {
    return this.client.post('/api/v3/metadata', metadata)
  }

  async update(id: number, metadata: Partial<Metadata> & { id: number }, forceSave?: boolean): Promise<Metadata> {
    return this.client.put(`/api/v3/metadata/${id}`, metadata, forceSave !== undefined ? { forceSave } : undefined)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/metadata/${id}`)
  }

  async getSchema(): Promise<Metadata[]> {
    return this.client.get('/api/v3/metadata/schema')
  }

  async test(metadata: Partial<Metadata>): Promise<void> {
    return this.client.post('/api/v3/metadata/test', metadata)
  }

  async testAll(): Promise<void> {
    return this.client.post('/api/v3/metadata/testall')
  }
}
