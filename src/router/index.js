import { createRouter, createWebHistory } from 'vue-router'
import Prelim from '../views/Act2.vue'
import Admission from '../views/Admission.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Prelim',
      component: Prelim,
    },
    {
      path: '/admission',
      name: 'Admission',
      component: Admission,
    }
  ],
})

export default router
