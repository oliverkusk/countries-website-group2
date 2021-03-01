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
import Country from '@/components/Country'


export default {
  components: {
    
    Search, 
    WorldHeader, 
    Country
  }
}
</script>