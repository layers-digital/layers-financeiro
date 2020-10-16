import Axios from 'axios';
import errorHandler from '@/helpers/errorHandler';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import Toast from '@/helpers/toast';
import getQueryVariable from '@/helpers/getQueryVariable';

const state = {
  loading: false,
  payablesData: null,
  lastFetchedAt: null,

  // deprecated
  token: null,
  community: null,
};

// mutations
const mutations = {
  setLoading(state, status) {
    state.loading = status;
  },

  setPayablesData(state, payablesData) {
    state.payablesData = payablesData;
  },

  setLastFetchedAt(state, value) {
    state.lastFetchedAt = value;
  },

  setCommunity(state, community) {
    state.community = community;
  },

  setToken(state, token) {
    state.token = token;
  },
};

// actions
const actions = {
  async fetchData(context) {
    const community = getQueryVariable('community');
    const token = getQueryVariable('token');
    if (community) context.commit('setCommunity', community);
    if (token) context.commit('setToken', token);

    context.commit('setLoading', true);
    Toast.open({
      message: 'Estamos atualizando as informações.',
      position: 'bottom',
      timeout: 0,
      options: {
        loading: true,
      },
    });

    const session = LayersPortal.session;
    const userId = LayersPortal.userId;
    const communityId = LayersPortal.communityId || context.state.community;

    try {
      const res = await Axios.get('/related', {
        params: {
          userToken: context.state.token,
          community: communityId,
          session: session,
          userId: userId,
        },
      });

      let payables = {
        criticalPayables: [],
        groups: [],
      };

      for (let i = 0; i < res.data.length; i++) {
        let intentResult = res.data[i];
        if (!intentResult.result) continue;
        if (intentResult.provider) {
          intentResult.result.map((payableGroup) => {
            payableGroup.provider = intentResult.provider;
          });
        }
        payables.groups.push(...intentResult.result);
        payables.criticalPayables.push(...intentResult.criticalPayables);
      }

      // Makes sure that the id is string
      payables.groups.forEach((group) => {
        group.id = group.id.toString();
      });

      context.commit('setPayablesData', payables);
      context.commit('setLastFetchedAt', new Date());
      context.commit('setLoading', false);
      Toast.hideAll();
    } catch (err) {
      Toast.hideAll();
      errorHandler({
        error: err,
        parameters: {
          action: {
            callback: () => {
              Toast.hideAll();
              context.dispatch('fetchData');
            },
            label: 'ATUALIZAR',
          },
          timeout: 0,
        },
      });
      context.commit('setLoading', false);
    }
  },
};

// getters
const getters = {
  getCriticalPayables(state) {
    if (state.payablesData) {
      return state.payablesData.criticalPayables;
    }

    return [];
  },

  getPayablesGroups(state) {
    if (state.payablesData) {
      return state.payablesData.groups;
    }

    return [];
  },

  getGroup(state) {
    if (!state.payablesData) {
      return null;
    }

    return (groupId) =>
      state.payablesData.groups.filter((group) => {
        return group.id === groupId;
      })[0];
  },

  getPayablesByGroup(state) {
    return (groupId) =>
      state.payablesData.groups
        .filter((group) => {
          return group.id === groupId;
        })[0]
        .payables.filter((payable) => {
          return !payable.isCritical;
        });
  },

  getCriticalPayablesByGroup(state) {
    return (groupId) =>
      state.payablesData.groups
        .filter((group) => {
          return group.id === groupId;
        })[0]
        .payables.filter((payable) => {
          return payable.isCritical;
        });
  },

  getCriticalPayablesCountByGroup() {
    return (groupId) =>
      state.payablesData.groups
        .filter((group) => {
          return group.id === groupId;
        })[0]
        .payables.filter((payable) => {
          return payable.isCritical;
        }).length;
  },

  getLastFetchedAt(state) {
    dayjs.extend(relativeTime);
    return dayjs(state.lastFetchedAt).locale('pt-br').fromNow();
  },

  hasState(state) {
    if (!state.payablesData) {
      return false;
    }

    return true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
