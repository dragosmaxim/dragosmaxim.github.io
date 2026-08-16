<script setup lang="ts">
import type { Project } from '../src/types';

defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>
