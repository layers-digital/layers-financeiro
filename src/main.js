import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Grid from './styles/Grid.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Grid,
  render: function (h) { return h(App) }
}).$mount('#app')
