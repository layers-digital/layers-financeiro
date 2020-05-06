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
    <div class="ls-col" style="max-width: 66px;">
      <PayablesCount
        :friendlyInstallmentsCount="payable.friendlyInstallmentsCount"/>
    </div>
  </div>
  <div class="ls-row ls-no-gutters mb-3">
    <div class="description grey-70--text" id="description" v-html="compiledDescriptionMarkdown"></div>
  </div>
  <div class="ls-row ls-no-gutters">
    <div class="ls-col mr-2 amount" :class="amountColor">
      <span style="white-space:nowrap;">
        {{payable.amountTotal}}
      </span>
    </div>
    <div class="ls-col">
      <span style="white-space:nowrap;">
        Vencimento: {{formatedDueDate}}
      </span>
    </div>
  </div>
</div>
</template>

<script>
import PayableStatusBadge from './PayableStatusBadge'
import PayablesCount from './PayablesCount'
import relativeDueDate from '@/helpers/relativeDueDate'
import formatDate from '@/helpers/formatDate'
import Marked from 'marked'
import DOMPurify from 'dompurify'

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
    compiledDescriptionMarkdown() {
      return DOMPurify.sanitize(Marked(this.payable.description), {FORBID_TAGS: ['style', 'script', 'h1', 'h2']})
    },

    readableRelativeDueDate() {
      return relativeDueDate(this.payable.dueAt)
    },

    borderColor() {
      if(!this.payable.isCritical) {
        return 'grey-30-outline'
      }

      return {
        'late': 'danger-outline',
        'pending': 'warning-outline',
      } [this.payable.status] || 'grey-30-outline'
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
.card {
  border: 1px solid;
  border-radius: 12px;
  background-color: white;
}

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