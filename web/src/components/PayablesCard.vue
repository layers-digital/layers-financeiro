<template>
  <div class="ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center">
    <div class="ls-col">
      <div class="card-title mb-1 ellipsis-2">
        {{ payablesGroup.title }}
      </div>
      <span class="description grey-70--text ellipsis-1 mb-2">
        {{ payablesGroup.description }}
      </span>
      <PayablesVisualCount v-if="payablesGroup.installments > 1" :payablesGroup="payablesGroup" />
    </div>
    <div class="ls-col" style="max-width: 24px">
      <img src="../assets/arrow-right.svg" height="24" width="24" />
    </div>
  </div>
</template>

<script>
import PayablesVisualCount from '../components/PayablesVisualCount';

export default {
  name: 'PayablesCard',
  components: {
    PayablesVisualCount,
  },
  props: {
    payablesGroup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-title {
  font-size: 16px;
  font-weight: 600;
}

.relative-date {
  font-weight: 700;
}

.description {
  font-weight: 600px;
}
</style>
