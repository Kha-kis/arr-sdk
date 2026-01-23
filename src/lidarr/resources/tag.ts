import type { ClientMethods } from '../../core/resource.js'
import type { Tag, TagDetails } from '../types.js'

export class TagResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Tag[]> {
    return this.client.get('/api/v1/tag')
  }

  async getById(id: number): Promise<Tag> {
    return this.client.get(`/api/v1/tag/${id}`)
  }

  async create(tag: Omit<Tag, 'id'>): Promise<Tag> {
    return this.client.post('/api/v1/tag', tag)
  }

  async update(id: number, tag: Partial<Tag> & { id: number }): Promise<Tag> {
    return this.client.put(`/api/v1/tag/${id}`, tag)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/tag/${id}`)
  }
}

export class TagDetailsResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<TagDetails[]> {
    return this.client.get('/api/v1/tag/detail')
  }

  async getById(id: number): Promise<TagDetails> {
    return this.client.get(`/api/v1/tag/detail/${id}`)
  }
}
