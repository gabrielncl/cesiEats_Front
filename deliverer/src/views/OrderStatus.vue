<template>
  <div>
    <v-container>
      <Navbar/>
      <OrderConfirmDelivery/>
      <Footer/>
    </v-container>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar"
  import Footer from "../components/Footer"
  import OrderConfirmDelivery from "../components/OrderConfirmDelivery"

  export default ({
    name: 'OrderStatus',

    components: {
      Navbar,
      Footer,
      OrderConfirmDelivery
    },
  })
</script>

<style>
</style>