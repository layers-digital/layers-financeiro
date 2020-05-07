import Axios from 'axios'
import errorHandler from '@/helpers/errorHandler'

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
      errorHandler(err, context.dispatch, 'fetchData')
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

  getGroup(state) {
    if(!state.payablesData) {
      return null
    }

    return groupId => state.payablesData.groups.filter(group =>{
      return group.id === groupId
    })[0]
  },

  getPayablesByGroup(state) {
    return groupId => state.payablesData.groups.filter(group =>{
      return group.id === groupId
    })[0].payables.filter(payable => {
      return !payable.isCritical
    })
  },

  getCriticalPayablesByGroup(state) {
    return groupId => state.payablesData.groups.filter(group =>{
      return group.id === groupId
    })[0].payables.filter(payable => {
      return payable.isCritical
    })
  },

  getCriticalPayablesCountByGroup() {
    return groupId => state.payablesData.groups.filter(group =>{
      return group.id === groupId
    })[0].payables.filter(payable => {
      return payable.isCritical
    }).length
  },

  hasState(state) {
    if(!state.payablesData) {
      return false
    }

    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}