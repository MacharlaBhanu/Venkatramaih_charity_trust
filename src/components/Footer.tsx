import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { site, footerLinks } from '../data/siteData';
import { SocialIcon } from './Icon';

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="mb-3 text-base font-bold text-heading lg:text-sm">{title}</h3>
      <ul className="space-y-1">
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`}>
            <Link
              to={l.to}
              className="inline-flex min-h-8 items-center text-[14px] leading-snug text-body transition-colors hover:text-ocean focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-sky/40 sm:min-h-7 lg:text-xs"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="site-footer" className="relative overflow-hidden border-t border-line bg-section">
      <img
        src="/assets/home/15_footer_leaf_left.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="leaf-blend pointer-events-none absolute bottom-5 left-0 w-20 opacity-60 lg:w-[120px]"
      />
      <img
        src="/assets/home/16_footer_leaf_right.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="leaf-blend pointer-events-none absolute bottom-5 right-0 w-20 opacity-60 lg:w-[120px]"
      />

      <div className="container-page relative z-[2] pb-7 pt-10 sm:pt-12">
        <div className="grid grid-cols-1 gap-x-5 gap-y-9 min-[390px]:grid-cols-2 sm:gap-x-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr] lg:gap-10">
          <div className="flex flex-col items-center text-center min-[390px]:col-span-2 sm:items-start sm:text-left lg:col-span-1">
            <img
              src="/assets/home/logo_footer.png"
              alt={`${site.name} — Compassion Today, Better Tomorrow`}
              decoding="async"
              className="w-[220px] max-w-full object-contain lg:w-[200px]"
            />
            <p className="mt-3 max-w-[300px] text-[14px] leading-relaxed text-body lg:hidden">
              Compassion today. A stronger, brighter tomorrow.
            </p>
            <div className="mt-4 flex gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-seafoam text-[#267D72] shadow-[0_6px_16px_rgba(18,58,90,0.06)] transition-all hover:-translate-y-0.5 hover:bg-ocean hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/40 lg:h-8 lg:w-8"
                >
                  <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Quick Links" links={footerLinks.quickLinks} />
          <LinkColumn title="Our Initiatives" links={footerLinks.initiatives} />
          <LinkColumn title="Get Involved" links={footerLinks.getInvolved} />

          <div className="min-w-0">
            <h3 className="mb-3 text-base font-bold text-heading lg:text-sm">Contact Us</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-[14px] leading-snug text-body lg:text-xs">
                <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ocean" strokeWidth={1.8} />
                <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="break-words transition-colors hover:text-ocean">
                  {site.phones[0]}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] leading-snug text-body lg:text-xs">
                <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ocean" strokeWidth={1.8} />
                <a href={`mailto:${site.emails[0]}`} className="break-all transition-colors hover:text-ocean">
                  {site.emails[0]}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] leading-snug text-body lg:text-xs">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ocean" strokeWidth={1.8} />
                <span>{site.address.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-[2] mt-9 flex flex-col items-center justify-between gap-4 border-t border-line pt-5 text-center text-[13px] leading-relaxed text-muted sm:flex-row sm:text-left lg:text-[11px]">
          <p>© 2024 {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
            <Link to="/contact" className="transition-colors hover:text-ocean">
              Privacy Policy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-ocean">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
