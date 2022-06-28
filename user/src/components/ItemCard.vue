<template>
	<div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
		<v-hover v-slot:default="{ hover }" open-delay="200">
			<v-card :elevation="hover ? 16 : 2">
				<v-img
					class="white--text align-end"
					height="200px"
					:src="require('../assets/black.jpg')"
				>
				</v-img>

				<v-card-text class="text--primary text-center">
					<div>Le hamburger</div>
				</v-card-text>
				<v-card-text class="text--primary text-center">
					<div>3.99€</div>
				</v-card-text>

				<div class="text-center">
					<v-btn href="/shop" class="ma-2" outlined color="info">
						Ajouter au panier
					</v-btn>
				</div>
			</v-card>
		</v-hover>
	</div>
</template>
