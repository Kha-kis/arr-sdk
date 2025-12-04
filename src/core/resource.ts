import type { PaginationOptions } from './types.js'

export interface ClientMethods {
  get<T>(path: string, params?: Record<string, unknown>): Promise<T>
  post<T>(path: string, body?: unknown, params?: Record<string, unknown>): Promise<T>
  put<T>(path: string, body?: unknown, params?: Record<string, unknown>): Promise<T>
  delete<T>(path: string, body?: unknown, params?: Record<string, unknown>): Promise<T>
  paginate<T>(path: string, options?: PaginationOptions & Record<string, unknown>): AsyncGenerator<T, void, undefined>
  paginateAll<T>(path: string, options?: PaginationOptions & Record<string, unknown>): Promise<T[]>
}

export abstract class BaseResource {
  protected readonly http: ClientMethods

  constructor(client: ClientMethods) {
    this.http = client
  }
}
