<template>
  <div class="simple-bar-container ls-row ls-no-gutters ls-align-items-center p-2">
    <div class="ls-col ls-flex-grow-0 mr-1" style="cursor: pointer" @click="goBack">
      <img src="../assets/arrow-left.svg" height="32" width="32" style="margin-bottom: -4px" />
    </div>
    <span class="title">Detalhe da cobrança</span>
  </div>
</template>

<script>
export default {
  name: 'SimpleAppBar',
  methods: {
    goBack() {
      this.$router.push({ name: 'payables.group', params: { groupId: this.$route.params.payable.groupId } });
    },
  },
};
</script>

<style scoped>
.simple-bar-container {
  height: 60px;
  border-bottom: 1px solid var(--grey-30);
  background-color: white;
}

.title {
  font-size: 16px;
  font-weight: 600;
}
</style>
