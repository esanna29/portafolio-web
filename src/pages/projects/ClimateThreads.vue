<template>
  <section class="min-h-svh bg-black px-6 py-10 text-white sm:px-12">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <h1 class="text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
        03.climate threads
      </h1>

      <RouterLink
        :to="{ path: '/', hash: '#projects' }"
        class="text-sm font-medium underline-offset-4 hover:underline"
      >
        Graphic Design
      </RouterLink>
      </div>

<p class="mt-4 text-sm font-medium sm:text-base">
  Project Overview: Interactive infographic exploring temperature
  and precipitation changes in the Mediterranean.
</p>
    <div
  class="mt-6 flex flex-col items-center gap-8
         lg:flex-row lg:items-start lg:justify-between lg:gap-6"
>
  <img
    src="/images/climate-threads-cover.png"
    alt="Climate threads: infografica a colori"
    class="h-auto w-full lg:h-[58svh] lg:w-auto lg:max-w-[31%]
           lg:object-contain lg:object-top"
  />

  <img
    src="/images/climate-threads-sketch.png"
    alt="Climate threads: schizzo dell’infografica interattiva"
    class="h-auto w-full lg:h-[58svh] lg:w-auto lg:max-w-[31%]
           lg:object-contain lg:object-top"
  />

  <img
    src="/images/climate-mockup.png"
    alt="Climate threads: installazione presentata su smartphone"
    class="h-auto w-full max-w-64 lg:h-[58svh] lg:w-auto
           lg:max-w-[25%] lg:object-contain lg:object-top"
  />
</div>
  </section>
</template>