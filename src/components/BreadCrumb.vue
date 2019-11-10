<template>
  <nav>
    <ol class="breadcrumb">
      <li
        class="breadcrumb-item"
        @click="toHome()"
      >
        Home
      </li>
      <li
        v-for="(breadcrumb, index) in breadcrumbList"
        :key="index"
        class="breadcrumb-item"
        @click="routeTo(index)"
      >
        <span class="breadcrumb-slash">/</span>   {{ breadcrumb.name }}
      </li>
    </ol>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      breadcrumbList: []
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    routeTo(index) {
      if (this.breadcrumbList[index].link)
        this.$router.push(this.breadcrumbList[index].link);
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    }
  },
  watch: {
    $route() {
      this.updateList();
    }
  },
  mounted() {
    this.updateList();
  }
};
</script>

<style lang="scss" scoped>

.breadcrumb {
  background-color: transparent;
  color: #A2A2A2;
  cursor: pointer;
  display: flex;
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
}

.breadcrumb-item {
  font-size: 0.8rem;
  font-weight: 500;
}

.breadcrumb-slash {
  margin: 0 10px;
}
</style>
