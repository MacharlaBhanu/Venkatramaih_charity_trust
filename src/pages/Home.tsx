import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
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

const heroSlides = [
  {
    src: heroImage,
    alt: 'A hopeful young girl in a blue school uniform with children behind her',
    label: 'Education',
    eyebrow: 'Learning creates possibility',
    titleLead: 'A brighter future',
    titleAccent: 'Begins With Learning',
    description:
      'We open doors to education, confidence, and opportunity for children who need them most.',
    position: '61% 42%',
    desktopPosition: '61% 22%',
    mobilePosition: '66% center',
  },
  {
    src: '/assets/about/21_about_hero_learning.png',
    alt: 'A teacher helping students learn together in a bright classroom',
    label: 'Learning',
    eyebrow: 'Potential, patiently nurtured',
    titleLead: 'Care today creates',
    titleAccent: 'Confidence Tomorrow',
    description:
      'Through thoughtful support and dedicated mentors, young minds find space to grow.',
    position: '69% center',
    desktopPosition: '69% 24%',
    mobilePosition: '65% center',
  },
  {
    src: '/assets/initiatives/caring_consultation_in_a_clinic.png',
    alt: 'A caring medical consultation in a community clinic',
    label: 'Healthcare',
    eyebrow: 'Care within reach',
    titleLead: 'Good health belongs',
    titleAccent: 'Within Everyone’s Reach',
    description:
      'Our healthcare initiatives bring timely, respectful support closer to underserved families.',
    position: '62% center',
    desktopPosition: '62% 24%',
    mobilePosition: '57% center',
  },
  {
    src: '/assets/initiatives/sewing_workshop_with_women_in_saris.png',
    alt: 'Women learning together in a community sewing workshop',
    label: 'Empowerment',
    eyebrow: 'Skills become independence',
    titleLead: 'Practical skills create',
    titleAccent: 'Lasting Independence',
    description:
      'Training and livelihood programs help women build confidence, income, and lasting independence.',
    position: '54% center',
    desktopPosition: '54% 24%',
    mobilePosition: '51% center',
  },
  {
    src: '/assets/gallery/02_hero_sapling_banner.png',
    alt: 'Hands carefully holding a young green sapling',
    label: 'Community',
    eyebrow: 'Change that takes root',
    titleLead: 'Compassion grows',
    titleAccent: 'Stronger Communities',
    description:
      'Together with volunteers and supporters, we create change that communities can carry forward.',
    position: '76% center',
    desktopPosition: '76% 28%',
    mobilePosition: '68% center',
  },
];

const statDividerClass = (index: number) =>
  [
    'px-2 py-1 sm:px-4 md:px-6 lg:px-8',
    index % 2 === 1 ? 'border-l border-[#CFEAF8]/90' : '',
    index > 1 ? 'border-t border-[#CFEAF8]/90 pt-5 md:border-t-0 md:pt-1' : '',
    index > 0 ? 'md:border-l md:border-[#CFEAF8]/90' : '',
  ]
    .filter(Boolean)
    .join(' ');

function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ['--reveal-y' as string]: `${y}px` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const { openDonation } = useDonation();
  const [activeHero, setActiveHero] = useState(0);
  const heroChipStripRef = useRef<HTMLDivElement>(null);
  const heroChipRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 6200);

    return () => window.clearTimeout(timer);
  }, [activeHero]);

  useEffect(() => {
    const strip = heroChipStripRef.current;
    const chip = heroChipRefs.current[activeHero];
    if (!strip || !chip) return;

    const centeredLeft =
      chip.offsetLeft - strip.clientWidth / 2 + chip.clientWidth / 2;
    strip.scrollTo({
      left: Math.max(0, centeredLeft),
      behavior: 'smooth',
    });
  }, [activeHero]);

  const currentHero = heroSlides[activeHero];

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(var(--reveal-y, 28px)) scale(0.985);
          transition: opacity 0.7s cubic-bezier(0.22, 0.61, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);
          will-change: opacity, transform;
        }
        .reveal-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .hero-slide {
          opacity: 0;
          filter: saturate(0.82) blur(3px);
          transform: scale(1.075);
          transition: opacity 1.25s ease, filter 1.25s ease;
          will-change: opacity, filter, transform;
        }
        .hero-slide-active {
          opacity: 1;
          filter: saturate(1.03) blur(0);
          animation: heroKenBurns 7.2s ease-out forwards;
        }
        @keyframes heroKenBurns {
          from { transform: scale(1.09); }
          to { transform: scale(1); }
        }
        @keyframes heroKenBurnsDesktop {
          from { transform: scale(1.045); }
          to { transform: scale(1); }
        }
        .hero-progress {
          transform-origin: left center;
          animation: heroProgress 6.2s linear forwards;
        }
        .hero-chip-strip {
          overscroll-behavior-inline: contain;
          scroll-snap-type: x proximity;
          touch-action: pan-x;
        }
        .hero-chip {
          scroll-snap-align: center;
        }
        @keyframes heroProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .hero-copy-enter {
          animation: heroCopyEnter 0.72s cubic-bezier(0.22, 0.61, 0.36, 1) both;
        }
        .trust-hero-copy {
          font-family: 'Poppins', Inter, system-ui, sans-serif;
        }
        .trust-hero-title {
          font-family: 'Space Grotesk', 'Poppins', Inter, system-ui, sans-serif;
          letter-spacing: 0;
        }
        @keyframes heroCopyEnter {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .hero-slide { transition: none; }
          .hero-slide-active { animation: none; transform: scale(1); }
          .hero-progress, .hero-copy-enter { animation: none; }
        }
        @media (max-width: 1023px) {
          ${heroSlides
            .map(
              (slide, index) =>
                `.hero-slide-${index} { object-position: ${slide.mobilePosition}; }`
            )
            .join('\n')}
        }
        @media (min-width: 1024px) {
          .hero-slide-active {
            animation-name: heroKenBurnsDesktop;
          }
          ${heroSlides
            .map(
              (slide, index) =>
                `.hero-slide-${index} { object-position: ${slide.desktopPosition} !important; }`
            )
            .join('\n')}
        }
      `}</style>
      <SEO
        title="Kanneganti Venkataramaiah Charitable Trust | Home"
        path="/"
        breadcrumb={[{ name: 'Home', path: '/' }]}
      />

      {/* Hero */}
      <section className="relative h-[calc(100svh-104px)] min-h-[590px] max-h-[740px] overflow-hidden bg-[#0A3854] sm:min-h-[650px] lg:h-[calc(100svh-140px)] lg:min-h-[640px] lg:max-h-[820px]">
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding={index === 0 ? 'sync' : 'async'}
              style={{ objectPosition: slide.position }}
              className={`hero-slide hero-slide-${index} absolute inset-0 h-full w-full object-cover ${
                index === activeHero ? 'hero-slide-active z-[1]' : ''
              }`}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(6,35,52,0.08)_0%,rgba(5,37,56,0.08)_24%,rgba(4,35,53,0.78)_68%,rgba(3,28,43,0.96)_100%)] lg:bg-[linear-gradient(90deg,rgba(3,31,48,0.94)_0%,rgba(4,35,53,0.82)_35%,rgba(5,37,56,0.24)_67%,rgba(5,37,56,0.08)_100%)]"
        />

        <div className="container-page relative z-10 flex h-full items-end pb-[112px] sm:pb-[124px] lg:pb-[132px] lg:pt-20">
          <div key={activeHero} className="trust-hero-copy hero-copy-enter min-w-0 w-full max-w-[640px] lg:w-[50%]">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase text-[#B9E6FA] sm:mb-4 sm:text-[12px]">
              <span className="h-px w-8 bg-[#8ED8F8]" aria-hidden="true" />
              {currentHero.eyebrow}
            </div>
            <h1 className="home-hero-title trust-hero-title max-w-[640px] leading-none">
              <span className="block text-[27px] font-medium leading-[1.15] text-white min-[390px]:text-[30px] sm:text-[38px] lg:text-[40px]">
                {currentHero.titleLead}
              </span>
              <span className="mt-1 block text-[41px] font-semibold leading-[0.98] text-[#8ED8F8] [text-shadow:0_3px_24px_rgba(38,151,208,0.18)] min-[390px]:text-[46px] sm:mt-2 sm:text-[58px] lg:text-[66px] xl:text-[72px]">
                {currentHero.titleAccent}
              </span>
            </h1>
            <p className="mt-4 max-w-[510px] text-[12px] font-normal leading-[1.65] text-white/80 drop-shadow-sm sm:mt-5 sm:text-[15px] sm:leading-[1.7]">
              {currentHero.description}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                to="/initiatives"
                className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-[8px] bg-white px-2 text-[10px] font-semibold text-[#0A527A] shadow-[0_14px_32px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF8FF] focus:outline-none focus:ring-2 focus:ring-white/60 active:translate-y-0 sm:h-12 sm:w-auto sm:gap-2 sm:px-5 sm:text-[13px]"
              >
                <HandHeart className="h-4 w-4" strokeWidth={1.8} />
                Explore Our Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <button
                onClick={openDonation}
                aria-label="Open donation form"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-[8px] border border-white/60 bg-white/10 px-2 text-[10px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 active:translate-y-0 sm:h-12 sm:w-auto sm:gap-2 sm:px-5 sm:text-[13px]"
              >
                <Heart className="h-4 w-4" strokeWidth={1.8} />
                Donate Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-4 z-20 sm:bottom-5">
          <div className="container-page flex items-center lg:justify-center">
            <div
              ref={heroChipStripRef}
              className="hero-chip-strip no-scrollbar flex min-w-0 flex-1 gap-2 overflow-x-auto py-1 lg:w-auto lg:flex-none lg:justify-center lg:gap-3"
              aria-label="Featured stories"
            >
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  ref={(element) => {
                    heroChipRefs.current[index] = element;
                  }}
                  type="button"
                  onClick={() => setActiveHero(index)}
                  aria-label={`Show ${slide.label} story`}
                  aria-current={index === activeHero ? 'true' : undefined}
                  className={`hero-chip relative flex h-11 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border px-5 text-center text-[10px] font-semibold text-white backdrop-blur-lg transition-all duration-300 sm:h-12 sm:px-6 sm:text-[12px] lg:min-w-[142px] ${
                    index === activeHero
                      ? 'border-[#8ED8F8] bg-[#174E68]/85 text-white shadow-[0_0_0_1px_rgba(142,216,248,0.24),0_10px_30px_rgba(0,0,0,0.28)]'
                      : 'border-white/15 bg-[#061F32]/68 text-white/75 shadow-[0_8px_22px_rgba(0,0,0,0.12)] hover:border-white/40 hover:bg-[#0A3854]/85 hover:text-white'
                  }`}
                >
                  {index === activeHero && (
                    <span
                      className="relative z-[1] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9F3FF] shadow-[0_0_9px_rgba(142,216,248,0.8)]"
                      aria-hidden="true"
                    />
                  )}
                  {index === activeHero && (
                    <span
                      key={activeHero}
                      className="hero-progress absolute inset-x-0 bottom-0 h-[3px] bg-[#8ED8F8]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-[1] whitespace-nowrap">{slide.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats card */}
      <div className="container-page relative z-20 mb-6 mt-6 sm:mb-8 sm:mt-8 md:mb-10 md:mt-10">
        <Reveal y={36}>
          <div className="relative mx-auto grid max-w-[1120px] grid-cols-[repeat(2,minmax(0,1fr))] overflow-hidden rounded-[20px] border border-[#BFE3F6] bg-[#E3F4FD]/90 p-4 shadow-[0_30px_80px_rgba(64,151,199,0.18),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(91,191,239,0.2)] ring-1 ring-[#D8F0FC] backdrop-blur-2xl sm:p-5 md:grid-cols-4 md:rounded-[12px] md:px-7 md:py-7">
            {homeStats.map((s, i) => (
              <Reveal key={s.label} delay={120 + i * 110} y={20} className={statDividerClass(i)}>
                <StatCard {...s} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Initiatives preview */}
      <section className="container-page relative pb-12 pt-8 md:pb-14 md:pt-10">
        <Reveal>
          <SectionTitle
            eyebrow="Our Initiatives"
            title="Empowering Communities, Building a Better Future"
            subtitle="Focused programs across education, healthcare, empowerment and welfare, each designed to create lasting, dignified change."
          />
        </Reveal>
        <div className="relative mt-9 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-4 lg:gap-6">
          {homeInitiatives.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="h-full">
              <InitiativeCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-12 md:pb-14">
        <Reveal y={32}>
        <div className="relative grid items-center gap-6 overflow-hidden rounded-[20px] border border-white/85 bg-[linear-gradient(100deg,#E3F8F1_0%,#F5FBFF_52%,#EAF6FC_100%)] px-7 py-9 shadow-[0_18px_48px_rgba(18,58,90,0.09)] ring-1 ring-line/60 md:min-h-[150px] md:grid-cols-[180px_minmax(0,1fr)_210px] md:gap-0 md:rounded-[8px] md:px-10 md:py-0">
          <img
            src="/assets/home/13_leaf_cta_left.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="leaf-blend pointer-events-none absolute bottom-0 left-0 w-[145px] opacity-30 md:opacity-40"
          />
          <img
            src="/assets/home/14_leaf_cta_right.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="leaf-blend pointer-events-none absolute bottom-0 right-0 w-[145px] opacity-30 md:opacity-40"
          />

          <div className="relative z-10 flex justify-center md:justify-end md:pr-8">
            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/90 bg-white shadow-[0_12px_30px_rgba(18,58,90,0.08)]">
              <HeartHandshake className="h-8 w-8 text-softgreen" strokeWidth={1.7} />
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-[720px] text-center">
            <h2 className="font-serif text-[27px] font-semibold leading-[1.15] text-[#267D72] md:text-[30px]">
              Be the Reason for Someone's Smile
            </h2>
            <p className="mx-auto mt-2 max-w-[600px] text-[13px] leading-[1.65] text-body md:text-[14px]">
              Your support can bring hope and change lives. Together, we can build a kinder and
              stronger society.
            </p>
          </div>

          <div className="relative z-10 flex justify-center md:justify-start md:pl-7">
            <button
              onClick={openDonation}
              aria-label="Open donation form"
              className="group flex h-12 w-[168px] items-center justify-center gap-2 rounded-[8px] bg-[#45B8A8] text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(69,184,168,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-softgreen hover:shadow-[0_16px_34px_rgba(107,205,182,0.26)] focus:outline-none focus:ring-2 focus:ring-mint/50 active:translate-y-0"
            >
              <Heart className="h-[18px] w-[18px]" strokeWidth={2} />
              Join Us Today
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
        </Reveal>
      </section>

      {/* Stories + Impact glance */}
      <section className="container-page relative pb-16 md:pb-20">
        <div className="grid items-stretch gap-8 lg:grid-cols-[67%_33%] lg:gap-9">
          <div className="relative flex flex-col">
            <Reveal className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="flex items-center gap-2.5 font-serif text-[25px] font-semibold leading-tight text-heading md:text-[28px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-seafoam text-[#45B8A8]">
                  <Flower2 className="h-5 w-5" strokeWidth={1.8} />
                </span>
                Stories of Change
              </h2>
              <Link
                to="/stories"
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line bg-white/75 px-3.5 py-3 text-xs font-semibold text-ocean lg:py-2 shadow-[0_10px_26px_rgba(18,58,90,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-softblue hover:bg-softblue/70 hover:text-sky"
              >
                View All Stories <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>

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
                {homeStories.map((s, i) => (
                  <Reveal key={s.title} delay={i * 130} className="h-full">
                    <StoryCard {...s} objectPosition="center 25%" />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <Reveal delay={120} y={32} className="h-full">
            <div className="flex h-full flex-col rounded-[8px] border border-white/80 bg-white/90 p-5 shadow-[0_18px_46px_rgba(18,58,90,0.09)] ring-1 ring-line/60 backdrop-blur-sm sm:p-6">
              <h3 className="mb-4 text-center font-serif text-[21px] font-semibold leading-tight text-heading">
                Our Impact at a Glance
              </h3>
              <div className="grid flex-1 grid-cols-2 gap-3 [grid-auto-rows:1fr]">
                {impactGlance.map((s, i) => {
                  const LucideI = impactIcons[s.icon] ?? GraduationCap;
                  return (
                    <Reveal key={s.label} delay={220 + i * 100} y={18} className="h-full">
                      <div className="group flex h-full min-h-[82px] items-center gap-3 rounded-[8px] border border-line/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)] p-3 shadow-[0_8px_22px_rgba(18,58,90,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-softblue hover:shadow-[0_14px_30px_rgba(18,58,90,0.08)]">
                        <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-softblue/80 text-ocean ring-1 ring-white transition-transform duration-300 group-hover:scale-105">
                          <LucideI className="h-[18px] w-[18px]" strokeWidth={1.8} />
                        </span>
                        <div>
                          <div className="text-[16px] font-extrabold leading-none text-heading">
                            {s.value}
                          </div>
                          <div className="mt-1.5 text-[11px] leading-[1.35] text-muted">{s.label}</div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
