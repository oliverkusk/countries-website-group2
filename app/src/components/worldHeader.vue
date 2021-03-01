<template>
    <div class="world-header">
        <h1>Where in the world?</h1>
        <button @click="darkThemeSwitch" class="theme__button">Dark Mode</button>
    </div>
</template>
<style lang="scss">
@import '@/assets/scss/world-header.scss';
</style>
<script>
import themeChanger from "../theme.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      themeChanger: null,
    };
  },
  methods: {
    darkThemeSwitch() {
      this.themeChanger._darkThemeSwitch();
    },
  },
  created() {
    this.themeChanger = new themeChanger();
  },
};
</script>