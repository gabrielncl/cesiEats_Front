<template>
	<div>
		<Navbar />
		<v-container>
			<v-app>
				<h1 class="mb-2 text-center">Mes articles</h1>
				<Article />
				<v-row no-gutters>
					<div v-for="article in articles">
						<Article
							v-bind:name="article.name"
							v-bind:price="article.price"
						></Article>
					</div>
				</v-row>
				<Footer />
			</v-app>
		</v-container>
	</div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Article from "../components/Article";
import axios from "axios";

export default {
	components: {
		Navbar,
		Footer,
		Article,
	},
	name: "Articles",
	data() {
		return {
			articles: [],
		};
	},
	mounted() {
		axios
			.get("http://api.cesieats.loc/restaurants/articles")
			.then((response) => {
				this.articles = response.data.articles;
				console.log(this.articles);
			});
	},
};
</script>
<style>
.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: 0.5;
	position: absolute;
	width: 100%;
}
</style>
