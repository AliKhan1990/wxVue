<template>
  <div class="signIn">
    <div class="bgMask"></div>
    <div class="sign">
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

        <div class="agree-deal checkbox-custom checkbox-primary">
          <input type="checkbox" id="agree" :value="checkState" @click="checkStateClick">
          <label for="agree">同意</label>
          <a class="agree-text a50034" target="_blank" href="userUrl">《用户注册协议》</a>
        </div>

        <div class="sign-ok">
          <button @click="phoneRegister" type="button" class="btn btn-block btn-default waves-effect waves-light">
            注册
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
  },
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
    //手机注册
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
      location.href = this.$store.userStore.state.loginType;
    }
  }
  }
</script>
<style>

  /*remark*/
  .checkbox-primary input[type=radio]:checked + label::before,
  .checkbox-primary input[type=checkbox]:checked + label::before {
    background-color: #a50034;
    border-color: #a50034;
  }

  .form-material .form-control.focus ~ .floating-label,
  .form-material .form-control:focus ~ .floating-label {
    color: #a50034;
  }

  .form-material .form-control,
  .form-material .form-control.focus,
  .form-material .form-control:focus {
    background-image: -webkit-gradient(linear, left top, left bottom, from(#a50034), to(#a50034)),
    -webkit-gradient(linear, left top, left bottom, from(#e0e0e0), to(#e0e0e0));
    background-image: -webkit-linear-gradient(#a50034, #a50034),
    -webkit-linear-gradient(#e0e0e0, #e0e0e0);
    background-image: -o-linear-gradient(#a50034, #a50034),
    -o-linear-gradient(#e0e0e0, #e0e0e0);
    background-image: linear-gradient(#a50034, #a50034),
    linear-gradient(#e0e0e0, #e0e0e0);
  }

  .btn-info {
    border-color: #a50034;
    background-color: #a50034;
  }

  .btn-info.focus,
  .btn-info:focus,
  .btn-info:hover {
    border-color: #a50034;
    background-color: #a50034;
  }

  .btn-info.active,
  .btn-info:active,
  .open > .btn-info.dropdown-toggle {
    border-color: #a50034;
    background-color: #a50034;
  }

  .btn-default {
    color: #fff;
    border-color: #a50034;
    background-color: #a50034;
  }

  .btn-default.focus,
  .btn-default:focus,
  .btn-default:hover {
    border-color: #a50034;
    background-color: #a50034;
  }

  .btn-default.active,
  .btn-default:active,
  .open > .btn-default.dropdown-toggle {
    border-color: #a50034;
    background-color: #a50034;
  }

  /*remark*/

  .a50034 {
    color: #a50034;
  }

  .sign {
    height: 100%;
    width: 100%;
    padding-top: 50px;
  }

  .sign .fromInfo {
    width: 400px;
    margin: 0 auto;
    padding: 20px 40px;
  }

  .sign .fromInfo .logoImg {
    text-align: center;
    padding: 20px;
  }

  .sign .fromInfo .human-ver {
    padding: 10px 0 20px;
  }

  .sign .fromInfo .agree-deal {
    margin-top: 10px;
  }

  .sign .fromInfo .agree-text:hover {
    color: #a50034;
  }

  .sign .fromInfo .sign-ok {
    margin-top: 40px;
  }

  .sign .fromInfo .back-login {
    margin-top: 20px;
  }

  .sign .fromInfo .back-login button {
    color: #a50034;
  }

  .signIn .bgMask:before {
    background: url(http://7xpmqq.com1.z0.glb.clouddn.com/protal/bg_SignIn.jpg) center top;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: "";
    -webkit-background-size: cover;
    background-size: cover;
  }

  .signIn .bgMask:after {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(33, 33, 33, .3);
  }
</style>
