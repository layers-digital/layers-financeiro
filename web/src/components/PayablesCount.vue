<template>
<div class="grey-20 count-badge p-2">
  <span class="grey-70--text">
    {{friendlyInstallmentsCount}}
  </span>
</div>
</template>

<script>
export default {
  name: 'PayablesCount',
  props: {
    friendlyInstallmentsCount: {
      type: String,
      default: '--'
    }
  }
}
</script>

<style scoped>
.count-badge {
  text-align: center;
  border-radius: 4px;
  width: 65px;
  font-size: 12px;
  font-weight: 700;
}
</style>