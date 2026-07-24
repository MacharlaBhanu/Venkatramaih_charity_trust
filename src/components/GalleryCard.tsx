import type { LucideIcon } from 'lucide-react';
import type { GalleryItem } from '../data/galleryData';

interface GalleryCardProps {
  item: GalleryItem;
  icon: LucideIcon;
  size?: 'large' | 'medium' | 'standard';
  variant?: 'card' | 'editorial';
  featured?: boolean;
}

export default function GalleryCard({ item, icon: CategoryIcon, size = 'standard', variant = 'card', featured = false }: GalleryCardProps) {
  const imageHeight = size === 'large' ? 'h-[260px]' : size === 'medium' ? 'h-[160px]' : 'h-[210px]';

  if (variant === 'editorial') {
    return (
      <article className="group relative isolate h-full min-h-[240px] overflow-hidden rounded-[20px] border border-white/80 bg-heading shadow-[0_18px_44px_rgba(18,58,90,0.13)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(18,58,90,0.2)] sm:min-h-[270px]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,38,60,0.02)_25%,rgba(8,40,62,0.2)_52%,rgba(8,37,57,0.93)_100%)] transition-opacity duration-500 group-hover:opacity-95 max-sm:bg-[linear-gradient(180deg,rgba(7,38,60,0.03)_18%,rgba(8,40,62,0.3)_48%,rgba(8,37,57,0.98)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-heading/25 to-transparent" />

        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/45 bg-white/88 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#267D72] shadow-sm backdrop-blur-md">
          <CategoryIcon className="h-3.5 w-3.5" strokeWidth={1.9} />
          {item.categoryLabel}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className={`${featured ? 'text-[26px] sm:text-[30px]' : 'text-[21px]'} font-serif font-bold leading-[1.08] text-white`}>
            {item.title}
          </h3>
          <p className={`mt-2 max-w-[440px] leading-[1.55] text-white/82 max-sm:text-white/95 ${featured ? 'text-[13px] sm:text-[14px]' : 'text-[12px]'}`}>
            {item.description}
          </p>
          <span className="mt-4 block h-px w-10 bg-mint transition-all duration-500 group-hover:w-20" aria-hidden="true" />
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full min-h-0 flex-col overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_10px_28px_rgba(18,58,90,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-sky/60 hover:shadow-[0_18px_38px_rgba(18,58,90,0.12)]">
      <div className={`${imageHeight} relative shrink-0 overflow-hidden`}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-heading/15 via-transparent to-white/5 opacity-60 transition-opacity group-hover:opacity-30" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-4">
        <h3 className="text-[18px] font-bold leading-tight text-heading">{item.title}</h3>
        <p className="mt-2 text-[12px] leading-[1.5] text-body">{item.description}</p>
        <span className="mt-auto flex w-fit items-center gap-2 rounded-full bg-seafoam/70 px-2.5 py-1 pt-1 text-[11px] font-semibold text-[#349C8D]">
          <CategoryIcon className="h-[13px] w-[13px]" strokeWidth={1.8} />
          {item.categoryLabel}
        </span>
      </div>
    </article>
  );
}
