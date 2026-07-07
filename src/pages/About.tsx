import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import Button from '../components/Button';
import { Icon } from '../components/Icon';
import { LeafBranch } from '../components/Decorations';

const values = [
  { title: 'Compassion', text: 'We care deeply and act selflessly.', icon: 'heart' },
  { title: 'Integrity', text: 'We uphold honesty, transparency and trust.', icon: 'shield' },
  { title: 'Empowerment', text: 'We enable individuals to realize their potential.', icon: 'empower' },
  { title: 'Sustainability', text: 'We build solutions that create lasting impact.', icon: 'leaf' },
];

const timeline = [
  { year: '2010', text: 'The Trust was established with a vision to serve.', icon: 'star' },
  { year: '2012', text: 'Launched education programs for underprivileged children.', icon: 'book' },
  { year: '2015', text: 'Expanded into healthcare and wellness initiatives.', icon: 'health' },
  { year: '2018', text: 'Empowerment programs for women and youth began.', icon: 'empower' },
  { year: '2021', text: 'Strengthened community welfare and relief initiatives.', icon: 'welfare' },
  { year: '2024+', text: 'Continuing our mission towards a brighter future.', icon: 'leaf' },
];

const aboutStats = [
  { value: '14+', label: 'Years of Service', icon: 'users' },
  { value: '75,000+', label: 'Lives Impacted', icon: 'heart' },
  { value: '180+', label: 'Projects Completed', icon: 'star' },
  { value: '250+', label: 'Volunteers', icon: 'empower' },
  { value: '100+', label: 'Partner Organizations', icon: 'handshake' },
];

const trustees = [
  { name: 'Rajesh Kanneganti', role: 'Trustee', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
  { name: 'Padma Srinivas', role: 'Trustee', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
  { name: 'V. Suryanarayana', role: 'Trustee', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' },
  { name: 'Anita Reddy', role: 'Trustee', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' },
  { name: 'Dr. Mohan Kumar', role: 'Trustee', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80' },
  { name: 'Lavanya K.', role: 'Trustee', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Kanneganti Venkataramaiah Charitable Trust"
        description="Learn about Kanneganti Venkataramaiah Charitable Trust, our vision, mission, journey, core values, and the compassionate people driving lasting change."
        path="/about"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />

      <PageHero
        eyebrow="Who We Are"
        title="About Us"
        subtitle="Compassion Today, Better Tomorrow"
        description="The Kanneganti Venkataramaiah Charitable Trust is dedicated to uplifting underserved communities through education, healthcare, empowerment, and social welfare initiatives that create lasting change."
        image="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Children supported by the trust"
        actions={
          <Button to="/initiatives" icon={<span aria-hidden="true">→</span>} iconPosition="right">
            Our Journey
          </Button>
        }
      />

      {/* Legacy + Vision + Mission */}
      <section className="container-page py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-card sm:grid-cols-2">
            <div className="p-6">
              <h2 className="text-xl font-bold">A Legacy of Compassion</h2>
              <p className="mt-3 text-sm text-body">
                Founded on the timeless values of empathy, service, and integrity, our Trust works
                relentlessly for a more equitable and compassionate society.
              </p>
              <p className="mt-5 font-serif text-lg italic text-ocean">K. Venkataramaiah</p>
              <p className="text-xs text-muted">Founder</p>
            </div>
            <div className="min-h-[180px]">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80"
                alt="Hands holding a young plant symbolising hope"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-line bg-section p-6 text-center shadow-card">
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-ocean">
                <Icon name="eye" className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold">Our Vision</h3>
              <p className="mt-2 text-sm text-body">
                A just, inclusive, and empowered society where every individual has the opportunity
                to live with dignity and hope.
              </p>
            </div>
            <div className="rounded-3xl border border-line bg-section p-6 text-center shadow-card">
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-softgreen">
                <Icon name="target" className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold">Our Mission</h3>
              <p className="mt-2 text-sm text-body">
                To create sustainable impact by delivering quality initiatives in education,
                healthcare, empowerment, and social welfare.
              </p>
            </div>
          </div>
        </div>

        {/* Founder message + core values */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-6 shadow-card sm:flex-row">
            <img
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80"
              alt="Portrait of the founder K. Venkataramaiah"
              loading="lazy"
              className="h-40 w-full rounded-2xl object-cover sm:h-auto sm:w-40"
            />
            <div>
              <h3 className="text-lg font-bold">Message from our Founder</h3>
              <p className="mt-2 text-sm italic text-body">
                "Our journey began with a simple belief - that small acts of compassion can spark
                extraordinary change. Every life we touch strengthens our commitment to build a
                better, kinder, and more equitable tomorrow."
              </p>
              <p className="mt-3 font-serif text-base italic text-ocean">K. Venkataramaiah</p>
              <p className="text-xs text-muted">Founder &amp; Chairman</p>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-section p-6 shadow-card">
            <h3 className="mb-5 text-center text-lg font-bold">Our Core Values</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="text-center">
                  <span className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ocean">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h4 className="text-sm font-bold text-heading">{v.title}</h4>
                  <p className="mt-1 text-xs text-muted">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-section py-14">
        <div className="container-page">
          <SectionTitle title="Our Journey of Impact" decorated />
          {/* Desktop */}
          <div className="mt-12 hidden lg:block">
            <div className="relative grid grid-cols-6 gap-4">
              <div className="absolute left-0 right-0 top-6 h-0.5 bg-line" aria-hidden="true" />
              {timeline.map((t) => (
                <div key={t.year} className="relative text-center">
                  <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft">
                    <Icon name={t.icon} className="h-5 w-5" />
                  </span>
                  <div className="mt-3 text-lg font-bold text-ocean">{t.year}</div>
                  <p className="mt-1 text-xs text-muted">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile */}
          <div className="mt-10 space-y-5 lg:hidden">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-base font-bold text-ocean">{t.year}</div>
                  <p className="text-sm text-muted">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page py-12">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-softblue/40 p-8">
          <LeafBranch className="absolute -left-4 bottom-0 h-40 w-24 opacity-50" />
          <LeafBranch className="absolute -right-4 top-0 h-40 w-24 opacity-40" flip />
          <div className="relative z-10 grid grid-cols-2 gap-6 md:grid-cols-5">
            {aboutStats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Trustees */}
      <section className="container-page pb-16">
        <SectionTitle title="Our Trustees" decorated />
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {trustees.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-line bg-white p-3 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-glass"
            >
              <img
                src={t.img}
                alt={`Portrait of ${t.name}`}
                loading="lazy"
                className="mx-auto h-28 w-full rounded-xl object-cover"
              />
              <h3 className="mt-3 text-sm font-bold text-heading">{t.name}</h3>
              <p className="text-xs text-muted">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
