import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import Profile from "../views/ProfileView.vue";
// import authentication from "../middleware/authentication.js";
import OrderConfirmation from "../views/OrderView.vue";
import OrderStatus from '../views/OrderStatus.vue'

const authentication = require('../middleware/authentication.js');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/register",
		name: "register",
		component: Register,
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile,
	},
  {
		path: "/order",
		name: "order",
		component: OrderConfirmation,
    	// beforeEnter: authentication,
	},
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/order-status/:id',
    name: 'order-status',
    component: OrderStatus
      // beforeEnter: authentication,
  },
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
