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
								<v-form @submit.prevent="registerUser">
									<v-text-field
										v-model="firstname"
										label="Entrer un prénom"
										name="firstname"
										prepend-inner-icon="mdi-account"
										type="text"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-text-field
										v-model="lastname"
										label="Entrer un nom de famille"
										name="lastname"
										prepend-inner-icon="mdi-account"
										type="text"
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
			firstname: "",
			lastname: "",
			phone: "",
			address: "",
			email: "",
			password: "",
		};
	},
	methods: {
		async registerUser() {
			await axios.post("http://api.cesieats.loc/users/register", {
				firstname: this.firstname,
				lastname: this.lastname,
				phone: this.phone,
				address: this.address,
				email: this.email,
				password: this.password,
			});
			const response = await axios.post("http://api.cesieats.loc/users/login", {
				email: this.email,
				password: this.password,
			});
			const token = response.data.token;
			localStorage.setItem("token", token);
			if (token) {
				this.$router.push("/shop/restaurants");
			} else {
				this.$router.push("/login");
			}
		},
		async loginUser() {
			const response = await axios.post("http://api.cesieats.loc/users/login", {
				email: this.email,
				password: this.password,
			});
			const token = response.data.token;
			localStorage.setItem("token", token);
			if (token) {
				this.$router.push("/shop/restaurants");
			} else {
				this.$router.push("/login");
			}
		},
	},
};
</script>
