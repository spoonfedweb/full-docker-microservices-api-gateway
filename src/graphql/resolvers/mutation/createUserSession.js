import UsersSvcAdapter from '#root/adapters/users.svc'

const createUserSessionResolver = async (obj, { email, password }, context) => {
    const userSession = await UsersSvcAdapter.createUserSession({ email, password })
    context.res.cookie('userSessionId', userSession.id, { httpOnly: true })
    return userSession
}

export default createUserSessionResolver
