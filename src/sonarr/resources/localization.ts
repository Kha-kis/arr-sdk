import type { ClientMethods } from '../../core/resource.js'
import type { Localization, LocalizationLanguage } from '../types.js'

export class LocalizationResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<Localization> {
    return this.client.get('/api/v3/localization')
  }

  async getLanguages(): Promise<LocalizationLanguage[]> {
    return this.client.get('/api/v3/localization/language')
  }
}
