<template>
   <div class="app">
        <nav-bar></nav-bar>
        <company-body></company-body>
        <footer-bar></footer-bar>
   </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import CompanyBody from "./components/CompanyBody.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
    components: {
        NavBar,
        CompanyBody,
        FooterBar
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
</style>