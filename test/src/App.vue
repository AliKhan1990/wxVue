<template>
  <div id="app" >
    <ihNav :user="true" :message="true" :push="true" :menuleft="true" ></ihNav>
    <ihMenu  v-bind:menus="menus"></ihMenu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import ihNav from './components/Nav';
  import ihMenu from './components/Menu';
  import BaiduMap from 'vue-baidu-map';
  import global_ from './components/Global';
  Vue.prototype.GLOBAL = global_;
  Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'XwtVSgRYzwv4Ra3Od36Y5L7z',
  });

export default {
  name: 'app',
  data: function() {
    return {
      menus: [
          {id: 1, icon: '', text: '高德地图', link: '/#/map'},
          {id: 2, icon: '', text: '快速注册', children: [
            {id: 3, icon: '', text: '填写手机号', link: '/#/registerPhone'},
          ]},
      ],
    };
  },
  created: function() {
    console.log(this);
    this.$store.userStore.commit('refresh');
    console.log(this.$store.userStore);
  },
  components: {ihNav, ihMenu, BaiduMap},
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
