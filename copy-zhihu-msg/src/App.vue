<template>
  <div id="app">
    <main-content></main-content>
  </div>
</template>

<script>
import MainContent from 'src/pages/main-content/main-content.vue'

export default {
  name: 'App',
  components: {
    MainContent
  }
}
</script>

<style lang="scss">
    @import "src/assets/scss/reset.scss";
</style>
