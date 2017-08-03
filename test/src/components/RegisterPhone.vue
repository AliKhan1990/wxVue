<template>
<div class="page">
  <div class="page-content container-fluid">
    <div class="row">
      <div class="col-xs-3">
      </div>
      <div class="col-xs-6">
        <!-- Panel Wizard Form Container -->
        <div class="panel" id="exampleWizardFormContainer">
          <div class="panel-heading">
            <h3 class="panel-title">快速注册</h3>
          </div>
          <div class="panel-body">
            <!-- Steps -->
            <div class="pearls row">
              <div class="pearl current col-xs-4">
                <div class="pearl-icon"><i class="icon md-account" aria-hidden="true"></i></div>
                <span class="pearl-title">手机号</span>
              </div>
              <div class="pearl col-xs-4">
                <div class="pearl-icon"><i class="icon md-card" aria-hidden="true"></i></div>
                <span class="pearl-title">密码</span>
              </div>
              <div class="pearl col-xs-4">
                <div class="pearl-icon"><i class="icon md-check" aria-hidden="true"></i></div>
                <span class="pearl-title">完成</span>
              </div>
            </div>
            <!-- End Steps -->
            <!-- Wizard Content -->
            <form class="wizard-content" id="exampleFormContainer">
              <div class="wizard-pane active" role="tabpanel" style="padding: 30px 0;">
                <div class="form-group form-material">


                    <label class="form-control-label" for="inputPhone">手机号</label>
                    <input type="text" v-model="userInfo.phone" class="form-control" id="inputPhone" name="number" placeholder="手机号">

                </div>
                <div class="form-group form-material" data-plugin="formMaterial">
                  <div class="input-group">
                    <label class="form-control-label" for="inputCode">验证码</label>
                     <div class="form-control-wrap">

                       <div class="input-group input-group-icon">

                         <input type="text" v-model="userInfo.code" class="form-control" id="inputCode" placeholder="验证码">
                         <span class="input-group-addon">
                          <!--<span class="input-group-addon">发送</span>-->
                           <button v-if="!codeSend" v-on:click="sendCode" type="button" class="btn btn-flat btn-default waves-effect">{{ sendCodeTxt }}</button>
                           <span v-if="codeSend" class="input-group-addon">{{ countDown }} 后重新发送</span>
                         </span>
                       </div>
                    </div>

                  </div>
                </div>

              </div>
              <div class="wizard-pane" id="exampleBillingOne" role="tabpanel">
                <div class="form-group form-material">
                  <div class="input-group">
                    <div class="form-control-wrap">
                      <label class="form-control-label" for="inputPassword">密码</label>
                      <div class="input-group input-group-icon">

                        <input v-if="!viewPwd" v-model="userInfo.password"   type="password" class="form-control" id="inputPassword" placeholder="密码">
                        <input v-if="viewPwd"  v-model="userInfo.password"  type="text" class="form-control" id="inputPassword" placeholder="密码">

                        <span class="input-group-addon">
                          <span v-if="viewPwd" @click="viewPwdFun" class="icon md-eye" aria-hidden="true"></span>
                          <span v-if="!viewPwd" @click="viewPwdOffFun" class="icon md-eye-off" aria-hidden="true"></span>
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
              <div class="wizard-pane" id="exampleGettingOne" role="tabpanel">
                <div class="text-xs-center m-y-20">
                  <h4> 注册成功! </h4>
                </div>
              </div>
            </form>
            <!-- Wizard Content -->
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


</template>

<script>

  export default {
    name: 'registerPhone',
    components: {

    },
    mounted() {
      $('.example').wizard();
      var defaults = Plugin.getDefaults('wizard');
      defaults.templates = {
        buttons: function buttons() {
          var options = this.options;
          return '<div class="wizard-buttons">' +
            '<a class="btn btn-flat btn-default btn-outline" href="#'
            + this.id + '" data-wizard="back" role="button">'
            + options.buttonLabels.back
            + '</a><a class="btn btn-flat btn-default btn-outline' +
            ' pull-xs-right" href="#' + this.id
            + '" data-wizard="next" role="button">'
            + options.buttonLabels.next
            + '</a><a class="btn btn-flat btn-default' +
            'btn-outline pull-xs-right" href="#'
            + this.id
            + '" data-wizard="finish" role="button">'
            + options.buttonLabels.finish
            + '</a></div>';
        },
      };
      var options = $.extend(true, {}, defaults, {
        buttonLabels: {
          next: '下一步',
          back: '返回',
          finish: '完成',
        },
        forward: '.btn.btn-flat.btn-default.waves-effect',
        onInit: function() {
//          $('#exampleFormContainer').formValidation({
//            framework: 'bootstrap',
//            fields: {
//              username: {
//                validators: {
//                  notEmpty: {
//                    message: 'The username is required',
//                  },
//                },
//              },
//              password: {
//                validators: {
//                  notEmpty: {
//                    message: 'The password is required',
//                  },
//                },
//              },
//              number: {
//                validators: {
//                  notEmpty: {
//                    message: 'The credit card number is not valid',
//                  },
//                },
//              },
//              cvv: {
//                validators: {
//                  notEmpty: {
//                    message: 'The CVV number is required',
//                  },
//                },
//              },
//            },
//            err: {
//              clazz: 'text-help',
//            },
//            row: {
//              invalid: 'has-danger',
//            },
//          });
//        },
//        validator: function() {
//          var fv = $('#exampleFormContainer').data('formValidation');
//          var $this = $(this);
//          // Validate the container
//          fv.validateContainer($this);
//          var isValidStep = fv.isValidContainer($this);
//          if (isValidStep === false || isValidStep === null) {
//            return false;
//          }
//          return true;
        },
        onFinish: function() {
          // $('#exampleFormContainer').submit();
        },
        buttonsAppendTo: '.panel-body',
      });
      $('#exampleWizardFormContainer').wizard(options);
    },
    data: function() {
      return {
          codeSend: false,
          countDown: 30,
          sendCodeTxt: '发送',
          viewPwd: false,
          userInfo: {
            phone: '',
            password: '',
            code: '',
            uuid: '',
          },
      };
    },
    methods: {
      sendCode: function(event) {
         this.codeSend = true;
         this.sendCodeTxt = '重新发送';
         this.countDownFun();
      },
      countDownFun: function() {
          var that = this;
          if (this.countDownTimer) {
              ;
          } else {
            this.countDownTimer = setInterval(function() {
              if(that.countDown == 0) {
                that.countDown = 30;
                that.codeSend = false;
                clearInterval(that.countDownTimer);
              } else{
                that.countDown --;
              }
            }, 1000);
          }
      },
      viewPwdFun: function() {
          this.viewPwd = false;
      },
      viewPwdOffFun: function() {
         this.viewPwd = true;
      },
    },
};
</script>
<style>

  .wizard-pane{
    min-height: 300px;
  }
  #exampleFormContainer {
    padding: 0 30px;
  }
  #exampleBillingOne,#exampleGettingOne{
    padding-top: 100px;
  }
</style>


