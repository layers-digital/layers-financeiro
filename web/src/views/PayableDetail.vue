<template>
  <div
    class="ls-container ls-flex-grow-1 p-3"
    style="min-height: 100%; padding-bottom: 100px !important; position: relative !important; background-color: white"
  >
    <!-- Labels -->
    <div class="ls-row ls-no-gutters mb-2 ls-align-items-center">
      <PayablesCount class="mr-2" :friendlyInstallmentsCount="payable.friendlyInstallmentsCount" />
      <PayableStatusBadge class="mr-2" :status="payable.status" />
      <span v-if="payable.status != 'paid'" class="amount-label" :class="totalAmountColor">
        {{ readableRelativeDueDate }}
      </span>
    </div>
    <!-- Title -->
    <div class="payable-title mb-3">
      {{ payable.title }}
    </div>
    <!-- Amounts -->
    <div class="dashed mt-3" :class="totalAmountColor"></div>
    <div class="py-2" :class="totalAmountColor">
      <div class="ls-row ls-no-gutters ls-align-items-center">
        <div class="ls-col mr-3" v-if="payable.amountTotal">
          <div class="amount-label">Valor total</div>
          <span class="amount" :class="totalAmountColor" style="white-space: nowrap">
            {{ amountTotal }}
          </span>
        </div>
        <div class="ls-col">
          <div class="amount-label">Data de vencimento</div>
          <span class="due-date lead--text" style="white-space: nowrap">
            {{ formatedDueDate }}
          </span>
        </div>
      </div>

      <div class="ls-row ls-no-gutters ls-align-items-end">
        <div v-if="payable.centsOriginal && payable.centsOriginal != payable.centsTotal" class="ls-col mr-3 mt-3">
          <div class="amount-label">Valor original</div>
          <span class="amount-light lead--text" style="white-space: nowrap">
            {{ amountOriginal }}
          </span>
        </div>
        <div v-if="payable.amountPaid" class="ls-col mt-3">
          <div class="amount-label">Valor pago</div>
          <span class="amount success--text" style="white-space: nowrap">
            {{ amountPaid }}
          </span>
        </div>
      </div>
    </div>
    <div class="dashed mb-3" :class="totalAmountColor"></div>
    <!-- Sent at -->
    <div v-if="formatedSentAt" class="amount-label">Cobrança enviada em {{ formatedSentAt }}</div>
    <!-- Description -->
    <div class="lead-light--text" id="description" v-html="compiledDescriptionMarkdown"></div>
    <!-- Attachments -->
    <div v-if="payable.attachments && payable.attachments.length" class="ls-row ls-flex-grow-1 ls-no-gutters">
      <div class="ls-col">
        <div class="amount-label mb-2">Anexos</div>
        <button
          v-for="(attachment, index) in payable.attachments"
          :key="index"
          class="attachment-btn mb-2 link-light"
          @click="attachmentHandler(attachment.url, attachment.title, attachment.kind || attachment.type, 'attachment')"
        >
          <div class="ls-flex-grow-1" style="margin-top: 4px">
            <span class="ellipsis-1" style="font-weight: 600; text-align: left; word-break: break-all">
              {{ attachment.title }}
            </span>
          </div>
          <div class="ls-flex-grow-0">
            <img src="../assets/download-link.svg" height="20" width="20" />
          </div>
        </button>
      </div>
    </div>
    <!-- Action buttons -->
    <div v-if="hasPaymentMethods" class="ls-row ls-no-gutters actions p-3">
      <button
        v-if="payable.boleto && (payable.boleto.link || payable.boleto.code)"
        @click="openBoleto"
        class="action-btn ls-flex-grow-1 mr-3"
      >
        <span class="icon mr-2">
          <img src="../assets/barcode.svg" height="20" width="20" />
        </span>
        <span class="text lead-light--text">Acessar Boleto</span>
      </button>
      <button v-if="payable.pix" @click="openPIX" class="action-btn ls-flex-grow-1">
        <span class="icon mr-2">
          <img src="../assets/qrcode.svg" height="20" width="20" />
        </span>
        <span class="text lead-light--text">Acessar PIX</span>
      </button>
    </div>
    <!-- Without payment methods -->
    <div v-else class="without-payments py-2 px-4">
      <img src="../assets/time_management.svg" alt="" />
      <h4 class="ml-3">
        As informações para pagamento não estão disponíveis porque o sistema de gestão ainda não disponibilizou boleto
        ou pix para essa cobrança.
      </h4>
    </div>
  </div>
</template>

<script>
import PayableStatusBadge from '../components/PayableStatusBadge';
import PayablesCount from '../components/PayablesCount';
import relativeDueDate from '@/helpers/relativeDueDate';
import downloadFile from '@/helpers/downloadFile';
import Marked from 'marked';
import DOMPurify from 'dompurify';
import dayjs from 'dayjs';
import currencyFormatter from '@/helpers/currencyFormatter';
import openModal from '@/helpers/openModal';
import BoletoModal from '@/components/Modals/BoletoModal';
import PixModal from '@/components/Modals/PixModal';
import { sendLogEvents } from '@/services/logEvent';

export default {
  name: 'PayableDetail',
  props: {
    payable: {
      type: Object,
      required: true,
    },
  },
  components: {
    PayableStatusBadge,
    PayablesCount,
  },
  computed: {
    amountOriginal() {
      return currencyFormatter(this.payable.centsOriginal, this.payable.currency, navigator.language);
    },
    amountPaid() {
      return currencyFormatter(this.payable.centsPaid, this.payable.currency, navigator.language);
    },
    amountTotal() {
      return currencyFormatter(this.payable.centsTotal, this.payable.currency, navigator.language);
    },
    readableRelativeDueDate() {
      return relativeDueDate(this.payable.dueAt);
    },

    compiledDescriptionMarkdown() {
      if (!this.payable || !this.payable.description) {
        return '';
      }
      return DOMPurify.sanitize(Marked(this.payable.description), {
        FORBID_TAGS: ['style', 'script', 'h1', 'h2'],
        breaks: true,
        gfm: true,
      });
    },

    totalAmountColor() {
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

    formatedSentAt() {
      if (!this.payable.sentAt) {
        return null;
      }

      return dayjs(this.payable.sentAt).format('DD/MM/YYYY');
    },

    hasPaymentMethods() {
      if (!this.payable) return false;

      return this.payable.boleto || this.payable.pix;
    },
  },

  methods: {
    async attachmentHandler(url, title, type, description) {
      sendLogEvents('Download Files', { description });
      if (type == 'link') {
        return await LayersPortal('go', url);
      }
      return downloadFile(url, title);
    },

    openBoleto() {
      openModal({
        component: BoletoModal,
        props: {
          boleto: this.payable.boleto,
        },
      });
    },

    openPIX() {
      openModal({
        component: PixModal,
        props: {
          pix: this.payable.pix,
        },
      });
    },
  },
};
</script>

<style scoped>
.payable-title {
  font-size: 16px;
  font-weight: 700;
}

.without-payments {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--grey-20);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.actions {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  border-top: 1px solid var(--grey-30);
}

.action-btn {
  border: 1px solid var(--grey-30);
  background: white;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  height: 40px;
}

.icon,
.text {
  vertical-align: middle;
  display: inline-block;
  font-weight: 700;
}

.attachment-btn {
  border: 1px solid var(--grey-30);
  background: white;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  color: var(--link);
  width: 100%;
  height: 40px;
  display: flex;
  overflow: hidden;
}

.amount {
  font-size: 20px;
  font-weight: 700;
}

.amount-light {
  font-size: 20px;
}

.amount-label {
  font-size: 12px;
  font-weight: 700;
  color: #a3b1bf;
}

.due-date {
  font-size: 20px;
}
</style>
