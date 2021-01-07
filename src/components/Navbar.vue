<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container">
        <a class="navbar-brand" href="/"><b>Where in the world?</b></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
