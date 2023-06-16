<template>
  <div class="ls-container p-3 grey-10" style="min-height: 100%; overflow: auto !important">
    <button @click="expanded = !expanded" class="filter-button">
      <span>{{ selectedYear }}</span>
      <img src="../assets/arrow-down.svg" alt="arrow-down" />
    </button>
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
    <TransitionExpand>
      <div v-if="expanded" class="select-list">
        <h3 class="ml-3">Ano de vencimento</h3>
        <div v-for="(year, index) in allYears" :key="index" class="ls-row ls-no-gutters ls-flex-nowrap ellipsis">
          <div @click="setCurrentYear(year)" class="select-year">
            <span>{{ year }}</span>
            <img v-if="year === selectedYear" src="../assets/checked.svg" alt="checked" style="width: 20px" />
            <div v-else class="circle"></div>
          </div>
        </div>
      </div>
    </TransitionExpand>
    <transition name="fade">
      <div v-if="expanded" @click="expanded = !expanded" class="overlay"></div>
    </transition>
  </div>
</template>
<script>
import AttentionCard from '../components/AttentionCard.vue';
import AttentionCardSkeleton from '../components/AttentionCardSkeleton.vue';
import PayablesCard from '../components/PayablesCard.vue';
import PayablesCardSkeleton from '../components/PayablesCardSkeleton.vue';
import NoCriticalPayablesCard from '../components/NoCriticalPayablesCard';
import TransitionExpand from '../components/TransitionExpand.vue';

export default {
  name: 'Overview',
  components: {
    AttentionCard,
    AttentionCardSkeleton,
    PayablesCard,
    PayablesCardSkeleton,
    NoCriticalPayablesCard,
    TransitionExpand,
  },
  data() {
    return {
      selectedYear: '2023',
      expanded: false,
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
      const allYearsWithDuplicate = this.criticalPayables.map((payable) => this.separeYear(payable.dueAt));
      const allYears = [...new Set(allYearsWithDuplicate)];
      return allYears;
    },
  },
  methods: {
    goToDetails(payable) {
      this.$router.push({ name: 'payable.detail', params: { payableId: payable.id, payable: payable } });
    },
    separeYear(date) {
      return date.split('-')[0];
    },
    filterCriticalPayablesPerYear() {
      return this.criticalPayables.filter((payable) => this.separeYear(payable.dueAt) === this.selectedYear);
    },
    filterPayablesPerYear() {
      return this.payablesGroups.filter((payable) => this.separeYear(payable.dueAt) === this.selectedYear);
    },
    setCurrentYear(year) {
      this.selectedYear = year;
      this.expanded = !this.expanded;
    },
  },
};
</script>
<style scoped>
.select-list {
  border-radius: 10px 10px 0 0;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 10000;
  background-color: #fff;
  padding: 19px 16px;
}
.overlay {
  position: fixed;
  top: 0;
  z-index: 1000;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.filter-button {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
}
.select-year {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  width: 100%;
  padding: 8px 0px 8px 16px;
  margin: 8px 0px;
  margin: none;
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #c8d0d8;
  border-radius: 50%;
}

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
</style>
