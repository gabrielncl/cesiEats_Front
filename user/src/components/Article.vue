<template>
	<v-card class="mx-auto my-12" max-width="344">
		<v-img
			src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
			height="200px"
		></v-img>

		<v-card-title> {{ name }} </v-card-title>

		<v-card-subtitle> {{ price }} € </v-card-subtitle>

		<v-card-actions>
			<v-btn v-on:click="addToCart" color="orange lighten-2" text>
				Ajouter au panier
			</v-btn>

			<v-spacer></v-spacer>

			<v-btn icon @click="show = !show">
				<v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
			</v-btn>
		</v-card-actions>

		<v-expand-transition>
			<div v-show="show">
				<v-divider></v-divider>

				<v-card-text> </v-card-text>
			</div>
		</v-expand-transition>
	</v-card>
</template>

<script>
import axios from "axios";

export default {
	data: () => ({
		show: false,
	}),
	props: {
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
	methods: {
		async addToCart() {
			console.log(this.id);
			console.log(localStorage.getItem("token"));
			await axios.put("http://api.cesieats.loc/users/cart/" + this.id);
		},
	},
};
</script>
