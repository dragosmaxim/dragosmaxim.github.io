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
    skills: ['SQL', 'CosmosDB', 'PostgreSQL', 'MongoDB']
  },
  {
    id: 'Dataframe Databases',
    name: 'Dataframe Databases',
    skills: ['ArcticDB']
  },
  {
    id: 'AI',
    name: 'AI',
    skills: ['OpenAI SDK', 'Claude', 'Github Copilot', 'MS365Copilot']
  }
];
