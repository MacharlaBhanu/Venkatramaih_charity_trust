import { Link } from 'react-router-dom';

interface InitiativeStoryCardProps {
  title: string;
  text: string;
  image: string;
  tone?: 'ocean' | 'teal' | 'slate' | 'rose';
}

const toneClasses = {
  ocean: 'bg-gradient-to-br from-[#247E9E] to-[#1689C7]',
  teal: 'bg-gradient-to-br from-[#34796F] to-[#45A995]',
  slate: 'bg-gradient-to-br from-[#405F82] to-[#536C91]',
  rose: 'bg-gradient-to-br from-[#7D5968] to-[#976A72]',
};

export default function InitiativeStoryCard({ title, text, image, tone }: InitiativeStoryCardProps) {
  return (
    <article className={`grid min-h-[135px] grid-cols-[132px_1fr] overflow-hidden rounded-[14px] border p-3 shadow-[0_8px_24px_rgba(3,31,48,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(3,31,48,0.24)] max-[520px]:grid-cols-1 ${tone ? `${toneClasses[tone]} border-white/25` : 'border-line bg-white'}`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="h-full min-h-[108px] w-full rounded-[10px] object-cover max-[520px]:h-[150px]"
      />
      <div className="flex min-w-0 flex-col justify-center px-4 py-1 max-[520px]:px-1 max-[520px]:pt-4">
        <h3 className={`text-[15px] font-bold leading-tight ${tone ? 'text-white' : 'text-heading'}`}>{title}</h3>
        <p className={`mt-2 line-clamp-2 text-[12px] leading-[1.55] ${tone ? 'text-white/80' : 'text-body'}`}>{text}</p>
        <Link to="/stories" className={`mt-3 inline-flex items-center gap-2 text-[12px] font-bold ${tone ? 'text-white' : 'text-ocean'}`}>
          Read More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
