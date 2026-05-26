import { describe, it, expect, vi, beforeEach } from 'vitest'
import { LidarrClient } from '../../src/lidarr/index.js'

function mockFetch() {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    headers: new Headers({ 'content-type': 'application/json' }),
    json: () => Promise.resolve({ page: 1, pageSize: 10, totalRecords: 0, records: [] }),
  })
}

function lastUrl(): URL {
  const calls = (fetch as unknown as { mock: { calls: unknown[][] } }).mock.calls
  return calls[calls.length - 1]![0] as URL
}

describe('LidarrClient - History eventType encoding', () => {
  let client: LidarrClient

  beforeEach(() => {
    client = new LidarrClient({ baseUrl: 'http://localhost:8686', apiKey: 'test' })
    vi.restoreAllMocks()
    mockFetch()
  })

  it('encodes a single string eventType as the numeric enum value', async () => {
    await client.history.get({ eventType: 'grabbed' })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['1'])
  })

  it('never sends the literal string "grabbed" on the wire', async () => {
    await client.history.get({ eventType: 'grabbed' })
    expect(lastUrl().searchParams.get('eventType')).not.toBe('grabbed')
  })

  it('handles Lidarr-specific events (trackFileRetagged = 9, downloadIgnored = 10)', async () => {
    await client.history.get({ eventType: 'trackFileRetagged' })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['9'])

    mockFetch()
    await client.history.get({ eventType: 'downloadIgnored' })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['10'])
  })

  it('passes a raw numeric eventType through unchanged', async () => {
    await client.history.get({ eventType: 10 })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['10'])
  })

  it('encodes eventType on getSince', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve([]),
    })
    await client.history.getSince('2026-01-01T00:00:00Z', 'grabbed')
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['1'])
  })

  it('encodes eventType on getForArtist', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve([]),
    })
    await client.history.getForArtist(42, undefined, 'grabbed')
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['1'])
  })
})
