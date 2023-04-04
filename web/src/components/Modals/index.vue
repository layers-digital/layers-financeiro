<template>
  <div v-if="show" class="modal-vue">
    <div class="overlay" @click="close" />

    <div class="modal">
      <component :is="component" v-bind="props" @close="close" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    component: {
      type: Object,
      required: true,
    },
    props: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    show: true,
  }),
  methods: {
    close() {
      this.show = false;

      this.onClose();
    },
  },
};
</script>

<style>
.modal-vue {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-vue .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-vue .modal {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  margin: 0 24px;
  width: 600px;
}

@media (max-width: 768px) {
  .modal-vue .modal {
    min-width: 90%;
  }
}
</style>
