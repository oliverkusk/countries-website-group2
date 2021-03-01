<template>
  <div>
  <world-header></world-header>
  <search></search>
  <region-filter></region-filter>
  </div>
</template>

<script>
import Search from '@/components/Search'
import RegionFilter from '@/components/Filter'
import WorldHeader from '@/components/worldHeader'

export default {
  components: {
    Search, RegionFilter, WorldHeader
  }
}
</script>