<template>
  <div>
    <v-container>
      <Navbar/>
      <div class="test-bleu">adzfegrhtyjukilomp</div>
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

<style>
.test-bleu {
  background: blue;
  background-color: blue;
}
</style>
