<template>
<div class="ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center">
  <div class="ls-col ls-align-self-center mr-3" style="max-width: 87px; max-height: 96px;">
    <img src="../assets/success-ilustra.svg" height="auto" width="auto" style="margin-bottom: -21px;"/>
  </div>
  <div class="ls-col">
    <span class="caption grey-70--text">
      Você não tem cobranças pendentes :)
    </span>
  </div>
</div>

</template>

<script>
export default {
  name: 'NoCriticalPayablesCard',
}
</script>

<style scoped>
.card {
  border: 1px solid;
  border-radius: 12px;
  background-color: white;
}

.caption {
  font-size: 16px;
  font-weight: 600;
}
</style>