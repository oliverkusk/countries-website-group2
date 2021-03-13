<template>
  <header class="world-header">
    <h1>Where in the world?</h1>
    <h1>{{ mode }} Mode</h1>
  </header>
</template>



<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: #c3c3c3;
  transition: background 0.3s ease-in-out;
}

header h1 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 900;
}
header nav {
  display: flex;
  align-items: center;
  padding: 0px 15px;
}
</style>