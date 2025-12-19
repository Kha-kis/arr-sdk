import type { ClientMethods } from '../../core/resource.js'

/**
 * Search options for Newznab/Torznab queries
 */
export interface NewznabSearchOptions {
  /** Search query string */
  q?: string
  /** Categories to search (comma-separated or array) */
  cat?: string | number[]
  /** Extended attributes flag */
  extended?: 0 | 1
  /** Maximum results to return */
  limit?: number
  /** Offset for pagination */
  offset?: number
  /** API key (optional, uses configured key if not provided) */
  apikey?: string
  [key: string]: unknown
}

/**
 * TV search specific options
 */
export interface NewznabTvSearchOptions extends NewznabSearchOptions {
  /** TVDB ID */
  tvdbid?: number
  /** TVRage ID */
  rid?: number
  /** TVMAZE ID */
  tvmazeid?: number
  /** IMDB ID (for TV shows) */
  imdbid?: string
  /** TMDb ID */
  tmdbid?: number
  /** Season number */
  season?: number | string
  /** Episode number */
  ep?: number | string
}

/**
 * Movie search specific options
 */
export interface NewznabMovieSearchOptions extends NewznabSearchOptions {
  /** IMDB ID (e.g., "tt1234567" or just "1234567") */
  imdbid?: string
  /** TMDb ID */
  tmdbid?: number
}

/**
 * Music search specific options
 */
export interface NewznabMusicSearchOptions extends NewznabSearchOptions {
  /** Album name */
  album?: string
  /** Artist name */
  artist?: string
  /** Music label */
  label?: string
  /** Release year */
  year?: number
}

/**
 * Book search specific options
 */
export interface NewznabBookSearchOptions extends NewznabSearchOptions {
  /** Book title */
  title?: string
  /** Author name */
  author?: string
}

/**
 * Resource for accessing Newznab/Torznab API endpoints
 *
 * These endpoints provide standardized indexer access using the Newznab protocol,
 * which returns XML responses. Torznab is the torrent-specific extension of Newznab.
 *
 * @example
 * ```typescript
 * const prowlarr = new ProwlarrClient({ baseUrl: 'http://localhost:9696', apiKey: 'your-api-key' })
 *
 * // Get indexer capabilities
 * const caps = await prowlarr.newznab.getCaps(1)
 *
 * // Search for releases
 * const results = await prowlarr.newznab.search(1, { q: 'ubuntu' })
 *
 * // TV search with TVDB ID
 * const tvResults = await prowlarr.newznab.tvSearch(1, { tvdbid: 12345, season: 1, ep: 1 })
 *
 * // Download a release
 * const nzb = await prowlarr.newznab.download(1, 'release-guid')
 * ```
 */
export class NewznabResource {
  constructor(private client: ClientMethods) {}

  /**
   * Get indexer capabilities (Newznab caps function)
   * Returns XML describing what the indexer supports including categories,
   * search capabilities, and server info.
   *
   * @param indexerId The indexer ID
   * @returns XML string containing indexer capabilities
   */
  async getCaps(indexerId: number): Promise<string> {
    return this.client.getText(`/${indexerId}/api`, { t: 'caps' })
  }

  /**
   * Perform a general search using Newznab protocol
   *
   * @param indexerId The indexer ID
   * @param options Search options
   * @returns XML string containing search results
   */
  async search(indexerId: number, options?: NewznabSearchOptions): Promise<string> {
    return this.client.getText(`/${indexerId}/api`, {
      t: 'search',
      ...this.formatOptions(options)
    })
  }

  /**
   * Perform a TV search using Newznab protocol
   * Supports searching by TVDB ID, TVRage ID, IMDB ID, or query string
   *
   * @param indexerId The indexer ID
   * @param options TV search options including IDs and season/episode
   * @returns XML string containing search results
   */
  async tvSearch(indexerId: number, options?: NewznabTvSearchOptions): Promise<string> {
    return this.client.getText(`/${indexerId}/api`, {
      t: 'tvsearch',
      ...this.formatOptions(options)
    })
  }

  /**
   * Perform a movie search using Newznab protocol
   * Supports searching by IMDB ID, TMDb ID, or query string
   *
   * @param indexerId The indexer ID
   * @param options Movie search options
   * @returns XML string containing search results
   */
  async movieSearch(indexerId: number, options?: NewznabMovieSearchOptions): Promise<string> {
    return this.client.getText(`/${indexerId}/api`, {
      t: 'movie',
      ...this.formatOptions(options)
    })
  }

  /**
   * Perform a music search using Newznab protocol
   *
   * @param indexerId The indexer ID
   * @param options Music search options
   * @returns XML string containing search results
   */
  async musicSearch(indexerId: number, options?: NewznabMusicSearchOptions): Promise<string> {
    return this.client.getText(`/${indexerId}/api`, {
      t: 'music',
      ...this.formatOptions(options)
    })
  }

  /**
   * Perform a book search using Newznab protocol
   *
   * @param indexerId The indexer ID
   * @param options Book search options
   * @returns XML string containing search results
   */
  async bookSearch(indexerId: number, options?: NewznabBookSearchOptions): Promise<string> {
    return this.client.getText(`/${indexerId}/api`, {
      t: 'book',
      ...this.formatOptions(options)
    })
  }

  /**
   * Download a release (NZB file for Usenet, torrent file for Torznab)
   *
   * @param indexerId The indexer ID
   * @param guid The release GUID or link identifier
   * @returns ArrayBuffer containing the downloaded file
   */
  async download(indexerId: number, guid: string): Promise<ArrayBuffer> {
    return this.client.getBuffer(`/${indexerId}/download`, { link: guid })
  }

  /**
   * Get raw RSS/Atom feed for an indexer
   *
   * @param indexerId The indexer ID
   * @param options Optional feed options (limit, cat, etc.)
   * @returns XML string containing the feed
   */
  async getFeed(indexerId: number, options?: NewznabSearchOptions): Promise<string> {
    return this.client.getText(`/${indexerId}/api`, {
      t: 'search',
      ...this.formatOptions(options)
    })
  }

  /**
   * Format options for API call, converting arrays to comma-separated strings
   */
  private formatOptions(options?: Record<string, unknown>): Record<string, unknown> {
    if (!options) return {}

    const formatted: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(options)) {
      if (Array.isArray(value)) {
        formatted[key] = value.join(',')
      } else if (value !== undefined) {
        formatted[key] = value
      }
    }
    return formatted
  }
}
