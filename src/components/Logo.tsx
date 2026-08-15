import { Link } from 'react-router-dom';
import { site } from '../data/siteData';

interface LogoProps {
  className?: string;
}

export function LogoMark({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
    />
  );
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`flex items-center ${className}`}
      aria-label={`${site.name} home`}
    >
      <img
        src="/assets/home/kvr-logo.png"
        alt={site.name}
        className="h-12 w-auto object-contain sm:h-16"
      />
    </Link>
  );
}
