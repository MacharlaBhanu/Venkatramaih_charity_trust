import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  ClipboardList,
  HandHeart,
  Handshake,
  Heart,
  Megaphone,
  Minus,
  PackageOpen,
  Pencil,
  Plus,
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
  volunteerBenefits,
} from '../data/getInvolvedData';
import type { GetInvolvedIcon } from '../data/getInvolvedData';

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

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="text-center">
      <h2 className="involved-serif text-[23px] font-bold leading-tight text-heading md:text-[25px]">{children}</h2>
      <div className="mt-2 flex items-center justify-center gap-1.5 text-sky" aria-hidden="true">
        <span className="h-px w-7 bg-line" />
        <Heart className="h-3.5 w-3.5 fill-sky/20" strokeWidth={1.7} />
        <span className="h-px w-7 bg-line" />
      </div>
    </div>
  );
}

export default function GetInvolved() {
  const { openDonation } = useDonation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Get Involved | Kanneganti Venkataramaiah Charitable Trust"
        description="Donate, volunteer, sponsor programs, partner with us, and discover meaningful ways to support Kanneganti Venkataramaiah Charitable Trust."
        path="/get-involved"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Get Involved', path: '/get-involved' },
        ]}
      />

      <div className="brand-color-page overflow-hidden bg-page">
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
          .involved-process-line {
            position: absolute;
            left: 10%;
            right: 10%;
            top: 27px;
            border-top: 1px solid rgba(91,191,239,.38);
          }
          @media (min-width: 640px) {
            .involved-shell,
            .involved-section-shell { padding-inline: 32px; }
          }
          @media (min-width: 1024px) {
            .involved-shell,
            .involved-section-shell { padding-inline: 48px; }
          }
          @media (min-width: 1280px) {
            .involved-shell,
            .involved-section-shell { padding-inline: 64px; }
          }
          @media (max-width: 767px) {
            .involved-hero-image::before {
              background: linear-gradient(to bottom, transparent 52%, #082F49 100%);
            }
            .involved-process-line {
              left: 27px;
              right: auto;
              top: 27px;
              bottom: 27px;
              width: 1px;
              border-left: 1px solid rgba(91,191,239,.38);
              border-top: 0;
            }
          }
        `}</style>

        {/* Hero */}
        <section className="relative min-h-[550px] overflow-hidden border-b border-line bg-[linear-gradient(115deg,#082F49_0%,#0A527A_48%,#B9E3F5_100%)] md:min-h-[330px]">
          <div className="involved-hero-image absolute inset-x-0 top-0 h-[310px] overflow-hidden md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[63%]">
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
            className="pointer-events-none absolute -bottom-5 -right-5 z-[3] w-[130px] opacity-45 md:w-[150px]"
          />

          <div className="involved-shell relative z-10 flex min-h-[550px] items-end pb-10 pt-[280px] md:min-h-[330px] md:items-center md:py-[34px]">
            <div className="max-w-[520px] md:w-[44%]">
              <h1 className="involved-serif text-[38px] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[58px]">
                <span className="block">Get Involved,</span>
                <span className="block text-[#8ED8F8]">Create Change</span>
              </h1>
              <div className="mt-3 flex w-[138px] items-center gap-2 text-sky" aria-hidden="true">
                <span className="h-px flex-1 bg-sky/55" />
                <Heart className="h-3.5 w-3.5 fill-sky/20" strokeWidth={1.7} />
                <span className="h-px flex-1 bg-sky/55" />
              </div>
              <p className="mt-4 max-w-[500px] text-[14px] leading-[1.7] text-white/80">
                Together, we can build a kinder, healthier, and more empowered tomorrow. Your time,
                resources, and voice can transform lives and strengthen communities.
              </p>
              <div className="mt-[22px] flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={openDonation}
                  className="inline-flex h-[42px] items-center justify-center rounded-[8px] bg-ocean px-[26px] text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(22,137,199,.18)] transition hover:-translate-y-0.5 hover:bg-sky"
                >
                  Donate Now
                </button>
                <Link
                  to="/contact"
                  className="inline-flex h-[42px] items-center justify-center rounded-[8px] border border-softgreen bg-white px-6 text-[13px] font-semibold text-[#267D72] transition hover:-translate-y-0.5 hover:bg-seafoam"
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ways you can help */}
        <section className="involved-section-shell pb-7 pt-[22px]">
          <SectionHeading>Ways You Can Help</SectionHeading>
          <div className="mt-5 grid gap-[18px] min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {helpOptions.map((option) => (
              <article
                key={option.title}
                className="group flex min-h-[190px] flex-col items-center rounded-[15px] border border-line bg-white px-[18px] pb-5 pt-[22px] text-center shadow-[0_10px_28px_rgba(18,58,90,.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(18,58,90,.11)] min-[420px]:last:col-span-2 md:last:col-span-1"
              >
                <span className={`flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full ${option.tone === 'green' ? 'bg-seafoam text-softgreen' : 'bg-softblue text-ocean'}`}>
                  <PageIcon name={option.icon} className="h-7 w-7" />
                </span>
                <h3 className="involved-serif mt-3 text-[18px] font-bold leading-tight text-heading">{option.title}</h3>
                <p className="mt-2 flex-1 text-[11px] leading-[1.5] text-body">{option.description}</p>
                {option.action === 'donate' ? (
                  <button type="button" onClick={openDonation} className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-ocean hover:text-sky">
                    {option.link} <ArrowRight className="h-3 w-3" />
                  </button>
                ) : (
                  <Link to={option.to} className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-ocean hover:text-sky">
                    {option.link} <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Process and benefits */}
        <section className="involved-section-shell grid gap-[22px] pb-6 lg:grid-cols-[1.35fr_1fr]">
          <article className="rounded-[15px] border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#EEF8FF_100%)] p-5 shadow-[0_10px_28px_rgba(18,58,90,.06)] sm:p-6">
            <SectionHeading>Our Process</SectionHeading>
            <div className="relative mt-4 grid gap-4 md:grid-cols-5 md:gap-2">
              <span className="involved-process-line" aria-hidden="true" />
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative z-10 flex items-start gap-4 md:block md:text-center">
                  <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-[0_8px_20px_rgba(18,58,90,.06)] md:mx-auto">
                    <PageIcon name={step.icon} className="h-[23px] w-[23px]" />
                  </span>
                  <div className="pt-0.5 md:pt-0">
                    <span className="involved-serif text-[18px] font-bold leading-none text-ocean md:mt-2 md:block">{index + 1}</span>
                    <h3 className="mt-0.5 text-[12px] font-bold leading-tight text-heading">{step.title}</h3>
                    <p className="mt-1 text-[10px] leading-[1.4] text-body">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[15px] border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#EEF8FF_100%)] p-5 shadow-[0_10px_28px_rgba(18,58,90,.06)] sm:p-6">
            <SectionHeading>Volunteer Benefits</SectionHeading>
            <div className="mt-4 grid gap-[18px] sm:grid-cols-[55%_45%] sm:items-center">
              <img
                src="/assets/get-involved/03_volunteer_benefits_photo.png"
                alt="Young volunteers working together in their community"
                loading="lazy"
                decoding="async"
                className="h-[165px] w-full rounded-[12px] object-cover object-center"
              />
              <ul className="space-y-2">
                {volunteerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-[11px] leading-[1.4] text-body">
                    <CheckCircle2 className="mt-px h-[15px] w-[15px] shrink-0 text-softgreen" strokeWidth={1.9} aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        {/* Partnership and FAQs */}
        <section className="involved-section-shell grid gap-[22px] pb-7 lg:grid-cols-[1fr_1.1fr]">
          <article className="relative overflow-hidden rounded-[15px] border border-line bg-white p-5 text-center shadow-[0_10px_28px_rgba(18,58,90,.06)] sm:p-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[190px] bg-[radial-gradient(ellipse_at_left,rgba(184,235,220,.34)_0%,transparent_74%)]" aria-hidden="true" />
            <img src="/assets/gallery/cta-leaf-left-transparent.png" alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-8 -left-6 w-[116px] opacity-30" />
            <div className="relative z-10">
              <SectionHeading>Partner With Us</SectionHeading>
              <p className="mx-auto mt-2 max-w-[480px] text-[12px] leading-[1.55] text-body">
                We collaborate with organizations, corporates, and institutions to co-create programs
                that drive sustainable and measurable change. Let’s build a better future, together.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {partnershipOptions.map((option) => (
                  <div key={option.title} className="flex flex-col items-center">
                    <span className={`flex h-[46px] w-[46px] items-center justify-center rounded-full ${option.tone === 'green' ? 'bg-seafoam text-softgreen' : 'bg-softblue text-ocean'}`}>
                      <PageIcon name={option.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-2 text-[10.5px] font-semibold leading-tight text-heading">{option.title}</h3>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-5 inline-flex h-[38px] items-center justify-center rounded-[8px] bg-ocean px-[22px] text-[11px] font-semibold text-white shadow-soft transition hover:bg-sky">
                Explore Partnership Opportunities
              </Link>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[15px] border border-line bg-white p-5 shadow-[0_10px_28px_rgba(18,58,90,.06)] sm:p-6">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[190px] bg-[radial-gradient(ellipse_at_right,rgba(184,235,220,.28)_0%,transparent_74%)]" aria-hidden="true" />
            <img src="/assets/gallery/cta-leaf-right-transparent.png" alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-8 -right-6 w-[112px] opacity-25" />
            <div className="relative z-10">
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <div className="mt-[18px] space-y-2">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={item.question} className="brand-subcard overflow-hidden rounded-[7px] border border-line bg-page">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex min-h-10 w-full items-center justify-between gap-3 px-[14px] text-left text-[11.5px] font-medium text-heading"
                        aria-expanded={isOpen}
                      >
                        {item.question}
                        {isOpen ? <Minus className="h-3.5 w-3.5 shrink-0 text-ocean" /> : <Plus className="h-3.5 w-3.5 shrink-0 text-ocean" />}
                      </button>
                      <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                          <p className="px-[14px] pb-3 text-[11px] leading-[1.5] text-body">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
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
                <p className="mt-1 text-[12px] text-body sm:text-[13px]">Every act of kindness creates ripples of hope. Join us today and be part of a brighter tomorrow.</p>
                <button type="button" onClick={openDonation} className="mt-3 inline-flex h-[38px] items-center justify-center rounded-[8px] bg-[#45B8A8] px-6 text-[12px] font-semibold text-white shadow-soft transition hover:bg-softgreen">
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
