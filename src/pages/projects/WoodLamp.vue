<template>
  <section class="min-h-svh bg-black px-6 py-10 text-white sm:px-12">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <h1
        class="text-5xl font-medium tracking-tight sm:text-7xl lg:text-8xl"
      >
        06.wood lamp
      </h1>

      <RouterLink
        :to="{ path: '/', hash: '#projects' }"
        class="text-sm font-medium underline-offset-4 hover:underline"
      >
        Technical drawing
      </RouterLink>
    </div>

    <p class="mt-4 text-base font-medium">
      Project Overview: Technical drawing of a wood lamp developed
      in AutoCAD, including orthographic projections, dimensions,
      and construction details.
    </p>

    <img
      src="/images/wood-lamp-drawing.png"
      alt="Wood lamp: tavola tecnica con proiezioni ortogonali, quote e dettagli costruttivi"
      class="mt-6 h-auto w-full"
    />

    <a
      href="/documents/wood-lamp.pdf"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-6 inline-block text-sm font-medium underline underline-offset-4"
    >
      Open PDF
    </a>
  </section>
</template>