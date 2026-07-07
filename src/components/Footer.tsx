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
    <div>
      <h3 className="mb-3.5 text-sm font-bold text-heading">{title}</h3>
      <ul>
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`} className="leading-[2]">
            <Link
              to={l.to}
              className="text-xs text-body transition-colors hover:text-ocean"
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
    <footer className="relative overflow-hidden border-t border-line bg-section">
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

      <div className="container-page relative z-[2] pb-6 pt-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr] lg:gap-10">
          <div>
            <img
              src="/assets/home/logo_footer.png"
              alt={`${site.name} — Compassion Today, Better Tomorrow`}
              decoding="async"
              className="w-[200px] object-contain"
            />
            <div className="mt-4 flex gap-2.5">
              {site.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-seafoam text-[#267D72] transition-colors hover:bg-ocean hover:text-white"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Quick Links" links={footerLinks.quickLinks} />
          <LinkColumn title="Our Initiatives" links={footerLinks.initiatives} />
          <LinkColumn title="Get Involved" links={footerLinks.getInvolved} />

          <div>
            <h3 className="mb-3.5 text-sm font-bold text-heading">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs text-body">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ocean" strokeWidth={1.8} />
                <span>{site.phones[0]}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-body">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ocean" strokeWidth={1.8} />
                <span>{site.emails[0]}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-body">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ocean" strokeWidth={1.8} />
                <span>{site.address.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-[2] mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-4 text-center text-[11px] text-muted sm:flex-row sm:text-left">
          <p>© 2024 {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
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
