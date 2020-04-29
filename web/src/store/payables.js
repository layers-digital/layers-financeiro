import Axios from 'axios'

const state = {
  loading: false,
  data: null,
}

// mutations
const mutations = {
  setLoading(state, status) {
    state.loading = status
  },

  setData(state, data) {
    state.data = data
  }
}

// actions
const actions = {
  async fetchData(context) {
    context.commit('setLoading', true)
    try {
      let res = await Axios.get("/financeiro")
      console.log('RES', res)
      context.commit('setData', res.data)
      context.commit('setLoading', false)
    } catch(err) {
      console.log('Err', err)
      context.commit('setLoading', false)
    }
  }
}

// getters
const getters = {
  //
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}