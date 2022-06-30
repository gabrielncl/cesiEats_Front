<template>
	<tr>
		<td>
			<v-list-item key="1" @click="">
				<v-list-item-avatar>
					<v-img :src="require('../assets/logo.png')"></v-img>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title>{{ restaurant_name }}</v-list-item-title>
					<v-list-item-subtitle> {{ article_name }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</td>
	</tr>
</template>
<script>
export default {
	props: {
		restaurant_name: {
			type: String,
			required: true,
		},
		article_name: {
			type: Array,
			required: true,
		},
	},
};
</script>
