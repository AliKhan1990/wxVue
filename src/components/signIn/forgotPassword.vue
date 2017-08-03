<template>
  <div class="signIn">
    <div class="bgMask"></div>
    <div class="sign forgotPassword">
      <div class="fromInfo panel">
        <div class="logoImg">
          <img src="http://7xpmqq.com1.z0.glb.clouddn.com/rt/cs/images/zdxm/zwsb_logo2.png" alt="">
        </div>

        <div class="form-group form-material floating">
          <input type="text" class="form-control empty" @blur="inputBlur" name="phone" v-model="phoneNo"/>
          <label class="floating-label">手机号</label>
        </div>

        <div class="human-ver">
          <div class="l-captcha" data-width="100%" data-callback="getResponse"
               data-site-key="c0cf6973d173d86bc38bb3a665b61047"></div>
        </div>

        <div class="form-group form-material floating">
          <div class="input-group">
            <div class="form-control-wrap">
              <input v-model="code" type="text" class="form-control empty">
              <label class="floating-label">短信验证码</label>
            </div>
            <span class="input-group-btn">
              <button class="click-send btn btn-info waves-effect waves-light" @click="sentCode" type="button">
                {{codeText}}
              </button>
            </span>
          </div>
        </div>

        <div class="form-group form-material floating">
          <input type="text" class="form-control empty" name="newPwd" v-model="newPwd"/>
          <label class="floating-label">新密码</label>
        </div>

        <div class="form-group form-material floating">
          <input type="text" class="form-control empty" name="cPwd" v-model="cPwd"/>
          <label class="floating-label">确认密码</label>
        </div>

        <div class="sign-ok">
          <button @click="phoneRegister" type="button" class="btn btn-block btn-default waves-effect waves-light">
            确定
          </button>
        </div>

        <div class="back-login">
          <button type="button" class="btn btn-flat btn-block waves-effect" @click="loginClick">返回登录</button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Api from '../Api';
  import Common from '../common/common.js'

  export default {
    name: 'sign',
    components: {},
    beforeMount(){

    },
    data: function () {
      return {
        userUrl: "http://7xlcsz.com1.z0.glb.clouddn.com/%E5%8D%8F%E8%AE%AE.html",
        luotest_response: "",
        phoneNo: "",
        isSend: false,
        time: 60,
        code: "",
        checkState: false,
        newPwd:'',
        cPwd:'',
      };
    },
    created: function () {

    },
    computed:{
      codeText()
      {
        let codeText = this.isSend ? this.time + '秒后重发' : '获取验证码';
        return codeText;
      }
    },
    mounted(){
      window.getResponse = function (resp) {
        this.luotest_response = resp;
      }.bind(this);
      //
      Common.setLabelFloat();
    }
    ,
    methods: {
      inputBlur:function (e) {//重置图形验证
        LUOCAPTCHA.reset();
        this.luotest_response = "";
      },
      //agree按钮
      checkStateClick:function (e) {
        if (this.checkState) {
          this.checkState = false;
        } else {
          this.checkState = true;
        }
      },
      //发送验证码
      sentCode:function (event) {
        if (!this.isSend) {
          Api.companyApi.getCode({
            phoneNo: this.phoneNo,
            luotest_response: this.luotest_response
          }).done(function (data, result) {
            this.isSend = true;
            this.startTimer();
            Common.showMsgSuccess('发送成功！')
          }.bind(this)).fail(function (e, result) {

          }.bind(this));
        }
      },
      //定时器
      startTimer:function () {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setInterval(function () {
          let time = this.time;
          time--;
          if (time < 10) {
            time = "0" + time;
          }
          if (this.time <= 0) {
            clearInterval(this.timer);
            this.isSend = false;
          } else {
            this.time = time;
          }
        }.bind(this), 1000);
      },
      //修改密码
      phoneRegister:function (event) {
        if (this.checkState) {
          Api.companyApi.phoneRegister({
            phoneNo: this.phoneNo,
            code: this.code
          }).done(function (result) {
            Common.showMsgSuccess('注册成功！')
            location.href = "#/signInfo"
          }).fail(function (e) {

          });
        } else {
          Common.showMsgInfo("请同意用户协议！");
        }
      },
      loginClick(e){
        //window.location.href = "http://120.27.5.58:8080/eWallet/home";
        window.location.href = this.$store.userStore.state.loginType;
      }
    }
  }
</script>
<style>

</style>
