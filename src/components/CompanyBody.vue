<template>
  <div class="body-company">
      <side-menu></side-menu>
      <router-view></router-view>
  </div>
</template>

<script>
import SideMenu from "./SideMenu.vue"

export default {
components: {
    SideMenu
}
}
</script>

<style scoped>
.body-company {
    background-color: #ffffff;
    height: calc(100vh - 140px);
    width: 100%;
    padding: 20px 8%;
    display: flex;
    overflow: auto;
}
</style>