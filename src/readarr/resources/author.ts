import type { ClientMethods } from '../../core/resource.js'
import type { Author, AuthorEditor } from '../types.js'

export interface GetAuthorOptions {
  includeMonitored?: boolean
}

export interface DeleteAuthorOptions {
  deleteFiles?: boolean
  addImportListExclusion?: boolean
}

export class AuthorResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: GetAuthorOptions): Promise<Author[]> {
    const params = new URLSearchParams()
    if (options?.includeMonitored !== undefined) {
      params.set('includeMonitored', String(options.includeMonitored))
    }
    const query = params.toString()
    return this.client.get(`/api/v1/author${query ? `?${query}` : ''}`)
  }

  async getById(id: number): Promise<Author> {
    return this.client.get(`/api/v1/author/${id}`)
  }

  async create(author: Omit<Author, 'id'>): Promise<Author> {
    return this.client.post('/api/v1/author', author)
  }

  async update(id: number, author: Partial<Author> & { id: number }, moveFiles = false): Promise<Author> {
    const params = new URLSearchParams()
    if (moveFiles) params.set('moveFiles', 'true')
    const query = params.toString()
    return this.client.put(`/api/v1/author/${id}${query ? `?${query}` : ''}`, author)
  }

  async delete(id: number, options?: DeleteAuthorOptions): Promise<void> {
    const params = new URLSearchParams()
    if (options?.deleteFiles) params.set('deleteFiles', 'true')
    if (options?.addImportListExclusion) params.set('addImportListExclusion', 'true')
    const query = params.toString()
    return this.client.delete(`/api/v1/author/${id}${query ? `?${query}` : ''}`)
  }

  async lookup(term: string): Promise<Author[]> {
    return this.client.get(`/api/v1/author/lookup?term=${encodeURIComponent(term)}`)
  }

  async bulkEdit(resource: AuthorEditor): Promise<Author[]> {
    return this.client.put('/api/v1/author/editor', resource)
  }

  async bulkDelete(authorIds: number[], options?: DeleteAuthorOptions): Promise<void> {
    return this.client.delete('/api/v1/author/editor', {
      authorIds,
      deleteFiles: options?.deleteFiles,
      addImportListExclusion: options?.addImportListExclusion
    })
  }
}
