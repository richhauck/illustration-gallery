<template>

  <div id="primary-nav" v-bind:class="{'is-active': isNavOpen }" >
      <button v-on:click="toggleNav()" v-bind:class="{'is-active': isNavOpen }" class="hamburger hamburger--collapse" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <nav>
        <ul>
          <li><router-link v-on:click.native="closeNav()" to="/">Home</router-link></li>
          <li><router-link v-on:click.native="closeNav()" to="/about">About</router-link></li>
          <li><router-link v-on:click.native="closeNav()" to="/projects">Projects</router-link></li>
        </ul>
      </nav>
      
  </div>

</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import { SET_NAV_OPEN } from '../mutation-types';

export default {
  name: "PrimaryNav",
  computed: mapState([
    // create shortcut to store getter
    'isNavOpen'
  ]),
  methods: {
    ...mapMutations([
      'setNavOpen'
    ]),
    toggleNav: function () {
      this.$store.commit(SET_NAV_OPEN);
    },
    closeNav: function () {
      this.$store.commit(SET_NAV_OPEN, false);
    }
  },
  watch: {
    // Disables browser scrolling when menu is open.
    isNavOpen: function(val){
      if(val === true){
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";

  #primary-nav{    
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100%;
    
    nav{
      width: 100%;
      height: 0;
      overflow: hidden;
      
      background-color: #ccc;
    }

    &.is-active nav{
      height: 100%;
    }
  }
</style>