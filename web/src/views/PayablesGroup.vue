<template>
  <div class="ls-container p-3 grey-10" style="min-height: 100%; overflow: auto !important;">
    <div v-if="criticalPayablesByGroup.length" class="mb-4">
      <div class="label danger--text mb-2">
        {{criticalPayablesByGroup.length}} cobranças precisam de atenção
      </div>
      <PayableDetailCard
        class="mb-2"
        v-for="payable in criticalPayablesByGroup"
        :key="payable.id"
        :payable="payable"/>
    </div>
    <NoCriticalPayablesCard v-else class="mb-4"/>
    <div v-if="payablesByGroup.length" class="label lead-light--text mb-3">
      Demais cobranças
    </div>
    <PayableDetailCard
      class="mb-2"
      v-for="payable in payablesByGroup"
      :key="payable.id"
      :payable="payable"/>
  </div>
</template>

<script>
import NoCriticalPayablesCard from '../components/NoCriticalPayablesCard'
import PayableDetailCard from '../components/PayableDetailCard'

export default {
  name: 'PayablesGroup',
  components: {
    NoCriticalPayablesCard,
    PayableDetailCard,
  },
  props: {
    groupId: {
      type: String,
      required: true
    }
  },
  computed: {
    payablesByGroup() {
      console.log(this.$store.getters['payables/getPayablesByGroup'](this.groupId))
      return this.$store.getters['payables/getPayablesByGroup'](this.groupId)
    },

    criticalPayablesByGroup() {
      console.log(this.$store.getters['payables/getCriticalPayablesByGroup'](this.groupId))
      return this.$store.getters['payables/getCriticalPayablesByGroup'](this.groupId)
    }
  },
}
</script>

<style scoped>
.label {
  font-size: 16px;
  font-weight: 600;
}
</style>
