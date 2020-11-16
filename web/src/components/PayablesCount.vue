<template>
  <span class="count-badge grey-70--text">
    {{ friendlyInstallmentsCount }}
  </span>
</template>

<script>
export default {
  name: 'PayablesCount',
  props: {
    friendlyInstallmentsCount: {
      type: String,
      default: '--',
    },
  },
};
</script>

<style scoped>
.count-badge {
  background-color: var(--grey-20);
  text-align: center;
  border-radius: 4px;
  padding-right: 8px;
  padding-left: 8px;
  font-size: 12px;
  font-weight: 700;
  height: 24px;
  line-height: 24px;
  display: inline-block;
}
</style>
