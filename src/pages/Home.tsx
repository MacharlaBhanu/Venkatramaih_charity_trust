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
    position: '61% 42%',
  },
  {
    src: '/assets/about/21_about_hero_learning.png',
    alt: 'A teacher helping students learn together in a bright classroom',
    position: '69% center',
  },
  {
    src: '/assets/initiatives/village_community_joy_in_the_sun.png',
    alt: 'A village community gathered together outdoors',
    position: '55% center',
  },
  {
    src: '/assets/stories/04_story_healthcare_access_clear.png',
    alt: 'A schoolgirl concentrating on her studies in a classroom',
    position: '54% center',
  },
  {
    src: '/assets/gallery/02_hero_sapling_banner.png',
    alt: 'Hands carefully holding a young green sapling',
    position: '100% center',
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

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

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
          filter: saturate(0.9) blur(4px);
          transform: scale(1.06);
          transition: opacity 1.4s ease, filter 1.4s ease;
          will-change: opacity, filter, transform;
        }
        .hero-slide-active {
          opacity: 1;
          filter: saturate(1.04) blur(0);
          animation: heroKenBurns 6s ease-out forwards;
        }
        @keyframes heroKenBurns {
          from { transform: scale(1.085); }
          to { transform: scale(1); }
        }
        .hero-title-accent {
          background: linear-gradient(105deg, #1689C7 0%, #5BBFEF 46%, #45B8A8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .hero-slide { transition: none; }
          .hero-slide-active { animation: none; transform: scale(1); }
        }
      `}</style>
      <SEO
        title="Kanneganti Venkataramaiah Charitable Trust | Home"
        path="/"
        breadcrumb={[{ name: 'Home', path: '/' }]}
      />

      {/* Hero */}
      <section className="relative min-h-[570px] overflow-hidden bg-white sm:min-h-[690px] lg:min-h-[700px]">
        <div className="absolute inset-x-0 top-0 h-[245px] overflow-hidden min-[390px]:h-[260px] sm:h-[350px] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[66%]">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding={index === 0 ? 'sync' : 'async'}
              style={{ objectPosition: slide.position }}
              className={`hero-slide absolute inset-0 h-full w-full object-cover ${
                index === activeHero ? 'hero-slide-active z-[1]' : ''
              }`}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_34%,#FFFFFF_52%,#FFFFFF_100%)] lg:bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_39%,rgba(255,255,255,0.92)_43%,rgba(255,255,255,0.5)_49%,rgba(255,255,255,0.14)_55%,rgba(255,255,255,0)_61%)]"
        />
        <img
          src="/assets/home/12_leaf_left_hero.png"
          alt=""
          aria-hidden="true"
          className="leaf-blend pointer-events-none absolute -left-5 bottom-7 z-[3] hidden w-[92px] opacity-30 lg:block"
        />

        <div className="absolute bottom-[72px] right-8 z-20 hidden items-center gap-2 lg:flex" aria-label="Hero image controls">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveHero(index)}
              aria-label={`Show hero image ${index + 1}`}
              aria-current={index === activeHero ? 'true' : undefined}
              className={`h-1.5 rounded-full shadow-sm transition-all duration-500 ${
                index === activeHero ? 'w-7 bg-ocean' : 'w-2.5 bg-white/85 hover:bg-white'
              }`}
            />
          ))}
        </div>

        <div className="container-page relative z-10 flex min-h-[570px] items-end pb-[62px] pt-[270px] min-[390px]:pt-[282px] sm:min-h-[690px] sm:pb-[84px] sm:pt-[370px] lg:min-h-[700px] lg:items-center lg:pb-24 lg:pt-20">
          <div className="min-w-0 w-full animate-fade-in max-w-[610px] lg:w-[48%]">
            <div className="mb-3 h-px w-16 bg-[linear-gradient(90deg,#45B8A8,rgba(69,184,168,0))] sm:mb-5" aria-hidden="true" />
            <h1 className="home-hero-title max-w-[620px] font-title text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] text-heading min-[390px]:text-[37px] sm:text-[62px] sm:tracking-[-0.01em] lg:text-[76px] xl:text-[84px]">
              Transforming Lives
              <br />
              with{' '}
              <span className="hero-title-accent font-title italic max-[359px]:block">
                Compassion
              </span>
            </h1>
            <p className="mt-4 max-w-[490px] text-[12px] leading-[1.65] text-body sm:mt-5 sm:text-[15px] sm:leading-[1.8]">
              We uplift the underprivileged through education, healthcare, empowerment, and social
              welfare initiatives, creating opportunities and building a better tomorrow.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                to="/initiatives"
                className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-[8px] bg-ocean px-2 text-[10px] font-semibold text-white shadow-[0_12px_28px_rgba(22,137,199,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky hover:shadow-[0_16px_34px_rgba(22,137,199,0.24)] focus:outline-none focus:ring-2 focus:ring-sky/40 active:translate-y-0 sm:h-12 sm:w-auto sm:gap-2 sm:px-5 sm:text-[13px]"
              >
                <HandHeart className="h-4 w-4" strokeWidth={1.8} />
                Discover Our Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <button
                onClick={openDonation}
                aria-label="Open donation form"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-[8px] border border-softgreen/70 bg-white/80 px-2 text-[10px] font-semibold text-[#267D72] shadow-[0_10px_24px_rgba(18,58,90,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-softgreen hover:bg-seafoam focus:outline-none focus:ring-2 focus:ring-mint/50 active:translate-y-0 sm:h-12 sm:w-auto sm:gap-2 sm:px-5 sm:text-[13px]"
              >
                <Heart className="h-4 w-4" strokeWidth={1.8} />
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats card */}
      <div className="container-page relative z-20 -mt-7 mb-6 sm:-mt-10 sm:mb-8 md:-mt-11 md:mb-10">
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
