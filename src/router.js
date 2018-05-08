import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Auth from './views/Auth.vue';
import Test from './views/Test.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'auth') {
    next();
  } else if (router.app.$auth.isAuthenticated()) {
    next();
  } else {
    router.app.$auth.login();
  }
});

export default router;
