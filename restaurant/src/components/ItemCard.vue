<template>
    <div class="row">
        <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
        <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
        >
            <v-card
            :elevation="hover ? 16 : 2"
        >
            <v-img
            class="white--text align-end"
            height="200px"
            :src="require('../assets/black.jpg')"
            >
            <v-card-title>Mc Donalds </v-card-title>
            </v-img>

            <v-card-text class="text--primary text-center">
            <div>Burger, frites, wraps</div>
            </v-card-text>

            <div class="text-center">
            <v-btn
                href="/shop"
                class="ma-2"
                outlined
                color="info"
            >
                Ajouter au panier
            </v-btn>
            </div>
        </v-card>
        </v-hover>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        data () {
            return {
                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },
                ],
                activeBtn: 1,
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],
            }
        },
    }
</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>