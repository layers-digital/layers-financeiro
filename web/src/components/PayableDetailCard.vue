<template>
  <div class="ls-col ls-no-gutters card p-3 ls-align-items-center" :class="borderColor">
    <div class="ls-row ls-no-gutters mb-3 ls-align-items-center">
      <div class="ls-col ls-flex-grow-0 mr-2">
        <PayableStatusBadge :status="payable.status" />
      </div>
      <div v-if="payable.status != 'paid'" class="ls-col mr-2 ellipsis">
        <span class="due-date grey-70--text">
          {{ readableRelativeDueDate }}
        </span>
      </div>
      <div v-else class="ls-flex-grow-1"></div>
      <PayablesCount :friendlyInstallmentsCount="payable.friendlyInstallmentsCount" />
    </div>
    <div class="ls-row ls-no-gutters mb-3">
      <span class="description grey-70--text ellipsis-2">
        {{ payable.textDescription }}
      </span>
    </div>
    <div class="ls-row ls-no-gutters">
      <div class="ls-col mr-2 amount" :class="amountColor" v-if="payable.amountPaid">
        <span v-if="payable.status == 'paid'" style="white-space: nowrap">
          {{ amountPaid }}
        </span>
        <span v-else-if="payable.amountTotal" style="white-space: nowrap">
          {{ amountTotal }}
        </span>
      </div>
      <span style="white-space: nowrap">Vencimento: {{ formatedDueDate }}</span>
    </div>
  </div>
</template>

<script>
import PayableStatusBadge from './PayableStatusBadge';
import PayablesCount from './PayablesCount';
import relativeDueDate from '@/helpers/relativeDueDate';
import dayjs from 'dayjs';
import currencyFormatter from '@/helpers/currencyFormatter';

export default {
  name: 'PayableDetailCard',
  components: {
    PayableStatusBadge,
    PayablesCount,
  },
  props: {
    payable: {
      type: Object,
      required: true,
    },
  },

  computed: {
    amountPaid() {
      return currencyFormatter(this.payable.centsPaid, this.payable.currency, navigator.language);
    },
    amountTotal() {
      return currencyFormatter(this.payable.centsTotal, this.payable.currency, navigator.language);
    },

    readableRelativeDueDate() {
      return relativeDueDate(this.payable.dueAt);
    },

    borderColor() {
      if (!this.payable.isCritical) {
        return 'neutral-state';
      }

      return (
        {
          late: 'danger-state',
          pending: 'warning-state',
        }[this.payable.status] || 'neutral-state'
      );
    },

    amountColor() {
      return (
        {
          paid: 'success--text',
          partially_paid: 'link--text',
          pending: 'warning--text',
          open: 'grey-60--text',
          canceled: 'grey-80--text',
          late: 'danger--text',
        }[this.payable.status] || 'grey-80--text'
      );
    },

    formatedDueDate() {
      return dayjs(this.payable.dueAt).format('DD/MM/YYYY');
    },
  },
};
</script>

<style scoped>
.due-date {
  font-size: 12px;
  font-weight: 600;
}

.description {
  font-weight: 600px;
}

.amount {
  font-weight: 700;
  font-size: 16px;
}
</style>
