import type { ClientMethods } from '../../core/resource.js'
import type { ImportList, ImportListBulk, ImportListConfig, ImportListExclusion, ImportListExclusionBulk } from '../types.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'

export class ImportListResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<ImportList[]> {
    return this.client.get('/api/v3/importlist')
  }

  async getById(id: number): Promise<ImportList> {
    return this.client.get(`/api/v3/importlist/${id}`)
  }

  async create(list: Omit<ImportList, 'id'>): Promise<ImportList> {
    return this.client.post('/api/v3/importlist', list)
  }

  async update(id: number, list: Partial<ImportList> & { id: number }, forceSave?: boolean): Promise<ImportList> {
    return this.client.put(`/api/v3/importlist/${id}`, list, forceSave !== undefined ? { forceSave } : undefined)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/importlist/${id}`)
  }

  async bulkUpdate(lists: ImportListBulk): Promise<ImportList[]> {
    return this.client.put('/api/v3/importlist/bulk', lists)
  }

  async bulkDelete(ids: number[]): Promise<void> {
    return this.client.delete('/api/v3/importlist/bulk', { ids })
  }

  async getSchema(): Promise<ImportList[]> {
    return this.client.get('/api/v3/importlist/schema')
  }

  async test(list: Partial<ImportList>): Promise<void> {
    return this.client.post('/api/v3/importlist/test', list)
  }

  async testAll(): Promise<void> {
    return this.client.post('/api/v3/importlist/testall')
  }
}

export class ImportListConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<ImportListConfig> {
    return this.client.get('/api/v3/config/importlist')
  }

  async update(config: Partial<ImportListConfig> & { id: number }): Promise<ImportListConfig> {
    return this.client.put(`/api/v3/config/importlist/${config.id}`, config)
  }
}

export class ImportListExclusionResource {
  constructor(private client: ClientMethods) {}

  async get(options?: PaginationOptions): Promise<PaginatedResponse<ImportListExclusion>> {
    return this.client.get('/api/v3/importlistexclusion/paged', options)
  }

  async getAll(): Promise<ImportListExclusion[]> {
    return this.client.get('/api/v3/importlistexclusion')
  }

  async getById(id: number): Promise<ImportListExclusion> {
    return this.client.get(`/api/v3/importlistexclusion/${id}`)
  }

  async create(exclusion: Omit<ImportListExclusion, 'id'>): Promise<ImportListExclusion> {
    return this.client.post('/api/v3/importlistexclusion', exclusion)
  }

  async update(id: number, exclusion: Partial<ImportListExclusion> & { id: number }): Promise<ImportListExclusion> {
    return this.client.put(`/api/v3/importlistexclusion/${id}`, exclusion)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/importlistexclusion/${id}`)
  }

  async bulkCreate(exclusions: ImportListExclusion[]): Promise<ImportListExclusion[]> {
    return this.client.post('/api/v3/importlistexclusion/bulk', exclusions)
  }

  async bulkDelete(exclusions: ImportListExclusionBulk): Promise<void> {
    return this.client.delete('/api/v3/importlistexclusion/bulk', exclusions)
  }
}
