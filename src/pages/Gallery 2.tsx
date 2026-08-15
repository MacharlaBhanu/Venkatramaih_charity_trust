import { Fragment, useState } from 'react';
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
import { actionItems, categories, galleryItems } from '../data/galleryData';
import type { GalleryCategoryKey, GalleryIconKey, GalleryItem } from '../data/galleryData';

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

const categoryMessages: Record<Exclude<GalleryCategoryKey, 'All'>, string> = {
  Education: 'Learning that opens doors.',
  Healthcare: 'Care that reaches people where they are.',
  Empowerment: 'Confidence shaped through opportunity.',
  'Community Welfare': 'Strength found in standing together.',
  Events: 'Shared days that bring a community closer.',
  Stories: 'Lives moving forward with dignity and hope.',
};

const uniqueByImage = (items: GalleryItem[]) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.image)) return false;
    seen.add(item.image);
    return true;
  });
};

interface EditorialCollectionProps {
  category: Exclude<GalleryCategoryKey, 'All'>;
  categoryIndex: number;
  items: GalleryItem[];
  onOpen: (item: GalleryItem) => void;
}

function EditorialCollection({ category, categoryIndex, items, onOpen }: EditorialCollectionProps) {
  const categoryMeta = categories.find((item) => item.label === category);
  const CategoryIcon = galleryIcons[categoryMeta?.icon ?? 'grid'];
  const composition = categoryIndex % 3;
  const first = items[0];
  const second = items[1];

  const firstClasses = composition === 0
    ? 'w-[94%] lg:col-span-8 lg:w-full'
    : composition === 1
      ? 'w-[88%] lg:col-span-4 lg:w-full'
      : 'ml-auto w-[88%] lg:col-span-5 lg:mt-24 lg:w-full';
  const secondClasses = composition === 0
    ? 'ml-auto w-[84%] lg:col-span-4 lg:mt-28 lg:w-full'
    : composition === 1
      ? 'ml-auto w-[94%] lg:col-span-8 lg:mt-20 lg:w-full'
      : 'w-[94%] lg:col-span-7 lg:w-full';
  const firstAspect = composition === 0 ? 'aspect-[16/10]' : composition === 1 ? 'aspect-[4/5]' : 'aspect-square';
  const secondAspect = composition === 0 ? 'aspect-[3/4]' : composition === 1 ? 'aspect-[16/9]' : 'aspect-[21/11]';
  const firstVariant = composition === 1 ? 'editorial' : 'pure';
  const secondVariant = composition === 1 ? 'cinematic' : 'editorial';

  return (
    <section className={`gallery-collection ${composition === 2 ? 'gallery-edge-right' : ''}`} aria-labelledby={`gallery-${categoryIndex}`}>
      <div className="mb-9 grid gap-5 sm:mb-12 sm:grid-cols-[auto_minmax(220px,1fr)_auto] sm:items-end sm:gap-7">
        <div className="flex items-end gap-4">
          <span className="font-serif text-[44px] italic leading-none text-[#D7AD6F] sm:text-[58px]">0{categoryIndex + 1}</span>
          <div className="pb-1">
            <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#338D81]">Collection {String(categoryIndex + 1).padStart(2, '0')}</p>
            <h2 id={`gallery-${categoryIndex}`} className="mt-1 font-serif text-[29px] font-bold leading-none text-[#082F49] sm:text-[36px]">{category}</h2>
          </div>
        </div>
        <div className="hidden items-center gap-4 pb-2 sm:flex">
          <span className="h-px flex-1 bg-[#CEC7BB]" />
          <span className="max-w-[245px] text-[11px] italic text-[#68787D]">{categoryMessages[category]}</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#7C898D] sm:pb-2">
          <CategoryIcon className="h-4 w-4 text-[#338D81]" strokeWidth={1.6} />
          {String(items.length).padStart(2, '0')} photographs
        </div>
      </div>

      <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-6 xl:gap-8">
        {first && (
          <div className={firstClasses}>
            <GalleryImage
              item={first}
              variant={firstVariant}
              onOpen={onOpen}
              indexLabel={`0${categoryIndex + 1}.1`}
              className={firstAspect}
              imageClassName={composition === 1 ? 'object-[52%_center]' : 'object-center'}
            />
          </div>
        )}
        {second && (
          <div className={secondClasses}>
            <GalleryImage
              item={second}
              variant={secondVariant}
              onOpen={onOpen}
              indexLabel={`0${categoryIndex + 1}.2`}
              className={secondAspect}
              imageClassName="object-center"
            />
          </div>
        )}
      </div>
    </section>
  );
}

interface EditorialQuoteProps {
  label: string;
  lines: string[];
  accentIndex: number;
  leaves?: boolean;
}

function EditorialQuote({ label, lines, accentIndex, leaves = false }: EditorialQuoteProps) {
  return (
    <section className="relative isolate overflow-hidden py-10 sm:py-20">
      {leaves && (
        <img
          src="/assets/gallery/cta-leaf-right-transparent.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="leaf-blend pointer-events-none absolute -right-16 bottom-0 -z-10 w-[210px] rotate-[-5deg] opacity-[0.16] sm:-right-10 sm:w-[340px]"
        />
      )}
      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#338D81]">{label}</p>
      <div className="mt-5 font-serif text-[48px] font-bold leading-[0.85] tracking-[-0.055em] text-[#082F49] sm:text-[82px] lg:text-[104px]">
        {lines.map((line, index) => (
          <span key={line} className={`block ${index === accentIndex ? 'italic text-[#338D81]' : ''}`}>{line}</span>
        ))}
      </div>
    </section>
  );
}

interface GalleryFilmstripProps {
  items: GalleryItem[];
  onOpen: (item: GalleryItem) => void;
}

function GalleryFilmstrip({ items, onOpen }: GalleryFilmstripProps) {
  const stripItems = items.slice(0, 7);
  const widths = ['w-[72vw] sm:w-[420px]', 'w-[56vw] sm:w-[285px]', 'w-[82vw] sm:w-[520px]', 'w-[62vw] sm:w-[340px]', 'w-[76vw] sm:w-[450px]'];
  const aspects = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-[16/10]', 'aspect-square', 'aspect-[5/4]'];

  return (
    <section className="gallery-filmstrip border-y border-[#CEC7BB] bg-[#FBF9F4] py-14 sm:py-20">
      <div className={contentWrapper}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#338D81]">A shared journey</p>
            <h2 className="mt-2 font-serif text-[34px] font-bold text-[#082F49] sm:text-[45px]">Across Our Communities</h2>
          </div>
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#7C898D]">Drag to explore <ArrowRight className="h-4 w-4 text-[#D7AD6F]" /></p>
        </div>
      </div>

      <div className="no-scrollbar mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8 lg:px-[max(3rem,calc((100vw-1360px)/2+4rem))]">
        {stripItems.map((item, index) => (
          <div key={`${item.id}-strip`} className={`shrink-0 snap-center ${widths[index % widths.length]}`}>
            <GalleryImage
              item={item}
              variant="pure"
              onOpen={onOpen}
              className={`${aspects[index % aspects.length]} rounded-[20px] shadow-none`}
              imageClassName="object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Gallery() {
  const { openDonation } = useDonation();
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryKey>('All');
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const activeItems = activeCategory === 'All'
    ? uniqueByImage(galleryItems)
    : uniqueByImage(galleryItems.filter((item) => item.category === activeCategory));
  const featureItem = activeItems[0];
  const visibleCategories = activeCategory === 'All' ? galleryCategoryOrder : [activeCategory];
  const filmstripIndex = Math.min(2, visibleCategories.length - 1);

  const selectCategory = (category: GalleryCategoryKey) => {
    setActiveCategory(category);
    setLightboxId(null);
  };

  const openImage = (item: GalleryItem) => setLightboxId(item.id);

  return (
    <>
      <SEO
        title="Gallery | Kanneganti Venkatramaiah Charitable Trust"
        description="Explore moments of compassion, initiative highlights, events, and stories from Kanneganti Venkatramaiah Charitable Trust."
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
          .gallery-photo-button { --gallery-cursor-x: 50%; --gallery-cursor-y: 50%; }
          .gallery-view-cursor {
            left: var(--gallery-cursor-x);
            top: var(--gallery-cursor-y);
            opacity: 0;
            transform: translate(-50%, -50%) scale(.72);
            transition: opacity .22s ease, transform .3s cubic-bezier(.22,1,.36,1);
          }
          .gallery-photo-button:hover .gallery-view-cursor { opacity: 1; transform: translate(-50%, -50%) scale(1); }

          @media (hover: hover) and (pointer: fine) {
            .gallery-photo-button { cursor: none; }
            .gallery-photo-button-standard { cursor: pointer; }
          }
          @media (hover: none), (pointer: coarse) { .gallery-view-cursor { display: none !important; } }

          @media (min-width: 1024px) {
            .gallery-edge-right { width: calc(100% + max(3rem, (100vw - 1360px) / 2)); }
          }

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
            .gallery-feature img { transform: scale(1.025); }
            .gallery-feature.page-motion-visible img { transform: scale(1); }
          }

          @media (prefers-reduced-motion: reduce) {
            .gallery-view-cursor { display: none !important; }
            .gallery-photo-button { cursor: pointer !important; }
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

          <div className={`${contentWrapper} relative z-10 grid min-h-[440px] items-end gap-10 pb-14 pt-14 sm:min-h-[500px] sm:pb-16 sm:pt-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)] lg:items-center lg:gap-16 lg:py-24`}>
            <div className="gallery-rise">
              <p className="text-[11px] text-white/75">Gallery</p>
              <p className="mt-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#92E5D0] sm:text-[11px]">
                <span className="h-px w-10 bg-[#D7AD6F]" /> A visual archive of care
              </p>
              <h1 className="mt-5 max-w-[820px] font-serif text-[54px] font-bold leading-[0.94] tracking-[-0.045em] text-white sm:text-[74px] lg:text-[94px]">
                Gallery<span className="text-[#92E5D0]">.</span>
                <span className="gallery-draw mt-6 block h-px w-24 origin-left bg-[linear-gradient(90deg,#D7AD6F,rgba(215,173,111,0))] sm:w-36" aria-hidden="true" />
              </h1>
              <p className="mt-6 font-serif text-[22px] italic leading-snug text-[#92E5D0] sm:text-[28px]">Moments that stay with us.</p>
              <p className="mt-6 max-w-[590px] text-[14px] leading-[1.8] text-white/[0.68] sm:mt-7 sm:text-[15px]">
                A thoughtful collection of people, programmes, and everyday acts of compassion—captured across the communities we serve.
              </p>
            </div>

            <aside className="gallery-rise-late border-t border-white/15 pt-7 lg:mb-2 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
              <div className="flex items-end gap-3">
                <span className="font-serif text-[56px] italic leading-[0.8] text-white/[0.1] sm:text-[76px]">06</span>
                <p className="pb-1.5 text-[9.5px] font-bold uppercase leading-[1.5] tracking-[0.26em] text-[#D7AD6F] sm:text-[10px]">Areas of<br />meaningful work</p>
              </div>
              <ul className="mt-6 space-y-0.5">
                {galleryCategoryOrder.map((category, index) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => selectCategory(category)}
                      aria-label={`Show ${category} photographs`}
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
              {categories.map((category, index) => {
                const isActive = category.label === activeCategory;
                return (
                  <button
                    key={category.label}
                    type="button"
                    onClick={() => selectCategory(category.label)}
                    aria-pressed={isActive}
                    className={`group relative flex h-[72px] shrink-0 snap-start items-center gap-2 px-4 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#338D81] sm:h-[82px] sm:flex-1 sm:justify-center sm:px-3 ${isActive ? 'text-[#338D81]' : 'text-[#68787D] hover:text-[#082F49]'}`}
                  >
                    <span className={`font-serif text-[12px] italic tracking-normal ${isActive ? 'text-[#D7AD6F]' : 'text-[#A69D8F]'}`}>{String(index + 1).padStart(2, '0')}</span>
                    {category.label}
                    <span className={`absolute inset-x-3 bottom-0 h-[2px] origin-left bg-[linear-gradient(90deg,#D7AD6F,#92E5D0)] transition-transform duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </nav>

          {featureItem && (
            <section className={`${contentWrapper} gallery-feature pb-16 pt-10 sm:pb-24 sm:pt-14`}>
              <GalleryImage
                item={featureItem}
                variant="cinematic"
                onOpen={openImage}
                indexLabel={`01 / ${String(activeItems.length).padStart(2, '0')}`}
                eager
                className="h-[60vh] min-h-[440px] rounded-[24px] sm:h-[76vh] sm:min-h-[620px] sm:rounded-[32px]"
                imageClassName="object-center transition-transform duration-[1200ms]"
              />
            </section>
          )}

          <div className={`${contentWrapper} space-y-24 pb-20 sm:space-y-36 sm:pb-28`} aria-live="polite">
            {visibleCategories.map((category, categoryIndex) => {
              const uniqueCategoryItems = uniqueByImage(galleryItems.filter((item) => item.category === category));
              const collectionItems = uniqueCategoryItems.filter((item) => item.id !== featureItem?.id).slice(0, 2);
              const fallbackItems = collectionItems.length >= 2 ? collectionItems : uniqueCategoryItems.slice(0, 2);

              return (
                <Fragment key={category}>
                  <EditorialCollection category={category} categoryIndex={galleryCategoryOrder.indexOf(category)} items={fallbackItems} onOpen={openImage} />

                  {activeCategory === 'All' && categoryIndex === 0 && (
                    <EditorialQuote label="Through their eyes" lines={['EVERY', 'MOMENT', 'MATTERS.']} accentIndex={1} leaves />
                  )}

                  {categoryIndex === filmstripIndex && (
                    <div className="relative left-1/2 w-screen -translate-x-1/2">
                      <GalleryFilmstrip items={activeItems} onOpen={openImage} />
                    </div>
                  )}

                  {activeCategory === 'All' && categoryIndex === 3 && (
                    <EditorialQuote label="Our story" lines={['SMALL ACTS.', 'LASTING', 'CHANGE.']} accentIndex={2} />
                  )}
                </Fragment>
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
          onClose={() => setLightboxId(null)}
        />
      )}
    </>
  );
}
