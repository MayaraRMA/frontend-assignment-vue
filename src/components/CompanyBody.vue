<template>
  <div class="body-company" >
    <bread-crumb></bread-crumb>
    <div class="company-content">
        <side-menu></side-menu>
        <router-view></router-view>
    </div>  
  </div>
</template>

<script>
import BreadCrumb from "./BreadCrumb.vue";
import SideMenu from "./SideMenu.vue"

export default {
components: {
    BreadCrumb,
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
    overflow: auto;
}

.company-content {
    display: flex;
    margin-top: 20px;
}
</style>