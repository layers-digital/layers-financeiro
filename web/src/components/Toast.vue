<template>
  <transition name="fade">
    <div v-if="open" class="toast-container" :class="position">
      <div class="ls-row ls-no-gutters toast ls-align-items-center" :class="color">
        <div class="ls-col">
          <div v-if="message" class="message">{{ message }}</div>
        </div>
        <button
          v-if="options.action"
          @click="callAction()"
          class="action-btn cursor-pointer pl-2" :class="actionColor">
          {{ options.action.label }}
        </button>
        <div v-else-if="options.loading">
          <Loader />
        </div>
        <button v-else @click="close()" class="close-btn cursor-pointer">
          <img src="@/assets/cancel.svg"
            height="24" width="24"/>
        </button>
      </div>
    </div>
  </transition>
</template>
<script>
import Loader from '@/components/Loader'
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
  components: {
    Loader
  },
  data() {
    return {
      open: false,
    };
  },
  created() {
    if(this.options.timeout > 0){
      setTimeout(() => {
        this.close()
      }, this.options.timeout)
    }
  },
  watch: {
    open: function(val) {
      if (!val) {
        this.close();
      }
    }
  },
  beforeMount() {
    document.body.appendChild(this.$el);
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
      } [this.options && this.options.color] || 'lead'
    },
    actionColor() {
      let color = (this.options && this.options.action && this.options.action.color) || 'lead'
      return {
        'danger': 'danger--text',
        'warning': 'warning--text',
        'success': 'success--text',
        'info': 'lead--text',
        'white': 'white--text',
      } [color]
    },
    position() {
      return {
        'top': 'top',
        'bottom': 'bottom',
      } [this.options && this.options.position] || 'top'
    }
  },
  methods: {
    close() {
      if (this.open) this.open = false;
      setTimeout(() => {
        this.$options.onClose();
        this.$destroy();
        removeElement(this.$el);
      }, 0);
    },
    callAction() {
      const fn = (this.options && this.options.action && this.options.action.callback) || null
      if(!fn || typeof fn != 'function') return
      return fn()
    }
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
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 4px;
  min-width: 228px;
  max-width: 328px;
  min-height: 56px;
  width: 100%;
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
.toast-container.bottom {
  top: initial;
  bottom: 16px;
}
.close-btn {
  background-color: transparent !important;
  border: none !important;
  height: 24px;
  outline: none;
}
.action-btn {
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: white;
  padding: 1px 1px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  outline: none;
}
</style>