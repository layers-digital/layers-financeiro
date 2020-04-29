<template>
<div class="app-bar-container">
  <div class="app-bar grey-30-outline">
    <div @click="expanded = !expanded" class="ls-row ls-no-gutters p-3" style="height: 56px; z-index: 5;">
      <div class="ls-col ls-align-self-center mr-2 ls-flex-grow-0">
        <img src="../assets/logo-meufinanceiro.svg" height="24" width="24" class="app-icon-radius"/>
      </div>
      <div class="ls-col ls-align-self-center ls-flex-grow-1">
        <span class="align-center bar-title">Title</span>
      </div>
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
          v-for="group in groups"
          :key="group.id"/>
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
      groups: [
        {id: '1234'},
        {id: '1235'}
      ],
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