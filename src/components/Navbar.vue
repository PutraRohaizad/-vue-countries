<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
     <div class="container">
        <a class="navbar-brand" href="/" style="font-weight:800"><b>Where in the world?</b></a>
    
      <div id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
          <button class="btn btn-outline-dark my-2 my-sm-0" type="button" @click="$emit('toggleMode')">
           <i class="fa fa-moon-o"></i> Dark Mode
          </button>
      </div>
     </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
