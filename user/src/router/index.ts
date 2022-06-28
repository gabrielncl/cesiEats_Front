import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../views/LayoutView.vue'
import Profile from '../views/ProfileView.vue'
import Home from '../views/HomeView.vue'
import Cart from '../views/CartView.vue'
import Shop from '../views/ShopView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'login',
    component: () => import("../views/LoginView.vue")

  },
  {
    path: '/register',
    name: 'register',
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
