<template>
  <div class="country-container">
    <div class="country">
      <div class="country__flag"></div>
      <div class="country__name">
        <div class="country__info"></div>
      </div>
    </div>
    <div class="country">
      <div class="country__flag">Flag</div>
      <div class="country__name">
        GErman
        <div class="country__info">24654564564</div>
      </div>
    </div>

    <div class="country">
      <div class="country__flag">Flag</div>
      <div class="country__name">
        GErman
        <div class="country__info">24654564564</div>
      </div>
    </div>

    <div class="country">
      <div class="country__flag">Flag</div>
      <div class="country__name">
        GErman
        <div class="country__info">24654564564</div>
      </div>
    </div>
    <div class="country">
      <div class="country__flag">Flag</div>
      <div class="country__name">
        GErman
        <div class="country__info">24654564564</div>
      </div>
    </div>
    <div class="country">
      <div class="country__flag">Flag</div>
      <div class="country__name">
        GErman
        <div class="country__info">24654564564</div>
      </div>
    </div>

    <div class="country">
      <div class="country__flag">Flag</div>
      <div class="country__name">
        GErman
        <div class="country__info">24654564564</div>
      </div>
    </div>

    <div class="country">
      <div class="country__flag">Flag</div>
      <div class="country__name">
        GErman
        <div class="country__info">24654564564</div>
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
        "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies"
      )
      .then((response) => (this.countries = response.data))
      .catch((err) => console.log(err));
  },
};
</script>
<style lang="scss" >
@import "@/assets/scss/country.scss";
</style>

