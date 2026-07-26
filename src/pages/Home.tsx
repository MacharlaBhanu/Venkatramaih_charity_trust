import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Flower2,
  ArrowRight,
  ArrowUpRight,
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
import StatCard from '../components/StatCard';
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

const initiativeIcons: Record<string, LucideIcon> = {
  book: GraduationCap,
  health: HeartPulse,
  empower: UserRoundCheck,
  welfare: UsersRound,
};

const initiativeColors = ['#247E9E', '#34796F', '#536C91', '#976A72'];
const storyColors = ['#356A91', '#3D7C73', '#765F82'];

function InsightHeading({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="relative mx-auto max-w-[760px] overflow-hidden px-3 pb-9 pt-12 text-center sm:pb-11 sm:pt-14 lg:max-w-[1360px] lg:overflow-visible lg:pb-[72px] lg:pt-[164px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-3 h-[105px] w-[min(570px,128vw)] -translate-x-1/2 rounded-t-[50%] border-t-2 border-white/90 bg-[linear-gradient(180deg,rgba(166,220,248,0.5)_0%,rgba(229,246,255,0.38)_46%,rgba(255,255,255,0)_100%)] shadow-[inset_0_3px_8px_rgba(255,255,255,0.9),0_-2px_12px_rgba(91,191,239,0.22)] backdrop-blur-xl [mask-image:linear-gradient(to_bottom,black_0%,black_56%,transparent_100%)] lg:top-8 lg:h-[245px] lg:w-[min(1360px,94vw)] lg:border-t-[3px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[18px] h-[92px] w-[min(545px,122vw)] -translate-x-1/2 rounded-t-[50%] border-t border-sky/55 shadow-[inset_0_2px_5px_rgba(255,255,255,0.75)] [mask-image:linear-gradient(to_bottom,black_0%,black_52%,transparent_100%)] lg:top-[42px] lg:h-[228px] lg:w-[min(1315px,91vw)] lg:border-t-2"
      />
      <p className="relative font-sans text-[14px] font-semibold text-[#287E88] sm:text-[15px] lg:text-[17px]">
        {eyebrow}
      </p>
      <h2 className="relative mt-2 font-serif text-[29px] font-bold leading-[1.23] text-heading sm:text-[36px] lg:mt-3 lg:text-[44px]">
        {title}{' '}
        <span className="text-ocean">{accent}</span>
      </h2>
    </div>
  );
}

function InsightPanel({
  number,
  title,
  description,
  image,
  color,
  icon: Icon,
  to,
  actionLabel,
}: {
  number: number;
  title: string;
  description: string;
  image: string;
  color: string;
  icon: LucideIcon;
  to: string;
  actionLabel: string;
}) {
  return (
    <article className="group relative grid min-h-[270px] grid-cols-[45%_55%] overflow-hidden rounded-[8px] bg-white shadow-[0_18px_44px_rgba(18,58,90,0.11)] sm:min-h-[280px] lg:min-h-[320px] lg:grid-cols-[42%_58%]">
      <div
        className="relative z-[1] flex min-w-0 flex-col justify-end overflow-hidden px-4 pb-5 pt-16 text-white sm:px-6 sm:pb-6 lg:px-12 lg:pb-10 lg:pt-20"
        style={{ backgroundColor: color }}
      >
        <span
          aria-hidden="true"
          className="absolute -right-1 top-4 font-sans text-[88px] font-bold leading-none text-white/10 sm:text-[118px] lg:right-8 lg:top-6 lg:text-[180px]"
        >
          {number}
        </span>
        <span className="relative flex h-9 w-9 items-center justify-center rounded-[8px] bg-white/15 ring-1 ring-white/15 backdrop-blur-sm">
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
        </span>
        <h3 className="relative mt-4 font-sans text-[16px] font-bold leading-[1.15] text-white sm:text-[20px] lg:text-[26px]">
          {title}
        </h3>
        <p className="relative mt-2 max-w-[360px] text-[11px] leading-[1.45] text-white/82 sm:text-[13px] sm:leading-[1.55] lg:text-[15px]">
          {description}
        </p>
      </div>

      <div className="relative min-w-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-12"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />
      </div>

      <Link
        to={to}
        aria-label={`${actionLabel}: ${title}`}
        className="absolute bottom-4 right-4 z-[3] flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/70 sm:h-12 sm:w-12 lg:bottom-6 lg:right-6 lg:h-14 lg:w-auto lg:gap-4 lg:border-0 lg:pl-6 lg:pr-2"
        title={actionLabel}
        style={{ color }}
      >
        <span className="hidden font-sans text-[14px] font-semibold lg:inline">{actionLabel}</span>
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full text-white lg:h-10 lg:w-10"
          style={{ backgroundColor: color }}
        >
          <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5" />
        </span>
      </Link>
    </article>
  );
}

const heroSlides = [
  {
    src: heroImage,
    alt: 'A hopeful young girl in a blue school uniform with children behind her',
    label: 'Education',
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
          font-family: 'Source Sans 3', system-ui, sans-serif;
        }
        .trust-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
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
      <section className="relative h-[calc(100svh-56px)] min-h-[590px] overflow-hidden bg-[#0A3854] sm:h-[calc(100svh-72px)] sm:min-h-[650px] lg:h-[calc(100svh-92px)] lg:min-h-[680px]">
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
            <h1 className="home-hero-title trust-hero-title max-w-[640px] leading-none">
              <span className="block text-[34px] font-semibold leading-[1.02] text-white min-[390px]:text-[38px] sm:text-[54px] lg:text-[60px]">
                {currentHero.titleLead}
              </span>
              <span className="mt-1 block text-[40px] font-semibold italic leading-[0.95] text-[#8ED8F8] [text-shadow:0_3px_24px_rgba(38,151,208,0.18)] min-[390px]:text-[44px] sm:mt-2 sm:text-[62px] lg:text-[70px] xl:text-[76px]">
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
      <div className="container-page relative z-20 mb-6 mt-10 sm:mb-8 sm:mt-12 md:mb-10 md:mt-16">
        <div className="relative mx-auto grid max-w-[1240px] grid-cols-[repeat(2,minmax(0,1fr))] overflow-hidden rounded-[20px] border border-[#BFE3F6] bg-[#E3F4FD]/90 p-4 shadow-[0_24px_64px_rgba(64,151,199,0.17),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(91,191,239,0.2)] ring-1 ring-[#D8F0FC] backdrop-blur-2xl sm:p-5 md:grid-cols-4 md:rounded-[12px] md:px-7 md:py-7">
          {homeStats.map((s, i) => (
            <Reveal key={s.label} delay={120 + i * 110} y={20} className={statDividerClass(i)}>
              <StatCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Initiatives preview */}
      <section className="container-page relative pb-14 pt-0 md:pb-18 md:pt-0">
        <Reveal>
          <InsightHeading
            eyebrow="Our Initiatives"
            title="Focused care that builds"
            accent="a better future"
          />
        </Reveal>
        <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:gap-5">
          {homeInitiatives.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="h-full">
              <InsightPanel
                number={i + 1}
                title={item.title}
                description={item.description}
                image={item.image}
                color={initiativeColors[i % initiativeColors.length]}
                icon={initiativeIcons[item.icon] ?? HandHeart}
                to="/initiatives"
                actionLabel="Explore initiative"
              />
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
        <Reveal>
          <InsightHeading
            eyebrow="Stories of Change"
            title="Real journeys shaped by"
            accent="hope and opportunity"
          />
        </Reveal>

        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:gap-5">
          {homeStories.map((story, i) => {
            const StoryIcon = [GraduationCap, HeartPulse, UserRoundCheck][i] ?? Flower2;
            return (
              <Reveal key={story.title} delay={i * 130} className="h-full">
                <InsightPanel
                  number={i + 1}
                  title={story.title}
                  description={story.text}
                  image={story.image}
                  color={storyColors[i % storyColors.length]}
                  icon={StoryIcon}
                  to="/stories"
                  actionLabel="Read story"
                />
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={140} y={26}>
          <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-[8px] border border-line bg-white shadow-[0_16px_38px_rgba(18,58,90,0.07)] sm:grid-cols-4">
            {impactGlance.map((stat, i) => {
              const ImpactIcon = impactIcons[stat.icon] ?? GraduationCap;
              return (
                <div
                  key={stat.label}
                  className={`flex min-h-[104px] items-center gap-3 px-4 py-5 sm:px-5 ${
                    i % 2 ? 'border-l border-line' : ''
                  } ${i > 1 ? 'border-t border-line sm:border-t-0' : ''} ${
                    i > 0 ? 'sm:border-l sm:border-line' : ''
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-softblue text-ocean">
                    <ImpactIcon className="h-[19px] w-[19px]" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-sans text-[18px] font-bold leading-none text-heading">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-[11px] leading-[1.3] text-muted">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
    </>
  );
}
