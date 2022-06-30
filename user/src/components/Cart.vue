<template>
	<tr>
		<v-list-item key="1" @click="">
			<td>
				<v-list-item-avatar>
					<v-img :src="require('../assets/logo.png')"></v-img>
				</v-list-item-avatar>
			</td>
			<td>
				<v-list-item-content>
					<v-list-item-title>{{ name }}</v-list-item-title>
					<v-list-item-subtitle> </v-list-item-subtitle>
				</v-list-item-content>
			</td>
			<td>{{ price }} €</td>
		</v-list-item>
	</tr>
</template>
<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
};
</script>
