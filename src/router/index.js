import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList'
import About from '@/views/About'
import EventDetails from '@/views/event/Details'
import EventRegister from '@/views/event/Register'
import EventEdit from '@/views/event/Edit'
import EventLayout from '@/views/event/Layout'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
      },
      {
        path: '',
        name: 'EventRegister',
        component: EventRegister,
      },
      {
        path: '',
        name: 'EventEdit',
        component: EventEdit,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
