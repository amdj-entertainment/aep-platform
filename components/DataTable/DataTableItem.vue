<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DataTableItem',
  props: {
    dataType: {
      type: String,
      required: false,
      default: () => 'text'
    }
  },
  data() {
    return {
      itemType: ''
    }
  },
  mounted() {
    switch (this.dataType) {
      case 'text':
        break
      case 'checkbox':
        break
      default:
        break
    }
  }
}
</script>
