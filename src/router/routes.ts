import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/HomePage.vue') }],
  },
  {
    path: '/projekte',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ProjectsPage.vue') },
      { path: ':key', component: () => import('pages/ProjectsPage.vue') },
    ],
  },
  {
    path: '/ueber-mich',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AboutPage.vue') }],
  },
  {
    path: '/marathons',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MarathonsPage.vue') }],
  },
  {
    path: '/medalmonday',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MedalMondayPage.vue') }],
  },
  {
    path: '/vcard',
    component: () => import('pages/VCardPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ErrorNotFound.vue') }],
  },
];

export default routes;
