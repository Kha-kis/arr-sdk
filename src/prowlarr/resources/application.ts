import type { ClientMethods } from '../../core/resource.js'
import type { Application, ApplicationBulk } from '../types.js'

export class ApplicationResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Application[]> {
    return this.client.get('/api/v1/applications')
  }

  async getById(id: number): Promise<Application> {
    return this.client.get(`/api/v1/applications/${id}`)
  }

  async create(application: Omit<Application, 'id'>): Promise<Application> {
    return this.client.post('/api/v1/applications', application)
  }

  async update(id: number, application: Partial<Application> & { id: number }, forceSave?: boolean): Promise<Application> {
    return this.client.put(`/api/v1/applications/${id}`, application, forceSave !== undefined ? { forceSave } : undefined)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/applications/${id}`)
  }

  async bulkUpdate(applications: ApplicationBulk): Promise<Application[]> {
    return this.client.put('/api/v1/applications/bulk', applications)
  }

  async bulkDelete(ids: number[]): Promise<void> {
    return this.client.delete('/api/v1/applications/bulk', { ids })
  }

  async getSchema(): Promise<Application[]> {
    return this.client.get('/api/v1/applications/schema')
  }

  async test(application: Partial<Application>): Promise<void> {
    return this.client.post('/api/v1/applications/test', application)
  }

  async testAll(): Promise<void> {
    return this.client.post('/api/v1/applications/testall')
  }

  async sync(): Promise<void> {
    return this.client.post('/api/v1/applications/action/sync')
  }
}
