import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  Building2,
  CheckCircle2,
  Clock3,
  HandHeart,
  Headphones,
  Heart,
  Mail,
  MapPin,
  Phone,
  Send,
  Share2,
  Sprout,
} from 'lucide-react';
import SEO from '../components/SEO';
import { SocialIcon } from '../components/Icon';
import {
  contactMethods,
  socialLinks,
  supportTopics,
  workingHours,
} from '../data/contactData';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  agreement: boolean;
};

const initialForm: FormValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  agreement: false,
};

const methodIcons = {
  phone: Phone,
  mail: Mail,
  pin: MapPin,
};

export default function Contact() {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [sent, setSent] = useState(false);

  const setField = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) nextErrors.subject = 'Please enter a subject.';
    if (!form.message.trim()) nextErrors.message = 'Please enter your message.';
    if (!form.agreement) nextErrors.agreement = 'Please accept the Privacy Policy and Terms & Conditions.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm(initialForm);
    }
  };

  const fieldClass = (hasError?: string) =>
    `h-12 w-full rounded-[8px] border bg-white px-[14px] text-base text-heading outline-none transition placeholder:text-[#9AABB7] focus:border-sky focus:ring-2 focus:ring-sky/20 sm:h-11 sm:text-[12px] ${hasError ? 'border-red-300' : 'border-line'}`;

  return (
    <>
      <SEO
        title="Contact Us | Kanneganti Venkataramaiah Charitable Trust"
        description="Contact Kanneganti Venkataramaiah Charitable Trust for enquiries, partnerships, volunteer opportunities, donations, and support."
        path="/contact"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
      />

      <div className="overflow-hidden bg-page">
        <style>{`
          .contact-shell {
            width: 100%;
            max-width: 1600px;
            margin-inline: auto;
            padding-inline: 20px;
          }
          .contact-hero-shell {
            width: 100%;
            max-width: 1360px;
            margin-inline: auto;
            padding-inline: 20px;
          }
          .contact-serif {
            font-family: Georgia, 'Times New Roman', serif;
          }
          @media (min-width: 640px) {
            .contact-shell { padding-inline: 24px; }
            .contact-hero-shell { padding-inline: 32px; }
          }
          @media (min-width: 1024px) {
            .contact-shell { padding-inline: 32px; }
            .contact-hero-shell { padding-inline: 48px; }
          }
          @media (min-width: 1280px) {
            .contact-shell { padding-inline: 36px; }
            .contact-hero-shell { padding-inline: 64px; }
          }
        `}</style>

        {/* Hero */}
        <section className="relative min-h-[215px] overflow-hidden border-b border-line bg-[linear-gradient(90deg,#F7FBFF_0%,#EEF8FF_100%)]">
          <img
            src="/assets/contact/02_contact_hero_sapling.png"
            alt="Hands nurturing a young sapling"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,251,255,.74)_0%,rgba(247,251,255,.86)_42%,rgba(247,251,255,.3)_100%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[58%] max-w-[760px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(244,250,253,.98)_16%,rgba(244,250,253,.98)_84%,transparent_100%)]" aria-hidden="true" />
          <div className="contact-hero-shell relative z-10 flex min-h-[215px] items-center justify-center py-7 text-center">
            <div className="max-w-[600px]">
              <h1 className="contact-serif text-[36px] font-bold leading-none tracking-[-0.025em] text-heading sm:text-[44px] lg:text-[54px]">Contact Us</h1>
              <div className="mx-auto mt-3 flex w-[116px] items-center gap-2 text-sky" aria-hidden="true">
                <span className="h-px flex-1 bg-sky/55" />
                <Heart className="h-4 w-4 fill-sky/25" strokeWidth={1.7} />
                <span className="h-px flex-1 bg-sky/55" />
              </div>
              <p className="mt-4 text-[14px] font-medium text-body">We’re here to help and happy to connect.</p>
              <p className="mt-1 text-[13px] text-body">Reach out to us for any inquiries, collaborations, or support.</p>
            </div>
          </div>
        </section>

        {/* Contact details and form */}
        <section className="contact-primary-grid contact-shell grid gap-[18px] pb-6 pt-[18px] lg:grid-cols-[1.14fr_.86fr] lg:items-stretch">
          <div className="contact-details-stack space-y-[14px]">
            <article className="rounded-[16px] border border-line bg-white p-[18px] shadow-[0_10px_28px_rgba(18,58,90,.06)]">
              <div className="flex items-start gap-2.5">
                <Sprout className="mt-0.5 h-5 w-5 text-softgreen" strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <h2 className="contact-serif text-[22px] font-bold leading-tight text-heading">Get in Touch</h2>
                  <p className="mt-0.5 text-[12px] text-softgreen">We’d love to hear from you.</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 xl:grid-cols-4">
                {contactMethods.map((method) => {
                  const MethodIcon = methodIcons[method.icon];
                  return (
                    <div key={method.title} className="group flex min-h-[136px] flex-col items-center rounded-[12px] border border-line bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFDFF_100%)] px-2.5 py-3.5 text-center shadow-[0_6px_18px_rgba(18,58,90,.05)] transition duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-[0_14px_30px_rgba(18,58,90,.1)]">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-white transition-transform duration-300 group-hover:scale-110 ${method.tone === 'green' ? 'bg-gradient-to-br from-seafoam to-mint/40 text-softgreen' : 'bg-gradient-to-br from-softblue to-sky/25 text-ocean'}`}>
                        <MethodIcon className="h-[21px] w-[21px]" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <h3 className="contact-serif mt-2 text-[15px] font-bold text-heading">{method.title}</h3>
                      <div className="mt-1 max-w-full text-[11px] leading-[1.45] text-body sm:text-[9.5px]">
                        {method.lines.map((line) => <p key={line} className="[overflow-wrap:anywhere]">{line}</p>)}
                      </div>
                    </div>
                  );
                })}

                <div className="group flex min-h-[136px] flex-col items-center rounded-[12px] border border-line bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFDFF_100%)] px-2.5 py-3.5 text-center shadow-[0_6px_18px_rgba(18,58,90,.05)] transition duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-[0_14px_30px_rgba(18,58,90,.1)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-seafoam to-mint/40 text-softgreen ring-1 ring-white transition-transform duration-300 group-hover:scale-110">
                    <Share2 className="h-[21px] w-[21px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="contact-serif mt-2 text-[15px] font-bold text-heading">Follow Us</h3>
                  <div className="mt-1.5 flex flex-wrap justify-center gap-1.5">
                    {socialLinks.map((social) => (
                      <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-section text-ocean transition hover:-translate-y-0.5 hover:bg-ocean hover:text-white">
                        <SocialIcon name={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-[14px] sm:grid-cols-[1.18fr_.82fr]">
              <article className="group rounded-[15px] border border-line bg-white p-4 shadow-[0_8px_24px_rgba(18,58,90,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(18,58,90,.1)]">
                <h2 className="contact-serif flex items-center gap-2 text-[19px] font-bold text-heading">
                  <Building2 className="h-[18px] w-[18px] text-ocean" strokeWidth={1.8} aria-hidden="true" />
                  Our Office
                </h2>
                <div className="mt-3 overflow-hidden rounded-[9px]">
                  <img src="/assets/contact/03_office_building.png" alt="Kanneganti Venkataramaiah Charitable Trust office building" loading="lazy" decoding="async" className="h-[118px] w-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-105" />
                </div>
                <h3 className="mt-2.5 text-[12px] font-bold leading-tight text-heading">Kanneganti Venkataramaiah Charitable Trust</h3>
                <p className="mt-1 text-[10.5px] leading-[1.5] text-body">Plot No. 12, Road No. 3, Banjara Hills,<br />Hyderabad, Telangana – 500 084, India.</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Banjara+Hills+Hyderabad" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-ocean hover:text-sky">Get Directions <span aria-hidden="true">→</span></a>
              </article>

              <article className="rounded-[15px] border border-line bg-white p-4 shadow-[0_8px_24px_rgba(18,58,90,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(18,58,90,.1)]">
                <h2 className="contact-serif flex items-center gap-2 text-[19px] font-bold text-heading">
                  <Clock3 className="h-[18px] w-[18px] text-ocean" strokeWidth={1.8} aria-hidden="true" />
                  Working Hours
                </h2>
                <ul className="mt-3">
                  {workingHours.map((item, index) => (
                    <li key={item.day} className={`flex justify-between gap-3 py-2 text-[10px] ${index < workingHours.length - 1 ? 'border-b border-line' : ''}`}>
                      <span className="text-ocean">{item.day}</span>
                      <span className="text-right font-medium text-heading">{item.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex gap-2.5 rounded-[9px] bg-[#EAF8F1] p-3">
                  <HandHeart className="h-[21px] w-[21px] shrink-0 text-softgreen" strokeWidth={1.8} aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-bold text-[#267D72]">We’re always here for you.</p>
                    <p className="mt-0.5 text-[10px] leading-[1.4] text-body">Your queries and feedback help us serve better.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <article className="contact-form-card rounded-[16px] border border-line bg-white p-5 shadow-[0_10px_28px_rgba(18,58,90,.06)] sm:p-[22px]">
            <div className="flex items-start gap-2.5">
              <Sprout className="mt-0.5 h-5 w-5 text-softgreen" strokeWidth={1.8} aria-hidden="true" />
              <div>
                <h2 className="contact-serif text-[22px] font-bold leading-tight text-heading">Send us a Message</h2>
                <p className="mt-0.5 text-[12px] text-body">Fill in the form below and we’ll get back to you.</p>
              </div>
            </div>

            <form className="mt-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-x-3 gap-y-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <input id="contact-name" value={form.name} onChange={(event) => setField('name', event.target.value)} autoComplete="name" placeholder="Your Name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} className={fieldClass(errors.name)} />
                  {errors.name && <p id="contact-name-error" className="mt-1 text-[10px] text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Your Email</label>
                  <input id="contact-email" type="email" value={form.email} onChange={(event) => setField('email', event.target.value)} autoComplete="email" placeholder="Your Email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} className={fieldClass(errors.email)} />
                  {errors.email && <p id="contact-email-error" className="mt-1 text-[10px] text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">Your Phone</label>
                  <input id="contact-phone" type="tel" value={form.phone} onChange={(event) => setField('phone', event.target.value)} autoComplete="tel" placeholder="Your Phone" className={fieldClass()} />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="sr-only">Subject</label>
                  <input id="contact-subject" value={form.subject} onChange={(event) => setField('subject', event.target.value)} autoComplete="off" placeholder="Subject" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'contact-subject-error' : undefined} className={fieldClass(errors.subject)} />
                  {errors.subject && <p id="contact-subject-error" className="mt-1 text-[10px] text-red-600">{errors.subject}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <textarea id="contact-message" value={form.message} onChange={(event) => setField('message', event.target.value)} placeholder="Your Message" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} className={`min-h-[140px] w-full resize-y rounded-[8px] border bg-white p-[14px] text-base text-heading outline-none transition placeholder:text-[#9AABB7] focus:border-sky focus:ring-2 focus:ring-sky/20 sm:text-[12px] ${errors.message ? 'border-red-300' : 'border-line'}`} />
                {errors.message && <p id="contact-message-error" className="mt-1 text-[10px] text-red-600">{errors.message}</p>}
              </div>

              <div className="mt-3">
                <label className="flex items-start gap-2 text-[11px] leading-[1.45] text-body">
                  <input type="checkbox" checked={form.agreement} onChange={(event) => setField('agreement', event.target.checked)} className="mt-px h-[15px] w-[15px] shrink-0 accent-ocean" />
                  <span>I agree to the <a href="#privacy" className="text-ocean hover:text-sky">Privacy Policy</a> and <a href="#terms" className="text-ocean hover:text-sky">Terms &amp; Conditions</a>.</span>
                </label>
                {errors.agreement && <p className="mt-1 text-[10px] text-red-600">{errors.agreement}</p>}
              </div>

              <button type="submit" className="group mt-4 inline-flex h-[42px] items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-ocean to-sky bg-[length:150%_100%] bg-left px-[22px] text-[12px] font-semibold text-white shadow-[0_10px_24px_rgba(22,137,199,.22)] transition-all duration-300 hover:bg-right hover:shadow-[0_14px_30px_rgba(22,137,199,.3)] focus:outline-none focus:ring-2 focus:ring-sky/30">
                Send Message <Send className="h-[15px] w-[15px] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.8} aria-hidden="true" />
              </button>

              <div aria-live="polite" className="mt-3 min-h-5">
                {sent && <p className="rounded-[8px] bg-seafoam px-3 py-2 text-[11px] font-medium text-[#267D72]">Thank you. Your message has been received and our team will get back to you soon.</p>}
                {!sent && Object.keys(errors).length > 0 && <p className="text-[11px] text-red-600">Please correct the highlighted fields.</p>}
              </div>
            </form>
          </article>
        </section>

        {/* Find us and support */}
        <section className="contact-shell grid gap-[18px] pb-[26px] lg:grid-cols-[1.5fr_.75fr]" id="map">
          <article className="rounded-[15px] border border-line bg-white p-4 shadow-[0_8px_24px_rgba(18,58,90,.055)] transition duration-300 hover:shadow-[0_16px_36px_rgba(18,58,90,.1)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="contact-serif flex items-center gap-2 text-[19px] font-bold text-heading">
                <MapPin className="h-[18px] w-[18px] text-ocean" strokeWidth={1.8} aria-hidden="true" />
                Find Us
              </h2>
              <a href="https://www.google.com/maps/search/?api=1&query=Banjara+Hills+Hyderabad" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] font-semibold text-ocean transition-colors hover:text-sky">
                Open in Google Maps <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-3 overflow-hidden rounded-[9px] border border-line ring-1 ring-line/60">
              <iframe
                title="Map showing the trust office in Banjara Hills, Hyderabad"
                src="https://www.google.com/maps?q=Banjara+Hills+Hyderabad+Telangana+500034&hl=en&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[220px] w-full lg:h-[260px]"
              />
            </div>
          </article>

          <article className="relative flex flex-col justify-center overflow-hidden rounded-[15px] border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#EAF8F1_100%)] p-5 shadow-[0_8px_24px_rgba(18,58,90,.055)] transition duration-300 hover:shadow-[0_16px_36px_rgba(18,58,90,.1)] sm:p-[22px]">
            <div className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[160px] overflow-hidden opacity-55" aria-hidden="true">
              <img src="/assets/contact/05_support_card_leaf.png" alt="" className="leaf-blend absolute bottom-0 right-0 w-[200px] max-w-none [mask-image:linear-gradient(to_left,#000_0%,#000_76%,transparent_100%)]" />
            </div>
            <div className="relative z-10">
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-line bg-white text-softgreen shadow-soft">
                <HandHeart className="h-[25px] w-[25px]" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h2 className="contact-serif mt-3.5 text-[21px] font-bold leading-tight text-[#267D72]">Need Help or Support?</h2>
              <p className="mt-2 max-w-[260px] text-[11.5px] leading-[1.5] text-body">If you need immediate assistance or wish to discuss a partnership, our team is here to help.</p>
              <ul className="mt-3 space-y-[7px]">
                {supportTopics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-[11px] text-body">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-softgreen" strokeWidth={1.9} aria-hidden="true" />
                    {topic}
                  </li>
                ))}
              </ul>
              <a href="tel:+918895543300" className="mt-4 inline-flex h-10 w-fit items-center justify-center gap-2 rounded-[8px] bg-ocean px-5 text-[12px] font-semibold text-white shadow-soft transition hover:bg-sky">
                Talk to Our Team <Headphones className="h-[15px] w-[15px]" strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
