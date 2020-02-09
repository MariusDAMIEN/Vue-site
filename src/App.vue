<template>
  <div id="app">
    <!-- <Home />  -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    // Home
  },
  data() {
    return {
    }
  },
}
</script>

<style>
#app {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
}

html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
}
</style>
