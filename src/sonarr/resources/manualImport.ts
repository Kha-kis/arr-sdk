import type { ClientMethods } from '../../core/resource.js'
import type { ManualImport, ManualImportReprocess } from '../types.js'

export interface GetManualImportOptions {
  folder?: string
  downloadId?: string
  seriesId?: number
  seasonNumber?: number
  filterExistingFiles?: boolean
  [key: string]: unknown
}

export class ManualImportResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetManualImportOptions): Promise<ManualImport[]> {
    return this.client.get('/api/v3/manualimport', options)
  }

  async process(imports: ManualImportReprocess[]): Promise<void> {
    return this.client.post('/api/v3/manualimport', imports)
  }
}
