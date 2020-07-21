/* global LayersPortal */

const state = {
  session: null,
  userId: null,
  communityId: null,
  accountId: null,
  bridgeConnected: false,
}

const mutations = {
  setSession(context, session) {
    context.session = session
  },

  setUserId(context, userId) {
    context.userId = userId
  },

  setCommunityId(context, communityId) {
    context.communityId = communityId
  },

  setAccountId(context, accountId) {
    context.accountId = accountId
  },

  setBridgeConnected(context, bridgeConnected) {
    context.bridgeConnected = bridgeConnected
  },
}

const actions = {
  async init(context) {
    context.commit('setBridgeConnected', false)

    let res = await LayersPortal.connectedPromise
    console.log('LayersPlatform', LayersPortal.platform)
    if (!LayersPortal.platform) {
      return context.dispatch('updateSession', {
        session: null,
        communityId: null,
        userId: null,
        accountId: null,
        bridgeConnected: null,
      })
    }

    console.log('LayersPortal', res)
    const session = LayersPortal.session
    const communityId = LayersPortal.communityId
    const userId = LayersPortal.userId
    const accountId = LayersPortal.accountId
    const bridgeConnected = LayersPortal.bridgeConnected

    console.log('bridgeConnected', bridgeConnected)

    context.dispatch('updateSession', {
      session,
      communityId,
      userId,
      accountId,
      bridgeConnected,
    })
  },

  async updateSession(context, { session, communityId, userId, accountId, bridgeConnected }) {
    context.commit('setSession', session)
    context.commit('setCommunityId', communityId)
    context.commit('setUserId', userId)
    context.commit('setAccountId', accountId)
    context.commit('setBridgeConnected', bridgeConnected)
  }
}

const getters = {
  isAuthenticated(state) {
    const session = state.session
    const communityId = state.communityId
    const userId = state.userId

    return !!(session && communityId && userId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}