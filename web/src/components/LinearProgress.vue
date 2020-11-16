<template functional>
  <div
    class="l-linear-progress"
    :style="[data.style, data.staticStyle, { height: props.height + 'px' }]"
    :class="[data.class, data.staticClass]"
  >
    <div class="l-linear-progress-background"></div>
    <div class="l-linear-progress-indeterminate" :class="[props.color]"></div>
  </div>
</template>
<script>
export default {
  tagName: 'l-linear-progress',
  props: {
    color: { type: String, default: () => 'rainbow' },
    background: { type: String, default: () => 'transparent' },
    height: { type: Number, default: () => 4 },
  },
};
</script>
<style>
.l-linear-progress {
  width: 100%;
  height: 4px;
  background: transparent;
  overflow: hidden;
  position: relative;
  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
.l-linear-progress .rainbow {
  background: linear-gradient(90deg, #00b8ad 0%, #5451d6 33.19%, #f97777 50%, #ffca65 90%, #ffca65 100%);
}
.l-linear-progress-indeterminate {
  height: inherit;
  left: 0;
  right: auto;
  animation-iteration-count: infinite;
  bottom: 0;
  height: inherit;
  position: absolute;
  top: 0;
  width: auto;
  will-change: left, right;
  animation-name: indeterminate;
  animation-duration: 1.2s;
  animation-delay: 0.2s;
  left: -100%;
  right: 100%;
}
@keyframes indeterminate {
  0% {
    right: 100%;
    left: -100%;
  }
  40% {
    right: -10%;
    left: -50%;
  }
  to {
    right: -10%;
    left: 100%;
  }
}
</style>
