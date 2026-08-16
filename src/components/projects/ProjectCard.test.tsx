import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  it('renders title, description, technologies, detail link, and public repository link', () => {
    const project = projects.find((candidate) => candidate.repositoryPublic);

    expect(project).toBeDefined();
    render(
      <MemoryRouter>
        <ProjectCard project={project!} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: project!.title })).toBeInTheDocument();
    expect(screen.getByText(project!.shortDescription)).toBeInTheDocument();
    expect(screen.getByText(project!.technologies[0])).toBeInTheDocument();
    expect(screen.getByRole('link', { name: new RegExp(`View details for ${project!.title}`) })).toHaveAttribute(
      'href',
      `/projects/${project!.id}`
    );
    expect(screen.getByRole('link', { name: new RegExp(`Open GitHub repository for ${project!.title}`) })).toHaveAttribute(
      'href',
      project!.githubUrl
    );
  });

  it('renders an unavailable repository state without a broken link', () => {
    const project = projects.find((candidate) => !candidate.repositoryPublic);

    expect(project).toBeDefined();
    render(
      <MemoryRouter>
        <ProjectCard project={project!} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Repository unavailable/i)).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: new RegExp(`Open GitHub repository for ${project!.title}`) })
    ).not.toBeInTheDocument();
  });
});
