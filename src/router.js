import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: () =>
        import(/* webpackChunkName: "userAccount" */ '@/views/Users.vue'),
    },
    {
      path: '/account/:id',
      name: 'userAccount',
      component: () =>
        import(/* webpackChunkName: "userAccount" */ '@/views/UserAccount.vue'),
    },
  ],
});
