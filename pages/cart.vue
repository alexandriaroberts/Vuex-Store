<template>
 
   <div>
       
      <AppNav />
      <AppCartDisplay />
    </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'
import AppCartDisplay from "~/components/AppCartDisplay.vue";
import { mapState} from 'vuex';
import { mapGetters } from "vuex";
export default {
  components: {
    AppCartDisplay,
    AppNav
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
</style>