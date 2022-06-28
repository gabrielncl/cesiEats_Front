<template>
  <div>
    <v-container>
      <Navbar/>
    </v-container>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar"

  export default ({
    name: 'Home',

    components: {
      Navbar,
    },
  })
</script>
