<template>
  <div>
    <div
      role="dropdown-item"
      class="inline-block select-none cursor-pointer"
      @click="open = !open"
    >
      <slot name="dropdown-link"></slot>
    </div>
    <div
      v-show="open"
      class="rounded absolute mt-2 mr-1 left-auto right-0 b bg-gray-400"
    >
      <slot name="dropdown-items"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<style></style>
