import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Cart from "../views/CartView.vue";
import Shop from "../views/ShopView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import authentication from "../middleware/authentication.js";
import Article from "../views/ArticleView.vue";
import Order from "../views/OrderView.vue";

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
		path: "/cart",
		name: "cart",
		component: Cart,
		beforeEnter: authentication,
	},
	{
		path: "/shop/restaurants",
		name: "restaurants",
		component: Shop,
		beforeEnter: authentication,
	},
	{
		path: "/shop/:id/articles",
		name: "articles",
		component: Article,
		beforeEnter: authentication,
	},
	{
		path: "/orders",
		name: "orders",
		component: Order,
		beforeEnter: authentication,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
