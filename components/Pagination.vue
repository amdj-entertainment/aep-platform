<template>
  <ul
    class="flex list-none w-auto rounded bg-gray-400 select-none text-gray-900"
  >
    <li
      :class="[
        currentPage === 1
          ? 'text-gray-500'
          : 'hover:bg-blue-500 cursor-pointer',
        'block px-3 py-2 rounded-l'
      ]"
      @click="change(currentPage - 1)"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon>
    </li>
    <li
      v-for="page in last"
      :key="page"
      :class="[
        page == currentPage ? 'bg-blue-500' : 'hover:bg-blue-500',
        'block px-3 py-2 cursor-pointer'
      ]"
      @click="change(page)"
    >
      {{ page }}
    </li>
    <li
      :class="[
        currentPage === last
          ? 'text-gray-500'
          : 'hover:bg-blue-500 cursor-pointer',
        'block px-3 py-2 rounded-r'
      ]"
      @click="change(currentPage + 1)"
    >
      <font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    hasNext: {
      type: Boolean
    },
    hasPrev: {
      type: Boolean
    },
    last: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1,
      lastPage: 1,
      hasNextPage: false,
      hasPrevPage: false
    }
  },
  mounted() {
    this.hasNextPage = this.hasNext
    this.hasPrevPage = this.hasPrev
    this.currentPage = this.current
    this.lastPage = this.last
  },
  methods: {
    change(page) {
      if (page > 0 && page < this.last + 1) {
        this.currentPage = page
        this.$emit('paginate', page)
      }
    }
  }
}
</script>

<style></style>
