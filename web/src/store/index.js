import Vue from 'vue'
import Vuex from 'vuex'
import payables from './payables'
import layers from './layers'
import persistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default function createStore({ communityId, userId }) {
  const options = {
    strict: true,
    plugins: [
      persistedState({
        key: `@${communityId}:${userId}-layers-financeiro`,
      }),
    ],
    modules: {
      layers,
      payables,
    },
  };

  return new Vuex.Store(options);
}