<template>
  <div id="app">
    <navbar @toggleMode="toggleMode" ></navbar>
   <div class="container">
      <router-view></router-view>
   </div>

  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
export default {
  name: 'App',
  data(){
    return{
      mode: false
    }
  },
  components: {
    navbar,
  },
  methods:{
    toggleMode(){
        const app = document.querySelector('#app');
        this.mode = !this.mode;
        console.log(this.mode);
            if(this.mode){
              app.style.backgroundColor = "hsl(207, 26%, 17%)";
              app.style.color = "white";
            } else{
              app.style.backgroundColor = "white";
              app.style.color = "black";
            }
    }
  }
}
</script>

<style>
#app {
  background-color: hsl(0, 0%, 98%);
  font-family: 'Nunito Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
