<script setup lang="ts">
const route = useRoute();
const store = usePortfolioStore();

const project = computed(() =>
  store.projects.find((candidate) => candidate.id === route.params.projectId)
);
</script>

<template>
  <main>
    <LayoutSection v-if="!project" eyebrow="Unknown route" title="Project not found">
      <div class="space-y-6">
        <p class="max-w-3xl text-base leading-7 text-muted-foreground">
          No project matches this URL. Return to the project showcase to inspect the available MVP
          projects.
        </p>
        <UiButton href="/#projects" variant="secondary" aria-label="Back to projects">
          Back to projects
        </UiButton>
      </div>
    </LayoutSection>

    <LayoutSection v-else :eyebrow="project.category.replace('-', ' ')" :title="project.title">
      <div class="space-y-8">
        <figure
          v-if="project.image"
          class="overflow-hidden rounded-3xl border border-border bg-card"
        >
          <img :src="project.image.src" :alt="project.image.alt" class="w-full object-cover" />
          <figcaption v-if="project.image.caption" class="px-5 py-4 text-sm text-muted-foreground">
            {{ project.image.caption }}
          </figcaption>
        </figure>

        <div class="flex flex-wrap gap-3">
          <UiButton href="/#projects" variant="secondary">Back to projects</UiButton>
          <UiButton
            v-if="project.repositoryPublic && project.githubUrl"
            :href="project.githubUrl"
            external
            :aria-label="`Open GitHub repository for ${project.title}`"
          >
            Repository
          </UiButton>
          <span
            v-else
            class="inline-flex items-center justify-center rounded-full border border-border bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
          >
            Repository unavailable
          </span>
        </div>

        <div class="flex flex-wrap gap-2" :aria-label="`${project.title} technology stack`">
          <UiTag v-for="technology in project.details.technologyStack" :key="technology">
            {{ technology }}
          </UiTag>
        </div>

        <div class="grid gap-5">
          <section class="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10">
            <h2 class="text-xl font-semibold text-card-foreground">Overview</h2>
            <p class="mt-4 text-sm leading-6 text-muted-foreground">{{ project.details.overview }}</p>
          </section>
          <section class="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10">
            <h2 class="text-xl font-semibold text-card-foreground">Problem statement</h2>
            <p class="mt-4 text-sm leading-6 text-muted-foreground">{{ project.details.problemStatement }}</p>
          </section>
          <section class="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10">
            <h2 class="text-xl font-semibold text-card-foreground">Architecture</h2>
            <p class="mt-4 text-sm leading-6 text-muted-foreground">{{ project.details.architecture }}</p>
          </section>
          <section class="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10">
            <h2 class="text-xl font-semibold text-card-foreground">Technology stack</h2>
            <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li v-for="item in project.details.technologyStack" :key="item">{{ item }}</li>
            </ul>
          </section>
          <section class="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10">
            <h2 class="text-xl font-semibold text-card-foreground">Engineering decisions</h2>
            <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li v-for="item in project.details.engineeringDecisions" :key="item">{{ item }}</li>
            </ul>
          </section>
          <section class="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10">
            <h2 class="text-xl font-semibold text-card-foreground">Implementation details</h2>
            <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li v-for="item in project.details.implementationDetails" :key="item">{{ item }}</li>
            </ul>
          </section>
          <section class="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10">
            <h2 class="text-xl font-semibold text-card-foreground">Challenges</h2>
            <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li v-for="item in project.details.challenges" :key="item">{{ item }}</li>
            </ul>
          </section>
          <section class="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10">
            <h2 class="text-xl font-semibold text-card-foreground">Results</h2>
            <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              <li v-for="item in project.details.results" :key="item">{{ item }}</li>
            </ul>
          </section>
        </div>
      </div>
    </LayoutSection>
  </main>
</template>
