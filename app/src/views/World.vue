<template>
  <search-filter></search-filter>
  <filter-region></filter-region>
  <country-container></country-container>
</template>

<script>
import SearchFilter from "@/components/SearchFilter";
import FilterRegion from "@/components/FilterRegion";

import CountryContainer from "@/components/CountryBox";
export default {
  components: {
    SearchFilter,
    FilterRegion,
    CountryContainer,
  },
};
</script>