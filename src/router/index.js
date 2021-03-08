import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import HrInfo from '../views/HrInfo.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden: true
  },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      hidden: true,
    }
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router
