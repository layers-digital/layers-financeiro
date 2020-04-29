<template>
  <div class="ls-container p-3 grey-10" style="min-height: 100%;">
    <div class="mb-4">
    <div class="attention-label danger--text mb-2">
      X cobranças precisam de atenção
    </div>
    <!-- <div class="ls-row ls-no-gutters mb-2"
      v-for="card in dangerCards"
      :key="card.id"> -->
      {{loading}}
      {{storeData}}
      <AttentionCard
        class="mb-2"
        v-for="card in dangerCards"
        :key="card.id"/>
    <!-- </div> -->
    </div>
    <div>
      <PayablesCard
        class="mb-2"
        v-for="card in payablesCards"
        :key="card.id"/>
    </div>
  </div>
</template>

<script>
import AttentionCard from '../components/AttentionCard.vue'
import PayablesCard from '../components/PayablesCard.vue'

export default {
  name: 'Overview',
  components: {
    AttentionCard,
    PayablesCard
  },
  data() {
    return {
      dangerCards: [
        {id: '1234'},
        {id: '1235'}
      ],
      payablesCards: [
        {id: '1236'},
        {id: '1237'}
      ],
    }
  },
  async created() {
    await this.$store.dispatch('payables/fetchData')
  },
  computed: {
    storeData () {
      return this.$store.state.payables.data
    },

    loading () {
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
