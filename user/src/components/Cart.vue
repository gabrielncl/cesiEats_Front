<template>
  <tr>
    <td>
      <v-list-item key="1" @click="">
        <v-list-item-avatar>
          <v-img :src="require('../assets/logo.png')"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Nom de l'article</v-list-item-title>
          <v-list-item-subtitle>Nom du restaurant</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </td>
    <td>40.00 euros</td>
    <td>
      <v-text-field
        class="pt-10"
        label="Outlined"
        style="width: 80px"
        single-line
        outlined
        value="2"
        type="number"
      ></v-text-field>
    </td>
    <td>80.00 euros</td>
    <td><a>X</a></td>
  </tr>
</template>
<script></script>
