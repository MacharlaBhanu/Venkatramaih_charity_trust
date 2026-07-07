import type { ReactNode } from 'react';
import { LeafBranch } from './Decorations';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: string;
  actions?: ReactNode;
  image?: string;
  imageAlt?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  image,
  imageAlt = '',
  centered = false,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-softblue/60 via-section to-page">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
      <LeafBranch className="absolute -left-4 top-8 h-72 w-40 opacity-50" />
      <LeafBranch className="absolute right-0 bottom-0 h-72 w-40 opacity-30" flip />

      <div className="container-page relative z-10 py-14 md:py-20">
        {centered ? (
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow && (
              <span className="eyebrow mb-4 justify-center">
                <span aria-hidden="true">✦</span>
                {eyebrow}
              </span>
            )}
            <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">{title}</h1>
            {subtitle && (
              <div className="mt-3 flex items-center justify-center gap-3" aria-hidden="true">
                <span className="h-px w-10 bg-line" />
                <span className="text-sky">♥</span>
                <span className="h-px w-10 bg-line" />
              </div>
            )}
            {subtitle && <p className="mt-2 text-lg font-medium text-ocean">{subtitle}</p>}
            {description && (
              <p className="mx-auto mt-4 max-w-2xl text-base text-body">{description}</p>
            )}
            {actions && <div className="mt-8 flex flex-wrap justify-center gap-4">{actions}</div>}
            {children}
          </div>
        ) : (
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="animate-fade-in">
              {eyebrow && (
                <span className="eyebrow mb-4">
                  <span aria-hidden="true">✦</span>
                  {eyebrow}
                </span>
              )}
              <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl md:text-[3.4rem]">
                {title}
              </h1>
              {subtitle && <p className="mt-3 text-xl font-medium text-ocean">{subtitle}</p>}
              {description && <p className="mt-5 max-w-xl text-base text-body">{description}</p>}
              {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
              {children}
            </div>
            {image && (
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-glass">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="eager"
                    className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[440px]"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
