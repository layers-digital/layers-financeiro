<template>
  <div class="loader-container">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>
      </svg>
    </div>
</div>
</template>
<script type="text/javascript">
export default {
  name: "Loader"
}
</script>
<style type="text/css" scoped>
.loader-container {
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background: var(--lead-light);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.16);
  flex: 1 1 auto; display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}
.loader {
  position: relative;
  margin: 0 auto;
  width: 18px;
}
.loader:before {
  content: '';
  display: block;
  padding-top: 100%;
}
.circular {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}
.path.white {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color-white 6s ease-in-out infinite;
  stroke-linecap: round;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes color {
  100%,
  0% {
    stroke: var(--aqua);
  }
}
@keyframes color-white {
  100%,
  0% {
    stroke: white;
  }
}
</style>