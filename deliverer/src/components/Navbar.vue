<template>
  <v-app id="inspire" padding-bottom="3px">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="black"
      dark
    >
      <v-toolbar-title
        style="width: 350x"
      >
        <a href="/home" class="white--text" style="text-decoration: none"><v-icon>mdi-truck</v-icon>&nbsp;CesiEats</a>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />

      <v-btn icon href="/profile">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn v-on="on" href="#" icon>
        <v-badge
          content="1"
          value="1"
          color="green"
          overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      
    </v-app-bar>
  
  </v-app>
</template>
<script>

</script>
<style>
.v-application--wrap {
    min-height: 10vh;
}
</style>