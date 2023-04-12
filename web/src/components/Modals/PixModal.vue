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
      <div class="mt-3 qr-code ls-align-items-center">
        <span>Ou leia o QR Code:</span>
        <div class="flex ls-justify-content-center">
          <img width="132" height="132" :src="qrCodeURL" />
        </div>
      </div>
      <div class="actions mt-3 ls-no-gutters">
        <button @click="close" class="action-btn mr-2">Voltar</button>
        <button @click="handleCopy" class="action-btn copy-btn flex ls-align-items-center ls-justify-content-center">
          <img class="mr-2" src="@/assets/copy.svg" height="20" width="20" />
          Copiar código
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';
import copyToClipboard from '@/helpers/copyToClipboard';

export default {
  name: 'PixModal',
  props: {
    pix: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    qrCodeURL: '',
  }),
  components: {},
  async mounted() {
    await this.$nextTick();

    const qrCodeURL = await QRCode.toDataURL(this.pix.code);

    this.qrCodeURL = qrCodeURL;
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleCopy() {
      copyToClipboard(this.pix.code);
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
.actions {
  display: flex;
  flex-direction: row;
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
  background: var(--aqua) !important;
  color: white !important;
  border: none !important;
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
  .actions {
    flex-direction: column;
  }
  .actions .action-btn:first-of-type {
    margin-bottom: 8px;
  }
}
</style>
