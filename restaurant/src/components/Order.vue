<template>
	<v-card class="mx-auto" min-width="800" outlined>
		<v-list-item three-line>
			<v-list-item-content>
				<div class="text-overline mb-4">{{firstname}} {{lastname}}</div>
				<v-list-item-title class="text-h6 mb-1"> {{article}} </v-list-item-title>
				<v-list-item-subtitle>{{address}}</v-list-item-subtitle>
				<div class="text-overline mb-4">Accepté : {{isAccepted}}</div>
			</v-list-item-content>
		</v-list-item>

		<v-card-actions>
			<v-btn v-on:click="accept" outlined rounded text>
				Accepter
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import axios from "axios";
export default {
	data: () => ({
		show: false,
	}),
	props: {
		id: {
			type: String,
			required: true,
		},
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		article: {
			type: String,
			required: true,
		},
		isAccepted: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		async accept() {
			await axios.put("http://api.cesieats.loc/restaurants/orders/validate/" + this.id);
		},
	},
};
</script>

<style>
.v-application--wrap {
	min-height: 80px !important;
}
</style>
