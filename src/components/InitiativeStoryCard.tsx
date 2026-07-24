import { Link } from 'react-router-dom';

interface InitiativeStoryCardProps {
  title: string;
  text: string;
  image: string;
}

export default function InitiativeStoryCard({ title, text, image }: InitiativeStoryCardProps) {
  return (
    <article className="grid min-h-[135px] grid-cols-[132px_1fr] overflow-hidden rounded-[14px] border border-line bg-white p-3 shadow-[0_8px_24px_rgba(18,58,90,0.055)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(18,58,90,0.09)] max-[520px]:grid-cols-1">
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="h-full min-h-[108px] w-full rounded-[10px] object-cover max-[520px]:h-[150px]"
      />
      <div className="flex min-w-0 flex-col justify-center px-4 py-1 max-[520px]:px-1 max-[520px]:pt-4">
        <h3 className="text-[15px] font-bold leading-tight text-heading">{title}</h3>
        <p className="mt-2 line-clamp-2 text-[12px] leading-[1.55] text-body">{text}</p>
        <Link to="/stories" className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-ocean">
          Read More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
