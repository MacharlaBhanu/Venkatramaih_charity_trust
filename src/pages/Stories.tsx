import type { LucideIcon } from 'lucide-react';
import { useEffect } from 'react';
import {
  Award,
  GraduationCap,
  HandHeart,
  Heart,
  HeartPulse,
  Landmark,
  Quote,
  School,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { useDonation } from '../context/DonationContext';
import { changeStories } from '../data/storiesData';

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

export default function Stories() {
  const { openDonation } = useDonation();

  // one observer for every long-form block; CSS does the staggering
  useEffect(() => {
    const blocks = Array.from(document.querySelectorAll<HTMLElement>('.story-block'));
    if (!('IntersectionObserver' in window)) {
      blocks.forEach((block) => block.classList.add('is-in'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Stories of Change | Kanneganti Venkatramaiah Charitable Trust"
        description="Read inspiring stories of education, healthcare, empowerment, and community transformation made possible by Kanneganti Venkatramaiah Charitable Trust."
        path="/stories"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Stories', path: '/stories' },
        ]}
      />

      <div className="brand-color-page stories-page overflow-hidden bg-page">
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

            /* long-form story blocks — Initiatives-style layered reveal:
               image slides in from its side, copy rises with a per-child stagger */
            .story-visual,
            .story-copy > * {
              opacity: 0;
              transition: opacity 0.8s cubic-bezier(0.22, 0.61, 0.36, 1),
                transform 0.85s cubic-bezier(0.22, 0.61, 0.36, 1);
            }

            .story-visual { transform: translateX(-30px) scale(0.975); }
            .story-block.story-reversed .story-visual { transform: translateX(30px) scale(0.975); }
            .story-copy > * { transform: translateY(20px); }

            .story-block.is-in .story-visual,
            .story-block.is-in .story-copy > * {
              opacity: 1;
              transform: translateX(0) translateY(0) scale(1);
            }

            .story-block.is-in .story-copy > *:nth-child(1) { transition-delay: 120ms; }
            .story-block.is-in .story-copy > *:nth-child(2) { transition-delay: 200ms; }
            .story-block.is-in .story-copy > *:nth-child(3) { transition-delay: 280ms; }
            .story-block.is-in .story-copy > *:nth-child(4) { transition-delay: 360ms; }
            .story-block.is-in .story-copy > *:nth-child(5) { transition-delay: 440ms; }

            @media (max-width: 1023px) {
              /* stacked layout — a gentle rise reads better than a sideways slide */
              .story-visual,
              .story-block.story-reversed .story-visual { transform: translateY(24px) scale(0.985); }
            }

            .story-frame {
              transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
            }

            .story-frame:hover { transform: translateY(-4px); }

            .story-tile { transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease; }
            .story-tile:hover { transform: translateY(-3px); }

            @media (prefers-reduced-motion: reduce) {
              .story-visual,
              .story-copy > *,
              .story-block.story-reversed .story-visual { opacity: 1 !important; transform: none !important; transition: none !important; }
              .story-frame { transform: none !important; transition: none !important; }
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

              /* hero only: a wider measure removes the centring gutter, so the copy starts
                 nearer the left edge and the headline tail stays off the photo */
              .stories-content-shell { max-width: 1560px; }
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
        {/* Mobile height mirrors the Gallery hero, which is content-driven: ~204px of fixed spacing (py-12 + gap-10 + margins) plus ~126vw of width-scaled content (headline, tagline, copy, nav, collage). lg fills the first screen (92px = lg navbar height). */}
        <section className="relative min-h-[calc(204px+126vw)] overflow-hidden border-b border-line bg-[linear-gradient(115deg,#082F49_0%,#0A527A_48%,#B9E3F5_100%)] sm:min-h-[620px] md:min-h-[330px] lg:min-h-[calc(100svh-92px)]">
          <div className="absolute inset-x-0 top-0 h-[clamp(290px,85vw,400px)] overflow-hidden sm:h-[320px] md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[67%]">
            <img
              src="/assets/stories/04_story_healthcare_access_clear.png"
              alt="A schoolgirl concentrating on her studies in a classroom"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="stories-photo h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(8,47,73,0.02)_0%,rgba(8,47,73,0.08)_32%,#0A527A_49%,#082F49_100%)] md:bg-[linear-gradient(90deg,#082F49_0%,#0A527A_35%,rgba(10,82,122,0.94)_40%,rgba(10,82,122,0.5)_49%,rgba(10,82,122,0.1)_58%,rgba(10,82,122,0)_66%)]"
          />
          <img
            src="/assets/gallery/18_cta_leaf_style_left.png"
            alt=""
            aria-hidden="true"
            className="leaf-blend pointer-events-none absolute -bottom-16 -left-5 z-[2] h-[250px] w-auto opacity-40"
          />

          {/* ponytail: same Gallery-matched height here so the shell fills the section; copy sits below the photo via pt */}
          <div className="stories-content-shell relative z-10 flex min-h-[calc(204px+126vw)] items-start pb-10 pt-[clamp(380px,112vw,530px)] sm:min-h-[620px] sm:items-end sm:pb-14 sm:pt-[340px] md:min-h-[330px] md:items-center md:pb-8 md:pt-8 lg:min-h-[calc(100svh-92px)]">
            <div className="relative z-10 max-w-[600px] md:w-[48%]">
              {/* ponytail: lg max-widths keep the text inside the opaque part of the overlay (solid to 35%, fading out by 49%) so it never sits across the photo */}
              {/* ponytail: one line on lg. "Stories of Change" measures ~8x the font size, so 4.6vw always ends near 41% of the viewport — inside the overlay's opaque zone (solid to 35%, 0.94 at 40%). */}
              <h1 className="max-w-[590px] font-serif text-[clamp(32px,10.2vw,48px)] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-[46px] lg:whitespace-nowrap lg:text-[min(4.6vw,62px)]">
                Stories of{' '}
                <span className="bg-gradient-to-r from-ocean to-sky bg-clip-text text-transparent">Change</span>
              </h1>
              <p className="mt-4 text-[clamp(15px,4.65vw,22px)] font-semibold text-white md:text-[18px] lg:mt-7 lg:text-[24px]">Real stories. Real impact.</p>
              <span aria-hidden="true" className="mt-4 hidden h-px w-16 bg-gradient-to-r from-sky to-transparent lg:block" />
              <p className="mt-3 max-w-[480px] text-[clamp(12.5px,3.95vw,18px)] leading-[1.7] text-white/80 sm:mt-2 lg:mt-4 lg:max-w-[380px] lg:text-[18px] lg:leading-[1.8] xl:max-w-[440px]">
                Every life touched creates a ripple of hope. Discover how your support is transforming lives and building brighter tomorrows across communities.
              </p>
            </div>

          </div>
        </section>

        {/* Long-form stories */}
        <div className="relative border-y border-line/70 bg-[linear-gradient(180deg,#EDF6FC_0%,#E4EFF7_38%,#E9F4F1_72%,#EEF7FB_100%)]">
        <section id="more-stories" className="relative mx-auto w-full max-w-[1500px] px-4 pb-14 pt-8 sm:px-7 sm:pb-20 sm:pt-12 lg:px-10 lg:pt-14 xl:px-12">
          <div className="pointer-events-none absolute left-0 top-[12%] -z-0 h-[420px] w-[420px] rounded-full bg-[#BFE8F2]/30 blur-[110px]" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-[18%] right-0 -z-0 h-[460px] w-[460px] rounded-full bg-[#BCE5D9]/30 blur-[120px]" aria-hidden="true" />
          <div className="relative z-10 mx-auto mb-7 max-w-[720px] overflow-hidden rounded-[18px] border border-white/90 bg-white/60 px-8 py-5 text-center shadow-[0_14px_36px_rgba(18,78,105,.08)] backdrop-blur-sm sm:mb-10 sm:rounded-[22px] sm:px-12 sm:py-6">
            <span className="pointer-events-none absolute -left-1 top-0 font-serif text-[74px] leading-none text-[#5BBFEF]/20" aria-hidden="true">“</span>
            <span className="pointer-events-none absolute -bottom-10 -right-1 font-serif text-[90px] leading-none text-[#72CEBC]/20" aria-hidden="true">”</span>
            {/* ponytail: vw-scaled so the two-line break lands the same on every phone — ceiling 26px keeps it at 2 lines, floor 17px covers 320px screens */}
            <p className="relative font-serif text-[clamp(17px,5.6vw,26px)] italic leading-snug text-[#24666D] sm:text-[24px]">
              Three journeys of hope, care, and brighter futures.
            </p>
          </div>
          <div className="relative z-10 space-y-9 sm:space-y-12 lg:space-y-16">
            {changeStories.map((story, index) => {
              const reversed = index % 2 === 1;
              const panelTheme = index === 0
                ? 'border-[#B8D0E7] bg-[linear-gradient(135deg,rgba(255,255,255,.98)_0%,rgba(6,72,137,.13)_100%)] shadow-[0_26px_70px_rgba(6,72,137,.14)]'
                : index === 1
                  ? 'border-[#B6D8D2] bg-[linear-gradient(135deg,rgba(255,255,255,.98)_0%,rgba(0,111,105,.14)_100%)] shadow-[0_26px_70px_rgba(0,92,87,.14)]'
                  : 'border-[#D1C1DF] bg-[linear-gradient(135deg,rgba(255,255,255,.98)_0%,rgba(75,40,111,.14)_100%)] shadow-[0_26px_70px_rgba(75,40,111,.14)]';
              const accentTheme = index === 0
                ? 'from-[#063E79] via-[#07599D] to-[#3B8BC5]'
                : index === 1
                  ? 'from-[#005B57] via-[#00766F] to-[#43A69C]'
                  : 'from-[#3D205E] via-[#5B327D] to-[#8964A5]';
              const glowTheme = index === 0
                ? 'bg-[#07599D]/20'
                : index === 1
                  ? 'bg-[#00766F]/20'
                  : 'bg-[#5B327D]/20';
              const labelTheme = index === 0
                ? 'bg-[#063E79] text-white'
                : index === 1
                  ? 'bg-[#006C66] text-white'
                  : 'bg-[#4B286F] text-white';

              return (
                <div
                  key={story.title}
                  className={`story-block relative isolate grid overflow-hidden rounded-[26px] border sm:rounded-[36px] lg:grid-cols-2 lg:items-stretch ${reversed ? 'story-reversed' : ''} ${panelTheme}`}
                >
                  <span className={`pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full blur-[70px] ${glowTheme}`} aria-hidden="true" />
                  <span className={`pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full blur-[80px] ${glowTheme}`} aria-hidden="true" />
                  <span className="pointer-events-none absolute -right-3 -top-8 font-serif text-[110px] italic leading-none text-heading/[0.035] sm:right-3 sm:text-[150px]" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={`story-visual relative z-10 flex flex-col justify-center bg-white/20 p-4 sm:p-7 lg:p-9 xl:p-11 ${reversed ? 'lg:order-2 lg:border-l lg:border-white/75' : 'lg:border-r lg:border-white/75'}`}>
                    {/* these are finished card graphics — show them whole, no crop or overlay */}
                    <div className="relative p-1 sm:p-2">
                      <div className={`absolute inset-0 translate-x-2 translate-y-2 rounded-[22px] bg-gradient-to-br opacity-25 sm:translate-x-3 sm:translate-y-3 sm:rounded-[30px] ${accentTheme}`} aria-hidden="true" />
                      <div className="story-frame relative overflow-hidden rounded-[18px] border-[5px] border-white bg-white shadow-[0_22px_55px_rgba(18,58,90,0.2)] sm:rounded-[24px] sm:border-[7px] lg:rounded-[28px]">
                        <img
                          src={story.image}
                          alt={story.imageAlt}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                          className="stories-photo aspect-[718/473] w-full object-cover object-center"
                        />
                      </div>
                    </div>

                    <div className="mt-3 grid gap-2.5 sm:mt-5 sm:grid-cols-3 sm:gap-3">
                      {story.highlights.map((item) => (
                        <div
                          key={item.label}
                          className="story-tile relative flex items-center gap-3 overflow-hidden rounded-[14px] border border-white bg-white/85 px-3.5 py-3 shadow-[0_10px_28px_rgba(18,58,90,.09)] backdrop-blur-sm hover:border-sky/50 hover:bg-white hover:shadow-glass sm:block sm:min-h-[112px] sm:px-4 sm:py-4"
                        >
                          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.tone === 'green' ? 'bg-seafoam text-softgreen' : 'bg-softblue text-ocean'}`}>
                            <StoryIcon name={item.icon} className="h-4 w-4" />
                          </span>
                          <span className="min-w-0 sm:mt-3 sm:block">
                            <span className="block text-[9.5px] font-bold uppercase tracking-[0.14em] text-muted">{item.label}</span>
                            <strong className="mt-0.5 block text-[12px] font-semibold leading-snug text-heading">{item.value}</strong>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`story-copy relative z-10 px-5 pb-7 pt-8 sm:px-9 sm:pb-10 sm:pt-10 lg:flex lg:flex-col lg:justify-center lg:p-10 xl:p-12 ${reversed ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className={`flex h-9 min-w-9 items-center justify-center rounded-full font-serif text-[13px] italic shadow-sm ${labelTheme}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[9.5px] font-bold uppercase tracking-[0.22em] text-[#349C8D]">
                        {story.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-[29px] font-bold leading-[1.07] tracking-[-0.03em] text-heading sm:text-[38px] lg:text-[44px]">
                      {story.title}
                    </h3>

                    <p className="mt-4 max-w-[520px] font-serif text-[17px] italic leading-[1.5] text-ocean sm:text-[20px]">
                      {story.lede}
                    </p>

                    <div className="mt-6 space-y-4 text-[13.5px] leading-[1.85] text-body sm:mt-7 sm:space-y-5 sm:text-[14.5px]">
                      {story.paragraphs.slice(0, 2).map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>

                    <blockquote className="relative mt-7 overflow-hidden rounded-[18px] border border-white bg-white/80 px-5 py-5 shadow-[0_14px_38px_rgba(18,58,90,.1)] backdrop-blur-sm sm:mt-8 sm:px-7 sm:py-6">
                      <Quote className="absolute left-4 top-4 h-7 w-7 fill-sky/15 text-sky/55" strokeWidth={1.5} aria-hidden="true" />
                      <p className="pl-9 font-serif text-[16px] italic leading-[1.55] text-heading sm:text-[19px]">
                        {story.pullQuote}
                      </p>
                    </blockquote>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        </div>

        {/* CTA */}
        <section className="stories-section-shell pb-5 pt-8 sm:pt-10">
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
