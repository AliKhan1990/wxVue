<template>

  <div class="page-accountproxy page vertical-align text-xs-center" data-animsition-in="fade-in" data-animsition-out="fade-out">
    <div class="page-content vertical-align-middle">
      <div class="panel panel-accountproxy">
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-12" >
              <div role="alert" class="alert dark alert-info alert-avatar alert-dismissible" style="text-align: left;;">
                <button aria-label="Close" data-dismiss="alert" class="close" type="button">
                  <span aria-hidden="true">×</span>
                </button>
                <span class="avatar">
                    <img v-img-qiniu-logo :data-url="display.avatar" src="http://static.thewallet.com.cn/remark/global/portraits/5.jpg">
                  </span>
                <h4>{{ fullname}}</h4>
                <p>
                  {{ comment }}
                </p>
              </div>
              <hr>
            </div>
          </div>

          <div class="brand">
            <img v-img-qiniu-logo :data-url="app.iconUrl"   class="brand-img" src="http://static.thewallet.com.cn/remark/center/assets//images/logo-blue.png" alt="...">
            <h2 class="brand-text font-size-18">{{ app.appName}}</h2>
          </div>

          <div v-if="loadding" class="loader-index" style="margin: 80px auto 20px;">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p v-if="loadding" >正在使用
            <span class="jump-account">{{ account }}</span>登陆系统，请稍后...</p>
          <a v-if="showChangeBtn && loadding" href="javascript:void(0)"
            class="btn-line pull-right" @click="changeAccount"> 切换用户 </a>
          <form v-if="!loadding" method="post" action="#" autocomplete="off">
            <div class="form-group form-material floating" data-plugin="formMaterial">
              <input v-model="account"
                     v-bind:class="account?'':'empty'"
                     type="input" class="form-control" name="username">
              <label class="floating-label">用户名</label>
            </div>
            <div class="form-group form-material floating" data-plugin="formMaterial">
              <input  v-model="password"  type="password"
                      v-bind:class="password?'':'empty'"
                      class="form-control" name="password">
              <label class="floating-label">密码</label>
            </div>
            <!--<div class="form-group clearfix">-->
              <!--<div class="checkbox-custom checkbox-inline checkbox-primary checkbox-lg pull-xs-left">-->
                <!--<input type="checkbox" id="inputCheckbox" name="remember">-->
                <!--<label for="inputCheckbox">保存信息</label>-->
              <!--</div>-->

            <!--</div>-->
            <button type="button" @click="jump" class="btn btn-primary btn-block btn-lg m-t-40">跳转</button>
          </form>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import Api from './Api';

  export default {
    name: 'AccountProxy',
    components: { },
    computed: {
      fullname: function(){ return this.display.lastName + this.display.firstName ;},
      appkey: function(){ return '300208';},
      comment: function() { return '即将跳转到应用'+ (this.app.appName || '') +'，请填写应用的用户名和密码，用户中心将授权跳转。' },
    },
    beforeMount(){
    },
    beforeUpdate(){
    },
    mounted() {
      this.load();
    },
    data: function() {
      return {
        account: 'account',
        password: '',
        loadding: false,
        showChangeBtn: true,
        display: {},
        app: {},
        timer:null
      };
    },
    methods: {
        load: function(){
            var that = this;
            Api.accountProxyApi.display({
                appkey: this.appkey
            }).done(function(result){
              that.display = result.auth;
              that.app = result.appInfo;
              console.log(result);
              if(result.hasAccount) {
                that.loadding = true;
                that.showChangeBtn = true;
                that.timer = setTimeout(function(){
                  that.jump.apply(that);
                }, 2000)
              }


            }).fail(function(e){
              console.error(e);
              alertify.error(e.message);
            })
        },
      changeAccount: function(){
          this.loadding = false;
          clearTimeout(this.timer);
      },
      jump: function(){
          this.loadding = true;
          var that = this;

          Api.accountProxyApi.setAccount({
              account: this.account,
              password: this.password,
            appkey: this.appkey

          }).done(function(success) {
            Api.accountProxyApi.getJumpData({
              appkey: that.appkey
            }).done(function(jumpData) {

              var form = $('<form></form>');
                for(var i in jumpData) {
                    var input = $('<input />');
                    input.attr('type' ,'hidden');
                    input.val(jumpData[i]);
                    input.attr('name', i);
                  form.append(input);
                };
              form.attr('action', jumpData.url);

              form.attr('method','post');
              form.css('width','0');
              form.css('height','0');
              form.appendTo($('body'));
              form.submit();
            }).fail(function(e){
              console.error(e);
              alertify.error(e.message);
            })
          }).fail(function(e){
            console.error(e);
            alertify.error(e.message);
          })
      }
    },
    props: [ ],
};
</script>
<style>
  .panel-accountproxy {
    width: 500px;
  }
  .jump-account {
    color: orange;
  }
  .btn-line {

  }
  .btn-line:hover {
    color: orange;
  }
</style>


