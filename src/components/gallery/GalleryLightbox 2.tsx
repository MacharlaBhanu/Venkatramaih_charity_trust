import { useEffect, useRef } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../data/galleryData';

interface GalleryLightboxProps {
  items: GalleryItem[];
  activeId: string;
  onChange: (id: string) => void;
  onClose: () => void;
}

export default function GalleryLightbox({ items, activeId, onChange, onClose }: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === activeId));
  const activeItem = items[activeIndex];

  const showPrevious = () => {
    const previousIndex = (activeIndex - 1 + items.length) % items.length;
    onChange(items[previousIndex].id);
  };

  const showNext = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    onChange(items[nextIndex].id);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  });

  if (!activeItem) return null;

  return (
    <div
      className="gallery-lightbox fixed inset-0 z-[100] flex bg-[#031D2B]/98 text-white backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={`${activeItem.title} image viewer`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const delta = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
        if (Math.abs(delta) > 55) {
          if (delta > 0) showPrevious();
          else showNext();
        }
        touchStartX.current = null;
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1680px] flex-col px-3 py-3 sm:px-7 sm:py-6 lg:px-10">
        <header className="flex h-12 items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
            <span className="hidden h-px w-10 bg-[#D7AD6F]/60 sm:block" />
            <span className="hidden text-[#92E5D0] sm:inline">{activeItem.categoryLabel}</span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-10 items-center justify-center gap-1.5 rounded-full border border-[#92E5D0]/80 bg-[#0B4054] px-3 text-[9px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_28px_rgba(0,0,0,.28)] transition-all hover:-translate-y-0.5 hover:border-white hover:bg-[#12546A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#92E5D0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#031D2B] sm:h-11 sm:gap-2 sm:px-4 sm:text-[10px] sm:tracking-[0.16em]"
            aria-label="Back to Gallery"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Gallery</span>
          </button>
        </header>

        <div
          className="relative flex min-h-0 flex-1 items-center justify-center py-5 sm:py-7"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          {items.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#082F49]/70 text-white backdrop-blur transition-all hover:border-[#92E5D0]/60 hover:bg-[#0B4054] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#92E5D0] sm:left-2 sm:h-12 sm:w-12 lg:left-5"
              aria-label="View previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          <img
            key={activeItem.id}
            src={activeItem.image}
            alt={activeItem.title}
            decoding="async"
            className="gallery-lightbox-image max-h-full max-w-[calc(100%-4.75rem)] object-contain shadow-[0_28px_90px_rgba(0,0,0,.4)] sm:max-w-[calc(100%-8rem)]"
          />

          {items.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#082F49]/70 text-white backdrop-blur transition-all hover:border-[#92E5D0]/60 hover:bg-[#0B4054] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#92E5D0] sm:right-2 sm:h-12 sm:w-12 lg:right-5"
              aria-label="View next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
