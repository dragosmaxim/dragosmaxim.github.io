import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  external?: boolean;
}

const variants = {
  primary: 'bg-sky-400 text-slate-950 hover:bg-sky-300',
  secondary: 'border border-white/15 bg-white/5 text-slate-100 hover:border-sky-300 hover:text-white'
};

export function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  className = '',
  ...props
}: ButtonProps) {
  const buttonClassName = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={buttonClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={buttonClassName} {...props}>
      {children}
    </Link>
  );
}
