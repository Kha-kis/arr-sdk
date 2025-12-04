import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ProwlarrClient } from '../../src/prowlarr/index.js'

describe('ProwlarrClient - Indexer', () => {
  let client: ProwlarrClient

  beforeEach(() => {
    client = new ProwlarrClient({
      baseUrl: 'http://localhost:9696',
      apiKey: 'test-api-key'
    })
    vi.restoreAllMocks()
  })

  it('should fetch all indexers', async () => {
    const mockIndexers = [
      { id: 1, name: 'NZBgeek', protocol: 'usenet' },
      { id: 2, name: '1337x', protocol: 'torrent' }
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockIndexers)
    })

    const indexers = await client.indexer.getAll()

    expect(indexers).toEqual(mockIndexers)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'http://localhost:9696/api/v1/indexer'
      }),
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          'X-Api-Key': 'test-api-key'
        })
      })
    )
  })

  it('should fetch indexer by id', async () => {
    const mockIndexer = { id: 1, name: 'NZBgeek', protocol: 'usenet' }

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockIndexer)
    })

    const indexer = await client.indexer.getById(1)

    expect(indexer).toEqual(mockIndexer)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'http://localhost:9696/api/v1/indexer/1'
      }),
      expect.anything()
    )
  })

  it('should search for releases', async () => {
    const mockReleases = [
      { guid: '123', title: 'Ubuntu 22.04 LTS', indexerId: 1 }
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockReleases)
    })

    const releases = await client.search.query({ query: 'ubuntu' })

    expect(releases).toEqual(mockReleases)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: expect.stringContaining('query=ubuntu')
      }),
      expect.anything()
    )
  })

  it('should grab a release', async () => {
    const release = { guid: '123', indexerId: 1 }
    const mockResult = { ...release, title: 'Ubuntu 22.04 LTS' }

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockResult)
    })

    const result = await client.search.grab(release)

    expect(result).toEqual(mockResult)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'http://localhost:9696/api/v1/search'
      }),
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(release)
      })
    )
  })
})
