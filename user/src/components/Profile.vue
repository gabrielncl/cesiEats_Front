<template>
	<v-app>
		<v-main>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>
					<v-flex xs12 sm8 md4>
						<v-card elevation="0">
							<div class="text-center">
								<h1 class="mb-2">Modifier vos informations</h1>
							</div>
							<v-card-text>
								<v-form >
									<v-text-field
										name="firstname"
										prepend-inner-icon="mdi-account"
										type="text"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-text-field
										name="lastname"
										prepend-inner-icon="mdi-account"
										type="text"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-text-field
	
										name="phone"
										prepend-inner-icon="mdi-phone"
										type="text"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-text-field
	
										name="address"
										prepend-inner-icon="mdi-home"
										type="text"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-text-field
									
										name="email"
										prepend-inner-icon="mdi-email"
										type="email"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-text-field
							
										name="password"
										prepend-inner-icon="mdi-lock"
										type="password"
										class="rounded-0"
										outlined
									></v-text-field>
									<v-btn
										class="rounded-0"
										type="submit"
										color="#000000"
										x-large
										block
										dark
										>Enregistrer les modifications</v-btn>
								</v-form>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-main>
	</v-app>
</template>