<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-form class="pa-5" @submit.prevent="updateRestaurant">
            <v-text-field
              v-model="name"
              label="Nom"
              prepend-icon="mdi-account"
              >{{ name }}</v-text-field
            >
            <v-text-field
              label="Adresse"
              v-model="address"
              prepend-icon="mdi-home"
              >{{ address }}</v-text-field
            >
            <v-text-field
              v-model="email"
              label="Email"
              prepend-icon="mdi-email"
              >{{ email }}</v-text-field
            >
            <v-text-field
              v-model="phone"
              label="Téléphone"
              prepend-icon="mdi-phone"
              >{{ phone }}</v-text-field
            >
            <v-text-field
              v-model="password"
              label="Mot de passe"
              prepend-icon="mdi-lock"
              >{{ password }}</v-text-field
            >
            <v-btn
              href="/login"
              type="submit"
              color="orange lighten-2"
              text
              >Modifier le profil</v-btn
            >
            <v-btn color="red" text v-on:click="deleteRestaurant"
              >Supprimer mon profil</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  methods: {
    async updateRestaurant() {
      const response = await axios.put(
        "http://api.cesieats.loc/restaurants/update/" + this.id,
        {
          name: this.name,
          address: this.address,
          email: this.email,
          phone: this.phone,
          password: this.password,
        }
      );
      console.log(response);
    },
    async deleteRestaurant() {
      const response = await axios.delete(
        "http://api.cesieats.loc/restaurants/delete/" + this.id
      );
      console.log(response);
    },
  },
};
</script>
