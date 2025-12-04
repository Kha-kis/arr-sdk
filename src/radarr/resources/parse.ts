import type { ClientMethods } from '../../core/resource.js'
import type { Parse } from '../types.js'

export class ParseResource {
  constructor(private client: ClientMethods) {}

  async get(title: string): Promise<Parse> {
    return this.client.get('/api/v3/parse', { title })
  }
}
