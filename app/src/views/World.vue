<template>
  <div>
  <world-header></world-header>
  <search></search>
  </div>
</template>

<script>
import Search from '../components/Search'
import WorldHeader from '../components/worldHeader'

export default {
  components: {
    Search, WorldHeader
  }
}
</script>