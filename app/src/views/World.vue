<template>
  <div>
  <world-header></world-header>
  <search-filter></search-filter>
  <filter-region></filter-region>
  
  </div>
  <div><country-container></country-container></div>
</template>

<script>
import SearchFilter from '@/components/SearchFilter'
import FilterRegion from '@/components/FilterRegion'
import WorldHeader from '@/components/worldHeader'
import CountryContainer from '@/components/CountryBox'


export default {
  components: {
    SearchFilter, FilterRegion, WorldHeader, CountryContainer
  }
}
</script>