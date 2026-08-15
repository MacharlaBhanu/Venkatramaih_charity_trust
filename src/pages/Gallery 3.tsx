import { useEffect, useRef, useState } from 'react';
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
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';
import GalleryImage from '../components/gallery/GalleryImage';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import { useDonation } from '../context/DonationContext';
import { actionItems, homeGalleryCategories, homeGalleryItems } from '../data/galleryData';
import type { GalleryIconKey, GalleryItem, HomeGalleryCategoryKey } from '../data/galleryData';

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
const galleryCategoryOrder: Exclude<HomeGalleryCategoryKey, 'All'>[] = [
  'Education',
  'Food Donation',
  'Healthcare',
  'School Infrastructure',
  'Community',
];

export default function Gallery() {
  const { openDonation } = useDonation();
  const [activeCategory, setActiveCategory] = useState<HomeGalleryCategoryKey>('All');
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const lightboxHistoryEntry = useRef(false);

  const activeItems = activeCategory === 'All'
    ? homeGalleryItems
    : homeGalleryItems.filter((item) => item.category === activeCategory);
  const visibleCategories = activeCategory === 'All'
    ? galleryCategoryOrder
    : [activeCategory];
  const visibleGroups = visibleCategories.map((category) => ({
    category,
    items: homeGalleryItems.filter((item) => item.category === category),
  }));

  useEffect(() => {
    const handlePopState = () => {
      if (!lightboxHistoryEntry.current) return;
      lightboxHistoryEntry.current = false;
      setLightboxId(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const selectCategory = (category: HomeGalleryCategoryKey) => {
    setActiveCategory(category);
    setLightboxId(null);
  };

  const openImage = (item: GalleryItem) => {
    if (!lightboxHistoryEntry.current) {
      window.history.pushState({ ...window.history.state, galleryLightbox: true }, '');
      lightboxHistoryEntry.current = true;
    }
    setLightboxId(item.id);
  };

  const closeImage = () => {
    setLightboxId(null);
    if (!lightboxHistoryEntry.current) return;
    lightboxHistoryEntry.current = false;
    window.history.back();
  };

  return (
    <>
      <SEO
        title="Gallery | Kanneganti Venkatramaiah Charitable Trust"
        description="Explore five meaningful areas of service through photographs from Kanneganti Venkatramaiah Charitable Trust."
        path="/gallery"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
      />

      <div className="gallery-editorial overflow-x-hidden bg-[#F4F0E8]">
        <style>{`
          @keyframes gallery-breathe { 0%, 100% { opacity: .38; transform: scale(1); } 50% { opacity: .58; transform: scale(1.045); } }
          @keyframes gallery-rise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
          @keyframes gallery-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          @keyframes gallery-lightbox-in { from { opacity: 0; } to { opacity: 1; } }
          @keyframes gallery-image-in { from { opacity: 0; transform: scale(.97); } to { opacity: 1; transform: scale(1); } }

          .gallery-grain {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          }
          .gallery-index-row .gallery-index-rule { transition: width .5s cubic-bezier(.22,1,.36,1); }
          .gallery-index-row:hover .gallery-index-rule { width: 100%; }

          @media (prefers-reduced-motion: no-preference) {
            .gallery-breathe { animation: gallery-breathe 8s ease-in-out infinite; }
            .gallery-rise > * { animation: gallery-rise .9s cubic-bezier(.22,1,.36,1) both; }
            .gallery-rise > *:nth-child(2) { animation-delay: .08s; }
            .gallery-rise > *:nth-child(3) { animation-delay: .16s; }
            .gallery-rise > *:nth-child(4) { animation-delay: .24s; }
            .gallery-rise > *:nth-child(5) { animation-delay: .32s; }
            .gallery-rise-late { animation: gallery-rise 1s cubic-bezier(.22,1,.36,1) .28s both; }
            .gallery-draw { transform-origin: left; animation: gallery-draw 1.1s cubic-bezier(.22,1,.36,1) .45s both; }
            .gallery-lightbox { animation: gallery-lightbox-in .25s ease both; }
            .gallery-lightbox-image { animation: gallery-image-in .42s cubic-bezier(.22,1,.36,1) both; }
            .gallery-feature img { transform: scale(1.02); }
            .gallery-feature.page-motion-visible img { transform: scale(1); }
          }
        `}</style>

        <section className="relative isolate overflow-hidden bg-[#082F49] text-white">
          <div className="gallery-breathe pointer-events-none absolute -right-24 -top-40 h-[480px] w-[480px] rounded-full bg-[#2B8791]/35 blur-[110px]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:radial-gradient(110%_95%_at_18%_10%,#000_0%,transparent_72%)]" aria-hidden="true" />
          <div className="gallery-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(125%_105%_at_50%_115%,rgba(3,18,28,.5),transparent_58%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(215,173,111,.7)_35%,rgba(146,229,208,.45)_65%,transparent)]" aria-hidden="true" />
          <span className="pointer-events-none absolute left-8 top-8 hidden h-12 w-12 border-l border-t border-[#D7AD6F]/30 lg:block" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-8 right-8 hidden h-12 w-12 border-b border-r border-[#D7AD6F]/30 lg:block" aria-hidden="true" />

          <div className={`${contentWrapper} relative z-10 grid min-h-[360px] items-end gap-0 pb-11 pt-10 sm:min-h-[500px] sm:gap-10 sm:pb-16 sm:pt-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)] lg:items-center lg:gap-16 lg:py-24`}>
            <div className="gallery-rise">
              <p className="text-[11px] text-white/75">Gallery</p>
              <p className="mt-5 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.26em] text-[#92E5D0] sm:mt-7 sm:text-[11px] sm:tracking-[0.3em]">
                <span className="h-px w-10 bg-[#D7AD6F]" /> A visual archive of care
              </p>
              <h1 className="mt-4 max-w-[820px] font-serif text-[48px] font-bold leading-[0.94] tracking-[-0.045em] text-white sm:mt-5 sm:text-[74px] lg:text-[94px]">
                Gallery<span className="text-[#92E5D0]">.</span>
                <span className="gallery-draw mt-5 block h-px w-24 origin-left bg-[linear-gradient(90deg,#D7AD6F,rgba(215,173,111,0))] sm:mt-6 sm:w-36" aria-hidden="true" />
              </h1>
              <p className="mt-5 font-serif text-[20px] italic leading-snug text-[#92E5D0] sm:mt-6 sm:text-[28px]">Moments that stay with us.</p>
              <p className="mt-4 max-w-[590px] text-[13px] leading-[1.7] text-white/[0.68] sm:mt-7 sm:text-[15px] sm:leading-[1.8]">
                A thoughtful collection of people, programmes, and everyday acts of compassion—captured across the communities we serve.
              </p>
            </div>

            <aside className="gallery-rise-late hidden border-t border-white/15 pt-7 sm:block lg:mb-2 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
              <div className="flex items-end gap-3">
                <span className="font-serif text-[56px] italic leading-[0.8] text-white/[0.1] sm:text-[76px]">05</span>
                <p className="pb-1.5 text-[9.5px] font-bold uppercase leading-[1.5] tracking-[0.26em] text-[#D7AD6F] sm:text-[10px]">Areas of<br />meaningful work</p>
              </div>
              <ul className="mt-6 space-y-0.5">
                {galleryCategoryOrder.map((category, index) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => selectCategory(category)}
                      aria-label={`Show ${category} photograph`}
                      className="gallery-index-row group flex w-full items-center gap-3 border-b border-white/10 py-2.5 text-left transition-colors duration-300 hover:border-[#D7AD6F]/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#92E5D0]"
                    >
                      <span className="font-serif text-[12px] italic text-[#92E5D0]">0{index + 1}</span>
                      <span className="min-w-0 flex-1 truncate text-[12.5px] text-white/[0.62] transition-colors duration-300 group-hover:text-white">{category}</span>
                      <span className="gallery-index-rule h-px w-0 bg-[#D7AD6F]/50 max-sm:hidden" aria-hidden="true" />
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-[#D7AD6F] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" strokeWidth={2} aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <main className="relative">
          <nav className="border-b border-[#CEC7BB] bg-[#FBF9F4]" aria-label="Gallery categories">
            <div className={`${contentWrapper} no-scrollbar flex snap-x overflow-x-auto`}>
              {homeGalleryCategories.map((category) => {
                const isActive = category.label === activeCategory;
                return (
                  <button
                    key={category.label}
                    type="button"
                    onClick={() => selectCategory(category.label)}
                    aria-pressed={isActive}
                    className={`group relative flex h-[58px] shrink-0 snap-start items-center gap-2 px-4 text-[9px] font-bold uppercase tracking-[0.13em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#338D81] sm:h-[78px] sm:flex-1 sm:justify-center sm:px-3 sm:text-[10px] ${isActive ? 'text-[#338D81]' : 'text-[#68787D] hover:text-[#082F49]'}`}
                  >
                    {category.label}
                    <span className={`absolute inset-x-3 bottom-0 h-[2px] origin-left bg-[linear-gradient(90deg,#D7AD6F,#92E5D0)] transition-transform duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </nav>

          <div className={`${contentWrapper} pb-12 pt-6 sm:pb-20 sm:pt-10`}>
            {visibleGroups.map(({ category, items }, groupIndex) => {
              const headingId = `gallery-${category.toLowerCase().replace(/\s+/g, '-')}`;
              const categoryNumber = galleryCategoryOrder.indexOf(category) + 1;

              return (
                <section
                  key={category}
                  className="border-b border-[#CEC7BB] py-7 first:pt-0 last:border-b-0 sm:py-12"
                  aria-labelledby={headingId}
                >
                  <div className="mb-4 flex flex-col items-start gap-1.5 sm:mb-7 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-[14px] italic text-[#D19B58]">{String(categoryNumber).padStart(2, '0')}</span>
                      <h2 id={headingId} className="font-serif text-[27px] font-bold leading-tight text-[#082F49] sm:text-[38px]">{category}</h2>
                    </div>
                    <span className="ml-[31px] text-[8px] font-bold uppercase tracking-[0.22em] text-[#338D81] sm:ml-0 sm:text-[9px]">Two moments · Swipe</span>
                  </div>

                  <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0">
                    {items.map((item, itemIndex) => (
                      <figure key={item.id} className="w-[82vw] max-w-[430px] shrink-0 snap-center sm:w-auto sm:max-w-none">
                        <GalleryImage
                          item={item}
                          variant="pure"
                          onOpen={openImage}
                          indexLabel={`0${itemIndex + 1} / 02`}
                          eager={groupIndex === 0 && itemIndex === 0}
                          className="aspect-[16/10] rounded-[22px] sm:rounded-[26px]"
                          imageClassName="object-center"
                        />
                        <figcaption className="mt-3 flex min-w-0 items-center gap-3 border-l-2 border-[#D7AD6F] pl-3 text-[11px] leading-5 text-[#607078] sm:text-[12px]">
                          <span className="shrink-0 font-serif italic text-[#338D81]">0{itemIndex + 1}</span>
                          <span className="truncate" title={item.description}>{item.description}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <section className={`${contentWrapper} pb-10`}>
            <div className="relative min-h-[142px] overflow-hidden rounded-[14px] border border-[#B9E2D9] bg-[linear-gradient(90deg,#EAF9F4_0%,#F7FCFA_19%,#FFFFFF_42%,#FFFFFF_76%,#F2FBF8_100%)] px-5 py-7 shadow-[0_12px_34px_rgba(18,58,90,0.06)] sm:px-8 lg:px-9 lg:py-5">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[260px] bg-[radial-gradient(ellipse_at_left,rgba(184,235,220,0.52)_0%,rgba(223,248,239,0.2)_55%,transparent_78%)]" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[230px] bg-[radial-gradient(ellipse_at_right,rgba(223,248,239,0.42)_0%,transparent_72%)]" aria-hidden="true" />
              <img src="/assets/gallery/cta-leaf-left-transparent.png" alt="" aria-hidden="true" decoding="async" className="pointer-events-none absolute bottom-[-5px] left-0 w-[128px] opacity-75 md:w-[154px]" />
              <img src="/assets/gallery/cta-leaf-right-transparent.png" alt="" aria-hidden="true" decoding="async" className="pointer-events-none absolute bottom-[-4px] right-0 w-[132px] opacity-70 md:w-[158px]" />
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

      {lightboxId && (
        <GalleryLightbox
          items={activeItems}
          activeId={lightboxId}
          onChange={setLightboxId}
          onClose={closeImage}
        />
      )}
    </>
  );
}
