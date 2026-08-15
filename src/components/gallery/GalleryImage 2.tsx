import type { CSSProperties, PointerEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { GalleryItem } from '../../data/galleryData';

type GalleryImageVariant = 'pure' | 'editorial' | 'cinematic';

interface GalleryImageProps {
  item: GalleryItem;
  variant: GalleryImageVariant;
  onOpen: (item: GalleryItem) => void;
  className?: string;
  imageClassName?: string;
  indexLabel?: string;
  eager?: boolean;
  showViewCursor?: boolean;
}

const updateCursorPosition = (event: PointerEvent<HTMLButtonElement>) => {
  if (event.pointerType !== 'mouse') return;
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--gallery-cursor-x', `${event.clientX - bounds.left}px`);
  event.currentTarget.style.setProperty('--gallery-cursor-y', `${event.clientY - bounds.top}px`);
};

export default function GalleryImage({
  item,
  variant,
  onOpen,
  className = '',
  imageClassName = '',
  indexLabel,
  eager = false,
  showViewCursor = true,
}: GalleryImageProps) {
  const imageButton = (
    <button
      type="button"
      onClick={() => onOpen(item)}
      onPointerMove={updateCursorPosition}
      className={`gallery-photo-button ${showViewCursor ? '' : 'gallery-photo-button-standard'} group relative block h-full w-full overflow-hidden rounded-[24px] bg-[#082F49] text-left shadow-[0_22px_60px_rgba(8,47,73,.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#338D81] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F4F0E8] ${className}`}
      aria-label={`View ${item.title} in fullscreen`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        className={`h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.035] ${imageClassName}`}
      />

      {variant === 'pure' && (
        <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(180deg,transparent_40%,rgba(3,29,43,.88)_100%)] p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-7">
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#92E5D0]">{item.categoryLabel}</span>
          <span className="mt-1 font-serif text-[23px] font-bold text-white sm:text-[28px]">{item.title}</span>
        </div>
      )}

      {variant === 'cinematic' && (
        <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(180deg,rgba(3,29,43,.02)_30%,rgba(3,29,43,.24)_58%,rgba(3,29,43,.94)_100%)] p-6 sm:p-9 lg:p-11">
          <div className="flex items-center justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#92E5D0] sm:text-[10px]">
            <span>{item.categoryLabel}</span>
            {indexLabel && <span className="font-serif text-[12px] italic tracking-normal text-white/65">{indexLabel}</span>}
          </div>
          <h2 className="mt-3 max-w-[760px] font-serif text-[31px] font-bold leading-[1.05] text-white sm:text-[44px] lg:text-[57px]">{item.title}</h2>
          <p className="mt-3 max-w-[560px] text-[12px] leading-[1.65] text-white/70 sm:text-[14px]">{item.description}</p>
        </div>
      )}

      {showViewCursor && (
        <span className="gallery-view-cursor pointer-events-none absolute z-20 hidden h-[72px] w-[72px] items-center justify-center rounded-full border border-white/50 bg-[#FBF9F4]/90 text-[#082F49] shadow-[0_12px_30px_rgba(3,29,43,.2)] backdrop-blur-md lg:flex" aria-hidden="true">
          <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.15em]">View <ArrowUpRight className="h-3 w-3" /></span>
        </span>
      )}
    </button>
  );

  if (variant !== 'editorial') return imageButton;

  return (
    <figure>
      {imageButton}
      <figcaption className="mt-5 grid gap-3 border-t border-[#CEC7BB] pt-4 sm:grid-cols-[auto_1fr] sm:gap-7">
        <span className="font-serif text-[13px] italic text-[#9B7449]">{indexLabel}</span>
        <div>
          <h3 className="font-serif text-[23px] font-bold leading-tight text-[#082F49]">{item.title}</h3>
          <p className="mt-2 max-w-[520px] text-[12px] leading-[1.65] text-[#607078]">{item.description}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export type GalleryCursorStyle = CSSProperties & {
  '--gallery-cursor-x'?: string;
  '--gallery-cursor-y'?: string;
};
