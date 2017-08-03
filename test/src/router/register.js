import Vue from 'vue';
import Router from 'vue-router';

import RegisterPhone from '@/components/RegisterPhone';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'RegisterPhone',
      component: RegisterPhone,
    },
  ],
});
