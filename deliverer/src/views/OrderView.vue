<template>
  <div>
    <v-container>
      <Navbar/>
      <OrderConfirmation/>
      <Footer/>
    </v-container>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar"
  import OrderConfirmation from "../components/OrderConfirmation"
  import Footer from "../components/Footer"

  export default ({
    name: 'Order',

    components: {
      Navbar,
      OrderConfirmation,
      Footer
    },
  })
</script>

<style>

</style>