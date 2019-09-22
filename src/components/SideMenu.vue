<template>
  <div class="side-menu">

      <ul>
          <li class="side-menu-item">
              <router-link to="/companydata"> Company Data</router-link>
          </li>
          <li class="side-menu-item">
              <router-link to="/companytable"> Company Table</router-link>
          </li>
          <li class="side-menu-item">
              <router-link to="/companypage"> Company Page </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .side-menu {
        width: 300px;
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