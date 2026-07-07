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
    <header className="relative z-40 border-b border-line bg-page">
      <nav className="container-page flex h-[70px] items-center justify-between gap-4 lg:h-[90px]">
        <NavLink to="/" aria-label={`${site.name} home`} className="flex shrink-0 items-center gap-2.5">
          <img
            src="/assets/home/logo_mark.png"
            alt={site.name}
            decoding="async"
            className="block h-[46px] w-auto object-contain sm:h-[52px] lg:h-[58px]"
          />
          <span className="font-serif text-[12px] font-bold uppercase leading-[1.18] tracking-[0.02em] text-heading sm:text-[13px]">
            Kanneganti
            <br />
            Venkatramaiah
            <br />
            Charitable Trust
          </span>
        </NavLink>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative flex items-center gap-1 whitespace-nowrap py-1 text-[13px] font-medium transition-colors ${
                    isActive ? 'text-ocean' : 'text-heading hover:text-ocean'
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
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-ocean" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={openDonation}
            className="hidden h-[42px] items-center gap-2 rounded-[10px] bg-ocean px-[18px] text-[13px] font-semibold text-white shadow-soft transition-colors hover:bg-sky sm:inline-flex"
            aria-label="Open donation form"
          >
            <Heart className="h-[15px] w-[15px]" strokeWidth={1.8} />
            Donate Now
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-heading lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 lg:hidden ${
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
                  `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-softblue text-ocean' : 'text-heading hover:bg-section'
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
