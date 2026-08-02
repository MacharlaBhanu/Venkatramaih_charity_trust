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
  tone?: 'ocean' | 'teal' | 'slate' | 'rose';
}

const toneClasses = {
  ocean: 'bg-gradient-to-br from-[#247E9E] to-[#1689C7]',
  teal: 'bg-gradient-to-br from-[#34796F] to-[#45A995]',
  slate: 'bg-gradient-to-br from-[#405F82] to-[#536C91]',
  rose: 'bg-gradient-to-br from-[#7D5968] to-[#976A72]',
};

const toneFadeClasses = {
  ocean: 'from-[#247E9E]',
  teal: 'from-[#34796F]',
  slate: 'from-[#405F82]',
  rose: 'from-[#7D5968]',
};

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
  tone,
}: InitiativeDetailCardProps) {
  const LucideIcon = iconMap[icon] ?? UsersRound;
  const isMint = icon === 'health' || icon === 'welfare' || icon === 'food';
  const isColored = Boolean(tone);

  return (
    <article className={`group grid min-h-[220px] overflow-hidden rounded-[20px] border shadow-[0_10px_28px_rgba(18,58,90,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(18,58,90,0.2)] sm:rounded-[14px] ${tone ? `${toneClasses[tone]} border-white/30` : 'border-line bg-white'}`}>
      <div className="grid h-full grid-cols-[1.05fr_0.95fr] max-[1023px]:grid-cols-1">
        <div className="flex min-w-0 flex-col p-4 sm:p-5">
          <span
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
              isColored
                ? 'bg-white/90 text-ocean shadow-soft'
                : isMint
                  ? 'bg-seafoam text-[#267D72]'
                  : 'bg-softblue text-ocean'
            }`}
          >
            <LucideIcon className="h-[24px] w-[24px]" strokeWidth={1.8} />
          </span>

          <h3 className={`text-[17px] font-bold leading-tight ${isColored ? 'text-white' : 'text-heading'}`}>{title}</h3>
          <p className={`mt-2 text-[11px] leading-[1.5] ${isColored ? 'text-white/80' : 'text-body'}`}>{description}</p>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={index > 0 ? `border-l pl-4 ${isColored ? 'border-white/25' : 'border-line'}` : undefined}
              >
                <div className={`font-sans text-base font-extrabold leading-none ${isColored ? 'text-white' : 'text-ocean'}`}>
                  {stat.value}
                </div>
                <div className={`mt-1 text-[9px] leading-tight ${isColored ? 'text-white/70' : 'text-body'}`}>{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            to="/initiatives"
            className={`mt-3 inline-flex items-center gap-2 self-start text-[10px] font-bold transition-colors ${isColored ? 'text-white hover:text-[#D9F3FF]' : 'text-ocean hover:text-sky'}`}
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
          <div className={`pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r via-transparent to-transparent max-[1023px]:inset-x-0 max-[1023px]:bottom-0 max-[1023px]:top-auto max-[1023px]:h-16 max-[1023px]:w-full max-[1023px]:bg-gradient-to-t ${tone ? toneFadeClasses[tone] : 'from-white'}`} />
        </div>
      </div>
    </article>
  );
}
