export function buildQueryParams(
  params: Record<string, unknown> | undefined
): URLSearchParams {
  const searchParams = new URLSearchParams()

  if (!params) {
    return searchParams
  }

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null) {
          searchParams.append(key, String(item))
        }
      }
    } else if (value instanceof Date) {
      searchParams.set(key, value.toISOString())
    } else if (typeof value === 'boolean') {
      searchParams.set(key, value ? 'true' : 'false')
    } else {
      searchParams.set(key, String(value))
    }
  }

  return searchParams
}

export function joinPath(base: string, path: string): string {
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${normalizedBase}${normalizedPath}`
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Validates a filename to prevent path traversal attacks.
 * Throws an error if the filename contains path separators, parent directory references,
 * or absolute path indicators.
 */
export function validateFilename(filename: string): void {
  if (!filename || typeof filename !== 'string') {
    throw new Error('Invalid filename: filename must be a non-empty string')
  }
  if (filename.includes('/') || filename.includes('\\')) {
    throw new Error('Invalid filename: path separators are not allowed')
  }
  if (filename.includes('..')) {
    throw new Error('Invalid filename: parent directory references are not allowed')
  }
  if (/^[a-zA-Z]:/.test(filename)) {
    throw new Error('Invalid filename: absolute paths are not allowed')
  }
}
