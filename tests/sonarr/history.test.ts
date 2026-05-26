import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SonarrClient } from '../../src/sonarr/index.js'

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

describe('SonarrClient - History eventType encoding', () => {
  let client: SonarrClient

  beforeEach(() => {
    client = new SonarrClient({ baseUrl: 'http://localhost:8989', apiKey: 'test' })
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

  it('encodes Sonarr-specific events (episodeFileRenamed = 6)', async () => {
    await client.history.get({ eventType: 'episodeFileRenamed' })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['6'])
  })

  it('passes a raw numeric eventType through unchanged', async () => {
    await client.history.get({ eventType: 7 })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['7'])
  })

  it('encodes eventType on getSince as well', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve([]),
    })
    await client.history.getSince('2026-01-01T00:00:00Z', { eventType: 'downloadFailed' })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['4'])
  })
})
