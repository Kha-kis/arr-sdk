import type { ClientMethods } from '../../core/resource.js'
import type { Book, BookEditor, BooksMonitored } from '../types.js'

export interface GetBookOptions {
  authorId?: number
  bookIds?: number[]
  titleSlug?: string
  includeAllAuthorBooks?: boolean
}

export interface DeleteBookOptions {
  deleteFiles?: boolean
  addImportListExclusion?: boolean
}

export class BookResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: GetBookOptions): Promise<Book[]> {
    const params = new URLSearchParams()
    if (options?.authorId !== undefined) params.set('authorId', String(options.authorId))
    if (options?.bookIds?.length) {
      options.bookIds.forEach(id => params.append('bookIds', String(id)))
    }
    if (options?.titleSlug) params.set('titleSlug', options.titleSlug)
    if (options?.includeAllAuthorBooks !== undefined) {
      params.set('includeAllAuthorBooks', String(options.includeAllAuthorBooks))
    }
    const query = params.toString()
    return this.client.get(`/api/v1/book${query ? `?${query}` : ''}`)
  }

  async getById(id: number): Promise<Book> {
    return this.client.get(`/api/v1/book/${id}`)
  }

  async getByAuthorId(authorId: number): Promise<Book[]> {
    return this.getAll({ authorId })
  }

  async create(book: Omit<Book, 'id'>): Promise<Book> {
    return this.client.post('/api/v1/book', book)
  }

  async update(id: number, book: Partial<Book> & { id: number }): Promise<Book> {
    return this.client.put(`/api/v1/book/${id}`, book)
  }

  async delete(id: number, options?: DeleteBookOptions): Promise<void> {
    const params = new URLSearchParams()
    if (options?.deleteFiles) params.set('deleteFiles', 'true')
    if (options?.addImportListExclusion) params.set('addImportListExclusion', 'true')
    const query = params.toString()
    return this.client.delete(`/api/v1/book/${id}${query ? `?${query}` : ''}`)
  }

  async lookup(term: string): Promise<Book[]> {
    return this.client.get(`/api/v1/book/lookup?term=${encodeURIComponent(term)}`)
  }

  async bulkEdit(resource: BookEditor): Promise<Book[]> {
    return this.client.put('/api/v1/book/editor', resource)
  }

  async bulkDelete(bookIds: number[], options?: DeleteBookOptions): Promise<void> {
    return this.client.delete('/api/v1/book/editor', {
      bookIds,
      deleteFiles: options?.deleteFiles,
      addImportListExclusion: options?.addImportListExclusion
    })
  }

  async monitor(data: BooksMonitored): Promise<void> {
    return this.client.put('/api/v1/book/monitor', data)
  }
}
