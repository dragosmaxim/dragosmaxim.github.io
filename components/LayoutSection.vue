<script setup lang="ts">
defineProps<{
  id?: string;
  eyebrow?: string;
  title: string;
}>();
</script>

<template>
  <section
    :id="id"
    class="scroll-mt-28 bg-transparent py-6 sm:py-8 lg:py-10"
    :aria-labelledby="`${id ?? title}-heading`"
  >
    <div class="w-full">
      <p v-if="eyebrow" class="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        {{ eyebrow }}
      </p>
      <h2 :id="`${id ?? title}-heading`" class="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {{ title }}
      </h2>
      <div class="mt-3 h-1 w-10 rounded-full bg-primary" />
      <div class="mt-7 text-muted-foreground">
        <slot />
      </div>
    </div>
  </section>
</template>
