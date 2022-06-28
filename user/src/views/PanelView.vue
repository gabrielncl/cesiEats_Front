<template>
  <div class="updateUser">
	<Navbar/>
    <profile />
	<Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../components/Panel"
export default {
  components : {
    Navbar,
    Footer,
    profile
  }
};
</script>