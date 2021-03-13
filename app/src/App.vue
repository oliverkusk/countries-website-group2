<template>
  <div class="app" :class="mode">
    <world-header :mode="mode" @toggle="toggle"></world-header>
    <router-view />
  </div>
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
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
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
  transition: background 0.3s ease-in-out;
}

.dark {
  background: #192734;
  color: #f3f3f3;
}
</style>