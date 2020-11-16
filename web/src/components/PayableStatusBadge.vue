<template>
  <span class="label" :class="`${colors}-light ${colors}--text`">
    {{ statusLabel }}
  </span>
</template>

<script>
export default {
  name: 'PayableStatusBadge',
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  computed: {
    statusLabel() {
      return (
        {
          paid: 'Pago',
          partially_paid: 'Parcialmente pago',
          pending: 'Pendente',
          open: 'Futura',
          canceled: 'Cancelado',
          late: 'Vencida',
        }[this.status] || this.status
      );
    },

    colors() {
      return (
        {
          paid: 'success',
          partially_paid: 'link',
          pending: 'warning',
          open: 'grey-60',
          canceled: 'grey-80',
          late: 'danger',
        }[this.status] || this.status
      );
    },
  },
};
</script>

<style scoped>
.label {
  font-weight: 700;
  font-size: 12px;
  border-radius: 4px;
  padding-right: 8px;
  padding-left: 8px;
  height: 24px;
  line-height: 24px;
  display: inline-block;
}
</style>
