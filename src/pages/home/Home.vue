<script setup lang="ts">
const menuItems = [
  { label: 'About Me', href: '#about-me' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contacts', href: '#contacts' },
]

function scrollToSection(sectionId: string) {
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
<div class="grid min-h-svh grid-rows-[1fr]">
  <section class="mx-auto flex w-fit max-w-full flex-col justify-center px-6 py-16 sm:px-10">
    <div class="w-fit">
  <h1 class="text-6xl font-medium tracking-tight sm:text-8xl lg:text-9xl">
    portfolio
  </h1>
      <p class="mt-2 text-right text-sm sm:text-lg">
      interior design
    </p>
  </div>

  <p class="mt-12 text-sm font-medium sm:mt-20">
    Eleonora Sanna
  </p>

  <p class="mt-8 text-right text-sm font-medium sm:mt-12">
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
    i’m Eleonora
  </h2>
</section>


</template>


<style scoped>

</style>