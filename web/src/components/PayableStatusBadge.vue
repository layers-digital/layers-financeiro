<template>
  <span class="label" :class="`${colors}-light ${colors}--text`">
    {{statusLabel}}
  </span>
</template>

<script>
export default {
  name: 'PayableStatusBadge',
  props: {
    status: {
      type: String,
      required: true,
    }
  },
  computed: {
    statusLabel() {
      return {
        'late': 'Vencida',
        'pending': 'Pendente',
        'paid': 'Pago',
        'open': 'Futura',
      } [this.status] || this.status
    },

    colors() {
      return {
        'late': 'danger',
        'pending': 'warning',
        'paid': 'success',
        'open': 'grey-70',
      } [this.status] || this.status
    }
  }
}
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