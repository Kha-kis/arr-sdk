import type { ClientMethods } from '../../core/resource.js'
import type { BookFile, BookFileList } from '../types.js'

export interface GetBookFileOptions {
  authorId?: number
  bookId?: number
  bookFileIds?: number[]
  unmapped?: boolean
}

export class BookFileResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: GetBookFileOptions): Promise<BookFile[]> {
    const params = new URLSearchParams()
    if (options?.authorId !== undefined) params.set('authorId', String(options.authorId))
    if (options?.bookId !== undefined) params.set('bookId', String(options.bookId))
    if (options?.bookFileIds?.length) {
      options.bookFileIds.forEach(id => params.append('bookFileIds', String(id)))
    }
    if (options?.unmapped !== undefined) params.set('unmapped', String(options.unmapped))
    const query = params.toString()
    return this.client.get(`/api/v1/bookfile${query ? `?${query}` : ''}`)
  }

  async getById(id: number): Promise<BookFile> {
    return this.client.get(`/api/v1/bookfile/${id}`)
  }

  async update(id: number, bookFile: Partial<BookFile> & { id: number }): Promise<BookFile> {
    return this.client.put(`/api/v1/bookfile/${id}`, bookFile)
  }

  async bulkUpdate(bookFiles: BookFileList): Promise<BookFile[]> {
    return this.client.put('/api/v1/bookfile/editor', bookFiles)
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/bookfile/${id}`)
  }

  async bulkDelete(bookFileIds: number[]): Promise<void> {
    return this.client.delete('/api/v1/bookfile/bulk', { bookFileIds })
  }
}
