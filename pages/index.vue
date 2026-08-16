<script setup lang="ts">
import { Mail, Github, Linkedin } from 'lucide-vue-next';

const store = usePortfolioStore();

const initials = computed(() =>
  store.profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
);

const showProfileImage = ref(Boolean(store.profile.image));

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
  <main>
    <section id="home" class="scroll-mt-28 py-16 text-center sm:py-24 lg:py-28">
      <div class="mx-auto max-w-4xl">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          {{ store.profile.role }}
        </p>
        <div class="mx-auto mt-7 grid size-52 place-items-center overflow-hidden rounded-full border-4 border-foreground bg-[#c2c9c7] shadow-2xl shadow-black/10 dark:shadow-black/30 sm:size-64">
          <img
            v-if="store.profile.image && showProfileImage"
            :src="store.profile.image.src"
            :alt="store.profile.image.alt"
            class="size-full object-contain"
            @error="showProfileImage = false"
          >
          <span v-else class="text-3xl font-bold text-card-foreground">{{ initials }}</span>
        </div>
        <h1 class="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-6xl">
          Hi, I'm {{ store.profile.name }}.
        </h1>
        <p class="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
          {{ store.profile.summary }}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <UiButton href="/#projects">View Projects</UiButton>
          <UiButton href="/#contact" variant="secondary">Contact</UiButton>
          <a
            :href="store.profile.calUrl"
            target="_blank"
            rel="noreferrer"
            aria-label="Book a call with Dragos Maxim"
            class="inline-flex items-center gap-2 rounded-xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:bg-emerald-950/50 dark:text-emerald-400 dark:hover:bg-emerald-950/70 dark:focus-visible:ring-offset-background"
          >
            <span aria-hidden="true" class="size-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]" />
            Available for new projects
          </a>
        </div>
      </div>

    </section>

    <LayoutSection id="about" title="About Me">
      <div class="max-w-6xl space-y-8">
        <p class="max-w-2xl text-base leading-[1.5] text-muted-foreground sm:text-lg">
          Proactive, results driven Data Engineer with hands-on experience in Python, databases, data modeling, Azure, and Databricks. Focused on building reliable data solutions across ingestion, transformation, and integration, with an emphasis on data quality and scalable data workflows. Also experienced in AI-enabled data fixes, including RAG pipelines, data enrichment, and LLM-based automation.
        </p>

        <div class="rounded-2xl border border-border bg-card/80 p-5 sm:p-6">
          <h3 class="text-3xl font-bold tracking-tight text-card-foreground">Experience</h3>
          <div class="relative mt-4 pl-6">
            <span class="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-primary" aria-hidden="true" />
            <div class="space-y-5">
              <div v-for="experience in store.experienceItems" :key="experience.id" class="relative pl-8 pb-5">
                <div class="flex flex-wrap items-end gap-2 text-[1.55rem] font-semibold leading-tight text-card-foreground">
                  <span>{{ experience.role }}, {{ experience.organization }}</span>
                  <span v-if="experience.location" class="text-[1.05rem] font-normal text-muted-foreground">{{ experience.location }}</span>
                </div>
                <div class="mt-2 text-[1.05rem] text-muted-foreground">{{ experience.period }}</div>
                <div v-if="experience.id !== store.experienceItems.at(-1)?.id" class="mt-5 border-t border-dashed" style="border-color: var(--timeline-divider);" />
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-border bg-card/80 p-5 sm:p-6">
          <h3 class="text-3xl font-bold tracking-tight text-card-foreground">Education</h3>
          <div class="relative mt-4 pl-6">
            <span class="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-primary" aria-hidden="true" />
            <div class="space-y-5">
              <div v-for="education in store.educationItems" :key="education.id" class="relative pl-8 pb-5">
                <div class="text-[1.55rem] font-semibold leading-tight text-card-foreground">
                  {{ education.degree }}
                </div>
                <div class="mt-2 text-[1.05rem] text-muted-foreground">
                  Gheorghe Asachi Technical University of Iasi, Romania
                </div>
                <div v-if="education.id !== store.educationItems.at(-1)?.id" class="mt-5 border-t border-dashed" style="border-color: var(--timeline-divider);" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>

    <LayoutSection id="skills" eyebrow="Skills" title="Technical Skills">
      <div class="grid gap-5 md:grid-cols-2">
        <article
          v-for="category in store.skillCategories"
          :key="category.id"
          class="rounded-2xl border border-border bg-card p-6 transition duration-200 hover:border-ring/50"
        >
          <h3 class="text-lg font-semibold text-card-foreground">{{ category.name }}</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <UiTag v-for="skill in category.skills" :key="skill">{{ skill }}</UiTag>
          </div>
        </article>
      </div>
    </LayoutSection>

    <LayoutSection
    id="projects"
    title="Projects"
    class="text-left [&>div>div:first-of-type]:mx-0 [&>div>h2]:mx-0 [&>div>h2]:text-left"
    >
      <div class="space-y-12">
        <p class="mx-auto max-w-3xl text-center text-base leading-7 text-muted-foreground">
        </p>
        <ProjectGrid :projects="store.featuredProjects" />
      </div>
    </LayoutSection>

    <LayoutSection id="contact" eyebrow="Contact" title="Let's keep in touch">
      <div class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_18rem]">
        <p class="max-w-3xl text-base leading-7 text-muted-foreground">
        </p>
        <div class="grid gap-3">
          <UiButton
            v-for="method in store.contactMethods"
            :key="method.kind"
            :href="method.href"
            :variant="method.kind === 'email' ? 'primary' : 'secondary'"
            :external="method.external"
            class="flex items-center justify-center gap-2"
          >
            <component :is="getIconComponent(method.kind)" class="size-4" />
            <span>{{ method.label }}</span>
          </UiButton>
        </div>
      </div>
    </LayoutSection>
  </main>
</template>
