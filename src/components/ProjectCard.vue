<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  image: string
  to?: string
}>()
</script>

<template>
  <component
  :is="to ? RouterLink : 'div'"
  :to="to"
  class="relative block h-32 overflow-hidden rounded-[2rem] sm:h-36"
>
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
  </component>
</template>