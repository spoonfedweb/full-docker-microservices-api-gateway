import UsersSvcAdapter from '#root/adapters/users.svc'

const UserSession = {
  user: async userSession => {
    return await UsersSvcAdapter.fetchUser({ userId: userSession.userId })
  }
}

export default UserSession
