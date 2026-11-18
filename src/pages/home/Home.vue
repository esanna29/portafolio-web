<script setup lang="ts">
const menuItems = [
  { label: 'home', href: '#home' },
  { label: 'about me', href: '#about-me' },
  { label: 'background', href: '#education' },
  { label: 'projects', href: '#projects' },
  { label: 'contacts', href: '#contacts' },
]

function scrollToSection(sectionId: string) {
 if (sectionId === '#home') {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return
}
  const element = document.querySelector<HTMLElement>(sectionId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <header class="sticky top-0 z-50 min-h-14 w-full bg-black">
  <nav aria-label="Main navigation" class="flex flex-wrap justify-center gap-2 px-4 py-3 sm:justify-end">
    <a
  v-for="item in menuItems"
  :key="item.href"
  :href="item.href"
  @click.prevent="scrollToSection(item.href)"
  class="rounded-full border border-white px-3 py-1 text-sm text-white hover:bg-white hover:text-black"
>
  {{ item.label }}
</a>
  </nav>
  
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