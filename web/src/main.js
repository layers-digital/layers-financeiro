import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import store from './store'
import General from './styles/General.css'
import Grid from './styles/Grid.css'
import Colors from './styles/Colors.css'
import Transitions from './styles/Transitions.css'
import Text from './styles/Text.css'

Vue.config.productionTip = false

Axios.defaults.baseURL = "http://localhost:8050/layers-financeiro/us-central1"

new Vue({
  router,
  store,
  General,
  Grid,
  Colors,
  Transitions,
  Text,
  Axios,
  render: function (h) { return h(App) }
}).$mount('#app')
