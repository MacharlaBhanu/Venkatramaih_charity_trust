import { Link } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Soup,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface InitiativeDetailCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  stats: { value: string; label: string }[];
}

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  health: HeartPulse,
  lightbulb: Lightbulb,
  welfare: UsersRound,
  grad: GraduationCap,
  food: Soup,
};

export default function InitiativeDetailCard({
  title,
  description,
  icon,
  image,
  stats,
}: InitiativeDetailCardProps) {
  const LucideIcon = iconMap[icon] ?? UsersRound;
  const isMint = icon === 'health' || icon === 'welfare' || icon === 'food';

  return (
    <article className="group grid min-h-[220px] overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_10px_28px_rgba(18,58,90,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(18,58,90,0.11)] sm:rounded-[14px]">
      <div className="grid h-full grid-cols-[1.05fr_0.95fr] max-[1023px]:grid-cols-1">
        <div className="flex min-w-0 flex-col p-4 sm:p-5">
          <span
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
              isMint ? 'bg-seafoam text-[#267D72]' : 'bg-softblue text-ocean'
            }`}
          >
            <LucideIcon className="h-[24px] w-[24px]" strokeWidth={1.8} />
          </span>

          <h3 className="text-[17px] font-bold leading-tight text-heading">{title}</h3>
          <p className="mt-2 text-[11px] leading-[1.5] text-body">{description}</p>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={index > 0 ? 'border-l border-line pl-4' : undefined}
              >
                <div className="font-sans text-base font-extrabold leading-none text-ocean">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9px] leading-tight text-body">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            to="/initiatives"
            className="mt-3 inline-flex items-center gap-2 self-start text-[10px] font-bold text-ocean transition-colors hover:text-sky"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative min-h-[220px] overflow-hidden max-[1023px]:order-first max-[639px]:h-[165px] max-[639px]:min-h-0">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full min-h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105 max-[1023px]:min-h-[190px] max-[639px]:min-h-0"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/70 to-transparent max-[1023px]:inset-x-0 max-[1023px]:bottom-0 max-[1023px]:top-auto max-[1023px]:h-16 max-[1023px]:w-full max-[1023px]:bg-gradient-to-t" />
        </div>
      </div>
    </article>
  );
}
