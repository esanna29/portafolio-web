<template>
  <section class="min-h-svh bg-black px-6 py-10 text-white sm:px-12">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <h1 class="text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
        01.eu on fire
      </h1>

      <RouterLink
        :to="{ path: '/', hash: '#projects' }"
        class="text-sm font-medium underline-offset-4 hover:underline"
      >
        Graphic Design
      </RouterLink>
    </div>

    <p class="mt-4 text-sm font-medium sm:text-base">
      Project Overview: Infographic designed for the
      Euro-Mediterranean Center on Climate Change (CMCC).
    </p>

    <div class="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_2fr]">
      <img
        src="/images/eu-on-fire-cover.jpg"
        alt="EU on fire: poster sugli incendi in Europa tra il 2001 e il 2021"
        class="h-auto w-full"
      />

      <img
        src="/images/eu-on-fire-brochure.jpg"
        alt="EU on fire: pieghevole con approfondimenti sugli incendi boschivi"
        class="h-auto w-full"
      />
    </div>
  </section>
</template>