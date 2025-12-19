import type { ClientMethods } from '../../core/resource.js'
import type { SystemResource, Health, Task, Backup, Log, LogFile, Update } from '../types.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'

export class SystemInfoResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<SystemResource> {
    return this.client.get('/api/v1/system/status')
  }

  async getRoutes(): Promise<unknown[]> {
    return this.client.get('/api/v1/system/routes')
  }

  async getDuplicateRoutes(): Promise<unknown[]> {
    return this.client.get('/api/v1/system/routes/duplicate')
  }

  async restart(): Promise<void> {
    return this.client.post('/api/v1/system/restart')
  }

  async shutdown(): Promise<void> {
    return this.client.post('/api/v1/system/shutdown')
  }

  /**
   * Simple health check - returns "Pong"
   */
  async ping(): Promise<string> {
    return this.client.get('/ping')
  }
}

export class HealthResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Health[]> {
    return this.client.get('/api/v1/health')
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

  async restoreUpload(formData: FormData): Promise<void> {
    return this.client.postForm('/api/v1/system/backup/restore/upload', formData)
  }
}

export class LogResource {
  constructor(private client: ClientMethods) {}

  async get(options?: PaginationOptions): Promise<PaginatedResponse<Log>> {
    return this.client.get('/api/v1/log', options)
  }

  async *getAll(options?: Omit<PaginationOptions, 'page'>): AsyncGenerator<Log, void, undefined> {
    yield* this.client.paginate<Log>('/api/v1/log', options)
  }

  async getAllArray(options?: Omit<PaginationOptions, 'page'>): Promise<Log[]> {
    return this.client.paginateAll<Log>('/api/v1/log', options)
  }
}

export class LogFileResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<LogFile[]> {
    return this.client.get('/api/v1/log/file')
  }

  async getUpdate(): Promise<LogFile[]> {
    return this.client.get('/api/v1/log/file/update')
  }

  /**
   * Download a specific log file's contents
   */
  async download(filename: string): Promise<string> {
    const sanitized = encodeURIComponent(filename)
    return this.client.getText(`/api/v1/log/file/${sanitized}`)
  }

  /**
   * Download a specific update log file's contents
   */
  async downloadUpdate(filename: string): Promise<string> {
    const sanitized = encodeURIComponent(filename)
    return this.client.getText(`/api/v1/log/file/update/${sanitized}`)
  }
}

export class UpdateResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Update[]> {
    return this.client.get('/api/v1/update')
  }
}
