<template>
  <div class="ls-container p-3 grey-10" style="min-height: 100%; overflow: auto !important;">
    <div class="mb-4">
      <div v-if="loading && !hasState" class="placeholder loading-placeholder mb-2">
      </div>
      <div v-else class="attention-label danger--text mb-2">
        {{criticalPayables.length}} cobranças precisam de atenção
      </div>
      <AttentionCardSkeleton
        v-if="loading && !hasState"/>
      <AttentionCard
        v-else
        class="mb-2"
        v-for="payable in criticalPayables"
        :key="payable.id"
        :payable="payable"
        @click.native="goToDetails(payable)"/>
    </div>
    <NoCriticalPayablesCard v-if="hasState && criticalPayables.length == 0" class="mb-4"/>
    <PayablesCardSkeleton
      v-if="loading && !hasState"/>
    <router-link
      v-else
      v-for="payablesGroup in payablesGroups"
      :key="payablesGroup.id"
      slot="reference"
      tag="a"
      class="remove-style"
      :to="{name: 'payables.group', params:{groupId: payablesGroup.id}}">
      <PayablesCard
        class="mb-2"
        :payablesGroup="payablesGroup"/>
    </router-link>
  </div>
</template>

<script>
import AttentionCard from '../components/AttentionCard.vue'
import AttentionCardSkeleton from '../components/AttentionCardSkeleton.vue'
import PayablesCard from '../components/PayablesCard.vue'
import PayablesCardSkeleton from '../components/PayablesCardSkeleton.vue'
import NoCriticalPayablesCard from '../components/NoCriticalPayablesCard'

export default {
  name: 'Overview',
  components: {
    AttentionCard,
    AttentionCardSkeleton,
    PayablesCard,
    PayablesCardSkeleton,
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
    hasState() {
      return this.$store.getters['payables/hasState']
    },

    criticalPayables() {
      return this.$store.getters['payables/getCriticalPayables']
    },

    payablesGroups() {
      return this.$store.getters['payables/getPayablesGroups']
    },

    loading() {
      return this.$store.state.payables.loading
    }
  },
  methods: {
    goToDetails(payable) {
      this.$router.push({name: 'payable.detail', params: {payableId: payable.id, payable: payable}})
    },
  }
}
</script>

<style scoped>
.attention-label {
  font-size: 16px;
  font-weight: 600;
}

.remove-style {
  text-decoration: none;
  color: inherit;
}
</style>
