<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href: string;
    variant?: 'primary' | 'secondary';
    external?: boolean;
    ariaLabel?: string;
    class?: string;
  }>(),
  {
    variant: 'primary',
    external: false,
    ariaLabel: undefined,
    class: ''
  }
);

const variantClasses = {
  primary: 'bg-primary text-primary-foreground shadow-lg shadow-black/10 hover:opacity-90 dark:shadow-black/20',
  secondary:
    'border border-border bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
};

const classes = computed(
  () =>
    `inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 ${variantClasses[props.variant]} ${props.class}`
);
</script>

<template>
  <a
    v-if="external"
    :href="href"
    target="_blank"
    rel="noreferrer"
    :aria-label="ariaLabel"
    :class="classes"
  >
    <slot />
  </a>
  <NuxtLink v-else :to="href" :aria-label="ariaLabel" :class="classes">
    <slot />
  </NuxtLink>
</template>
