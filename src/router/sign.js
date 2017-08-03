import Vue from 'vue';
import Router from 'vue-router';

import sign from '@/components/signIn/sign';
import signInfo from '@/components/signIn/signInfo';
import signSucces from '@/components/signIn/signSucces';
import personApprove from '@/components/signIn/personApprove';
import forgotPassword from '@/components/signIn/forgotPassword';



Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign',
      component: sign,
    },
    {
      path: '/signInfo',
      name: 'signInfo',
      component: signInfo,
    },
    {
      path: '/signSucces',
      name: 'signSucces',
      component: signSucces,
    },
    {
      path: '/personApprove',
      name: 'personApprove',
      component: personApprove,
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: forgotPassword,
    },
  ]
});
