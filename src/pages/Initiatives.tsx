import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import InitiativeCard from '../components/InitiativeCard';
import StoryCard from '../components/StoryCard';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { Icon } from '../components/Icon';
import { useDonation } from '../context/DonationContext';
import {
  initiativesStats,
  initiatives,
  initiativesStories,
} from '../data/initiativesData';

export default function Initiatives() {
  const { openDonation } = useDonation();

  return (
    <>
      <SEO
        title="Our Initiatives | Education, Healthcare & Community Welfare"
        description="Explore our initiatives across education, healthcare, women empowerment, community welfare, scholarships, and food support that uplift underprivileged communities."
        path="/initiatives"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Our Initiatives', path: '/initiatives' },
        ]}
      />

      <PageHero
        title="Our Initiatives"
        subtitle="Compassion in Action. Change that Lasts."
        description="We work across key areas of need to empower individuals, uplift communities, and build a better tomorrow. Every initiative is a step towards a more equitable, healthier, and hopeful society."
        image="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Hands holding a young plant symbolising growth"
      />

      {/* Stats bar */}
      <section className="container-page -mt-8 relative z-20">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-line bg-white p-6 shadow-glass sm:grid-cols-3 md:grid-cols-5">
          {initiativesStats.map((s, i) => (
            <div key={s.label} className={i > 0 ? 'md:border-l md:border-line md:pl-4' : ''}>
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </section>

      {/* Initiative cards */}
      <section className="container-page py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item) => (
            <InitiativeCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Stories preview */}
      <section className="bg-section py-14">
        <div className="container-page">
          <div className="mb-8 text-center">
            <SectionTitle title="Stories of Change" subtitle="Real people. Real impact. Stronger communities." />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {initiativesStories.map((s) => (
              <StoryCard key={s.title} {...s} layout="horizontal" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-6">
        <CTASection
          title="Be the Reason for Someone's Smile"
          description="Your support can bring hope and change lives. Together, we can build a kinder and stronger society."
          actions={
            <>
              <Button onClick={openDonation} aria-label="Open donation form">
                <Icon name="heart" className="h-5 w-5" />
                Donate Now
              </Button>
              <Button variant="outline" to="/get-involved">
                Become a Volunteer
              </Button>
            </>
          }
        />
      </div>
    </>
  );
}
