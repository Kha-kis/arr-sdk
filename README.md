# arr-sdk

Unified TypeScript SDK for Sonarr, Radarr, and Prowlarr APIs.

## Features

- Full TypeScript support with types generated from official OpenAPI specs
- Native `fetch` API (no dependencies)
- Subpath exports for tree-shaking
- Async pagination helpers
- Comprehensive error handling
- Request/response hooks

## Installation

```bash
npm install arr-sdk
```

## Quick Start

### Sonarr

```typescript
import { SonarrClient } from 'arr-sdk/sonarr'

const sonarr = new SonarrClient({
  baseUrl: 'http://localhost:8989',
  apiKey: 'your-api-key'
})

// Get all series
const series = await sonarr.series.getAll()

// Search for a series
const results = await sonarr.series.lookup('Breaking Bad')

// Add a series
const newSeries = await sonarr.series.create({
  tvdbId: 81189,
  title: 'Breaking Bad',
  qualityProfileId: 1,
  rootFolderPath: '/tv'
})
```

### Radarr

```typescript
import { RadarrClient } from 'arr-sdk/radarr'

const radarr = new RadarrClient({
  baseUrl: 'http://localhost:7878',
  apiKey: 'your-api-key'
})

// Get all movies
const movies = await radarr.movie.getAll()

// Search for a movie
const results = await radarr.movie.lookup('The Matrix')

// Add a movie
const newMovie = await radarr.movie.create({
  tmdbId: 603,
  title: 'The Matrix',
  qualityProfileId: 1,
  rootFolderPath: '/movies'
})
```

### Prowlarr

```typescript
import { ProwlarrClient } from 'arr-sdk/prowlarr'

const prowlarr = new ProwlarrClient({
  baseUrl: 'http://localhost:9696',
  apiKey: 'your-api-key'
})

// Get all indexers
const indexers = await prowlarr.indexer.getAll()

// Search across indexers
const results = await prowlarr.search.query({
  query: 'ubuntu',
  type: 'search'
})
```

## Configuration

```typescript
import { SonarrClient } from 'arr-sdk/sonarr'

const client = new SonarrClient({
  baseUrl: 'http://localhost:8989',
  apiKey: 'your-api-key',

  // Optional: custom timeout (default: 30000ms)
  timeout: 60000,

  // Optional: custom headers
  headers: {
    'X-Custom-Header': 'value'
  },

  // Optional: request/response hooks
  onRequest: (config) => {
    console.log('Request:', config.method, config.url.href)
  },
  onResponse: (response) => {
    console.log('Response:', response.status)
  },
  onError: (error) => {
    console.error('Error:', error.message)
  }
})
```

## Pagination

For endpoints that return paginated results:

```typescript
// Async generator for memory-efficient iteration
for await (const item of client.queue.getAll()) {
  console.log(item)
}

// Or get all results at once
const allItems = await client.queue.getAllArray()
```

## Error Handling

```typescript
import {
  ArrError,
  NotFoundError,
  UnauthorizedError,
  ValidationError
} from 'arr-sdk'

try {
  await client.series.getById(99999)
} catch (error) {
  if (error instanceof NotFoundError) {
    console.log('Series not found')
  } else if (error instanceof UnauthorizedError) {
    console.log('Invalid API key')
  } else if (error instanceof ValidationError) {
    console.log('Validation errors:', error.errors)
  } else if (error instanceof ArrError) {
    console.log('API error:', error.statusCode, error.message)
  }
}
```

## Available Resources

### Sonarr

- `series` - Series management
- `episode` - Episode management
- `episodeFile` - Episode file management
- `calendar` - Calendar/upcoming episodes
- `queue` - Download queue
- `history` - Activity history
- `command` - Commands (refresh, scan, etc.)
- `qualityProfile` - Quality profiles
- `qualityDefinition` - Quality definitions
- `rootFolder` - Root folders
- `tag` - Tags
- `indexer` - Indexer configuration
- `downloadClient` - Download client configuration
- `importList` - Import lists
- `notification` - Notifications
- `metadata` - Metadata providers
- `release` - Release search/grab
- `blocklist` - Blocklisted releases
- `system` - System info, health, logs
- `config` - Host/UI/naming configuration

### Radarr

- `movie` - Movie management
- `collection` - Collection management
- `calendar` - Calendar/upcoming releases
- `queue` - Download queue
- `history` - Activity history
- `command` - Commands (refresh, scan, etc.)
- `qualityProfile` - Quality profiles
- `qualityDefinition` - Quality definitions
- `customFormat` - Custom formats
- `rootFolder` - Root folders
- `tag` - Tags
- `indexer` - Indexer configuration
- `downloadClient` - Download client configuration
- `importList` - Import lists
- `notification` - Notifications
- `metadata` - Metadata providers
- `release` - Release search/grab
- `blocklist` - Blocklisted releases
- `system` - System info, health, logs
- `config` - Host/UI/naming configuration

### Prowlarr

- `indexer` - Indexer management
- `indexerProxy` - Indexer proxies
- `application` - Application connections
- `appProfile` - App sync profiles
- `search` - Search across indexers
- `command` - Commands
- `history` - Search history
- `tag` - Tags
- `downloadClient` - Download clients
- `notification` - Notifications
- `system` - System info, health, logs
- `config` - Configuration

## Tree-Shaking

Import only what you need:

```typescript
// Import only Sonarr (smaller bundle)
import { SonarrClient } from 'arr-sdk/sonarr'

// Import only Radarr
import { RadarrClient } from 'arr-sdk/radarr'

// Import only Prowlarr
import { ProwlarrClient } from 'arr-sdk/prowlarr'

// Or import everything
import { SonarrClient, RadarrClient, ProwlarrClient } from 'arr-sdk'
```

## Requirements

- Node.js >= 18.0.0 (uses native `fetch`)

## License

MIT
