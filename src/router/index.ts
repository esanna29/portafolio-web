import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Projects from "@/pages/projects/Projects.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
        {
      path: '/proyectos',
      name: 'projects',
      component: Projects
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})