<script setup lang="ts">
defineProps<{
  title: string
  image: string
}>()
</script>

<template>
  <div class="relative h-32 overflow-hidden rounded-[2rem] sm:h-36">
    <img
      :src="image"
      alt=""
      class="h-full w-full object-cover"
    />

    <p
      class="absolute right-6 top-5 text-right text-base font-medium text-white"
    >
      {{ title }}
    </p>
  </div>
</template>