import type { Project, ProjectCategory } from '../types';

export const requiredProjectCategories: ProjectCategory[] = [
  'data-engineering',
  'ai',
  'ml',
  'emg-signals'
];

const githubRepositoryUrlPattern = /^https:\/\/github\.com\/[^/\s]+\/[^/\s]+\/?$/;

export function findDuplicateProjectIds(projects: Project[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const project of projects) {
    if (seen.has(project.id)) {
      duplicates.add(project.id);
    }

    seen.add(project.id);
  }

  return [...duplicates];
}

export function getMissingRequiredCategories(projects: Project[]): ProjectCategory[] {
  const availableCategories = new Set(projects.map((project) => project.category));

  return requiredProjectCategories.filter((category) => !availableCategories.has(category));
}

export function hasValidRepositoryState(project: Project): boolean {
  if (!project.repositoryPublic) {
    return project.githubUrl === undefined;
  }

  return typeof project.githubUrl === 'string' && githubRepositoryUrlPattern.test(project.githubUrl);
}

export function hasRequiredDetailSections(project: Project): boolean {
  const { details } = project;

  return (
    Boolean(details.overview.trim()) &&
    Boolean(details.problemStatement.trim()) &&
    Boolean(details.architecture.trim()) &&
    details.technologyStack.length > 0 &&
    details.engineeringDecisions.length > 0 &&
    details.implementationDetails.length > 0 &&
    details.challenges.length > 0 &&
    details.results.length > 0
  );
}

export function validateProjects(projects: Project[]): string[] {
  const errors: string[] = [];
  const duplicates = findDuplicateProjectIds(projects);
  const missingCategories = getMissingRequiredCategories(projects);

  if (duplicates.length > 0) {
    errors.push(`Duplicate project IDs: ${duplicates.join(', ')}`);
  }

  if (missingCategories.length > 0) {
    errors.push(`Missing required project categories: ${missingCategories.join(', ')}`);
  }

  for (const project of projects) {
    if (!hasValidRepositoryState(project)) {
      errors.push(`Invalid repository state for project: ${project.id}`);
    }

    if (!hasRequiredDetailSections(project)) {
      errors.push(`Missing required detail sections for project: ${project.id}`);
    }
  }

  return errors;
}
