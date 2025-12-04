// Main exports
export { SonarrClient } from './sonarr/index.js'
export { RadarrClient } from './radarr/index.js'
export { ProwlarrClient } from './prowlarr/index.js'

// Core exports
export { BaseClient } from './core/client.js'
export type { ClientConfig, RequestConfig, PaginatedResponse, PaginationOptions, SortDirection } from './core/types.js'
export {
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
} from './core/errors.js'
