<template>
	<div>
		<Navbar />
		<v-container>
			<v-app>
				<h1 class="mb-2 text-center">Modifier un article</h1>
				<EditArticle
					v-bind:id="article._id"
					v-bind:name="article.name"
					v-bind:price="article.price"
					v-bind:description="article.description"
					v-bind:photo="article.photo"
				/>
				<Footer />
			</v-app>
		</v-container>
	</div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EditArticle from "../components/EditArticle";
import axios from "axios";
export default {
	components: {
		Navbar,
		Footer,
		EditArticle,
	},
	name: "Articles",
	data() {
		return {
			article: [],
		};
	},
	mounted() {
		const url = window.location.href;
		const id = url.split("/")[url.split("/").length - 1];
		axios
			.get("http://api.cesieats.loc/restaurants/article/" + id)
			.then((response) => {
				this.article = response.data.article;
				console.log(this.article);
			});
	},
};
</script>
