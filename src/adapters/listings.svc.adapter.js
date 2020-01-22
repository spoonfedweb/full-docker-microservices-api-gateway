import got from 'got'

const LISTINGS_SVC_URL = process.env.LISTINGS_SVC_URL || "http://listings-svc:7100"

export default class ListingsSvcAdapter {
  static async fetchAllListings() {
    try {
      const body = await got.get(`
      ${LISTINGS_SVC_URL}/listings`).json()
      return body
    } catch (e) {
      return `error: ${e}`
    }
  }
}
