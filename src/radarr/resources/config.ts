import type { ClientMethods } from '../../core/resource.js'
import type { HostConfig, UiConfig, NamingConfig, MediaManagementConfig } from '../types.js'

export class HostConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<HostConfig> {
    return this.client.get('/api/v3/config/host')
  }

  async update(config: Partial<HostConfig> & { id: number }): Promise<HostConfig> {
    return this.client.put(`/api/v3/config/host/${config.id}`, config)
  }
}

export class UiConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<UiConfig> {
    return this.client.get('/api/v3/config/ui')
  }

  async update(config: Partial<UiConfig> & { id: number }): Promise<UiConfig> {
    return this.client.put(`/api/v3/config/ui/${config.id}`, config)
  }
}

export class NamingConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<NamingConfig> {
    return this.client.get('/api/v3/config/naming')
  }

  async update(config: Partial<NamingConfig> & { id: number }): Promise<NamingConfig> {
    return this.client.put(`/api/v3/config/naming/${config.id}`, config)
  }

  async getExamples(options?: { id?: number; renameMovies?: boolean; replaceIllegalCharacters?: boolean; colonReplacementFormat?: number; standardMovieFormat?: string; movieFolderFormat?: string }): Promise<unknown> {
    return this.client.get('/api/v3/config/naming/examples', options)
  }
}

export class MediaManagementConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<MediaManagementConfig> {
    return this.client.get('/api/v3/config/mediamanagement')
  }

  async update(config: Partial<MediaManagementConfig> & { id: number }): Promise<MediaManagementConfig> {
    return this.client.put(`/api/v3/config/mediamanagement/${config.id}`, config)
  }
}
