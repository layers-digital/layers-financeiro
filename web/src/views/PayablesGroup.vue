<template>
  <div class="ls-container p-3 grey-10" style="min-height: 100%; overflow: auto !important;">
    <div class="mb-4">
      {{groupId}}
      <div class="attention-label danger--text mb-2">
        {{payablesGroup}}
        <!-- {{groupCriticalPayables.length}} cobranças precisam de atenção -->
      </div>
      <!-- <div class="ls-row ls-no-gutters mb-2"
        v-for="card in dangerCards"
        :key="card.id"> -->
      <!-- <AttentionCard
        class="mb-2"
        v-for="payable in criticalPayables"
        :key="payable.id"
        :payable="payable"/> -->
      <!-- </div> -->
    </div>
    <!-- <NoCriticalPayablesCard v-else class="mb-4"/> -->
    <!-- <div> -->
    <!-- <PayablesCard
      class="mb-2"
      v-for="payablesGroup in payablesGroups"
      :key="payablesGroup.id"
      :payablesGroup="payablesGroup"/> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import NoCriticalPayablesCard from '../components/NoCriticalPayablesCard'

export default {
  name: 'PayablesGroup',
  props: {
    groupId: {
      type: String,
      required: true
    }
  },
  computed: {
    // ...mapGetters('payables',['getPayablesGroup'])
    // groupCriticalPayables() {

    //   return this.$store.getters['payables/getCriticalPayables']
    // },

    payablesGroup() {
      // console.log(this.$store.getters['payables/getPayablesGroup'])
      return this.$store.getters['payables/getPayablesGroup'](this.groupId)
    },

    // loading() {
    //   return this.$store.state.payables.loading
    // }
  },
  // methods: {
  //   ...mapGetters(['payables', 'getPayablesGroup'])
  // }

}
</script>

<style scoped>
</style>
