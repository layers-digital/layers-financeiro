import Vue from 'vue'
import Vuex from 'vuex'
import payables from './payables'
import layers from './layers'
import persistedState from 'vuex-persistedstate';
import getQueryVariable from '@/helpers/getQueryVariable'

Vue.use(Vuex)

const community = getQueryVariable('community')

export default new Vuex.Store({
  strict: true,
  plugins: [
    persistedState({
      key: `${community}-layers-financeiro`
    })
  ],

  modules: {
    layers,
    payables,
  },
})