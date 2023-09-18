import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Components/MainPage.vue'
const routes = [
  {
    path: '/',
    name: 'MainCard',
    component: HomeView
  },
  {
    path: '/ProjectsCard',
    name: 'ProjectsCard',
    component: () => import('../Components/ProjectsCard')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
