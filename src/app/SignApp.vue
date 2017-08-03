<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Api from '../components/Api';

  export default {
    name: 'company',
    data: function () {
      return {

      };
    },
    computed: { //计算属性

    },
    methods:{

    },
    created: function () {
      let str = location.href; //取得整个地址栏
      let num = str.indexOf("?");
      str = str.substr(num+11,str.length-13-num); //取得所有参数
      this.$store.userStore.commit('getUrlType',str);
    },
    mounted: function() {

    },
    components: {

    },
  };
</script>

<style>
  @import '../../node_modules/msg-notify/dist/notify.css';

  #app {
    font-family: 'Arial', sans-serif, Avenir, Helvetica;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 0;
    min-width:1200px;
  }
</style>
