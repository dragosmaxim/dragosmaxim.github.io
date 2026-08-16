import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'data-platforms',
    name: 'Data Platforms',
    skills: ['Python', 'SQL', 'Spark', 'dbt', 'Airflow', 'Databricks']
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Linux']
  },
  {
    id: 'analytics-ml',
    name: 'Analytics & ML',
    skills: ['Feature Engineering', 'Model Evaluation', 'Time Series', 'scikit-learn', 'Pandas']
  },
  {
    id: 'engineering-practices',
    name: 'Engineering Practices',
    skills: ['TypeScript', 'Testing', 'Data Quality', 'Observability', 'Documentation']
  }
];
