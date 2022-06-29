<template>
  <div>
    <v-container>
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
          <div>
            <v-divider></v-divider>
            <v-card-text>
              <div>
                1 burger
              </div>
            </v-card-text>
          </div>
      </v-card>
      <v-card
        elevation="2"
        class="title-card"
      >
      Adresse de livraison   
          <div>
            <v-divider></v-divider>
            <v-card-text>
              <div>
                Adresse
              </div>
            </v-card-text>
          </div>
      </v-card>
        <v-btn
          rounded
          dark
          :style="{left: '50%', transform:'translateX(-50%)'}"
          class="button-confirm"
        >
          Confirmer la livraison
        </v-btn>
    </v-container>
  </div>
</template>

<script>

</script>

<style>
.title-card {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    margin-top: 20px;
}

.button-confirm {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>