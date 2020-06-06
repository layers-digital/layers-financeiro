<template>
  <div class="app-bar-container">
    <div class="app-bar grey-30-outline">
      <div @click="setCurrentPage(currentPage)" class="ls-row ls-no-gutters p-3 ls-flex-nowrap ls-align-items-center" style="height: 56px; z-index: 5;">
        <!-- <div class="ls-col ls-align-self-center mr-2 ls-flex-grow-0" style="max-width: 24px;">
          <div v-if="loadingData" class="loader-container">
            <div class="loader">
              <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>
              </svg>
            </div>
          </div>
          <img v-else src="../assets/logo-meufinanceiro.svg" height="24" width="24" class="app-icon-radius"/>
        </div> -->
        <span class="title ls-flex-grow-1 ellipsis">
          {{currentPage.title}}
        </span>
        <div class="ls-align-items-center ls-flex-grow-0 ml-5 ls-d-flex" style="height: 100%;">
          <img src="@/assets/menu.svg" height="24" width="24" />
        </div>
        <!-- </div> -->
      </div>
      <TransitionExpand>
        <div v-if="expanded">
          <router-link v-for="link in links"
            :key="link.id"
            tag="a"
            :to="link.route"
            @click.native="setCurrentPage(link)"
            class="ls-row ls-no-gutters ls-flex-nowrap ellipsis p-3"
            style="text-decoration: none;">
            <div class="ls-col ls-align-self-center mr-2 ls-flex-grow-0" style="max-width: 24px;">
              <img src="../assets/bill.svg" height="24" width="24" class="app-icon-radius"/>
            </div>
            <span
              class="align-center title ellipsis"
              :class="{'link--text': link.id == currentPage.id, 'lead--text': link.id != currentPage.id}">
              {{link.title}}
            </span>
          </router-link>
        </div>
      </TransitionExpand>
    </div>
    <transition name="fade">
      <div v-if="expanded" @click="expanded = !expanded" class="overlay"></div>
    </transition>
  </div>
</template>

<script>
import TransitionExpand from './TransitionExpand'
// import PayablesGroupLink from './PayablesGroupLink'

const OVERVIEW_PAGE = {
  id: 'overview',
  title: 'Visão geral',
  icon: 'default',
  route: {
    name: 'overview',
  }
}
export default {
  name: 'AppBar',
  components: {
    TransitionExpand,
    // PayablesGroupLink
  },
  data() {
    return {
      expanded: false,
      currentPage: OVERVIEW_PAGE,
    }
  },
  watch: {
    $route(to) {
      this.reactToRouteChanges(to.name, to.params)
    }
  },
  created() {
    this.reactToRouteChanges(this.$route.name, this.$route.params)
  },
  computed: {

    payablesGroups() {
      return this.$store.getters['payables/getPayablesGroups']
    },

    links() {
      let links = this.payablesGroups.map((group)=> {
        let link = {
          id: null,
          title: null,
          icon: null,
          route: {
            name: null,
            params: {}
          }
        }

        link.id = group.id
        link.title = group.title
        link.icon= group.icon
        link.route.name = 'payables.group'
        link.route.params.groupId = group.id

        return link
      })

      links.push(OVERVIEW_PAGE)

      return links.sort((x,y) => {
        return x.id == 'overview' ? -1 : y == 'overview' ? 1 : 0
      })
    }
  },

  methods: {
    reactToRouteChanges(routeName, params) {
      if(routeName == 'overview') {
        this.currentPage = OVERVIEW_PAGE
      }

      if(routeName == 'payables.group') {
        this.currentPage = this.links.find(link => link.id == params.groupId)
      }
    },

    setCurrentPage(page) {
      this.currentPage = page
      this.expanded = !this.expanded
    },
  }
}
</script>

<style scoped>
.app-bar-container {
  /* position: relative; */
  border-radius: 0px 0px 12px 12px;
}

.app-bar {
  position: relative;
  background-color: white;
  border-bottom: 1px solid;
  border-radius: 0px 0px 12px 12px;
  z-index: 1234;
}

.bar-title {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none !important;
  color: #232B34;
}

.overlay {
  position: fixed;
  top: 0;
  z-index: 2;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.group-chevron {
  transition: transform 0.2s, opacity 0.2s;
}

.group-chevron.active {
  transform: rotateZ(180deg);
}

.title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3px;
  text-decoration: none !important;
}
</style>