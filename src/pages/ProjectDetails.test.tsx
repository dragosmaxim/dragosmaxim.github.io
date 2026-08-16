import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { projects } from '../data/projects';
import { ProjectDetails } from './ProjectDetails';

function renderRoute(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('ProjectDetails', () => {
  it('renders required narrative sections for a known project', () => {
    const project = projects[0];

    renderRoute(`/projects/${project.id}`);

    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Overview/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Problem statement/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Architecture/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Technology stack/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Engineering decisions/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Implementation details/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Challenges/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Results/i })).toBeInTheDocument();
  });

  it('renders a not-found state for an unknown project', () => {
    renderRoute('/projects/not-a-project');

    expect(screen.getByRole('heading', { name: /Project not found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back to projects/i })).toHaveAttribute('href', '/#projects');
  });
});
