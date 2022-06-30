<template>
	<v-container>
		<v-app>
			<Navbar />
			<div class="article">
				<div v-for="order in orders">
					<Order
						v-bind:id="order._id"
						v-bind:firstname="order.user.firstname"
						v-bind:lastname="order.user.lastname"
						v-bind:address="order.user.address"
						v-bind:article="order.article[0].name"
						v-bind:isAccepted="order.isAcceptedByRestaurant"
					/>
				</div>
			</div>
			<Footer />
		</v-app>
	</v-container>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Order from "../components/Order";
import axios from "axios";

export default {
	components: {
		Navbar,
		Footer,
		Order,
	},
	name: "Orders",
	data() {
		return {
			orders: [],
		};
	},
	mounted() {
		axios.get("http://api.cesieats.loc/restaurants/orders").then((response) => {
			const orders = (this.orders = response.data.orders);
			let order;
			let articles = [];
			let article;
			let name_article = [];
			for (order of orders) {
				articles.push(order.article);
			}
			console.log(articles);
			for (article of articles) {
				for (name_article of article) {
					console.log(name_article.name);
				}
			}
		});
	},
};
</script>
