import { createRouter, createWebHistory } from 'vue-router'

import World from '@/views/World'


const routes = [
 
  {
    path: '/',
    name: 'World',
    component: World
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router