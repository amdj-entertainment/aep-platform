<template>
  <div
    :class="[
      status ? 'bg-green-600' : 'bg-red-600',
      'text-gray-900 px-2 py-1 font-bold rounded inline-block uppercase text-sm'
    ]"
  >
    {{ statusText }}
  </div>
</template>

<script>
export default {
  name: 'EventStatus',
  props: {
    open: {
      type: Date,
      required: true
    },
    close: {
      type: Date,
      required: true
    }
  },
  computed: {
    status() {
      return this.open < this.close
    },
    statusText() {
      return this.status ? 'open' : 'closed'
    }
  }
}
</script>
