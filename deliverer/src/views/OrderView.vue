<template>
  <div>
    <Navbar />
    <v-container>
      <v-app>
        <h1 class="mb-2 text-center">Commandes en attentes</h1>
        <v-row no-gutters>
          <div v-for="order in orders">
            <OrderConfirmation
              v-bind:useer="order.user"
              v-bind:description="order.description"
              v-bind:totalprice="order.totalprice"
              v-bind:id="order._id"
            ></OrderConfirmation>
          </div>
        </v-row>
      </v-app>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import OrderConfirmation from "../components/OrderConfirmation";
import Footer from "../components/Footer";
import axios from "axios";

export default {
  components: {
    Navbar,
    OrderConfirmation,
    Footer,
  },
  name: "Orders",
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    axios.get("http://api.cesieats.loc/deliv/orders").then((reponse) => {
      this.orders = response.data / orders;
      console.log(this.orders);
    });
  },
};
</script>
