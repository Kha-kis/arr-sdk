import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SonarrClient } from '../../src/sonarr/index.js'
import { ArrError, NotFoundError, UnauthorizedError, ValidationError, TimeoutError } from '../../src/core/errors.js'

describe('BaseClient', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  describe('initialization', () => {
    it('should throw error if baseUrl is not provided', () => {
      expect(() => new SonarrClient({ baseUrl: '', apiKey: 'test' })).toThrow('baseUrl is required')
    })

    it('should throw error if apiKey is not provided', () => {
      expect(() => new SonarrClient({ baseUrl: 'http://localhost', apiKey: '' })).toThrow('apiKey is required')
    })

    it('should normalize baseUrl by removing trailing slash', async () => {
      const client = new SonarrClient({
        baseUrl: 'http://localhost:8989/',
        apiKey: 'test'
      })

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve([])
      })

      await client.series.getAll()

      expect(fetch).toHaveBeenCalledWith(
        expect.objectContaining({
          href: 'http://localhost:8989/api/v3/series'
        }),
        expect.anything()
      )
    })
  })

  describe('error handling', () => {
    it('should throw UnauthorizedError on 401', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        statusText: 'Unauthorized',
        text: () => Promise.resolve('')
      })

      const client = new SonarrClient({
        baseUrl: 'http://localhost:8989',
        apiKey: 'invalid-key'
      })

      await expect(client.series.getAll()).rejects.toThrow(UnauthorizedError)
    })

    it('should throw NotFoundError on 404', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        text: () => Promise.resolve('')
      })

      const client = new SonarrClient({
        baseUrl: 'http://localhost:8989',
        apiKey: 'test'
      })

      await expect(client.series.getById(99999)).rejects.toThrow(NotFoundError)
    })

    it('should throw ValidationError on 400 with validation errors', async () => {
      const validationErrors = [
        { propertyName: 'title', errorMessage: 'Title is required' }
      ]

      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        text: () => Promise.resolve(JSON.stringify(validationErrors))
      })

      const client = new SonarrClient({
        baseUrl: 'http://localhost:8989',
        apiKey: 'test'
      })

      await expect(client.series.create({} as never)).rejects.toThrow(ValidationError)
    })

    it('should throw ArrError on other status codes', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
        text: () => Promise.resolve('')
      })

      const client = new SonarrClient({
        baseUrl: 'http://localhost:8989',
        apiKey: 'test'
      })

      await expect(client.series.getAll()).rejects.toThrow(ArrError)
    })
  })

  describe('callbacks', () => {
    it('should call onRequest before making request', async () => {
      const onRequest = vi.fn()

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve([])
      })

      const client = new SonarrClient({
        baseUrl: 'http://localhost:8989',
        apiKey: 'test',
        onRequest
      })

      await client.series.getAll()

      expect(onRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'GET',
          url: expect.any(URL)
        })
      )
    })

    it('should call onResponse after successful response', async () => {
      const onResponse = vi.fn()
      const mockResponse = {
        ok: true,
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve([])
      }

      global.fetch = vi.fn().mockResolvedValue(mockResponse)

      const client = new SonarrClient({
        baseUrl: 'http://localhost:8989',
        apiKey: 'test',
        onResponse
      })

      await client.series.getAll()

      expect(onResponse).toHaveBeenCalled()
    })

    it('should call onError on error response', async () => {
      const onError = vi.fn()

      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
        text: () => Promise.resolve('')
      })

      const client = new SonarrClient({
        baseUrl: 'http://localhost:8989',
        apiKey: 'test',
        onError
      })

      await expect(client.series.getAll()).rejects.toThrow()
      expect(onError).toHaveBeenCalledWith(expect.any(ArrError))
    })
  })

  describe('custom headers', () => {
    it('should include custom headers in requests', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        headers: new Headers({ 'content-type': 'application/json' }),
        json: () => Promise.resolve([])
      })

      const client = new SonarrClient({
        baseUrl: 'http://localhost:8989',
        apiKey: 'test',
        headers: { 'X-Custom-Header': 'custom-value' }
      })

      await client.series.getAll()

      expect(fetch).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          headers: expect.objectContaining({
            'X-Custom-Header': 'custom-value'
          })
        })
      )
    })
  })
})
