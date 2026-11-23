<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

const graphicProjects = [
 {
  title: '01.eu on fire',
  image: '/images/eu-on-fire-cover.jpg',
  to: '/proyectos/eu-on-fire',
  imagePosition: '50% 38%',
  imageScale: 1.15,
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

const technicalProjects = [
  {
    title: '05.coffee table',
    image: '/images/coffee-table-cover.png',
    imagePosition: '40% 50%',
    imageScale: 1.7,
    to: '/proyectos/coffee-table',
  },
  {
    title: '06.wood lamp',
    image: '/images/wood-lamp-cover.png',
    imagePosition: '100% 50%',
    imageScale: 1.1,
  },
]
</script>

<template>
  <section
  id="projects"
  class="min-h-svh scroll-mt-14 px-6 py-10 sm:px-12
         lg:flex lg:min-h-[calc(100svh-3.5rem)] lg:flex-col
         lg:justify-center lg:py-4"
>
    <div class="relative">
      <h2
  class="mb-10 text-5xl font-medium tracking-tight
         sm:text-7xl lg:absolute lg:left-0 lg:top-1/2
         lg:mb-0 lg:-translate-y-1/2 lg:text-8xl"
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
              :image-position="project.imagePosition"
:image-scale="project.imageScale"
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
  image-position="50% 93%"
  to="/proyectos/memories"
/>
        </div>
     <div class="mt-2 grid gap-2 lg:grid-cols-[7rem_1fr]">
  <div
    class="grid items-center gap-2 sm:grid-cols-3 lg:col-start-2"
  >
    <h3
      class="whitespace-nowrap text-sm font-medium sm:text-right"
    >
      Technical drawing
    </h3>

    <ProjectCard
      v-for="project in technicalProjects"
      :key="project.title"
      :title="project.title"
      :image="project.image"
      :image-position="project.imagePosition"
      :image-scale="project.imageScale"
      :to="project.to"
    />
  </div>
</div>
<div class="mt-2 grid gap-2 lg:grid-cols-[7rem_1fr]">
  <div
    class="grid items-center gap-2 sm:grid-cols-3 lg:col-start-2"
  >
    <h3
      class="text-sm font-medium sm:col-span-2 sm:text-right"
    >
      Digital Media Design
    </h3>

    <ProjectCard
      title="07.motion graphics"
      image="/images/motion-graphics-cover.png"
      :image-scale="1.1"
    />
  </div>
</div>
      </div>
    </div>
  </section>
</template>