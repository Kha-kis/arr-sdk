import { describe, it, expect, vi, beforeEach } from 'vitest'
import { RadarrClient } from '../../src/radarr/index.js'

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

describe('RadarrClient - History eventType encoding', () => {
  let client: RadarrClient

  beforeEach(() => {
    client = new RadarrClient({ baseUrl: 'http://localhost:7878', apiKey: 'test' })
    vi.restoreAllMocks()
    mockFetch()
  })

  it('encodes a single string eventType as the numeric enum value', async () => {
    await client.history.get({ eventType: 'grabbed' })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['1'])
  })

  it('never sends the literal string "grabbed" on the wire (regression for arr-dashboard #472)', async () => {
    await client.history.get({ eventType: 'grabbed' })
    expect(lastUrl().searchParams.get('eventType')).not.toBe('grabbed')
  })

  it('encodes an eventType array as repeated numeric query params', async () => {
    await client.history.get({ eventType: ['grabbed', 'downloadFailed'] })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['1', '4'])
  })

  it('honors the upstream enum gaps (movieFileDeleted = 6, not 4)', async () => {
    await client.history.get({ eventType: 'movieFileDeleted' })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['6'])
  })

  it('passes a raw numeric eventType through unchanged', async () => {
    await client.history.get({ eventType: 9 })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['9'])
  })

  it('omits eventType when not provided', async () => {
    await client.history.get({ pageSize: 50 })
    expect(lastUrl().searchParams.has('eventType')).toBe(false)
  })

  it('encodes eventType on getSince as well', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve([]),
    })
    await client.history.getSince('2026-01-01T00:00:00Z', { eventType: 'grabbed' })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['1'])
  })
})
