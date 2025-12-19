import type { ClientMethods } from '../../core/resource.js'
import type { Series, SeriesEditor } from '../types.js'

export interface GetSeriesOptions {
  tvdbId?: number
  includeSeasonImages?: boolean
  [key: string]: unknown
}

export interface DeleteSeriesOptions {
  deleteFiles?: boolean
  addImportListExclusion?: boolean
  [key: string]: unknown
}

export class SeriesResource {
  constructor(private client: ClientMethods) {}

  async getAll(options?: GetSeriesOptions): Promise<Series[]> {
    return this.client.get('/api/v3/series', options)
  }

  async getById(id: number, options?: { includeSeasonImages?: boolean }): Promise<Series> {
    return this.client.get(`/api/v3/series/${id}`, options)
  }

  async create(series: Omit<Series, 'id'>): Promise<Series> {
    return this.client.post('/api/v3/series', series)
  }

  async update(id: number, series: Partial<Series> & { id: number }, moveFiles?: boolean): Promise<Series> {
    return this.client.put(`/api/v3/series/${id}`, series, moveFiles !== undefined ? { moveFiles } : undefined)
  }

  async delete(id: number, options?: DeleteSeriesOptions): Promise<void> {
    return this.client.delete(`/api/v3/series/${id}`, undefined, options)
  }

  async lookup(term: string): Promise<Series[]> {
    return this.client.get('/api/v3/series/lookup', { term })
  }

  async bulkEdit(resource: SeriesEditor): Promise<Series[]> {
    return this.client.put('/api/v3/series/editor', resource)
  }

  async bulkDelete(seriesIds: number[], options?: DeleteSeriesOptions): Promise<void> {
    return this.client.delete('/api/v3/series/editor', {
      seriesIds,
      ...options
    })
  }

  async getFolder(id: number): Promise<string> {
    return this.client.get(`/api/v3/series/${id}/folder`)
  }
}
