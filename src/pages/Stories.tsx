import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  GraduationCap,
  HandHeart,
  Heart,
  HeartPulse,
  Landmark,
  Play,
  Quote,
  School,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import TransformationStoryCard from '../components/TransformationStoryCard';
import { useDonation } from '../context/DonationContext';
import {
  beforeAfter,
  featuredStory,
  gratitudeQuotes,
  impactStats,
  journeySteps,
  transformationStories,
} from '../data/storiesData';

const storyIcons: Record<string, LucideIcon> = {
  award: Award,
  graduation: GraduationCap,
  handHeart: HandHeart,
  health: HeartPulse,
  heart: Heart,
  landmark: Landmark,
  school: School,
  sparkles: Sparkles,
  users: UsersRound,
};

function StoryIcon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  const Icon = storyIcons[name] ?? Heart;
  return <Icon className={className} strokeWidth={1.8} aria-hidden="true" />;
}

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="px-2 text-center">
      <h2 className="font-serif text-[23px] font-bold leading-tight text-heading md:text-[24px]">{children}</h2>
      <div className="mt-2 flex items-center justify-center gap-1.5" aria-hidden="true">
        <span className="h-px w-7 bg-line" />
        <Sparkles className="h-3.5 w-3.5 text-sky" strokeWidth={1.8} />
        <span className="h-px w-7 bg-line" />
      </div>
    </div>
  );
}

export default function Stories() {
  const { openDonation } = useDonation();

  return (
    <>
      <SEO
        title="Stories of Change | Kanneganti Venkataramaiah Charitable Trust"
        description="Read inspiring stories of education, healthcare, empowerment, and community transformation made possible by Kanneganti Venkataramaiah Charitable Trust."
        path="/stories"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Stories', path: '/stories' },
        ]}
      />

      <div className="stories-page overflow-hidden bg-page">
        <style>
          {`
            .stories-content-shell {
              width: 100%;
              max-width: 1360px;
              margin-inline: auto;
              padding-inline: 20px;
            }

            .stories-section-shell {
              width: 100%;
              max-width: 1240px;
              margin-inline: auto;
              padding-inline: 20px;
            }

            .stories-photo {
              image-rendering: auto;
              backface-visibility: hidden;
              transform: translateZ(0);
            }

            .stories-journey-connector {
              position: absolute;
              left: 12.5%;
              right: 12.5%;
              top: 27px;
              border-top: 1px dashed rgba(22, 137, 199, .38);
            }

            @media (min-width: 640px) {
              .stories-content-shell,
              .stories-section-shell { padding-inline: 32px; }
            }

            @media (min-width: 1024px) {
              .stories-content-shell,
              .stories-section-shell { padding-inline: 48px; }
            }

            @media (min-width: 1280px) {
              .stories-content-shell,
              .stories-section-shell { padding-inline: 64px; }
            }

            @media (max-width: 767px) {
              .stories-journey-connector {
                left: 27px;
                right: auto;
                top: 28px;
                bottom: 28px;
                width: 1px;
                border-left: 1px dashed rgba(22, 137, 199, .38);
                border-top: 0;
              }
            }
          `}
        </style>

        {/* Hero */}
        <section className="relative min-h-[535px] overflow-hidden border-b border-line bg-white sm:min-h-[620px] md:min-h-[330px]">
          <div className="absolute inset-x-0 top-0 h-[250px] overflow-hidden sm:h-[320px] md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[67%]">
            <img
              src="/assets/stories/04_story_healthcare_access_clear.png"
              alt="A schoolgirl concentrating on her studies in a classroom"
              loading="eager"
              decoding="async"
              className="stories-photo h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.04)_32%,#FFFFFF_49%,#F7FBFF_100%)] md:bg-[linear-gradient(90deg,#F7FBFF_0%,#F7FBFF_35%,rgba(247,251,255,0.94)_40%,rgba(247,251,255,0.48)_49%,rgba(247,251,255,0.08)_58%,rgba(247,251,255,0)_66%)]"
          />
          <img
            src="/assets/gallery/18_cta_leaf_style_left.png"
            alt=""
            aria-hidden="true"
            className="leaf-blend pointer-events-none absolute -bottom-16 -left-5 z-[2] h-[250px] w-auto opacity-40"
          />

          <div className="stories-content-shell relative z-10 flex min-h-[535px] items-end pb-10 pt-[272px] sm:min-h-[620px] sm:pb-14 sm:pt-[340px] md:min-h-[330px] md:items-center md:pb-8 md:pt-8">
            <div className="relative z-10 max-w-[600px] md:w-[48%]">
              <h1 className="max-w-[590px] font-serif text-[38px] font-bold leading-[1.02] tracking-[-0.03em] text-heading sm:text-[46px] lg:text-[58px] xl:text-[62px]">
                Stories of{' '}
                <span className="bg-gradient-to-r from-ocean to-sky bg-clip-text text-transparent">Change</span>
              </h1>
              <div className="mt-4 flex items-center gap-2 text-sky" aria-hidden="true">
                <span className="h-px w-12 bg-sky/70" />
                <Sparkles className="h-4 w-4" strokeWidth={1.8} />
              </div>
              <p className="mt-4 text-[17px] font-semibold text-heading md:text-[18px]">Real stories. Real impact.</p>
              <p className="mt-2 max-w-[480px] text-[14px] leading-[1.7] text-body">
                Every life touched creates a ripple of hope. Discover how your support is transforming lives and building brighter tomorrows across communities.
              </p>
            </div>

          </div>
        </section>

        {/* Featured story */}
        <section id="featured-story" className="stories-section-shell relative z-20 -mt-5 pb-4 md:-mt-6">
          <article className="group grid overflow-hidden rounded-[16px] border border-line bg-white shadow-[0_16px_40px_rgba(18,58,90,0.10)] transition-shadow duration-500 hover:shadow-[0_24px_56px_rgba(18,58,90,0.16)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.18fr)] lg:min-h-[236px] lg:grid-cols-[36%_42%_22%]">
            <div className="flex flex-col justify-center p-6 lg:p-[26px]">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-section px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.05em] text-ocean">
                <Sparkles className="h-3 w-3" strokeWidth={1.8} />
                {featuredStory.badge}
              </span>
              <h2 className="mt-3 font-serif text-[26px] font-bold leading-tight text-heading">{featuredStory.title}</h2>
              <p className="mt-0.5 text-[15px] font-semibold text-ocean">{featuredStory.subtitle}</p>
              <p className="mt-3 text-[12px] leading-[1.55] text-body">{featuredStory.text}</p>
              <div className="mt-[18px] flex flex-wrap gap-3">
                <a href="#more-stories" className="inline-flex h-10 items-center justify-center rounded-[8px] bg-ocean px-4 text-[12px] font-semibold text-white shadow-soft transition hover:bg-sky lg:h-[38px]">
                  Read Full Story
                </a>
                <button type="button" className="inline-flex h-10 items-center justify-center gap-2 rounded-[8px] border border-softgreen bg-white px-4 text-[12px] font-semibold text-[#267D72] transition hover:bg-seafoam lg:h-[38px]">
                  <Play className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Watch Video
                </button>
              </div>
            </div>

            <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
              <img
                src={featuredStory.image}
                alt="Ravi smiling in his classroom"
                loading="lazy"
                decoding="async"
                className="stories-photo h-full w-full object-cover object-center transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-heading/15 via-transparent to-transparent" aria-hidden="true" />
            </div>

            <div className="grid gap-4 border-t border-line bg-page p-5 sm:grid-cols-3 md:col-span-2 lg:col-span-1 lg:flex lg:flex-col lg:justify-center lg:gap-5 lg:border-l lg:border-t-0 lg:p-6">
              {featuredStory.milestones.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full ${item.tone === 'green' ? 'bg-seafoam text-softgreen' : 'bg-softblue text-ocean'}`}>
                    <StoryIcon name={item.icon} className="h-[17px] w-[17px]" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold text-muted">{item.label}</span>
                    <strong className="mt-0.5 block text-[12px] font-semibold leading-snug text-heading">{item.value}</strong>
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* Transformation stories */}
        <section id="more-stories" className="stories-section-shell pb-6 pt-2">
          <SectionHeading>More Stories of Transformation</SectionHeading>
          <div className="relative mt-5">
            <button type="button" aria-label="Previous stories" className="absolute -left-4 top-1/2 z-10 hidden h-8 w-8 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft xl:flex">
              <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {transformationStories.map((story) => (
                <TransformationStoryCard key={story.title} {...story} />
              ))}
            </div>
            <button type="button" aria-label="Next stories" className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft xl:flex">
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
        </section>

        {/* Voices of gratitude */}
        <section className="relative overflow-hidden border-y border-line bg-gradient-to-b from-page to-section">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[240px] bg-[radial-gradient(ellipse_at_left,rgba(184,235,220,0.38)_0%,rgba(223,248,239,0.14)_55%,transparent_78%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[240px] bg-[radial-gradient(ellipse_at_right,rgba(184,235,220,0.3)_0%,transparent_74%)]" aria-hidden="true" />
          <img src="/assets/gallery/cta-leaf-left-transparent.png" alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-11 -left-7 w-[132px] opacity-30 sm:w-[150px]" />
          <img src="/assets/gallery/cta-leaf-right-transparent.png" alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-11 -right-7 w-[132px] opacity-30 sm:w-[150px]" />
          <div className="stories-section-shell relative z-10 py-4">
            <SectionHeading>Voices of Gratitude</SectionHeading>
            <div className="mt-2 grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
              {gratitudeQuotes.map((item) => (
                <blockquote key={item.name} className="relative flex min-h-[100px] flex-col px-4 py-4 sm:px-7 md:py-2 lg:px-[34px]">
                  <Quote className="absolute left-3 top-3 h-6 w-6 fill-sky/15 text-sky/70" strokeWidth={1.6} aria-hidden="true" />
                  <p className="flex-1 pl-9 text-[13px] leading-[1.6] text-body md:text-[12px]">“{item.quote}”</p>
                  <footer className="mt-3 pl-9 text-[11px] font-semibold text-heading">
                    — {item.name}{item.role && `, ${item.role}`}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="stories-section-shell py-3">
          <SectionHeading>Our Impact So Far</SectionHeading>
          <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-3 lg:grid-cols-4 lg:divide-x lg:divide-line">
            {impactStats.map((stat) => (
              <div key={stat.label} className="flex min-w-0 items-center justify-start gap-2 px-2 py-2 sm:justify-center sm:gap-3 sm:px-5">
                <span className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full ${stat.tone === 'green' ? 'bg-seafoam text-softgreen' : 'bg-softblue text-ocean'}`}>
                  <StoryIcon name={stat.icon} className="h-[22px] w-[22px]" />
                </span>
                <div>
                  <strong className="block bg-gradient-to-br from-ocean to-sky bg-clip-text font-serif text-[25px] font-bold leading-none text-transparent">{stat.value}</strong>
                  <span className="mt-1 block text-[11px] text-body">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Before/after and journey */}
        <section className="stories-section-shell grid gap-[18px] pb-5 lg:grid-cols-[1fr_1.1fr]">
          <article className="rounded-[14px] border border-line bg-white p-[18px] shadow-card">
            <h2 className="text-center font-serif text-[19px] font-bold text-heading">Before &amp; After</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-[1.65fr_.75fr] sm:items-center">
              <div className="relative grid grid-cols-2 overflow-hidden rounded-[9px]">
                <figure className="relative h-[150px] border-r border-white">
                  <img src={beforeAfter.before} alt="Arjun before receiving support" loading="lazy" decoding="async" className="stories-photo h-full w-full object-cover object-center" />
                  <figcaption className="absolute bottom-2 left-2 rounded bg-heading/75 px-2 py-1 text-[10px] font-semibold text-white">Before</figcaption>
                </figure>
                <figure className="relative h-[150px]">
                  <img src={beforeAfter.after} alt="Arjun after receiving education support" loading="lazy" decoding="async" className="stories-photo h-full w-full object-cover object-center" />
                  <figcaption className="absolute bottom-2 right-2 rounded bg-white/90 px-2 py-1 text-[10px] font-semibold text-ocean shadow-soft">After</figcaption>
                </figure>
                <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft">
                  <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </span>
              </div>
              <div>
                <p className="text-[12px] leading-[1.55] text-body sm:text-[11px]">{beforeAfter.text}</p>
                <a href="#more-stories" className="mt-3 inline-flex h-10 items-center justify-center rounded-[7px] bg-ocean px-3 text-[11px] font-semibold text-white transition hover:bg-sky lg:h-9">
                  View More Stories
                </a>
              </div>
            </div>
          </article>

          <article className="rounded-[14px] border border-line bg-white p-5 shadow-card">
            <h2 className="text-center font-serif text-[19px] font-bold text-heading">Journey of Change</h2>
            <div className="relative mt-5 grid gap-5 md:grid-cols-4 md:gap-3">
              <span className="stories-journey-connector" aria-hidden="true" />
              {journeySteps.map((step) => (
                <div key={step.title} className="relative z-10 flex items-start gap-4 md:block md:text-center">
                  <span className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-line bg-white shadow-soft ${step.tone === 'green' ? 'text-softgreen' : 'text-ocean'}`}>
                    <StoryIcon name={step.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <div className="pt-1 md:pt-0">
                    <h3 className="mt-0 text-[12px] font-bold leading-tight text-heading md:mt-3">{step.title}</h3>
                    <p className="mt-1 text-[12px] leading-[1.35] text-body md:text-[10px]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* CTA */}
        <section className="stories-section-shell pb-5">
          <div className="relative flex min-h-[118px] flex-col items-center justify-center overflow-hidden rounded-[16px] border border-[#B9E2D9] bg-[linear-gradient(90deg,#EAF9F4_0%,#F7FCFA_19%,#FFFFFF_50%,#F7FCFA_81%,#EAF9F4_100%)] px-5 py-5 text-center shadow-[0_12px_34px_rgba(18,58,90,0.06)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[260px] bg-[radial-gradient(ellipse_at_left,rgba(184,235,220,0.52)_0%,rgba(223,248,239,0.2)_55%,transparent_78%)]" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[230px] bg-[radial-gradient(ellipse_at_right,rgba(223,248,239,0.42)_0%,transparent_72%)]" aria-hidden="true" />
            <img src="/assets/gallery/cta-leaf-left-transparent.png" alt="" aria-hidden="true" className="pointer-events-none absolute bottom-[-5px] left-0 w-[128px] opacity-75 md:w-[154px]" />
            <img src="/assets/gallery/cta-leaf-right-transparent.png" alt="" aria-hidden="true" className="pointer-events-none absolute bottom-[-4px] right-0 w-[132px] opacity-70 md:w-[158px]" />
            <div className="relative z-10">
              <h2 className="font-serif text-[24px] font-bold leading-tight text-[#267D72] md:text-[26px]">Be the Reason for Someone’s Change</h2>
              <p className="mt-1 text-[12px] leading-relaxed text-body sm:text-[13px]">Your support can bring hope and change lives. Together, we can build a kinder and stronger society.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-[14px]">
                <Button onClick={openDonation} className="h-10 w-[130px] rounded-[8px] px-3 py-0 text-[12px] lg:h-[38px]" aria-label="Open donation form">Donate Now</Button>
                <Button variant="outline" onClick={openDonation} className="h-10 w-[140px] rounded-[8px] border-softgreen bg-white px-3 py-0 text-[12px] text-[#267D72] hover:bg-seafoam lg:h-[38px]" aria-label="Sponsor a child">Sponsor a Child</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
