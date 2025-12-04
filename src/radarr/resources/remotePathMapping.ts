import type { ClientMethods } from '../../core/resource.js'
import type { RemotePathMapping } from '../types.js'

export class RemotePathMappingResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<RemotePathMapping[]> {
    return this.client.get('/api/v3/remotepathmapping')
  }

  async getById(id: number): Promise<RemotePathMapping> {
    return this.client.get(`/api/v3/remotepathmapping/${id}`)
  }

  async create(mapping: Omit<RemotePathMapping, 'id'>): Promise<RemotePathMapping> {
    return this.client.post('/api/v3/remotepathmapping', mapping)
  }

  async update(id: number, mapping: Partial<RemotePathMapping> & { id: number }): Promise<RemotePathMapping> {
    return this.client.put(`/api/v3/remotepathmapping/${id}`, mapping)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/remotepathmapping/${id}`)
  }
}
