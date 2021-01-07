<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-3">
            <input type="text" @keyup="$emit('filterSearch', search)" v-model="search" class="form-control" placeholder="Search for  a country...">
      </div>
      <div class="col-md-6"></div>
      <div class="col-md-3">
        <select name="region" class="custom-select">
          <option value="">Select Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Ocenia">Ocenia</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search: ""
    }
  }
}
</script>

<style>

</style>