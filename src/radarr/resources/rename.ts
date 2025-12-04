import type { ClientMethods } from '../../core/resource.js'
import type { RenameMovie } from '../types.js'

export class RenameResource {
  constructor(private client: ClientMethods) {}

  async get(movieId: number): Promise<RenameMovie[]> {
    return this.client.get('/api/v3/rename', { movieId })
  }
}
