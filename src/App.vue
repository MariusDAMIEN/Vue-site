<template>
  <div id="app">
    <!-- <Home />  -->
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
