import type { ClientMethods } from '../../core/resource.js'
import type { HostConfig, UiConfig, DevelopmentConfig } from '../types.js'

export class HostConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<HostConfig> {
    return this.client.get('/api/v1/config/host')
  }

  async update(config: Partial<HostConfig> & { id: number }): Promise<HostConfig> {
    return this.client.put(`/api/v1/config/host/${config.id}`, config)
  }
}

export class UiConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<UiConfig> {
    return this.client.get('/api/v1/config/ui')
  }

  async update(config: Partial<UiConfig> & { id: number }): Promise<UiConfig> {
    return this.client.put(`/api/v1/config/ui/${config.id}`, config)
  }
}

export class DevelopmentConfigResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<DevelopmentConfig> {
    return this.client.get('/api/v1/config/development')
  }

  async update(config: Partial<DevelopmentConfig> & { id: number }): Promise<DevelopmentConfig> {
    return this.client.put(`/api/v1/config/development/${config.id}`, config)
  }
}
