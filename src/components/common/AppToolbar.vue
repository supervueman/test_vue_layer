<template>
  <header class="toolbar">
    <menu class="toolbar__menu">
      <li class="toolbar__item">
        <router-link to="/" class="toolbar__link">VueLayers</router-link>
      </li>
      <li class="toolbar__item">
        <router-link to="/native" class="toolbar__link">OpenLayers</router-link>
      </li>
    </menu>
  </header>
</template>

<script>
export default {
  name: 'AppToolbar',
};
</script>

<style lang="scss" scoped>
.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  &__menu {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding-left: 0;
  }

  &__item {
    list-style-type: none;
  }

  &__link {
    margin-right: 20px;
    color: #000;
    text-decoration: none;
  }

  .router-link-exact-active {
    color: red;
  }
}
</style>
