<template>
<v-card class="mx-auto my-12" max-width="344">
  	<v-card-title> {{ name }} </v-card-title>
		<v-card-subtitle> {{ price }} € </v-card-subtitle>
    <v-card-text>{{ description }}</v-card-text>
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
