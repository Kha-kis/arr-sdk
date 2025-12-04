import type { ClientMethods } from '../../core/resource.js'
import type { SeasonPass } from '../types.js'

export class SeasonPassResource {
  constructor(private client: ClientMethods) {}

  async update(seasonPass: SeasonPass): Promise<void> {
    return this.client.post('/api/v3/seasonpass', seasonPass)
  }
}
