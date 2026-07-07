import { Link } from 'react-router-dom';
import {
  Leaf,
  Flower2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  HandHeart,
  Heart,
  GraduationCap,
  HeartPulse,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import InitiativeCard from '../components/InitiativeCard';
import StoryCard from '../components/StoryCard';
import { useDonation } from '../context/DonationContext';
import {
  heroImage,
  homeStats,
  homeInitiatives,
  homeStories,
  impactGlance,
} from '../data/homeData';

const impactIcons: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  heartPulse: HeartPulse,
  userCheck: UserRoundCheck,
  usersRound: UsersRound,
};

const statDividerClass = (index: number) =>
  [
    'px-2 py-1 sm:px-4 md:px-6',
    index % 2 === 1 ? 'border-l border-line/70' : '',
    index > 1 ? 'border-t border-line/70 pt-5 md:border-t-0 md:pt-1' : '',
    index > 0 ? 'md:border-l md:border-line/70' : '',
  ]
    .filter(Boolean)
    .join(' ');

export default function Home() {
  const { openDonation } = useDonation();

  return (
    <>
      <SEO
        title="Kanneganti Venkataramaiah Charitable Trust | Home"
        path="/"
        breadcrumb={[{ name: 'Home', path: '/' }]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF8FF_72%,#F7FBFF_100%)]">
        <img
          src="/assets/home/12_leaf_left_hero.png"
          alt=""
          aria-hidden="true"
          className="leaf-blend pointer-events-none absolute left-0 top-[210px] w-16 opacity-45 lg:top-[245px] lg:w-[96px]"
        />

        <div className="container-page relative z-10 grid items-center gap-9 pb-12 pt-10 md:gap-10 md:pb-14 md:pt-12 lg:grid-cols-[46%_54%] lg:pb-16 lg:pt-14">
          <div className="animate-fade-in lg:pr-4">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/75 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.04em] text-softgreen shadow-[0_10px_30px_rgba(18,58,90,0.06)] backdrop-blur">
              <Leaf className="h-[14px] w-[14px]" strokeWidth={1.8} />
              Compassion Today, Better Tomorrow
            </span>
            <h1 className="max-w-[560px] font-serif text-[40px] font-bold leading-[1.06] text-heading md:text-5xl lg:text-[56px]">
              Transforming Lives
              <br />
              with{' '}
              <span className="bg-gradient-to-r from-ocean to-[#45B8A8] bg-clip-text text-transparent">
                Compassion
              </span>
            </h1>
            <p className="mt-5 max-w-[470px] text-[15px] leading-[1.85] text-body md:text-base">
              We uplift the underprivileged through education, healthcare, empowerment, and social
              welfare initiatives, creating opportunities and building a better tomorrow.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/initiatives"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ocean px-5 text-[13px] font-semibold text-white shadow-[0_14px_34px_rgba(22,137,199,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky hover:shadow-[0_18px_42px_rgba(91,191,239,0.24)] focus:outline-none focus:ring-2 focus:ring-sky/40 active:translate-y-0 sm:w-auto"
              >
                <HandHeart className="h-[14px] w-[14px]" strokeWidth={1.8} />
                Discover Our Work
              </Link>
              <button
                onClick={openDonation}
                aria-label="Open donation form"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-softgreen/70 bg-white/90 px-5 text-[13px] font-semibold text-[#267D72] shadow-[0_12px_30px_rgba(18,58,90,0.07)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-softgreen hover:bg-seafoam focus:outline-none focus:ring-2 focus:ring-mint/50 active:translate-y-0 sm:w-auto"
              >
                <Heart className="h-[14px] w-[14px]" strokeWidth={1.8} />
                Donate Now
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[32px] bg-white/45 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/55 p-1.5 shadow-[0_24px_70px_rgba(18,58,90,0.16)]">
              <img
                src={heroImage}
                alt="A hopeful young girl in a blue school uniform with children behind her"
                loading="eager"
                className="hero-fade ml-auto h-[300px] w-full rounded-[22px] object-cover object-[58%_center] sm:h-[390px] lg:h-[480px]"
              />
              <div className="pointer-events-none absolute inset-1.5 rounded-[22px] ring-1 ring-inset ring-white/70" />
              <div className="pointer-events-none absolute inset-x-1.5 top-1.5 h-20 rounded-t-[22px] bg-gradient-to-b from-page/80 via-page/35 to-transparent" />
              <div className="pointer-events-none absolute inset-x-1.5 bottom-1.5 h-20 rounded-b-[22px] bg-gradient-to-t from-section/90 via-section/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats overlapping card (outside hero so it isn't clipped) */}
      <div className="container-page relative z-20 -mt-7 mb-16 md:-mt-9 lg:mb-20">
        <div className="mx-auto grid max-w-[1120px] grid-cols-2 overflow-hidden rounded-[22px] border border-white/80 bg-white/[0.9] p-5 shadow-[0_22px_60px_rgba(18,58,90,0.12)] ring-1 ring-line/60 backdrop-blur-md md:grid-cols-4 md:p-6">
          {homeStats.map((s, i) => (
            <div key={s.label} className={statDividerClass(i)}>
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </div>

      {/* Initiatives preview */}
      <section className="container-page relative pb-16 pt-12 md:pb-20 md:pt-14">
        <SectionTitle
          eyebrow="Our Initiatives"
          title="Empowering Communities, Building a Better Future"
        />
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 md:mt-11 lg:grid-cols-4 lg:gap-6">
          {homeInitiatives.map((item) => (
            <InitiativeCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-14 md:pb-16">
        <div className="relative grid items-center gap-5 overflow-hidden rounded-[22px] border border-white/80 bg-[linear-gradient(135deg,#DFF8EF_0%,#F7FBFF_58%,#DDF2FF_100%)] px-6 py-8 shadow-[0_18px_55px_rgba(18,58,90,0.11)] ring-1 ring-line/60 md:min-h-[126px] md:grid-cols-[150px_1fr_190px] md:gap-0 md:px-9 md:py-0">
          <img
            src="/assets/home/13_leaf_cta_left.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="leaf-blend pointer-events-none absolute bottom-0 left-0 w-[160px] opacity-45 md:opacity-55"
          />
          <img
            src="/assets/home/14_leaf_cta_right.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="leaf-blend pointer-events-none absolute bottom-0 right-0 w-[160px] opacity-45 md:opacity-55"
          />

          <div className="relative z-10 flex justify-center">
            <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-[0_14px_36px_rgba(18,58,90,0.1)]">
              <HeartHandshake className="h-8 w-8 text-softgreen" strokeWidth={1.8} />
            </span>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-serif text-[23px] font-bold leading-tight text-[#267D72] md:text-[26px]">
              Be the Reason for Someone's Smile
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-[13px] leading-[1.65] text-body md:mx-0">
              Your support can bring hope and change lives. Together, we can build a kinder and
              stronger society.
            </p>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end">
            <button
              onClick={openDonation}
              aria-label="Open donation form"
              className="flex h-12 w-[160px] items-center justify-center gap-2 rounded-xl bg-[#45B8A8] text-[13px] font-semibold text-white shadow-[0_14px_34px_rgba(69,184,168,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-softgreen hover:shadow-[0_18px_42px_rgba(107,205,182,0.26)] focus:outline-none focus:ring-2 focus:ring-mint/50 active:translate-y-0"
            >
              <Heart className="h-4 w-4" strokeWidth={2} />
              Join Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Stories + Impact glance */}
      <section className="container-page pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[68%_32%] lg:gap-9">
          <div className="relative">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="flex items-center gap-2 font-serif text-[24px] font-bold leading-tight text-heading">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-seafoam text-[#45B8A8]">
                  <Flower2 className="h-5 w-5" strokeWidth={1.8} />
                </span>
                Stories of Change
              </h2>
              <Link
                to="/stories"
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line bg-white/75 px-3.5 py-2 text-xs font-semibold text-ocean shadow-[0_10px_26px_rgba(18,58,90,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-softblue hover:bg-softblue/70 hover:text-sky"
              >
                View All Stories <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="relative">
              {/* Slider arrows */}
              <button
                aria-label="Previous stories"
                className="absolute -left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-ocean shadow-soft backdrop-blur transition-all duration-300 hover:-translate-x-0.5 hover:bg-softblue hover:text-sky md:flex"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next stories"
                className="absolute -right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-ocean shadow-soft backdrop-blur transition-all duration-300 hover:translate-x-0.5 hover:bg-softblue hover:text-sky md:flex"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="grid gap-5 sm:grid-cols-3">
                {homeStories.map((s) => (
                  <StoryCard key={s.title} {...s} objectPosition="center 25%" />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[22px] border border-white/80 bg-white/90 p-5 shadow-[0_18px_48px_rgba(18,58,90,0.09)] ring-1 ring-line/60 backdrop-blur-sm sm:p-6 lg:p-[26px]">
            <h3 className="mb-5 text-center font-serif text-[22px] font-bold leading-tight text-heading">
              Our Impact at a Glance
            </h3>
            <div className="grid grid-cols-2 gap-3.5">
              {impactGlance.map((s) => {
                const LucideI = impactIcons[s.icon] ?? GraduationCap;
                return (
                  <div
                    key={s.label}
                    className="flex min-h-[72px] items-center gap-3 rounded-[14px] border border-line/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)] p-3.5 shadow-[0_10px_26px_rgba(18,58,90,0.045)] transition-all duration-300 hover:-translate-y-0.5 hover:border-softblue hover:shadow-[0_16px_34px_rgba(18,58,90,0.08)]"
                  >
                    <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-softblue/80 text-ocean ring-1 ring-white">
                      <LucideI className="h-[18px] w-[18px]" strokeWidth={1.8} />
                    </span>
                    <div>
                      <div className="text-[16px] font-extrabold leading-tight text-heading">
                        {s.value}
                      </div>
                      <div className="mt-1 text-[10px] leading-[1.25] text-muted">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
