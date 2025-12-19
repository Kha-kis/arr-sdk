import type { ClientMethods } from '../../core/resource.js'
import type { SystemResource, Health, DiskSpace, Task, Backup, Log, LogFile, Update } from '../types.js'
import type { PaginationOptions, PaginatedResponse } from '../../core/types.js'

export class SystemInfoResource {
  constructor(private client: ClientMethods) {}

  async get(): Promise<SystemResource> {
    return this.client.get('/api/v3/system/status')
  }

  async getRoutes(): Promise<unknown[]> {
    return this.client.get('/api/v3/system/routes')
  }

  async getDuplicateRoutes(): Promise<unknown[]> {
    return this.client.get('/api/v3/system/routes/duplicate')
  }

  async restart(): Promise<void> {
    return this.client.post('/api/v3/system/restart')
  }

  async shutdown(): Promise<void> {
    return this.client.post('/api/v3/system/shutdown')
  }
}

export class HealthResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Health[]> {
    return this.client.get('/api/v3/health')
  }
}

export class DiskSpaceResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<DiskSpace[]> {
    return this.client.get('/api/v3/diskspace')
  }
}

export class TaskResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Task[]> {
    return this.client.get('/api/v3/system/task')
  }

  async getById(id: number): Promise<Task> {
    return this.client.get(`/api/v3/system/task/${id}`)
  }
}

export class BackupResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Backup[]> {
    return this.client.get('/api/v3/system/backup')
  }

  async delete(id: number): Promise<void> {
    return this.client.delete(`/api/v3/system/backup/${id}`)
  }

  async restore(id: number): Promise<void> {
    return this.client.post(`/api/v3/system/backup/restore/${id}`)
  }

  async restoreUpload(file: unknown): Promise<void> {
    return this.client.post('/api/v3/system/backup/restore/upload', file)
  }
}

export class LogResource {
  constructor(private client: ClientMethods) {}

  async get(options?: PaginationOptions): Promise<PaginatedResponse<Log>> {
    return this.client.get('/api/v3/log', options)
  }

  async *getAll(options?: Omit<PaginationOptions, 'page'>): AsyncGenerator<Log, void, undefined> {
    yield* this.client.paginate<Log>('/api/v3/log', options)
  }

  async getAllArray(options?: Omit<PaginationOptions, 'page'>): Promise<Log[]> {
    return this.client.paginateAll<Log>('/api/v3/log', options)
  }
}

export class LogFileResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<LogFile[]> {
    return this.client.get('/api/v3/log/file')
  }

  async getUpdate(): Promise<LogFile[]> {
    return this.client.get('/api/v3/log/file/update')
  }
}

export class UpdateResource {
  constructor(private client: ClientMethods) {}

  async getAll(): Promise<Update[]> {
    return this.client.get('/api/v3/update')
  }
}
