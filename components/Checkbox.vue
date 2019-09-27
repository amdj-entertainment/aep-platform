<template>
  <div
    :class="{ 'bg-red-500 border-red-500 text-gray-900': value }"
    class="w-5 h-5 rounded border border-gray-600 inline-flex justify-center items-center bg-gray-300 cursor-pointer"
    @click.stop="$emit('change', !value)"
  >
    <font-awesome-icon
      class=""
      :class="[{ 'text-gray-100': value }, 'w-1/2 fill-current text-gray-300']"
      :icon="['fas', 'check']"
      size="xs"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
