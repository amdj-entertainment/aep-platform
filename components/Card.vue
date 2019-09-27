<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg bg-gray-700">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-gray-300 uppercase">
        {{ title }}
      </div>
      <p class="text-gray-400 text-base">
        {{ description }}
      </p>
    </div>
    <div class="px-6 py-4 flex justify-center">
      <nuxt-link
        :to="to"
        class="btn btn-primary w-full text-center uppercase"
        :append="appendLink"
      >
        Launch
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    appendLink: {
      type: Boolean,
      default() {
        return false
      },
      required: false
    }
  }
}
</script>

<style></style>
