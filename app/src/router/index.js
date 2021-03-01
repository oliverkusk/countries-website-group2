import { createRouter, createWebHistory } from 'vue-router'

import Country from '../components/Country.vue'
import worldHeader from '../components/worldHeader.vue'


const routes = [
 
  {
    path: '/world',
    name: 'Country',
    component: Country
  },
  {
    path: '/world',
    name: 'header',
    component: worldHeader
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
