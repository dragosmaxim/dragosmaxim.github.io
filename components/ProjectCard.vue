<script setup lang="ts">
import type { Project } from '../src/types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <a
    v-if="project.repositoryPublic && project.githubUrl"
    :href="project.githubUrl"
    target="_blank"
    rel="noreferrer"
    :aria-label="`${project.title} on GitHub`"
    class="group flex min-h-[11rem] flex-col rounded-xl border border-border bg-card p-2.5 text-left text-card-foreground shadow-sm shadow-black/10 transition duration-300 hover:border-ring/30 hover:shadow-md hover:-translate-y-0.5 dark:shadow-black/20"
  >
    <div class="flex flex-1 flex-col">
      <h3 class="mb-2 text-base font-semibold leading-snug text-card-foreground">
        {{ project.title }}
      </h3>
      <p class="flex-1 text-sm leading-[1.4] text-muted-foreground">
        {{ project.shortDescription }}
      </p>
      <div class="flex flex-wrap gap-1" :aria-label="`${project.title} technologies`">
        <UiTag v-for="technology in project.technologies" :key="technology">
          {{ technology }}
        </UiTag>
      </div>
    </div>
  </a>
  <article
    v-else
    class="group flex min-h-[11rem] flex-col rounded-xl border border-border bg-card p-2.5 text-left text-card-foreground shadow-sm shadow-black/10 transition duration-300 dark:shadow-black/20"
  >
    <div class="flex flex-1 flex-col">
      <h3 class="mb-2 text-base font-semibold leading-snug text-card-foreground">
        {{ project.title }}
      </h3>
      <p class="flex-1 text-sm leading-[1.4] text-muted-foreground">
        {{ project.shortDescription }}
      </p>
      <div class="flex flex-wrap gap-1" :aria-label="`${project.title} technologies`">
        <UiTag v-for="technology in project.technologies" :key="technology">
          {{ technology }}
        </UiTag>
      </div>
    </div>
  </article>
</template>
