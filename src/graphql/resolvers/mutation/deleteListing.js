import ListingsSvcAdapter from '#root/adapters/listings.svc.adapter'

const deleteListingResolver = async (obj, { listingId }) => {
  return await ListingsSvcAdapter.deleteListing({ listingId })
}

export default deleteListingResolver
