<template>
<div class="ls-col ls-no-gutters card p-3 ls-align-items-center"
  :class="borderColor">
  <div class="ls-row ls-no-gutters mb-3 ls-align-items-center">
    <div class="ls-col ls-flex-grow-0 mr-2">
      <PayableStatusBadge
        :status="payable.status"/>
    </div>
    <div class="ls-col mr-2 ellipsis">
      <span class="due-date grey-70--text">
        {{readableRelativeDueDate}}
      </span>
    </div>
    <PayablesCount
      :friendlyInstallmentsCount="payable.friendlyInstallmentsCount"/>
  </div>
  <div class="ls-row ls-no-gutters mb-3">
    <span class="description grey-70--text ellipsis-2">
      {{payable.description}}
    </span>
  </div>
  <div class="ls-row ls-no-gutters">
    <div class="ls-col mr-2 amount" :class="amountColor">
      <span style="white-space:nowrap;">
        {{payable.amountTotal}}
      </span>
    </div>
    <span style="white-space:nowrap;">
      Vencimento: {{formatedDueDate}}
    </span>
  </div>
</div>
</template>

<script>
import PayableStatusBadge from './PayableStatusBadge'
import PayablesCount from './PayablesCount'
import relativeDueDate from '@/helpers/relativeDueDate'
import formatDate from '@/helpers/formatDate'

export default {
  name: 'PayableDetailCard',
  components: {
    PayableStatusBadge,
    PayablesCount,
  },
  props: {
    payable: {
      type: Object,
      required: true
    }
  },
  computed: {
    readableRelativeDueDate() {
      return relativeDueDate(this.payable.dueAt)
    },

    borderColor() {
      if(!this.payable.isCritical) {
        return 'neutral-state'
      }

      return {
        'late': 'danger-state',
        'pending': 'warning-state',
      } [this.payable.status] || 'neutral-state'
    },

    amountColor() {
      return {
        'late': 'danger--text',
        'pending': 'warning--text',
        'paid': 'success--text',
        'open': 'grey-80--text',
      } [this.payable.status] || 'grey-80--text'
    },

    formatedDueDate() {
      return formatDate(this.payable.dueAt)
    }
  }

}
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