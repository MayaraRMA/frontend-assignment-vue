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
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
</style>