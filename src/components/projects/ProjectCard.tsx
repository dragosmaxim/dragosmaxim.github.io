import type { Project } from '../../types';
import { Button } from '../ui/Button';
import { Tag } from '../ui/Tag';

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<Project['category'], string> = {
  'data-engineering': 'Data Engineering',
  ai: 'AI',
  ml: 'Machine Learning',
  'emg-signals': 'EMG Signals'
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-slate-950/30 transition hover:border-sky-300/50">
      {project.image ? (
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
          {categoryLabels[project.category]}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={`/projects/${project.id}`} aria-label={`View details for ${project.title}`}>
            View details
          </Button>
          {project.repositoryPublic && project.githubUrl ? (
            <Button
              href={project.githubUrl}
              variant="secondary"
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
      </div>
    </article>
  );
}
