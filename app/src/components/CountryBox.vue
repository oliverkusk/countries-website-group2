<template>
  <div class="country-container">
    <div class="country" v-for="country in countries" :key="country.name">
      <div class="country__flag">
        <img :src="country.flag" alt="" />
      </div>
      <div class="country__name">
        {{ country.name }}
        <div class="country__info">
          <div class="population">
            <p>Population: {{ country.population }}</p>
          </div>
          <div class="Region">
            <p>Region: {{ country.region }}</p>
          </div>

          <div class="capital">
            <p>Capital: {{ country.capital }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      countries: [],
    };
  },
  created() {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;region;population"
      )
      .then((response) => (this.countries = response.data))
      .catch((err) => console.log(err));
  },
};
</script>
<style lang="scss" >
@import "@/assets/scss/country.scss";
</style>

