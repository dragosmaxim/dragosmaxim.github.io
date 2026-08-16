---

description: "Task list for Data Engineer Portfolio MVP implementation"
---

# Tasks: Data Engineer Portfolio MVP

**Input**: Design documents from `/specs/001-data-engineer-portfolio/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-routes.md, quickstart.md

**Tests**: Included because the specification defines mandatory user-scenario testing and the plan requires focused behavior validation where tooling supports it.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- All task descriptions include exact file paths

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the frontend-only Vite React project, tooling, and baseline repository files.

- [X] T001 Create npm package manifest with React, React DOM, React Router, Vite, TypeScript, Tailwind CSS, Lucide React, Vitest, Testing Library, ESLint, and build/test scripts in package.json
- [X] T002 Create strict TypeScript app configuration in tsconfig.json and Vite-specific TypeScript configuration in tsconfig.node.json
- [X] T003 Create Vite configuration with GitHub Pages-compatible base constant and Vitest jsdom setup in vite.config.ts
- [X] T004 [P] Create Tailwind and PostCSS configuration files in tailwind.config.js and postcss.config.js
- [X] T005 [P] Create ESLint configuration for React and TypeScript in eslint.config.js
- [X] T006 Create root HTML entry point with portfolio metadata and dark-theme defaults in index.html
- [X] T007 Create source directory structure for assets, components, data, pages, types, tests, and styles in src/

**Checkpoint**: Project can install dependencies and has the expected source layout.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared types, static data boundaries, routing shell, styling foundation, and deployment support required by all user stories.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T008 Define ProjectCategory, Profile, SkillCategory, ProjectVisual, ProjectDetails, Project, and ContactMethod types in src/types/index.ts
- [X] T009 Create centralized profile and contact data with typed exports in src/data/profile.ts
- [X] T010 Create centralized skill category data with typed exports in src/data/skills.ts
- [X] T011 Create centralized four-project MVP data with one data-engineering, one ai, one ml, and one emg-signals project in src/data/projects.ts
- [X] T012 Create project data validation helpers for unique IDs, required category coverage, repository URL rules, and required detail sections in src/data/validation.ts
- [X] T013 Create global Tailwind stylesheet with dark theme tokens, base typography, focus styles, and responsive defaults in src/index.css
- [X] T014 Create React application entry point with BrowserRouter basename support in src/main.tsx
- [X] T015 Create shared application route composition for `/`, `/projects/:projectId`, and unknown route fallback in src/App.tsx
- [X] T016 [P] Create reusable Section layout component with semantic section landmarks in src/components/layout/Section.tsx
- [X] T017 [P] Create reusable Footer component with contact/profile links in src/components/layout/Footer.tsx
- [X] T018 [P] Create reusable Button link primitive with internal/external variants in src/components/ui/Button.tsx
- [X] T019 [P] Create reusable Tag primitive for technologies and skills in src/components/ui/Tag.tsx
- [X] T020 Create GitHub Pages SPA fallback preserving requested path, query, and hash in public/404.html
- [X] T021 Create GitHub Actions workflow to install dependencies, run build validation, and deploy dist/ to Pages in .github/workflows/deploy.yml
- [X] T022 Create base behavior test setup file for React Testing Library and jsdom matchers in src/tests/setup.ts

**Checkpoint**: Shared app infrastructure, content data, routing, styling, and deployment skeleton are ready.

---

## Phase 3: User Story 1 - Evaluate portfolio projects (Priority: P1) 🎯 MVP

**Goal**: Visitors can inspect the four MVP projects as the primary portfolio evidence, open detail pages, and use repository links or see explicit unavailable states.

**Independent Test**: Open the Projects section, confirm exactly four category-covered project cards are prominent and scannable, open each detail route, verify required narrative sections, and confirm public/private repository behavior.

### Tests for User Story 1

> **NOTE: Write these tests FIRST and ensure they fail before implementation.**

- [X] T023 [P] [US1] Add data validation tests for four required project categories, unique project IDs, repository rules, and required detail sections in src/data/projects.test.ts
- [X] T024 [P] [US1] Add project card rendering tests for title, description, technologies, detail link, and repository/unavailable state in src/components/projects/ProjectCard.test.tsx
- [X] T025 [P] [US1] Add project detail route tests for known projects and unknown project fallback in src/pages/ProjectDetails.test.tsx
- [X] T026 [P] [US1] Add home Projects section integration test confirming the visible "View Projects" primary CTA, direct primary navigation link to Projects, Projects-before-Contact section order, and four project cards in src/pages/Home.projects.test.tsx

### Implementation for User Story 1

- [X] T027 [P] [US1] Implement ProjectCard with project title, concise description, technology tags, detail link, and repository/unavailable state in src/components/projects/ProjectCard.tsx
- [X] T028 [P] [US1] Implement ProjectGrid to render typed project cards without hardcoded project content in src/components/projects/ProjectGrid.tsx
- [X] T029 [US1] Implement Projects section composition using ProjectGrid and centralized projects data in src/pages/Home.tsx
- [X] T030 [US1] Implement ProjectDetails page resolving projectId, rendering all required narrative sections, visuals when available, repository state, and back navigation in src/pages/ProjectDetails.tsx
- [X] T031 [US1] Implement unknown project not-found UI with a link back to the Projects section in src/pages/ProjectDetails.tsx
- [X] T032 [US1] Add optional project asset placeholders or documented asset paths without broken image rendering in src/assets/projects/README.md
- [X] T033 [US1] Wire project card links and detail routes through React Router using `/projects/:projectId` in src/App.tsx

**Checkpoint**: User Story 1 is independently functional and validates the MVP project showcase.

---

## Phase 4: User Story 2 - Understand professional profile and skills (Priority: P2)

**Goal**: Visitors can understand the owner's Data Engineer positioning, professional profile, and structured technical skill set without using project detail pages.

**Independent Test**: Open Home, About, and Skills sections and confirm each communicates clear professional value from centralized typed content.

### Tests for User Story 2

- [ ] T034 [P] [US2] Add profile and skills data tests for required profile fields, contact URLs, and non-empty skill categories in src/data/profile-skills.test.ts
- [ ] T035 [P] [US2] Add Home/About/Skills rendering tests for role positioning, profile summary, grouped skills, and primary project/contact calls to action in src/pages/Home.profile-skills.test.tsx

### Implementation for User Story 2

- [ ] T036 [P] [US2] Implement SkillGroup component rendering typed skill categories and skill tags in src/components/skills/SkillGroup.tsx
- [ ] T037 [US2] Implement Home/Hero section with Data Engineer positioning and calls to Projects and Contact in src/pages/Home.tsx
- [ ] T038 [US2] Implement About section from centralized profile data in src/pages/Home.tsx
- [ ] T039 [US2] Implement Skills section using centralized skills data and SkillGroup components in src/pages/Home.tsx

**Checkpoint**: User Story 2 is independently functional and communicates profile and skills context.

---

## Phase 5: User Story 3 - Navigate and contact from any device (Priority: P3)

**Goal**: Visitors can navigate Home, About, Skills, Projects, Contact, and project detail pages on mobile, tablet, and desktop, then use visible contact methods without a backend form.

**Independent Test**: Navigate by pointer and keyboard across common viewport sizes, verify focus states and section links, and confirm Contact shows email/professional links without a submitted form.

### Tests for User Story 3

- [ ] T040 [P] [US3] Add navigation behavior tests for section links, mobile menu state, project route links, and keyboard-reachable controls in src/components/navigation/Navbar.test.tsx
- [ ] T041 [P] [US3] Add contact rendering tests for email, GitHub, LinkedIn, meaningful link labels, and no backend form in src/pages/Home.contact.test.tsx

### Implementation for User Story 3

- [ ] T042 [US3] Implement responsive Navbar with section anchors, project navigation, mobile menu button, keyboard support, and visible focus behavior in src/components/navigation/Navbar.tsx
- [ ] T043 [US3] Integrate Navbar and Footer into the shared app shell in src/App.tsx
- [ ] T044 [US3] Implement Contact section with email, GitHub, LinkedIn, and no form submission flow in src/pages/Home.tsx
- [ ] T045 [US3] Apply responsive card grids, readable project detail layouts, and no-horizontal-scroll rules in src/index.css and Tailwind classes across src/pages/Home.tsx and src/pages/ProjectDetails.tsx
- [ ] T046 [US3] Add accessible external-link labels and focus-visible states for navigation, repository, professional profile, and contact links across src/components/navigation/Navbar.tsx, src/components/projects/ProjectCard.tsx, src/pages/Home.tsx, and src/pages/ProjectDetails.tsx

**Checkpoint**: User Story 3 is independently functional across device sizes and input methods.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, documentation, static deployment readiness, and cleanup across all stories.

- [ ] T047 [P] Add README documentation for purpose, portfolio overview, stack, architecture, setup, development, build, deployment, project structure, and content updates in README.md
- [ ] T048 [P] Add environment and deployment notes for GitHub Pages base path and Router basename in .env.example
- [ ] T049 Run TypeScript, lint, test, production bundle build validation, and production bundle size review, then document results in specs/001-data-engineer-portfolio/validation.md
- [ ] T050 Perform quickstart route, project card, project detail, responsive, keyboard, and GitHub Pages fallback validation from specs/001-data-engineer-portfolio/quickstart.md and record findings in specs/001-data-engineer-portfolio/validation.md
- [ ] T051 Review dependency list for constitution compliance, confirm no unnecessary runtime dependencies were introduced, and remove or justify any unplanned dependency in package.json and specs/001-data-engineer-portfolio/validation.md
- [ ] T052 Final content review to ensure exactly four MVP projects, project screenshots and diagrams are optimized before deployment, project cards are visually more prominent than decorative elements, manual review confirms engineering projects are emphasized over decorative content, no broken links, no broken images, and no backend/auth/database/CMS/contact-form implementation in src/data/projects.ts, src/pages/Home.tsx, and src/pages/ProjectDetails.tsx; record validation results in specs/001-data-engineer-portfolio/validation.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; starts immediately.
- **Foundational (Phase 2)**: Depends on Phase 1; blocks all user-story implementation.
- **User Story 1 (Phase 3)**: Depends on Phase 2; MVP scope.
- **User Story 2 (Phase 4)**: Depends on Phase 2; can run after or in parallel with US1 once shared data/components are stable.
- **User Story 3 (Phase 5)**: Depends on Phase 2; navigation integration touches App/Home/ProjectCard, so coordinate with US1 and US2 edits.
- **Polish (Phase 6)**: Depends on completion of selected user stories.

### User Story Dependencies

- **US1 (P1)**: No dependency on other stories after Foundational; delivers MVP project evidence.
- **US2 (P2)**: No dependency on US1 after Foundational, but shares Home.tsx composition.
- **US3 (P3)**: No dependency on US1/US2 after Foundational, but integrates navigation and contact across the app shell.

### Within Each User Story

- Tests precede implementation and should fail before the corresponding implementation task.
- Data/type changes precede components that consume them.
- Project cards and grids precede Projects section composition.
- Project route wiring precedes direct route validation.
- Navigation/contact implementation precedes responsive and keyboard validation.

### Parallel Opportunities

- T004 and T005 can run in parallel after T001.
- T016, T017, T018, and T019 can run in parallel after T013.
- T023, T024, T025, and T026 can run in parallel after Phase 2.
- T027 and T028 can run in parallel after US1 tests are written.
- T034 and T035 can run in parallel after Phase 2.
- T040 and T041 can run in parallel after Phase 2.
- T047 and T048 can run in parallel during polish.

---

## Parallel Example: User Story 1

```bash
Task: "Add data validation tests for four required project categories, unique project IDs, repository rules, and required detail sections in src/data/projects.test.ts"
Task: "Add project card rendering tests for title, description, technologies, detail link, and repository/unavailable state in src/components/projects/ProjectCard.test.tsx"
Task: "Add project detail route tests for known projects and unknown project fallback in src/pages/ProjectDetails.test.tsx"
Task: "Add home Projects section integration test confirming the visible \"View Projects\" primary CTA, direct primary navigation link to Projects, Projects-before-Contact section order, and four project cards in src/pages/Home.projects.test.tsx"
```

---

## Parallel Example: User Story 2

```bash
Task: "Add profile and skills data tests for required profile fields, contact URLs, and non-empty skill categories in src/data/profile-skills.test.ts"
Task: "Implement SkillGroup component rendering typed skill categories and skill tags in src/components/skills/SkillGroup.tsx"
```

---

## Parallel Example: User Story 3

```bash
Task: "Add navigation behavior tests for section links, mobile menu state, project route links, and keyboard-reachable controls in src/components/navigation/Navbar.test.tsx"
Task: "Add contact rendering tests for email, GitHub, LinkedIn, meaningful link labels, and no backend form in src/pages/Home.contact.test.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate project card/detail behavior independently.
5. Demo or deploy the project-focused MVP if acceptable.

### Incremental Delivery

1. Setup + Foundational establishes the app shell, typed data, routing, and deployment baseline.
2. US1 delivers the project showcase MVP.
3. US2 adds professional context and skills.
4. US3 completes navigation, contact, responsiveness, and accessibility.
5. Polish validates build, tests, deployment, documentation, and constitution compliance.

### Parallel Team Strategy

1. Complete Setup and Foundational tasks together.
2. Split US1 tests/components, US2 profile/skills work, and US3 navigation/contact work across separate files where possible.
3. Coordinate changes to src/pages/Home.tsx and src/App.tsx because multiple stories integrate there.
4. Run final validation only after selected user stories are merged.

## Notes

- [P] tasks use different files and have no dependency on incomplete same-file work.
- [US1], [US2], and [US3] labels map directly to prioritized stories in spec.md.
- Tests should validate behavior and content contracts, not implementation details.
- Keep implementation frontend-only; do not add backend, auth, database, CMS, blog, Redux, Zustand, Axios, large UI frameworks, or animation libraries.
- Commit after each task or logical group when using version control.
