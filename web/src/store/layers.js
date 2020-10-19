import getQueryVariable from '@/helpers/getQueryVariable';

const state = {
  session: null,
  userId: null,
  communityId: null,
  accountId: null,
  bridgeConnected: false,
};

const mutations = {
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
    } catch (err) {
      console.error(err);
    }
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
