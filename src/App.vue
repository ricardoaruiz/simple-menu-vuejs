<template>
  <div id="app">
    <rar-header />
    <router-view></router-view>
  </div>

</template>

<script>
  import RarHeader from './components/RarHeader.vue'

  export default {
    name: 'app',
    components: {
      RarHeader
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
