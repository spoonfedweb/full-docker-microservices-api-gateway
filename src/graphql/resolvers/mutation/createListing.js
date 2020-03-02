import ListingsSvcAdapter from '#root/adapters/listings.svc.adapter'

const createListingResolver = async (obj, { description, title }, context) => {
  if (!context.res.locals.userSession) {
    throw new Error(`Not logged in!`)
  }

  return await ListingsSvcAdapter.createListing({ description, title })
}

export default createListingResolver
