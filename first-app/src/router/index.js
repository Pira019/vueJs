import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
 {
    path: '/pires',
    name: 'home',
    component: HomeView
  }, 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import(/* webpackChunkName: "about" */ '../views/Recever.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
