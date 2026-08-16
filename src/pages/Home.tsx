import { projects } from '../data/projects';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';

export function Home() {
  return (
    <main>
      <Section id="home" eyebrow="Portfolio" title="Data Engineer Portfolio">
        <div className="flex flex-col gap-6">
          <p className="max-w-3xl text-base leading-7 text-slate-300">
            A focused project showcase for data engineering, AI, machine learning, and EMG signal
            systems.
          </p>
          <nav aria-label="Primary page navigation" className="flex flex-wrap gap-3">
            <Button href="/#projects">View Projects</Button>
            <Button href="/#projects" variant="secondary">
              Projects
            </Button>
          </nav>
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Project evidence"
        title="Featured engineering projects"
        className="pt-8"
      >
        <div className="space-y-8">
          <p className="max-w-3xl text-base leading-7 text-slate-300">
            Four MVP projects cover the required launch categories and link to detailed engineering
            narratives.
          </p>
          <ProjectGrid projects={projects} />
        </div>
      </Section>

      <Section id="contact" eyebrow="Next step" title="Contact">
        <p className="max-w-3xl text-base leading-7 text-slate-300">
          Contact details are intentionally left for the dedicated contact story. The project
          showcase is available above.
        </p>
      </Section>
    </main>
  );
}
