import getQueryVariable from '@/helpers/getQueryVariable';

const state = {
  session: null,
  userId: null,
  communityId: null,
  accountId: null,
};

const actions = {
  async init(context) {
    // Check if has token in query params and ignore Layers SDK connection
    const token = getQueryVariable('token');
    if (token) {
      console.warn('Using user\'s token instead of session')
      return;
    }

    await LayersPortal.readyPromise;
    if (!LayersPortal.platform) {
      throw new Error('Layers Portal not connected');
    }

    await LayersPortal.connectedPromise;
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
};
