import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../components/Layout.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
//import Profile from '../components/Profile.vue'
import Home from '../components/Home.vue'
//import Cart from '../components/Cart.vue' 


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
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
      path: '/',
      component: Layout,
      children:[
        {
          path: '/home',
          name: 'home',
          component: Home
        },
       /* {
          path: '/cart',
          name: 'cart',
          component: Cart
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        },
        {
          path:'/shop',
          component:Shop,
          name:'Shop'
        },
        {
          path:'/product',
          component:Product,
          name:'Product'
        },
        {
          path:'/blog',
          component:Blog,
          name:'Blog'
        },
        {
          path:'/post',
          component:Post,
          name:'Post'
        },
        {
          path:'/cart',
          component:Cart,
          name:'Cart'
        }*/
      ]

    }
  ],
  mode: 'history'
},
)

