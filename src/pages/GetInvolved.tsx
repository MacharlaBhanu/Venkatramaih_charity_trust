import { useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { Icon } from '../components/Icon';
import { LeafBranch } from '../components/Decorations';
import { useDonation } from '../context/DonationContext';
import { faqs } from '../data/faqData';

const ways = [
  { title: 'Donate', text: 'Your contribution brings change and creates lasting impact in the lives of those in need.', icon: 'heart', link: 'Donate Now', action: 'donate' },
  { title: 'Volunteer', text: 'Give your time and skills to support communities and be the helping hand.', icon: 'empower', link: 'Join as Volunteer' },
  { title: 'Partner With Us', text: 'Collaborate with us to build sustainable solutions and create greater impact.', icon: 'handshake', link: 'Partner With Us' },
  { title: 'Sponsor a Program', text: 'Sponsor an initiative and help us reach more people and change more lives.', icon: 'star', link: 'Explore Programs' },
  { title: 'Spread the Word', text: 'Share our mission across your network and inspire others to get involved.', icon: 'megaphone', link: 'Share Now' },
];

const process = [
  { title: 'Connect', text: 'Reach out to us and share your interest.', icon: 'edit' },
  { title: 'Choose', text: 'Pick a cause or program that inspires you.', icon: 'clipboard' },
  { title: 'Get Involved', text: 'Join our initiatives and make a meaningful impact.', icon: 'users' },
  { title: 'Track Impact', text: 'See how your contribution is creating change.', icon: 'chart' },
  { title: 'Grow Together', text: 'Stay connected and be part of our journey forward.', icon: 'heart' },
];

const benefits = [
  'Make a real difference in people\'s lives',
  'Gain valuable skills and experience',
  'Connect with like-minded and compassionate people',
  'Personal growth and meaningful fulfillment',
  'Recognition and appreciation for your contribution',
];

const partnerPoints = [
  { title: 'CSR Partnerships', icon: 'handshake' },
  { title: 'Program Collaboration', icon: 'grid' },
  { title: 'Resource Support', icon: 'welfare' },
  { title: 'Impactful Together', icon: 'heart' },
];

export default function GetInvolved() {
  const { openDonation } = useDonation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Get Involved | Donate, Volunteer & Partner With Us"
        description="Together, we can build a kinder, healthier, and more empowered tomorrow. Donate, volunteer, partner, sponsor a program, or spread the word."
        path="/get-involved"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Get Involved', path: '/get-involved' },
        ]}
      />

      <PageHero
        title={
          <>
            Get Involved,
            <br />
            <span className="text-sky">Create Change</span>
          </>
        }
        description="Together, we can build a kinder, healthier, and more empowered tomorrow. Your time, resources, and voice can transform lives and strengthen communities."
        image="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Volunteers helping community members"
        actions={
          <>
            <Button onClick={openDonation} aria-label="Open donation form">
              <Icon name="heart" className="h-5 w-5" />
              Donate Now
            </Button>
            <Button variant="outline" to="/contact">
              Become a Volunteer
            </Button>
          </>
        }
      />

      {/* Ways you can help */}
      <section className="container-page py-14">
        <SectionTitle title="Ways You Can Help" decorated />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ways.map((w) => (
            <div
              key={w.title}
              className="flex flex-col rounded-3xl border border-line bg-white p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-glass"
            >
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-softblue text-ocean">
                <Icon name={w.icon} className="h-6 w-6" />
              </span>
              <h3 className="text-base font-bold text-heading">{w.title}</h3>
              <p className="mt-2 flex-1 text-sm text-body">{w.text}</p>
              {w.action === 'donate' ? (
                <button onClick={openDonation} className="link-arrow mt-3 justify-center" aria-label="Open donation form">
                  {w.link} <span aria-hidden="true">→</span>
                </button>
              ) : (
                <Button variant="outline" to="/contact" className="mt-3 !px-4 !py-2 text-xs">
                  {w.link} <span aria-hidden="true">→</span>
                </Button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process + Volunteer benefits */}
      <section className="bg-section py-14">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-card">
            <h2 className="mb-8 text-center text-xl font-bold">Our Process</h2>
            <div className="grid grid-cols-5 gap-2">
              {process.map((p, i) => (
                <div key={p.title} className="text-center">
                  <span className="relative mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-softblue text-ocean">
                    <Icon name={p.icon} className="h-5 w-5" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ocean text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-2 text-xs font-bold text-heading">{p.title}</h3>
                  <p className="mt-1 hidden text-[11px] leading-tight text-muted sm:block">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
            <h2 className="mb-5 text-center text-xl font-bold">Volunteer Benefits</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=500&q=80"
                alt="Volunteers working together"
                loading="lazy"
                className="h-full max-h-56 w-full rounded-2xl object-cover"
              />
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-body">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-seafoam text-softgreen">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner + FAQ */}
      <section className="container-page py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-seafoam p-7 shadow-card">
            <LeafBranch className="absolute -left-2 bottom-0 h-40 w-24 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold">Partner With Us</h2>
              <p className="mt-2 text-sm text-body">
                We collaborate with organizations, corporates, and institutions to co-create programs
                that drive sustainable and measurable change. Let's build a better future, together.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {partnerPoints.map((p) => (
                  <div key={p.title} className="flex flex-col items-center rounded-2xl bg-white/70 p-3 text-center">
                    <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ocean">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-xs font-bold text-heading">{p.title}</h3>
                  </div>
                ))}
              </div>
              <Button to="/contact" className="mt-6">
                Explore Partnership Opportunities
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-7 shadow-card">
            <h2 className="mb-5 text-center text-xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={faq.q} className="rounded-2xl border border-line">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-heading"
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <span className={`text-ocean transition-transform ${openFaq === i ? 'rotate-45' : ''}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ${
                      openFaq === i ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className="px-4 pb-4 text-sm text-body">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pb-10">
        <CTASection
          title="Be the Reason for Someone's Smile"
          description="Every act of kindness creates ripples of hope. Join us today and be part of a brighter tomorrow."
          actions={
            <Button variant="mint" onClick={openDonation} aria-label="Open donation form">
              Get Involved Today
            </Button>
          }
        />
      </div>
    </>
  );
}
