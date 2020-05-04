<template>
  <!-- <div class="ls-row ls-no-gutters"> -->
    <!-- <div class="ls-col ls-align-self-center mr-2 ls-flex-grow-0" style="max-width: 24px;">
      <img v-if="link.icon == 'default' || !link.icon" src="../assets/logo-meufinanceiro.svg" height="24" width="24" class="app-icon-radius"/>
      <img v-else :src="link.icon" height="24" width="24" class="app-icon-radius"/>
    </div> -->
  <div @click="$emit('select', link)" class="ellipsis">
    <router-link
      slot="reference"
      tag="a"
      class="align-center title"
      :class="{'link--text': selected, 'lead--text': !selected}"
      :to="link.route">
      {{link.title}}
    </router-link>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'PayablesGroupLink',
  props: {
    link: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped>
.app-icon-radius {
  border-radius: 22.5%;
}

.title {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none !important;
}
</style>