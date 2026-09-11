import { createRouter, createWebHistory } from 'vue-router'
import Prelim from '../views/Act2.vue'
import Admission from '../views/Admission.vue'
import SampleData from '../views/SampleData.vue'
import SampleMethods from '../views/SampleMethods.vue'
import SampleVmodel from '../views/SampleVmodel.vue'

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
    },
    {
      path: '/sample-data',
      name: 'sampleData',
      component: SampleData,
    },
    {
      path: '/sample-methods',
      name: 'sampleMethods',
      component: SampleMethods,
    },
    {
      path: '/sample-vmodel',
      name: 'sampleVmodel',
      component: SampleVmodel,
    }
  ],
})

export default router
