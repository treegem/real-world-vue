import { createRouter, createWebHashHistory } from 'vue-router'
import EventList from '@/views/EventList'
import About from '@/views/About'
import EventDetails from '@/views/EventDetails'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/events/123',
    name: 'EventDetails',
    component: EventDetails,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
