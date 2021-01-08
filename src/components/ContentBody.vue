<template>
  <div>
    <div class="row mt-5">
      <div
        v-for="country in countries"
        v-bind:key="country.id"
        class="col-md-3 mb-5"
      >
        <div class="card border-card" :class="{ mode: mode }">
          <div>
            <router-link :to="{ path: '/detail/' + country.alpha3Code }">
              <img
                alt="Vue logo"
                :src="country.flag"
                style="width:100%; height:150px !important;"
              />
            </router-link>
          </div>
          <div class="mt-3 card-body">
            <h5>
              <strong>{{ country.name }}</strong>
            </h5>
            <p><b>Population</b>: {{ country.population.toLocaleString() }}</p>
            <p><b>Region</b>: {{ country.region }}</p>
            <p><b>Capital</b>: {{ country.capital }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="countries == null">
      <div class="alert-warning p-3 text-center m-5">
        <h3>Please search ...</h3>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: ["countries", "mode"],
};
</script>

<style scoped>
.border-card {
  box-shadow: 2px 2px 5px 2px #c4c2c2;
  border-radius: 5px;
}

.mode {
  background-color: hsl(209, 23%, 22%) !important;
  box-shadow: 2px 2px 5px hsl(207, 26%, 17%);
}
</style>
