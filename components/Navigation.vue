<template>
  <nav class="navbar navbar-dark z-50">
    <div class="navbar-brand">
      <router-link class="navbar-brand-link" to="/">{{
        companyName
      }}</router-link>
    </div>
    <div class="navbar-nav">
      <div class="navbar-items">
        <router-link
          v-for="(item, key) in mode ? routes[mode] : routes.default"
          :key="key"
          class="navbar-link"
          :to="{ path: item.to }"
          >{{ item.name }}</router-link
        >
      </div>
    </div>
    <div v-if="mode === 'default'" class="w-full block lg:flex lg:w-auto">
      <router-link
        to="login"
        class="btn btn-primary leading-tight tracking-wide"
        >Login / Sign Up</router-link
      >
    </div>
    <div v-if="mode === 'dashboard'" class="w-full block lg:flex lg:w-auto">
      <Dropdown>
        <div slot="dropdown-link">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="../assets/img/avatar.png"
            alt="Avatar"
          />
        </div>
        <div slot="dropdown-items" class="shadow rounded overflow-hidden">
          <a
            href="#"
            class="no-underline block px-4 py-3 text-grey-darkest hover:text-gray-900 font-bold hover:bg-red-500 whitespace-no-wrap"
            >Account Management</a
          >
          <a
            href="#"
            class="no-underline block px-4 py-3 text-grey-darkest hover:text-gray-900 font-bold hover:bg-red-500 whitespace-no-wrap"
            >Business Management</a
          >
          <a
            href="#"
            class="no-underline block px-4 py-3 text-grey-darkest hover:text-gray-900 font-bold hover:bg-red-500 whitespace-no-wrap"
            >Lock Screen</a
          >
          <a
            href="#"
            class="no-underline block px-4 py-3 text-grey-darkest hover:text-gray-900 font-bold hover:bg-red-500 whitespace-no-wrap"
            >Sign Off</a
          >
        </div>
      </Dropdown>
    </div>
  </nav>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'Navigation',
  components: {
    Dropdown
  },
  props: {
    mode: {
      type: String,
      default() {
        return 'default'
      }
    }
  },
  data() {
    return {
      company: 'Grange Media',
      routes: {
        default: [],
        dashboard: [
          {
            name: 'events',
            to: 'dashboard/events'
          }
        ]
      }
    }
  },
  computed: {
    companyName() {
      return this.mode === 'dashboard'
        ? this.company
        : 'AMDJ Entertainment Platform'
    }
  }
}
</script>

<style></style>
