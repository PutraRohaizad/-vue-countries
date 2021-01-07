<template>
  <div>
    <filtersearch></filtersearch>
    <contentbody></contentbody>
  </div>
</template>

<script>
import filtersearch from "./FilterSearch.vue";
import contentbody from "./ContentBody.vue";
export default {
  components: {
    filtersearch,
    contentbody,
  },
};
</script>

<style></style>
