<template>
  <div>
    <Navbar/>
    <v-container>
      <v-app>
        <h1 class="mb-2 text-center">Ajouter un article</h1>
          <AddArticle/>
        <Footer/>
      </v-app>
    </v-container>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddArticle from "../components/AddArticle";
export default {
  components : {
    Navbar,
    Footer,
    AddArticle
  }
};
</script>