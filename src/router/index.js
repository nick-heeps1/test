import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainPage.vue'
const routes = [
  {
    path: '/',
    name: 'MainCard',
    component: HomeView
  },
  {
    path: '/ProjectsCard',
    name: 'ProjectsCard',
    component: () => import('../views/ProjectsCard')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
