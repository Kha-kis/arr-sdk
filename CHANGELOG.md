# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

#### Sonarr
- `WantedResource` for missing and cutoff unmet episodes
- `ManualImport` command support
- `FileSystemResource` for browsing filesystem paths
- `MediaCoverResource` for downloading series cover images (poster, banner, fanart)
- Queue details endpoint (`queue.getDetails()`)
- Quality definition limits endpoint (`qualityDefinition.getLimits()`)
- Calendar iCal feed endpoint (`calendar.getICalFeed()`)
- System ping endpoint (`system.ping()`)
- Log file download endpoints (`logFile.download()`, `logFile.downloadUpdate()`)
- Backup restore endpoint (`backup.restore()`)

#### Radarr
- `WantedResource` for missing and cutoff unmet movies
- `ManualImport` command support
- `FileSystemResource` for browsing filesystem paths
- `MediaCoverResource` for downloading movie cover images (poster, fanart)
- Queue details endpoint (`queue.getDetails()`)
- Quality definition limits endpoint (`qualityDefinition.getLimits()`)
- Calendar iCal feed endpoint (`calendar.getICalFeed()`)
- System ping endpoint (`system.ping()`)
- Log file download endpoints (`logFile.download()`, `logFile.downloadUpdate()`)
- Backup restore endpoint (`backup.restore()`)

#### Prowlarr
- `FileSystemResource` for browsing filesystem paths
- `LocalizationResource` for localization strings and options
- `NewznabResource` for Newznab/Torznab protocol support (caps, search, download)
- `GetIndexerStatsOptions` with date range and indexer filtering
- System ping endpoint (`system.ping()`)
- Log file download endpoints (`logFile.download()`, `logFile.downloadUpdate()`)

#### Core
- `getBuffer()` method for binary responses (images, files)
- `getText()` method for text/XML responses (iCal feeds, Newznab XML)

### Changed

- Refactored `getBuffer()` and `getText()` to use shared `fetchRaw()` helper to reduce code duplication

### Fixed

- Fixed iCalendar feed endpoints to use `getText()` instead of `get()` for proper text/calendar response handling
- Fixed `ManualImport` command `importMode` to use capitalized values matching the API (Sonarr: `'Auto' | 'Move' | 'Copy'`, Radarr: `'Move' | 'Copy'`)

### Breaking Changes

#### Queue Options (Sonarr & Radarr)

The `quality` field in `GetQueueOptions` changed from a single number to an array of numbers to support filtering by multiple quality profiles.

**Before:**
```typescript
// Filter by single quality
await client.queue.get({ quality: 1 })
```

**After:**
```typescript
// Filter by single quality (wrap in array)
await client.queue.get({ quality: [1] })

// Filter by multiple qualities
await client.queue.get({ quality: [1, 2, 3] })
```

**Migration:** Update all calls that pass `quality` as a single number to wrap it in an array.

| Field | Before | After |
|-------|--------|-------|
| `GetQueueOptions.quality` | `number` | `number[]` |

## [0.1.0] - 2024-01-01

### Added

- Initial release with Sonarr, Radarr, and Prowlarr support
- Full TypeScript support with types generated from official OpenAPI specs
- Native `fetch` API (no dependencies)
- Subpath exports for tree-shaking
- Async pagination helpers
- Comprehensive error handling
- Request/response hooks
