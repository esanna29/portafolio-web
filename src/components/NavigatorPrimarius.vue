<script lang="ts" setup>
import { Menu } from '@lucide/vue'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Toggle } from '@/components/ui/toggle'
import { onMounted, onUnmounted, ref } from 'vue'

interface MenuItems {
  label: string
  href: string
  onClick?: () => void
}

defineProps<{
  items: MenuItems[]
}>()

const videreMenu = ref<boolean>(true)

const handleResize = () => {
  if (window.innerWidth < 640) {
    videreMenu.value = false
  } else {
    videreMenu.value = true
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="relative px-4 py-3">
    <div class="flex justify-end sm:hidden">
      <Toggle
        class="text-white hover:bg-white hover:text-black
               data-[state=on]:bg-white data-[state=on]:text-black"
        aria-label="Mostra o nascondi menu"
        :aria-expanded="videreMenu"
        aria-controls="portfolio-navigation"
        @click="videreMenu = !videreMenu"
      >
        <Menu :size="24" />
      </Toggle>
    </div>

    <nav
  v-if="videreMenu"
  id="portfolio-navigation"
  aria-label="Main navigation"
  class="absolute right-0 top-full z-50 flex justify-end
         bg-black px-4 pb-4 sm:static sm:p-0"
>
      <NavigationMenu>
        <NavigationMenuList
  class="flex-col items-end! gap-2 sm:flex-row sm:items-center!"
>
          <NavigationMenuItem
            v-for="item in items"
            :key="item.href"
          >
            <NavigationMenuLink as-child class="rounded-full!">
              <a
                :href="item.href"
                @click.prevent="item.onClick ? item.onClick() : null"
                class="block rounded-full border border-white
                       px-3 py-1 text-sm text-white
                       hover:bg-white hover:text-black"
              >
                {{ item.label }}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  </div>
</template>