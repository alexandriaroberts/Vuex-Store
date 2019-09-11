<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id" class="product">
        <span>{{ product.id }}</span>
        <p>{{ product.model }}</p>
        <p>{{ product.description }}</p>
        <button @click="cartAdd">Add To Cart</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState} from 'vuex';
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      quantity: 1,
      tempcart: []
    };
  },
  props: {
    data: {
      required: true
    }
  },

  computed: {
    products() {
      return this.data.map(el => el);
      
    },
      ...mapState(["cart"]),
        ...mapGetters(["cartCount"])
  },
  methods: {
    cartAdd() {
      let item = this.product;
      this.quantity++;
      this.tempcart.push(item);
      this.$store.commit("addToCart", { ...item });
    
    }
  }
};
</script>
<style lang="scss" scoped>
.product {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}
</style>