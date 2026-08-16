<!--
Sync Impact Report
Version change: N/A -> 1.0.0
Modified principles:
- N/A -> I. Code Quality and Component Discipline
- N/A -> II. Frontend Architecture and Data Boundaries
- N/A -> III. Professional UI, UX, and Accessibility
- N/A -> IV. Validation and Completion Gates
- N/A -> V. Performance and Dependency Discipline
- N/A -> VI. Approved Technology and Deployment Constraints
- N/A -> VII. Centralized Content and Maintainability
- N/A -> VIII. Simplicity Before Generalization
Added sections:
- Technical Constraints
- Development Workflow and Quality Review
Removed sections:
- None
Follow-up TODOs:
- None
-->
# Data Engineer Portfolio Website Constitution

## Core Principles

### I. Code Quality and Component Discipline

TypeScript strict typing is mandatory for all application code. React components MUST be small,
focused, reusable, and responsible for one coherent presentation concern. UI components,
application data, configuration, and TypeScript types MUST remain clearly separated. Code MUST avoid
duplicated logic, giant multi-purpose components, unnecessary abstractions, and premature
generalization. Readable and maintainable implementations take precedence over clever or overly
compact code.

Rationale: The portfolio is expected to evolve as content, projects, and future integrations change;
strict typing and focused components reduce regression risk and keep changes localized.

### II. Frontend Architecture and Data Boundaries

The initial application is frontend-only. Backend concerns MUST NOT leak into presentation
components. Portfolio content MUST be centralized rather than hardcoded throughout components.
Components MUST consume typed data through props or appropriate frontend abstractions. Static data
access MUST be structured so it can later be replaced with API-backed access without a major frontend
rewrite. The architecture MUST allow a Python/FastAPI backend to be introduced later, but backend
infrastructure MUST NOT be implemented before a feature actually requires it.

Rationale: The site must remain simple for the initial static deployment while preserving a clean
migration path to API-backed portfolio content.

### III. Professional UI, UX, and Accessibility

The website MUST present an experienced Data Engineer through a professional, technical,
minimalist dark theme. The interface MUST be responsive from mobile through desktop. Pages and
components MUST use semantic HTML and accessible interaction patterns. Navigation and interactive
elements MUST support keyboard users. Animations MUST be restrained, purposeful, and evaluated for
performance and accessibility impact. Excessive gradients, neon effects, visual gimmicks, and
unnecessary animation are prohibited. Personal projects are the primary portfolio evidence and MUST
receive the strongest visual emphasis.

Rationale: The visual design must support credibility and clarity; portfolio evidence should be
easier to inspect than decorative effects.

### IV. Validation and Completion Gates

A feature is complete only when the application builds successfully, TypeScript compilation reports
no errors, responsive behavior has been considered and validated, navigation and interactive links
are keyboard accessible, and existing functionality remains operational after the change. Testing
effort MUST be proportional to feature complexity and risk. Tests MUST validate meaningful behavior
or contracts and MUST NOT merely duplicate implementation details.

Rationale: The site is small enough that every change should preserve build health, accessibility,
and user-facing behavior without creating brittle low-value tests.

### V. Performance and Dependency Discipline

Dependencies MUST remain minimal. New libraries MUST NOT be introduced when required functionality
can reasonably be implemented with the existing stack or platform/browser capabilities. The
application MUST avoid unnecessary client-side JavaScript, unnecessary re-renders, oversized assets,
and unoptimized images. Animations, images, third-party libraries, and external resources MUST be
reviewed for performance impact before inclusion. Simple implementations are preferred over
unnecessarily complex solutions.

Rationale: A portfolio site should load quickly, remain easy to deploy on static hosting, and avoid
operational complexity that does not improve the user experience.

### VI. Approved Technology and Deployment Constraints

The initial frontend stack is React, TypeScript, Vite, Tailwind CSS, and Lucide React. The
application MUST remain compatible with GitHub Pages deployment. No backend will be implemented
during the initial portfolio version. A future Python/FastAPI backend MAY be introduced, but current
frontend decisions MUST NOT unnecessarily prevent that evolution.

Rationale: Explicit technology boundaries keep implementation decisions consistent and prevent
scope creep during the initial static portfolio build.

### VII. Centralized Content and Maintainability

Project information, skill information, and profile information MUST live in centralized typed
data/configuration files. Adding a new project MUST NOT require modifying the ProjectCard component.
Adding or removing a skill MUST NOT require modifying the UI components that render skills. Shared
presentation patterns SHOULD use reusable components when doing so improves maintainability. Content
and presentation MUST remain separated wherever practical.

Rationale: Portfolio content will change more often than rendering logic; centralized typed content
keeps updates safe and predictable.

### VIII. Simplicity Before Generalization

When multiple implementations satisfy the requirements, the simplest maintainable solution MUST be
chosen. Existing platform and browser capabilities are preferred over additional dependencies.
Speculative abstractions for requirements that do not yet exist are prohibited. Backend
infrastructure MUST NOT be implemented before a feature requires it. State-management libraries MUST
NOT be introduced unless application complexity demonstrates a genuine need.

Rationale: The portfolio benefits from low complexity, fast iteration, and a codebase that is easy
to inspect and maintain.

## Technical Constraints

The project is a frontend-only portfolio website for an experienced Data Engineer. Specifications,
plans, and tasks MUST assume React, TypeScript, Vite, Tailwind CSS, and Lucide React unless the
constitution is amended. All TypeScript MUST be strict-type compatible. The application MUST support
GitHub Pages deployment and MUST avoid assumptions that require server-side execution in the initial
version.

Static portfolio data MUST be accessed through centralized typed modules or abstractions that can be
replaced later with API-backed data access. Presentation components MUST NOT contain backend
protocol details, persistence concerns, or hardcoded distributed content.

## Development Workflow and Quality Review

All specifications, implementation plans, and implementation tasks created for this project MUST
comply with this constitution. Before a feature is considered complete, the implementation MUST pass
the project build, TypeScript checks, relevant validation for responsive behavior, keyboard
accessibility checks for navigation and interactive links, and regression review for existing
functionality.

Implementation plans MUST call out any new dependency, animation, image-heavy section, external
resource, or architectural abstraction and justify it against the Performance and Simplicity
principles. Tasks MUST preserve the separation between typed content/configuration, TypeScript
types, reusable UI components, and application composition.

## Governance

This constitution supersedes conflicting project specifications, implementation plans, tasks, and
ad hoc development preferences. Any proposed work that conflicts with these principles MUST either
be revised to comply or require a constitution amendment before implementation.

Amendments MUST document the changed principle or section, the reason for the change, expected
migration impact, and the required semantic version bump. Versioning follows semantic versioning:
MAJOR for backward-incompatible governance changes or principle removals/redefinitions, MINOR for
new principles or materially expanded guidance, and PATCH for clarifications or non-semantic
wording changes.

Compliance review is required during specification, planning, task generation, and implementation.
Review MUST verify strict TypeScript expectations, frontend-only scope, centralized typed content,
professional minimalist dark UI, accessibility, responsive behavior, dependency discipline,
GitHub Pages compatibility, and the ability to introduce a future Python/FastAPI backend without a
major frontend rewrite.

**Version**: 1.0.0 | **Ratified**: 2026-08-16 | **Last Amended**: 2026-08-16
