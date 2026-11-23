<template>
  <section class="min-h-svh bg-black px-6 py-10 text-white sm:px-12">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <h1
        class="text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl"
      >
        04.memories
      </h1>

      <RouterLink
        :to="{ path: '/', hash: '#projects' }"
        class="text-sm font-medium underline-offset-4 hover:underline"
      >
        Product Design
      </RouterLink>
    </div>

    <p class="mt-4 text-base font-medium">
      Project Overview: 3D modeling project inspired by the Memphis
      design movement.
    </p>

    <div
      class="mt-6 grid items-start gap-8
             lg:grid-cols-[1fr_0.47fr_0.71fr]"
    >
      <img
        src="/images/memories-cover.png"
        alt="Memories: render completo dell’ambiente"
        class="h-auto w-full"
      />

      <div class="grid gap-8">
        <img
          src="/images/memories-stool.png"
          alt="Memories: dettaglio dello sgabello rosso"
          class="h-auto w-full"
        />

        <img
          src="/images/memories-lamp.png"
          alt="Memories: dettaglio della lampada"
          class="h-auto w-full"
        />
        </div>
      
      <div class="min-w-0 lg:relative lg:self-stretch">
  <img
    src="/images/memories-poster.png"
    alt="Memories: poster del progetto"
    class="h-auto w-full lg:absolute lg:inset-0
           lg:h-full lg:object-contain lg:object-left-top"
  />
</div>
</div>
  </section>
</template>