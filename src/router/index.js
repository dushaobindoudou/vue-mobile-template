import Vue from 'vue';
import VueRouter from 'vue-router';
import { concatRoute } from '@common/utils/route';
// import storage from '@common/utils/storage';
// import config from '@common/config';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
    meta: {
      hideNav: true,
    },
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue'),
  //   meta: {
  //     title: 'login',
  //     hideNav: true,
  //   },
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   meta: {
  //     hideNav: false,
  //   },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/test/About.vue'),
  // },
];

// const routerRule = require.context('../views', true, /router\.js/);
// const otherRoutes = ((r) => r.keys().map((key) => r(key).default))(routerRule);
//
// otherRoutes.forEach((item) => {
//   routes.push(...item);
// });

const router = new VueRouter({
  routes: concatRoute(routes),
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
});

// router.beforeEach((to, from, next) => {
//   if (to.name === 'login') {
//     if (storage.read(config.storage.userToken)) {
//       next({
//         name: 'Home',
//         replace: true,
//       });
//     } else {
//       next();
//     }
//     return;
//   }
//   if (storage.read(config.storage.userToken)) {
//     next();
//   } else {
//     next({
//       name: 'login',
//       replace: true,
//     });
//   }
// });

router.afterEach(() => {
  window.scrollTo(0, 0);
})

export default router;
