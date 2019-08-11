<template>
  <main id="app">
    <PrimaryNav />
    <transition name="fade">
      <router-view id="router-view"/>
    </transition>

  </main>
</template>

<script>
  import PrimaryNav from '@/components/PrimaryNav.vue';
  export default {
    components: {
      PrimaryNav,
    },
  }
</script>

<style lang="scss">
  html, body{
    width: 100%;
    margin:0;
    padding: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  #app {
    display: block;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #router-view{
    position: absolute;
    top: 30px;
    width: 100%;
  }
  #nav {
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
