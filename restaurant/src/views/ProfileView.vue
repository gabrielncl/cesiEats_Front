<template>
  <div>
    <Navbar />
    <v-container>
      <v-app>
        <h1 class="mb-2 text-center">Modifier le profil</h1>
        				<EditArticle
					v-bind:id="restaurant._id"
					v-bind:name="restaurant.name"
					v-bind:price="restaurant.email"
					v-bind:description="restaurant.description"
					v-bind:photo="restaurant.photo"
				/>
        <Footer />
      </v-app>
    </v-container>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import axios from "axios";
export default {
  components: {
    Navbar,
    Footer,
    Profile,
  },
  name: "Restaurants",
  date() {
    return {
      restaurant: [],
    };
  },
  mounted() {
    const url = window.location.href;
    const id = url.split("/")[url.split("/").length - 1];
    axios
      .get("http://api.cesieats.loc/restaurants/restaurant/" + id)
      .then((response) => {
        this.restaurant = response.data.restaurant;
        console.log(this.restaurant);
      });
  },
};
</script>
