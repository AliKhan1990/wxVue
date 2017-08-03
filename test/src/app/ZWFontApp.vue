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
  name: 'ZWFont',
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
  text-align: center;
}
</style>
