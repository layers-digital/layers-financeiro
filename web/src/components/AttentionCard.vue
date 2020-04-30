<template>
<div class="ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center">
  <div class="ls-col ls-align-self-center mr-3" style="max-width: 32px;">
    <img v-if="payable.status == 'late'" src="../assets/attention-icon.svg" height="32" width="32"/>
    <img v-else src="../assets/attention-yellow-icon.svg" height="32" width="32"/>
  </div>
  <div class="ls-col ellipsis mr-2">
    <span>
      {{payable.title}}
    </span>
    <div class="relative-date">
      {{readableRelativeDueDate}}
    </div>
  </div>
  <div class="ls-col" style="max-width: 66px;">
    <PayablesCount
      :friendlyInstallmentsCount="payable.friendlyInstallmentsCount"/>
  </div>
</div>
</template>

<script>
import PayablesCount from '../components/PayablesCount'
import relativeDueDate from '@/helpers/relativeDueDate'

export default {
  name: 'AttentionCard',
  components: {
    PayablesCount,
  },
  props: {
    payable: {
      type: Object,
      required: true,
    }
  },
  computed: {
    readableRelativeDueDate() {
      return relativeDueDate(this.payable.dueAt)
    },
  }
}
</script>

<style scoped>
.card {
  border: 1px solid;
  border-radius: 12px;
  background-color: white;
}

.relative-date {
  font-weight: 700;
}
</style>