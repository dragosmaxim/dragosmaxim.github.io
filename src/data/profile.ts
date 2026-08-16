import type { ContactMethod, Profile } from '../types';

export const profile: Profile = {
  name: 'Maxim Dragos',
  role: 'Data Engineer',
  summary:
    'Data Engineer focused on reliable analytics platforms, production data pipelines, and applied machine learning systems that turn raw operational data into usable engineering and business insight.',
  email: 'maxim.dragos@example.com',
  githubUrl: 'https://github.com/maximdragos',
  linkedinUrl: 'https://www.linkedin.com/in/maxim-dragos/'
};

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email Maxim Dragos',
    href: `mailto:${profile.email}`,
    kind: 'email',
    external: false
  },
  {
    label: 'GitHub profile',
    href: profile.githubUrl,
    kind: 'github',
    external: true
  },
  {
    label: 'LinkedIn profile',
    href: profile.linkedinUrl,
    kind: 'linkedin',
    external: true
  }
];
