# Quickstart: Data Engineer Portfolio MVP

## Prerequisites

- Node.js version compatible with the selected Vite release
- npm or the package manager chosen during implementation
- GitHub repository with GitHub Pages enabled for deployment validation

## Setup

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Expected outcome:

- Local dev server starts successfully.
- Home route displays Home/Hero, About, Skills, Projects, and Contact sections.
- Project cards link to direct project detail routes.

## Production Build Validation

```bash
npm run build
```

Expected outcome:

- TypeScript strict compilation and production build complete without errors.
- Production assets are emitted to `dist/`.

If a separate type-check script is added:

```bash
npm run typecheck
```

Expected outcome:

- TypeScript reports no errors.

## Route Validation

Validate:

- `/` renders the portfolio home sections.
- `/projects/:projectId` renders each of the four launch projects.
- An unknown route such as `/projects/not-a-project` shows a clear not-found state with navigation back to Projects or home.
- Clean direct project URLs work in the deployed GitHub Pages environment through `BrowserRouter` and the `404.html` SPA fallback.

See [contracts/ui-routes.md](./contracts/ui-routes.md).

## Content Validation

Validate centralized data:

- `src/data/profile.ts` contains profile and contact content.
- `src/data/skills.ts` contains grouped skills.
- `src/data/projects.ts` contains exactly four MVP projects:
  - one Data Engineering
  - one AI
  - one ML
  - one EMG signals system
- Adding another project only requires content/assets changes, not `ProjectCard` changes.
- Adding/removing skills only requires `skills.ts` changes, not `SkillGroup` changes.

See [data-model.md](./data-model.md).

## Project Card Validation

For every project card, confirm:

- title is visible
- concise description is visible
- technologies are visible without destroying card readability
- detail-page link is present
- GitHub repository link is present when public
- unavailable/private repository state is shown when no public repository exists
- missing optional images do not produce broken placeholders

## Project Detail Validation

For every project detail page, confirm:

- overview
- problem statement
- architecture
- technology stack
- engineering decisions
- implementation details
- challenges
- results
- screenshots or diagrams when available
- repository link or unavailable/private state
- navigation back to Projects or home

## Responsive Validation

Check mobile, tablet, and desktop viewport sizes.

Expected outcome:

- No horizontal scrolling.
- Project cards transition cleanly from single-column to multi-column layout.
- Project details remain readable on narrow screens.
- Navigation remains usable and accessible.

## Accessibility Validation

Validate manually or with available tooling:

- semantic landmarks and heading order
- keyboard access to navigation, project links, repository links, and contact links
- visible focus states
- meaningful link labels
- sufficient contrast in dark theme
- meaningful image alternative text
- decorative visuals do not interfere with assistive technologies

## GitHub Pages Deployment Validation

Deployment should be automated with GitHub Actions from the main branch.

Expected outcome:

- Workflow installs dependencies.
- Workflow runs build validation.
- Workflow publishes `dist/` to GitHub Pages.
- Production site loads under the repository base path.
- Production assets resolve correctly.
- `BrowserRouter` uses the same repository base path as Vite.
- `404.html` is included in the production output.
- Clean direct project URLs, such as `/projects/databricks-lakehouse` or the equivalent real project ID, work after browser refresh, direct visit, and external navigation.

## README Validation

Confirm README documents:

- project purpose
- portfolio overview
- technology stack
- architecture overview
- prerequisites
- installation
- local development
- production build
- project structure
- GitHub Pages deployment
- how portfolio content can be updated
