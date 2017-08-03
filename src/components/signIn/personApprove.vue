<template>
  <div class="signIn">
    <div class="bgMask"></div>
    <div class="sign signInfo">
      <div class="personApprove panel row">
        <div class="title">个人实名认证</div>
        <div class="tip">需要您进行个人认证，请认真填写以下信息，前去认证！</div>
        <div class="col-md-6 col-xs-12 form-group form-material floating">
          <input v-model="lastName" type="text" class="form-control empty" name="lastName">
          <label class="floating-label">姓</label>
        </div>
        <div class="col-md-6 col-xs-12 form-group form-material floating">
          <input v-model="firstName" type="text" class="form-control empty" name="firstName">
          <label class="floating-label">名</label>
        </div>
        <div class="col-md-12 col-xs-12 form-group form-material floating">
          <input v-model="cardNum" type="text" class="form-control empty" name="IDCardNum">
          <label class="floating-label">身份证号</label>
        </div>
        <div class="col-md-6 col-xs-12 sfz-img">
          <a class="inputBox" href="javascript:void(0)">
            <input @change="onFileChange" id="sfz_z" type="file" name="file"/>
            <img :src="photoUrl" alt="">
          </a>
          <div>身份证扫描件（正）</div>
        </div>
        <div class="col-md-6 col-xs-12 sfz-img">
          <a class="inputBox" href="javascript:void(0)">
            <input @change="onFileChange" id="sfz_f" type="file" name="file"/>
            <img :src="photoUrl2" alt="">
          </a>
          <div>身份证扫描件（反）</div>
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
  import '../../../static/js/ajaxfileupload2.js';
  import Api from '../Api';
  import Common from '../common/common.js'

  export default {
    name: 'personApprove',
    components: {},
    beforeMount() {

    },
    data: function () {
      return {
        lastName:"",
        firstName:"",
        cardNum:"",
        cardNumPhoto:"",
        cardNumPhoto2:"",
        cardType:0,
        photoUrl:"./static/images/sfz_z.png",
        photoUrl2:"./static/images/sfz_f.png",
      };
    },
    created: function () {

    },
    mounted(){
      Common.setLabelFloat();
    },
    methods: {
      onFileChange (e) {
        let file = e.target.files[0];
        if (!file.size)return;
        if (!Common.checkImgExtension(file.name)) {
          Common.showMsgWarning('图片格式不支持！');
          return;
        }
        if (Common.isImgSizeTooLarge(file.size)) {
          Common.showMsgWarning('图片太大！');
          return;
        }
        let host = Common.getHost();
        let url = host+'/infoholdUploader/uploadPic?'+Common.getParaTime(1);
        let id = e.target.getAttribute("id");
        $.ajaxFileUpload({
          url: url,
          secureuri: false,
          fileElementId: id,
          dataType: "json",
          xhrFields: {
            withCredentials: true
          },
          success: function (data, status) {
            if (data.return_code === "0") {
              if (id === "sfz_z") {
                this.cardNumPhoto = data.data.fileName;
                this.photoUrl = data.data.url + data.data.fileName;
              } else if (id === "sfz_f") {
                this.cardNumPhoto2 = data.data.fileName;
                this.photoUrl2 = data.data.url + data.data.fileName;
              }
            } else {
              Common.showMsgError(data.return_message);
            }
            //
            let nid = "#" + id;
            $(nid).change(function (event) {
              this.onFileChange(event);
            }.bind(this));
          }.bind(this),
          error: function (data, status, e) {
            alert("cuowu"+data,status,e)
          }.bind(this)
        })
      },
      save:function(e){
        Api.companyApi.Postauthentication(
          {
            lastName:this.lastName,
            firstName:this.firstName,
            cardNum:this.cardNum,
            cardNumPhoto:this.cardNumPhoto,
            cardNumPhoto2:this.cardNumPhoto2,
            cardType:this.cardType,
          }
        )
          .done(function (data,result) {
            Common.showMsgSuccess('保存成功！');
            location.href="#/signSucces"
          }.bind(this))
          .fail(function (e,result) {

          }.bind(this));
      },
      skipClick(){
        location.href="#/signSucces"
      }
    }
  }
</script>
<style>
.personApprove{
  width:500px;
  margin: 0 auto;
  padding: 20px 40px;
  color:#333;
}
  .personApprove .title {
    font-size: 20px;
    font-weight: bold;
    height:30px;
    line-height:30px;
  }
  .personApprove .tip{
    margin-bottom: 30px;
  }
.personApprove .sfz-img {
  text-align: center;
  margin:30px auto;
}
.personApprove .sfz-img .inputBox{
  display: inline-block;
  width:100%;
  position:relative;
  overflow: hidden;
  cursor: pointer;
}
.personApprove .inputBox>input{
  height:100px;
  width:100%;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.personApprove .sfz-img img{
  width:100%;
}
.personApprove .sfz-img div{
  margin-top:10px;
}
.personApprove .sign-ok {
  margin-top: 20px;
}

.personApprove .back-login {
  margin-top: 20px;
}

.personApprove .back-login button {
  color: #a50034;
}
</style>
