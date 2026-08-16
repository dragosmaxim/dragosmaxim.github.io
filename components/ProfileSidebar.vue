<script setup lang="ts">
import { Code2, Mail, Network } from 'lucide-vue-next';

const store = usePortfolioStore();

const sidebarStats = [
  { label: 'Primary focus', value: 'Data platforms' },
  { label: 'Delivery style', value: 'Reliable pipelines' },
  { label: 'Project depth', value: 'Architecture + execution' }
];

const initials = computed(() =>
  store.profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
);

const contactIcons = {
  email: Mail,
  github: Code2,
  linkedin: Network
};
</script>

<template>
  <aside class="rounded-[1.5rem] border border-[#3a3a3a] bg-[#1f1f20] p-6 shadow-2xl shadow-black/35 lg:fixed lg:top-24 lg:h-[calc(100vh-8.5rem)] lg:w-[21.5rem] lg:overflow-hidden lg:p-9">
    <div class="flex flex-col items-center text-center">
      <div class="grid size-36 place-items-center rounded-[2rem] bg-[#383838] text-4xl font-semibold text-white shadow-inner shadow-white/5">
        {{ initials }}
      </div>
      <h1 class="mt-8 text-3xl font-bold text-white">
        {{ store.profile.name }}
      </h1>
      <p class="mt-5 rounded-lg bg-[#2b2b2c] px-5 py-2 text-sm font-medium text-white">
        Experienced {{ store.profile.role }}
      </p>
    </div>

    <nav aria-label="Profile contact links" class="mt-9 grid gap-4 border-t border-[#3a3a3a] pt-8 sm:grid-cols-3 lg:grid-cols-1">
      <a
        v-for="method in store.contactMethods"
        :key="method.kind"
        :href="method.href"
        :target="method.external ? '_blank' : undefined"
        :rel="method.external ? 'noreferrer' : undefined"
        class="grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-4 rounded-xl text-left transition duration-200 hover:text-white"
      >
        <span class="grid size-14 place-items-center rounded-xl border border-[#343434] bg-[#202123] text-white shadow-lg shadow-black/20">
          <component :is="contactIcons[method.kind]" aria-hidden="true" class="size-5" :stroke-width="1.8" />
        </span>
        <span class="min-w-0">
          <span class="block text-xs font-semibold uppercase text-slate-500">
            {{ method.kind }}
          </span>
          <span class="mt-1 block truncate text-sm text-slate-100">{{ method.label }}</span>
        </span>
      </a>
    </nav>

    <div class="mt-8 border-t border-[#3a3a3a] pt-7">
      <p class="text-sm leading-6 text-slate-400">{{ store.profile.summary }}</p>
    </div>

    <div class="mt-7">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-white">
        Core stack
      </p>
      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="skill in store.skillCategories[0].skills.slice(0, 5)"
          :key="skill"
          class="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-zinc-100"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <dl class="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
      <div
        v-for="stat in sidebarStats"
        :key="stat.label"
        class="rounded-xl border border-[#343434] bg-[#202123] p-4"
      >
        <dt class="text-xs uppercase tracking-[0.2em] text-slate-500">{{ stat.label }}</dt>
        <dd class="mt-1 text-sm font-medium text-slate-100">{{ stat.value }}</dd>
      </div>
    </dl>
  </aside>
</template>
