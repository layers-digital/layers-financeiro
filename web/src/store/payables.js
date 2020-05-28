import Axios from 'axios'
import errorHandler from '@/helpers/errorHandler'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

const state = {
  loading: false,
  payablesData: null,
  layersToken: null,
  layersCommunity: null,
  lastFetchedAt: null,
}


// mutations
const mutations = {
  setLoading(state, status) {
    state.loading = status
  },

  setPayablesData(state, payablesData) {
    state.payablesData = payablesData
  },

  setLayersCommunity(state, value) {
    state.layersCommunity = value
  },

  setLayersToken(state, value) {
    state.layersToken = value
  },

  setLastFetchedAt(state, value) {
    state.lastFetchedAt = value
  }
}

// actions
const actions = {
  async fetchData(context) {
    context.commit('setLoading', true)
    try {
      let res = await Axios.get(`/related?userToken=${context.state.layersToken}&community=${context.state.layersCommunity}`)

      let payables = {
        criticalPayables: [],
        groups: [],
      }

      console.log('res', res)

      for(let i = 0; i < res.data.length; i++){
        let intentResult = res.data[i]
        if(!intentResult.result) continue
        if(intentResult.provider){
          intentResult.result.map((payableGroup) => {
            payableGroup.provider = intentResult.provider
          })
        }
        payables.groups.push(...intentResult.result)
        payables.criticalPayables.push(...intentResult.criticalPayables)
      }

      context.commit('setPayablesData', payables)
      context.commit('setLastFetchedAt', new Date())
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
    console.log('state.payablesData', state.payablesData)
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

  getLastFetchedAt(state) {
    dayjs.extend(relativeTime)
    return dayjs(state.lastFetchedAt).locale('pt-br').fromNow()
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