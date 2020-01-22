import UsersSvcAdapter from '#root/adapters/users.svc'

const createUserResolver = async (obj, { email, password }) => {
  return await UsersSvcAdapter.createUser({ email, password })
}

export default createUserResolver
