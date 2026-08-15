import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  HandHeart,
  Handshake,
  Heart,
  Megaphone,
  PackageOpen,
  Pencil,
  Star,
  UserRound,
  UsersRound,
} from 'lucide-react';
import SEO from '../components/SEO';
import { useDonation } from '../context/DonationContext';
import {
  faqItems,
  helpOptions,
  partnershipOptions,
  processSteps,
} from '../data/getInvolvedData';
import type { GetInvolvedIcon } from '../data/getInvolvedData';

/* Card identities stay one-per-option, pulled into the site's ocean/teal/mint family. */
const cardThemes = [
  { shell: 'border-[#B9DDED] bg-[linear-gradient(150deg,#F4FAFE_0%,#DCEEF9_100%)] text-[#075A87]', accent: '#5FB1DE' },
  { shell: 'border-[#B7DED5] bg-[linear-gradient(150deg,#F3FCF9_0%,#DCF3EB_100%)] text-[#1A7565]', accent: '#5CC0A6' },
  { shell: 'border-[#B2D9DE] bg-[linear-gradient(150deg,#F1FAFB_0%,#D9EFF1_100%)] text-[#146A76]', accent: '#52B2BE' },
  { shell: 'border-[#C3D6EA] bg-[linear-gradient(150deg,#F5F9FD_0%,#E1EBF7_100%)] text-[#34608C]', accent: '#7AA3CD' },
];

const iconMap: Record<GetInvolvedIcon, LucideIcon> = {
  chart: ChartNoAxesColumnIncreasing,
  clipboard: ClipboardList,
  handHeart: HandHeart,
  handshake: Handshake,
  heart: Heart,
  megaphone: Megaphone,
  package: PackageOpen,
  pencil: Pencil,
  star: Star,
  user: UserRound,
  users: UsersRound,
};

function PageIcon({ name, className = 'h-5 w-5' }: { name: GetInvolvedIcon; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} strokeWidth={1.8} aria-hidden="true" />;
}

export default function GetInvolved() {
  const { openDonation } = useDonation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Get Involved | Kanneganti Venkatramaiah Charitable Trust"
        description="Donate, volunteer, sponsor programs, partner with us, and discover meaningful ways to support Kanneganti Venkatramaiah Charitable Trust."
        path="/get-involved"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Get Involved', path: '/get-involved' },
        ]}
      />

      <div className="get-involved-page overflow-hidden bg-[#F2F7F7]">
        <style>{`
          .involved-shell {
            width: 100%;
            max-width: 1360px;
            margin-inline: auto;
            padding-inline: 20px;
          }
          .involved-serif {
            font-family: Georgia, 'Times New Roman', serif;
          }
          .involved-section-shell {
            width: 100%;
            max-width: 1280px;
            margin-inline: auto;
            padding-inline: 20px;
          }
          .involved-hero-image::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            background: linear-gradient(to right, #0A527A 0%, rgba(10,82,122,.88) 16%, rgba(10,82,122,.34) 34%, transparent 52%);
            pointer-events: none;
          }
          .involved-hero-image::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            background: linear-gradient(to top, rgba(157,215,239,.48) 0%, rgba(157,215,239,.18) 18%, transparent 48%);
            pointer-events: none;
          }
          /* Ways to contribute — premium editorial cards */
          .involved-card-accent {
            position: absolute;
            top: 0;
            left: 22px;
            right: 22px;
            height: 3px;
            border-radius: 0 0 6px 6px;
            opacity: .45;
            transform: scaleX(.45);
            transform-origin: left center;
            transition: opacity .3s ease, transform .3s cubic-bezier(.22,.61,.36,1);
          }
          .involved-card-index {
            position: absolute;
            right: 2px;
            bottom: -14px;
            z-index: 0;
            font-family: Georgia, 'Times New Roman', serif;
            font-size: 62px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: -.06em;
            opacity: .055;
            pointer-events: none;
            user-select: none;
          }
          .involved-card-icon,
          .involved-card-arrow {
            transition: transform .3s cubic-bezier(.22,.61,.36,1);
          }
          @media (hover: hover) {
            .involved-card:hover .involved-card-accent { opacity: 1; transform: scaleX(1); }
            .involved-card:hover .involved-card-icon { transform: translateY(-2px) scale(1.06) rotate(-4deg); }
            .involved-card:hover .involved-card-arrow,
            .group:hover .involved-card-arrow { transform: translateX(5px); }
          }

          .involved-node {
            transition: transform .3s cubic-bezier(.22,.61,.36,1), box-shadow .3s ease, border-color .3s ease;
          }
          @media (hover: hover) {
            .involved-step:hover .involved-node {
              transform: translateY(-5px);
              border-color: rgba(148,224,205,.52);
              box-shadow: 0 0 0 5px rgba(8,53,72,.62), 0 0 0 9px rgba(148,224,205,.12), 0 22px 40px rgba(3,38,50,.52);
            }
            .involved-step:hover .involved-step-card {
              border-color: rgba(148,224,205,.22);
              background-color: rgba(255,255,255,.09);
            }
          }
          .involved-step-card {
            transition: border-color .3s ease, background-color .3s ease;
          }

          /* FAQ — plus that becomes a minus */
          .involved-plus {
            position: relative;
            display: block;
            width: 12px;
            height: 12px;
            color: inherit;
          }
          .involved-plus::before,
          .involved-plus::after {
            content: '';
            position: absolute;
            background: currentColor;
            border-radius: 2px;
            transition: transform .35s cubic-bezier(.22,.61,.36,1), opacity .3s ease;
          }
          .involved-plus::before { left: 0; right: 0; top: 5px; height: 2px; }
          .involved-plus::after { top: 0; bottom: 0; left: 5px; width: 2px; }
          .involved-faq-row[data-open='true'] .involved-plus::after {
            transform: rotate(90deg);
            opacity: 0;
          }
          .involved-faq-card {
            position: relative;
            overflow: hidden;
            transition: transform .3s cubic-bezier(.22,.61,.36,1), border-color .3s ease, background-color .3s ease, box-shadow .3s ease;
          }
          .involved-faq-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255,255,255,.09) 0%, rgba(255,255,255,0) 48%);
            opacity: .55;
            pointer-events: none;
          }
          .involved-faq-index {
            font-family: Georgia, 'Times New Roman', serif;
            letter-spacing: -.04em;
          }
          .involved-faq-orb {
            position: absolute;
            right: -26px;
            top: -24px;
            height: 88px;
            width: 88px;
            border-radius: 9999px;
            background: radial-gradient(circle, rgba(156,229,211,.18) 0%, rgba(156,229,211,0) 72%);
            pointer-events: none;
          }
          @media (hover: hover) {
            .involved-faq-card:hover {
              transform: translateY(-2px);
              border-color: rgba(255,255,255,.16);
              background-color: rgba(255,255,255,.08);
              box-shadow: 0 18px 34px rgba(4,29,40,.18);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .involved-card-accent,
            .involved-card-icon,
            .involved-card-arrow,
            .involved-node,
            .involved-plus::before,
            .involved-plus::after,
            .involved-faq-card { transition: none; }
          }
          @media (min-width: 640px) {
            .involved-shell,
            .involved-section-shell { padding-inline: 32px; }
            .involved-card-index { font-size: 76px; bottom: -16px; }
          }
          @media (min-width: 1024px) {
            .involved-shell,
            .involved-section-shell { padding-inline: 48px; }
            .involved-card-index { font-size: 84px; bottom: -18px; }
          }
          @media (min-width: 1280px) {
            .involved-shell,
            .involved-section-shell { padding-inline: 64px; }

            /* hero only: a wider measure drops the centring gutter so the copy starts nearer the left edge */
            .involved-hero-shell { max-width: 1560px; }
          }
          @media (max-width: 1023px) {
            .involved-hero-image::before {
              background: linear-gradient(to bottom, transparent 52%, #082F49 100%);
            }
          }
        `}</style>

        {/* Hero */}
        {/* Mobile height matches the Gallery hero (~204px fixed spacing + ~126vw of width-scaled content); lg fills the first screen (92px = lg navbar height) */}
        <section className="relative min-h-[calc(204px+126vw)] overflow-hidden border-b border-line bg-[linear-gradient(115deg,#082F49_0%,#0A527A_48%,#B9E3F5_100%)] lg:min-h-[calc(100svh-92px)]">
          <div className="involved-hero-image absolute inset-x-0 top-0 h-[clamp(290px,85vw,400px)] overflow-hidden sm:h-[360px] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[63%]">
            <img
              src="/assets/get-involved/02_hero_volunteers.png"
              alt="Volunteers distributing food and supplies to a child"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[210px] bg-[radial-gradient(ellipse_at_right,rgba(184,235,220,.32)_0%,transparent_72%)]" aria-hidden="true" />
          <img
            src="/assets/gallery/cta-leaf-right-transparent.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-5 -right-5 z-[3] w-[130px] opacity-45 lg:w-[150px]"
          />

          {/* ponytail: pt is 92vw (photo 85vw + a 7vw gap) — kept under the Gallery-matched height so this taller copy block still fits */}
          <div className="involved-shell involved-hero-shell relative z-10 flex min-h-[calc(204px+126vw)] items-end pb-10 pt-[clamp(320px,92vw,430px)] sm:pt-[330px] lg:min-h-[calc(100svh-92px)] lg:items-center lg:py-[34px] lg:pt-[34px]">
            <div className="max-w-[520px] sm:max-w-[620px] lg:w-[44%] lg:max-w-[520px]">
              <h1 className="involved-serif text-[38px] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[min(4.4vw,64px)]">
                <span className="block">Get Involved,</span>
                <span className="block text-[#8ED8F8]">Create Change</span>
              </h1>
              <p className="mt-4 max-w-[500px] text-[15px] leading-[1.75] text-white/80 sm:text-[16px] lg:max-w-[460px] lg:text-[17px]">
                Together, we can build a kinder, healthier, and more empowered tomorrow. Your time,
                resources, and voice can transform lives and strengthen communities.
              </p>
              <div className="mt-[22px] flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={openDonation}
                  className="inline-flex h-[46px] items-center justify-center rounded-[8px] bg-ocean px-[26px] text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(22,137,199,.18)] transition hover:-translate-y-0.5 hover:bg-sky sm:h-[42px] sm:text-[13px]"
                >
                  Donate Now
                </button>
                <Link
                  to="/contact#message"
                  className="inline-flex h-[46px] items-center justify-center rounded-[8px] border border-softgreen bg-white px-6 text-[14px] font-semibold text-[#267D72] transition hover:-translate-y-0.5 hover:bg-seafoam sm:h-[42px] sm:text-[13px]"
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to contribute */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F4FAFA_0%,#E1F1EF_100%)] py-[72px] sm:py-[88px] lg:py-[112px]">
          <div className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#9EE5D5]/35 blur-[80px]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(8,59,80,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(8,59,80,.055)_1px,transparent_1px)] [background-size:64px_64px]" aria-hidden="true" />
          <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid gap-6 lg:grid-cols-[.86fr_1.14fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#298C7B] sm:text-[11px]">Choose your impact</p>
                <h2 className="involved-serif mt-4 max-w-[520px] text-[38px] font-bold leading-[0.99] tracking-[-0.035em] text-[#08384B] sm:text-[51px]">There is a meaningful way for everyone to help.</h2>
              </div>
              <p className="max-w-[625px] text-[15.5px] leading-[1.8] text-[#526E76] sm:text-[16px]">Whether you give resources, share your skills, build a partnership, or sponsor a programme, every choice becomes a practical step toward lasting change.</p>
            </div>

            <div className="mt-11 grid grid-cols-1 gap-4 min-[460px]:grid-cols-2 sm:mt-14 sm:gap-6 lg:grid-cols-4 lg:gap-4 xl:gap-6">
              {helpOptions.map((option, index) => {
                const theme = cardThemes[index % cardThemes.length];
                const shell = `involved-card group relative flex min-h-[268px] flex-col overflow-hidden rounded-[22px] border p-6 text-left shadow-[0_18px_42px_rgba(18,58,90,.09)] transition duration-300 hover:-translate-y-[6px] hover:shadow-[0_30px_56px_rgba(18,58,90,.16)] sm:min-h-[300px] sm:rounded-[26px] sm:p-8 lg:min-h-[326px] lg:p-6 xl:p-8 ${theme.shell}`;
                const content = (
                  <>
                    <span className="involved-card-accent" style={{ backgroundColor: theme.accent }} aria-hidden="true" />
                    <span className="involved-card-index" aria-hidden="true">0{index + 1}</span>
                    <span className="involved-card-icon relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-[17px] border border-white/80 bg-white/70 shadow-[0_12px_26px_rgba(18,58,90,.1)] backdrop-blur-[6px] sm:h-[60px] sm:w-[60px] sm:rounded-[20px]">
                      <PageIcon name={option.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <span className="relative z-10 mt-7 block text-[10px] font-bold uppercase tracking-[0.28em] opacity-55 sm:mt-8 sm:text-[11px]">0{index + 1}</span>
                    <h3 className="involved-serif relative z-10 mt-2 text-[23px] font-bold leading-[1.06] tracking-[-0.03em] text-[#08384B] sm:mt-2.5 sm:text-[25px] lg:whitespace-nowrap lg:text-[19px] xl:text-[23px]">{option.title}</h3>
                    <p className="relative z-10 mt-3 text-[14.5px] leading-[1.72] text-[#4E6A72] sm:mt-3.5 sm:text-[14.5px] sm:leading-[1.75]">{option.description}</p>
                    <span className="relative z-10 mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-bold sm:text-[13px]">
                      {option.link}
                      <ArrowRight className="involved-card-arrow h-4 w-4" />
                    </span>
                  </>
                );

                return option.action === 'donate' ? (
                  <button key={option.title} type="button" onClick={openDonation} className={shell}>{content}</button>
                ) : (
                  <Link key={option.title} to={option.to} className={shell}>{content}</Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="relative overflow-hidden bg-[linear-gradient(160deg,#062E40_0%,#083B50_45%,#0A4F60_100%)] py-[80px] text-white sm:py-[100px] lg:py-[120px]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(156,229,211,.28)_50%,transparent_100%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(156,229,211,.1)_50%,transparent_100%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-52 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0A6070]/20 blur-[130px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-52 bottom-1/4 h-[440px] w-[440px] rounded-full bg-[#0A7060]/15 blur-[110px]" aria-hidden="true" />

          <div className="involved-section-shell relative z-10">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#9CE5D3]/20 bg-[#9CE5D3]/[0.08] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#7BCFBC] sm:text-[10px]">
                <span className="h-1 w-1 rounded-full bg-current opacity-70" aria-hidden="true" />
                Your journey with us
              </span>
              <h2 className="involved-serif mx-auto mt-5 max-w-[580px] text-[37px] font-bold leading-[1.01] tracking-[-0.035em] text-white sm:text-[50px]">
                From your first step to shared progress.
              </h2>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-20">
              {/* Desktop connecting line threaded through icon centres */}
              <div
                className="pointer-events-none absolute top-[33px] hidden h-px lg:block"
                style={{ left: '10%', right: '10%', background: 'linear-gradient(90deg, transparent 0%, rgba(148,224,205,.14) 12%, rgba(148,224,205,.14) 88%, transparent 100%)' }}
                aria-hidden="true"
              />

              <ol className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-3">
                {processSteps.map((step, index) => (
                  <li key={step.title} className="involved-step group relative">
                    {/* Mobile-only vertical connector */}
                    {index < processSteps.length - 1 && (
                      <span
                        className="pointer-events-none absolute left-[24px] top-[48px] w-px sm:hidden"
                        style={{ bottom: '-1rem', background: 'linear-gradient(180deg, rgba(148,224,205,.22) 0%, transparent 100%)' }}
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex items-start gap-4 sm:flex-col sm:items-center sm:text-center lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                      <div className="involved-node relative z-10 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-[#9CE5D3]/20 bg-[linear-gradient(145deg,#0B4D65,#0D6274)] shadow-[0_0_0_5px_rgba(8,53,72,.62),0_16px_30px_rgba(3,38,50,.44)] sm:h-[58px] sm:w-[58px] lg:h-[66px] lg:w-[66px]">
                        <PageIcon name={step.icon} className="h-[18px] w-[18px] text-[#A8E8D6] sm:h-5 sm:w-5 lg:h-[22px] lg:w-[22px]" />
                      </div>
                      <div className="involved-step-card flex-1 rounded-[14px] border border-white/[0.08] bg-white/[0.05] p-4 backdrop-blur-[4px] sm:mt-5 sm:w-full sm:flex-none sm:rounded-[16px] sm:p-5 lg:mt-4 lg:w-full">
                        <span className="involved-serif block text-[10px] font-bold tracking-[0.3em] text-[#65C4AE] sm:text-[10px]">0{index + 1}</span>
                        <h3 className="mt-1.5 text-[16px] font-bold leading-[1.28] tracking-[-0.01em] text-white sm:text-[15px] lg:text-[14.5px]">{step.title}</h3>
                        <p className="mt-2 text-[13.5px] leading-[1.7] text-white/60 sm:text-[12px] lg:text-[11.5px]">{step.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FAFDFD_0%,#F2F7F7_100%)] py-[72px] sm:py-[88px] lg:py-[112px]">
          <div className="involved-section-shell relative z-10 grid items-center gap-9 lg:grid-cols-[43fr_57fr] lg:gap-14">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[20px] shadow-[0_22px_52px_rgba(18,84,78,.14)] sm:rounded-[26px]">
                <img
                  src="/assets/gallery/generated/community-neighbourhood.jpg"
                  alt="Volunteers and community members working together on a neighbourhood programme"
                  loading="lazy"
                  className="h-[250px] w-full object-cover object-center sm:h-[340px] lg:h-[430px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(202deg,rgba(8,57,77,0)_42%,rgba(8,57,77,.5)_100%)]" aria-hidden="true" />
                <img
                  src="/assets/gallery/cta-leaf-left-transparent.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[-4px] left-0 w-[110px] opacity-40 sm:w-[130px]"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-[#9EE5D5]/25 blur-[60px]" aria-hidden="true" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#238875] sm:text-[11px]">Build change together</p>
              <h2 className="involved-serif mt-4 text-[34px] font-bold leading-[1.05] tracking-[-0.035em] text-[#073B4F] sm:text-[50px]">Partner with purpose.</h2>
              <p className="mt-4 max-w-[520px] text-[15.5px] leading-[1.78] text-[#537077] sm:mt-5 sm:text-[16px]">We work with organisations, corporates, and institutions to build programmes that create clear, sustainable impact.</p>
              <ul className="mt-7 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:mt-8 sm:flex sm:max-w-none sm:flex-wrap lg:max-w-[430px]">
                {partnershipOptions.map((option) => (
                  <li
                    key={option.title}
                    className="flex items-center gap-2.5 rounded-full border border-[#CCE6E1] bg-white/80 py-2 pl-2 pr-4 shadow-[0_6px_16px_rgba(18,84,78,.05)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-0.5 hover:border-[#A8D9D1] hover:shadow-[0_10px_22px_rgba(18,84,78,.09)] sm:py-1.5 sm:pl-1.5"
                  >
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7 ${option.tone === 'green' ? 'bg-[#D9F1E9] text-[#278876]' : 'bg-[#DDEEF8] text-[#147EAE]'}`}>
                      <PageIcon name={option.icon} className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                    </span>
                    <span className="text-[12.5px] font-semibold leading-[1.25] text-[#234C57] sm:text-[11.5px]">{option.title}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="group mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0A6270] px-6 text-[13.5px] font-semibold text-white shadow-[0_12px_26px_rgba(10,98,112,.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#087F84] sm:mt-9 sm:h-11 sm:w-auto sm:text-[12px]">
                Explore Partnership Opportunities <ArrowRight className="involved-card-arrow ml-2 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto w-full max-w-[1480px] px-4 pb-[72px] sm:px-6 sm:pb-[88px] lg:px-8 lg:pb-[112px] xl:px-10">
          <div className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(145deg,#072F40_0%,#0A5060_58%,#0D6170_100%)] px-5 py-10 text-white shadow-[0_30px_75px_rgba(8,57,77,.22),inset_0_1px_0_rgba(156,229,211,.11)] sm:rounded-[34px] sm:px-8 sm:py-14 lg:px-12 lg:py-[58px] xl:px-16 xl:py-[66px] 2xl:px-20">
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(156,229,211,.32),transparent)]" aria-hidden="true" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.55) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.028 }}
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#7CCFBE]/12 blur-[86px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-14 bottom-0 h-56 w-56 rounded-full bg-[#A8E8D6]/10 blur-[90px]" aria-hidden="true" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,600px)_minmax(0,1fr)] xl:gap-14">
              <div className="rounded-[22px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,.055)_0%,rgba(255,255,255,.025)_100%)] px-5 py-6 backdrop-blur-[4px] sm:px-6 sm:py-7 lg:sticky lg:top-24 lg:rounded-[26px] lg:px-10 lg:py-9 xl:px-12">
                <span className="inline-block rounded-full border border-[#9BE4D3]/20 bg-[#9BE4D3]/[0.1] px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#9BE4D3] sm:text-[10px]">
                  Questions, answered
                </span>
                <div className="mt-5 flex items-center gap-3" aria-hidden="true">
                  <span className="h-px w-12 bg-[#9CE5D3]/35" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9CE5D3]/45" />
                </div>
                <h2 className="mt-5 whitespace-nowrap text-[25px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[31px] lg:text-[36px] xl:text-[40px]">
                  <span className="involved-serif font-bold">FAQs</span>
                  <span className="ml-1.5 text-[0.5em] font-medium tracking-[-0.015em] text-white/82 sm:ml-2.5">(Frequently Asked Questions)</span>
                </h2>
                <p className="mt-5 whitespace-nowrap text-[11.5px] leading-[1.82] text-white/70 sm:text-[13px] lg:text-[14px]">
                  <span className="sm:hidden">
                    <span className="block">Everything you may want to know</span>
                    <span className="block">before you offer support.</span>
                  </span>
                  <span className="hidden sm:inline">Everything you may want to know before you offer time, resources, or support.</span>
                </p>
                <div className="mt-6 h-px w-full max-w-[240px] bg-[linear-gradient(90deg,rgba(156,229,211,.24),rgba(156,229,211,0))] lg:max-w-[320px]" aria-hidden="true" />
                <Link to="/contact" className="group mt-6 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9BE4D3] transition duration-300 hover:text-white sm:mt-7">
                  <span className="border-b border-[#9BE4D3]/35 pb-0.5 transition-colors duration-300 group-hover:border-white/55">Still have a question</span>
                  <ArrowRight className="involved-card-arrow h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={item.question}
                      data-open={isOpen}
                      className={`involved-faq-row involved-faq-card rounded-[20px] border sm:rounded-[24px] ${
                        isOpen
                          ? 'border-[#9BE4D3]/28 bg-[linear-gradient(180deg,rgba(255,255,255,.11)_0%,rgba(255,255,255,.06)_100%)] shadow-[0_18px_38px_rgba(4,29,40,.18)]'
                          : 'border-white/[0.07] bg-[linear-gradient(180deg,rgba(255,255,255,.055)_0%,rgba(255,255,255,.03)_100%)]'
                      }`}
                    >
                      <span className="involved-faq-orb" aria-hidden="true" />
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="relative z-10 flex w-full items-start gap-3 px-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BE4D3]/60 sm:gap-4 sm:px-5 sm:py-5 lg:px-6"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`involved-faq-index mt-0.5 shrink-0 text-[20px] font-bold leading-none transition-colors duration-300 sm:text-[24px] ${isOpen ? 'text-[#9BE4D3]' : 'text-white/22'}`}
                          aria-hidden="true"
                        >
                          0{index + 1}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={`block text-[13.5px] font-semibold leading-[1.45] transition-colors duration-200 sm:text-[15px] lg:text-[15.5px] ${isOpen ? 'text-white' : 'text-white/82'}`}>
                            {item.question}
                          </span>
                          <span className={`mt-1 block text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 sm:text-[10.5px] ${isOpen ? 'text-[#9BE4D3]/90' : 'text-white/35'}`}>
                            {isOpen ? 'Tap to collapse' : 'Tap to read'}
                          </span>
                        </span>
                        <span className={`mt-0.5 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-[38px] sm:w-[38px] ${isOpen ? 'border-[#9BE4D3]/50 bg-[#9BE4D3] text-[#07354A] shadow-[0_10px_18px_rgba(156,229,211,.18)]' : 'border-white/[0.1] bg-white/[0.06] text-white/72'}`}>
                          <span className="involved-plus" aria-hidden="true" />
                        </span>
                      </button>
                      <div className={`grid transition-[grid-template-rows] duration-[380ms] ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                          <div className="relative z-10 mx-4 mb-4 rounded-[16px] border border-white/[0.06] bg-[#062B3A]/28 px-4 py-3.5 sm:mx-5 sm:mb-5 sm:px-5 sm:py-4 lg:mx-6">
                            <p className="text-[13px] leading-[1.8] text-white/68 sm:text-[14px]">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="involved-shell pb-7">
          <div className="relative flex min-h-[120px] items-center justify-center overflow-hidden rounded-[16px] border border-[#B9E2D9] bg-[linear-gradient(90deg,#EAF9F4_0%,#F7FCFA_20%,#FFFFFF_50%,#F7FCFA_80%,#EAF9F4_100%)] px-5 py-5 text-center shadow-[0_10px_28px_rgba(18,58,90,.06)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[240px] bg-[radial-gradient(ellipse_at_left,rgba(184,235,220,.48)_0%,transparent_76%)]" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[240px] bg-[radial-gradient(ellipse_at_right,rgba(184,235,220,.4)_0%,transparent_76%)]" aria-hidden="true" />
            <img src="/assets/gallery/cta-leaf-left-transparent.png" alt="" aria-hidden="true" className="pointer-events-none absolute bottom-[-5px] left-0 w-[128px] opacity-70 sm:w-[154px]" />
            <img src="/assets/gallery/cta-leaf-right-transparent.png" alt="" aria-hidden="true" className="pointer-events-none absolute bottom-[-4px] right-0 w-[132px] opacity-65 sm:w-[158px]" />
            <div className="relative z-10 flex flex-col items-center gap-4 sm:flex-row sm:text-left">
              <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white bg-white/90 text-ocean shadow-soft sm:flex">
                <Heart className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <div className="sm:text-center">
                <h2 className="involved-serif text-[25px] font-bold leading-tight text-[#267D72] md:text-[27px]">Be the Reason for Someone’s Smile</h2>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-body sm:text-[13px]">Every act of kindness creates ripples of hope. Join us today and be part of a brighter tomorrow.</p>
                <button type="button" onClick={openDonation} className="mt-4 inline-flex h-[42px] items-center justify-center rounded-[8px] bg-[#45B8A8] px-6 text-[13.5px] font-semibold text-white shadow-soft transition hover:bg-softgreen sm:mt-3 sm:h-[38px] sm:text-[12px]">
                  Get Involved Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
