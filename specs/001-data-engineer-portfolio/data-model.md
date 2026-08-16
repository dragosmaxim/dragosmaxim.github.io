# Data Model: Data Engineer Portfolio MVP

## Profile

Represents the portfolio owner's professional identity and contact references.

### Fields

- `name`: non-empty display name
- `role`: non-empty professional role/title
- `summary`: concise professional profile summary
- `email`: contact email displayed in the Contact section
- `githubUrl`: external GitHub profile URL
- `linkedinUrl`: external LinkedIn profile URL

### Validation Rules

- Required fields must be present and non-empty.
- External profile URLs must be valid absolute URLs.
- Email must be suitable for display as a direct contact method.

## SkillCategory

Represents a group of related skills.

### Fields

- `id`: unique stable identifier
- `name`: display name for the skill group
- `skills`: ordered list of skill names

### Validation Rules

- `id` values must be unique.
- `name` must be non-empty.
- `skills` must contain at least one skill.
- Adding/removing skills must not require changes to rendering components.

## Project

Represents one showcased portfolio project.

### Fields

- `id`: unique stable route identifier used by `/projects/:projectId`
- `title`: project display title
- `category`: one of `data-engineering`, `ai`, `ml`, or `emg-signals`
- `shortDescription`: concise card summary
- `technologies`: ordered list of technologies displayed on card/detail pages
- `githubUrl`: optional GitHub repository URL
- `repositoryPublic`: whether the repository is publicly available
- `image`: optional card-level visual
- `featured`: whether the project receives primary visual emphasis
- `details`: expanded `ProjectDetails`

### Relationships

- Each `Project` has exactly one `ProjectDetails`.
- Each optional `image` references one `ProjectVisual`.
- The MVP project set contains exactly one project in each required category.

### Validation Rules

- `id` values must be unique and stable.
- The route `/projects/:projectId` resolves by matching `Project.id`.
- `repositoryPublic: true` requires a valid `githubUrl`.
- `repositoryPublic: false` must render an explicit unavailable/private state instead of a broken link.
- Missing optional images must not render empty or broken placeholders.
- `technologies` must contain at least one item.

## ProjectDetails

Represents the detail-page narrative for one project.

### Fields

- `overview`: project overview
- `problemStatement`: problem the project addresses
- `architecture`: architecture narrative
- `technologyStack`: detailed technology list
- `engineeringDecisions`: important design/tradeoff decisions
- `implementationDetails`: implementation narrative
- `challenges`: meaningful challenges encountered
- `results`: results or outcomes
- `screenshotsOrDiagrams`: optional list of visual assets

### Validation Rules

- Required narrative sections must be present for every MVP project.
- `screenshotsOrDiagrams` is optional; missing visuals do not block a project detail page.
- Visuals that are included must provide descriptive alternative text unless decorative.

## ProjectVisual

Represents a screenshot, diagram, or visual asset.

### Fields

- `src`: asset path
- `alt`: descriptive alternative text
- `caption`: optional caption

### Validation Rules

- Meaningful visuals require non-empty `alt`.
- Asset paths must resolve in production builds.
- Images and diagrams should be optimized before deployment.

## ContactMethod

Represents a direct way for visitors to contact or evaluate the owner.

### Fields

- `label`: display label
- `href`: destination URL or mail link
- `kind`: contact method type, such as email, GitHub, or LinkedIn
- `external`: whether the destination leaves the site

### Validation Rules

- Contact links must have meaningful labels.
- External links must clearly communicate their destination.
- No backend contact-form processing is allowed.

## State Transitions

The MVP has no persisted user state. Relevant UI states are transient:

- mobile navigation: closed ↔ open
- repository availability: public link shown ↔ unavailable state shown
- project lookup: found project ↔ unknown project fallback
- optional image: visual rendered ↔ visual omitted
