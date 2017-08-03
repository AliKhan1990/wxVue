<template>
  <div class="title-bg animation-slide-top">
    <div class="title-header">
      <div class="title-name ">
        {{welcome}}
      </div>
      <div class="title-name  navbar-right">
         今天是&nbsp;{{ today }}&nbsp;|&nbsp;
          <a> 用户登录</a>
      </div>
      <div class="title-logo"> </div>
      <div class="title-search-container row" >
        <div class="col-xs-6 offset-xs-3">
          <div class="form-group">
            <div class="input-search">
              <i class="input-search-icon md-search" aria-hidden="true"></i>
              <input type="text" class="form-control" name="" placeholder="请输入搜索关键词">
              <button type="button" class="btn btn-round btn-primary waves-effect btn-search-right btn-warning" aria-label="Close">
                搜索
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="title-search-recommend">
        <div class="col-xs-6 offset-xs-3">
          热门搜索：
          <button v-for="recommend in recommeds" type="button" class="btn btn-xs btn-round btn-info waves-effect" style="margin: 0 5px; padding: 1px 10px;" aria-label="Close">
            {{recommend}}
          </button>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

  export default {
    name: 'zwfontheader',
    components: {

    },
    mounted() { },
    data: function() {
      var chars = ['一', '二', '三', '四', '五', '六', '日'];
      return {
          welcome: '欢迎您进入吉林市电子政务平台',
          name: '吉林市电子政务平台',
          today: new Date().getFullYear() + '年'
          + (new Date().getMonth() + 1)
          + '月' + new Date().getDate() + '日'
          + ' 星期' + chars[new Date().getDay()-1],
        recommeds: ['环保', '教育', '重大项目', '证件审批', '新政策'],
      };
    },
    methods: { },
};
</script>
<style>
  .title-bg{
    background-image: url(http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/img_bg.jpg);
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: center;
    overflow-x: hidden;
  }
  .title-header{
    height: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
  }
  .title-name{
    vertical-align: middle;
    line-height: 50px;
    display: inline-block;
    text-align: center;
    padding: 0 30px;
  }
  .title-logo{
    background-image: url(http://7xpmqq.com1.z0.glb.clouddn.com/image/zwnw/logo.png);
    height: 100px;
    margin: 40px auto;
    background-repeat: no-repeat;
    background-position: center;
  }
  .btn-search-right{
    position: absolute;
    right:0 ;
    top: 0;
  }
</style>


