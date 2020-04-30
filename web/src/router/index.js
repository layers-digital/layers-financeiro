import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'
import PayablesGroup from '../views/PayablesGroup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'overview',
    component: Overview
  },
  {
    path: '/payables/:groupId',
    name: 'payables.group',
    component: PayablesGroup,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
