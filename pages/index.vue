<template>
  <div class="container">
    <div>
      <AppNav />
      <AppStore :data="storedata" />
    </div>
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'
import { mapState } from "vuex";
import AppStore from '~/components/AppStore.vue'
export default {
  components: {
    AppNav,
    AppStore
  },
   computed: {
    ...mapState(["storedata"])
    
  }
 
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
