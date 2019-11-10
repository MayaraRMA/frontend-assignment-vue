<template>
  <div class="side-menu">
    <ul>
        <li class="side-menu-item" @click="goToRoute('companydata')">
            Company Data
        </li>
        <li class="side-menu-item" @click="goToRoute('companytable')">
            Company Table
        </li>
        <li class="side-menu-item" @click="goToRoute('companypage')">
            Company Page
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    methods: {
     goToRoute(route) {
        this.$router.push(route);
     }   
    }
}
</script>

<style scoped>
    .side-menu {
        min-width: 300px;
        margin-right: 20px;
    }
   .side-menu-item {
        list-style: none;
        text-transform: uppercase;
        color: #556295;
        font-size: 0.8rem;
        padding: 25px;
        border: 1px solid #D8DCE5;
        border-bottom: none;
        cursor: pointer;
    }
    .side-menu-item:first-child {
        border-radius: 5px 5px 0 0;
    }
    .side-menu-item:last-child {
        border-radius: 0 0 5px 5px;
        border-bottom: 1px solid #D8DCE5;
    }
</style>