<template>
<div class="ls-row ls-no-gutters app-bar p-3 grey-30-outline">
  <div class="ls-col" style="max-width: 34px;">
    <img src="../assets/app-logo.svg" height="24" width="24"/>
  </div>
  <div class="ls-col">
    Title
  </div>
</div>
</template>

<script>
export default {
  name: 'AppBar',

}
</script>

<style scoped>
.app-bar {
  background-color: white;
  border-bottom: 1px solid;
  border-radius: 0px 0px 12px 12px;
}

</style>