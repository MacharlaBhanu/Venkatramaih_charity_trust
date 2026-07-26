import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  CalendarDays,
  Grid3X3,
  HandHeart,
  Handshake,
  Heart,
  HeartPulse,
  Megaphone,
  Play,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';
import EventHighlightCard from '../components/EventHighlightCard';
import GalleryCard from '../components/GalleryCard';
import PhotoAlbumCard from '../components/PhotoAlbumCard';
import { useDonation } from '../context/DonationContext';
import {
  actionItems,
  albums,
  categories,
  eventHighlights,
  galleryAssets,
  galleryItems,
} from '../data/galleryData';
import type { GalleryCategoryKey, GalleryIconKey } from '../data/galleryData';

const galleryIcons: Record<GalleryIconKey, LucideIcon> = {
  grid: Grid3X3,
  education: BookOpen,
  healthcare: HeartPulse,
  empowerment: Sparkles,
  community: UsersRound,
  events: CalendarDays,
  stories: BookOpenCheck,
  volunteer: HandHeart,
  donate: Heart,
  partner: Handshake,
  spread: Megaphone,
};

const contentWrapper = 'mx-auto w-full max-w-[1360px] px-5 md:px-8 lg:px-12 xl:px-16';
const galleryCategoryOrder: Exclude<GalleryCategoryKey, 'All'>[] = [
  'Education',
  'Healthcare',
  'Empowerment',
  'Community Welfare',
  'Events',
  'Stories',
];

export default function Gallery() {
  const { openDonation } = useDonation();
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryKey>('All');

  const filteredItems = activeCategory === 'All'
    ? [0, 1, 2].flatMap((position) => galleryCategoryOrder.flatMap((category) => {
        const item = galleryItems.filter((galleryItem) => galleryItem.category === category)[position];
        return item ? [item] : [];
      }))
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Gallery | Kanneganti Venkataramaiah Charitable Trust"
        description="Explore moments of compassion, initiative highlights, events, stories, and photo albums from Kanneganti Venkataramaiah Charitable Trust."
        path="/gallery"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
      />

      <div className="overflow-x-hidden bg-page">
        <section className="relative min-h-[270px] overflow-hidden border-b border-line bg-[linear-gradient(90deg,#F7FBFF_0%,#EEF8FF_100%)] md:h-[282px]">
          <img
            src={galleryAssets.ctaLeafLeft}
            alt=""
            aria-hidden="true"
            className="leaf-blend pointer-events-none absolute -bottom-16 -left-5 h-[250px] w-auto opacity-40"
          />

          <div className="absolute inset-y-0 right-0 w-[58%] sm:w-[52%] lg:w-[47%]">
            <img
              src={galleryAssets.hero}
              alt="Hands nurturing a young sapling"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#F7FBFF_0%,rgba(247,251,255,0.85)_35%,transparent_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#EEF8FF_0%,rgba(238,248,255,0.75)_35%,transparent_100%)]" />
          </div>

          <div className={`${contentWrapper} relative z-10 flex h-full min-h-[270px] flex-col items-center justify-center py-8 text-center md:min-h-0`}>
            <nav className="mb-2 flex items-center gap-2 text-[12px]" aria-label="Breadcrumb">
              <Link to="/" className="font-medium text-ocean transition-colors hover:text-sky">Home</Link>
              <span className="text-muted" aria-hidden="true">/</span>
              <span className="text-body">Gallery</span>
            </nav>
            <h1 className="font-serif text-[38px] font-bold leading-none text-heading sm:text-[46px] lg:text-[60px]">Gallery</h1>
            <div className="mt-3 flex items-center justify-center gap-2 text-sky" aria-hidden="true">
              <span className="h-px w-7 bg-line" />
              <Heart className="h-4 w-4 fill-sky" strokeWidth={1.4} />
              <span className="h-px w-7 bg-line" />
            </div>
            <p className="mt-2 max-w-full rounded-2xl border border-white/80 bg-white/55 px-4 py-2 text-[13px] font-semibold leading-snug text-heading shadow-[0_6px_18px_rgba(18,58,90,0.04)] backdrop-blur-sm sm:rounded-full sm:text-[14px]">Moments of compassion. Stories of change.</p>
            <p className="mt-2 max-w-[520px] text-[13px] leading-[1.55] text-body">
              Explore glimpses of our initiatives, events, and everyday acts of kindness that are creating a better tomorrow.
            </p>
          </div>
        </section>

        <main className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FBFE_16%,#EEF8FF_52%,#F8FCFF_100%)]">
          <div className="pointer-events-none absolute left-[-180px] top-[280px] h-[520px] w-[520px] rounded-full bg-seafoam/45 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute right-[-220px] top-[780px] h-[560px] w-[560px] rounded-full bg-softblue/70 blur-3xl" aria-hidden="true" />

          <section className={`${contentWrapper} relative z-10 pt-7`}>
            <div className="grid grid-cols-2 gap-2 rounded-[18px] border border-white/90 bg-white/72 p-2 shadow-[0_16px_42px_rgba(18,58,90,0.07)] ring-1 ring-line/70 backdrop-blur-xl sm:no-scrollbar sm:flex sm:gap-1.5 sm:overflow-x-auto sm:rounded-[16px] sm:p-1.5 xl:grid xl:grid-cols-7 xl:overflow-visible" aria-label="Gallery categories">
              {categories.map((category) => {
                const CategoryIcon = galleryIcons[category.icon];
                const isActive = category.label === activeCategory;
                const itemCount = category.label === 'All'
                  ? galleryItems.length
                  : galleryItems.filter((item) => item.category === category.label).length;

                return (
                  <button
                    key={category.label}
                    type="button"
                    onClick={() => setActiveCategory(category.label)}
                    aria-pressed={isActive}
                    className={`group flex h-11 min-w-0 items-center justify-center gap-2 rounded-[12px] border px-2 text-[11px] font-semibold whitespace-nowrap transition-all duration-300 sm:h-[48px] sm:shrink-0 sm:rounded-[11px] sm:px-4 xl:min-w-0 xl:px-2 xl:text-[12px] ${
                      category.label === 'All' ? 'col-span-2 sm:col-span-1' : ''
                    } ${
                      isActive
                        ? 'border-[#1689C7] bg-[linear-gradient(135deg,#1689C7_0%,#35AEDB_100%)] text-white shadow-[0_9px_22px_rgba(22,137,199,0.22)]'
                        : 'border-line/70 bg-white/65 text-body hover:border-line/80 hover:bg-white/90 hover:text-ocean hover:shadow-[0_7px_18px_rgba(18,58,90,0.06)] sm:border-transparent sm:bg-transparent'
                    }`}
                  >
                    <CategoryIcon className={`h-[17px] w-[17px] shrink-0 ${isActive ? 'text-white' : 'text-softgreen transition-colors group-hover:text-ocean'}`} strokeWidth={1.8} />
                    <span>{category.label}</span>
                    <span className={`flex h-[20px] min-w-[20px] shrink-0 items-center justify-center rounded-full px-1.5 text-[9px] font-bold ${isActive ? 'bg-white/18 text-white' : 'bg-softblue/65 text-muted'}`}>{itemCount}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className={`${contentWrapper} relative z-10 pb-10 pt-9 sm:pt-10`}>
            <div className="mb-7 grid gap-5 sm:mb-8 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-end lg:gap-12">
              <div className="relative pl-5 sm:pl-6">
                <span className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-[linear-gradient(180deg,#6BCDB6,#1689C7)]" aria-hidden="true" />
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#349C8D] sm:text-[11px]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-seafoam/80 ring-1 ring-[#B9E2D9]">
                    <Sparkles className="h-3.5 w-3.5" strokeWidth={1.9} />
                  </span>
                  Moments that matter
                </p>
                <h2 className="mt-2 text-[30px] font-bold leading-[1.08] tracking-[-0.02em] text-heading sm:text-[36px] lg:text-[39px]">
                  {activeCategory === 'All' ? 'Every story, in one place' : `${activeCategory} in action`}
                </h2>
              </div>
              <div className="border-l border-line/90 pl-5 sm:pl-6 lg:mb-0.5 lg:pl-8">
                <p className="max-w-[430px] text-[12px] leading-[1.7] text-body sm:text-[13px]">
                  {activeCategory === 'All'
                    ? 'Explore the people, programmes, and shared moments behind our work across every community.'
                    : `${filteredItems.length} moments of meaningful work, captured with the people at the heart of it.`}
                </p>
                <span className="mt-3 block h-px w-12 bg-softgreen/70" aria-hidden="true" />
              </div>
            </div>

            <div className={`grid auto-rows-[270px] gap-4 min-[420px]:grid-cols-2 min-[420px]:auto-rows-[240px] sm:grid-cols-2 sm:auto-rows-[270px] lg:grid-cols-3 ${activeCategory === 'All' ? 'xl:grid-cols-4' : 'mx-auto max-w-[1040px]'}`}>
              {filteredItems.map((item, index) => {
                const isFeatured = activeCategory === 'All' && (index === 0 || index === 9);

                return (
                  <div
                    key={item.id}
                    className={isFeatured ? 'min-[420px]:col-span-2 min-[420px]:row-span-2' : ''}
                  >
                    <GalleryCard
                      item={item}
                      icon={galleryIcons[item.icon]}
                      variant="editorial"
                      featured={isFeatured}
                    />
                  </div>
                );
              })}
            </div>
          </section>

          <section className={`${contentWrapper} pb-7`}>
            <div className="relative overflow-hidden rounded-[16px] border border-line bg-[linear-gradient(110deg,#FFFFFF_0%,#F8FCFF_62%,#EEF8FF_100%)] p-5 shadow-[0_14px_36px_rgba(18,58,90,0.07)] sm:p-7 lg:px-8">
              <img src={galleryAssets.ctaLeafRight} alt="" aria-hidden="true" className="leaf-blend pointer-events-none absolute -bottom-24 right-1 h-[240px] w-auto opacity-[0.08]" />
              <div className="relative z-10 mb-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h2 className="text-[24px] font-bold text-heading">Event Highlights</h2>
                <Link to="/gallery" className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-ocean hover:text-sky">
                  View All Events <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative z-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {eventHighlights.map((event) => <EventHighlightCard key={event.title} event={event} />)}
              </div>
            </div>
          </section>

          <section className={`${contentWrapper} grid gap-6 pb-7 lg:grid-cols-[1fr_1.25fr]`}>
            <div className="rounded-[16px] border border-line bg-[linear-gradient(145deg,#FFFFFF_0%,#F9FCFF_100%)] p-5 shadow-[0_14px_36px_rgba(18,58,90,0.07)] sm:p-6">
              <div className="mb-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h2 className="text-[24px] font-bold text-heading">Photo Albums</h2>
                <Link to="/gallery" className="inline-flex shrink-0 items-center gap-2 text-[12px] font-semibold text-ocean hover:text-sky">
                  View All Albums <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {albums.map((album) => <PhotoAlbumCard key={album.title} album={album} />)}
              </div>
            </div>

            <div className="relative min-h-[280px] overflow-hidden rounded-[16px] border border-line bg-white shadow-[0_14px_36px_rgba(18,58,90,0.09)] transition-all duration-300 hover:border-sky/50 hover:shadow-[0_20px_44px_rgba(18,58,90,0.13)] sm:min-h-[250px] lg:h-[230px] lg:min-h-0">
              <img
                src={galleryAssets.spotlight}
                alt="A smiling schoolgirl with classmates"
                loading="lazy"
                decoding="async"
                className="absolute inset-y-0 right-0 h-full w-full object-cover object-center sm:w-[58%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.98)_42%,rgba(255,255,255,0.62)_62%,rgba(255,255,255,0.08)_100%)]" />
              <div className="relative z-10 flex h-full max-w-[600px] flex-col justify-center p-6 sm:w-[70%] lg:w-[64%] lg:p-6 xl:p-8">
                <p className="flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.08em] text-ocean">
                  <Sparkles className="h-4 w-4 text-softgreen" strokeWidth={1.8} />
                  Spotlight Story
                </p>
                <h2 className="mt-2 text-[28px] font-bold leading-[1.05] text-heading sm:text-[30px]">
                  <span className="block sm:whitespace-nowrap">Transforming Lives</span>
                  <span className="block sm:whitespace-nowrap">Through Compassion</span>
                </h2>
                <p className="mt-3 max-w-[360px] text-[13px] leading-[1.5] text-body">Watch how your support is creating real impact and bringing hope to communities.</p>
                <button type="button" className="mt-4 inline-flex h-[42px] w-fit items-center justify-center gap-2 rounded-[8px] bg-ocean px-5 text-[13px] font-semibold text-white shadow-soft transition-colors hover:bg-sky">
                  <Play className="h-4 w-4 fill-white" strokeWidth={1.8} />
                  Watch Video
                </button>
              </div>
            </div>
          </section>

          <section className={`${contentWrapper} pb-10`}>
            <div className="relative min-h-[142px] overflow-hidden rounded-[14px] border border-[#B9E2D9] bg-[linear-gradient(90deg,#EAF9F4_0%,#F7FCFA_19%,#FFFFFF_42%,#FFFFFF_76%,#F2FBF8_100%)] px-5 py-7 shadow-[0_12px_34px_rgba(18,58,90,0.06)] sm:px-8 lg:px-9 lg:py-5">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[260px] bg-[radial-gradient(ellipse_at_left,rgba(184,235,220,0.52)_0%,rgba(223,248,239,0.2)_55%,transparent_78%)]" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[230px] bg-[radial-gradient(ellipse_at_right,rgba(223,248,239,0.42)_0%,transparent_72%)]" aria-hidden="true" />
              <img
                src="/assets/gallery/cta-leaf-left-transparent.png"
                alt=""
                aria-hidden="true"
                decoding="async"
                className="pointer-events-none absolute bottom-[-5px] left-0 w-[128px] opacity-75 md:w-[154px]"
              />
              <img
                src="/assets/gallery/cta-leaf-right-transparent.png"
                alt=""
                aria-hidden="true"
                decoding="async"
                className="pointer-events-none absolute bottom-[-4px] right-0 w-[132px] opacity-70 md:w-[158px]"
              />
              <div className="relative z-10 grid items-center gap-7 lg:grid-cols-[42%_58%]">
                <div className="flex items-center gap-5 lg:pl-2">
                  <span className="hidden h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border-4 border-white/80 bg-white/80 text-softgreen shadow-[0_12px_30px_rgba(18,58,90,0.08)] sm:flex">
                    <HandHeart className="h-9 w-9" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h2 className="text-[25px] font-bold leading-tight text-[#267D72] lg:whitespace-nowrap lg:text-[23px] xl:text-[27px]">Be a Part of the Change</h2>
                    <p className="mt-1.5 max-w-[500px] text-[12px] leading-[1.5] text-body sm:text-[13px]">Your support can bring hope, create opportunities, and transform lives. Together, we can build a kinder and stronger society.</p>
                    <Link to="/get-involved" className="mt-3 inline-flex h-10 items-center gap-2 rounded-[8px] bg-ocean px-4 text-[12px] font-semibold text-white shadow-[0_9px_22px_rgba(22,137,199,0.2)] transition-all hover:-translate-y-0.5 hover:bg-sky sm:h-9">
                      Get Involved Today <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-4 sm:gap-y-0">
                  {actionItems.map((item, index) => {
                    const ActionIcon = galleryIcons[item.icon];
                    const content = (
                      <>
                        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white bg-white/85 text-ocean shadow-[0_8px_20px_rgba(18,58,90,0.07)] transition-transform duration-300 group-hover:-translate-y-0.5">
                          <ActionIcon className="h-[22px] w-[22px]" strokeWidth={1.8} />
                        </span>
                        <h3 className="mt-2 text-[13px] font-bold text-heading">{item.title}</h3>
                        <p className="mx-auto mt-1 max-w-[125px] text-[11px] leading-[1.35] text-body">{item.description}</p>
                      </>
                    );
                    const className = `group min-h-[104px] rounded-[10px] px-3 py-2 text-center transition-colors hover:bg-white/45 ${index > 0 ? 'sm:border-l sm:border-line' : ''}`;

                    return item.action === 'donate' ? (
                      <button key={item.title} type="button" onClick={openDonation} className={className}>{content}</button>
                    ) : (
                      <Link key={item.title} to={item.to ?? '/get-involved'} className={className}>{content}</Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
