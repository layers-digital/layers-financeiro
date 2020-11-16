<template>
  <div>
    <div class="grey-70--text mb-2" style="font-weight: 700">
      {{ payablesGroup.friendlyInstallmentsTotal }}
    </div>
    <div class="ls-row ls-no-gutters">
      <CircleRepresentation
        v-for="payable in payablesGroup.payables"
        :key="payable.id"
        :payable="payable"
        class="mr-1"
      />
    </div>
  </div>
</template>

<script>
import CircleRepresentation from './CircleRepresentation';

export default {
  name: 'PayablesVisualCount',
  components: {
    CircleRepresentation,
  },
  props: {
    payablesGroup: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
