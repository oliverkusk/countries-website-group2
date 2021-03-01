<template>
  <div>
  <world-header></world-header>
  <search></search>
  <region-filter></region-filter>
  <country-container></country-container>

  </div>
</template>

<script>
import Search from '@/components/Search'
import RegionFilter from '@/components/Filter'
import WorldHeader from '@/components/worldHeader'
import CountryContainer from '@/components/CountryBox'

export default {
  components: {
    Search, RegionFilter, WorldHeader, CountryContainer
  }
}
</script>