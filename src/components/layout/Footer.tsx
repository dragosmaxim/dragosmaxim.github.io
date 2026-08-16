import { contactMethods, profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 px-6 py-8 text-sm text-slate-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. {profile.role}.
        </p>
        <nav aria-label="Footer contact links" className="flex flex-wrap gap-4">
          {contactMethods.map((method) => (
            <a
              key={method.kind}
              href={method.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noreferrer' : undefined}
              className="transition hover:text-white"
            >
              {method.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
