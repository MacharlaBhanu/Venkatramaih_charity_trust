import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import StoryCard from '../components/StoryCard';
import StatCard from '../components/StatCard';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { Icon } from '../components/Icon';
import { useDonation } from '../context/DonationContext';
import {
  featuredStory,
  moreStories,
  testimonials,
  storiesStats,
  journeySteps,
  beforeAfter,
} from '../data/storiesData';

export default function Stories() {
  const { openDonation } = useDonation();

  return (
    <>
      <SEO
        title="Stories of Change | Kanneganti Venkataramaiah Charitable Trust"
        description="Real stories, real impact. Discover how your support is transforming lives and building brighter tomorrows across communities."
        path="/stories"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Stories', path: '/stories' },
        ]}
      />

      <PageHero
        title={
          <>
            Stories of <span className="text-sky">Change</span>
          </>
        }
        subtitle="Real stories. Real impact."
        description="Every life touched creates a ripple of hope. Discover how your support is transforming lives and building brighter tomorrows across communities."
        image="https://images.unsplash.com/photo-1569173675610-42c361a86e37?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Children whose lives were transformed by the trust"
      />

      {/* Featured story */}
      <section className="container-page py-12">
        <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-glass">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-7 md:p-9">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-softblue px-3 py-1 text-xs font-semibold text-ocean">
                <Icon name="sparkle" className="h-3.5 w-3.5" />
                {featuredStory.badge}
              </span>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">{featuredStory.title}</h2>
              <p className="mt-1 text-lg font-medium text-ocean">{featuredStory.subtitle}</p>
              <p className="mt-4 text-body">{featuredStory.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/stories">Read Full Story</Button>
                <button
                  className="btn-outline"
                  aria-label="Watch story video"
                >
                  <Icon name="play" className="h-4 w-4" />
                  Watch Video
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={featuredStory.image}
                alt={featuredStory.subtitle}
                loading="lazy"
                className="h-64 w-full object-cover lg:h-full"
              />
              <div className="absolute bottom-4 right-4 hidden w-52 rounded-2xl border border-line bg-white/95 p-4 shadow-glass backdrop-blur sm:block">
                {featuredStory.info.map((info) => (
                  <div key={info.label} className="flex items-start gap-2 py-1.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-softblue text-ocean">
                      <Icon name={info.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-muted">{info.label}</div>
                      <div className="text-xs font-semibold text-heading">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More stories */}
      <section className="container-page py-8">
        <SectionTitle title="More Stories of Transformation" decorated />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {moreStories.map((s) => (
            <StoryCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-section py-14">
        <div className="container-page">
          <SectionTitle title="Voices of Gratitude" decorated />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="rounded-3xl border border-line bg-white p-6 shadow-card"
              >
                <span className="font-serif text-4xl leading-none text-sky">"</span>
                <p className="mt-2 text-sm italic text-body">{t.quote}</p>
                <footer className="mt-4">
                  <div className="text-sm font-bold text-heading">{t.name}</div>
                  {t.role && <div className="text-xs text-muted">{t.role}</div>}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="container-page py-14">
        <SectionTitle title="Our Impact So Far" decorated />
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {storiesStats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Before & After + Journey */}
      <section className="container-page pb-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
            <h3 className="mb-4 text-center text-lg font-bold">Before &amp; After</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={beforeAfter.before} alt="Before receiving support" loading="lazy" className="h-40 w-full object-cover" />
                <span className="absolute left-2 top-2 rounded-full bg-heading/70 px-2 py-0.5 text-[10px] font-semibold text-white">Before</span>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img src={beforeAfter.after} alt="After receiving support" loading="lazy" className="h-40 w-full object-cover" />
                <span className="absolute left-2 top-2 rounded-full bg-softgreen px-2 py-0.5 text-[10px] font-semibold text-white">After</span>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-body">{beforeAfter.text}</p>
            <div className="mt-4 text-center">
              <Button variant="outline" to="/stories">View More Stories</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-seafoam p-6 shadow-card">
            <h3 className="mb-6 text-center text-lg font-bold">Journey of Change</h3>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {journeySteps.map((step, i) => (
                <div key={step.title} className="text-center">
                  <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-ocean shadow-soft">
                    <Icon name={step.icon} className="h-5 w-5" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ocean text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h4 className="mt-3 text-sm font-bold text-heading">{step.title}</h4>
                  <p className="mt-1 text-xs text-muted">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pb-8">
        <CTASection
          title="Be the Reason for Someone's Change"
          description="Your support can bring hope and change lives. Together, we can build a kinder and stronger society."
          actions={
            <>
              <Button onClick={openDonation} aria-label="Open donation form">
                <Icon name="heart" className="h-5 w-5" />
                Donate Now
              </Button>
              <Button variant="outline" onClick={openDonation} aria-label="Sponsor a child">
                Sponsor a Child
              </Button>
            </>
          }
        />
      </div>
    </>
  );
}
