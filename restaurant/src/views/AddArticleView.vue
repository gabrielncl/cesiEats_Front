<template>
  <div class="article">
    <Navbar />
        <Article/>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Article from "../components/AddArticle";
export default {
  components : {
    Navbar,
    Footer,
    Article
  }
};
</script>