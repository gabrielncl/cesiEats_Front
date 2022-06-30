<template>
	<v-app>
		<v-main>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>
					<v-flex xs12 sm8 md4>
						<v-card elevation="0">
							<div class="text-center">
								<h1 class="mb-2">Créer un compte</h1>
							</div>
							<v-card-text>
								<v-form @submit.prevent="registerRestaurant">
									<v-text-field
										v-model="name"
										label="Entrer un nom de restaurant"
										name="name"
										prepend-inner-icon="mdi-account"
										type="text"
										class="rounded-0"
										outlined
									></v-text-field>
										<v-text-field
										v-model="address"
										label="Entrer une adresse"
										name="address"
										prepend-inner-icon="mdi-home"
										type="text"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-text-field
										v-model="email"
										label="Entrer un email"
										name="email"
										prepend-inner-icon="mdi-email"
										type="email"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-text-field
										v-model="phone"
										label="Entrer un numéro de téléphone"
										name="phone"
										prepend-inner-icon="mdi-phone"
										type="text"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-text-field
										v-model="password"
										label="Enter un mot de passe"
										name="password"
										prepend-inner-icon="mdi-lock"
										type="password"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-btn
										class="rounded-0"
										type="submit"
										color="#000000"
										x-large
										block
										dark
										>S'enregistrer</v-btn
									>
									<v-card-actions class="text--secondary">
										<v-spacer></v-spacer>
										<!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
										Vous avez déjà un compte ?
										<a href="/" class="pl-2" style="color: #000000"
											>Se connecter</a
										>
									</v-card-actions>
								</v-form>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import axios from "axios";
export default {
	name: "Register",
	data() {
		return {
			name: "",
			address: "",
			email: "",
			phone: "",
			password: "",
		};
	},
	methods: {
		async registerRestaurant() {
			await axios.post("http://api.cesieats.loc/restaurants/register", {
				name: this.name,
				address: this.address,
				email: this.email,
				phone: this.phone,
				password: this.password,
			});
			const response = await axios.post("http://api.cesieats.loc/restaurants/login", {
				email: this.email,
				password: this.password,
			});
			const token = response.data.token;
			localStorage.setItem("token", token);
			if (token) {
				this.$router.push("/orders");
			} else {
				this.$router.push("/login");
			}
		},
		async loginRestaurant() {
			const response = await axios.post("http://api.cesieats.loc/restaurants/login", {
				email: this.email,
				password: this.password,
			});
			const token = response.data.token;
			localStorage.setItem("token", token);
			if (token) {
				this.$router.push("/orders");
			} else {
				this.$router.push("/login");
			}
		},
	},
};
</script>
