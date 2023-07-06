<template>
  <div class="ls-container p-3 grey-10" style="min-height: 100%; overflow: auto !important">
    <!-- Critical payables skeleton -->
    <div v-if="loading && !hasState" class="mb-4">
      <div class="placeholder loading-placeholder mb-2"></div>
      <AttentionCardSkeleton />
    </div>
    <div v-else class="mb-4">
      <div v-if="criticalPayables.length != 0" class="attention-label danger--text mb-2">
        {{ criticalPayables.length }} cobranças precisam de atenção
      </div>
      <AttentionCard
        class="mb-2 cursor-pointer"
        v-for="payable in criticalPayables"
        :key="payable.id"
        :payable="payable"
        @click.native="goToDetails(payable)"
      />
    </div>
    <NoCriticalPayablesCard
      v-if="hasState && payablesGroups.length != 0 && criticalPayables.length == 0"
      class="mb-4"
    />
    <PayablesCardSkeleton v-if="loading && !hasState" />
    <router-link
      v-else
      v-for="payablesGroup in payablesGroups"
      :key="payablesGroup.id"
      slot="reference"
      tag="a"
      class="remove-style"
      :to="{ name: 'payables.group', params: { groupId: payablesGroup.id } }"
    >
      <PayablesCard class="mb-2 cursor-pointer" :payablesGroup="payablesGroup" />
    </router-link>
    <div v-if="!loading && kindError" class="ls-col ls-no-gutters ls-justify-content-center">
      <ErrorPage :kind="kindError" />
    </div>
  </div>
</template>

<script>
import AttentionCard from '../components/AttentionCard.vue';
import AttentionCardSkeleton from '../components/AttentionCardSkeleton.vue';
import PayablesCard from '../components/PayablesCard.vue';
import PayablesCardSkeleton from '../components/PayablesCardSkeleton.vue';
import NoCriticalPayablesCard from '../components/NoCriticalPayablesCard';
import ErrorPage from './ErrorPage.vue';

export default {
  name: 'Overview',
  components: {
    AttentionCard,
    AttentionCardSkeleton,
    PayablesCard,
    PayablesCardSkeleton,
    NoCriticalPayablesCard,
    ErrorPage,
  },
  data() {
    return {
      //
    };
  },
  async created() {
    await this.$store.dispatch('payables/fetchData');
  },
  computed: {
    hasState() {
      return this.$store.getters['payables/hasState'];
    },

    criticalPayables() {
      return this.$store.getters['payables/getCriticalPayables'];
    },

    payablesGroups() {
      return this.$store.getters['payables/getPayablesGroups'];
    },

    loading() {
      return this.$store.state.payables.loading;
    },

    kindError() {
      const errors = this.$store.state.payables.typedError;
      if (this.payablesGroups.length == 0) {
        return 'no-data';
      }
      if (!errors) {
        return 'no-error';
      }
      return errors.kind;
    },
  },
  methods: {
    goToDetails(payable) {
      this.$router.push({ name: 'payable.detail', params: { payableId: payable.id, payable: payable } });
    },
  },
};
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
