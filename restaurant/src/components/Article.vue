<template>
	<v-card class="mx-auto my-12" max-width="344">
		<v-img
			src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
			height="200px"
		></v-img>

		<v-card-title> name </v-card-title>

		<v-card-subtitle> price € </v-card-subtitle>

		<v-card-actions>
			<v-btn color="orange lighten-2" text> Modifier l'article </v-btn>

			<v-spacer></v-spacer>

			<v-btn icon @click="show = !show">
				<v-icon>show ? "mdi-chevron-up" : "mdi-chevron-down" </v-icon>
			</v-btn>
		</v-card-actions>

		<v-expand-transition>
			<div v-show="show">
				<v-divider></v-divider>

				<v-card-text>
                     description
				</v-card-text>
			</div>
		</v-expand-transition>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		show: false,
	}),
	props: {
		name: {
			type: String,
			required: true,
		},
	},
};
</script>
