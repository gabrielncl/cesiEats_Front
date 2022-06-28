<template>
	<div>
		<v-container>
			<Navbar />
			<v-row no-gutters>
				<v-col :cols="12">
					<v-card-text class="" tile outlined>
						<v-card-title class="subheading"
							>Restaurants disponibles</v-card-title
						>
						<div class="row" v-for="restaurant in restaurants">
							<v-app>
								<Product v-bind:name="restaurant.name"></Product>
							</v-app>
						</div>
					</v-card-text>
				</v-col>
			</v-row>
			<Footer />
		</v-container>
	</div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product";
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
		Product,
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
