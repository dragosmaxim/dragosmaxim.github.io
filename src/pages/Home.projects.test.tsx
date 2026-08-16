import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Home } from './Home';

describe('Home projects section', () => {
  it('renders project navigation, section order, and four project cards', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /View Projects/i })).toHaveAttribute('href', '/#projects');
    expect(screen.getByRole('link', { name: /^Projects$/i })).toHaveAttribute('href', '/#projects');

    const projectsSection = screen.getByRole('region', { name: /Featured engineering projects/i });
    const contactSection = screen.getByRole('region', { name: /Contact/i });

    expect(
      projectsSection.compareDocumentPosition(contactSection) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });
});
