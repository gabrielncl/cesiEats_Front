<template>
  <div>
    <v-container>
      <Navbar />
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text class="" tile outlined>
            <v-card-title class="subheading">Notre carte</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <Product />
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
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
            <div class="item-name">Ze Hamburger</div>
            <div class="item-desc">Ceci est une description très detaillée avec des détails qui détaillent voila :)</div>
          </v-card-text>

          <div class="text-center add-cart-button">
            <v-btn class="ma-2" outlined color="info"> Add to cart </v-btn>
          </div>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      activeBtn: 1,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
export default {
  components: {
    Navbar,
    Footer,
    ItemCard,
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.item-name{
  font-weight: bold;
  text-align: center;
}

.add-cart-button{
  align-items: center;
  text-align: center;
}
</style>
