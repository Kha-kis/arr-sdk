import type { ClientMethods } from '../../core/resource.js'
import type { Calendar } from '../types.js'

export interface GetCalendarOptions {
  start?: string  // ISO date string
  end?: string    // ISO date string
  unmonitored?: boolean
  includeAuthor?: boolean
}

export class CalendarResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetCalendarOptions): Promise<Calendar[]> {
    const params = new URLSearchParams()
    if (options?.start) params.set('start', options.start)
    if (options?.end) params.set('end', options.end)
    if (options?.unmonitored !== undefined) params.set('unmonitored', String(options.unmonitored))
    if (options?.includeAuthor !== undefined) params.set('includeAuthor', String(options.includeAuthor))
    const query = params.toString()
    return this.client.get(`/api/v1/calendar${query ? `?${query}` : ''}`)
  }
}
