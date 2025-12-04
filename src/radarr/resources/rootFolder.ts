import type { ClientMethods } from '../../core/resource.js'
import type { RootFolder } from '../types.js'

export class RootFolderResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<RootFolder[]> {
    return this.client.get('/api/v3/rootfolder')
  }

  async getById(id: number): Promise<RootFolder> {
    return this.client.get(`/api/v3/rootfolder/${id}`)
  }

  async create(folder: Omit<RootFolder, 'id'>): Promise<RootFolder> {
    return this.client.post('/api/v3/rootfolder', folder)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/rootfolder/${id}`)
  }
}
