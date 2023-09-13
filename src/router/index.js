import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainCard',
    component: HomeView
  },
  {
    path: '/Prokects',
    name: 'ProjectsCard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsCard')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
