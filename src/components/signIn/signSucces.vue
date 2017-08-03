<template>
  <div class="signIn">
    <div class="bgMask"></div>
    <div class="success">
      <div class="signSucces panel">
        <div class="success-info">
          <img src="../../images/icon_ture.png" alt="">
          <span>恭喜您注册成功！</span>
        </div>
        <div class="success-step">
          <span class="step-info">{{times}}秒后将自动跳转</span>
          <span class="input-group-btn">
            <button @click="goHome" class="click-send btn btn-info waves-effect waves-light" type="button">进入首页</button>
        </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      name:"signSuccess",
      data:function(){
          return {
              times:5
          }
      },
      mounted(){
        this.countDown();
      },
      methods:{
        getLoginType(){
          const loginType = this.$store.userStore.state.loginType;
          const httpUrl = loginType;
          return httpUrl;
        },
        countDown(){
          setTimeout(() => {
            this.times--;
            if(this.times===0){

              location.href = this.getLoginType();
            }else{
              this.countDown();
            }
          }, 1000);
        },
        goHome(){
          location.href = this.getLoginType();
        }
      }
  }
</script>
<style>
  .success{
    padding-top:50px;
  }
 .signSucces{
   width:600px;
   height:500px;
   margin:auto;
   padding:200px 0;
   text-align: center;
   color:#333;
 }
 .signSucces .success-info{
   font-size: 25px;
   margin-bottom:10px;
 }
 .signSucces .success-info img{
   width:30px;
 }
  .signSucces .success-step{
    position:relative;
    left:-40px;
  }
 .signSucces .success-step .step-info{
   border: 1px solid #e5e5e5;
   padding: 5px 20px;
   border-radius: 5px;
 }
  .signSucces .success-step .input-group-btn{
    display: inline-block;
    margin-left:10px;
  }
 .signSucces .success-step .input-group-btn button{
   border-radius: 5px;
   padding:2px 20px;
 }
</style>
