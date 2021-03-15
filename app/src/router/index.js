import { createRouter, createWebHistory } from 'vue-router'

import World from '@/views/World'
import Details from '@/components/Details'



const routes = [
 
  {
    path: '/',
    name: 'World',
    component: World
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router