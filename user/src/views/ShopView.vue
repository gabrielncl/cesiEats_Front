<template>
	<div>
		<Navbar />
		<v-container>
			<v-app>
				<h1 class="mb-2 text-center">Restaurants</h1>
				<v-row no-gutters>
					<div v-for="restaurant in restaurants">
						<Restaurant
							v-bind:name="restaurant.name"
							v-bind:id="restaurant._id"
						></Restaurant>
					</div>
				</v-row>
				<Footer />
			</v-app>
		</v-container>
	</div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Restaurant from "../components/Restaurant";
import axios from "axios";

export default {
	name: "Restaurants",
	data() {
		return {
			restaurants: [],
		};
	},
	mounted() {
		axios.get("http://api.cesieats.loc/shop/").then((response) => {
			this.restaurants = response.data.restaurants;
			console.log(this.restaurants);
		});
	},
	components: {
		Navbar,
		Footer,
		Restaurant,
	},
};
</script>
<style>
.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: 0.5;
	position: absolute;
	width: 100%;
}
</style>
