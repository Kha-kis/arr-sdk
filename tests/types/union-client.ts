// Type-only test fixture for arr-sdk.
// Must compile cleanly under `npm run test:types`.
//
// Each block pins a contract that broke (or could break) for consumers
// holding a union of client types. If any of these stop compiling,
// the SDK has regressed a consumer-facing intersection-type guarantee.

import type { SonarrClient } from '../../src/sonarr/index.js'
import type { RadarrClient } from '../../src/radarr/index.js'
import type { LidarrClient } from '../../src/lidarr/index.js'
import type { ReadarrClient } from '../../src/readarr/index.js'
import type { ProwlarrClient } from '../../src/prowlarr/index.js'

declare const sonarrOrRadarr: SonarrClient | RadarrClient
declare const lidarrOrReadarr: LidarrClient | ReadarrClient
declare const anyClient:
  | SonarrClient
  | RadarrClient
  | LidarrClient
  | ReadarrClient
declare const anyClientPlusProwlarr:
  | SonarrClient
  | RadarrClient
  | LidarrClient
  | ReadarrClient
  | ProwlarrClient

// --- Consumer regression: Sonarr | Radarr paginated history ---
// arr-dashboard's grab-detector.ts uses this exact call shape.
async function sonarrRadarrHistoryAll() {
  await sonarrOrRadarr.history.get({
    pageSize: 100,
    sortKey: 'date',
    sortDirection: 'descending',
    eventType: 'grabbed',
  })
  await sonarrOrRadarr.history.get({ pageSize: 100 })
  await sonarrOrRadarr.history.get({})
  await sonarrOrRadarr.history.get()
}

// --- Consumer regression: Sonarr | Radarr queue ---
async function sonarrRadarrQueueAll() {
  await sonarrOrRadarr.queue.get({ pageSize: 1000 })
  await sonarrOrRadarr.queue.get({
    pageSize: 50,
    sortKey: 'progress',
    sortDirection: 'ascending',
  })
}

// --- Same union, eventType encoding preserved (PR #2) ---
async function eventTypeStringAndNumeric() {
  await sonarrOrRadarr.history.get({ eventType: 'grabbed' })
  await sonarrOrRadarr.history.get({ eventType: 1 })
  await sonarrOrRadarr.history.get({ eventType: ['grabbed', 'downloadFailed'] })
  await sonarrOrRadarr.history.get({ eventType: [1, 4] })
}

// --- Lidarr | Readarr union ---
// Pre-0.7.1, these inlined pagination fields with divergent shapes.
async function lidarrReadarrHistory() {
  await lidarrOrReadarr.history.get({
    pageSize: 100,
    sortKey: 'date',
    sortDirection: 'descending',
  })
  await lidarrOrReadarr.history.get({ eventType: 'grabbed' })
  await lidarrOrReadarr.history.get({ eventType: 1 })
}

async function lidarrReadarrQueue() {
  await lidarrOrReadarr.queue.get({ pageSize: 100 })
}

// --- 4-way and 5-way unions ---
// If any single resource diverges, the intersection breaks the union.
async function fourWayPaginated() {
  await anyClient.history.get({ pageSize: 100, sortKey: 'date' })
  await anyClient.queue.get({ pageSize: 100 })
}

async function fiveWayHistoryWithProwlarr() {
  await anyClientPlusProwlarr.history.get({ pageSize: 100 })
}

// --- Single-client typing must still accept known keys ---
declare const sonarrClient: SonarrClient
async function sonarrClientStillTakesKnownKeys() {
  await sonarrClient.history.get({
    pageSize: 100,
    includeEpisode: true,
    eventType: 'grabbed',
  })
  // The index signature on PaginationOptions allows arbitrary string keys.
  // This is intentional: it lets consumers pass query params the typed
  // shape doesn't yet expose (forward compat with new upstream params).
  await sonarrClient.history.get({
    pageSize: 100,
    someFutureFilterParam: 'value',
  })
}

export {
  sonarrRadarrHistoryAll,
  sonarrRadarrQueueAll,
  eventTypeStringAndNumeric,
  lidarrReadarrHistory,
  lidarrReadarrQueue,
  fourWayPaginated,
  fiveWayHistoryWithProwlarr,
  sonarrClientStillTakesKnownKeys,
}
