import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HandHeart,
  Mail,
  MapPin,
  Phone,
  Search,
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
  country: string;
  phone: string;
  subject: string;
  message: string;
  agreement: boolean;
};

const initialForm: FormValues = {
  name: '',
  email: '',
  country: 'India',
  phone: '',
  subject: '',
  message: '',
  agreement: false,
};

// ponytail: plain [dialCode, country] pairs, no lib. Country name is the select value
// because dial codes are not unique (+1 US/Canada, +7 Russia/Kazakhstan).
const countryCodes: Array<[string, string]> = [
  ['+93', 'Afghanistan'], ['+355', 'Albania'], ['+213', 'Algeria'], ['+376', 'Andorra'],
  ['+244', 'Angola'], ['+1268', 'Antigua and Barbuda'], ['+54', 'Argentina'], ['+374', 'Armenia'],
  ['+297', 'Aruba'], ['+61', 'Australia'], ['+43', 'Austria'], ['+994', 'Azerbaijan'],
  ['+1242', 'Bahamas'], ['+973', 'Bahrain'], ['+880', 'Bangladesh'], ['+1246', 'Barbados'],
  ['+375', 'Belarus'], ['+32', 'Belgium'], ['+501', 'Belize'], ['+229', 'Benin'],
  ['+1441', 'Bermuda'], ['+975', 'Bhutan'], ['+591', 'Bolivia'], ['+387', 'Bosnia and Herzegovina'],
  ['+267', 'Botswana'], ['+55', 'Brazil'], ['+673', 'Brunei'], ['+359', 'Bulgaria'],
  ['+226', 'Burkina Faso'], ['+257', 'Burundi'], ['+855', 'Cambodia'], ['+237', 'Cameroon'],
  ['+1', 'Canada'], ['+238', 'Cape Verde'], ['+1345', 'Cayman Islands'],
  ['+236', 'Central African Republic'], ['+235', 'Chad'], ['+56', 'Chile'], ['+86', 'China'],
  ['+57', 'Colombia'], ['+269', 'Comoros'], ['+242', 'Congo'], ['+243', 'Congo (DRC)'],
  ['+506', 'Costa Rica'], ['+225', 'Côte d’Ivoire'], ['+385', 'Croatia'], ['+53', 'Cuba'],
  ['+357', 'Cyprus'], ['+420', 'Czechia'], ['+45', 'Denmark'], ['+253', 'Djibouti'],
  ['+1767', 'Dominica'], ['+1809', 'Dominican Republic'], ['+593', 'Ecuador'], ['+20', 'Egypt'],
  ['+503', 'El Salvador'], ['+240', 'Equatorial Guinea'], ['+291', 'Eritrea'], ['+372', 'Estonia'],
  ['+268', 'Eswatini'], ['+251', 'Ethiopia'], ['+679', 'Fiji'], ['+358', 'Finland'],
  ['+33', 'France'], ['+241', 'Gabon'], ['+220', 'Gambia'], ['+995', 'Georgia'],
  ['+49', 'Germany'], ['+233', 'Ghana'], ['+350', 'Gibraltar'], ['+30', 'Greece'],
  ['+299', 'Greenland'], ['+1473', 'Grenada'], ['+502', 'Guatemala'], ['+224', 'Guinea'],
  ['+245', 'Guinea-Bissau'], ['+592', 'Guyana'], ['+509', 'Haiti'], ['+504', 'Honduras'],
  ['+852', 'Hong Kong'], ['+36', 'Hungary'], ['+354', 'Iceland'], ['+91', 'India'],
  ['+62', 'Indonesia'], ['+98', 'Iran'], ['+964', 'Iraq'], ['+353', 'Ireland'],
  ['+972', 'Israel'], ['+39', 'Italy'], ['+1876', 'Jamaica'], ['+81', 'Japan'],
  ['+962', 'Jordan'], ['+7', 'Kazakhstan'], ['+254', 'Kenya'], ['+686', 'Kiribati'],
  ['+383', 'Kosovo'], ['+965', 'Kuwait'], ['+996', 'Kyrgyzstan'], ['+856', 'Laos'],
  ['+371', 'Latvia'], ['+961', 'Lebanon'], ['+266', 'Lesotho'], ['+231', 'Liberia'],
  ['+218', 'Libya'], ['+423', 'Liechtenstein'], ['+370', 'Lithuania'], ['+352', 'Luxembourg'],
  ['+853', 'Macau'], ['+261', 'Madagascar'], ['+265', 'Malawi'], ['+60', 'Malaysia'],
  ['+960', 'Maldives'], ['+223', 'Mali'], ['+356', 'Malta'], ['+692', 'Marshall Islands'],
  ['+222', 'Mauritania'], ['+230', 'Mauritius'], ['+52', 'Mexico'], ['+691', 'Micronesia'],
  ['+373', 'Moldova'], ['+377', 'Monaco'], ['+976', 'Mongolia'], ['+382', 'Montenegro'],
  ['+212', 'Morocco'], ['+258', 'Mozambique'], ['+95', 'Myanmar'], ['+264', 'Namibia'],
  ['+674', 'Nauru'], ['+977', 'Nepal'], ['+31', 'Netherlands'], ['+64', 'New Zealand'],
  ['+505', 'Nicaragua'], ['+227', 'Niger'], ['+234', 'Nigeria'], ['+850', 'North Korea'],
  ['+389', 'North Macedonia'], ['+47', 'Norway'], ['+968', 'Oman'], ['+92', 'Pakistan'],
  ['+680', 'Palau'], ['+970', 'Palestine'], ['+507', 'Panama'], ['+675', 'Papua New Guinea'],
  ['+595', 'Paraguay'], ['+51', 'Peru'], ['+63', 'Philippines'], ['+48', 'Poland'],
  ['+351', 'Portugal'], ['+1787', 'Puerto Rico'], ['+974', 'Qatar'], ['+40', 'Romania'],
  ['+7', 'Russia'], ['+250', 'Rwanda'], ['+1869', 'Saint Kitts and Nevis'], ['+1758', 'Saint Lucia'],
  ['+1784', 'Saint Vincent and the Grenadines'], ['+685', 'Samoa'], ['+378', 'San Marino'],
  ['+239', 'Sao Tome and Principe'], ['+966', 'Saudi Arabia'], ['+221', 'Senegal'],
  ['+381', 'Serbia'], ['+248', 'Seychelles'], ['+232', 'Sierra Leone'], ['+65', 'Singapore'],
  ['+421', 'Slovakia'], ['+386', 'Slovenia'], ['+677', 'Solomon Islands'], ['+252', 'Somalia'],
  ['+27', 'South Africa'], ['+82', 'South Korea'], ['+211', 'South Sudan'], ['+34', 'Spain'],
  ['+94', 'Sri Lanka'], ['+249', 'Sudan'], ['+597', 'Suriname'], ['+46', 'Sweden'],
  ['+41', 'Switzerland'], ['+963', 'Syria'], ['+886', 'Taiwan'], ['+992', 'Tajikistan'],
  ['+255', 'Tanzania'], ['+66', 'Thailand'], ['+670', 'Timor-Leste'], ['+228', 'Togo'],
  ['+676', 'Tonga'], ['+1868', 'Trinidad and Tobago'], ['+216', 'Tunisia'], ['+90', 'Turkey'],
  ['+993', 'Turkmenistan'], ['+688', 'Tuvalu'], ['+256', 'Uganda'], ['+380', 'Ukraine'],
  ['+971', 'United Arab Emirates'], ['+44', 'United Kingdom'], ['+1', 'United States'],
  ['+598', 'Uruguay'], ['+998', 'Uzbekistan'], ['+678', 'Vanuatu'], ['+379', 'Vatican City'],
  ['+58', 'Venezuela'], ['+84', 'Vietnam'], ['+967', 'Yemen'], ['+260', 'Zambia'],
  ['+263', 'Zimbabwe'],
];

const dialCodeFor = (country: string) =>
  countryCodes.find(([, name]) => name === country)?.[0] ?? '+91';

const methodIcons = {
  phone: Phone,
  mail: Mail,
  pin: MapPin,
};

export default function Contact() {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [sent, setSent] = useState(false);
  const [codeQuery, setCodeQuery] = useState('');
  const [codeOpen, setCodeOpen] = useState(false);

  // ponytail: substring match on both dial code and country name, so "9" and "ind" both hit India.
  const codeMatches = codeQuery.trim()
    ? countryCodes.filter(([code, name]) => {
        const q = codeQuery.trim().toLowerCase().replace(/^\+/, '');
        return name.toLowerCase().includes(q) || code.replace('+', '').includes(q);
      })
    : countryCodes;

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
        title="Contact Us | Kanneganti Venkatramaiah Charitable Trust"
        description="Contact Kanneganti Venkatramaiah Charitable Trust for enquiries, partnerships, volunteer opportunities, donations, and support."
        path="/contact"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
      />

      <div className="overflow-hidden bg-[#EAF5FF]">
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
            .contact-hero-shell { padding-inline: 64px; max-width: 1560px; }
          }
        `}</style>

        {/* Hero */}
        {/* Mobile height matches the Gallery hero (~204px fixed spacing + ~126vw of width-scaled content); lg fills the first screen (92px = lg navbar height) */}
        <section className="relative min-h-[calc(204px+126vw)] overflow-hidden border-b border-line bg-[#F7FBFE] sm:min-h-[360px] lg:min-h-[calc(100svh-92px)]">
          <picture>
            <source media="(max-width: 639px)" srcSet="/assets/contact/mobile_contactus.png" />
            <img
              src="/assets/contact/contact_us_trust.png"
              alt="KVR Charitable Trust entrance and logo"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[68%_42%] sm:object-[center_42%]"
            />
          </picture>
          {/* ponytail: vertical scrim on mobile — the horizontal one only covers the left ~240px of a phone, so the copy landed on the logo. sm+ keeps the original left-to-right scrim. */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.95)_0%,rgba(255,255,255,.88)_34%,rgba(255,255,255,.38)_58%,transparent_78%)] sm:bg-[linear-gradient(90deg,rgba(255,255,255,.96)_0%,rgba(255,255,255,.86)_32%,rgba(255,255,255,.22)_56%,transparent_76%)]" aria-hidden="true" />
          <div className="contact-hero-shell relative z-10 flex min-h-[calc(204px+126vw)] items-start py-8 sm:min-h-[360px] sm:items-center sm:py-10 lg:min-h-[calc(100svh-92px)]">
            {/* ponytail: mobile type is vw-based off a 430px baseline, so all phones get the same proportions */}
            <div className="w-full max-w-[620px] px-1 sm:px-0">
              <h1 className="contact-serif mt-3 text-[clamp(38px,11vw,52px)] font-bold leading-none tracking-[-0.025em] text-[#0B5A8B] drop-shadow-[0_1px_0_rgba(255,255,255,.7)] sm:text-[54px] lg:text-[80px]">Contact Us</h1>
              <p className="mt-5 text-[clamp(16px,4.4vw,20px)] font-semibold leading-relaxed text-[#195878] sm:text-[15px] lg:text-[21px]">We’d love to hear from you.</p>
              <p className="mt-2 max-w-[430px] text-[clamp(14px,3.9vw,17px)] leading-[1.7] text-[#426C80] sm:mt-1 sm:max-w-[410px] sm:text-[13px] sm:leading-relaxed lg:mt-2 lg:max-w-[500px] lg:text-[17px]">At Kanneganti Venkataramaiah Charitable Trust, every conversation begins with compassion. Whether you wish to support a cause, volunteer, or explore a partnership, our team is here to listen and walk alongside you.</p>
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
                    <div key={method.title} className="group flex min-h-[136px] flex-col items-center rounded-[12px] border border-line bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFE_100%)] px-3 py-4 text-center shadow-[0_6px_18px_rgba(18,58,90,.05)] transition duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-[0_14px_30px_rgba(18,58,90,.1)]">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-white transition-transform duration-300 group-hover:scale-110 ${method.tone === 'green' ? 'bg-gradient-to-br from-seafoam to-mint/40 text-softgreen' : 'bg-gradient-to-br from-softblue to-sky/25 text-ocean'}`}>
                        <MethodIcon className="h-[21px] w-[21px]" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <h3 className="contact-serif mt-2 text-[15px] font-bold text-heading">{method.title}</h3>
                      <div className="mt-1 max-w-full text-[11.5px] leading-[1.5] text-body">
                        {method.lines.map((line) => <p key={line} className="[overflow-wrap:anywhere]">{line}</p>)}
                      </div>
                    </div>
                  );
                })}

                <div className="group flex min-h-[136px] flex-col items-center rounded-[12px] border border-line bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFE_100%)] px-3 py-4 text-center shadow-[0_6px_18px_rgba(18,58,90,.05)] transition duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-[0_14px_30px_rgba(18,58,90,.1)]">
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
                  <img src="/assets/contact/03_office_building.png" alt="Kanneganti Venkatramaiah Charitable Trust office building" loading="lazy" decoding="async" className="h-[118px] w-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-105" />
                </div>
                <h3 className="mt-3 text-[13px] font-bold leading-snug text-heading">Kanneganti Venkatramaiah Charitable Trust</h3>
                <p className="mt-1.5 text-[11.5px] leading-[1.55] text-body">Plot No. 12, Road No. 3, Banjara Hills,<br />Hyderabad, Telangana – 500 084, India.</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Banjara+Hills+Hyderabad" target="_blank" rel="noreferrer" className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-ocean transition-colors hover:text-sky">Get Directions <span aria-hidden="true">→</span></a>
              </article>

              <article className="rounded-[15px] border border-line bg-white p-4 shadow-[0_8px_24px_rgba(18,58,90,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(18,58,90,.1)]">
                <h2 className="contact-serif flex items-center gap-2 text-[24px] font-bold text-heading">
                  <Clock3 className="h-[20px] w-[20px] text-ocean" strokeWidth={1.8} aria-hidden="true" />
                  Working Hours
                </h2>
                <ul className="mt-4">
                  {workingHours.map((item, index) => (
                    <li key={item.day} className={`flex justify-between gap-3 py-3 text-[13.5px] ${index < workingHours.length - 1 ? 'border-b border-line' : ''}`}>
                      <span className="text-body">{item.day}</span>
                      <span className="text-right font-semibold text-heading">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <article id="message" className="contact-form-card scroll-mt-[80px] rounded-[16px] border border-line bg-white p-5 shadow-[0_10px_28px_rgba(18,58,90,.06)] sm:p-[22px] lg:scroll-mt-[104px]">
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
                  <input id="contact-email" type="email" value={form.email} onChange={(event) => setField('email', event.target.value)} autoComplete="email" placeholder="yourname@gmail.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} className={fieldClass(errors.email)} />
                  {errors.email && <p id="contact-email-error" className="mt-1 text-[10px] text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">Your Phone</label>
                  <div className="flex gap-2">
                    {/* ponytail: onBlur on the wrapper closes the panel on any focus move out of it — no document listener */}
                    <div
                      className="relative w-[92px] shrink-0"
                      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setCodeOpen(false); }}
                    >
                      <button
                        type="button"
                        id="contact-country"
                        aria-haspopup="listbox"
                        aria-expanded={codeOpen}
                        aria-label={`Country code: ${form.country} ${dialCodeFor(form.country)}`}
                        onClick={() => { setCodeOpen((open) => !open); setCodeQuery(''); }}
                        className={`${fieldClass()} flex items-center justify-between gap-1 px-[10px] text-left ${codeOpen ? 'border-sky ring-2 ring-sky/20' : ''}`}
                      >
                        <span className="font-semibold tabular-nums text-heading">{dialCodeFor(form.country)}</span>
                        <ChevronDown className={`h-4 w-4 shrink-0 text-[#5B7688] transition-transform duration-200 ${codeOpen ? 'rotate-180' : ''}`} strokeWidth={2} aria-hidden="true" />
                      </button>

                      {codeOpen && (
                        <div className="absolute left-0 top-full z-30 mt-2 w-[262px] overflow-hidden rounded-[12px] border border-line bg-white shadow-[0_18px_40px_rgba(15,60,90,.18)]">
                          <div className="border-b border-line p-2">
                            <div className="relative">
                              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-[13px] w-[13px] -translate-y-1/2 text-[#9AABB7]" strokeWidth={2} aria-hidden="true" />
                              <input
                                autoFocus
                                type="text"
                                value={codeQuery}
                                onChange={(event) => setCodeQuery(event.target.value)}
                                placeholder="Search 91 or India"
                                aria-label="Search country or code"
                                className="h-9 w-full rounded-[7px] border border-line bg-[#F7FBFF] pl-[30px] pr-2 text-[12px] text-heading outline-none transition placeholder:text-[#9AABB7] focus:border-sky focus:bg-white focus:ring-2 focus:ring-sky/20"
                              />
                            </div>
                          </div>
                          <ul role="listbox" aria-label="Country codes" className="max-h-[212px] overflow-y-auto py-1">
                            {codeMatches.length === 0 && <li className="px-3 py-3 text-center text-[11px] text-[#9AABB7]">No match</li>}
                            {codeMatches.map(([code, name]) => {
                              const selected = form.country === name;
                              return (
                                <li key={name}>
                                  <button
                                    type="button"
                                    role="option"
                                    aria-selected={selected}
                                    onClick={() => { setField('country', name); setCodeOpen(false); }}
                                    className={`flex w-full items-center gap-2.5 px-3 py-[7px] text-left text-[12px] transition-colors ${selected ? 'bg-[#EAF5FF]' : 'hover:bg-[#F3F9FF]'}`}
                                  >
                                    <span className={`w-[42px] shrink-0 tabular-nums ${selected ? 'font-semibold text-ocean' : 'text-[#5B7688]'}`}>{code}</span>
                                    <span className={`flex-1 truncate ${selected ? 'font-semibold text-ocean' : 'text-heading'}`}>{name}</span>
                                    {selected && <CheckCircle2 className="h-[13px] w-[13px] shrink-0 text-ocean" strokeWidth={2} aria-hidden="true" />}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                    <input id="contact-phone" type="tel" inputMode="numeric" value={form.phone} onChange={(event) => setField('phone', event.target.value.replace(/\D/g, ''))} autoComplete="tel-national" placeholder="Phone Number" className={fieldClass()} />
                  </div>
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
              <img src="/assets/contact/05_support_card_leaf_transparent.png" alt="" className="absolute bottom-0 right-0 w-[200px] max-w-none [mask-image:linear-gradient(to_left,#000_0%,#000_76%,transparent_100%)]" />
            </div>
            <div className="relative z-10">
              <span className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-line bg-white text-softgreen shadow-soft">
                <HandHeart className="h-[29px] w-[29px]" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h2 className="contact-serif mt-4 text-[24px] font-bold leading-tight text-[#267D72]">Need Help or Support?</h2>
              <p className="mt-2.5 max-w-[280px] text-[12.5px] leading-[1.6] text-body">If you need immediate assistance or wish to discuss a partnership, our team is here to help.</p>
              <ul className="mt-4 space-y-[10px]">
                {supportTopics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2.5 text-[12px] text-body">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-softgreen" strokeWidth={1.9} aria-hidden="true" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
