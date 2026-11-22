import Home from '@/pages/home/Home.vue'
import Projects from '@/pages/projects/Projects.vue'
import ProjectsLayout from '@/pages/projects/ProjectsLayout.vue'
import EuOnFire from '@/pages/projects/EuOnFire.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/proyectos',
      component: ProjectsLayout,
      children: [
        {
          path: '',
          name: 'projects',
          component: Projects,
        },
        {
          path: 'eu-on-fire',
          name: 'eu-on-fire',
          component: EuOnFire,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],

  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

   if (to.hash) {
  const headerHeight =
    document.querySelector('header')?.getBoundingClientRect().height ?? 0

  return {
    el: to.hash,
    top: headerHeight,
    behavior: 'smooth',
  }
}

    return { top: 0 }
  },
})