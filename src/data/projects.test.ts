import { describe, expect, it } from 'vitest';
import { projects } from './projects';
import {
  findDuplicateProjectIds,
  getMissingRequiredCategories,
  hasRequiredDetailSections,
  hasValidRepositoryState,
  validateProjects
} from './validation';

describe('project data', () => {
  it('contains exactly four MVP projects covering all required categories', () => {
    expect(projects).toHaveLength(4);
    expect(getMissingRequiredCategories(projects)).toEqual([]);
  });

  it('uses unique project IDs for routes', () => {
    expect(findDuplicateProjectIds(projects)).toEqual([]);
  });

  it('uses valid public repository links and explicit unavailable states', () => {
    expect(projects.every(hasValidRepositoryState)).toBe(true);
  });

  it('contains all required detail sections for every project', () => {
    expect(projects.every(hasRequiredDetailSections)).toBe(true);
    expect(validateProjects(projects)).toEqual([]);
  });
});
