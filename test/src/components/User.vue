

<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import Api from './Api';
  Vue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      isLogin: false,
    },
    api: Api,
    mutations: {
      refresh(state) {
        state.isLogin = true;
        Api.api.queryDisplay()
          .done(function(...args) {
              console.log(args);
          })
          .fail(function(...args) {
            console.log(args);
          });
        console.log(Api);
      },
    },
  });

  export default {
      userStore: store,
  };
</script>

