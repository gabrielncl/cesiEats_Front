<template>
  <div>
    <Navbar />
    <v-container>
      <v-app>
        <OrderConfirmation />
      </v-app>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import OrderConfirmation from "../components/OrderConfirmation";
import Footer from "../components/Footer";

export default {
  name: "Order",

  components: {
    Navbar,
    OrderConfirmation,
    Footer,
  },
};
</script>

<style></style>
