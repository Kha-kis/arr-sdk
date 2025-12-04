import type { ClientMethods } from '../../core/resource.js'
import type { Episode } from '../types.js'

export interface CalendarOptions {
  start?: Date | string
  end?: Date | string
  unmonitored?: boolean
  includeSeries?: boolean
  includeEpisodeFile?: boolean
  includeEpisodeImages?: boolean
  tags?: number[]
}

export class CalendarResource {
  constructor(private client: ClientMethods) {}

  async get(options?: CalendarOptions): Promise<Episode[]> {
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
    if (options?.includeSeries !== undefined) {
      params.includeSeries = options.includeSeries
    }
    if (options?.includeEpisodeFile !== undefined) {
      params.includeEpisodeFile = options.includeEpisodeFile
    }
    if (options?.includeEpisodeImages !== undefined) {
      params.includeEpisodeImages = options.includeEpisodeImages
    }
    if (options?.tags) {
      params.tags = options.tags
    }

    return this.client.get('/api/v3/calendar', params)
  }

  async getById(id: number): Promise<Episode> {
    return this.client.get(`/api/v3/calendar/${id}`)
  }
}
