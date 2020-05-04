<template>
<div class="ls-row ls-no-gutters card grey-30-outline p-3 ls-align-items-center">
  <img v-if="payable.status == 'late'" src="../assets/attention-icon.svg" height="32" width="32" class="mr-3"/>
  <img v-else src="../assets/attention-yellow-icon.svg" height="32" width="32" class="mr-3"/>
  <div class="ls-col ellipsis mr-2">
    <div>
      {{payable.title}}
    </div>
    <div class="relative-date">
      {{readableRelativeDueDate}}
    </div>
  </div>
  <PayablesCount
    :friendlyInstallmentsCount="payable.friendlyInstallmentsCount"/>
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