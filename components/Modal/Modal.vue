<template>
  <div class="modal-backdrop" :class="{ open: isVisible }">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h1 class="header-text"></h1>
          <button type="button" class="btn btn-primary" @click="$emit('close')">
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <component :is="name" v-bind="modalData"></component>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button
            type="button"
            class="btn btn-secondary uppercase"
            @click="$emit('close')"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary uppercase"
            @click="$emit('close')"
          >
            SAVE
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import EditEvent from './EditEvent'

export default {
  components: {
    EditEvent
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      data: {}
    }
  },
  computed: {
    isVisible() {
      return this.visible
    },
    modalOptions() {
      return this.options
    },
    modalData() {
      return this.modalOptions.data
    }
  },
  beforeMount() {},
  methods: {
    handleToggleEvent(name, state, params) {
      const nextState = typeof state === 'undefined' ? !this.visible : state

      this.toggle(nextState, params)
    },
    toggle(nextState, params) {
      const { visible } = this

      if (visible === nextState) return

      const beforeEventName = visible ? 'before-close' : 'before-open'

      if (beforeEventName === 'before-open') {
        let stopEventExecution = false
        const stop = () => {
          stopEventExecution = true
        }
        const beforeEvent = this.createModalEvent({
          stop,
          state: nextState,
          params
        })

        this.$emit(beforeEventName, beforeEvent)

        if (!stopEventExecution) {
          this.visible = nextState
        }
      }
    }
  }
}
</script>

<style></style>
