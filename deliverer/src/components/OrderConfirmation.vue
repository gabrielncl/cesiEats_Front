<template>
  <v-card
    class="mx-auto"
    min-width="800"
    outlined
    
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Num commande
        </div>
        <v-list-item-title class="text-h4 mb-1">
          Nom client
        </v-list-item-title>
        <v-list-item-subtitle>Adresse</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
      href="/order-status"
        outlined
        rounded
        text
      >
        Voir la commande
      </v-btn>
    
    </v-card-actions>
  </v-card>
</template>

<script>
</script>

<style>
.v-application--wrap{
    min-height:80px !important;
}
</style>