import { Link } from 'react-router-dom';
import {
  Award,
  ChevronLeft,
  ChevronRight,
  HandHeart,
  Heart,
  Star,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import InitiativeDetailCard from '../components/InitiativeDetailCard';
import InitiativeStoryCard from '../components/InitiativeStoryCard';
import { useDonation } from '../context/DonationContext';
import {
  initiativesStats,
  initiatives,
  initiativesStories,
} from '../data/initiativesData';

const statIcons: Record<string, LucideIcon> = {
  usersRound: UsersRound,
  heart: Heart,
  star: Star,
  handHeart: HandHeart,
  award: Award,
};

export default function Initiatives() {
  const { openDonation } = useDonation();

  return (
    <>
      <SEO
        title="Our Initiatives | Kanneganti Venkataramaiah Charitable Trust"
        description="Explore the education, healthcare, women empowerment, community welfare, scholarship, and food support initiatives of Kanneganti Venkataramaiah Charitable Trust."
        path="/initiatives"
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Our Initiatives', path: '/initiatives' },
        ]}
      />

      <div className="bg-page">
        <section className="relative overflow-hidden bg-gradient-to-r from-page to-section">
          <div className="container-page grid min-h-[264px] items-center gap-8 py-10 pb-14 lg:px-[54px] lg:grid-cols-[0.45fr_0.55fr] lg:py-8 lg:pb-[26px]">
            <img
              src="/assets/about/14_left_leaf_decor.png"
              alt=""
              aria-hidden="true"
              className="leaf-blend pointer-events-none absolute -bottom-10 left-0 hidden w-[180px] opacity-20 lg:block"
            />
            <img
              src="/assets/about/14_left_leaf_decor.png"
              alt=""
              aria-hidden="true"
              className="leaf-blend pointer-events-none absolute -bottom-8 left-[42%] hidden w-[120px] rotate-[18deg] opacity-[0.08] lg:block"
            />
            <div className="relative z-10 max-w-[560px]">
              <h1 className="text-[38px] font-bold leading-[1.05] text-heading sm:text-[46px] lg:text-[52px]">
                Our Initiatives
              </h1>
              <p className="mt-3 text-[18px] font-medium text-heading sm:text-[21px]">
                Compassion in Action. Change that Lasts.
              </p>
              <div className="mt-3 flex w-[286px] max-w-full items-center gap-2" aria-hidden="true">
                <span className="h-px flex-1 bg-line" />
                <span className="text-sky">♥</span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <p className="mt-6 max-w-[520px] text-[14px] leading-[1.7] text-body">
                We work across key areas of need to empower individuals, uplift communities, and
                build a better tomorrow. Every initiative is a step towards a more equitable,
                healthier, and hopeful society.
              </p>
            </div>

            <div className="relative min-h-[240px] overflow-hidden lg:min-h-[264px]">
              <img
                src="/assets/initiatives/nurturing_new_life_in_nature.png"
                alt="Hands holding a young plant symbolising nurturing new life"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center lg:object-right"
              />
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-page via-page/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-section via-section/75 to-transparent" />
            </div>
          </div>
        </section>

        <section className="container-page relative z-20 -mt-6 lg:px-[54px]">
          <div className="grid grid-cols-2 overflow-hidden rounded-[14px] border border-line bg-white/95 shadow-[0_14px_36px_rgba(22,137,199,0.10)] backdrop-blur md:grid-cols-3 lg:grid-cols-5">
            {initiativesStats.map((stat, index) => {
              const StatIcon = statIcons[stat.icon] ?? Heart;

              return (
                <div
                  key={stat.label}
                  className={`flex min-h-[86px] items-center justify-center gap-3 border-b border-line px-3 py-4 last:col-span-2 last:border-b-0 md:min-h-[78px] md:last:col-span-1 lg:border-b-0 ${
                    index > 0 ? 'lg:border-l lg:border-line' : ''
                  } ${
                    index % 3 !== 0 ? 'md:border-l md:border-line lg:border-l' : ''
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-softblue text-ocean">
                    <StatIcon className="h-[20px] w-[20px]" strokeWidth={1.8} />
                  </span>
                  <span>
                    <strong className="block font-sans text-[24px] font-extrabold leading-none text-heading">
                      {stat.value}
                    </strong>
                    <span className="mt-2 block text-[11px] leading-none text-body">{stat.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container-page py-5 pb-7 lg:px-[54px]">
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-3">
            {initiatives.map((initiative) => (
              <InitiativeDetailCard key={initiative.title} {...initiative} />
            ))}
          </div>
        </section>

        <section className="container-page pb-9 lg:px-[54px]">
          <div className="relative rounded-[16px] border border-line bg-white px-5 py-7 shadow-[0_10px_28px_rgba(18,58,90,0.07)] sm:px-8">
            <button
              type="button"
              aria-label="Previous story"
              className="absolute left-0 top-1/2 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-[0_10px_22px_rgba(18,58,90,0.12)] lg:flex"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.9} />
            </button>
            <button
              type="button"
              aria-label="Next story"
              className="absolute right-0 top-1/2 hidden h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-[0_10px_22px_rgba(18,58,90,0.12)] lg:flex"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.9} />
            </button>

            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-[24px] font-bold leading-tight text-heading">Stories of Change</h2>
                <p className="mt-1 text-[13px] text-body">Real people. Real impact. Stronger communities.</p>
              </div>
              <Link to="/stories" className="inline-flex items-center gap-2 text-[13px] font-bold text-ocean">
                View All Stories
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {initiativesStories.map((story) => (
                <InitiativeStoryCard key={story.title} {...story} />
              ))}
            </div>
          </div>
        </section>

        <section className="container-page pb-9 lg:px-[54px]">
          <div className="relative grid items-center gap-5 overflow-hidden rounded-[16px] border border-white/85 bg-[linear-gradient(100deg,#DFF8EF_0%,#EEF8FF_54%,#F7FBFF_100%)] px-6 py-7 shadow-[0_18px_55px_rgba(18,58,90,0.1)] ring-1 ring-line/60 md:min-h-[108px] md:grid-cols-[minmax(0,1fr)_390px] md:gap-0 md:px-8 md:py-0">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[240px] bg-seafoam/55" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[240px] bg-softblue/45" aria-hidden="true" />
            <img
              src="/assets/home/13_leaf_cta_left.png"
              alt=""
              aria-hidden="true"
              className="leaf-blend pointer-events-none absolute bottom-1/2 left-2 w-[150px] translate-y-1/2 opacity-45 md:left-4 md:w-[175px]"
            />
            <img
              src="/assets/home/14_leaf_cta_right.png"
              alt=""
              aria-hidden="true"
              className="leaf-blend pointer-events-none absolute bottom-1/2 right-2 w-[150px] translate-y-1/2 opacity-45 md:right-4 md:w-[175px]"
            />

            <div className="relative z-10 mx-auto max-w-[720px] text-center md:mx-0 md:pl-[150px] md:text-left">
              <h2 className="font-serif text-[22px] font-bold leading-tight text-[#267D72] sm:text-[24px] md:whitespace-nowrap md:text-[25px]">
                Be the Reason for Someone's Smile
              </h2>
              <p className="mt-2 text-[13px] leading-[1.6] text-body">
                Your support can bring hope and change lives. Together, we can build a kinder and
                stronger society.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-3 md:-translate-x-36 md:justify-start">
              <Button onClick={openDonation} aria-label="Open donation form" className="h-11 w-[150px] rounded-[9px] px-3 text-[12px]">
                Donate Now
                <Heart className="h-4 w-4" strokeWidth={2} />
              </Button>
              <Button
                variant="outline"
                to="/get-involved"
                className="h-11 w-[188px] rounded-[9px] border-softgreen px-3 text-[12px] text-[#267D72] hover:bg-seafoam"
              >
                <UsersRound className="h-4 w-4" strokeWidth={1.8} />
                Become a Volunteer
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
