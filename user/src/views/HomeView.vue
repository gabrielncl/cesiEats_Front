<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RestaurantCard from '@/components/RestaurantCard.vue'; // @ is an alias to /src

@Component({
  components: {
    RestaurantCard,
  },
})
export default class HomeView extends Vue {}
</script>
