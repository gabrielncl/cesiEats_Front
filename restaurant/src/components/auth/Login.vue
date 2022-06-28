<template>
	<v-app>
		<v-main>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>
					<v-flex xs12 sm8 md4>
						<v-card elevation="0">
							<div class="text-center">
								<h1 class="mb-2">Connexion</h1>
							</div>
							<v-card-text>
								<v-form @submit.prevent="loginRestaurant">
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
										label="Entrer un mot de passe"
										name="password"
										prepend-inner-icon="mdi-lock"
										type="password"
										suffix="| Oublié?"
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
										>Se connecter</v-btn
									>
									<v-card-actions class="text--secondary">
										<v-spacer></v-spacer>
										<!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
										Pas de compte?
										<a href="/register" class="pl-2" style="color: #000000"
											>S'inscrire</a
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
	name: "Login",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		async loginRestaurant() {
			const response = await axios.post("http://api.cesieats.loc/restaurants/login", {
				email: this.email,
				password: this.password,
			});
			const token = response.data.token;
			localStorage.setItem("token", token);
			if (token) {
				this.$router.push("/home");
			} else {
				this.$router.push("/");
			}
		},
	},
};
</script>
