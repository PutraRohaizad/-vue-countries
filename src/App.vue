<template>
  <div id="app">
    <navbar></navbar>
   <div class="container">
      <router-view></router-view>
   </div>

  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    navbar,
  }
}
</script>

<style>
#app {
  background-color: rgb(239, 245, 245);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
