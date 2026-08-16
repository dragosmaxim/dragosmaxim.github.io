# UI Route Contracts: Data Engineer Portfolio MVP

## Route: `/`

### Purpose

Display the portfolio home experience with Home/Hero, About, Skills, Projects, and Contact sections.

### Required Content

- Professional Data Engineer positioning
- About/profile summary
- Structured skills
- Four MVP project cards:
  - one Data Engineering project
  - one AI project
  - one ML project
  - one EMG signals system project
- Contact information and professional links

### Required Interactions

- Navigation to each home-page section
- Keyboard access to navigation, project detail links, repository links, and contact links
- Project card link to `/projects/:projectId`
- Repository link or explicit unavailable/private repository state

### Acceptance Signals

- Visitor reaches Projects in no more than one primary navigation action.
- Project cards remain scannable on mobile, tablet, and desktop.
- No horizontal scrolling is required on common viewport sizes.

## Route: `/projects/:projectId`

### Purpose

Display a direct project detail page for the project identified by `projectId`.

### Resolution

- `projectId` matches a `Project.id` from centralized project data.
- Matching project renders the detail page.
- Unknown project ID renders a graceful fallback state.

### Required Content for Known Projects

- Project title
- Category
- Repository link or explicit unavailable/private repository state
- Overview
- Problem statement
- Architecture
- Technology stack
- Engineering decisions
- Implementation details
- Challenges
- Results
- Screenshots or diagrams when available
- Obvious navigation back to Projects or portfolio home

### Required Interactions

- Direct URL can be opened from outside the website.
- In GitHub Pages production, direct URLs are clean BrowserRouter URLs under the repository base path, for example `/<repo-name>/projects/databricks-lakehouse`.
- GitHub Pages `404.html` fallback preserves the requested route and returns the visitor to the app entry point so React Router can render the matching project.
- Visitor can return to the Projects section or portfolio home in no more than one action.
- External repository links clearly communicate their destination.

### Unknown Project Behavior

- Do not crash or show a blank page.
- Show a clear message that the project was not found.
- Provide a link back to Projects or portfolio home.

## Section Anchor Contract

Home-page section anchors or equivalent accessible behavior must support:

- Home/Hero
- About
- Skills
- Projects
- Contact

Navigation labels must be meaningful, keyboard reachable, and preserve visible focus.

## External Link Contract

External links include GitHub repositories, GitHub profile, LinkedIn profile, and mail/contact links.

Requirements:

- Link text or accessible label identifies the destination.
- External profile/repository links are distinguishable from internal navigation.
- Broken repository links are not rendered when `repositoryPublic` is false.
