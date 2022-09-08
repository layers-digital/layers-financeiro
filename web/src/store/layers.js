import getQueryVariable from '@/helpers/getQueryVariable';
import { setUserPropsLogEvents } from '@/services/logEvent';

const state = {
  session: null,
  userId: null,
  communityId: null,
  accountId: null,
};

const actions = {
  async init(context) {
    try {
      // Check if has token in query params and ignore Layers SDK connection
      const token = getQueryVariable('token');
      if (token) {
        throw new Error("Deprecated authenticate method: Using user's token instead of session");
      }

      if (!LayersPortal) {
        throw new Error('LayersPortal is not defined');
      }

      await LayersPortal.readyPromise;
      await LayersPortal.connectedPromise;

      if (!LayersPortal.platform || !LayersPortal.connected) {
        throw new Error('Layers Portal not connected');
      }

      const { session, communityId, userId, accountId, connected } = LayersPortal;
      const sessionInfo = {
        session,
        communityId,
        userId,
        accountId,
        connected,
      };
      context.dispatch('updateSession', sessionInfo);
    } catch (error) {
      const sessionInfo = {
        session: null,
        communityId: null,
        userId: null,
        accountId: null,
        connected: null,
      };
      return context.dispatch('updateSession', sessionInfo);
    }
  },

  async updateSession(context, { communityId, userId, accountId }) {
    setUserPropsLogEvents(userId, {
      community: communityId,
      ...(accountId ? { accountId } : {}),
    });
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
