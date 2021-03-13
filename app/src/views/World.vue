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
  components: {
    SearchFilter,
    FilterRegion,
    CountryContainer,
  },
};
</script>