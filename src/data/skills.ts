import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'data-platforms',
    name: 'Data Platforms & Storage',
    skills: ['Databricks', 'Delta Lake', 'Airflow']
  },
  {
    id: 'Programming Languages',
    name: 'Programming Languages',
    skills: ['Python','Spark']
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    skills: ['Azure', 'AWS', 'Docker', 'CI/CD', 'Linux']
  },
  {
    id: 'Databases',
    name: 'Databases',
    skills: ['SQL', 'CosmosDB']
  },
  {
    id: 'Data Engineering',
    name: 'Data Engineering',
    skills: ['ETL/ELT', 'Data Modeling', 'Batch processing', 'Star schema']
  }
];
