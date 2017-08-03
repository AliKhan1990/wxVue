<template>
  <div class="signIn">
    <div class="bgMask"></div>
    <div class="sign signInfo">
      <div class="fromInfo panel row">
        <div class="col-md-12 col-xs-12 logoImg">
          <img src="http://7xpmqq.com1.z0.glb.clouddn.com/rt/cs/images/zdxm/zwsb_logo2.png" alt="">
        </div>

        <div class="infoTip col-md-12 col-xs-12">您已注册成功，请补充以下个人信息</div>

        <div class="col-md-6 col-xs-12form-group form-material floating">
          <input v-model="lastName" type="text" class="form-control empty" name="lastName"/>
          <label class="floating-label">姓</label>
        </div>

        <div class="col-md-6 col-xs-12 form-group form-material floating">
          <input v-model="firstName" type="text" class="form-control empty" name="firstName"/>
          <label class="floating-label">名</label>
        </div>

        <div class="col-md-12 col-xs-12 form-group form-material floating">
          <input v-model="password" type="password" class="form-control empty" name="pwd"/>
          <label class="floating-label">设置密码</label>
        </div>

        <div class="col-md-12 col-xs-12 form-group form-material floating">
          <input v-model="confirmPass" type="password" class="form-control empty" name="confirmPwd"/>
          <label class="floating-label">确认密码</label>
        </div>

        <div class="col-md-12 col-xs-12 sign-ok">
          <button @click="save" type="button" class="btn btn-block btn-default waves-effect waves-light">
            保存
          </button>
        </div>

        <div class="col-md-12 col-xs-12 back-login">
          <button @click="skipClick" type="button" class="btn btn-flat btn-block waves-effect">跳过</button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Api from '../Api';
  import Common from '../common/common.js'

  export default {
    name: 'signInfo',
    components: {},
    beforeMount() {

    },
    data: function () {
      return {
        lastName:"",
        firstName:"",
        password:"",
        confirmPass:"",
      };
    },
    created: function () {

    },
    mounted(){
      Common.setLabelFloat();
    },
    methods: {
      save:function(e){
        Api.companyApi.nameAndPass({
          lastName:this.lastName,
          firstName:this.firstName,
          password:this.password,
          confirmPass:this.confirmPass,
        }).done(function (data) {
          Common.showMsgSuccess('保存成功！');
          location.href="#/personApprove"
        }).fail(function (e,result) {

        });
      },
      skipClick(){
        location.href="#/personApprove"
      }
    }
  }
</script>
<style>

  .signInfo .form-material.floating+.form-material.floating {
    margin-top: 20px;
  }
  .signInfo .floating-label{
    padding-left: .9375rem;
  }
  .signIn .infoTip{
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    font-weight: bold;
  }
</style>
