<template>
  <div class="ls-row ls-no-gutters p-3">
    <div class="ls-col ls-align-self-center mr-2" style="max-width: 24px;">
      <img src="../assets/logo-meufinanceiro.svg" height="24" width="24" class="app-icon-radius"/>
    </div>
    <div class="ls-col ls-align-self-center ellipsis">
      <span class="align-center title">Very very very very very very very long title</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayablesGroupLink'

}
</script>

<style scoped>
.app-icon-radius {
  border-radius: 22.5%;
}

.title {
  font-size: 16px;
  font-weight: 600;
}
</style>