<template>
  <div>
    <v-container>
      <Navbar/>
      <OrderConfirmation/>
    </v-container>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar"
  import OrderConfirmation from "../components/OrderConfirmation"

  export default ({
    name: 'Orders',

    components: {
      Navbar,
      OrderConfirmation,
    },
  })
</script>

<style>

</style>