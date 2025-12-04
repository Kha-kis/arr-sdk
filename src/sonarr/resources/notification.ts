import type { ClientMethods } from '../../core/resource.js'
import type { Notification } from '../types.js'

export class NotificationResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Notification[]> {
    return this.client.get('/api/v3/notification')
  }

  async getById(id: number): Promise<Notification> {
    return this.client.get(`/api/v3/notification/${id}`)
  }

  async create(notification: Omit<Notification, 'id'>): Promise<Notification> {
    return this.client.post('/api/v3/notification', notification)
  }

  async update(id: number, notification: Partial<Notification> & { id: number }, forceSave?: boolean): Promise<Notification> {
    return this.client.put(`/api/v3/notification/${id}`, notification, forceSave !== undefined ? { forceSave } : undefined)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/notification/${id}`)
  }

  async getSchema(): Promise<Notification[]> {
    return this.client.get('/api/v3/notification/schema')
  }

  async test(notification: Partial<Notification>): Promise<void> {
    return this.client.post('/api/v3/notification/test', notification)
  }

  async testAll(): Promise<void> {
    return this.client.post('/api/v3/notification/testall')
  }
}
