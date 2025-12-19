import type { ClientMethods } from '../../core/resource.js'
import type { MediaCoverTypes } from '../types.js'

export class MediaCoverResource {
  constructor(private client: ClientMethods) {}

  /**
   * Get a media cover image as binary data
   * @param movieId The movie ID
   * @param filename The cover filename (e.g., "poster.jpg", "fanart.jpg")
   * @returns ArrayBuffer containing the image data
   */
  async get(movieId: number, filename: string): Promise<ArrayBuffer> {
    return this.client.getBuffer(`/api/v3/mediacover/${movieId}/${filename}`)
  }

  /**
   * Get a poster image for a movie
   */
  async getPoster(movieId: number): Promise<ArrayBuffer> {
    return this.get(movieId, 'poster.jpg')
  }

  /**
   * Get a fanart image for a movie
   */
  async getFanart(movieId: number): Promise<ArrayBuffer> {
    return this.get(movieId, 'fanart.jpg')
  }

  /**
   * Get a cover image by type
   * @param movieId The movie ID
   * @param coverType The type of cover to retrieve
   */
  async getByType(movieId: number, coverType: MediaCoverTypes): Promise<ArrayBuffer> {
    return this.get(movieId, `${coverType}.jpg`)
  }
}
