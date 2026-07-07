import type { ReactNode } from 'react';
import { Icon } from './Icon';

interface CTASectionProps {
  title: string;
  description?: string;
  actions: ReactNode;
  icon?: boolean;
}

export default function CTASection({
  title,
  description,
  actions,
  icon = true,
}: CTASectionProps) {
  return (
    <section className="container-page py-6">
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-seafoam px-6 py-10 shadow-soft sm:px-10 md:py-11">
        <img
          src="/assets/home/13_leaf_cta_left.png"
          alt=""
          aria-hidden="true"
          className="leaf-blend pointer-events-none absolute left-0 top-1/2 h-28 w-auto -translate-y-1/2 opacity-90"
        />
        <img
          src="/assets/home/14_leaf_cta_right.png"
          alt=""
          aria-hidden="true"
          className="leaf-blend pointer-events-none absolute right-0 top-1/2 h-28 w-auto -translate-y-1/2 opacity-90"
        />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            {icon && (
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/80 text-softgreen shadow-soft">
                <Icon name="heart" className="h-7 w-7" />
              </span>
            )}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#267D72] md:text-[1.6rem]">
                {title}
              </h2>
              {description && <p className="mt-2 max-w-xl text-body">{description}</p>}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">{actions}</div>
        </div>
      </div>
    </section>
  );
}
