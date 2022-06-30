<template>
	<div>
		<Navbar />
		<v-container>
			<v-app>
				<h1 class="mb-2 text-center">Modifier le profil</h1>
				<Profile
					v-bind:firstname="user.firstname"
					v-bind:lastname="user.lastname"
					v-bind:email="user.email"
					v-bind:address="user.address"
					v-bind:phone="user.phone"
					v-bind:password="user.password"
				/>
				<Footer />
			</v-app>
		</v-container>
	</div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import axios from "axios";
export default {
	components: {
		Navbar,
		Footer,
		Profile,
	},
	name: "User",
	data() {
		return {
			user: [],
		};
	},
	mounted() {
		axios.get("http://api.cesieats.loc/users/profile").then((response) => {
			this.user = response.data;
		});
		console.log(this.user);
	},
};
</script>
