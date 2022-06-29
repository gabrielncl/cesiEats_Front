<template>
	<div>
		<Navbar />
		<v-container>
			<v-app>
                <h1 class="mb-2 text-center">Commander Articles & Menus</h1>
				<v-row no-gutters>
					<div v-for="article in articles">
						<Article
							v-bind:name="article.name"
							v-bind:id="article._id"
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
		const url = window.location.href;
		const id = url.split("/")[url.split("/").length - 2];
		console.log(id);
		axios.get("http://api.cesieats.loc/shop/" + id).then((response) => {
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
