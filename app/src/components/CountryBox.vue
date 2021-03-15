<template>
  <div class="filter">
    <input type="text" v-model="name" placeholder="Search for a country.." />

    <select v-model="country">
      <option value="" disabled selected hidden>Filter by Region</option>
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option valeu="Americas">Americas</option>
      <option valeu="Asia">Asia</option>
      <option valeu="Europe">Europe</option>
      <option valeu="Oceania">Oceania</option>
    </select>
  </div>
  <div class="country-container">
    <div class="country" v-for="country in filterC" :key="country.name">
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
      country: "",
      name: "",
    };
  },
  computed: {
    filterC: function () {
      return this.countries.filter(
        (country) =>
          !country.region.indexOf(this.country) &&
          !country.name.toLowerCase().indexOf(this.name.toLowerCase())
      );
    },
  },
  created() {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;region;population;all"
      )
      .then((response) => (this.countries = response.data))
      .catch((err) => console.log(err));
  },
};
</script>
<style lang="scss" >
@import "@/assets/scss/country.scss";
</style>

data() {
    return {
      category: "",
      products: [
        { name: "Keyboard", price: 44, category: "Accessories" },
        { name: "Mouse", price: 20, category: "Accessories" },
        { name: "Monitor", price: 399, category: "Accessories" },
        { name: "Dell XPS", price: 599, category: "Laptop" },
        { name: "MacBook Pro", price: 899, category: "Laptop" },
        { name: "Pencil Box", price: 6, category: "Stationary" },
        { name: "Pen", price: 2, category: "Stationary" },
        { name: "USB Cable", price: 7, category: "Accessories" },
        { name: "Eraser", price: 2, category: "Stationary" },
        { name: "Highlighter", price: 5, category: "Stationary" },
      ],
    };
  },
  computed: {
    filterProductsByCategory: function () {
      return this.products.filter(
        (product) => !product.category.indexOf(this.category)
      );
    },
  },


   computed: {
        countries: function () {
          return this.country.filter(
            (country) => !country.countries.indexOf(this.country)
          );
        },
      },

                  filterProductsByName: function() {
                return this.products.filter(product => !product.name.indexOf(this.name))
            },