import { ArrowRight, BookOpen, HandHeart, HeartPulse, UsersRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TransformationStoryCardProps {
  category: string;
  icon: string;
  title: string;
  description: string;
  image: string;
}

const icons: Record<string, LucideIcon> = {
  book: BookOpen,
  handHeart: HandHeart,
  health: HeartPulse,
  users: UsersRound,
};

export default function TransformationStoryCard({
  category,
  icon,
  title,
  description,
  image,
}: TransformationStoryCardProps) {
  const CategoryIcon = icons[icon] ?? BookOpen;

  return (
    <article className="group flex h-full min-h-[258px] flex-col overflow-hidden rounded-[12px] border border-line bg-white shadow-[0_8px_22px_rgba(18,58,90,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-card">
      <div className="relative h-[122px] shrink-0 overflow-hidden bg-softblue/20">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
          className="stories-photo h-full w-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-heading/25 via-transparent to-transparent" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col p-[13px]">
        <span className="flex w-fit items-center gap-1.5 rounded-full bg-softblue/50 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.07em] text-ocean">
          <CategoryIcon className="h-3 w-3" strokeWidth={1.8} aria-hidden="true" />
          {category}
        </span>
        <h3 className="mt-1.5 font-serif text-[17px] font-bold leading-[1.15] text-heading">{title}</h3>
        <p className="mt-1.5 flex-1 text-[12px] leading-[1.5] text-body lg:text-[10.5px]">{description}</p>
        <a href="#featured-story" className="group/link mt-2.5 inline-flex items-center gap-1 py-1 text-[12px] font-semibold text-ocean transition-colors hover:text-sky lg:py-0 lg:text-[10.5px]">
          Read More <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
