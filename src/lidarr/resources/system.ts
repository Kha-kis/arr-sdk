import type { ClientMethods } from '../../core/resource.js'
import type { SystemResource, Health, DiskSpace, Task, Backup, LogFile, Update, LogPagingResource, SortDirection } from '../types.js'

export class SystemInfoResource {
  constructor(private client: ClientMethods) {}

  async getStatus(): Promise<SystemResource> {
    return this.client.get('/api/v1/system/status')
  }

  async ping(): Promise<{ status: string }> {
    return this.client.get('/ping')
  }

  async restart(): Promise<void> {
    return this.client.post('/api/v1/system/restart')
  }

  async shutdown(): Promise<void> {
    return this.client.post('/api/v1/system/shutdown')
  }
}

export class HealthResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<Health[]> {
    return this.client.get('/api/v1/health')
  }
}

export class DiskSpaceResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<DiskSpace[]> {
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
    return this.client.post(`/api/v1/system/backup/restore/${id}`)
  }
}

export interface GetLogOptions {
  page?: number
  pageSize?: number
  sortKey?: string
  sortDirection?: SortDirection
  level?: string
  [key: string]: unknown
}

export class LogResource {
  constructor(private client: ClientMethods) {}

  async get(options?: GetLogOptions): Promise<LogPagingResource> {
    return this.client.get('/api/v1/log', options)
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

  async get(): Promise<Update[]> {
    return this.client.get('/api/v1/update')
  }
}
