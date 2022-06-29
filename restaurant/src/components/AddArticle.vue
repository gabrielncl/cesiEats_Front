<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-text-field
              label="Nom"
              v-model="name"
              prepend-icon="mdi-lead-pencil"
              :rules="rules"
            ></v-text-field>
            <v-text-field
              label="Prix"
              v-model="price"
              prepend-icon="mdi-cash"
              :rules="rules"
            ></v-text-field>
            <v-textarea
              label="Description"
              v-model="description"
              prepend-icon="mdi-note-plus"
              :rules="rules"
            ></v-textarea>
            <v-file-input
              v-model="photo"
              show-size
              counter
              multiple
              label="Selectionner une image"
              :rules="rules"
            ></v-file-input>

            <v-btn
              @change="selectFile"
              href="/add-article"
              type="submit"
              color="orange lighten-2"
              text
              >Ajouter l'article</v-btn
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
  name: "AddArticle",
  data() {
    return {
      rules: [(value) => !!value || "Ce champs est obligatoire!"],
      name: "",
      price: "",
      description: "",
      photo: "",
    };
  },
  methods: {
    selectFile(file) {
      this.photo = file[0];
    },
    async submitForm() {
      await axios.post("http://api.cesieats.loc/restaurants/article/create", {
      name: this.name,
      price: this.price,
      description: this.description,
      photo: this.photo,
      });
    },
  },
};
</script>
