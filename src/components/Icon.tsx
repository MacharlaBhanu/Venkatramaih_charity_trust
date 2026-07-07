import type { ReactElement } from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const paths: Record<string, ReactElement> = {
  book: (
    <path d="M4 5a2 2 0 0 1 2-2h6v16H6a2 2 0 0 1-2-2V5Zm16 0a2 2 0 0 0-2-2h-4v16h4a2 2 0 0 0 2-2V5Z" />
  ),
  health: (
    <path d="M12 21s-7-4.35-9.5-8.5C.8 9.6 2.3 6 5.5 6c1.9 0 3.2 1 3.5 2 .3-1 1.6-2 3.5-2 3.2 0 4.7 3.6 3 6.5C19 16.65 12 21 12 21Z" />
  ),
  heart: (
    <path d="M12 21s-7-4.35-9.5-8.5C.8 9.6 2.3 6 5.5 6c1.9 0 3.2 1 3.5 2 .3-1 1.6-2 3.5-2 3.2 0 4.7 3.6 3 6.5C19 16.65 12 21 12 21Z" />
  ),
  empower: (
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0" />
  ),
  welfare: (
    <path d="M3 11 12 3l9 8M5 10v10h5v-6h4v6h5V10" />
  ),
  users: (
    <path d="M17 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm12 10v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
  ),
  user: (
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  ),
  clock: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-16v6l4 2" />,
  building: (
    <path d="M3 21h18M5 21V5l7-2v18M19 21V9l-7-4M9 9h.01M9 13h.01M9 17h.01" />
  ),
  grid: (
    <path d="M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z" />
  ),
  star: (
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" />
  ),
  award: (
    <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-3.5-1L7 22l5-3 5 3-1.5-8" />
  ),
  grad: (
    <path d="M22 10 12 5 2 10l10 5 10-5Zm-4 3v4c0 1.66-2.7 3-6 3s-6-1.34-6-3v-4" />
  ),
  food: (
    <path d="M4 3v7a3 3 0 0 0 3 3v8M7 3v7M10 3v7M17 3c-1.5 0-3 2-3 5s1 4 3 4v9" />
  ),
  school: (
    <path d="m12 3 9 5-9 5-9-5 9-5Zm0 10v6M6 10v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  mail: (
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2 8 6 8-6" />
  ),
  pin: (
    <path d="M12 22s8-6 8-12a8 8 0 1 0-16 0c0 6 8 12 8 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
  eye: (
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
  target: (
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  ),
  shield: (
    <path d="M12 2 4 5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V5l-8-3Z" />
  ),
  leaf: (
    <path d="M11 20A7 7 0 0 1 4 13c0-6 8-9 16-9 0 8-3 16-9 16Zm0 0c0-4 3-8 6-10" />
  ),
  handshake: (
    <path d="m11 17 2 2a1 1 0 0 0 1.5 0l4-4a2 2 0 0 0 0-3l-3-3-3 3M8 8l3-3a2 2 0 0 1 3 0l3 3M2 12l3 3a2 2 0 0 0 3 0l3-3" />
  ),
  megaphone: (
    <path d="M3 11v2a1 1 0 0 0 1 1h2l6 4V6L6 10H4a1 1 0 0 0-1 1Zm14-5v12a4 4 0 0 0 0-12Z" />
  ),
  chart: (
    <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />
  ),
  edit: (
    <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
  ),
  clipboard: (
    <path d="M9 4h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1-1Zm0 2v1h6V6" />
  ),
  check: <path d="m5 13 4 4L19 7" />,
  play: <path d="M8 5v14l11-7L8 5Z" />,
  sparkle: (
    <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2 2m8 8 2 2M6 18l2-2m8-8 2-2" />
  ),
  calendar: (
    <path d="M3 5h18v16H3V5Zm0 5h18M8 3v4M16 3v4" />
  ),
  camera: (
    <path d="M4 8h3l2-2h6l2 2h3v12H4V8Zm8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
};

export function Icon({ name, className = 'w-6 h-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.heart}
    </svg>
  );
}

interface SocialIconProps {
  name: string;
  className?: string;
}

export function SocialIcon({ name, className = 'w-4 h-4' }: SocialIconProps) {
  const socials: Record<string, ReactElement> = {
    facebook: (
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z" />
    ),
    twitter: (
      <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.9 4.5a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 3.9c-.6.2-1.2.2-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.5a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.1Z" />
    ),
    instagram: (
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    ),
    linkedin: (
      <>
        <circle cx="5" cy="4.5" r="2.2" />
        <path d="M3 9h4v12H3zM10 9h3.8v1.65h.05c.53-.95 1.82-1.95 3.75-1.95 4 0 4.4 2.5 4.4 5.75V21h-4v-4.9c0-1.17-.02-2.67-1.7-2.67-1.7 0-1.95 1.28-1.95 2.6V21h-4z" />
      </>
    ),
    youtube: (
      <path d="M22 8s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9C16.4 5 12 5 12 5s-4.4 0-7.2.2c-.4 0-1.3.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.4C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.6.1 6.9.2 6.9.2s4.4 0 7.2-.2c.4 0 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4C22 9.6 22 8 22 8ZM10 14.5v-5l4.5 2.5-4.5 2.5Z" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {socials[name] ?? socials.facebook}
    </svg>
  );
}
