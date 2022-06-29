<template>
  <div>
    <Navbar/>
    <v-container>
      <v-app>
        <h1 class="mb-2 text-center">Modifier un article</h1>
          <EditArticle/>
        <Footer/>
      </v-app>
    </v-container>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EditArticle from "../components/EditArticle";
export default {
  components : {
    Navbar,
    Footer,
    EditArticle
  }
};
</script>