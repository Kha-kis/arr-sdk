import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ProwlarrClient } from '../../src/prowlarr/index.js'

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

describe('ProwlarrClient - History eventType encoding', () => {
  let client: ProwlarrClient

  beforeEach(() => {
    client = new ProwlarrClient({ baseUrl: 'http://localhost:9696', apiKey: 'test' })
    vi.restoreAllMocks()
    mockFetch()
  })

  it('encodes a single string eventType as the numeric enum value', async () => {
    await client.history.get({ eventType: 'releaseGrabbed' })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['1'])
  })

  it('never sends the literal string "releaseGrabbed" on the wire', async () => {
    await client.history.get({ eventType: 'releaseGrabbed' })
    expect(lastUrl().searchParams.get('eventType')).not.toBe('releaseGrabbed')
  })

  it('encodes an eventType array as repeated numeric query params', async () => {
    await client.history.get({ eventType: ['releaseGrabbed', 'indexerRss'] })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['1', '3'])
  })

  it('passes a raw numeric eventType through unchanged', async () => {
    await client.history.get({ eventType: 5 })
    expect(lastUrl().searchParams.getAll('eventType')).toEqual(['5'])
  })
})
