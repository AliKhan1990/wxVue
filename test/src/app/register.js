// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import RegisterApp from './RegisterApp';
import router from '../router/register';

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<RegisterApp/>',
  components: {RegisterApp},
});