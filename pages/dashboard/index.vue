<template>
  <div class="flex flex-wrap justify-center items-center h-full lg:-mt-20">
    <div v-for="(item, key) in apps" :key="key" class="mx-2">
      <Card
        :title="item.title"
        :description="item.description"
        :to="item.to"
        append-link
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  layout: 'dashboard',
  components: {
    Card
  },
  data() {
    return {
      apps: [
        {
          title: 'Event Management',
          description: '',
          to: 'events'
        },
        {
          title: 'Venue Management',
          description: '',
          to: 'venues'
        },
        {
          title: 'Client Management',
          description: '',
          to: 'clients'
        },
        {
          title: 'Track Management',
          description: '',
          to: 'tracks'
        }
      ]
    }
  }
}
</script>

<style></style>
