<template>
  <div class="ls-container p-3 grey-10" style="min-height: 100%; overflow: auto !important">
    <!-- Critical payables skeleton -->
    <select name="filter-per-year" v-model="selectedYear" class="filter">
      <option :value="year" v-for="(year, index) in allYears" :key="index" class="filter-option">
        {{ year }}
      </option>
    </select>
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
        v-for="payable in filterCriticalPayablesPerYear()"
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
    <div v-if="!loading && payablesGroups.length == 0" class="ls-col ls-no-gutters ls-justify-content-center">
      <div class="no-payables-title mb-2 lead--text text-center">Não há informações disponíveis :(</div>
      <div class="lead-light--text text-center">
        Entre em contato com sua instituição de
        <br />
        ensino ou atualize a página
      </div>
      <div class="no-payables-image mt-4">
        <img src="@/assets/empty-ilustra.svg" width="268" height="208" />
      </div>
    </div>
  </div>
</template>

<script>
import AttentionCard from '../components/AttentionCard.vue';
import AttentionCardSkeleton from '../components/AttentionCardSkeleton.vue';
import PayablesCard from '../components/PayablesCard.vue';
import PayablesCardSkeleton from '../components/PayablesCardSkeleton.vue';
import NoCriticalPayablesCard from '../components/NoCriticalPayablesCard';

export default {
  name: 'Overview',
  components: {
    AttentionCard,
    AttentionCardSkeleton,
    PayablesCard,
    PayablesCardSkeleton,
    NoCriticalPayablesCard,
  },
  data() {
    return {
      selectedYear: '2023',
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
    allYears() {
      const allYearsWithDuplicate = this.criticalPayables.map((payable) => this.getYear(payable.dueAt));
      const allYears = [...new Set(allYearsWithDuplicate)];
      return allYears;
    },
  },
  methods: {
    goToDetails(payable) {
      this.$router.push({ name: 'payable.detail', params: { payableId: payable.id, payable: payable } });
    },
    getYear(date) {
      return date.split('-')[0];
    },
    filterCriticalPayablesPerYear() {
      return this.criticalPayables.filter((payable) => this.getYear(payable.dueAt) === this.selectedYear);
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

.no-payables-title {
  font-size: 16px;
  font-weight: 700;
  margin-top: 72px;
}

.no-payables-image {
  background-image: url('../assets/shape.svg');
  width: 100%;
  background-repeat: no-repeat;
  text-align: center;
  background-position: center;
  margin-bottom: -16px;
}

.filter {
  display: block;
  width: 100%;
  height: 40px;
  margin: 16px 0;
  padding: 0 16px;
  border: none;
  background-color: #ffff;
  border: 1px solid #d7dee3;
  border-radius: 4px;
}
.filter:focus {
  outline: none;
}

.filter-option {
  font-size: 14px;
  font-weight: 600;
}
</style>
