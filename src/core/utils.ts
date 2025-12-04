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
