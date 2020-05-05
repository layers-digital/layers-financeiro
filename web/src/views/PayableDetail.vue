<template>
<div class="ls-container p-3" style="min-height: 100%; overflow: auto !important; background-color: white;">
  <div class="ls-row ls-no-gutters mb-2">
    <PayableStatusBadge
      class="mr-2"
      :status="payable.status"/>
    <PayablesCount
      class="mr-2"
      :friendlyInstallmentsCount="payable.friendlyInstallmentsCount"/>
    <span>
      {{readableRelativeDueDate}}
    </span>
  </div>
  <span class="payable-title">
    {{payable.title}}
  </span>
  <div>
    Amounts
  </div>
  <div class="lead-light--text" id="description" v-html="compiledDescriptionMarkdown"></div>
  <div>
    Anexos
  </div>
  <div class="ls-row ls-no-gutters actions p-3">
    <button
      class="action-btn">
      <span class="icon mr-2">
        <img src="../assets/barcode.svg"
        height="20" width="20"/>
      </span>
      <span class="text lead-light--text">Copiar código</span>
    </button>
    <div class="ls-flex">
    </div>
    <button
      class="action-btn">
      <span class="icon mr-2">
        <img src="../assets/download.svg"
        height="20" width="20"/>
      </span>
      <span class="text lead-light--text">Baixar boleto</span>
    </button>
  </div>
</div>
</template>

<script>
import PayableStatusBadge from '../components/PayableStatusBadge'
import PayablesCount from '../components/PayablesCount'
import relativeDueDate from '@/helpers/relativeDueDate'
import Marked from 'marked'
import DOMPurify from 'dompurify'

export default {
  name: 'PayableDetail',
  props: {
    payable: {
      type: Object,
      required: true
    }
  },
  components: {
    PayableStatusBadge,
    PayablesCount,
  },
  computed: {
    readableRelativeDueDate() {
      return relativeDueDate(this.payable.dueAt)
    },

    compiledDescriptionMarkdown() {
      if(!this.payable || !this.payable.description) {
        return ''
      }
      return DOMPurify.sanitize(Marked(this.payable.description), {FORBID_TAGS: ['style', 'script', 'h1', 'h2']})
    },
  }

}
</script>

<style scoped>
.payable-title {
  font-size: 16px;
  font-weight: 700;
}

.actions {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid var(--grey-30);
}

.action-btn {
  border: 1px solid var(--grey-30);
  background: white;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
}

.icon,
.text {
  vertical-align: middle;
  display: inline-block;
  font-weight: 700;
}
</style>