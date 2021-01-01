import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NativeOl from '../views/NativeOl.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/native',
    name: 'Native',
    component: NativeOl,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
