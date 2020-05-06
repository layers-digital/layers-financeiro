<template>
<div class="ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center">
  <div class="ls-col">
    <div class="card-title mb-2">
      {{payablesGroup.title}}
    </div>
    <div>
      <PayablesVisualCount
        :payablesGroup="payablesGroup"/>
    </div>
  </div>
  <div class="ls-col" style="max-width: 24px;">
    <img src="../assets/arrow-right.svg" height="24" width="24"/>
  </div>
</div>
</template>

<script>
import PayablesVisualCount from '../components/PayablesVisualCount'

export default {
  name: 'PayablesCard',
  components: {
    PayablesVisualCount,
  },
  props: {
    payablesGroup: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card-title {
  font-size: 16px;
  font-weight: 600;
}

.relative-date {
  font-weight: 700;
}
</style>