import { Link } from 'react-router-dom';
import {
  BookOpen,
  HeartPulse,
  UserRoundCheck,
  UsersRound,
  GraduationCap,
  UtensilsCrossed,
  HandHeart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface InitiativeCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  stats?: { value: string; label: string }[];
  compact?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  health: HeartPulse,
  empower: UserRoundCheck,
  welfare: UsersRound,
  grad: GraduationCap,
  food: UtensilsCrossed,
};

export default function InitiativeCard({
  title,
  description,
  icon,
  image,
  stats,
}: InitiativeCardProps) {
  const LucideI = iconMap[icon] ?? HandHeart;
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-2.5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glass">
      <div className="relative">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-[135px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute -bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#6BCDB6] text-white shadow-soft">
          <LucideI className="h-[21px] w-[21px]" strokeWidth={1.9} />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-8">
        <h3 className="text-lg font-bold text-heading">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{description}</p>

        {stats && (
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-line pt-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-base font-bold text-ocean">{s.value}</div>
                <div className="text-[11px] leading-tight text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <Link to="/initiatives" className="link-arrow mt-4">
          Learn More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
