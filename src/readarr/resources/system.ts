import type { ClientMethods } from '../../core/resource.js'
import type { SystemResource, Health, DiskSpace, Task, Backup, LogFile, Update, LogPagingResource, SortDirection } from '../types.js'

export class SystemInfoResource {
  constructor(private client: ClientMethods) {}

  async getStatus(): Promise<SystemResource> {
    return this.client.get('/api/v1/system/status')
  }
}

export class HealthResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Health[]> {
    return this.client.get('/api/v1/health')
  }
}

export class DiskSpaceResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<DiskSpace[]> {
    return this.client.get('/api/v1/diskspace')
  }
}

export class TaskResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Task[]> {
    return this.client.get('/api/v1/system/task')
  }

  async getById(id: number): Promise<Task> {
    return this.client.get(`/api/v1/system/task/${id}`)
  }
}

export class BackupResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Backup[]> {
    return this.client.get('/api/v1/system/backup')
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v1/system/backup/${id}`)
  }

  async restore(id: number): Promise<void> {
    return this.client.post(`/api/v1/system/backup/restore/${id}`, {})
  }

  async upload(file: Blob | ArrayBuffer): Promise<void> {
    // Note: Multipart upload - specific implementation may vary
    return this.client.post('/api/v1/system/backup/restore/upload', file)
  }
}

export interface GetLogOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: SortDirection
  level?: string
}

export class LogResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetLogOptions): Promise<LogPagingResource> {
    const params = new URLSearchParams()
    if (options?.page !== undefined) params.set('page', String(options.page))
    if (options?.pageSize !== undefined) params.set('pageSize', String(options.pageSize))
    if (options?.sortKey) params.set('sortKey', options.sortKey)
    if (options?.sortDirection) params.set('sortDirection', options.sortDirection)
    if (options?.level) params.set('level', options.level)
    const query = params.toString()
    return this.client.get(`/api/v1/log${query ? `?${query}` : ''}`)
  }
}

export class LogFileResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<LogFile[]> {
    return this.client.get('/api/v1/log/file')
  }

  async getUpdateLogs(): Promise<LogFile[]> {
    return this.client.get('/api/v1/log/file/update')
  }
}

export class UpdateResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Update[]> {
    return this.client.get('/api/v1/update')
  }
}
