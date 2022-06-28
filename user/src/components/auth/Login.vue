<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card elevation="0">
              <div class="text-center">
                <h1 class="mb-2">Connexion</h1>
              </div>
              <v-card-text>
                <v-form @submit.prevent="loginUser">
                  <v-text-field
                    v-model="login.email"
                    label="Entrer un email"
                    name="email"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    class="rounded-0"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="login.password"
                    label="Entrer un mot de passe"
                    name="password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    suffix="| Oublié?"
                    class="rounded-0"
                    outlined
                  ></v-text-field>
                  <v-btn class="rounded-0" type="submit" color="#000000" x-large block dark
                    >Se connecter</v-btn
                  >
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
                    <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                    Pas de compte?
                    <a href="/register" class="pl-2" style="color: #000000"
                      >S'inscrire</a
                    >
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/user/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "Login Successful", "Error");
          this.$router.push("/home");
        }
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    },
  },
};
</script>
