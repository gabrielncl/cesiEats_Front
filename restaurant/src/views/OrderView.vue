<template>
	<v-container>
		<v-app>
			<div class="article">
				<Navbar />
				<Order />
				<Footer />
			</div>
		</v-app>
	</v-container>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Order from "../components/Order";
export default {
	components: {
		Navbar,
		Footer,
		Order,
	},
};
</script>
