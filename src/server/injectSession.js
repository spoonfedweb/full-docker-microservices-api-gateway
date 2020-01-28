import UsersSvcAdapter from '#root/adapters/users.svc'

const injectSession = async (req, res, next) => {
  if (req.cookies.userSessionId) {
    const userSession = await UsersSvcAdapter.fetchUserSession({
      sessionId: req.cookies.userSessionId
    })
    res.locals.userSession = userSession
  }
  return next()
}

export default injectSession
