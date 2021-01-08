<template>
  <div>
    <div class="mt-5">
      <router-link to="/">
        <button class="btn shadow" :class="{mode:mode}" style="padding:2px 20px !important">
          <i class="fa fa-arrow-left"></i> Back
        </button>
      </router-link>
    </div>

    <div class="row mt-5">
      <div class="col-md-6">
        <img
          alt="Vue logo"
          :src="country.flag"
        style="width:100%; height:400px;"

        />
      </div>
      <div class="col-md-6 card-body">
        <h4>
          <b>{{ country.name }}</b>
        </h4>
        <div class="row">
          <div class="col-md-6">
            <p><b>Native Name</b> : {{ country.nativeName }}</p>
            <p><b>Population</b> : {{ country.population }}</p>
            <p><b>Region</b> : {{ country.region }}</p>
            <p><b>Sub Region</b> : {{ country.subregion }}</p>
            <p><b>Capital</b> : {{ country.capital }}</p>
          </div>
          <div class="col-md-6">
            <p>
              <b>Top Level Domain</b> :
              <span v-for="domain in country.topLevelDomain" :key="domain.code">
                {{ domain }},</span
              >
            </p>
            <p>
              <b>Currencies</b> :
              <span v-for="currency in country.currencies" :key="currency.code">
                {{ currency.name }},</span
              >
            </p>
            <p>
              <b>Languages</b> :
              <span v-for="language in country.languages" :key="language.code">
                {{ language.name }},</span
              >
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <b>Border Countries:</b>
          </div>
          <div class="col-md-8">
            <a
              :class="{mode:mode}"
              v-for="border in country.borders"
              onclick="setTimeout(function(){ location.reload() }, 500)"
              :key="border.code"
              class="border-countries btn btn-outline-dark mr-1 mb-1"
              :href="'#/detail/' + border"
              >
              {{ border }}
              </a>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props:[ 'mode'],
  data() {
    return {
      country: {},
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      axios
        .get(`https://restcountries.eu/rest/v2/alpha/${this.$route.params.alpha3Code}`)
        .then((res) => {
          console.log(res.data);
          this.country = res.data;
          
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.shadow {
  box-shadow: 2px 2px 5px 2px #c4c2c2;
  background-color: hsl(0, 0%, 98%);
}

.border-countries {
  border: 1px solid black;
  padding: 2px 10px;
}

.mode{
  background-color: hsl(209, 23%, 22%) !important;
  box-shadow: 1px 1px 1px hsl(207, 26%, 17%);
  color: #ffffff;
  border:1px solid hsl(209, 23%, 22%);
}
</style>
