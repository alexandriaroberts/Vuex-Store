<template>
<div>
    <!-- Todo: Binding all data and display it -->
    <h1>Your Cart</h1>
  <section>
      <table>
          <tr>
              <th>Product</th>
               <th>Price</th>
                <th>Quantity</th>
                 <th>Total</th>
          </tr>
          <tr v-for="item in cart" :key="item.id">
              <td>
                  <h3>{{ item.name }}</h3>
              </td>
              <td>
                  <h4>{{ item.price}}</h4>
              </td>
              <td>
                  <strong>{{ item.quantity }}</strong>
              </td>
              <td>
                  {{item.quantity * item.price }}
              </td>
          </tr>
      </table>

  </section>

</div>
</template>

<script>
import { mapState} from 'vuex';
import { mapGetters } from "vuex";

export default {
    
    computed: {
        ...mapState(["cart"]),
        ...mapGetters(["cartCount"])
    }
};
</script>

<style lang="scss" scoped>

</style>