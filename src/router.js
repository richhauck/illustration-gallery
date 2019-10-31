import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: 'About'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      // Lazy-load component
      component: () => import('./views/projects/Projects.vue'),
      meta: {
        title: 'Projects'
      }
    },
    {
      path: '/projects/:hash',
      name: 'project',
      // Lazy-load component
      component: () => import('./views/projects/Project.vue'),
      meta: {
        title: 'Project'
      }
    },
    {
      path: '/404',
      component: NotFound,
      name: 'not-found',
      meta: {
        title: 'Not Found'
      }
    },
    { path: '*', redirect:'/404'}
  ],
});
