import type { ReactNode } from 'react';
import { Leaf } from 'lucide-react';

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
        <span
          className={`mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase text-softgreen ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <Leaf className="h-4 w-4" strokeWidth={1.7} />
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-[23px] font-bold leading-tight text-heading sm:text-[28px] md:text-[32px]">
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
