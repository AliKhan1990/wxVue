import Vue from 'vue';
import Router from 'vue-router';

import ZWFont from '@/components/ZWFont';
import ZWFontBusiness from '@/components/ZWFontBusiness';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'ZWFont',
      component: ZWFont,
      meta: {page: 'main'},
    },
    {
      path: '/business',
      name: 'ZWFontBusiness',
      component: ZWFontBusiness,
      meta: {page: 'business'},
    },
  ],
});
