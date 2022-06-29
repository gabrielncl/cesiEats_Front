<template>
	<v-container>
		<v-row no-gutters>
			<v-col sm="10" class="mx-auto">
				<v-card class="pa-5">
					<v-form ref="form" class="pa-5" enctype="multipart/form-data">
						<v-text-field
							label="Prénom"
							prepend-icon="mdi-account"
						></v-text-field>
						<v-text-field label="Nom" prepend-icon="mdi-account"></v-text-field>
						<v-text-field
							label="Adresse"
							prepend-icon="mdi-home"
						></v-text-field>
						<v-text-field label="Email" prepend-icon="mdi-email"></v-text-field>
						<v-text-field
							label="Téléphone"
							prepend-icon="mdi-phone"
						></v-text-field>
						<v-text-field
							label="Mot de passe"
							prepend-icon="mdi-lock"
						></v-text-field>

						<v-btn
							href="/add-article"
							type="submit"
							color="orange lighten-2"
							text
							>Modifier le profil</v-btn
						>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
