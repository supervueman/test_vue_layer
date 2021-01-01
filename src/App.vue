<template>
  <div id="app">
    <app-toolbar />
    <router-view/>
  </div>
</template>

<script>
import AppToolbar from '@/components/common/AppToolbar.vue';

export default {
  name: 'App',

  components: {
    AppToolbar,
  },
};
</script>

<style lang="scss" scoped>
#app {
  padding-top: 40px;
}
</style>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

html, body {
  width: 100%;
}
</style>
