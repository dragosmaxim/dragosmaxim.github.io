import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';

function NarrativeSection({
  title,
  children
}: {
  title: string;
  children: string | string[];
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {Array.isArray(children) ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
          {children.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm leading-6 text-slate-300">{children}</p>
      )}
    </section>
  );
}

export function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((candidate) => candidate.id === projectId);

  if (!project) {
    return (
      <main>
        <Section eyebrow="Unknown route" title="Project not found">
          <div className="space-y-6">
            <p className="max-w-3xl text-base leading-7 text-slate-300">
              No project matches this URL. Return to the project showcase to inspect the available
              MVP projects.
            </p>
            <Button href="/#projects" variant="secondary" aria-label="Back to projects">
              Back to projects
            </Button>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main>
      <Section eyebrow={project.category.replace('-', ' ')} title={project.title}>
        <div className="space-y-8">
          {project.image ? (
            <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <img src={project.image.src} alt={project.image.alt} className="w-full object-cover" />
              {project.image.caption ? (
                <figcaption className="px-5 py-4 text-sm text-slate-400">
                  {project.image.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <Button href="/#projects" variant="secondary">
              Back to projects
            </Button>
            {project.repositoryPublic && project.githubUrl ? (
              <Button
                href={project.githubUrl}
                external
                aria-label={`Open GitHub repository for ${project.title}`}
              >
                Repository
              </Button>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300">
                Repository unavailable
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
            {project.details.technologyStack.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>

          <div className="grid gap-5">
            <NarrativeSection title="Overview">{project.details.overview}</NarrativeSection>
            <NarrativeSection title="Problem statement">
              {project.details.problemStatement}
            </NarrativeSection>
            <NarrativeSection title="Architecture">{project.details.architecture}</NarrativeSection>
            <NarrativeSection title="Technology stack">
              {project.details.technologyStack}
            </NarrativeSection>
            <NarrativeSection title="Engineering decisions">
              {project.details.engineeringDecisions}
            </NarrativeSection>
            <NarrativeSection title="Implementation details">
              {project.details.implementationDetails}
            </NarrativeSection>
            <NarrativeSection title="Challenges">{project.details.challenges}</NarrativeSection>
            <NarrativeSection title="Results">{project.details.results}</NarrativeSection>
          </div>

          {project.details.screenshotsOrDiagrams?.length ? (
            <section className="grid gap-4">
              <h2 className="text-xl font-semibold text-white">Screenshots and diagrams</h2>
              {project.details.screenshotsOrDiagrams.map((visual) => (
                <figure
                  key={visual.src}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <img src={visual.src} alt={visual.alt} className="w-full object-cover" />
                  {visual.caption ? (
                    <figcaption className="px-5 py-4 text-sm text-slate-400">
                      {visual.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </section>
          ) : null}
        </div>
      </Section>
    </main>
  );
}
