<template>
  <div class="ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center">
    <div class="circle-placeholder mr-3"></div>
    <div class="ls-col ellipsis mr-2">
      <div class="placeholder mb-2 loading-placeholder"></div>
      <div class="placeholder loading-placeholder"></div>
    </div>
    <div class="placeholder loading-placeholder" style="width: 46px"></div>
  </div>
</template>

<script>
export default {
  name: 'AttentionCardSkeleton',
};
</script>

<style scoped>
.circle-placeholder {
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: var(--grey-50);
}
</style>
