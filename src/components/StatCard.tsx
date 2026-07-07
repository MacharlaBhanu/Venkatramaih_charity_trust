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
    <div className="flex flex-col items-center px-2 text-center">
      {LucideI && (
        <span className="mb-2 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-softblue/40 text-ocean">
          <LucideI className="h-6 w-6" strokeWidth={1.7} />
        </span>
      )}
      <div className="font-sans text-2xl font-extrabold leading-none tracking-tight text-heading">{value}</div>
      <div className="mt-1.5 text-[12px] font-normal text-body">{label}</div>
    </div>
  );
}
