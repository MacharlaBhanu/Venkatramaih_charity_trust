import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { Icon } from '../components/Icon';
import { LeafBranch } from '../components/Decorations';
import { useDonation } from '../context/DonationContext';
import {
  galleryCategories,
  galleryItems,
  eventHighlights,
  photoAlbums,
} from '../data/galleryData';

const helpCards = [
  { title: 'Volunteer', text: 'Give your time and skills', icon: 'empower', to: '/get-involved' },
  { title: 'Donate', text: 'Your contribution brings change', icon: 'heart', to: '/get-involved' },
  { title: 'Partner With Us', text: 'Collaborate for greater impact', icon: 'handshake', to: '/get-involved' },
  { title: 'Spread the Word', text: 'Inspire others, create change', icon: 'megaphone', to: '/get-involved' },
];

export default function Gallery() {
  const { openDonation } = useDonation();
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === active);

  return (
    <>
      <SEO
        title="Gallery | Kanneganti Venkataramaiah Charitable Trust"
        description="Explore moments of compassion and stories of change through our gallery of initiatives, events, and everyday acts of kindness."
        path="/gallery"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-softblue/60 via-section to-page">
        <LeafBranch className="absolute -left-4 top-6 h-64 w-36 opacity-50" />
        <div className="pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />
        <div className="container-page relative z-10 py-14 text-center md:py-16">
          <nav className="mb-4 flex items-center justify-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-ocean">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ocean">Gallery</span>
          </nav>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Gallery</h1>
          <div className="mt-3 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-10 bg-line" />
            <span className="text-sky">♥</span>
            <span className="h-px w-10 bg-line" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-base text-body">
            Moments of compassion. Stories of change. Explore glimpses of our initiatives, events,
            and everyday acts of kindness that are creating a better tomorrow.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="container-page py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? 'border-ocean bg-ocean text-white shadow-soft'
                  : 'border-line bg-white text-heading hover:border-sky'
              }`}
            >
              <Icon name="camera" className="h-4 w-4" />
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((item) => (
            <figure
              key={item.title}
              className="group relative break-inside-avoid overflow-hidden rounded-3xl border border-line bg-white shadow-card"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  item.size === 'large' ? 'h-72' : item.size === 'tall' ? 'h-80' : 'h-52'
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-heading/80 to-transparent p-4">
                <span className="eyebrow !text-mint text-[10px]">{item.category}</span>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                {item.description && (
                  <p className="mt-1 text-xs text-white/85">{item.description}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Event highlights */}
      <section className="bg-section py-14">
        <div className="container-page">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold sm:text-[1.75rem]">Event Highlights</h2>
            <Link to="/gallery" className="link-arrow">
              View All Events <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {eventHighlights.map((e) => (
              <article key={e.title} className="overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-glass">
                <img src={e.image} alt={e.title} loading="lazy" className="h-44 w-full object-cover" />
                <div className="p-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-softblue px-3 py-1 text-xs font-semibold text-ocean">
                    <Icon name="calendar" className="h-3.5 w-3.5" />
                    {e.date}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-heading">{e.title}</h3>
                  <p className="mt-1 text-sm text-body">{e.text}</p>
                  <Link to="/gallery" className="link-arrow mt-3 text-sm">
                    View Photos <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo albums + spotlight */}
      <section className="container-page py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">Photo Albums</h2>
              <Link to="/gallery" className="link-arrow text-sm">
                View All Albums <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {photoAlbums.map((a) => (
                <div key={a.title} className="group overflow-hidden rounded-2xl border border-line">
                  <div className="relative">
                    <img src={a.image} alt={a.title} loading="lazy" className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-ocean">
                      {a.count}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-heading">{a.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-line shadow-card">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
              alt="Children whose lives were transformed"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ocean/90 to-ocean/50" />
            <div className="relative z-10 flex h-full flex-col justify-center p-8 text-white">
              <span className="eyebrow !text-mint mb-2">
                <Icon name="sparkle" className="h-4 w-4" />
                Spotlight Story
              </span>
              <h3 className="max-w-xs font-serif text-2xl font-bold md:text-3xl">
                Transforming Lives Through Compassion
              </h3>
              <p className="mt-3 max-w-sm text-sm text-white/85">
                Watch how your support is creating real impact and bringing hope to communities.
              </p>
              <button
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ocean transition-colors hover:bg-softblue"
                aria-label="Watch spotlight video"
              >
                <Icon name="play" className="h-4 w-4" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Be a Part of the Change */}
      <section className="container-page pb-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-seafoam p-8 shadow-soft">
          <LeafBranch className="absolute -left-2 bottom-0 h-44 w-28 opacity-50" />
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-softgreen shadow-soft">
                <Icon name="heart" className="h-7 w-7" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-heading">Be a Part of the Change</h2>
                <p className="mt-2 max-w-md text-body">
                  Your support can bring hope, create opportunities, and transform lives. Together, we
                  can build a kinder and stronger society.
                </p>
                <Button onClick={openDonation} className="mt-4" aria-label="Open donation form">
                  Get Involved Today
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {helpCards.map((c) => (
                <Link
                  key={c.title}
                  to={c.to}
                  className="rounded-2xl border border-line bg-white p-4 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-glass"
                >
                  <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-softblue text-ocean">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-bold text-heading">{c.title}</h3>
                  <p className="mt-0.5 text-xs text-muted">{c.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
