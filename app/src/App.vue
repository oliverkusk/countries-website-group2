<template>
  <div class="app" :class="mode">
    <world-header :mode="mode"></world-header>
  </div>
  <router-view />
</template>

<script>
import WorldHeader from "./components/worldHeader.vue";

export default {
  name: "app",
  data() {
    return {
      mode: "light",
    };
  },
  components: {
    WorldHeader,
  },
};
</script>


    WorldHeader<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-sherif;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background-color: #f3f3f3;
  color: #15202b;
}

.dark {
  background: #192734;
  color: #f3f3f3;
}
</style>