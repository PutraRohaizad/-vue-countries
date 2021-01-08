<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white" :class="{mode:mode}">
     <div class="container">
        <a class="navbar-brand" :class="{'text-white':mode}" href="/" style="font-weight:800"><b>Where in the world?</b></a>
    
      <div id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
          <button class="btn btn-outline-dark my-2 my-sm-0" :class="{'text-white':mode, 'border-white':mode}" type="button" @click="$emit('toggleMode')">
            <element v-if="mode">
              &#x1f4a1; Light Mode
            </element>
              <element v-else>
              <i class="fa fa-moon-o"></i> Dark Mode
            </element>
          </button>
      </div>
     </div>
    </nav>
  </div>
</template>

<script>
export default {
  props:['mode']
};
</script>

<style scoped>
  .mode{
  background-color: hsl(209, 23%, 22%) !important;
  box-shadow: 1px 1px 1px hsl(207, 26%, 17%);
  color: #ffffff !important;
  border:1px solid hsl(209, 23%, 22%);
}
</style>
