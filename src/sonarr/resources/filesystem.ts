import type { ClientMethods } from '../../core/resource.js'

export interface FileSystemEntry {
  type: 'file' | 'folder' | 'drive'
  name: string
  path: string
  size?: number
  lastModified?: string
}

export interface GetFileSystemOptions {
  path: string
  includeFiles?: boolean
  allowFoldersWithoutTrailingSlashes?: boolean
  [key: string]: unknown
}

export class FileSystemResource {
  constructor(private client: ClientMethods) {}

  /**
   * Browse the filesystem at the given path
   */
  async get(options: GetFileSystemOptions): Promise<FileSystemEntry[]> {
    return this.client.get('/api/v3/filesystem', options)
  }

  /**
   * Get the type of a path (file, folder, etc.)
   */
  async getType(path: string): Promise<{ type: string }> {
    return this.client.get('/api/v3/filesystem/type', { path })
  }

  /**
   * Get media files in a directory
   */
  async getMediaFiles(path: string): Promise<FileSystemEntry[]> {
    return this.client.get('/api/v3/filesystem/mediafiles', { path })
  }
}
