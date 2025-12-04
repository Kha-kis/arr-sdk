import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SonarrClient } from '../../src/sonarr/index.js'

describe('SonarrClient - Series', () => {
  let client: SonarrClient

  beforeEach(() => {
    client = new SonarrClient({
      baseUrl: 'http://localhost:8989',
      apiKey: 'test-api-key'
    })
    vi.restoreAllMocks()
  })

  it('should fetch all series', async () => {
    const mockSeries = [
      { id: 1, title: 'Breaking Bad', tvdbId: 81189 },
      { id: 2, title: 'Game of Thrones', tvdbId: 121361 }
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockSeries)
    })

    const series = await client.series.getAll()

    expect(series).toEqual(mockSeries)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'http://localhost:8989/api/v3/series'
      }),
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          'X-Api-Key': 'test-api-key'
        })
      })
    )
  })

  it('should fetch series by id', async () => {
    const mockSeries = { id: 1, title: 'Breaking Bad', tvdbId: 81189 }

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockSeries)
    })

    const series = await client.series.getById(1)

    expect(series).toEqual(mockSeries)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'http://localhost:8989/api/v3/series/1'
      }),
      expect.anything()
    )
  })

  it('should create a new series', async () => {
    const newSeries = {
      title: 'Breaking Bad',
      tvdbId: 81189,
      qualityProfileId: 1,
      rootFolderPath: '/tv'
    }
    const createdSeries = { id: 1, ...newSeries }

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 201,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(createdSeries)
    })

    const series = await client.series.create(newSeries)

    expect(series).toEqual(createdSeries)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'http://localhost:8989/api/v3/series'
      }),
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(newSeries)
      })
    )
  })

  it('should delete a series', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 204,
      headers: new Headers({ 'content-length': '0' })
    })

    await client.series.delete(1, { deleteFiles: true })

    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: expect.stringContaining('/api/v3/series/1')
      }),
      expect.objectContaining({
        method: 'DELETE'
      })
    )
  })

  it('should lookup series by term', async () => {
    const mockResults = [
      { title: 'Breaking Bad', tvdbId: 81189 }
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockResults)
    })

    const results = await client.series.lookup('breaking bad')

    expect(results).toEqual(mockResults)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: expect.stringContaining('term=breaking+bad')
      }),
      expect.anything()
    )
  })
})
