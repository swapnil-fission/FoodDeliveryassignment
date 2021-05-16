import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../components/Cart.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../components/Home.vue')
  },
  {
    path: '/finalpage',
    name: 'Finalpage',
    component: () => import(/* webpackChunkName: "Finalpage" */ '../components/Finalpage.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "Logout" */ '../components/Logout.vue')
  },
  {
    path: '/myaccount',
    name: 'Myaccount',
    component: () => import(/* webpackChunkName: "Myaccount" */ '../components/Myaccount.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
