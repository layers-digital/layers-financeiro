import Axios from 'axios'

const state = {
  loading: false,
  payablesData: null,
}

// mutations
const mutations = {
  setLoading(state, status) {
    state.loading = status
  },

  setPayablesData(state, payablesData) {
    state.payablesData = payablesData
  }
}

// actions
const actions = {
  async fetchData(context) {
    context.commit('setLoading', true)
    try {
      let res = await Axios.get("/financeiro")
      context.commit('setPayablesData', res.data)
      context.commit('setLoading', false)
    } catch(err) {
      console.log('Err', err)
      context.commit('setLoading', false)
    }
  }
}

// getters
const getters = {
  getCriticalPayables(state) {
    if(state.payablesData) {
      return state.payablesData.criticalPayables
    }

    return []
  },

  getPayablesGroups(state) {
    if(state.payablesData) {
      return state.payablesData.groups
    }

    return []
  },

  getPayablesGroup(state) {
    return groupId => state.payablesData.groups.filter(group =>{
      return group.id === groupId
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}