<template>
  <div class="card">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
props: {
    title: {
        type: String
    }
}
}
</script>

<style scoped>
    .card {
        border: 1px solid #D8DDE6;
        border-radius: 5px;
    }

    .card-title {
        text-transform: uppercase;
        padding: 15px;
        font-size: 0.75rem;
        color:#656565;
        border-bottom: 1px solid #D8DDE6
    }
    .card-content {
        padding: 20px;
    }
</style>