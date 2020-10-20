import Vue from 'vue';
import Vuex from 'vuex';
import payables from './payables';
import layers from './layers';
import persistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default function createStore({ communityId, userId }) {
  const options = {
    strict: true,
    plugins: [],
    modules: {
      layers,
      payables,
    },
  };

  // Enable persisted state if user's LocalStore is enabled
  if (isLocalStorageEnabled()) {
    options.plugins.push(
      persistedState({
        key: `@${communityId}:${userId}-layers-financeiro`,
      })
    );
  }

  return new Vuex.Store(options);
}

function isLocalStorageEnabled() {
  try {
    return window.localStorage instanceof Storage;
  } catch (error) {
    return false;
  }
}
