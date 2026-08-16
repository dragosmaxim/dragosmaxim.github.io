import { defineStore } from 'pinia';
import { contactMethods, educationItems, experienceItems, profile } from '../src/data/profile';
import { projects } from '../src/data/projects';
import { skillCategories } from '../src/data/skills';

export const usePortfolioStore = defineStore('portfolio', () => {
  const featuredProjects = computed(() => projects.filter((project) => project.featured));

  return {
    contactMethods,
    educationItems,
    featuredProjects,
    experienceItems,
    profile,
    projects,
    skillCategories
  };
});
