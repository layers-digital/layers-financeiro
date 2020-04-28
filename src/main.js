import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import General from './styles/General.css'
import Grid from './styles/Grid.css'
import Colors from './styles/Colors.css'
import Transitions from './styles/Transitions.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  General,
  Grid,
  Colors,
  Transitions,
  render: function (h) { return h(App) }
}).$mount('#app')
