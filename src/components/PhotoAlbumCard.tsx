import { Camera } from 'lucide-react';
import type { PhotoAlbum } from '../data/galleryData';

export default function PhotoAlbumCard({ album }: { album: PhotoAlbum }) {
  return (
    <article className="group min-w-0 text-center">
      <div className="relative overflow-hidden rounded-[10px] border border-line/70 shadow-[0_6px_16px_rgba(18,58,90,0.05)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-sky/60 group-hover:shadow-[0_12px_24px_rgba(18,58,90,0.1)]">
        <img
          src={album.image}
          alt={album.title}
          loading="lazy"
          decoding="async"
          className="h-[90px] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute bottom-1.5 right-1.5 inline-flex items-center gap-1 rounded-full bg-heading/90 px-2 py-1 text-[10px] font-semibold text-white">
          <Camera className="h-3 w-3" strokeWidth={1.8} />
          {album.count}
        </span>
      </div>
      <h3 className="mt-2 min-h-[29px] text-[12px] font-bold leading-[1.2] text-heading">{album.title}</h3>
      <p className="mt-0.5 text-[11px] text-body">{album.count} Photos</p>
    </article>
  );
}
