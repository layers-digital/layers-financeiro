import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'
import PayablesGroup from '../views/PayablesGroup.vue'
import PayableDetail from '../views/PayableDetail.vue'
import AppBar from '../components/AppBar.vue'
import SimpleAppBar from '../components/SimpleAppBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'overview',
    components: {
      default: Overview,
      navigation: AppBar,
    },
    props: { default: true, navigation: false },
  },
  {
    path: '/payables/:groupId',
    name: 'payables.group',
    components: {
      default: PayablesGroup,
      navigation: AppBar,
    },
    props: { default: true, navigation: false },
  },
  {
    path: '/payable/:payableId',
    name: 'payable.detail',
    components: {
      default: PayableDetail,
      navigation: SimpleAppBar,
    },
    props: { default: true, navigation: false },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
