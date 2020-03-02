import UsersSvcAdapter from '#root/adapters/users.svc'

const deleteUserSessionResolver = async (obj, { sessionId }, context) => {
  const userSession = await UsersSvcAdapter.deleteUserSession({ sessionId })
  context.res.clearCookie('userSessionId')
  return true
}

export default deleteUserSessionResolver
