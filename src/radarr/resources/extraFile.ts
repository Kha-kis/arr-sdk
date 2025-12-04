import type { ClientMethods } from '../../core/resource.js'
import type { ExtraFile } from '../types.js'

export class ExtraFileResource {
  constructor(private client: ClientMethods) {}

  async getByMovie(movieId: number): Promise<ExtraFile[]> {
    return this.client.get('/api/v3/extrafile', { movieId })
  }
}
