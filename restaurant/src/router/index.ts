import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import authentication from "../middleware/authentication.js";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: authentication,
  },
  {
    path: '/',
    name: 'login',
    component: Login

  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
