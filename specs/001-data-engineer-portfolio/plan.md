# Implementation Plan: Data Engineer Portfolio MVP

**Branch**: `001-data-engineer-portfolio` | **Date**: 2026-08-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-data-engineer-portfolio/spec.md`

## Summary

Build a frontend-only professional Data Engineer portfolio MVP using React, strict TypeScript, Vite, Tailwind CSS, React Router, and Lucide React. The application will present Home, About, Skills, Projects, and Contact sections on the home route and direct project detail pages at `/projects/:projectId`. Portfolio content will be centralized in typed data modules so project cards, skill groups, and profile presentation remain reusable and independent from the current static data source. Deployment will use GitHub Actions to publish the Vite production build to GitHub Pages.

## Technical Context

**Language/Version**: TypeScript with strict typing, React application source, modern browser runtime

**Primary Runtime and Build Dependencies**: React, React DOM, React Router, Vite, Tailwind CSS, Lucide React

**Storage**: Static typed content modules and optimized static assets only; no database, backend, CMS, or client persistence

**Testing**: Production build, TypeScript compilation, focused behavior tests where project tooling supports them, and manual validation for responsive layout, keyboard navigation, routing, external links, missing images, and repository-unavailable states

**Target Platform**: Static web application hosted on GitHub Pages

**Project Type**: Single frontend web application

**Performance Goals**: Production build must succeed; project screenshots and diagrams must be optimized before deployment; production bundle size must be reviewed during final validation; runtime dependencies must remain limited to necessary approved libraries; unused third-party libraries must be removed before completion.

**Constraints**: Frontend-only MVP; no authentication, backend services, databases, CMS, blog, contact-form backend, Redux, Zustand, Axios, large UI frameworks, or unnecessary animation libraries; GitHub Pages-compatible routing and asset paths

**Scale/Scope**: Four launch projects: one Data Engineering, one AI, one ML, and one EMG signals system project; one home route with portfolio sections; four direct project detail routes generated from centralized project data

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Code Quality and Component Discipline**: PASS — Plan separates app composition, pages, reusable components, typed content, domain types, and assets. Strict TypeScript is mandatory.
- **II. Frontend Architecture and Data Boundaries**: PASS — MVP is frontend-only with centralized typed data. Presentation components receive typed props and do not know whether data is static or future API-backed.
- **III. Professional UI, UX, and Accessibility**: PASS — Plan requires minimalist dark design, responsive layout, semantic HTML, keyboard-accessible navigation, visible focus states, and restrained CSS-only animation if any.
- **IV. Validation and Completion Gates**: PASS — Plan includes build, TypeScript, routing, responsive, keyboard, link, missing-image, unavailable-repository, and regression validation.
- **V. Performance and Dependency Discipline**: PASS — Runtime dependencies remain limited to the approved frontend stack and Lucide React. Development-only tooling is intentionally limited to Vitest, React Testing Library, jest-dom, user-event, and ESLint for validation and code quality; these tools are justified, minimal, and do not affect the production bundle. No large UI, state, request, or animation libraries.
- **VI. Approved Technology and Deployment Constraints**: PASS — Uses React, TypeScript, Vite, Tailwind CSS, Lucide React, GitHub Actions, and GitHub Pages. React Router is added because direct project routes are a product requirement.
- **VII. Centralized Content and Maintainability**: PASS — Profile, projects, and skills live in typed data modules; adding projects or skills does not require changing rendering components.
- **VIII. Simplicity Before Generalization**: PASS — No backend, service layer, repository pattern, global state library, or speculative data-access abstraction. Future API compatibility is preserved by prop boundaries and typed data shapes.

No constitution violations or unresolved clarifications.

## Project Structure

### Documentation (this feature)

```text
specs/001-data-engineer-portfolio/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-routes.md
└── tasks.md
```

### Source Code (repository root)

```text
.github/
└── workflows/
    └── deploy.yml

public/
└── 404.html

src/
├── assets/
│   └── projects/
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   ├── navigation/
│   │   └── Navbar.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectGrid.tsx
│   ├── skills/
│   │   └── SkillGroup.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Tag.tsx
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
├── pages/
│   ├── Home.tsx
│   └── ProjectDetails.tsx
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

**Structure Decision**: Use a single Vite React application at the repository root. The structure follows the requested guidance with no backend or package split. `public/404.html` is required to support GitHub Pages client-side route fallback with `BrowserRouter` and clean direct project URLs.

## Technical Architecture

The app is composed from a small set of page and presentation components:

- `main.tsx`: bootstraps React and router.
- `App.tsx`: defines route composition and shared layout.
- `Home.tsx`: composes Home/Hero, About, Skills, Projects, and Contact sections from centralized data.
- `ProjectDetails.tsx`: reads `projectId` from the route, resolves the matching `Project` from `src/data/projects.ts`, renders project narrative sections, and handles unknown IDs gracefully.
- Layout/navigation components: provide consistent section layout, site navigation, footer, and accessible mobile navigation behavior.
- Project components: render typed project lists/cards and never import hardcoded project details outside typed props.
- Skill components: render typed skill categories and never hardcode skill names in presentation logic.
- UI components: small reusable primitives for links/buttons/tags when reuse improves clarity.

No global state-management library is planned. Component state, if needed, is limited to UI-local concerns such as mobile navigation open/closed state.

## TypeScript Domain Model

Domain types live in `src/types/index.ts`. Exact field names may be refined during implementation, but the model must stay explicit and strict:

```ts
export type ProjectCategory = 'data-engineering' | 'ai' | 'ml' | 'emg-signals';

export interface Profile {
  name: string;
  role: string;
  summary: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ProjectDetails {
  overview: string;
  problemStatement: string;
  architecture: string;
  technologyStack: string[];
  engineeringDecisions: string[];
  implementationDetails: string[];
  challenges: string[];
  results: string[];
  screenshotsOrDiagrams?: ProjectVisual[];
}

export interface ProjectVisual {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  technologies: string[];
  githubUrl?: string;
  repositoryPublic: boolean;
  image?: ProjectVisual;
  featured: boolean;
  details: ProjectDetails;
}
```

Validation expectations:

- Project IDs are unique and stable because they form direct route URLs.
- MVP project data contains exactly one project for each required category.
- Public repositories include a valid GitHub URL.
- Non-public repositories set `repositoryPublic: false` and do not render broken links.
- Visual assets include meaningful `alt` text unless decorative; missing images produce no broken placeholders.

## Centralized Content Strategy

- `src/data/profile.ts` exports one typed `Profile`.
- `src/data/skills.ts` exports typed `SkillCategory[]`.
- `src/data/projects.ts` exports typed `Project[]`.
- Components receive content through props:

```text
projects.ts
  ↓ Project[]
ProjectGrid
  ↓ Project
ProjectCard
```

```text
skills.ts
  ↓ SkillCategory[]
Home / Skills section
  ↓ SkillCategory
SkillGroup
```

Adding a project requires adding a `Project` object and optional assets. Adding or removing a skill requires updating `skills.ts`. Presentation components must not be edited for routine content changes.

## Routing Strategy

Use React Router with required routes:

- `/` renders `Home`.
- `/projects/:projectId` renders `ProjectDetails`.

Home-page navigation uses accessible section links such as `/#about`, `/#skills`, `/#projects`, and `/#contact`, or equivalent scroll/focus behavior. Project cards link to `/projects/:projectId`. Unknown project IDs render a clear not-found state with a route back to the Projects section or home page.

GitHub Pages routing must use `BrowserRouter` with clean URLs and a `public/404.html` SPA fallback. `HashRouter` is not an implementation-time alternative for this feature because clean direct project URLs such as `/projects/databricks-lakehouse` are required.

For repository-based GitHub Pages hosting, Vite must be configured with the repository base path, such as `/repo-name/`. React Router must use the same base path through `basename`, so internal routes resolve under the deployed subpath while preserving route shape:

```text
https://<owner>.github.io/<repo-name>/projects/databricks-lakehouse
```

The `404.html` fallback must be emitted to the production output and must preserve the originally requested path, query string, and hash before redirecting to the app entry point under the configured repository base path. After the app loads, React Router resolves the preserved route and renders the matching project detail page. This fallback is required for browser refreshes, external links, and direct visits to project URLs on GitHub Pages.

## Project Detail Architecture

`ProjectDetails.tsx` resolves the project by `projectId` and renders:

- title and category
- repository link or unavailable state
- overview
- problem statement
- architecture
- technology stack
- engineering decisions
- implementation details
- challenges
- results
- screenshots or diagrams when available
- navigation back to Projects or home

This is not a documentation platform. Use straightforward sections and small presentational helpers only where they reduce repetition.

## Styling Strategy

Use Tailwind CSS for layout, typography, spacing, color, borders, responsive behavior, and focus states. Visual direction:

- dark, minimalist, technical, professional
- high contrast text and controls
- consistent content widths and section rhythm
- restrained borders and muted surfaces
- projects receive the strongest visual hierarchy
- no neon-heavy styling, large animation systems, excessive gradients, or broad glassmorphism

Animations, if any, are CSS/Tailwind-only and limited to subtle hover/focus transitions that do not block accessibility.

## Responsive Strategy

Use mobile-first layout decisions:

- Single-column content on mobile.
- Project cards transition to multi-column layouts on tablet/desktop.
- Project detail pages maintain readable line lengths and stack visual/text sections on narrow screens.
- Navigation provides an accessible mobile experience with keyboard-operable controls and visible focus.
- No horizontal scrolling for cards, project details, screenshots, or diagrams.

## Accessibility Strategy

Plan implementation and validation around:

- semantic landmarks and heading hierarchy
- keyboard-accessible navigation and project links
- visible focus indicators
- meaningful link labels, especially for external GitHub and professional links
- sufficient color contrast in the dark theme
- descriptive alternative text for meaningful images and diagrams
- decorative visuals hidden from assistive technologies when appropriate
- mobile navigation that can be operated with keyboard and screen-reader semantics

## Performance Considerations

- Keep runtime dependencies to React, React DOM, React Router, and Lucide React unless a later task documents a specific need.
- Avoid global state libraries and request libraries.
- Avoid large UI frameworks and animation packages.
- Optimize project screenshots and diagrams before deployment.
- Review production bundle size during final validation and investigate unexpected large output before deployment.
- Remove unused third-party libraries before completion.
- Prefer static imports or Vite-supported assets for predictable production paths.
- Keep state local and minimal to avoid unnecessary re-renders.

## Testing and Validation Approach

Validation must cover:

- production build succeeds
- TypeScript strict compilation reports no errors
- project screenshots and diagrams are optimized before deployment
- production bundle size is reviewed for unexpected large output
- runtime dependencies are limited to necessary approved libraries
- unused third-party libraries are absent from package.json
- home route renders required sections
- project route resolves each of the four launch projects
- unknown project identifiers produce a graceful not-found state
- project cards show title, description, technologies, detail link, and repository link or unavailable state
- project detail pages show all required narrative sections
- missing optional project images do not render broken placeholders
- repository-unavailable state does not render broken GitHub links
- keyboard navigation reaches and activates navigation, project, repository, and contact links
- mobile, tablet, and desktop layouts remain readable without horizontal scrolling
- GitHub Pages production deployment serves assets under the configured repository base path and supports clean direct project URLs through the `404.html` SPA fallback

Testing stack should remain small. If automated tests are added, use focused behavior tests and avoid testing implementation details. Manual validation is acceptable for responsive and keyboard checks unless tooling already exists.

## GitHub Pages Deployment Strategy

Use GitHub Actions to build and deploy from the main branch:

- install dependencies
- run TypeScript/build validation
- build Vite production assets
- publish `dist/` to GitHub Pages

Plan requirements:

- Configure Vite `base` for repository-based GitHub Pages hosting.
- Configure `BrowserRouter` with the same repository base path through `basename`.
- Ensure production asset paths work under the repository subpath.
- Include a `public/404.html` SPA fallback that redirects direct GitHub Pages requests back to the app entry point while preserving the originally requested route.
- Verify clean direct project URLs after deployment, including `/projects/databricks-lakehouse` or the equivalent real project ID.
- Keep deployment frontend-only; no server runtime is introduced.

## README Plan

The README must document:

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
- how to update profile, skills, project content, and project assets

## Future FastAPI Integration Boundary

Do not implement FastAPI, API requests, repository patterns, services, or factories in the MVP. Preserve future migration by:

- keeping presentation components prop-driven
- keeping domain types explicit
- centralizing content in data modules
- avoiding direct hardcoding of distributed portfolio content inside rendering components

Future path:

```text
Current:
Static typed data
  ↓
React pages/components

Future:
FastAPI
  ↓
API/data-access boundary
  ↓
Same React pages/components receiving typed data
```

## Dependencies and Justification

| Dependency | Type | Purpose | Justification | Constitution dependency-discipline compliance |
|------------|------|---------|---------------|---------------------------------------------|
| React | Runtime | UI rendering | Approved stack for the portfolio frontend | Required baseline frontend library defined by the constitution; not an optional addition. |
| React DOM | Runtime | Browser rendering | Required by React web applications | Minimal required runtime companion for React browser rendering. |
| TypeScript | Development/build | Static typing | Constitution requires strict typing | Directly enforces strict typing and maintainability requirements without adding browser runtime behavior. |
| Vite | Development/build | Build/dev tooling | Approved stack and simple static build output | Required approved tooling for a static, GitHub Pages-compatible build; keeps build complexity low. |
| Tailwind CSS | Build/runtime CSS output | Styling | Approved stack; supports responsive, accessible, dependency-light styling | Approved styling approach that avoids a large UI component framework and compiles to static CSS. |
| React Router | Runtime | Home and direct project routes | Required for `/` and `/projects/:projectId` routing | Narrow runtime dependency justified by the product requirement for clean direct project URLs. |
| Lucide React | Runtime | Minimal icons | Approved by constitution; use sparingly for navigation/contact/project affordances | Approved lightweight icon dependency; usage is constrained to purposeful UI affordances. |
| Vitest | Development/test | Unit and focused behavior test runner | Supports project data validation, route/page behavior tests, and component contract tests required by the plan and tasks | Development-only tooling that validates meaningful behavior without adding runtime weight or broad framework complexity. |
| React Testing Library | Development/test | React component and page behavior testing | Enables tests that exercise user-visible rendering and interactions for project cards, detail pages, navigation, profile, skills, and contact sections | Development-only dependency aligned with the constitution requirement to test meaningful behavior rather than implementation details. |
| @testing-library/jest-dom | Development/test | DOM-specific test assertions | Provides readable assertions for accessibility-relevant and user-visible DOM states in component tests | Development-only assertion helper that improves test clarity and maintainability without affecting production output. |
| @testing-library/user-event | Development/test | User interaction simulation in tests | Enables realistic keyboard, pointer, navigation, and link interaction tests required for accessibility and behavior validation | Development-only helper used to validate accessible interaction patterns required by the constitution. |
| ESLint | Development/quality | Static code quality checks for React and TypeScript | Supports maintainable code, catches common defects, and enforces consistency during implementation | Development-only quality gate that supports code discipline without introducing runtime code or architectural complexity. |
| GitHub Actions | Deployment automation | Required for repeatable GitHub Pages deployment | Hosted CI/deployment mechanism; does not add application runtime dependencies. |
| GitHub Pages | Static hosting | Required hosting target | Static hosting target required by the constitution and compatible with the frontend-only MVP. |

Rejected dependencies: FastAPI, backend services, databases, authentication, CMS, Redux, Zustand, Axios, large UI frameworks, and animation libraries because they are outside MVP scope or unnecessary for static portfolio requirements.

## Constitution Check: Post-Design

- **Code Quality and Component Discipline**: PASS — Components, types, data, pages, and assets are separated.
- **Frontend Architecture and Data Boundaries**: PASS — Static typed data is centralized and presentation components are prop-driven.
- **Professional UI, UX, and Accessibility**: PASS — Design strategy and validation explicitly cover minimalist dark UI, responsiveness, keyboard access, focus states, semantic structure, and contrast.
- **Validation and Completion Gates**: PASS — Build, TypeScript, routing, responsive, keyboard, and regression checks are planned.
- **Performance and Dependency Discipline**: PASS — Runtime dependencies remain limited to the approved frontend stack. Development-only validation and quality tooling is explicitly justified, minimal, and excluded from the production bundle.
- **Approved Technology and Deployment Constraints**: PASS — Stack and deployment target match constitution; no backend is introduced.
- **Centralized Content and Maintainability**: PASS — Content modules and domain types are explicit.
- **Simplicity Before Generalization**: PASS — Future API compatibility is achieved through boundaries, not speculative architecture.

No complexity tracking entries are required because there are no constitution violations.
