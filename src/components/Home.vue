<template>
  <div>
    <filtersearch
      @filterSearch="filterSearch($event)"
      @filterRegion="filterRegion($event)"
    ></filtersearch>
    <contentbody :countries="filterCountries"></contentbody>
  </div>
</template>

<script>
import axios from "axios";
import filtersearch from "./FilterSearch.vue";
import contentbody from "./ContentBody.vue";
export default {
  components: {
    filtersearch,
    contentbody,
  },
  data() {
    return {
      countries: [],
      filterCountries: this.countries,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => {
          this.countries = res.data;
        })
        .catch((err) => console.log(err));
    },
    filterSearch(search) {
      this.filterCountries = this.countries.filter((country) => {
        return country.name.toLowerCase().match(search.toLowerCase());
      });
    },
    filterRegion(region) {
      this.filterCountries = this.countries.filter((country) => {
        return country.region.toLowerCase().match(region.toLowerCase());
      });
    },
  },
};
</script>

<style></style>
