const functions = require('firebase-functions')
const Axios = require('axios')

class LayersAPI {
  constructor(community) {
    this.intent = '@layers:payments:Payables:getRelated'
    this.Layers = Axios.create({
      baseURL: functions.config().layers.api,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'X-Community-Id': community
      }
    })
  }

  async validateSession(community, session, userId) {
    await this.Layers.get('/sso/session/validate', {
      params: { community, session, userId },
      headers: { 'Authorization': 'Bearer ' + functions.config().layers.secret }
    })
  }

  async fetchUserData(userId) {
    const { data } = await this.Layers.get(`/users/${userId}`, {
      headers: { 'Authorization': 'Bearer ' + functions.config().layers.secret }
    })
    return data
  }

  async legacyFetchUserData(userToken) {
    const { data } = await this.Layers.get('/user/me/', {
      headers: { 'Authorization': `Bearer ${userToken}`}
    })
    return data
  }

  async discoverProviders() {
    const { data } = await this.Layers.get(`/services/discover/${this.intent}?version=1`, {
      headers: { 'Authorization': 'Bearer ' + functions.config().layers.secret }
    })
    return data
  }

  async callProviders(data, providerId) {
    const response = await this.Layers.post(`/services/call/${this.intent}/${providerId}?version=1&timeout=10000`, data, {
      headers: { 'Authorization': 'Bearer ' + functions.config().layers.secret }
    })
    return response.data
  }
}

module.exports = LayersAPI