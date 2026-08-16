# Research: Data Engineer Portfolio MVP

## Decision: Use a single Vite React application at the repository root

**Rationale**: The MVP is a frontend-only static portfolio. A single app keeps setup, build, deployment, and maintenance straightforward while satisfying the required Home and project detail routes.

**Alternatives considered**:

- Split frontend/backend structure: rejected because backend work is explicitly out of scope.
- Monorepo/package split: rejected because it adds complexity without current reuse needs.

## Decision: Use React Router for `/` and `/projects/:projectId`

**Rationale**: Direct project URLs are an approved requirement. React Router provides simple declarative routing for the home route, detail pages, and unknown project handling.

**Alternatives considered**:

- Anchor-only single-page sections: rejected because direct project detail pages are required.
- Custom router: rejected because React Router is standard, already requested, and avoids bespoke routing bugs.

## Decision: Use BrowserRouter with a GitHub Pages 404.html SPA fallback for clean direct routes

**Rationale**: GitHub Pages serves static files and does not naturally rewrite all direct URLs to the app entry point. Clean project URLs such as `/projects/databricks-lakehouse` are required, so the selected strategy is `BrowserRouter` plus a `404.html` fallback that preserves the requested path and redirects to the app entry point under the configured repository base path. Vite `base` and React Router `basename` must use the same repository subpath for production.

**Alternatives considered**:

- HashRouter: rejected because it produces hash-based URLs and does not preserve the required clean route shape.
- Backend/server rewrites: rejected because the MVP is frontend-only and hosted on GitHub Pages.

## Decision: Centralize content in typed data modules without a service layer

**Rationale**: The constitution requires centralized maintainable content and a future API migration path. Typed data modules keep the MVP simple while allowing components to remain prop-driven and independent of data origin.

**Alternatives considered**:

- Hardcoding content in components: rejected because adding projects/skills would require changing presentation logic.
- Repository/service/factory abstraction: rejected as premature; no API or persistence exists in the MVP.

## Decision: Define explicit TypeScript domain types for profile, skills, projects, visuals, and project details

**Rationale**: Strict TypeScript and structured portfolio content reduce content mistakes and make requirements testable, especially around repository availability, project categories, required detail sections, and optional images.

**Alternatives considered**:

- Loose object literals without exported types: rejected because they weaken maintainability and validation.
- Runtime schema validation: rejected unless later justified; static curated data does not require additional dependency.

## Decision: Use Tailwind CSS for the professional minimalist dark UI

**Rationale**: Tailwind is approved by the constitution and supports responsive layout, focus states, dark theme styling, and consistent spacing without a large UI framework.

**Alternatives considered**:

- Large component framework: rejected because it conflicts with dependency discipline and can impose unwanted visual style.
- Custom CSS only: acceptable but less aligned with the approved stack and existing constitution.

## Decision: Keep validation proportional and behavior-focused

**Rationale**: The MVP needs reliable routing, content rendering, responsive behavior, keyboard access, repository states, and static deployment. Validation should prove these outcomes without overbuilding a test suite.

**Alternatives considered**:

- Large end-to-end stack from the start: rejected unless existing tooling or later risk justifies it.
- Manual-only validation: insufficient for build and TypeScript gates, but acceptable for responsive and keyboard checks when documented.

## Decision: Use GitHub Actions to build and deploy `dist/` to GitHub Pages

**Rationale**: Automated deployment from main ensures repeatable static hosting and validates the production build before publishing.

**Alternatives considered**:

- Manual deployment: rejected because it is more error-prone.
- Server-based hosting: rejected because GitHub Pages is the required target.
