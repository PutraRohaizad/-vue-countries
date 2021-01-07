<template>
  <div>
    <div class="row mt-5">
      <div
        v-for="country in countries"
        v-bind:key="country.id"
        class="col-md-3 mb-5"
      >
        <div class="card border-card card-body">
          <div>
            <router-link :to="{ path: '/detail/' + country.alpha3Code }">
              <img
                alt="Vue logo"
                :src="country.flag"
                style="width:100%; height:130px !important;"
              />
            </router-link>
          </div>
          <div class="mt-3">
            <h5>
              <strong>{{ country.name }}</strong>
            </h5>
            <p><b>Population</b>: {{ country.population }}</p>
            <p><b>Region</b>: {{ country.region }}</p>
            <p><b>Capital</b>: {{ country.capital }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['countries']
};
</script>

<style scoped>
.border-card {
  box-shadow: 2px 2px 5px 2px #c4c2c2;
}
</style>
