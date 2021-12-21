<template>
  <div class="events">
    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></event-card>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },

  data() {
    return {
      events: null,
    }
  },

  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>

<style>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
