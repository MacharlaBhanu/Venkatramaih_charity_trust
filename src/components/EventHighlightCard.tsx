import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { EventHighlight } from '../data/galleryData';

export default function EventHighlightCard({ event }: { event: EventHighlight }) {
  return (
    <article className="group grid min-h-[130px] grid-cols-[100px_minmax(0,1fr)] gap-[14px] rounded-[14px] border border-line bg-white p-[14px] shadow-[0_6px_18px_rgba(18,58,90,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/60 hover:shadow-[0_14px_30px_rgba(18,58,90,0.09)] sm:grid-cols-[112px_minmax(0,1fr)] lg:grid-cols-[96px_minmax(0,1fr)] xl:grid-cols-[112px_minmax(0,1fr)]">
      <img
        src={event.image}
        alt={event.title}
        loading="lazy"
        decoding="async"
        className="h-full min-h-[102px] w-full rounded-[10px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="flex min-w-0 flex-col">
        <span className="flex w-fit items-center gap-2 rounded-full bg-softblue/60 px-2 py-1 text-[10px] text-muted">
          <CalendarDays className="h-[13px] w-[13px] text-softgreen" strokeWidth={1.8} />
          {event.date}
        </span>
        <h3 className="mt-2 text-[14px] font-bold leading-[1.25] text-heading">{event.title}</h3>
        <p className="mt-1 text-[12px] leading-[1.45] text-body">{event.description}</p>
        <Link to="/gallery" className="mt-auto inline-flex items-center gap-2 pt-2 text-[11px] font-semibold text-ocean hover:text-sky">
          View Photos <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}
