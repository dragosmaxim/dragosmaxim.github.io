<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';

const navigationItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' }
];

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');

function toggleColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark';
}
</script>

<template>
  <div class="min-h-screen bg-background px-4 text-foreground sm:px-6">
    <header class="fixed left-1/2 top-2 z-50 w-[50%] max-w-[34rem] -translate-x-1/2 sm:top-3">
      <nav
        aria-label="Primary page navigation"
        class="overflow-x-auto rounded-full border border-border bg-card/90 px-1.5 py-0.5 shadow-md shadow-black/10 backdrop-blur-md dark:shadow-black/25"
      >
        <div class="flex min-w-max items-center justify-between gap-1">
          <NuxtLink
            to="/#home"
            class="inline-flex min-h-7 shrink-0 items-center rounded-full px-2 py-1 text-[0.98rem] font-black tracking-tight text-foreground transition duration-200 hover:bg-accent hover:text-accent-foreground"
            aria-label="Go to Dragos Maxim portfolio home"
          >
            Dragos Maxim
          </NuxtLink>
          <div class="flex items-center justify-center gap-0.5">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.href"
              :to="item.href"
              class="inline-flex min-h-7 items-center rounded-full px-2 py-1 text-sm font-medium text-muted-foreground transition duration-200 first:text-primary hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
          <button
            type="button"
            class="grid size-7 shrink-0 place-items-center rounded-full border border-border bg-secondary text-secondary-foreground transition duration-200 hover:bg-accent hover:text-accent-foreground"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleColorMode"
          >
            <Sun v-if="isDark" class="size-3" aria-hidden="true" />
            <Moon v-else class="size-3" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>

    <div class="mx-auto min-h-screen w-full max-w-6xl border-x border-border pt-24 sm:pt-28">
      <div class="px-4 sm:px-8 lg:px-12">
        <slot />
        <AppFooter />
      </div>
    </div>
  </div>
</template>
