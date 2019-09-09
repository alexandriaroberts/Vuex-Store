<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span>{{ product.id }}</span>
        <p>{{ product.model }}</p>
        <p>{{ product.description }}</p>
        
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      required: true
    }
  },

  computed: {
    products() {
      return this.data.map(el => el);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>