<template>
  <div id="app">
    <router-link to="/">
      <img alt="Vue logo" src="./assets/logo.png">
    </router-link>
      <atas/>
      <router-view></router-view>
  </div>
</template>

<script>
import atas from './components/header.vue'
export default {
  name: 'App',
  components: {
    atas,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
