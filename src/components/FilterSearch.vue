<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-3">
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text bg-white" :class="{mode:mode}" id="basic-addon1"><i class="fa fa-search"></i></span>
        </div>
        <input
          :class="{mode:mode}"
          type="text"
          @keyup="$emit('filterSearch', search)"
          v-model="search"
          class="form-control "
          placeholder="Search for  a country..."
        />
        </div>
      </div>
      <div class="col-md-6"></div>
      <div class="col-md-3">
        <select
          :class="{mode:mode}"
          name="region"
          class="custom-select"
          v-model="region"
          @change="$emit('filterRegion', region)"
        >
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
  props:['mode'],
  data() {
    return {
      search: "",
      region: "",
    };
  },
};
</script>

<style scoped>
.mode{
  background-color: hsl(209, 23%, 22%) !important;
  box-shadow: 1px 1px 1px hsl(207, 26%, 17%);
  color: #ffffff;
  border:1px solid hsl(209, 23%, 22%);
}

</style>
