<script setup lang="ts">
import { Mail, Github, Linkedin } from 'lucide-vue-next';

const store = usePortfolioStore();

const getIconComponent = (kind: string) => {
  const iconMap: Record<string, any> = {
    email: Mail,
    github: Github,
    linkedin: Linkedin,
  };
  return iconMap[kind];
};
</script>

<template>
  <footer class="border-t border-border py-8 text-sm text-muted-foreground">
    <div class="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {{ new Date().getFullYear() }} {{ store.profile.name }}. {{ store.profile.role }}.
      </p>
      <nav aria-label="Footer contact links" class="flex flex-wrap gap-3">
        <a
          v-for="method in store.contactMethods"
          :key="method.kind"
          :href="method.href"
          :target="method.external ? '_blank' : undefined"
          :rel="method.external ? 'noreferrer' : undefined"
          :aria-label="`Visit ${method.label}`"
          class="inline-flex items-center justify-center rounded-full border border-border p-2 transition hover:border-foreground hover:text-foreground"
        >
          <component :is="getIconComponent(method.kind)" class="size-5" />
        </a>
      </nav>
    </div>
  </footer>
</template>
