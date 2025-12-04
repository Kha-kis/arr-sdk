import { describe, it, expect, vi, beforeEach } from 'vitest'
import { RadarrClient } from '../../src/radarr/index.js'

describe('RadarrClient - Movie', () => {
  let client: RadarrClient

  beforeEach(() => {
    client = new RadarrClient({
      baseUrl: 'http://localhost:7878',
      apiKey: 'test-api-key'
    })
    vi.restoreAllMocks()
  })

  it('should fetch all movies', async () => {
    const mockMovies = [
      { id: 1, title: 'The Matrix', tmdbId: 603 },
      { id: 2, title: 'Inception', tmdbId: 27205 }
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockMovies)
    })

    const movies = await client.movie.getAll()

    expect(movies).toEqual(mockMovies)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'http://localhost:7878/api/v3/movie'
      }),
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          'X-Api-Key': 'test-api-key'
        })
      })
    )
  })

  it('should fetch movie by id', async () => {
    const mockMovie = { id: 1, title: 'The Matrix', tmdbId: 603 }

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockMovie)
    })

    const movie = await client.movie.getById(1)

    expect(movie).toEqual(mockMovie)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'http://localhost:7878/api/v3/movie/1'
      }),
      expect.anything()
    )
  })

  it('should lookup movie by term', async () => {
    const mockResults = [
      { title: 'The Matrix', tmdbId: 603 }
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockResults)
    })

    const results = await client.movie.lookup('the matrix')

    expect(results).toEqual(mockResults)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: expect.stringContaining('term=the+matrix')
      }),
      expect.anything()
    )
  })

  it('should lookup movie by tmdb id', async () => {
    const mockResults = [
      { title: 'The Matrix', tmdbId: 603 }
    ]

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(mockResults)
    })

    const results = await client.movie.lookupByTmdbId(603)

    expect(results).toEqual(mockResults)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: expect.stringContaining('tmdbId=603')
      }),
      expect.anything()
    )
  })

  it('should create a new movie', async () => {
    const newMovie = {
      title: 'The Matrix',
      tmdbId: 603,
      qualityProfileId: 1,
      rootFolderPath: '/movies'
    }
    const createdMovie = { id: 1, ...newMovie }

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 201,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve(createdMovie)
    })

    const movie = await client.movie.create(newMovie)

    expect(movie).toEqual(createdMovie)
    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'http://localhost:7878/api/v3/movie'
      }),
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(newMovie)
      })
    )
  })

  it('should delete a movie', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 204,
      headers: new Headers({ 'content-length': '0' })
    })

    await client.movie.delete(1, { deleteFiles: true })

    expect(fetch).toHaveBeenCalledWith(
      expect.objectContaining({
        href: expect.stringContaining('/api/v3/movie/1')
      }),
      expect.objectContaining({
        method: 'DELETE'
      })
    )
  })
})
