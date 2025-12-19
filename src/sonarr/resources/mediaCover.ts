import type { ClientMethods } from '../../core/resource.js'
import type { MediaCoverTypes } from '../types.js'

export class MediaCoverResource {
  constructor(private client: ClientMethods) {}

  /**
   * Get a media cover image as binary data
   * @param seriesId The series ID
   * @param filename The cover filename (e.g., "poster.jpg", "banner.jpg", "fanart.jpg")
   * @returns ArrayBuffer containing the image data
   */
  async get(seriesId: number, filename: string): Promise<ArrayBuffer> {
    return this.client.getBuffer(`/api/v3/mediacover/${seriesId}/${filename}`)
  }

  /**
   * Get a poster image for a series
   */
  async getPoster(seriesId: number): Promise<ArrayBuffer> {
    return this.get(seriesId, 'poster.jpg')
  }

  /**
   * Get a banner image for a series
   */
  async getBanner(seriesId: number): Promise<ArrayBuffer> {
    return this.get(seriesId, 'banner.jpg')
  }

  /**
   * Get a fanart image for a series
   */
  async getFanart(seriesId: number): Promise<ArrayBuffer> {
    return this.get(seriesId, 'fanart.jpg')
  }

  /**
   * Get a cover image by type
   * @param seriesId The series ID
   * @param coverType The type of cover to retrieve
   */
  async getByType(seriesId: number, coverType: MediaCoverTypes): Promise<ArrayBuffer> {
    return this.get(seriesId, `${coverType}.jpg`)
  }
}
