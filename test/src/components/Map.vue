<template>

  <div class="page" v-bind:style="mapStyle">
    <!--<baidu-map class="map" >-->
    <!--</baidu-map>-->
    <el-amap vid="amapDemo" :plugin="plugin">

    </el-amap>
    <div  class="panel-group panel-group-continuous map-right animated bounceInRight" id="exampleAccordionDefault" aria-multiselectable="true" role="tablist">
        <MapGroupItem v-for="item in listData" :itemData="item" ></MapGroupItem>
    </div>

  </div>

</template>

<script>
  import Vue from 'vue';
  import AMap from 'vue-amap';
  import MapGroupItem from './Map_Group_Item.vue';
  Vue.use(AMap);
  AMap.initAMapApiLoader({
    key: 'bcece7b0b7796c97e44eddc0937bd5d4',
    plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  });
//  console.log(AMap);
//  import bmap from 'vue-baidu-map';
//  console.log('bmap is');
//
//  console.log(bmap);
//  Vue.use(bmap, {
//     ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//    ak: 'XwtVSgRYzwv4Ra3Od36Y5L7z',
//  });
  export default {
    name: 'map',
    components: {
      AMap,
      MapGroupItem,
    },
    mounted() {
      const that = this;
      window.onresize = function() {
        that.mapStyle.height = document.body.clientHeight -66 + 'px';
      };
    },
    data: function() {
      return {
        msg: 'Welcome to Your Vue.js App',
        listData: [
          {
              id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: 4,
          },
          {
            id: 5,
          },
          {
            id: 6,
          },
          {
            id: 7,
          },
          {
            id: 8,
          },
          {
            id: 9,
          },
          {
            id: 10,
          },
        ],
        mapStyle: {
          height: document.body.clientHeight -66 + 'px',
          margin: '0 10px',
          maxWidth: '2000px',
        },
        plugin: ['OverView', 'Scale', 'ToolBar', 'MapType'],
      };
    },
};
</script>
<style>

  .map {
    width: 100%;
    height: 100%;
  }
  .map-right {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 400px;
    margin-bottom: 0;
    overflow: auto;
  }
</style>


