import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Section } from './components/layout/Section';

function HomePlaceholder() {
  return (
    <main>
      <Section id="home" eyebrow="Portfolio" title="Data Engineer Portfolio">
        <p className="max-w-3xl text-base leading-7 text-slate-300">
          Foundational application shell is ready. User story sections will be implemented in later
          phases.
        </p>
      </Section>
    </main>
  );
}

function ProjectRoutePlaceholder() {
  return (
    <main>
      <Section title="Project details">
        <p className="max-w-3xl text-base leading-7 text-slate-300">
          Project detail routing is configured. Project detail rendering starts in User Story 1.
        </p>
      </Section>
    </main>
  );
}

function NotFound() {
  return (
    <main>
      <Section title="Page not found">
        <p className="max-w-3xl text-base leading-7 text-slate-300">
          The requested route does not exist yet. Return to the portfolio home route.
        </p>
      </Section>
    </main>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Routes>
        <Route path="/" element={<HomePlaceholder />} />
        <Route path="/projects/:projectId" element={<ProjectRoutePlaceholder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
