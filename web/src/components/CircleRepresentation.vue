<template>
<div class="circle" :class="circleColor">
</div>
</template>

<script>
export default {
  name: 'CircleRepresentation',
  props: {
    payable: {
      type: Object,
      required: true
    }
  },
  computed: {
    circleColor() {
      if(this.payable.isCritical && this.payable.status == 'late') {
        return 'danger'
      }

      if(this.payable.isCritical && this.payable.status != 'late') {
        return 'warning'
      }

      if(this.payable.status == 'paid') {
        return 'success'
      }

      if(this.payable.status == 'open') {
        return 'grey-60'
      }

      return 'grey-50'
    }
  }

}
</script>

<style scoped>
.circle {
  width: 10px;
  height: 10px;
  border-radius: 10px;
}
</style>