import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
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
import { actionItems, homeGalleryItems } from '../data/galleryData';
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
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const lightboxHistoryEntry = useRef(false);

  const visibleGroups = galleryCategoryOrder.map((category) => ({
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

      {/* ponytail: clip, not hidden — overflow-x:hidden forces overflow-y:auto, which reserves a scrollbar gutter on mobile */}
      <div className="gallery-editorial overflow-x-clip bg-[#F4F0E8]">
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

            /* category reveal: drop the base section fade, stagger the header + two figures instead */
            .gallery-cat.page-motion-item { opacity: 1; transform: none; }
            .gallery-cat.page-motion-item .gallery-cat-head,
            .gallery-cat.page-motion-item .gallery-fig {
              opacity: 0;
              transition: opacity .7s cubic-bezier(.22,.61,.36,1), transform .85s cubic-bezier(.22,.61,.36,1);
            }
            .gallery-cat.page-motion-item .gallery-cat-head { transform: translateY(16px); }
            .gallery-cat.page-motion-item .gallery-fig { transform: translateY(30px) scale(.984); }
            .gallery-cat.page-motion-visible .gallery-cat-head,
            .gallery-cat.page-motion-visible .gallery-fig {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
            .gallery-cat.page-motion-visible .gallery-cat-head { transition-delay: 40ms; }
            .gallery-cat.page-motion-visible .gallery-fig:nth-child(1) { transition-delay: 150ms; }
            .gallery-cat.page-motion-visible .gallery-fig:nth-child(2) { transition-delay: 260ms; }
          }

          @media (prefers-reduced-motion: reduce) {
            .gallery-cat .gallery-cat-head,
            .gallery-cat .gallery-fig { opacity: 1 !important; transform: none !important; }
          }
        `}</style>

        <section className="relative isolate overflow-hidden border-b border-[#287688] bg-[linear-gradient(118deg,#062F49_0%,#0A4962_54%,#176F76_100%)] text-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(90deg,#000,transparent_72%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-36 -top-52 h-[520px] w-[520px] rounded-full bg-[#1689C7]/20 blur-[115px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-44 right-[12%] h-[380px] w-[500px] rounded-full bg-[#6AD5BF]/20 blur-[100px]" aria-hidden="true" />
          {/* ponytail: lg-only min-h keeps the hero the whole first screen (92px = lg navbar height); mobile untouched */}
          <div className={`${contentWrapper} relative z-10 grid gap-10 py-12 sm:gap-14 sm:py-16 lg:min-h-[calc(100svh-92px)] lg:grid-cols-[minmax(430px,.86fr)_minmax(600px,1.14fr)] lg:items-center lg:gap-10 lg:py-14 xl:gap-14`}>
            {/* ponytail: mobile type is vw-based off a 390px baseline, so every phone gets the same layout and line breaks, just scaled. sm: takes over above 640px. */}
            <div className="gallery-rise max-w-[650px] lg:max-w-none">
              <h1 className="font-serif text-[clamp(46px,14.1vw,62px)] font-bold leading-[0.91] tracking-[-0.055em] text-white sm:text-[78px] lg:text-[92px]">
                Gallery<span className="text-[#8DE0CB]">.</span>
              </h1>
              {/* ponytail: nowrap everywhere, with the size tied to the available width so the line always fits — 33px measured ~559px wide, so max font = column width / 17 */}
              <p className="mt-6 whitespace-nowrap font-serif text-[min(4.9vw,22px)] italic leading-snug text-[#F0C78B] sm:mt-7 sm:text-[28px] lg:text-[min(2vw,28px)]">Every frame holds a human story.</p>
              <p className="mt-4 max-w-[550px] text-[clamp(11.5px,3.35vw,15px)] leading-[1.75] text-[#D2E3E7] sm:mt-5 sm:text-[16px] sm:leading-[1.8] lg:max-w-[600px] lg:text-[17px]">
                A thoughtful collection of people, programmes, and everyday acts of compassion—captured across the communities we serve.
              </p>

              <nav className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 sm:mt-9 sm:gap-x-6 lg:flex-nowrap lg:gap-x-5 xl:gap-x-6" aria-label="Jump to gallery collection">
                {galleryCategoryOrder.map((category) => (
                  <a
                    key={category}
                    href={`#gallery-${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[clamp(9px,2.56vw,11.5px)] font-semibold text-[#BDD4D8] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DE0CB] sm:text-[12.5px] lg:whitespace-nowrap lg:text-[12px] xl:text-[13px]"
                  >
                    {category}
                  </a>
                ))}
              </nav>
            </div>

            <div className="gallery-rise-late relative mx-auto w-full max-w-[720px] lg:max-w-none">
              {/* ponytail: height tracks width (330/390 = 84.6vw), so the collage keeps its proportions on every phone */}
              <div className="grid h-[clamp(280px,84.6vw,380px)] grid-cols-[1.22fr_.78fr] gap-[clamp(8px,2.6vw,12px)] sm:h-[440px] sm:gap-3.5 lg:h-[min(560px,calc(100svh-260px))]">
                <a href="#gallery-education" className="group relative overflow-hidden rounded-[22px] border-[5px] border-white bg-white shadow-[0_24px_60px_rgba(8,47,73,.17)] sm:rounded-[28px] sm:border-[7px]">
                  <img src={homeGalleryItems[0].image} alt={homeGalleryItems[0].title} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]" />
                  <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(3,29,43,.82))] px-4 pb-4 pt-14 text-[8px] font-bold uppercase tracking-[0.2em] text-white sm:px-5 sm:pb-5 sm:text-[10px]">Education</span>
                </a>

                <div className="grid min-w-0 grid-rows-2 gap-[clamp(8px,2.6vw,12px)] sm:gap-3.5">
                  <a href="#gallery-healthcare" className="group relative overflow-hidden rounded-[18px] border-[5px] border-white bg-white shadow-[0_18px_45px_rgba(8,47,73,.14)] sm:rounded-[23px] sm:border-[7px]">
                    <img src={homeGalleryItems[4].image} alt={homeGalleryItems[4].title} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.045]" />
                    <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(3,29,43,.82))] px-3 pb-3 pt-10 text-[7px] font-bold uppercase tracking-[0.16em] text-white sm:px-4 sm:pb-4 sm:text-[9px]">Healthcare</span>
                  </a>
                  <a href="#gallery-community" className="group relative overflow-hidden rounded-[18px] border-[5px] border-white bg-white shadow-[0_18px_45px_rgba(8,47,73,.14)] sm:rounded-[23px] sm:border-[7px]">
                    <img src={homeGalleryItems[8].image} alt={homeGalleryItems[8].title} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.045]" />
                    <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(3,29,43,.82))] px-3 pb-3 pt-10 text-[7px] font-bold uppercase tracking-[0.16em] text-white sm:px-4 sm:pb-4 sm:text-[9px]">Community</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="relative bg-[linear-gradient(180deg,#E4F0F2_0%,#EEF4F3_38%,#F4F5F1_72%,#EAF3F1_100%)]">
          <div className={`${contentWrapper} pb-12 pt-10 sm:pb-20 sm:pt-14`}>
            {visibleGroups.map(({ category, items }, groupIndex) => {
              const headingId = `gallery-${category.toLowerCase().replace(/\s+/g, '-')}`;
              const categoryNumber = galleryCategoryOrder.indexOf(category) + 1;

              return (
                <section
                  key={category}
                  className="gallery-cat border-b border-[#CEC7BB] py-7 first:pt-0 last:border-b-0 sm:py-12"
                  aria-labelledby={headingId}
                >
                  <div className="gallery-cat-head mb-4 flex flex-col items-start gap-1.5 sm:mb-7 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
                    <div className="flex min-w-0 items-baseline gap-2.5 sm:gap-3">
                      <span className="shrink-0 font-serif text-[13px] italic text-[#D19B58] sm:text-[14px]">{String(categoryNumber).padStart(2, '0')}</span>
                      <h2 id={headingId} className="font-serif text-[24px] font-bold leading-tight text-[#082F49] min-[420px]:text-[27px] sm:text-[38px]">{category}</h2>
                    </div>
                    <span className="ml-[29px] shrink-0 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.22em] text-[#338D81] sm:ml-0 sm:text-[11px]">Two moments</span>
                  </div>

                  <div className="grid grid-cols-1 gap-8 min-[420px]:gap-9 sm:grid-cols-2 sm:gap-5">
                    {items.map((item, itemIndex) => (
                      <figure key={item.id} className="gallery-fig min-w-0">
                        <GalleryImage
                          item={item}
                          variant="pure"
                          onOpen={openImage}
                          indexLabel={`0${itemIndex + 1} / 02`}
                          eager={groupIndex === 0 && itemIndex === 0}
                          className="aspect-[4/3] min-[420px]:aspect-[3/2] sm:aspect-[16/10] sm:rounded-[26px]"
                          imageClassName="object-center"
                        />
                        <figcaption className="mt-2.5 flex min-w-0 gap-2.5 border-l-2 border-[#D7AD6F] pl-3 sm:mt-3.5 sm:gap-3">
                          <span className="shrink-0 pt-px font-serif text-[11px] italic leading-[1.55] text-[#338D81] sm:text-[15px] sm:leading-[1.65]">
                            0{itemIndex + 1}
                          </span>
                          <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[14px] leading-[1.45] text-[#607078] sm:text-[17px] sm:text-[#4E6169]">
                            {item.description}
                          </span>
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
          items={homeGalleryItems}
          activeId={lightboxId}
          onChange={setLightboxId}
          onClose={closeImage}
        />
      )}
    </>
  );
}
