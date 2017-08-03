<template>
  <div id="app" >

    <NoNav></NoNav>
    <NoMenu></NoMenu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import global_ from '../components/Global';
  import NoNav from '../components/NoNav';
  import NoMenu from '../components/NoMenu';

  Vue.prototype.GLOBAL = global_;


export default {
  name: 'Register',
  data: function() {
    return {};
  },
  created: function() {
  },
  components: {NoNav, NoMenu},
};
</script>

<style>
#app {
  padding-top: 66.01px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 0px;
}
</style>
