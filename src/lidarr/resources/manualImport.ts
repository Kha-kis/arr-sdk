import type { ClientMethods } from '../../core/resource.js'
import type { ManualImport, ManualImportUpdate } from '../types.js'

export interface GetManualImportOptions {
  folder?: string
  downloadId?: string
  artistId?: number
  albumId?: number
  filterExistingFiles?: boolean
  replaceExistingFiles?: boolean
  [key: string]: unknown
}

export class ManualImportResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetManualImportOptions): Promise<ManualImport[]> {
    return this.client.get('/api/v1/manualimport', options)
  }

  async process(imports: ManualImportUpdate[]): Promise<void> {
    return this.client.post('/api/v1/manualimport', imports)
  }
}
