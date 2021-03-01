<template>
  <div>
  <world-header></world-header>
  <search></search>
  <country-container></country-container>

  </div>
</template>

<script>
import Search from '@/components/Search'
import WorldHeader from '@/components/worldHeader'
import CountryBox from '@/components/CountryBox'


export default {
  components: {
    
    Search, 
    WorldHeader, 
    CountryBox
  }
}
</script>