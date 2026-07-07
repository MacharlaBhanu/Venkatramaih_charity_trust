import type { ReactNode } from 'react';
import { Icon } from './Icon';

interface ContactCardProps {
  icon: string;
  title: string;
  lines?: string[];
  children?: ReactNode;
}

export default function ContactCard({ icon, title, lines, children }: ContactCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glass">
      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-softblue text-ocean">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="text-base font-bold text-ocean">{title}</h3>
      {lines?.map((line) => (
        <p key={line} className="mt-1 text-xs text-body">
          {line}
        </p>
      ))}
      {children}
    </div>
  );
}
