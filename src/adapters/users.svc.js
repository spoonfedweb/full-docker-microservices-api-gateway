import got from 'got'

const USERS_SVC_URL = process.env.USERS_SVC_URL || 'http://users-svc:7101'

export default class UsersSvcAdapter {
  static async createUser({ email, password }) {
    try {
      const body = await got.post(
        `${USERS_SVC_URL}/users`, {
          json: {
            email, password
          }
        }
      ).json()
      return body;
    } catch (e) {
      return `error: ${e}`
    }
  }

  static async createUserSession({ email, password }) {
    try {
      const body = await got.post(
        `${USERS_SVC_URL}/sessions`, {
          json: {
            email, password
          }
        }
      ).json();
      return body;
    } catch (e) {
      return `error: ${e}`
    }
  }

  static async fetchUser({ userId }) {
    try {
      const body = await got.get(
        `${USERS_SVC_URL}/users/${userId}`
      ).json();
      return body;
    } catch (e) {
      return `error: ${e}`
    }
  }

  static async fetchUserSession({ sessionId }) {
    try {
      const body = await got.get(
        `${USERS_SVC_URL}/sessions/${sessionId}`
      ).json()
      return body
    } catch (e) {
      return `error: ${e}`
    }
  }
}
