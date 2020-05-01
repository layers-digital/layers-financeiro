<template>
<div class="p-2 ls-ra-1" :class="`${colors}-light`">
  <span class="label" :class="`${colors}--text`">
    {{statusLabel}}
  </span>
</div>
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
}

</style>