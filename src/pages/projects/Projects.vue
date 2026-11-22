<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

const graphicProjects = [
  {
    title: '01.eu on fire',
    image: '/images/eu-on-fire-cover.jpg',
    to: '/proyectos/eu-on-fire',
  },
  {
  title: '02.coffee journal',
  image: '/images/coffee-journal.jpg',
  to: '/proyectos/coffee-journal',
},
  {
    title: '03.climate threads',
    image: '/images/climate-threads-cover.png',
     to: '/proyectos/climate-threads',
  },
]
</script>

<template>
  <section
    id="projects"
    class="min-h-svh scroll-mt-14 px-6 py-10 sm:px-12"
  >
    <div class="relative">
      <h2
        class="mb-10 text-5xl font-medium leading-tight tracking-tight
               sm:text-7xl lg:absolute lg:left-0 lg:top-52 lg:mb-0"
      >
        index
      </h2>

      <div class="lg:ml-[14%]">
        <div class="grid items-center gap-2 lg:grid-cols-[7rem_1fr]">
          <h3 class="text-sm font-medium lg:text-right">
            Graphic Design
          </h3>

          <div class="grid gap-2 sm:grid-cols-3">
            <ProjectCard
              v-for="project in graphicProjects"
              :key="project.title"
              :title="project.title"
              :to="project.to"
              :image="project.image"
            />
          </div>
        </div>

        <div
          class="mt-2 grid items-center gap-2
                 lg:ml-auto lg:w-2/3 lg:grid-cols-[7rem_1fr]"
        >
          <h3 class="text-sm font-medium lg:text-right">
            Product Design
          </h3>

          <ProjectCard
  title="04.memories"
  image="/images/memories-cover.png"
  
/>
        </div>
      </div>
    </div>
  </section>
</template>