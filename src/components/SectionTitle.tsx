import type { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  decorated?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  decorated = false,
  className = '',
}: SectionTitleProps) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span aria-hidden="true">✦</span>
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-[2rem]">
        {title}
      </h2>
      {decorated && (
        <div
          className={`mt-3 flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}
          aria-hidden="true"
        >
          <span className="h-px w-8 bg-line" />
          <span className="text-sky">♥</span>
          <span className="h-px w-8 bg-line" />
        </div>
      )}
      {subtitle && <p className="mt-3 text-base text-body">{subtitle}</p>}
    </div>
  );
}
