<template>
  <div>
    <v-container>
      <Navbar/>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text
            class=""
            tile
            outlined
          >
            <v-card-title class="subheading ">Restaurants disponible</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <Product/>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <Footer/>
    </v-container>
  </div>
</template>

<script>

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product"
export default {
  components : {
    Navbar,
    Footer,
    Product
  }
};

</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>
