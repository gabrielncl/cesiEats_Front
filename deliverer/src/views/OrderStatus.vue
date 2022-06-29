<template>
  <div>
    <Navbar />
    <v-container>
      <v-app>
        <OrderConfirmDelivery />
      </v-app>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderConfirmDelivery from "../components/OrderConfirmDelivery";

export default {
  name: "OrderStatus",

  components: {
    Navbar,
    Footer,
    OrderConfirmDelivery,
  },
};
</script>

<style></style>
