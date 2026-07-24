import {
  User,
  Users,
  UsersRound,
  Heart,
  HeartPulse,
  HeartHandshake,
  HandHeart,
  Building2,
  Landmark,
  Clock,
  Star,
  Award,
  GraduationCap,
  UserRoundCheck,
  Handshake,
  LayoutGrid,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
  variant?: 'plain' | 'boxed';
}

const iconMap: Record<string, LucideIcon> = {
  user: User,
  users: Users,
  usersRound: UsersRound,
  heart: Heart,
  health: HeartPulse,
  heartPulse: HeartPulse,
  handHeart: HandHeart,
  heartHandshake: HeartHandshake,
  building: Building2,
  landmark: Landmark,
  clock: Clock,
  star: Star,
  award: Award,
  grad: GraduationCap,
  graduation: GraduationCap,
  empower: UserRoundCheck,
  userCheck: UserRoundCheck,
  handshake: Handshake,
  grid: LayoutGrid,
  book: GraduationCap,
};

export default function StatCard({ value, label, icon, variant = 'plain' }: StatCardProps) {
  const LucideI = icon ? iconMap[icon] ?? Heart : null;

  if (variant === 'boxed') {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft">
        {LucideI && (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-softblue/60 text-ocean">
            <LucideI className="h-5 w-5" strokeWidth={1.8} />
          </span>
        )}
        <div>
          <div className="font-serif text-xl font-bold text-heading">{value}</div>
          <div className="text-xs text-muted">{label}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-col items-center px-1 text-center sm:px-2">
      {LucideI && (
        <span className="mb-2 flex h-8 w-8 items-center justify-center text-ocean/85">
          <LucideI className="h-7 w-7" strokeWidth={1.55} />
        </span>
      )}
      <div className="max-w-full font-sans text-[20px] font-extrabold leading-none text-heading sm:text-[24px]">{value}</div>
      <div className="mt-2 max-w-full text-[10px] font-medium leading-tight text-body sm:text-[12px] sm:leading-none">{label}</div>
    </div>
  );
}
