import type { ClientMethods } from '../../core/resource.js'
import type { LocalizationOption } from '../types.js'

export class LocalizationResource {
  constructor(private client: ClientMethods) {}

  /**
   * Get localization dictionary
   */
  async get(): Promise<Record<string, string>> {
    return this.client.get('/api/v1/localization')
  }

  /**
   * Get available localization language options
   */
  async getOptions(): Promise<LocalizationOption[]> {
    return this.client.get('/api/v1/localization/options')
  }
}
