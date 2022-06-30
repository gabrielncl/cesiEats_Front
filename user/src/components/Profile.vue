<template>
	<v-container>
		<v-row no-gutters>
			<v-col sm="10" class="mx-auto">
				<v-card class="pa-5">
					<v-form
						ref="form"
						class="pa-5"
						enctype="multipart/form-data"
						@submit.prevent=""
					>
						<v-text-field
							label="Prénom"
							prepend-icon="mdi-account"
						></v-text-field>
						<v-text-field label="Nom" prepend-icon="mdi-account">
						</v-text-field>
						<v-text-field label="Email" prepend-icon="mdi-email"></v-text-field>
						<v-text-field
							label="Adresse"
							prepend-icon="mdi-home"
						></v-text-field>
						<v-text-field
							label="Téléphone"
							prepend-icon="mdi-phone"
						></v-text-field>
						<v-text-field
							label="Mot de passe"
							prepend-icon="mdi-lock"
						></v-text-field>

						<v-btn href="/order" type="submit" color="orange lighten-2" text
							>Modifier le profil</v-btn
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
		phone: {
			type: Number,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	/*methods: {
		async updateProfile() {
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
			this.$router.push("/shop");
		},
		async deleteProduct() {
			const response = await axios.delete(
				"http://api.cesieats.loc/restaurants/article/delete/" + this.id
			);
			console.log(response);
			this.$router.push("/shop");
		},
	},*/
};
</script>
