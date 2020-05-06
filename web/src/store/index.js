import Vue from 'vue'
import Vuex from 'vuex'
import payables from './payables'
import createPersistedState from 'vuex-persistedstate';



Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    payables,
  },
})