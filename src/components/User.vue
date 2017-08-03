

<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import Api from './Api';
  Vue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      isLogin: false,
      isSign: false,
      verifyPhone:false,
      loginType:"",//
    },
    api: Api,
    mutations: {
      refresh(state) {
        state.isLogin = true;
//        Api.api.queryDisplay()
//          .done(function(...args) {
//              console.log(args);
//          })
//          .fail(function(...args) {
//            console.log(args);
//          });
//        console.log(Api);
      },
      exit(state){
          state.isLogin = false;
      },
      openSign(state){
          state.isSign = true;
      },
      closeSign(state){
          state.isSign = false;
      },
      changePhone(state){
        state.verifyPhone = true;
      },
      closePhone(state){
        state.verifyPhone = false;
      },
      getUrlType(state,str){
        state.loginType = str;
      }
    },
  });

  export default {
      userStore: store,
  };
</script>

