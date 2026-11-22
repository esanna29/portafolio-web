<template>
  <section class="min-h-svh bg-black px-6 py-10 text-white sm:px-12">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <h1 class="text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
        02.coffee journal
      </h1>

      <RouterLink
        :to="{ path: '/', hash: '#projects' }"
        class="text-sm font-medium underline-offset-4 hover:underline"
      >
        Graphic Design
      </RouterLink>
    </div>

    <p class="mt-4 text-sm font-medium sm:text-base">
      Project Overview: Infographic visualizing my coffee consumption
      habits throughout 2025.
    </p>

    <div class="mt-12 grid items-center gap-6 lg:grid-cols-3">
      <img
        src="/images/coffee-journal.jpg"
        alt="My coffee journal: infografica del consumo mensile di caffè"
        class="h-auto w-full"
      />

      <img
        src="/images/coffee-reasons.jpg"
        alt="Main reasons: infografica delle ragioni del consumo di caffè"
        class="h-auto w-full"
      />

      <img
        src="/images/coffee-mockup.png"
        alt="I due elaborati Coffee journal presentati su smartphone"
        class="h-auto w-full"
      />
    </div>
  </section>
</template>