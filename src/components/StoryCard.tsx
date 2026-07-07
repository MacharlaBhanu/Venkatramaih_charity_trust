import { Link } from 'react-router-dom';

interface StoryCardProps {
  title: string;
  text: string;
  image: string;
  category?: string;
  layout?: 'vertical' | 'horizontal';
  objectPosition?: string;
}

export default function StoryCard({
  title,
  text,
  image,
  category,
  layout = 'vertical',
  objectPosition = 'center',
}: StoryCardProps) {
  if (layout === 'horizontal') {
    return (
      <article className="group flex gap-4 rounded-3xl border border-line bg-white p-3 shadow-card transition-all duration-300 hover:shadow-glass">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-24 w-24 shrink-0 rounded-2xl object-cover object-top sm:h-28 sm:w-28"
        />
        <div className="flex flex-col justify-center py-1 pr-2">
          <h3 className="text-base font-bold leading-snug text-heading">{title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-body">{text}</p>
          <Link to="/stories" className="link-arrow mt-2 text-xs">
            Read More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-white shadow-[0_8px_24px_rgba(18,58,90,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-glass">
      <div className="h-[100px] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          style={{ objectPosition }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        {category && (
          <span className="eyebrow mb-1 text-[10px]">
            <span aria-hidden="true">✦</span>
            {category}
          </span>
        )}
        <h3 className="text-[13px] font-bold leading-snug text-heading">{title}</h3>
        <p className="mt-1 flex-1 text-[11px] leading-[1.45] text-body">{text}</p>
      </div>
    </article>
  );
}
