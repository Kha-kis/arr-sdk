import type { ClientConfig, RequestConfig, PaginatedResponse, PaginationOptions } from './types.js'
import type { ClientMethods } from './resource.js'
import {
  ArrError,
  ValidationError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  ConflictError,
  ServerError,
  TimeoutError,
  NetworkError,
  type ValidationErrorDetail
} from './errors.js'
import { buildQueryParams, joinPath } from './utils.js'

const DEFAULT_TIMEOUT = 30000

export abstract class BaseClient implements ClientMethods {
  protected readonly config: Required<Pick<ClientConfig, 'baseUrl' | 'apiKey' | 'timeout'>> &
    Omit<ClientConfig, 'baseUrl' | 'apiKey' | 'timeout'>

  constructor(config: ClientConfig) {
    if (!config.baseUrl) {
      throw new Error('baseUrl is required')
    }
    if (!config.apiKey) {
      throw new Error('apiKey is required')
    }

    this.config = {
      timeout: DEFAULT_TIMEOUT,
      ...config,
      baseUrl: config.baseUrl.endsWith('/') ? config.baseUrl.slice(0, -1) : config.baseUrl
    }
  }

  protected async request<T>(
    method: string,
    path: string,
    options?: {
      params?: Record<string, unknown>
      body?: unknown
    }
  ): Promise<T> {
    const url = new URL(joinPath(this.config.baseUrl, path))

    if (options?.params) {
      const queryParams = buildQueryParams(options.params)
      queryParams.forEach((value, key) => {
        url.searchParams.append(key, value)
      })
    }

    const headers: Record<string, string> = {
      'X-Api-Key': this.config.apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...this.config.headers
    }

    const requestConfig: RequestConfig = {
      url,
      method,
      headers,
      body: options?.body ? JSON.stringify(options.body) : undefined
    }

    await this.config.onRequest?.(requestConfig)

    let response: Response

    try {
      response = await fetch(url, {
        method,
        headers,
        body: requestConfig.body,
        signal: AbortSignal.timeout(this.config.timeout)
      })
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'TimeoutError' || error.name === 'AbortError') {
          const timeoutError = new TimeoutError(`Request timed out after ${this.config.timeout}ms`)
          await this.config.onError?.(timeoutError)
          throw timeoutError
        }
        const networkError = new NetworkError(error.message, error)
        await this.config.onError?.(networkError)
        throw networkError
      }
      throw error
    }

    await this.config.onResponse?.(response)

    if (!response.ok) {
      const error = await this.parseError(response)
      await this.config.onError?.(error)
      throw error
    }

    if (response.status === 204 || response.headers.get('content-length') === '0') {
      return undefined as T
    }

    const contentType = response.headers.get('content-type')
    if (contentType?.includes('application/json')) {
      return response.json() as Promise<T>
    }

    return undefined as T
  }

  private async parseError(response: Response): Promise<ArrError> {
    let body: unknown

    try {
      const text = await response.text()
      if (text) {
        body = JSON.parse(text)
      }
    } catch {
      // Ignore JSON parse errors
    }

    const message = this.extractErrorMessage(body, response.statusText)

    switch (response.status) {
      case 400: {
        const validationErrors = this.extractValidationErrors(body)
        if (validationErrors.length > 0) {
          return new ValidationError(message, validationErrors)
        }
        return new ArrError(message, 400, body)
      }
      case 401:
        return new UnauthorizedError(message)
      case 403:
        return new ForbiddenError(message)
      case 404:
        return new NotFoundError(message)
      case 409:
        return new ConflictError(message)
      default:
        if (response.status >= 500) {
          return new ServerError(message, response.status)
        }
        return new ArrError(message, response.status, body)
    }
  }

  private extractErrorMessage(body: unknown, fallback: string): string {
    if (body && typeof body === 'object') {
      const obj = body as Record<string, unknown>
      if (typeof obj.message === 'string') {
        return obj.message
      }
      if (typeof obj.error === 'string') {
        return obj.error
      }
      if (Array.isArray(obj) && obj.length > 0) {
        const first = obj[0] as Record<string, unknown>
        if (typeof first.errorMessage === 'string') {
          return first.errorMessage
        }
      }
    }
    return fallback || 'Unknown error'
  }

  private extractValidationErrors(body: unknown): ValidationErrorDetail[] {
    if (!body || !Array.isArray(body)) {
      return []
    }

    return body
      .filter((item): item is Record<string, unknown> => item && typeof item === 'object')
      .map((item) => ({
        propertyName: String(item.propertyName ?? ''),
        errorMessage: String(item.errorMessage ?? ''),
        attemptedValue: item.attemptedValue,
        severity: item.severity ? String(item.severity) : undefined
      }))
  }

  get<T>(path: string, params?: Record<string, unknown>): Promise<T> {
    return this.request<T>('GET', path, { params })
  }

  post<T>(path: string, body?: unknown, params?: Record<string, unknown>): Promise<T> {
    return this.request<T>('POST', path, { body, params })
  }

  async postForm<T>(path: string, formData: FormData, params?: Record<string, unknown>): Promise<T> {
    const url = new URL(joinPath(this.config.baseUrl, path))

    if (params) {
      const queryParams = buildQueryParams(params)
      queryParams.forEach((value, key) => {
        url.searchParams.append(key, value)
      })
    }

    // Don't set Content-Type - let fetch set it with the multipart boundary
    const headers: Record<string, string> = {
      'X-Api-Key': this.config.apiKey,
      Accept: 'application/json',
      ...this.config.headers
    }

    const requestConfig: RequestConfig = {
      url,
      method: 'POST',
      headers,
      body: undefined // FormData is passed directly to fetch, not serialized
    }

    await this.config.onRequest?.(requestConfig)

    let response: Response

    try {
      response = await fetch(url, {
        method: 'POST',
        headers,
        body: formData,
        signal: AbortSignal.timeout(this.config.timeout)
      })
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'TimeoutError' || error.name === 'AbortError') {
          const timeoutError = new TimeoutError(`Request timed out after ${this.config.timeout}ms`)
          await this.config.onError?.(timeoutError)
          throw timeoutError
        }
        const networkError = new NetworkError(error.message, error)
        await this.config.onError?.(networkError)
        throw networkError
      }
      throw error
    }

    await this.config.onResponse?.(response)

    if (!response.ok) {
      const error = await this.parseError(response)
      await this.config.onError?.(error)
      throw error
    }

    if (response.status === 204 || response.headers.get('content-length') === '0') {
      return undefined as T
    }

    const contentType = response.headers.get('content-type')
    if (contentType?.includes('application/json')) {
      return response.json() as Promise<T>
    }

    return undefined as T
  }

  put<T>(path: string, body?: unknown, params?: Record<string, unknown>): Promise<T> {
    return this.request<T>('PUT', path, { body, params })
  }

  delete<T>(path: string, body?: unknown, params?: Record<string, unknown>): Promise<T> {
    return this.request<T>('DELETE', path, { body, params })
  }

  private async fetchRaw<T>(
    path: string,
    params: Record<string, unknown> | undefined,
    parser: (response: Response) => Promise<T>
  ): Promise<T> {
    const url = new URL(joinPath(this.config.baseUrl, path))

    if (params) {
      const queryParams = buildQueryParams(params)
      queryParams.forEach((value, key) => {
        url.searchParams.append(key, value)
      })
    }

    const headers: Record<string, string> = {
      'X-Api-Key': this.config.apiKey,
      ...this.config.headers
    }

    const requestConfig: RequestConfig = {
      url,
      method: 'GET',
      headers,
      body: undefined
    }

    await this.config.onRequest?.(requestConfig)

    let response: Response

    try {
      response = await fetch(url, {
        method: 'GET',
        headers,
        signal: AbortSignal.timeout(this.config.timeout)
      })
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'TimeoutError' || error.name === 'AbortError') {
          const timeoutError = new TimeoutError(`Request timed out after ${this.config.timeout}ms`)
          await this.config.onError?.(timeoutError)
          throw timeoutError
        }
        const networkError = new NetworkError(error.message, error)
        await this.config.onError?.(networkError)
        throw networkError
      }
      throw error
    }

    await this.config.onResponse?.(response)

    if (!response.ok) {
      const error = await this.parseError(response)
      await this.config.onError?.(error)
      throw error
    }

    return parser(response)
  }

  async getBuffer(path: string, params?: Record<string, unknown>): Promise<ArrayBuffer> {
    return this.fetchRaw(path, params, (res) => res.arrayBuffer())
  }

  async getText(path: string, params?: Record<string, unknown>): Promise<string> {
    return this.fetchRaw(path, params, (res) => res.text())
  }

  async *paginate<T>(
    path: string,
    options?: PaginationOptions & Record<string, unknown>
  ): AsyncGenerator<T, void, undefined> {
    const pageSize = options?.pageSize ?? 50
    let page = options?.page ?? 1
    let hasMore = true

    while (hasMore) {
      const response = await this.get<PaginatedResponse<T>>(path, {
        ...options,
        page,
        pageSize
      })

      for (const record of response.records) {
        yield record
      }

      hasMore = page * pageSize < response.totalRecords
      page++
    }
  }

  async paginateAll<T>(
    path: string,
    options?: PaginationOptions & Record<string, unknown>
  ): Promise<T[]> {
    const results: T[] = []
    for await (const record of this.paginate<T>(path, options)) {
      results.push(record)
    }
    return results
  }
}
