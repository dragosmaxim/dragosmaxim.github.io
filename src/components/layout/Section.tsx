import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-16 sm:py-20 ${className}`} aria-labelledby={`${id ?? title}-heading`}>
      <div className="mx-auto w-full max-w-6xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
            {eyebrow}
          </p>
        ) : null}
        <h1 id={`${id ?? title}-heading`} className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
