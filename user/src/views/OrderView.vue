<template>
	<div>
		<Navbar />
		<v-container>
			<v-app>
				<h1 class="mb-2 text-center">Historique Commandes</h1>
				<v-row>
					<v-col :cols="12" md="9" sm="12">
						<v-simple-table>
							<template v-slot:default>
								<tbody>
									<div v-for="order in orders">
										<Order v-bind:restaurant_name="order.restaurant[0].name" />
									</div>
								</tbody>
							</template>
						</v-simple-table>
					</v-col>
				</v-row>
			</v-app>
		</v-container>
		<Footer />
	</div>
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
		axios.get("http://api.cesieats.loc/users/orders").then((response) => {
			this.orders = response.data.orders;
			console.log(this.orders);
		});
	},
};
</script>
