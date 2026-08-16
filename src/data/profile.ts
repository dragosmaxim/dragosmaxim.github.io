import type { ContactMethod, EducationItem, ExperienceItem, Profile } from '../types';

export const profile: Profile = {
  name: 'Dragos Maxim',
  role: 'Data Engineer',
  summary:
    'Data Engineer focused on building reliable data and AI solutions',
  email: 'maximd20.md@gmail.com',
  githubUrl: 'https://github.com/dragosmaxim',
  linkedinUrl: 'https://www.linkedin.com/in/dragos-maxim/',
  calUrl: 'https://cal.com/dragosmaxim',
  image: {
    src: '/profile.jpg',
    alt: 'Portrait of Dragos Maxim'
  }
};

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email Dragos Maxim',
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

export const experienceItems: ExperienceItem[] = [
  {
    id: 'endava',
    role: 'Data Engineer',
    organization: 'Endava, Iasi, Romania',
    period: 'May 2025 - Present',
    summary: 'Data engineering and AI engineering.',
    highlights: []
  },
  {
    id: 'ADC Eastern Europe',
    role: 'System Engineer',
    organization: 'ADC Eastern Europe, Iasi, Romania',
    period: 'June 2023 - Nov 2024',
    summary: 'System requirements engineering.',
    highlights: []
  },
  {
    id: 'Vitesco Technologies',
    role: 'Developer',
    organization: 'Vitesco Technologies, Iasi, Romania',
    period: 'Oct 2021 - Jul 2022',
    summary: 'Embedded software development.',
    highlights: []
  }
];

export const educationItems: EducationItem[] = [
  {
    id: 'gheorghe-asachi-technical-university',
    degree: 'Master of Engineering in Electronics Engineering, Telecommunications, and IT',
  },

  {
    id: 'gheorghe-asachi-technical-university2',
    degree: 'Bachelor of Engineering in Electronics Engineering, Telecommunications, and IT',
  },

  {
    id: 'gheorghe-asachi-technical-university3',
    degree: 'Psychopedagogical Module Certification',
  }

];
