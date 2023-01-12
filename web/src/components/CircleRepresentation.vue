<template>
  <img :src="circleColor" height="16" width="16" />
</template>

<script>
export default {
  name: 'CircleRepresentation',
  props: {
    payable: {
      type: Object,
      required: true,
    },
  },
  computed: {
    circleColor() {
      if (this.payable.isCritical && this.payable.status == 'late') {
        return require('../assets/danger-circle.svg');
      }

      if (this.payable.isCritical && this.payable.status != 'late') {
        return require('../assets/warning-circle.svg');
      }

      if (this.payable.status == 'paid') {
        return require('../assets/success-circle.svg');
      }

      return require('../assets/grey-50-circle.svg');
    },
  },
};
</script>

<style scoped></style>
