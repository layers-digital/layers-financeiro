<template>
  <div class="app-bar-container">
    <div class="app-bar grey-30-outline">
      <div class="ls-row ls-no-gutters pr-3" style="height: 56px; z-index: 5;">
        <PayablesGroupLink
            @select="setCurrentPage($event)"
            class="ls-flex-grow-1"
            :link="currentPage"/>
        <div class="ls-col ls-align-self-center ls-flex-grow-0">
        <img src="../assets/arrow-down.svg"
          class="group-chevron"
          :class="{'active': expanded}"
          height="24" width="24"/>
        </div>
      </div>
      <TransitionExpand>
        <div v-if="expanded">
          <PayablesGroupLink
            @select="setCurrentPage($event)"
            v-for="link in links"
            :key="link.id"
            :link="link"/>
        </div>
      </TransitionExpand>
    </div>
    <transition name="fade">
      <div v-if="expanded" class="overlay"></div>
    </transition>
  </div>
</template>

<script>
import TransitionExpand from './TransitionExpand'
import PayablesGroupLink from './PayablesGroupLink'

export default {
  name: 'AppBar',
  components: {
    TransitionExpand,
    PayablesGroupLink
  },
  data() {
    return {
      expanded: false,
      currentPage: {
        id: 'overview',
        title: 'Visão geral',
        icon: 'default',
        route: {
          name: 'overview',
        }
      },
    }
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

      let overviewLink = {
        id: 'overview',
        title: 'Visão geral',
        icon: 'default',
        route: {
          name: 'overview',
        }
      }

      links.push(overviewLink)

      return links.filter(link => {
        return link.id != this.currentPage.id
      }).sort((x,y) => {
        return x.id == 'overview' ? -1 : y == 'overview' ? 1 : 0
      })
    }
  },

  methods: {
    setCurrentPage(page) {
      this.currentPage = page
      this.expanded = !this.expanded
    }
  }
}
</script>

<style scoped>
.app-bar-container {
  position: relative;
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
  color: #232B34 !important;
}

.app-icon-radius {
  border-radius: 22.5%;
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
</style>