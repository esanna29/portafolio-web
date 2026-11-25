<script setup lang="ts">
import Projects from '@/pages/projects/Projects.vue'
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue'

const menuItems = [
  {
    label: 'home',
    href: '#home',
    onClick: () => scrollToSection('#home'),
  },
  {
    label: 'about me',
    href: '#about-me',
    onClick: () => scrollToSection('#about-me'),
  },
  {
    label: 'background',
    href: '#background',
    onClick: () => scrollToSection('#background'),
  },
  {
    label: 'projects',
    href: '#projects',
    onClick: () => scrollToSection('#projects'),
  },
  {
    label: 'contacts',
    href: '#contacts',
    onClick: () => scrollToSection('#contacts'),
  },
]

function scrollToSection(sectionId: string) {
  if (sectionId === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const element = document.querySelector<HTMLElement>(sectionId)
  const header = document.querySelector<HTMLElement>('header')

  if (element) {
    const headerHeight = header?.getBoundingClientRect().height ?? 0
    const top =
      element.getBoundingClientRect().top + window.scrollY - headerHeight

    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
<header class="sticky top-0 z-50 min-h-14 w-full bg-black">
  <NavigatorPrimarius :items="menuItems" />
</header>
<div
  class="copertina-zoom grid min-h-svh grid-rows-[1fr] bg-center text-white"
  style="background-image: url('/images/copertina-righe.jpeg')"
>
  <section class="mx-auto flex w-fit max-w-full flex-col justify-center px-6 py-16 sm:px-10">
    <div class="w-fit">
  <h1 class="text-7xl font-medium tracking-tight sm:text-9xl lg:text-[10rem]">
    portfolio
  </h1>
      <p class="mt-2 text-right text-base sm:text-xl">
      interior design
    </p>
  </div>

  <p class="mt-12 text-base font-medium sm:mt-20 sm:text-lg">
    Eleonora Sanna
  </p>

  <p class="mt-8 text-right text-base font-medium sm:mt-12 sm:text-lg">
  2025–2026
</p>
   
   </section>
  
</div>
<div aria-hidden="true" class="h-px w-full bg-black"></div>
<section
  id="about-me"
  class="min-h-svh scroll-mt-14 px-6 py-16 sm:px-12"
>
  <h2 class="text-5xl font-medium leading-tight tracking-tight sm:text-7xl">
    hello-<br />
    I’m Eleonora
  </h2>
  <div class="mt-10 max-w-2xl space-y-6 text-base leading-relaxed sm:mt-16 sm:text-lg">
  <p>
    I’m Eleonora Sanna, a design student at University of Sassari (Alghero).
    I have a strong interest in exploring different fields of design and
    developing new creative skills.
    I enjoy working on projects that allow me to combine ideas,
    experimentation, and attention to detail, especially within graphic
    and product design.
  </p>

  <p>
    My passion for design began at a young age through drawing and creating.
    Over time, this interest has grown into a desire to learn more about
    the creative process and to express ideas in a simple, functional,
    and personal way.
  </p>
</div>
</section>

<section
  id="background"
  class="min-h-svh scroll-mt-14 bg-black px-6 py-16 text-white sm:px-12"
>
  <div class="grid gap-16 lg:grid-cols-2">
    <div>
      <h2 class="text-5xl font-medium tracking-tight sm:text-7xl">
        education
      </h2>

      <div class="mt-10 space-y-6">
        <div>
          <h3>High School - Classic course</h3>
          <p class="italic">
            Liceo Classico D.A. Azuni (Sassari, Italy) -
            09/2019 - 06/2024
          </p>
        </div>

        <div>
          <h3>Bachelor’s Degree in Design</h3>
          <p class="italic">
            Università degli studi di Sassari (Alghero, Italy) -
            10/2024 - current
          </p>
        </div>
      </div>

      <h2 class="mt-16 text-5xl font-medium tracking-tight sm:text-7xl">
        work exp
      </h2>

      <div class="mt-10">
        <h3>Summer Camp Assistant (Erasmus + Programme)</h3>
        <p class="italic">
          Colegio Salesiano Santísima Trinidad (Seville, Spain) -
          06/2022 - 07/2022
        </p>
      </div>
    </div>

    <div>
      <h2 class="text-5xl font-medium tracking-tight sm:text-7xl">
        skills
      </h2>

      <div class="mt-10 space-y-6">
        <div>
          <h3>Software</h3>
          <ul class="italic">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe AfterEffects</li>
            <li>AutoCAD</li>
            <li>Blender 3D (modelling and rendering)</li>
            <li>COMSOL Multiphysics (basic proficiency)</li>
            <li>Fusion 360 (basic proficiency)</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>

        <div>
          <h3>Design skills</h3>
          <ul class="italic">
      
            <li>Sketching and prototyping</li>
            <li>Technical drawing</li>
            <li>2D and 3D modelling</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</section>

<Projects />
<section
  id="contacts"
  class="min-h-[calc(100svh-3.5rem)] scroll-mt-14
         bg-black px-6 py-12 text-white sm:px-12"
>
  <div
    class="mx-auto flex min-h-[calc(100svh-9.5rem)]
           w-full max-w-4xl flex-col justify-between"
  >
    <p class="text-base font-medium sm:text-lg">
      portfolio 2025–2026
    </p>

    <h2 class="my-12 text-3xl font-medium sm:text-4xl">
      thank you.
    </h2>

    <div class="text-base font-medium sm:text-lg">
      <h3>CONTACT DETAILS</h3>

      <a
        href="tel:+393400606826"
        class="block w-fit hover:underline"
      >
        +39 3400606826
      </a>

      <a
        href="mailto:eleonorasanna29@gmail.com"
        class="block w-fit break-all hover:underline"
      >
        eleonorasanna29@gmail.com
      </a>

      <a
        href="mailto:e.sanna127@studenti.uniss.it"
        class="block w-fit break-all hover:underline"
      >
        e.sanna127@studenti.uniss.it
      </a>
    </div>
  </div>
</section>
</template>


<style scoped>
.copertina-zoom {
  background-size: 100% 100%;
  transition: background-size 0.6s ease;
}

.copertina-zoom:hover {
  background-size: 115% 115%;
}
</style>