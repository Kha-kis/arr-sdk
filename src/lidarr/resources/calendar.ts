import type { ClientMethods } from '../../core/resource.js'
import type { Album } from '../types.js'

export interface CalendarOptions {
  start?: string
  end?: string
  unmonitored?: boolean
  includeArtist?: boolean
  [key: string]: unknown
}

export interface CalendarFeedOptions {
  pastDays?: number
  futureDays?: number
  tags?: string
  unmonitored?: boolean
  [key: string]: unknown
}

export class CalendarResource {
  constructor(private client: ClientMethods) {}

  async get(options?: CalendarOptions): Promise<Album[]> {
    return this.client.get('/api/v1/calendar', options)
  }

  async getById(id: number): Promise<Album> {
    return this.client.get(`/api/v1/calendar/${id}`)
  }

  buildFeedUrl(baseUrl: string, apiKey: string, options?: CalendarFeedOptions): string {
    const params = new URLSearchParams()
    params.set('apikey', apiKey)
    if (options?.pastDays !== undefined) params.set('pastDays', String(options.pastDays))
    if (options?.futureDays !== undefined) params.set('futureDays', String(options.futureDays))
    if (options?.tags) params.set('tags', options.tags)
    if (options?.unmonitored !== undefined) params.set('unmonitored', String(options.unmonitored))
    return `${baseUrl}/feed/v1/calendar/lidarr.ics?${params}`
  }
}
