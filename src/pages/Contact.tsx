import { useState } from 'react';
import SEO from '../components/SEO';
import ContactCard from '../components/ContactCard';
import Button from '../components/Button';
import { Icon, SocialIcon } from '../components/Icon';
import { LeafBranch } from '../components/Decorations';
import { site } from '../data/siteData';

const helpTopics = [
  'General Inquiries',
  'Partnerships & Collaborations',
  'Volunteer Opportunities',
  'Donations & Support',
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <SEO
        title="Contact Us | Kanneganti Venkataramaiah Charitable Trust"
        description="We're here to help and happy to connect. Reach out to us for any inquiries, collaborations, volunteering, donations, and support."
        path="/contact"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-softblue/60 via-section to-page">
        <LeafBranch className="absolute -left-4 top-4 h-64 w-36 opacity-50" />
        <div className="pointer-events-none absolute right-10 top-6 h-56 w-56 rounded-full bg-mint/20 blur-3xl" />
        <div className="container-page relative z-10 py-14 text-center md:py-16">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Contact Us</h1>
          <div className="mt-3 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-10 bg-line" />
            <span className="text-sky">♥</span>
            <span className="h-px w-10 bg-line" />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-base text-body">
            We're here to help and happy to connect. Reach out to us for any inquiries,
            collaborations, or support.
          </p>
        </div>
      </section>

      {/* Get in touch + form */}
      <section className="container-page py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Icon name="leaf" className="h-5 w-5 text-softgreen" />
                Get in Touch
              </h2>
              <p className="mt-1 text-sm text-softgreen">We'd love to hear from you.</p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <ContactCard icon="phone" title="Phone" lines={site.phones} />
                <ContactCard icon="mail" title="Email" lines={site.emails} />
                <ContactCard
                  icon="pin"
                  title="Office"
                  lines={['Hyderabad, Telangana,', `India - ${site.address.pincode}`]}
                />
                <ContactCard icon="users" title="Follow Us">
                  <div className="mt-2 flex gap-2">
                    {site.socials.slice(0, 4).map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.name}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-softblue text-ocean transition-colors hover:bg-ocean hover:text-white"
                      >
                        <SocialIcon name={s.icon} />
                      </a>
                    ))}
                  </div>
                </ContactCard>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
                <h3 className="flex items-center gap-2 text-base font-bold">
                  <Icon name="clipboard" className="h-4 w-4 text-ocean" />
                  Our Office
                </h3>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80"
                  alt="Trust office building"
                  loading="lazy"
                  className="mt-3 h-28 w-full rounded-2xl object-cover"
                />
                <p className="mt-3 text-sm font-semibold text-heading">{site.name}</p>
                <p className="text-xs text-body">{site.address.line1}</p>
                <p className="text-xs text-body">{site.address.line2}</p>
                <a href="#map" className="link-arrow mt-2 text-xs">
                  Get Directions <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
                <h3 className="flex items-center gap-2 text-base font-bold">
                  <Icon name="clock" className="h-4 w-4 text-ocean" />
                  Working Hours
                </h3>
                <ul className="mt-3 space-y-2">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between border-b border-line pb-2 text-xs">
                      <span className="text-ocean">{h.day}</span>
                      <span className="font-semibold text-heading">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex items-start gap-2 rounded-2xl bg-seafoam p-3">
                  <Icon name="heart" className="mt-0.5 h-4 w-4 shrink-0 text-softgreen" />
                  <p className="text-[11px] text-body">
                    We're always here for you. Your queries and feedback help us serve better.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-line bg-white p-6 shadow-card md:p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <Icon name="leaf" className="h-5 w-5 text-softgreen" />
              Send us a Message
            </h2>
            <p className="mt-1 text-sm text-body">
              Fill in the form below and we'll get back to you.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-seafoam p-6 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-softgreen">
                  <Icon name="check" className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold">Message Sent!</h3>
                <p className="mt-1 text-sm text-body">
                  Thank you for reaching out. Our team will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                className="mt-5 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Your Name" aria-label="Your Name" className="w-full rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30" />
                  <input required type="email" placeholder="Your Email" aria-label="Your Email" className="w-full rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30" />
                  <input type="tel" placeholder="Your Phone" aria-label="Your Phone" className="w-full rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30" />
                  <input placeholder="Subject" aria-label="Subject" className="w-full rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30" />
                </div>
                <textarea
                  required
                  rows={5}
                  placeholder="Your Message"
                  aria-label="Your Message"
                  className="w-full rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/30"
                />
                <label className="flex items-start gap-2 text-xs text-body">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-ocean" />
                  <span>
                    I agree to the{' '}
                    <span className="font-semibold text-ocean">Privacy Policy</span> and{' '}
                    <span className="font-semibold text-ocean">Terms &amp; Conditions</span>.
                  </span>
                </label>
                <Button type="submit" icon={<Icon name="mail" className="h-4 w-4" />} iconPosition="right">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map + Need help */}
      <section className="container-page pb-16" id="map">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-card lg:col-span-2">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Icon name="pin" className="h-5 w-5 text-ocean" />
              Find Us
            </h2>
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title="Trust location on Google Maps"
                src="https://www.google.com/maps?q=Banjara+Hills+Hyderabad&output=embed"
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-line bg-section p-6 shadow-card">
            <LeafBranch className="absolute -right-2 bottom-0 h-40 w-24 opacity-50" flip />
            <div className="relative z-10">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-softgreen">
                <Icon name="heart" className="h-6 w-6" />
              </span>
              <h2 className="text-lg font-bold text-ocean">Need Help or Support?</h2>
              <p className="mt-2 text-sm text-body">
                If you need immediate assistance or wish to discuss a partnership, our team is here to
                help.
              </p>
              <ul className="mt-4 space-y-2">
                {helpTopics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-body">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-softgreen">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <Button to="/contact" className="mt-5">
                <Icon name="phone" className="h-4 w-4" />
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
