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
    <article className="group grid h-full grid-cols-[40%_60%] overflow-hidden rounded-[10px] border border-line/80 bg-white shadow-[0_12px_32px_rgba(18,58,90,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-softblue hover:shadow-[0_20px_46px_rgba(18,58,90,0.12)] sm:flex sm:flex-col sm:rounded-[16px]">
      <div className="relative min-h-[142px] sm:min-h-0">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:static sm:h-[148px]"
          />
        </div>
        <span className="absolute right-[-17px] top-4 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white bg-softgreen text-white shadow-[0_10px_24px_rgba(38,125,114,0.18)] sm:-bottom-5 sm:left-6 sm:right-auto sm:top-auto sm:h-12 sm:w-12 sm:border-[5px]">
          <LucideI className="h-[20px] w-[20px]" strokeWidth={1.9} />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-3 pt-4 sm:px-6 sm:pb-5 sm:pt-8">
        <h3 className="text-[15px] font-bold leading-tight text-heading sm:text-[18px]">{title}</h3>
        <p className="mt-1.5 flex-1 text-[10.5px] leading-[1.5] text-body sm:mt-2 sm:text-[13px] sm:leading-[1.65]">{description}</p>

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

        <Link
          to="/initiatives"
          className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-ocean transition-colors hover:text-sky sm:mt-4 sm:text-[13px]"
        >
          Learn More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
