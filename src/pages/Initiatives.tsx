import {
  ArrowDownRight,
  Award,
  BookOpen,
  GraduationCap,
  HandHeart,
  Heart,
  HeartPulse,
  Lightbulb,
  Soup,
  Star,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { useDonation } from '../context/DonationContext';
import { initiatives, initiativesStats } from '../data/initiativesData';

const initiativeIcons: Record<string, LucideIcon> = {
  book: BookOpen,
  health: HeartPulse,
  lightbulb: Lightbulb,
  welfare: UsersRound,
  grad: GraduationCap,
  food: Soup,
};

const statIcons: Record<string, LucideIcon> = {
  usersRound: UsersRound,
  heart: Heart,
  star: Star,
  handHeart: HandHeart,
  award: Award,
};

const initiativeThemes = [
  { accent: '#187EAD', soft: '#DCEEF5', dark: '#105B7F', surface: 'linear-gradient(135deg,#f5fbfd 0%,#dcecf2 100%)' },
  { accent: '#C86852', soft: '#F5DED7', dark: '#8E4435', surface: 'linear-gradient(135deg,#fff8f5 0%,#f1ddd6 100%)' },
  { accent: '#A9802F', soft: '#F0E5C7', dark: '#70551F', surface: 'linear-gradient(135deg,#fffaf0 0%,#ecdfbb 100%)' },
  { accent: '#4E816B', soft: '#DCEBE3', dark: '#345E4D', surface: 'linear-gradient(135deg,#f5faf7 0%,#d9e9e0 100%)' },
  { accent: '#5D709E', soft: '#DFE4F0', dark: '#415178', surface: 'linear-gradient(135deg,#f8f9fd 0%,#dfe3ee 100%)' },
  { accent: '#A45F47', soft: '#EFDDD4', dark: '#744331', surface: 'linear-gradient(135deg,#fff8f4 0%,#ead8cf 100%)' },
] as const;

const initiativeAnchors = [
  'education-for-all',
  'healthcare-support',
  'women-empowerment',
  'community-welfare',
  'scholarship-support',
  'food-support',
] as const;

export default function Initiatives() {
  const { openDonation } = useDonation();

  return (
    <>
      <SEO
        title="Our Initiatives | Kanneganti Venkatramaiah Charitable Trust"
        description="Explore the education, healthcare, women empowerment, community welfare, scholarship, and food support initiatives of Kanneganti Venkatramaiah Charitable Trust."
        path="/initiatives"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Our Initiatives', path: '/initiatives' },
        ]}
      />

      <div className="overflow-hidden bg-[#f5f8f6]">
        <style>
          {`
            @keyframes hero-aurora {
              0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.55; }
              50% { transform: translate3d(-26px, -34px, 0) scale(1.14); opacity: 0.8; }
            }

            .hero-aurora { animation: hero-aurora 16s ease-in-out infinite; }
            .hero-aurora-slow { animation: hero-aurora 22s ease-in-out infinite reverse; }

            @keyframes hero-sheen {
              0% { transform: translateX(-120%); }
              55%, 100% { transform: translateX(220%); }
            }

            .hero-sheen { animation: hero-sheen 7s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

            /* fine woven texture — keeps the dark field from looking flat */
            .hero-weave {
              background-image:
                repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 7px),
                repeating-linear-gradient(-115deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 11px);
              -webkit-mask-image: radial-gradient(120% 90% at 22% 30%, #000 0%, transparent 72%);
              mask-image: radial-gradient(120% 90% at 22% 30%, #000 0%, transparent 72%);
            }

            .hero-gold-rule {
              background: linear-gradient(90deg, rgba(212,175,110,0.9), rgba(212,175,110,0.15) 55%, transparent);
            }

            .hero-title-accent {
              background: linear-gradient(104deg, #EAF7FF 0%, #9FE4DA 42%, #D9C08A 100%);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }

            @media (prefers-reduced-motion: reduce) {
              .hero-aurora, .hero-aurora-slow, .hero-sheen { animation: none !important; }
            }
          `}
        </style>

        {/* Story-led hero */}
        <section className="relative overflow-hidden border-b border-[#75bfd0]/25 bg-[linear-gradient(118deg,#04161f_0%,#082e42_46%,#0f4f5c_100%)] lg:min-h-[calc(100svh-92px)]">
          <div aria-hidden="true" className="hero-weave absolute inset-0 opacity-70" />
          <div aria-hidden="true" className="hero-aurora absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#2ea3b8]/25 blur-[110px]" />
          <div aria-hidden="true" className="hero-aurora-slow absolute -bottom-48 right-[-6rem] h-[480px] w-[480px] rounded-full bg-[#66d3b4]/20 blur-[120px]" />
          <div aria-hidden="true" className="absolute right-[18%] top-[-10%] h-[260px] w-[260px] rounded-full bg-[#d4af6e]/10 blur-[100px]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a9dbe5]/45 to-transparent" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_120%,rgba(2,12,18,0.55),transparent_60%)]" />

          <div className="container-page relative z-10 mx-auto grid min-h-[500px] max-w-[1320px] items-center gap-12 py-16 sm:py-20 lg:min-h-[calc(100svh-92px)] lg:grid-cols-[1fr_0.78fr] lg:items-stretch lg:gap-16 lg:px-[54px] lg:py-20">
            <div className="flex flex-col justify-center text-left">
              <span aria-hidden="true" className="hero-gold-rule block h-px w-14 sm:w-20" />
              <h1 className="mt-5 font-serif !text-[52px] font-bold leading-[0.92] tracking-[-0.045em] text-white sm:mt-6 sm:!text-[68px] lg:mt-8 lg:!text-[80px] xl:!text-[86px]">
                <span className="block">Our</span>
                <span className="hero-title-accent block">Initiatives</span>
              </h1>

              <p className="mt-5 max-w-[600px] font-serif text-[19px] font-medium italic leading-snug text-[#b9e3f5] sm:mt-6 sm:text-[26px] lg:mt-7 lg:text-[29px]">
                Compassion in Action. Change that Lasts.
              </p>

              <span aria-hidden="true" className="mt-6 block h-px w-full max-w-[420px] bg-gradient-to-r from-white/22 to-transparent lg:mt-7" />

              <p className="mt-6 max-w-[540px] font-sans text-[14px] leading-[1.8] text-white/[0.72] sm:text-[15px] lg:mt-7 lg:max-w-[600px] lg:text-[16px] lg:leading-[1.9]">
                We work across key areas of need to empower individuals, uplift communities, and build a
                better tomorrow. Every initiative is a step towards a more equitable, healthier, and
                hopeful society.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 lg:mt-11">
                <a
                  href="#our-programs"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 font-sans text-[12.5px] font-bold text-[#08303f] shadow-[0_18px_44px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e7fbf4] focus:outline-none focus:ring-2 focus:ring-white/60 min-[430px]:w-auto"
                >
                  Explore our programmes
                  <ArrowDownRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
                <button
                  type="button"
                  onClick={openDonation}
                  aria-label="Open donation form"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.07] px-6 font-sans text-[12.5px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.14] focus:outline-none focus:ring-2 focus:ring-white/40 min-[430px]:w-auto"
                >
                  <Heart className="h-4 w-4 text-[#8ddbc7]" strokeWidth={2} aria-hidden="true" />
                  Support a cause
                </button>
              </div>
            </div>

            {/* glass index of the six programmes */}
            <div className="relative flex flex-col overflow-hidden rounded-[26px] border border-white/15 bg-white/[0.055] p-5 shadow-[0_30px_80px_rgba(2,18,26,0.45)] backdrop-blur-xl sm:rounded-[30px] sm:p-7 lg:h-full lg:justify-between lg:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <span className="hero-sheen absolute -inset-y-8 left-0 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
              />

              <div className="relative flex items-baseline justify-between gap-4">
                <p className="font-sans text-[9px] font-bold uppercase tracking-[0.24em] text-[#9ddceb] sm:text-[9.5px] sm:tracking-[0.26em]">
                  Where we serve
                </p>
                <span className="shrink-0 font-serif text-[12px] italic text-white/35 sm:text-[13px]">
                  06 focus areas
                </span>
              </div>

              <ul className="relative mt-5 grid gap-2.5 min-[420px]:grid-cols-2 sm:gap-2 lg:mt-7 lg:flex-1 lg:auto-rows-fr lg:gap-2.5">
                {initiatives.map((initiative, index) => {
                  const InitiativeIcon = initiativeIcons[initiative.icon] ?? UsersRound;
                  const theme = initiativeThemes[index % initiativeThemes.length];
                  return (
                    <li key={initiative.title}>
                      <a
                        href={`#${initiativeAnchors[index]}`}
                        aria-label={`Jump to ${initiative.title}`}
                        className="group flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1] active:scale-[0.99] sm:gap-2.5 sm:px-3 sm:py-2.5 lg:px-4"
                      >
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 lg:h-9 lg:w-9"
                          style={{ backgroundColor: `${theme.accent}33`, color: theme.soft }}
                        >
                          <InitiativeIcon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 font-sans text-[12px] font-semibold leading-tight text-white/85 transition-colors duration-300 group-hover:text-white sm:text-[11.5px] lg:text-[12.5px]">
                          {initiative.title}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="relative mt-6 flex border-t border-white/12 pt-5 lg:mt-7 lg:pt-6">
                {initiativesStats.slice(0, 3).map((stat, index) => {
                  const StatIcon = statIcons[stat.icon] ?? Heart;
                  return (
                    <div
                      key={stat.label}
                      className={`flex-1 px-1.5 text-center ${index > 0 ? 'border-l border-white/10' : ''}`}
                    >
                      <StatIcon className="mx-auto h-4 w-4 text-[#8ddbc7]" strokeWidth={1.8} aria-hidden="true" />
                      <div className="mt-2.5 font-sans text-[18px] font-bold leading-none tracking-[-0.02em] text-white sm:text-[19px] lg:text-[21px]">
                        {stat.value}
                      </div>
                      <p className="mx-auto mt-2 max-w-[86px] font-sans text-[9px] uppercase leading-[1.35] tracking-[0.1em] text-white/50 sm:text-[9.5px]">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-[3px]">
            {initiativeThemes.map((theme) => (
              <span key={theme.dark} className="flex-1 opacity-80" style={{ backgroundColor: theme.accent }} />
            ))}
          </div>
        </section>

        {/* Premium editorial initiatives */}
        <section id="our-programs">
          {initiatives.map((initiative, index) => {
            const InitiativeIcon = initiativeIcons[initiative.icon] ?? UsersRound;
            const theme = initiativeThemes[index % initiativeThemes.length];
            const isReversed = index % 2 === 1;
            return (
              <article
                id={initiativeAnchors[index]}
                key={initiative.title}
                className={`initiative-editorial-item relative scroll-mt-[92px] overflow-hidden border-b border-[#173e4b]/[0.06] px-5 py-16 sm:px-8 sm:py-20 lg:py-24 ${isReversed ? 'initiative-reversed' : ''}`}
                style={{ background: theme.surface }}
              >
                <div
                  aria-hidden="true"
                  className={`absolute top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full opacity-[0.15] blur-3xl sm:h-[460px] sm:w-[460px] ${isReversed ? '-left-40' : '-right-40'}`}
                  style={{ backgroundColor: theme.accent }}
                />
                <div aria-hidden="true" className={`absolute top-10 h-24 w-24 rounded-full border-[18px] opacity-[0.07] sm:h-36 sm:w-36 sm:border-[24px] ${isReversed ? '-right-10' : '-left-10'}`} style={{ borderColor: theme.accent }} />

                <div data-reveal className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-20">
                  <div className={`initiative-visual group relative order-1 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="h-[310px] overflow-hidden rounded-[24px] border border-white/80 shadow-[0_30px_80px_rgba(23,62,75,0.17)] ring-1 ring-[#173e4b]/[0.05] sm:h-[410px] sm:rounded-[30px] lg:h-[500px] lg:rounded-[34px]">
                      <img
                        src={initiative.image}
                        alt={initiative.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />
                    </div>
                    <span
                      className={`initiative-badge absolute -bottom-5 flex h-14 w-14 items-center justify-center rounded-[18px] border border-white bg-white/95 shadow-[0_16px_38px_rgba(23,62,75,0.18)] backdrop-blur sm:h-16 sm:w-16 sm:rounded-[20px] ${isReversed ? 'right-5 sm:right-8' : 'left-5 sm:left-8'}`}
                      style={{ color: theme.dark, boxShadow: `0 16px 38px ${theme.accent}26` }}
                    >
                      <InitiativeIcon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                  </div>

                  <div className={`initiative-copy relative order-2 pt-3 lg:border-l lg:py-5 lg:pl-8 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`} style={{ borderColor: `${theme.accent}2b` }}>
                    <span aria-hidden="true" className="initiative-number pointer-events-none absolute -right-1 -top-8 font-serif text-[72px] font-bold leading-none opacity-[0.08] sm:text-[90px] lg:-top-16 lg:text-[116px]" style={{ color: theme.dark }}>
                      0{index + 1}
                    </span>
                    <p className="relative z-10 inline-flex rounded-full px-3 py-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px]" style={{ color: theme.dark, backgroundColor: theme.soft }}>
                      Our Initiatives / 0{index + 1}
                    </p>
                    <h3 className="relative z-10 mt-4 max-w-[520px] font-serif text-[31px] font-bold leading-[1.08] tracking-[-0.03em] text-[#173e4b] sm:text-[40px] lg:text-[46px]">
                      {initiative.title}
                    </h3>
                    <p className="relative z-10 mt-5 max-w-[510px] font-sans text-[14px] leading-[1.75] text-[#64777d] sm:text-[15px]">
                      {initiative.description}
                    </p>

                    <div className="relative z-10 mt-7 grid max-w-[500px] grid-cols-2 gap-3">
                      {initiative.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-[16px] border px-4 py-4 shadow-[0_12px_30px_rgba(23,62,75,0.06)] sm:px-5 sm:py-5"
                          style={{ background: `linear-gradient(135deg,${theme.soft},rgba(255,255,255,0.88))`, borderColor: `${theme.accent}1f` }}
                        >
                          <strong className="block font-sans text-[19px] font-extrabold leading-none sm:text-[22px]" style={{ color: theme.dark }}>{stat.value}</strong>
                          <span className="mt-2 block font-sans text-[9px] leading-tight text-[#66777b] sm:text-[10px]">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    <p
                      className="relative z-10 mt-7 max-w-[500px] border-l-2 pl-4 font-sans text-[12px] italic leading-[1.7] text-[#5f7478] sm:text-[13px]"
                      style={{ borderColor: `${theme.accent}80` }}
                    >
                      {initiative.supportingText}
                    </p>
                  </div>
                </div>

                {(index === 1 || index === 3) && (
                  <img
                    src={index === 1 ? '/assets/about/15_right_leaf_decor.png' : '/assets/about/14_left_leaf_decor.png'}
                    alt=""
                    aria-hidden="true"
                    className={`leaf-blend pointer-events-none absolute -bottom-10 w-[130px] opacity-[0.14] sm:w-[190px] lg:w-[240px] ${index === 1 ? '-right-10' : '-left-10'}`}
                  />
                )}
              </article>
            );
          })}
        </section>

        {/* Premium action banner */}
        <section id="initiative-actions" className="container-page py-14 md:py-20 lg:px-[54px]">
          <div className="relative grid min-h-[160px] items-center gap-7 overflow-hidden rounded-[26px] border border-white/80 bg-[linear-gradient(105deg,#dff8ef_0%,#eaf6fc_58%,#ffffff_100%)] px-7 py-10 shadow-[0_22px_65px_rgba(18,58,90,0.11)] ring-1 ring-line/50 sm:rounded-[30px] sm:px-10 md:grid-cols-[minmax(0,1fr)_auto] md:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-white/65 blur-2xl" />
            <img src="/assets/home/13_leaf_cta_left.png" alt="" aria-hidden="true" className="leaf-blend pointer-events-none absolute -bottom-8 -left-8 w-[145px] opacity-40 sm:w-[190px]" />
            <img src="/assets/home/14_leaf_cta_right.png" alt="" aria-hidden="true" className="leaf-blend pointer-events-none absolute -right-8 -top-8 w-[145px] opacity-35 sm:w-[190px]" />

            <div className="relative z-10 max-w-[720px] text-center md:pl-20 md:text-left">
              <h2 className="font-serif text-[27px] font-bold leading-tight text-[#267d72] sm:text-[34px]">
                Be the Reason for Someone&apos;s Smile
              </h2>
              <p className="mt-3 max-w-[660px] font-sans text-[13px] leading-[1.65] text-body sm:text-[14px]">
                Your support can bring hope and change lives. Together, we can build a kinder and stronger society.
              </p>
            </div>

            <div className="relative z-10 flex flex-col justify-center gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Button onClick={openDonation} aria-label="Open donation form" className="h-12 min-w-[158px] rounded-full px-5 text-[13px]">
                Donate Now
                <Heart className="h-4 w-4" strokeWidth={2} />
              </Button>
              <Button variant="outline" to="/get-involved" className="h-12 min-w-[205px] rounded-full border-softgreen bg-white/70 px-5 text-[13px] text-[#267d72] hover:bg-white">
                <UsersRound className="h-4 w-4" strokeWidth={1.8} />
                Become a Volunteer
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
