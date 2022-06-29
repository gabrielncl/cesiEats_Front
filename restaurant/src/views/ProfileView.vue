<template>
  <div>
    <Navbar/>
    <v-container>
      <v-app>
        <h1 class="mb-2 text-center">Modifier le profil</h1>
          <Profile/>
        <Footer/>
      </v-app>
    </v-container>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
export default {
  components : {
    Navbar,
    Footer,
    Profile
  }
};
</script>