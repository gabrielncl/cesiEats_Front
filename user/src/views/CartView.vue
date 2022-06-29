<template>
	<div>
		<Navbar />
		<v-container>
			<v-app>
				<h1 class="mb-2 text-center">Panier</h1>
				<v-row>
					<v-col :cols="12" md="9" sm="12">
						<v-simple-table>
							<template v-slot:default>
								<thead>
									<tr>
										<th class="text-center">ARTICLE</th>
										<th class="text-center">PRIX</th>
										<th class="text-center">QUANTITE</th>
										<th class="text-center">TOTAL</th>
										<th class="text-center"></th>
									</tr>
								</thead>
								<tbody>
									<div v-for="article in articlesInCart">
										<Cart v-bind:name="article.name" v-bind:price="article.price"/>
									</div>
								</tbody>
							</template>
						</v-simple-table>
					</v-col>
					<v-col
						:cols="12"
						md="3"
						sm="12"
						style="background-color: lightskyblue"
					>
						<p class="headline">Résumé de la commande</p>
						<v-simple-table>
							<template v-slot:default>
								<tbody>
									<tr>
										<td>Sous total de la commande</td>
										<td class="text-right" style="width: 50px">$160.00</td>
									</tr>
									<tr>
										<td>Frais de livraisons</td>
										<td class="text-right" style="width: 50px">$10.00</td>
									</tr>
									<tr>
										<td>Total</td>
										<td class="text-right" style="width: 50px">
											<b>$175.00</b>
										</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
						<div class="text-center">
							<v-btn class="primary white--text mt-5" outlined>PAYER</v-btn>
						</div>
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
import Cart from "../components/Cart";

import axios from "axios";

export default {
	components: {
		Navbar,
		Footer,
		Cart,
	},
	name: "ArticlesInCart",
	data() {
		return {
			articlesInCart: [],
		};
	},
	mounted() {
		axios
			.get("http://api.cesieats.loc/users/cart", {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem("token"),
				},
			})
			.then((response) => {
				this.articlesInCart = response.data.cart.article;
				console.log(this.articlesInCart);
			});
	},
};
</script>
