import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Section } from './components/layout/Section';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';

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
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
