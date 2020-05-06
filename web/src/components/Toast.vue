<template>
  <transition name="fade">
    <div v-if="open" class="toast-container">
      <div class="ls-row ls-no-gutters toast ls-align-items-center" :class="color">
        <div class="ls-col">
          <div v-if="message" class="message">{{ message }}</div>
          <button v-if="options.action"
            @click="descriptionExpanded = !descriptionExpanded"
            class="action-btn">
            ver mais
          </button>
        </div>
        <button v-if="options.closeable" @click="close()" class="close-btn">
          <img src="../assets/cancel.svg"
            height="24" width="24"/>
        </button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  data() {
    return {
      open: false,
    };
  },
  watch: {
    open: function(val) {
      if (!val) {
        this.close();
      }
    },
  },
  beforeMount() {
    document.body.appendChild(this.$el);
    // document.querySelector('#app').appendChild(this.$el);
  },
  mounted() {
    this.open = true;
  },
  computed: {
    color() {
      return {
        'danger': 'danger',
        'warning': 'warning',
        'success': 'success',
        'info': 'lead',
      } [this.type] || 'lead'
    }
  },
  methods: {
    close() {
      if (this.open) this.open = false;
      setTimeout(() => {
        this.$options.onClose();
        this.$destroy();
        removeElement(this.$el);
      }, 0); // wait for close animation
    },
  },
};
function removeElement(el) {
  if (typeof el.remove !== 'undefined') {
    el.remove();
  } else {
    el.parentNode.removeChild(el);
  }
}
</script>
<style scoped>
.message {
  font-weight: 600;
  color: white;
}

.toast {
  padding: 16px;
  border-radius: 4px;
  min-width: 228px;
  max-width: 328px;
  max-height: 56px;
}

.toast-container {
  width: 100%;
  z-index: 10000;
  position: fixed;
  top:8px;
  left: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center !important;
  align-items: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.close-btn {
  background-color: transparent !important;
  border: none !important;
}

.action-btn {
  background:none;
  border:none;
  font-size: 16px;
  font-weight: 700;
  color: var(--link);
  padding: 1px 1px;
  cursor: pointer;
}
</style>