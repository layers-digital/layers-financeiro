import getQueryVariable from '@/helpers/getQueryVariable';

const state = {
  session: null,
  userId: null,
  communityId: null,
  accountId: null,
  bridgeConnected: false,
};

const mutations = {
  setSession(context, session) {
    context.session = session;
  },

  setUserId(context, userId) {
    context.userId = userId;
  },

  setCommunityId(context, communityId) {
    context.communityId = communityId;
  },

  setAccountId(context, accountId) {
    context.accountId = accountId;
  },

  setBridgeConnected(context, bridgeConnected) {
    context.bridgeConnected = bridgeConnected;
  },
};

const actions = {
  async init(context) {
    context.commit('setBridgeConnected', false);

    try {
      // Check if has token in query params and ignore Layers SDK connection
      const token = getQueryVariable('token');
      if (token) {
        throw new Error('Deprecated authenticate method');
      }

      if (!LayersPortal) {
        throw new Error('LayersPortal is not defined');
      }

      await LayersPortal.readyPromise;
      if (!LayersPortal.platform || !LayersPortal.connected) {
        throw new Error('Layers Portal not connected');
      }

      (await LayersPortal) && LayersPortal.connectedPromise;
      const session = LayersPortal.session;
      const communityId = LayersPortal.communityId;
      const userId = LayersPortal.userId;
      const accountId = LayersPortal.accountId;
      const connected = LayersPortal.connected;

      context.dispatch('updateSession', {
        session,
        communityId,
        userId,
        accountId,
        connected,
      });
    } catch (err) {
      return context.dispatch('updateSession', {
        session: null,
        communityId: null,
        userId: null,
        accountId: null,
        connected: null,
      });
    }
  },

  async updateSession(context, { session, communityId, userId, accountId, bridgeConnected }) {
    context.commit('setSession', session);
    context.commit('setCommunityId', communityId);
    context.commit('setUserId', userId);
    context.commit('setAccountId', accountId);
    context.commit('setBridgeConnected', bridgeConnected);
  },
};

const getters = {
  isAuthenticated(state) {
    const session = state.session;
    const communityId = state.communityId;
    const userId = state.userId;

    return !!(session && communityId && userId);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
