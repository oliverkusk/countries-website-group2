import { createRouter, createWebHistory } from 'vue-router'

import Country from '../components/Country.vue'



const routes = [
 
  {
    path: '/world',
    name: 'Country',
    component: Country
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
