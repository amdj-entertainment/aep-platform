<template>
  <div class="h-full z-0">
    <navigation mode="dashboard"></navigation>
    <nuxt></nuxt>
    <modal
      :name="modalName"
      :visible="modalIsOpen"
      :options="modalOptions"
      @close="CloseModal"
    ></modal>
  </div>
</template>

<script>
import navigation from '@/components/Navigation'
import modal from '@/components/Modal/Modal'
export default {
  name: 'Dashboard',
  components: {
    navigation,
    modal
  },
  data() {
    return {
      modalName: '',
      modalIsOpen: false,
      modalOptions: {}
    }
  },
  mounted() {
    this.$root.$on('modal-open', (name, options) => {
      this.modalName = name
      this.modalIsOpen = true
      this.modalOptions = options
    })
  },
  methods: {
    CloseModal() {
      this.modalIsOpen = false
    }
  }
}
</script>

<style></style>
