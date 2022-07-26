import {
  createWebHistory,
  createRouter,
} from 'vue-router/dist/vue-router.esm-bundler'; // asta cu dist/ e toata treaba
import Home from '../views/HomePage.vue';
//import About from '../views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue'),
    //component: About,
  },
  {
    path: '/impozit',
    name: 'Impozit',
    component: () => import('../components/ImpozitForm.vue'),
    //component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/*
export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutPage.vue'),
        //component: About,
      },
    ],
  });
*/
