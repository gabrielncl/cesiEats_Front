<template>
  <div>
    <v-container>
      <Navbar/>
      <v-card
        elevation="2"
        class="title-card"
      >
      Commande n° XXXXXXX
      </v-card>
      <v-card
        elevation="2"
        class="title-card"
      >
      Détails   
        <v-btn
            icon
            @click="show = !show"
        >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              <div>
                1 burger
              </div>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar"

  export default ({
    name: 'OrderStatus',

    components: {
      Navbar,
    },
  })
</script>

<style>
.title-card {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
}
</style>