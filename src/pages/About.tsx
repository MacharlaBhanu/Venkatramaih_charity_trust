import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Eye,
  Flag,
  HandHeart,
  Handshake,
  Heart,
  Leaf,
  ShieldCheck,
  Star,
  Stethoscope,
  Target,
  UsersRound,
} from 'lucide-react';
import SEO from '../components/SEO';

const values: { title: string; text: string; icon: string; tone: 'blue' | 'green' }[] = [
  { title: 'Compassion', text: 'We care deeply and act selflessly.', icon: 'heart', tone: 'green' },
  { title: 'Integrity', text: 'We uphold honesty, transparency and trust.', icon: 'shield', tone: 'blue' },
  { title: 'Empowerment', text: 'We enable individuals to realize their potential.', icon: 'users', tone: 'blue' },
  { title: 'Sustainability', text: 'We build solutions that create lasting impact.', icon: 'leaf', tone: 'green' },
];

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

const aboutStats = [
  { value: '14+', label: 'Years of Service', icon: 'users' },
  { value: '75,000+', label: 'Lives Impacted', icon: 'heart' },
  { value: '180+', label: 'Projects Completed', icon: 'star' },
  { value: '250+', label: 'Volunteers', icon: 'group' },
  { value: '100+', label: 'Partner Organizations', icon: 'handshake' },
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

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  eye: Eye,
  flag: Flag,
  group: UsersRound,
  handHeart: HandHeart,
  handshake: Handshake,
  heart: Heart,
  leaf: Leaf,
  shield: ShieldCheck,
  star: Star,
  stethoscope: Stethoscope,
  target: Target,
  users: UsersRound,
};

function IconCircle({
  icon,
  className = '',
  size = 'md',
  tone = 'blue',
}: {
  icon: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'blue' | 'green';
}) {
  const Icon = iconMap[icon] ?? Heart;
  const sizeClass = {
    sm: 'h-11 w-11',
    md: 'h-14 w-14',
    lg: 'h-16 w-16',
  }[size];
  const toneClass =
    tone === 'green' ? 'from-seafoam to-softblue text-softgreen' : 'from-softblue to-seafoam text-ocean';

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-gradient-to-br shadow-soft ${toneClass} ${sizeClass} ${className}`}
    >
      <Icon className={size === 'lg' ? 'h-7 w-7' : 'h-6 w-6'} strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

function DecorativeTitle({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center gap-3 text-center">
      <Leaf className="h-4 w-4 rotate-[-18deg] text-softgreen" strokeWidth={1.9} aria-hidden="true" />
      <h2 className="font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-ocean md:text-[21px] lg:text-[22px]">
        {children}
      </h2>
      <Leaf className="h-4 w-4 rotate-[18deg] text-softgreen" strokeWidth={1.9} aria-hidden="true" />
    </div>
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Kanneganti Venkataramaiah Charitable Trust"
        description="Learn about the vision, mission, founder, values, trustees, and journey of Kanneganti Venkataramaiah Charitable Trust."
        path="/about"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />

      <div className="overflow-hidden bg-page">
        <style>
          {`
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
            .about-legacy-card,
            .about-founder-card {
              display: grid;
            }

            .about-legacy-photo-frame {
              height: 180px;
              overflow: hidden;
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

            .about-stats-strip {
              background: linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.96) 52%, rgba(247, 251, 255, 0.98) 100%);
              box-shadow: 0 18px 50px rgba(18, 58, 90, 0.08);
            }

            .about-stats-leaf {
              position: absolute;
              top: 50%;
              width: 160px;
              pointer-events: none;
              opacity: 0.2;
              mix-blend-mode: multiply;
            }

            .about-stats-leaf-left {
              left: -34px;
              transform: translateY(-50%);
              -webkit-mask-image: linear-gradient(to right, #000 0%, #000 48%, transparent 100%);
              mask-image: linear-gradient(to right, #000 0%, #000 48%, transparent 100%);
            }

            .about-stats-leaf-right {
              right: -34px;
              transform: translateY(-50%);
              -webkit-mask-image: linear-gradient(to left, #000 0%, #000 48%, transparent 100%);
              mask-image: linear-gradient(to left, #000 0%, #000 48%, transparent 100%);
            }

            @media (min-width: 768px) {
              .about-legacy-card {
                grid-template-columns: 1.35fr 0.75fr;
              }

              .about-legacy-photo-frame,
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

              .about-legacy-photo-frame {
                height: 196px;
                min-height: 0;
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
        <section className="relative min-h-[550px] overflow-hidden border-b border-line/70 bg-white sm:min-h-[640px] lg:min-h-[500px]">
          <div className="absolute inset-x-0 top-0 h-[255px] overflow-hidden sm:h-[340px] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[66%]">
            <img
              src="/assets/about/21_about_hero_learning.png"
              alt="Teacher helping schoolchildren learn together"
              loading="eager"
              className="h-full w-full object-cover object-[58%_center]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_32%,#FFFFFF_50%,#FFFFFF_100%)] lg:bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_38%,rgba(255,255,255,0.94)_43%,rgba(255,255,255,0.54)_50%,rgba(255,255,255,0.12)_57%,rgba(255,255,255,0)_64%)]"
          />
          <img
            src="/assets/about/14_left_leaf_decor.png"
            alt=""
            aria-hidden="true"
            className="leaf-blend pointer-events-none absolute bottom-8 left-0 z-[3] hidden w-[105px] opacity-30 lg:block"
          />

          <div className="container-page relative z-10 flex min-h-[550px] items-end pb-10 pt-[278px] sm:min-h-[640px] sm:pb-14 sm:pt-[360px] lg:min-h-[500px] lg:items-center lg:pb-12 lg:pt-12">
            <div className="mx-auto w-full max-w-[1280px]">
              <div className="max-w-[520px] animate-fade-in lg:w-[43%]">
                <h1 className="font-serif text-[34px] font-bold leading-[1] tracking-[-0.04em] text-heading sm:text-[46px] lg:text-[60px]">
                  About <span className="inline-block">Us</span>
                </h1>
                <p className="mt-3 font-serif text-[17px] font-medium leading-[1.2] text-ocean sm:text-[19px] lg:text-[22px]">
                  Compassion Today, Better Tomorrow
                </p>

                <div className="mt-4 flex max-w-[320px] items-center gap-3 text-sky">
                  <span className="h-px flex-1 bg-line" />
                  <Heart className="h-4 w-4 fill-sky/20" strokeWidth={1.8} aria-hidden="true" />
                  <span className="h-px flex-1 bg-line" />
                </div>

                <p className="mt-5 max-w-[465px] font-sans text-[13px] font-normal leading-[1.7] text-body md:text-[13.5px]">
                  The Kanneganti Venkataramaiah Charitable Trust is dedicated to uplifting
                  underserved communities through education, healthcare, empowerment, and social
                  welfare initiatives that create lasting change.
                </p>

                <a
                  href="#journey"
                  className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-ocean px-6 font-sans text-[13px] font-semibold leading-none tracking-normal text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky hover:shadow-glass focus:outline-none focus:ring-2 focus:ring-sky/40"
                >
                  Our Journey
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy + Vision + Mission, then Founder message + Core Values */}
        <section className="container-page pb-3 pt-5 md:pb-4 md:pt-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="about-card-grid gap-5">
              <article className="about-legacy-card group overflow-hidden rounded-[18px] border border-white/90 bg-white/95 shadow-card ring-1 ring-line/55 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass">
                <div className="p-5 md:p-6">
                  <h2 className="font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-heading md:text-[21px] lg:text-[22px]">
                    A Legacy of Compassion
                  </h2>
                  <p className="mt-3 max-w-[340px] font-sans text-[13px] font-normal leading-[1.6] text-body">
                    Founded on the timeless values of empathy, service, and integrity, our Trust
                    works relentlessly for a more equitable and compassionate society.
                  </p>
                  <div className="mt-7">
                    <p className="font-sans text-[12px] font-semibold leading-tight text-ocean">K. Venkataramaiah</p>
                    <p className="font-sans text-[11px] font-normal leading-tight text-muted">Founder</p>
                  </div>
                </div>
                <div className="about-legacy-photo-frame relative">
                  <img
                    src="/assets/about/03_legacy_sapling_photo.png"
                    alt="Hands holding a green plant sapling"
                    loading="lazy"
                    className="h-full w-full bg-section/40 object-contain object-center p-4 transition-transform duration-500 group-hover:scale-[1.03] md:p-3"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
                </div>
              </article>

              <article className="about-feature-card relative flex flex-col items-center justify-center overflow-hidden rounded-[18px] border border-white/90 px-7 py-8 text-center ring-1 ring-line/55 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass">
                <IconCircle icon="eye" size="lg" className="relative z-10 mx-auto bg-white/90 shadow-[0_16px_38px_rgba(18,58,90,0.10)]" />
                <h3 className="relative z-10 mt-5 font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-ocean md:text-[21px]">Our Vision</h3>
                <p className="relative z-10 mx-auto mt-3 max-w-[235px] font-sans text-[13px] font-normal leading-[1.6] text-body">
                  A just, inclusive, and empowered society where every individual has the
                  opportunity to live with dignity and hope.
                </p>
                <img
                  src="/assets/about/14_left_leaf_decor.png"
                  alt=""
                  aria-hidden="true"
                  className="leaf-blend pointer-events-none absolute -bottom-8 left-1/2 z-[1] w-52 -translate-x-1/2 opacity-[0.08]"
                />
              </article>

              <article className="about-feature-card relative flex flex-col items-center justify-center overflow-hidden rounded-[18px] border border-white/90 px-7 py-8 text-center ring-1 ring-line/55 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass">
                <IconCircle icon="target" size="lg" className="relative z-10 mx-auto bg-white/90 shadow-[0_16px_38px_rgba(18,58,90,0.10)]" />
                <h3 className="relative z-10 mt-5 font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-ocean md:text-[21px]">Our Mission</h3>
                <p className="relative z-10 mx-auto mt-3 max-w-[240px] font-sans text-[13px] font-normal leading-[1.6] text-body">
                  To create sustainable impact by delivering quality initiatives in education,
                  healthcare, empowerment, and social welfare.
                </p>
                <img
                  src="/assets/about/14_left_leaf_decor.png"
                  alt=""
                  aria-hidden="true"
                  className="leaf-blend pointer-events-none absolute -bottom-8 left-1/2 z-[1] w-52 -translate-x-1/2 opacity-[0.08]"
                />
              </article>
            </div>

            <div className="about-founder-row mt-5 gap-5">
              <article className="about-founder-card overflow-hidden rounded-[18px] border border-white/90 bg-white/95 shadow-card ring-1 ring-line/55">
                <div className="about-founder-photo-frame">
                  <img
                    src="/assets/about/04_founder_portrait.png"
                    alt="Portrait of founder K. Venkataramaiah"
                    loading="lazy"
                    className="h-full w-full bg-section/40 object-contain object-center p-1"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h2 className="font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-heading md:text-[21px] lg:text-[22px]">
                    Message from our Founder
                  </h2>
                  <p className="mt-4 font-sans text-[13px] font-normal italic leading-[1.65] text-body">
                    "Our journey began with a simple belief - that small acts of compassion can
                    spark extraordinary change. Every life we touch strengthens our commitment to
                    build a better, kinder, and more equitable tomorrow."
                  </p>
                  <div className="mt-5">
                    <p className="font-sans text-[12px] font-semibold leading-tight text-ocean">K. Venkataramaiah</p>
                    <p className="font-sans text-[11px] font-normal leading-tight text-muted">Founder &amp; Chairman</p>
                  </div>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[18px] border border-white/90 bg-gradient-to-br from-white via-white to-section/40 p-6 shadow-card ring-1 ring-line/55">
                <h2 className="text-center font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-ocean md:text-[21px] lg:text-[22px]">
                  Our Core Values
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-5 lg:grid-cols-4">
                  {values.map((value, index) => (
                    <div
                      key={value.title}
                      className={`text-center ${
                        index === 0
                          ? ''
                          : index === 2
                            ? 'lg:border-l lg:border-line/80 lg:pl-4'
                            : 'sm:border-l sm:border-line/80 lg:pl-4'
                      }`}
                    >
                      <IconCircle icon={value.icon} tone={value.tone} className="mx-auto" />
                      <h3 className="mt-4 font-sans text-[14px] font-bold leading-[1.2] text-ocean">{value.title}</h3>
                      <p className="mx-auto mt-2 max-w-[150px] font-sans text-[12px] font-normal leading-[1.4] text-body">
                        {value.text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Journey of Impact */}
        <section id="journey" className="container-page py-4 md:py-5">
          <div className="mx-auto max-w-[1280px]">
            <DecorativeTitle>Our Journey of Impact</DecorativeTitle>

            <div className="mt-7 hidden lg:block">
              <div className="relative grid grid-cols-6 gap-4">
                {timeline.map((item, index) => {
                  const TimelineIcon = iconMap[item.icon] ?? Leaf;
                  return (
                    <article key={item.year} className="relative text-center">
                      {index < timeline.length - 1 && (
                        <span className="about-timeline-link" aria-hidden="true" />
                      )}
                      <span
                        className={`relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-line shadow-soft ${index < 3 ? 'bg-softblue text-ocean' : 'bg-seafoam text-softgreen'}`}
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

            <div className="mt-8 grid gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 lg:hidden">
              {timeline.map((item, index) => {
                const TimelineIcon = iconMap[item.icon] ?? Leaf;
                return (
                  <article
                    key={item.year}
                    className="rounded-[16px] border border-white/90 bg-white/95 p-5 shadow-card ring-1 ring-line/55 min-[420px]:min-h-[150px]"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${index < 3 ? 'bg-softblue text-ocean' : 'bg-seafoam text-softgreen'}`}
                    >
                      <TimelineIcon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-sans text-[17px] font-bold leading-[1.1] tracking-[-0.02em] text-ocean">{item.year}</h3>
                    <p className="mt-2 font-sans text-[12px] font-normal leading-[1.45] text-body">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="container-page py-4 md:py-5">
          <div className="mx-auto max-w-[1280px]">
            <div className="about-stats-strip relative overflow-hidden rounded-[22px] border border-white/95 px-5 py-5 ring-1 ring-line/65 md:px-8">
              <img
                src="/assets/about/14_left_leaf_decor.png"
                alt=""
                aria-hidden="true"
                className="about-stats-leaf about-stats-leaf-left hidden md:block"
              />
              <img
                src="/assets/about/15_right_leaf_decor.png"
                alt=""
                aria-hidden="true"
                className="about-stats-leaf about-stats-leaf-right hidden md:block"
              />

              <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                {aboutStats.map((stat, index) => {
                  const StatIcon = iconMap[stat.icon] ?? Heart;
                  return (
                    <article
                      key={stat.label}
                      className={`mx-auto grid w-full max-w-[240px] grid-cols-[40px_minmax(0,1fr)] items-center gap-3 px-2 py-2 text-left sm:flex sm:max-w-none sm:justify-center sm:text-center sm:last:col-span-2 lg:border-l lg:border-line/80 lg:last:col-span-1 ${index === 0 ? 'lg:border-l-0' : ''}`}
                    >
                      <StatIcon className="h-8 w-8 shrink-0 text-ocean" strokeWidth={1.8} aria-hidden="true" />
                      <div className="min-w-0 text-left">
                        <div className="font-sans text-[22px] font-bold leading-none tracking-[-0.02em] text-ocean md:text-[25px] lg:text-[26px]">
                          {stat.value}
                        </div>
                        <p className="mt-1 font-sans text-[11px] font-normal leading-[1.25] text-body">{stat.label}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Trustees */}
        <section className="container-page pb-12 pt-2 md:pb-14 md:pt-3">
          <div className="mx-auto max-w-[1280px]">
            <DecorativeTitle>Our Trustees</DecorativeTitle>

            <div className="relative mt-6">
              <button
                type="button"
                aria-label="Previous trustees"
                className="absolute left-[-10px] top-1/2 z-10 hidden h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft transition-all hover:-translate-x-0.5 hover:shadow-card lg:flex"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next trustees"
                className="absolute right-[-10px] top-1/2 z-10 hidden h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft transition-all hover:translate-x-0.5 hover:shadow-card lg:flex"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
              </button>

              <div className="grid gap-4 min-[390px]:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-6 lg:px-2 xl:gap-6">
                {trustees.map((trustee) => (
                  <article
                    key={trustee.name}
                    className="group overflow-hidden rounded-[18px] border border-white/90 bg-white/95 text-center shadow-card ring-1 ring-line/55 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={trustee.img}
                        alt={`Portrait of ${trustee.name}`}
                        loading="lazy"
                        className="h-[210px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05] min-[390px]:h-[180px] sm:h-[150px] sm:object-center md:h-[160px] lg:h-[156px] xl:h-[170px]"
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
