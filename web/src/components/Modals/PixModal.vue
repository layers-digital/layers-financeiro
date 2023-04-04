<template>
  <div class="pix-modal flex-col">
    <div class="flex ls-align-items-center ls-justify-content-sm-between">
      <div class="flex ls-align-items-center">
        <img src="@/assets/qrcode.svg" height="20" width="20" />
        <h3 class="ml-2">Pix</h3>
      </div>
      <img class="pointer" @click="close" src="@/assets/close-dark.svg" alt="Fechar modal" />
    </div>
    <div class="description">
      <h2>Copie o código para pagar</h2>
      <ol>
        <li>Acesse seu app bancário.</li>
        <li>Escolha pagar via Pix Copia e Cola</li>
        <li>Cole o seguinte código:</li>
      </ol>
      <input type="text" :value="pix.code" readonly />
      <button @click="handleCopy" class="copy-btn flex ls-align-items-center ls-justify-content-center">
        <img class="mr-2" src="@/assets/copy.svg" height="20" width="20" />
        Copiar código
      </button>
      <div class="mt-3 qr-code ls-align-items-center">
        <span>Ou leia o QR Code:</span>
        <QRCode class="flex ls-justify-content-center" ref="qr-code" :size="128" :text="pix.code"></QRCode>
      </div>
      <div class="mt-3 ls-row ls-no-gutters">
        <button @click="close" class="action-btn mr-2">Voltar</button>
        <button @click="pixDownload" class="action-btn flex ls-align-items-center ls-justify-content-center">
          <img class="mr-2" src="@/assets/download.svg" height="20" width="20" />
          Baixar QRCode
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'vue-qrcode-component';
import { sendLogEvents } from '@/services/logEvent';
import copyToClipboard from '@/helpers/copyToClipboard';
import downloadFile from '@/helpers/downloadFile';

export default {
  name: 'PixModal',
  props: {
    pix: {
      type: Object,
      required: true,
    },
  },
  components: {
    QRCode,
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleCopy() {
      copyToClipboard(this.pix.code);

      sendLogEvents('Copy PIX');
    },
    async pixDownload() {
      const base64 = this.$refs['qr-code'].$el.children[1].src;

      const response = await fetch(base64);
      const blob = await response.blob();

      const url = URL.createObjectURL(blob, { type: 'image/png' });

      sendLogEvents('Download Files', { description: 'pix' });

      downloadFile(url, 'pix.png');
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
.pix-modal h3 {
  margin: 0;
}
.pix-modal .description ol {
  margin: 0;
  padding: 0;
  padding-left: 20px;
  font-size: 16px;
}
.pix-modal .description input {
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
.qr-code span {
  font-size: 16px;
  width: 100%;
  text-align: start;
}

@media (max-width: 768px) {
  .qr-code {
    display: none;
  }
}
</style>
