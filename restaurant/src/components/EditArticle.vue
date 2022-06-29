<template>
	<v-container>
		<v-row no-gutters>
			<v-col sm="10" class="mx-auto">
				<v-card class="pa-5">
					<v-form @submit.prevent="updateProduct">
						<v-text-field
							label="Nom"
							v-model="name"
							prepend-icon="mdi-lead-pencil"
							:rules="rules"
							>{{ name }}</v-text-field
						>
						<v-text-field
							label="Prix"
							v-model="price"
							prepend-icon="mdi-cash"
							:rules="rules"
							>{{ price }}</v-text-field
						>
						<v-textarea
							label="Description"
							v-model="description"
							prepend-icon="mdi-note-plus"
							:rules="rules"
							>{{ description }}</v-textarea
						>
						<v-file-input
							v-model="photo"
							show-size
							counter
							multiple
							label="Selectionner une image"
						></v-file-input>
						<v-img :src="`/${photo}`" width="120"></v-img>

						<v-btn type="submit" color="orange lighten-2" text
							>Modifier cet article</v-btn
						>
						<v-btn color="red" text v-on:click="deleteProduct"
							>Supprimer cet article</v-btn
						>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import axios from "axios";
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: true,
		},
	},
	methods: {
		async updateProduct() {
			const response = await axios.put(
				"http://api.cesieats.loc/restaurants/article/edit/" + this.id,
				{
					name: this.name,
					price: this.price,
					description: this.description,
					photo: this.photo,
				}
			);
			console.log(response);
		},
		async deleteProduct() {
			const response = await axios.delete(
				"http://api.cesieats.loc/restaurants/article/delete/" + this.id
			);
			console.log(response);
		},
	},
};
</script>
