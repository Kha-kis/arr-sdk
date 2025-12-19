export interface ClientConfig {
  baseUrl: string
  apiKey: string
  timeout?: number
  headers?: Record<string, string>
  onRequest?: (config: RequestConfig) => void | Promise<void>
  onResponse?: (response: Response) => void | Promise<void>
  onError?: (error: Error) => void | Promise<void>
}

export interface RequestConfig {
  url: URL
  method: string
  headers: Record<string, string>
  body?: string | FormData
}

export interface PaginatedResponse<T> {
  page: number
  pageSize: number
  totalRecords: number
  records: T[]
  sortKey?: string | null
  sortDirection?: 'ascending' | 'descending' | 'default'
}

export interface PaginationOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: 'ascending' | 'descending' | 'default'
  [key: string]: unknown
}

export type SortDirection = 'ascending' | 'descending' | 'default'
