import ListingsSvcAdapter from '#root/adapters/listings.svc.adapter'

const listingsResolver = async () => {
  return await ListingsSvcAdapter.fetchAllListings()
}

export default listingsResolver
