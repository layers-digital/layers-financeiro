<template>
<div class="ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center">
  <div class="ls-col ls-align-self-center mr-3" style="max-width: 32px;">
    <img src="../assets/attention-icon.svg" height="32" width="32"/>
  </div>
  <div class="ls-col">
    <div>
      Mensalidade escolar 2020
    </div>
    <div class="relative-date">
      Venceu ontem
    </div>
  </div>
  <div class="ls-col" style="max-width: 66px;">
    <PayablesCount />
  </div>
</div>
</template>

<script>
import PayablesCount from '../components/PayablesCount'

export default {
  name: 'AttentionCard',
  components: {
    PayablesCount,
  }
}
</script>

<style scoped>
.card {
  border: 1px solid;
  border-radius: 12px;
  background-color: white;
}

.relative-date {
  font-weight: 700;
}
</style>