<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
export default {
  name: 'EditEvent',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
