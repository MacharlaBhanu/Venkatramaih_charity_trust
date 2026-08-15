import { useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  ChevronDown,
  BookOpen,
  Eye,
  Flag,
  HandHeart,
  Heart,
  Leaf,
  ShieldCheck,
  Stethoscope,
  Target,
  UsersRound,
} from 'lucide-react';
import SEO from '../components/SEO';

const timeline = [
  { year: '2010', text: 'The Trust was established with a vision to serve.', icon: 'flag' },
  { year: '2012', text: 'Launched education programs for underprivileged children.', icon: 'book' },
  { year: '2015', text: 'Expanded into healthcare and wellness initiatives.', icon: 'stethoscope' },
  { year: '2018', text: 'Empowerment programs for women and youth began.', icon: 'users' },
  { year: '2021', text: 'Strengthened community welfare and relief initiatives.', icon: 'handHeart' },
  {
    year: '2024+',
    text: 'Continuing our mission towards a brighter and compassionate future.',
    icon: 'leaf',
  },
];

const trustees = [
  { name: 'Rajesh Kanneganti', role: 'Trustee', img: '/assets/about/06_trustee_rajesh_kanneganti.png' },
  { name: 'Padma Srinivas', role: 'Trustee', img: '/assets/about/07_trustee_padma_srinivas.png' },
  {
    name: 'V. Suryanarayana',
    role: 'Trustee',
    img: '/assets/about/08_trustee_v_suryanarayana.png',
  },
  { name: 'Anita Reddy', role: 'Trustee', img: '/assets/about/09_trustee_anita_reddy.png' },
  { name: 'Dr. Mohan Kumar', role: 'Trustee', img: '/assets/about/10_trustee_dr_mohan_kumar.png' },
  { name: 'Lavanya K.', role: 'Trustee', img: '/assets/about/11_trustee_lavanya_k.png' },
];

const aboutCardTones = [
  'about-color-card-ocean',
  'about-color-card-teal',
  'about-color-card-slate',
  'about-color-card-rose',
];

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  eye: Eye,
  flag: Flag,
  group: UsersRound,
  handHeart: HandHeart,
  heart: Heart,
  leaf: Leaf,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  target: Target,
  users: UsersRound,
};

function DecorativeTitle({ children }: { children: string }) {
  return (
    <div data-reveal className="flex items-center justify-center gap-2.5 text-center sm:gap-3">
      <Leaf className="h-4 w-4 shrink-0 rotate-[-18deg] text-softgreen" strokeWidth={1.9} aria-hidden="true" />
      <h2 className="font-serif text-[18px] font-bold leading-[1.2] tracking-[-0.01em] text-ocean sm:text-[20px] md:text-[21px] lg:text-[22px]">
        {children}
      </h2>
      <Leaf className="h-4 w-4 shrink-0 rotate-[18deg] text-softgreen" strokeWidth={1.9} aria-hidden="true" />
    </div>
  );
}

export default function About() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="About Us | Kanneganti Venkatramaiah Charitable Trust"
        description="Learn about the vision, mission, founder, values, trustees, and journey of Kanneganti Venkatramaiah Charitable Trust."
        path="/about"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />

      <div className="overflow-hidden bg-page">
        <style>
          {`
            /* scroll reveal: one observer in About() toggles .is-in on [data-reveal] */
            [data-reveal] {
              opacity: 0;
              transform: translateY(26px);
              transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
            }

            [data-reveal].is-in {
              opacity: 1;
              transform: none;
            }

            [data-reveal].reveal-stagger {
              opacity: 1;
              transform: none;
            }

            .reveal-stagger > * {
              opacity: 0;
              transform: translateY(22px);
              transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
            }

            .reveal-stagger.is-in > * {
              opacity: 1;
              transform: none;
            }

            .reveal-stagger.is-in > *:nth-child(2) { transition-delay: 90ms; }
            .reveal-stagger.is-in > *:nth-child(3) { transition-delay: 180ms; }
            .reveal-stagger.is-in > *:nth-child(4) { transition-delay: 270ms; }
            .reveal-stagger.is-in > *:nth-child(5) { transition-delay: 360ms; }
            .reveal-stagger.is-in > *:nth-child(6) { transition-delay: 450ms; }

            @keyframes about-hero-zoom {
              from { transform: scale(1.12); }
              to { transform: scale(1); }
            }

            .about-hero-img {
              animation: about-hero-zoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both;
            }

            @keyframes about-cue {
              0%, 100% { transform: translateY(0); opacity: 0.55; }
              50% { transform: translateY(6px); opacity: 1; }
            }

            .about-cue {
              animation: about-cue 2.2s ease-in-out infinite;
            }

            @keyframes about-drift {
              0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
              50% { transform: translate3d(0, -18px, 0) scale(1.06); }
            }

            .about-drift {
              animation: about-drift 11s ease-in-out infinite;
            }

            .about-drift-slow {
              animation: about-drift 15s ease-in-out infinite reverse;
            }

            @media (prefers-reduced-motion: reduce) {
              [data-reveal],
              .reveal-stagger > * {
                opacity: 1 !important;
                transform: none !important;
                transition: none !important;
              }

              .about-cue,
              .about-drift,
              .about-drift-slow,
              .about-hero-img {
                animation: none !important;
              }
            }

            .about-feature-card {
              isolation: isolate;
              background:
                radial-gradient(circle at 50% 18%, rgba(221, 242, 255, 0.72), transparent 34%),
                linear-gradient(180deg, rgba(255, 255, 255, 0.99) 0%, rgba(255, 255, 255, 0.97) 56%, rgba(247, 251, 255, 0.96) 100%);
              box-shadow: 0 20px 58px rgba(18, 58, 90, 0.075);
            }

            .about-feature-card::before {
              content: "";
              position: absolute;
              inset: 10px;
              z-index: 0;
              border-radius: 14px;
              border: 1px solid rgba(255, 255, 255, 0.84);
              background:
                linear-gradient(180deg, rgba(255, 255, 255, 0.72), transparent 56%),
                linear-gradient(90deg, transparent 0%, rgba(223, 248, 239, 0.2) 50%, transparent 100%);
              pointer-events: none;
            }

            .about-feature-card::after {
              content: "";
              position: absolute;
              left: 50%;
              top: 0;
              z-index: 0;
              width: 58%;
              height: 3px;
              border-radius: 999px;
              transform: translateX(-50%);
              background: linear-gradient(90deg, transparent, rgba(91, 191, 239, 0.58), rgba(107, 205, 182, 0.54), transparent);
              pointer-events: none;
            }

            .about-card-grid,
            .about-founder-row,
            .about-founder-card {
              display: grid;
            }

            .about-founder-photo-frame {
              height: 178px;
              overflow: hidden;
            }

            .about-timeline-link {
              position: absolute;
              left: calc(50% + 28px);
              right: calc(-50% + 28px);
              top: 28px;
              z-index: 0;
              height: 1.5px;
              background: linear-gradient(90deg, rgba(91, 191, 239, 0.36), rgba(216, 237, 247, 0.95));
            }

            .about-color-card {
              border-color: rgba(255, 255, 255, 0.34) !important;
              box-shadow: 0 18px 44px rgba(18, 58, 90, 0.18) !important;
            }

            .about-color-card-ocean {
              background: linear-gradient(135deg, #247E9E 0%, #1689C7 100%) !important;
            }

            .about-color-card-teal {
              background: linear-gradient(135deg, #34796F 0%, #45A995 100%) !important;
            }

            .about-color-card-slate {
              background: linear-gradient(135deg, #405F82 0%, #536C91 100%) !important;
            }

            .about-color-card-rose {
              background: linear-gradient(135deg, #7D5968 0%, #976A72 100%) !important;
            }

            .about-color-card h2,
            .about-color-card h3,
            .about-color-card p {
              color: #FFFFFF !important;
            }

            .about-color-card p {
              color: rgba(255, 255, 255, 0.82) !important;
            }

            .about-feature-card.about-color-card::before {
              border-color: rgba(255, 255, 255, 0.24);
              background:
                linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent 58%),
                linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
            }

            .about-feature-card.about-color-card::after {
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent);
            }

            @media (min-width: 768px) {
              .about-founder-photo-frame {
                height: auto;
                min-height: 180px;
              }

              .about-founder-card {
                grid-template-columns: 0.88fr 1.38fr;
              }
            }

            @media (min-width: 1024px) {
              .about-card-grid {
                grid-template-columns: 1.36fr 0.82fr 0.82fr;
              }

              .about-card-grid > article {
                min-height: 196px;
              }

              .about-founder-row {
                grid-template-columns: 1.08fr 1.32fr;
              }

              .about-founder-row > article {
                min-height: 210px;
              }

              .about-founder-photo-frame {
                height: 210px;
                min-height: 0;
              }
            }
          `}
        </style>

        {/* Hero */}
        {/* Mobile height matches the Gallery / Stories / Get Involved / Contact heroes: ~204px fixed spacing + ~126vw of width-scaled content */}
        <section className="relative min-h-[calc(204px+126vw)] overflow-hidden bg-[#092a37] sm:min-h-[720px] lg:min-h-[calc(100svh-92px)]">
          <picture className="absolute inset-0">
            <source media="(max-width: 767px)" srcSet="/assets/about/about-founder-legacy-hero-mobile-v2.jpg" />
            <img
              src="/assets/about/about-founder-legacy-hero-v2.jpg"
              alt="Indian schoolchildren and community members walking together in Andhra Pradesh"
              loading="eager"
              fetchPriority="high"
              className="about-hero-img h-full w-full object-cover object-center"
            />
          </picture>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,29,39,0.05)_10%,rgba(5,29,39,0.32)_42%,rgba(5,29,39,0.97)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,29,39,0.98)_0%,rgba(5,29,39,0.91)_33%,rgba(5,29,39,0.46)_55%,rgba(5,29,39,0.04)_82%)]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,213,149,0.16),transparent_30%)]" />

          <div className="container-page relative z-10 flex min-h-[calc(204px+126vw)] items-end pb-20 pt-28 sm:min-h-[720px] sm:pb-24 lg:min-h-[calc(100svh-92px)] lg:items-center lg:py-24">
            <div className="mx-auto w-full max-w-[1280px]">
              {/* ponytail: mobile type is vw-based off a 430px baseline, so every phone gets the same proportions and line breaks */}
              <div className="max-w-[650px] animate-fade-in lg:w-[54%]">
                <h1 className="max-w-[620px] font-serif text-[clamp(30px,9.3vw,46px)] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-[56px] lg:text-[72px]">
                  A life of kindness. <span className="text-[#8ddbc7]">A legacy that continues.</span>
                </h1>
                <p className="mt-6 max-w-[575px] font-sans text-[clamp(11.5px,3.26vw,16px)] leading-[1.75] text-white/80 sm:text-[16px]">
                  The Kanneganti Venkatramaiah Charitable Trust carries forward one man&apos;s
                  lifelong belief that every sincere act of service can change a life.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#founder-legacy"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-sans text-[13px] font-bold text-[#0b3542] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e4faf3] focus:outline-none focus:ring-2 focus:ring-white/60 active:translate-y-0"
                  >
                    Discover his legacy
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </a>
                  <span className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-white/60">
                    Compassion in action
                  </span>
                </div>

                {/* mobile stand-in for the desktop values strip */}
                <div className="mt-9 grid grid-cols-2 gap-2 md:hidden">
                  {['Compassion', 'Humility', 'Generosity', 'Service'].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-md"
                    >
                      <span className="font-serif text-[12px] italic text-[#8ddbc7]">0{index + 1}</span>
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 hidden border-t border-white/15 bg-[#082b38]/50 backdrop-blur-lg md:block">
            <div className="container-page">
              <div className="mx-auto grid max-w-[1280px] grid-cols-4 divide-x divide-white/15 py-4">
                {['Compassion', 'Humility', 'Generosity', 'Service'].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-3 px-4 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="font-serif text-[12px] italic text-[#8ddbc7]">0{index + 1}</span>
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#founder-legacy"
            aria-label="Scroll to our story"
            className="about-cue absolute bottom-5 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md md:hidden"
          >
            <ChevronDown className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </a>
        </section>

        {/* Vision + Mission */}
        <section id="founder-legacy" className="bg-[#f4f6f2] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div data-reveal className="mb-10 max-w-[760px] md:mb-14">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#348b77]">The foundation of our work</p>
              <h2 className="mt-4 font-serif text-[30px] font-bold leading-[1.08] tracking-[-0.035em] text-[#0b3542] sm:text-[44px] lg:text-[52px]">
                Built on values that were lived, not merely spoken.
              </h2>
            </div>

            <div data-reveal className="reveal-stagger grid gap-5 md:grid-cols-2">
              <article className="group relative min-h-[300px] overflow-hidden rounded-[24px] border border-white/20 bg-[linear-gradient(138deg,#103f59_0%,#175d73_58%,#247e8d_100%)] p-7 shadow-[0_28px_70px_rgba(16,63,89,0.2)] ring-1 ring-[#103f59]/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_84px_rgba(16,63,89,0.28)] sm:rounded-[30px] sm:p-10 lg:min-h-[350px] lg:p-12">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8ed8f8] via-[#79d3c1] to-transparent" />
                <div aria-hidden="true" className="about-drift absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8ed8f8]/20 blur-3xl" />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.06)_0%,transparent_34%,rgba(142,216,248,0.07)_100%)]" />
                <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-[#8ed8f8]/65 to-transparent" />
                <div className="relative z-10 flex items-start justify-between gap-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#a9e5f2] shadow-[0_12px_28px_rgba(4,31,47,0.15)] backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                    <Eye className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="font-serif text-[38px] italic text-white/20">01</span>
                </div>
                <h3 className="relative z-10 mt-9 font-serif text-[30px] font-bold tracking-[-0.025em] text-white sm:text-[34px]">Our Vision</h3>
                <p className="relative z-10 mt-4 max-w-[500px] font-sans text-[13px] leading-[1.8] text-white/75 sm:text-[15px]">
                  Our values are rooted in compassion, generosity, humility, integrity, and selfless service. We believe in treating every individual with dignity and creating equal opportunities for those in need. Guided by these values, we work together to build stronger and more caring communities.
                </p>
                <div aria-hidden="true" className="relative z-10 mt-8 h-px w-24 bg-gradient-to-r from-[#8ed8f8] to-transparent" />
              </article>

              <article className="group relative min-h-[300px] overflow-hidden rounded-[24px] border border-white/20 bg-[linear-gradient(138deg,#554452_0%,#745463_58%,#936b73_100%)] p-7 shadow-[0_28px_70px_rgba(85,68,82,0.2)] ring-1 ring-[#554452]/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_84px_rgba(85,68,82,0.28)] sm:rounded-[30px] sm:p-10 lg:min-h-[350px] lg:p-12">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#efb09e] via-[#dba5bd] to-transparent" />
                <div aria-hidden="true" className="about-drift-slow absolute -bottom-20 -right-14 h-72 w-72 rounded-full bg-[#efb09e]/20 blur-3xl" />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.055)_0%,transparent_36%,rgba(239,176,158,0.07)_100%)]" />
                <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-[#efb09e]/65 to-transparent" />
                <div className="relative z-10 flex items-start justify-between gap-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#ffd0c2] shadow-[0_12px_28px_rgba(52,33,45,0.16)] backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Target className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="font-serif text-[38px] italic text-white/20">02</span>
                </div>
                <h3 className="relative z-10 mt-9 font-serif text-[30px] font-bold tracking-[-0.025em] text-white sm:text-[34px]">Our Mission</h3>
                <p className="relative z-10 mt-4 max-w-[510px] font-sans text-[13px] leading-[1.8] text-white/75 sm:text-[15px]">
                  Our mission is to carry forward the legacy of Sri Kanneganti Venkatramaiah through compassion, service, and meaningful action. We strive to support education, provide food and essential assistance, improve school infrastructure, and strengthen communities. We believe every act of kindness can create a lasting positive impact.
                </p>
                <div aria-hidden="true" className="relative z-10 mt-8 h-px w-24 bg-gradient-to-r from-[#efb09e] to-transparent" />
              </article>
            </div>
          </div>
        </section>

        {/* Founder story + Core Values */}
        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <article
              data-reveal
              className="group overflow-hidden rounded-[24px] border border-[#dfe9e5] bg-[#fbfcfa] shadow-[0_30px_90px_rgba(11,53,66,0.09)] sm:rounded-[34px]"
            >
              <div className="grid lg:grid-cols-[0.88fr_1.25fr]">
                <div className="relative min-h-[360px] overflow-hidden bg-[#dcefe9] sm:min-h-[540px] lg:min-h-full">
                  <img
                    src="/assets/about/04_founder_portrait.png"
                    alt="Portrait of founder Sri Kanneganti Venkatramaiah"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(5,38,47,0.88)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                    <p className="font-serif text-[24px] font-bold leading-tight">Sri Kanneganti Venkatramaiah</p>
                    <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9be3d0]">Founder · Emani, Andhra Pradesh</p>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-14 xl:p-16">
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#348b77]">The man behind the mission</p>
                  <h2 className="mt-4 font-serif text-[28px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0b3542] sm:text-[44px]">
                    A life devoted to helping others.
                  </h2>

                  <div className="mt-8 space-y-5 font-sans text-[13px] leading-[1.8] text-[#526c74] sm:text-[14px]">
                    <p>
                      Sri Kanneganti Venkatramaiah, from Emani, Andhra Pradesh, was a kind-hearted and compassionate person who dedicated much of his life to helping people in need.
                    </p>
                    <p>
                      He was deeply respected in his community for his willingness to support others, regardless of their circumstances. Whether it was helping a family facing difficulties, supporting children and students, or extending a helping hand to those in need, he believed that even a small act of kindness could make a meaningful difference in someone&apos;s life.
                    </p>
                    <p>
                      His life was guided by values of compassion, humility, generosity, and service to others. He never sought recognition for the help he offered; his satisfaction came from being able to make a positive difference in the lives of others.
                    </p>
                    <p>
                      The Kanneganti Venkatramaiah Charitable Trust was established in his name to carry forward these values and preserve his legacy of service. Through initiatives supporting education, students, underprivileged families, and community welfare, the Trust strives to continue the spirit of kindness and service that defined his life.
                    </p>
                  </div>

                  <blockquote className="mt-9 border-l-2 border-[#5bbda4] pl-5 font-serif text-[17px] italic leading-[1.55] text-[#0b3542] sm:text-[23px] sm:leading-[1.5]">
                    His legacy reminds us that true greatness lies not in what we achieve for ourselves, but in the lives we touch through our kindness and service.
                  </blockquote>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* Journey of Impact */}
        <section id="journey" className="container-page py-4 md:py-5">
          <div className="mx-auto max-w-[1280px]">
            <DecorativeTitle>Our Journey of Impact</DecorativeTitle>

            <div className="mt-7 hidden lg:block">
              <div data-reveal className="reveal-stagger relative grid grid-cols-6 gap-4">
                {timeline.map((item, index) => {
                  const TimelineIcon = iconMap[item.icon] ?? Leaf;
                  return (
                    <article key={item.year} className="group relative text-center">
                      {index < timeline.length - 1 && (
                        <span className="about-timeline-link" aria-hidden="true" />
                      )}
                      <span
                        className={`relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-line shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-card ${index < 3 ? 'bg-softblue text-ocean' : 'bg-seafoam text-softgreen'}`}
                      >
                        <TimelineIcon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <h3 className="mt-3 font-sans text-[17px] font-bold leading-[1.1] tracking-[-0.02em] text-ocean lg:text-[18px]">
                        {item.year}
                      </h3>
                      <p className="mx-auto mt-1.5 max-w-[145px] font-sans text-[11px] font-normal leading-[1.45] text-body">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div data-reveal className="reveal-stagger mt-8 grid gap-3.5 min-[420px]:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:hidden">
              {timeline.map((item, index) => {
                const TimelineIcon = iconMap[item.icon] ?? Leaf;
                return (
                  <article
                    key={item.year}
                    className={`about-color-card ${aboutCardTones[index % aboutCardTones.length]} group rounded-[16px] border border-white/90 bg-white/95 p-4 shadow-card ring-1 ring-line/55 transition-all duration-500 hover:-translate-y-1 hover:shadow-glass active:scale-[0.99] min-[420px]:min-h-[150px] sm:p-5`}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 sm:h-12 sm:w-12 ${index < 3 ? 'bg-softblue text-ocean' : 'bg-seafoam text-softgreen'}`}
                    >
                      <TimelineIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="mt-3.5 font-sans text-[17px] font-bold leading-[1.1] tracking-[-0.02em] text-ocean sm:mt-4">{item.year}</h3>
                    <p className="mt-2 font-sans text-[12px] font-normal leading-[1.45] text-body">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trustees */}
        <section className="container-page pb-12 pt-2 md:pb-14 md:pt-3">
          <div className="mx-auto max-w-[1280px]">
            <DecorativeTitle>Our Trustees</DecorativeTitle>

            <div className="relative mt-6">
              <div
                data-reveal
                className="reveal-stagger grid gap-3.5 min-[390px]:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-6 lg:px-2 xl:gap-6"
              >
                {trustees.map((trustee, index) => (
                  <article
                    key={trustee.name}
                    className={`about-color-card ${aboutCardTones[index % aboutCardTones.length]} group overflow-hidden rounded-[18px] border border-white/90 bg-white/95 text-center shadow-card ring-1 ring-line/55 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glass active:scale-[0.99]`}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={trustee.img}
                        alt={`Portrait of ${trustee.name}`}
                        loading="lazy"
                        className="h-[210px] w-full object-cover object-top transition-transform duration-[700ms] ease-out group-hover:scale-[1.07] min-[390px]:h-[180px] sm:h-[150px] sm:object-center md:h-[160px] lg:h-[156px] xl:h-[170px]"
                      />
                    </div>
                    <div className="px-3.5 pb-4 pt-3.5">
                      <h3 className="font-serif text-[13px] font-bold leading-[1.2] tracking-[-0.01em] text-heading">
                        {trustee.name}
                      </h3>
                      <p className="mt-1 font-sans text-[11px] font-normal leading-tight text-body">{trustee.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
