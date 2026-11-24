<template>
  <section class="min-h-svh bg-black px-6 py-10 text-white sm:px-12">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <h1
        class="text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl"
      >
        07.motion graphics
      </h1>

      <RouterLink
        :to="{ path: '/', hash: '#projects' }"
        class="text-sm font-medium underline-offset-4 hover:underline"
      >
        Digital Media Design
      </RouterLink>
    </div>

    <p class="mt-4 text-base font-medium">
      Project Overview: Collection of motion graphics and data
      visualization animations developed for digital media projects.
    </p>

    <div class="mt-16 grid gap-12 sm:grid-cols-2">
      <figure class="mx-auto w-full max-w-72">
        <img
          src="/images/motion-wildfires-qr.png"
          alt="QR da inquadrare per vedere l’animazione sugli incendi in Europa"
          class="h-auto w-full"
        />

        <figcaption class="mt-3 text-base font-medium italic">
          Animation for CMCC: The Rise of Wildfires in Europe
          (2001–2021)
        </figcaption>
      </figure>

      <figure class="mx-auto w-full max-w-72">
        <img
          src="/images/motion-coffee-qr.png"
          alt="QR da inquadrare per vedere l’animazione sul consumo di caffè"
          class="h-auto w-full"
        />

        <figcaption class="mt-3 text-base font-medium italic">
          Animation: Coffee Consumption Patterns
          (January–October 2025)
        </figcaption>
      </figure>
    </div>
  </section>
</template>