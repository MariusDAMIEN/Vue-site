<template>
  <div id="app" :style="{ backgroundImage: `url('${image}')` }">
    <Home /> 
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  data() {
    return {
      image: require("@/assets/images/background.jpg")  
    }
  },
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
