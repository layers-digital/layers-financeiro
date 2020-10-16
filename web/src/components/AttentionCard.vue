<template>
  <div class="ls-row ls-no-gutters card p-3 ls-align-items-center ls-flex-nowrap">
    <img v-if="payable.status == 'late'" src="../assets/attention-icon.svg" height="32" width="32" class="mr-3" />
    <img v-else src="../assets/attention-yellow-icon.svg" height="32" width="32" class="mr-3" />
    <div class="ls-col mr-2">
      <div class="ellipsis-1">
        {{ payable.title }}
      </div>
      <span class="ls-row ls-no-gutters relative-date">{{ readableRelativeDueDate }} • {{ readableDueDate }}</span>
    </div>
    <PayablesCount :friendlyInstallmentsCount="payable.friendlyInstallmentsCount" />
  </div>
</template>

<script>
import PayablesCount from '../components/PayablesCount';
import relativeDueDate from '@/helpers/relativeDueDate';
import dayjs from 'dayjs';

export default {
  name: 'AttentionCard',
  components: {
    PayablesCount,
  },
  props: {
    payable: {
      type: Object,
      required: true,
    },
  },
  computed: {
    readableRelativeDueDate() {
      return relativeDueDate(this.payable.dueAt);
    },

    readableDueDate() {
      return dayjs(this.payable.dueAt).format('DD/MM/YYYY');
    },
  },
};
</script>

<style scoped>
.relative-date {
  font-weight: 700;
}
</style>
