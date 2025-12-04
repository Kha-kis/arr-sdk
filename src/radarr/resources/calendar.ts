import type { ClientMethods } from '../../core/resource.js'
import type { Movie } from '../types.js'

export interface CalendarOptions {
  start?: Date | string
  end?: Date | string
  unmonitored?: boolean
  tags?: number[]
}

export class CalendarResource {
  constructor(private client: ClientMethods) {}

  async get(options?: CalendarOptions): Promise<Movie[]> {
    const params: Record<string, unknown> = {}

    if (options?.start) {
      params.start = options.start instanceof Date ? options.start.toISOString() : options.start
    }
    if (options?.end) {
      params.end = options.end instanceof Date ? options.end.toISOString() : options.end
    }
    if (options?.unmonitored !== undefined) {
      params.unmonitored = options.unmonitored
    }
    if (options?.tags) {
      params.tags = options.tags
    }

    return this.client.get('/api/v3/calendar', params)
  }

  async getById(id: number): Promise<Movie> {
    return this.client.get(`/api/v3/calendar/${id}`)
  }
}
