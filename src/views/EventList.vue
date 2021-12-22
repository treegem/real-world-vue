<template>
  <div class="events">
    <event-card v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page > 1"
        >&#60; previous
      </router-link>
      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >next &#62;
      </router-link>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'
import { watchEffect } from 'vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
  },

  data() {
    return {
      events: null,
      totalEvents: null,
      pageSize: 2,
    }
  },

  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(this.pageSize, this.page)
        .then((response) => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
    })
  },

  computed: {
    hasNextPage() {
      const totalPages = Math.ceil(this.totalEvents / this.pageSize)

      return this.page < totalPages
    },
  },
}
</script>

<style>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
