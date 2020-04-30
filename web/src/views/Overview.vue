<template>
  <div class="ls-container p-3 grey-10" style="min-height: 100%; overflow: auto !important;">
    <div v-if="criticalPayables.length" class="mb-4">
      <div class="attention-label danger--text mb-2">
        {{criticalPayables.length}} cobranças precisam de atenção
      </div>
      <!-- <div class="ls-row ls-no-gutters mb-2"
        v-for="card in dangerCards"
        :key="card.id"> -->
      <AttentionCard
        class="mb-2"
        v-for="payable in criticalPayables"
        :key="payable.id"
        :payable="payable"/>
      <!-- </div> -->
    </div>
    <NoCriticalPayablesCard v-else class="mb-4"/>
    <!-- <div> -->
    <PayablesCard
      class="mb-2"
      v-for="payablesGroup in payablesGroups"
      :key="payablesGroup.id"
      :payablesGroup="payablesGroup"/>
    <!-- </div> -->
  </div>
</template>

<script>
import AttentionCard from '../components/AttentionCard.vue'
import PayablesCard from '../components/PayablesCard.vue'
import NoCriticalPayablesCard from '../components/NoCriticalPayablesCard'

export default {
  name: 'Overview',
  components: {
    AttentionCard,
    PayablesCard,
    NoCriticalPayablesCard
  },
  data() {
    return {
      //
    }
  },
  async created() {
    await this.$store.dispatch('payables/fetchData')
  },
  computed: {
    criticalPayables() {
      return this.$store.getters['payables/getCriticalPayables']
    },

    payablesGroups() {
      return this.$store.getters['payables/getPayablesGroups']
    },

    loading() {
      return this.$store.state.payables.loading
    }
  }
}
</script>

<style scoped>
.attention-label {
  font-size: 16px;
  font-weight: 600;
}
</style>
