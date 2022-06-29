import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Shop from '../views/ShopView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import Order from '../views/OrderView.vue'
import AddArticle from '../views/AddArticleView.vue'
import EditArticle from '../views/EditArticleView.vue'
import Profile from '../views/ProfileView.vue'
//import authentication from "../middleware/authentication.js";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    //beforeEnter: authentication,
  },
  {
    path: '/login',
    name: 'login',
    component: Login

  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/add-article',
    name: 'add-article',
    component: AddArticle
  },
  {
    path: '/edit-article/:id',
    name: 'edit-article',
    component: EditArticle
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
