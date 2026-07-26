import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { navLinks, site } from '../data/siteData';
import { useDonation } from '../context/DonationContext';

const withCaret = ['Our Initiatives', 'Get Involved'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openDonation } = useDonation();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="relative z-40 border-b border-line/70 bg-page/95 backdrop-blur-md">
      <nav className="container-page flex h-[56px] items-center justify-between gap-2 sm:h-[72px] lg:h-[92px]">
        <NavLink to="/" aria-label={`${site.name} home`} className="flex min-w-0 flex-1 items-center gap-2 sm:shrink-0 sm:flex-none sm:gap-2.5">
          <img
            src="/assets/home/logo_mark.png"
            alt={site.name}
            decoding="async"
            className="block h-[32px] w-auto object-contain min-[390px]:h-[35px] sm:h-[52px] lg:h-[58px]"
          />
          <span className="min-w-0 font-serif text-[7.5px] font-bold uppercase leading-[1.14] tracking-[0.01em] text-heading min-[360px]:text-[8.5px] min-[390px]:text-[9.5px] sm:text-[13px]">
            Kanneganti
            <br />
            Venkatramaiah
            <br />
            Charitable Trust
          </span>
        </NavLink>

        <ul className="hidden items-center gap-2 rounded-full border border-line/60 bg-white/45 px-3 py-2 shadow-[0_10px_28px_rgba(18,58,90,0.045)] backdrop-blur lg:flex xl:gap-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/35 ${
                    isActive
                      ? 'text-ocean'
                      : 'text-heading hover:bg-softblue/45 hover:text-ocean'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {withCaret.includes(link.label) && (
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-ocean shadow-[0_2px_8px_rgba(22,137,199,0.35)]" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            onClick={openDonation}
            className="inline-flex h-[34px] items-center gap-1.5 rounded-[9px] bg-ocean px-2.5 text-[10px] font-semibold text-white shadow-[0_14px_30px_rgba(22,137,199,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky hover:shadow-[0_18px_36px_rgba(91,191,239,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/40 active:translate-y-0 min-[390px]:px-3 sm:h-[44px] sm:gap-2 sm:rounded-[12px] sm:px-5 sm:text-[13px]"
            aria-label="Open donation form"
          >
            <Heart className="h-[13px] w-[13px] sm:h-[15px] sm:w-[15px]" strokeWidth={1.8} />
            Donate Now
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-line bg-white text-heading shadow-[0_8px_20px_rgba(18,58,90,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/35 sm:h-10 sm:w-10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line/70 bg-white/95 shadow-[0_18px_40px_rgba(18,58,90,0.08)] transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[540px]' : 'max-h-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/35 ${
                    isActive ? 'bg-softblue/80 text-ocean' : 'text-heading hover:bg-section'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={openDonation}
              className="btn-primary w-full"
              aria-label="Open donation form"
            >
              <Heart className="h-4 w-4" strokeWidth={1.8} />
              Donate Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
