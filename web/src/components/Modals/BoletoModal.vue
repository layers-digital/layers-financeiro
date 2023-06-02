<template>
  <div class="boleto-modal flex-col">
    <div class="flex ls-align-items-center ls-justify-content-sm-between">
      <div class="flex ls-align-items-center">
        <img src="@/assets/barcode.svg" height="20" width="20" />
        <h3 class="ml-2">Boleto</h3>
      </div>
      <img class="pointer" @click="close" src="@/assets/close-dark.svg" alt="Fechar modal" />
    </div>
    <div class="description">
      <h2 v-if="boleto.code && boleto.link">Baixe o boleto ou copie o código para pagar</h2>
      <h2 v-else-if="boleto.link">Baixe o boleto para pagar</h2>
      <h2 v-else>Copie o código para pagar</h2>
      <ol>
        <li>Acesse seu app bancário.</li>
        <li>Escolha pagamento via boleto.</li>
        <li v-if="boleto.code && boleto.link">Utilize o boleto ou o código abaixo:</li>
        <li v-else-if="boleto.link">Utilize o código abaixo:</li>
        <li v-else>Utilize o código.</li>
      </ol>
      <input type="text" v-if="boleto.code" :value="boleto.code" readonly />
      <button
        v-if="boleto.code"
        @click="handleCopy"
        class="copy-btn flex ls-align-items-center ls-justify-content-center"
      >
        <img class="mr-2" src="@/assets/copy.svg" height="20" width="20" />
        Copiar código
      </button>
      <div class="mt-3 ls-row ls-no-gutters">
        <button @click="close" class="action-btn mr-2">Voltar</button>
        <button
          v-if="boleto.link"
          @click="boletoDownload"
          class="action-btn flex ls-align-items-center ls-justify-content-center"
        >
          <img class="mr-2" src="@/assets/download.svg" height="20" width="20" />
          Baixar boleto
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { sendLogEvents } from '@/services/logEvent';
import downloadPayable from '@/helpers/downloadPayable';
import copyToClipboard from '@/helpers/copyToClipboard';

export default {
  name: 'BoletoModal',
  props: {
    boleto: {
      type: Object,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleCopy() {
      copyToClipboard(this.boleto.code);

      sendLogEvents('Copy Barcode');
    },
    async boletoDownload() {
      const url = this.boleto.link || this.payable.boleto.url;
      const title = this.boleto.title;
      const type = this.boleto.type;
      return await downloadPayable(url, title, type);
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
.pointer {
  cursor: pointer;
}
.boleto-modal h3 {
  margin: 0;
}
.boleto-modal .description ol {
  margin: 0;
  padding: 0;
  padding-left: 20px;
  font-size: 16px;
}
.boleto-modal .description input {
  width: 100%;
  height: 40px;
  border: 1px solid var(--grey-50);
  color: var(--lead-light);
  background: transparent;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 16px;
  margin-top: 12px;
}
.copy-btn {
  background: var(--aqua);
  border: none;
  color: white;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  margin-top: 12px;
  font-weight: bold;
}
.action-btn {
  border: 1px solid var(--grey-30);
  background: white;
  color: var(--lead-light);
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  height: 40px;
  flex: 1;
  font-weight: bold;
}
</style>
