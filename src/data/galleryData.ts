export type GalleryCategoryKey =
  | 'All'
  | 'Education'
  | 'Healthcare'
  | 'Empowerment'
  | 'Community Welfare'
  | 'Events'
  | 'Stories';

export type HomeGalleryCategoryKey =
  | 'All'
  | 'Education'
  | 'Food Donation'
  | 'Healthcare'
  | 'School Infrastructure'
  | 'Community';

export type GalleryIconKey =
  | 'grid'
  | 'education'
  | 'healthcare'
  | 'empowerment'
  | 'community'
  | 'events'
  | 'stories'
  | 'volunteer'
  | 'donate'
  | 'partner'
  | 'spread';

export interface GalleryCategory {
  label: GalleryCategoryKey;
  icon: GalleryIconKey;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategoryKey, 'All'> | Exclude<HomeGalleryCategoryKey, 'All'>;
  description: string;
  categoryLabel: string;
  image: string;
  icon: GalleryIconKey;
  layout: 'large' | 'medium' | 'tile';
}

export interface EventHighlight {
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface PhotoAlbum {
  title: string;
  count: number;
  image: string;
}

export interface GalleryActionItem {
  title: string;
  description: string;
  icon: GalleryIconKey;
  to?: string;
  action?: 'donate';
}

const galleryAsset = (filename: string) => `/assets/gallery/${filename}`;
const initiativeAsset = (filename: string) => `/assets/initiatives/${filename}`;

export const categories: GalleryCategory[] = [
  { label: 'All', icon: 'grid' },
  { label: 'Education', icon: 'education' },
  { label: 'Healthcare', icon: 'healthcare' },
  { label: 'Empowerment', icon: 'empowerment' },
  { label: 'Community Welfare', icon: 'community' },
  { label: 'Events', icon: 'events' },
  { label: 'Stories', icon: 'stories' },
];

export const homeGalleryCategories: Array<{ label: HomeGalleryCategoryKey; icon: GalleryIconKey }> = [
  { label: 'All', icon: 'grid' },
  { label: 'Education', icon: 'education' },
  { label: 'Food Donation', icon: 'community' },
  { label: 'Healthcare', icon: 'healthcare' },
  { label: 'School Infrastructure', icon: 'education' },
  { label: 'Community', icon: 'community' },
];

export const homeGalleryItems: GalleryItem[] = [
  {
    id: 'home-education-learning',
    title: 'A Brighter Future Begins With Learning',
    category: 'Education',
    description: 'Opening doors to learning and confidence.',
    categoryLabel: 'Education',
    image: '/assets/gallery/generated/education-collaborative-learning.jpg',
    icon: 'education',
    layout: 'large',
  },
  {
    id: 'home-education-science',
    title: 'Curiosity Comes Alive Together',
    category: 'Education',
    description: 'Hands-on lessons spark curiosity every day.',
    categoryLabel: 'Education',
    image: '/assets/gallery/generated/education-science-class.jpg',
    icon: 'education',
    layout: 'medium',
  },
  {
    id: 'home-food-community-meal',
    title: 'Hope Served With Every Meal',
    category: 'Food Donation',
    description: 'Nutritious meals bring strength and dignity.',
    categoryLabel: 'Food Donation',
    image: '/assets/gallery/generated/food-community-meal.jpg',
    icon: 'community',
    layout: 'medium',
  },
  {
    id: 'home-food-family-support',
    title: 'Support Delivered With Dignity',
    category: 'Food Donation',
    description: 'Essential food support reaches families in need.',
    categoryLabel: 'Food Donation',
    image: '/assets/gallery/generated/food-family-support.jpg',
    icon: 'community',
    layout: 'medium',
  },
  {
    id: 'home-healthcare-consultation',
    title: 'Healthcare Within Everyone’s Reach',
    category: 'Healthcare',
    description: 'Timely healthcare reaches underserved families.',
    categoryLabel: 'Healthcare',
    image: '/assets/gallery/generated/healthcare-consultation.jpg',
    icon: 'healthcare',
    layout: 'medium',
  },
  {
    id: 'home-healthcare-rural-camp',
    title: 'Care Closer to Every Community',
    category: 'Healthcare',
    description: 'Rural health camps bring trusted care closer.',
    categoryLabel: 'Healthcare',
    image: '/assets/gallery/generated/healthcare-rural-camp.jpg',
    icon: 'healthcare',
    layout: 'medium',
  },
  {
    id: 'home-school-infrastructure-campus',
    title: 'A World of Possibility in Every Classroom',
    category: 'School Infrastructure',
    description: 'Safe classrooms help every child thrive.',
    categoryLabel: 'School Infrastructure',
    image: '/assets/gallery/generated/school-infrastructure-campus.jpg',
    icon: 'education',
    layout: 'large',
  },
  {
    id: 'home-school-infrastructure-classroom',
    title: 'Better Spaces Inspire Better Learning',
    category: 'School Infrastructure',
    description: 'Better school spaces improve focus and growth.',
    categoryLabel: 'School Infrastructure',
    image: '/assets/gallery/generated/school-infrastructure-classroom.jpg',
    icon: 'education',
    layout: 'large',
  },
  {
    id: 'home-community-neighbourhood',
    title: 'Compassion Builds Stronger Communities',
    category: 'Community',
    description: 'Volunteers unite to build lasting community change.',
    categoryLabel: 'Community',
    image: '/assets/gallery/generated/community-neighbourhood.jpg',
    icon: 'community',
    layout: 'medium',
  },
  {
    id: 'home-community-elder-support',
    title: 'Every Voice Deserves to Be Heard',
    category: 'Community',
    description: 'Companionship keeps elders connected and respected.',
    categoryLabel: 'Community',
    image: '/assets/gallery/generated/community-elder-support.jpg',
    icon: 'community',
    layout: 'medium',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'education-for-all',
    title: 'Education for All',
    category: 'Education',
    description: 'Empowering young minds through quality education and learning resources.',
    categoryLabel: 'Education',
    image: galleryAsset('03_gallery_education_for_all.png'),
    icon: 'education',
    layout: 'large',
  },
  {
    id: 'joyful-classrooms',
    title: 'Joyful Classrooms',
    category: 'Education',
    description: 'Creating welcoming spaces where curiosity, confidence, and friendship can flourish.',
    categoryLabel: 'Education',
    image: galleryAsset('20_gallery_collaborative_classroom.png'),
    icon: 'education',
    layout: 'medium',
  },
  {
    id: 'scholarships-for-dreams',
    title: 'Scholarships for Dreams',
    category: 'Education',
    description: 'Helping determined students continue their studies and shape a future of possibility.',
    categoryLabel: 'Education',
    image: initiativeAsset('campus_portrait_in_bright_daylight.png'),
    icon: 'education',
    layout: 'medium',
  },
  {
    id: 'healthcare-support',
    title: 'Healthcare Support',
    category: 'Healthcare',
    description: 'Providing accessible healthcare and promoting well-being in communities.',
    categoryLabel: 'Healthcare',
    image: galleryAsset('04_gallery_healthcare_support.png'),
    icon: 'healthcare',
    layout: 'medium',
  },
  {
    id: 'care-close-to-home',
    title: 'Care Close to Home',
    category: 'Healthcare',
    description: 'Compassionate consultations that make dependable medical support easier to reach.',
    categoryLabel: 'Healthcare',
    image: galleryAsset('21_gallery_community_health_camp.png'),
    icon: 'healthcare',
    layout: 'medium',
  },
  {
    id: 'health-with-dignity',
    title: 'Health with Dignity',
    category: 'Healthcare',
    description: 'Listening first and providing thoughtful care to every person who comes to us.',
    categoryLabel: 'Healthcare',
    image: initiativeAsset('friendly_consultation_in_a_bright_clinic.png'),
    icon: 'healthcare',
    layout: 'medium',
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    category: 'Empowerment',
    description: 'Skill training and livelihood programs to build confidence and independence.',
    categoryLabel: 'Empowerment',
    image: galleryAsset('05_gallery_women_empowerment.png'),
    icon: 'empowerment',
    layout: 'medium',
  },
  {
    id: 'skills-for-independence',
    title: 'Skills for Independence',
    category: 'Empowerment',
    description: 'Practical training that turns talent into confidence and sustainable livelihoods.',
    categoryLabel: 'Empowerment',
    image: initiativeAsset('a_collaborative_sewing_workshop_in_progress.png'),
    icon: 'empowerment',
    layout: 'medium',
  },
  {
    id: 'learning-together',
    title: 'Learning Together',
    category: 'Empowerment',
    description: 'Shared knowledge and community support helping women move forward together.',
    categoryLabel: 'Empowerment',
    image: galleryAsset('09_event_womens_day_workshop.png'),
    icon: 'empowerment',
    layout: 'medium',
  },
  {
    id: 'community-welfare',
    title: 'Community Welfare',
    category: 'Community Welfare',
    description: 'Supporting families and uplifting communities through essential aid and care.',
    categoryLabel: 'Community',
    image: galleryAsset('06_gallery_community_welfare.png'),
    icon: 'community',
    layout: 'large',
  },
  {
    id: 'stronger-communities',
    title: 'Stronger Communities',
    category: 'Community Welfare',
    description: 'Standing beside families with practical support, respect, and a shared sense of hope.',
    categoryLabel: 'Community',
    image: initiativeAsset('serving_with_warmth_and_kindness.png'),
    icon: 'community',
    layout: 'medium',
  },
  {
    id: 'meals-with-care',
    title: 'Meals Served with Care',
    category: 'Community Welfare',
    description: 'Bringing nourishment and warmth to people through thoughtful community outreach.',
    categoryLabel: 'Community',
    image: '/assets/stories/07_story_food_support_clear.png',
    icon: 'community',
    layout: 'medium',
  },
  {
    id: 'health-camp-tile',
    title: 'Community Health Camp',
    category: 'Events',
    description: 'Accessible care delivered closer to rural communities.',
    categoryLabel: 'Events',
    image: galleryAsset('07_event_health_camp.png'),
    icon: 'events',
    layout: 'tile',
  },
  {
    id: 'republic-day-tile',
    title: 'Republic Day Celebration',
    category: 'Events',
    description: 'Young minds celebrating unity and nationhood.',
    categoryLabel: 'Events',
    image: galleryAsset('08_event_republic_day_celebration.png'),
    icon: 'events',
    layout: 'tile',
  },
  {
    id: 'womens-day-tile',
    title: "Women's Day Workshop",
    category: 'Events',
    description: 'A collaborative workshop for skills and opportunity.',
    categoryLabel: 'Events',
    image: galleryAsset('09_event_womens_day_workshop.png'),
    icon: 'events',
    layout: 'tile',
  },
  {
    id: 'dreams-to-degrees',
    title: 'Dreams to Degrees',
    category: 'Stories',
    description: 'Education and mentorship opening the way to a brighter future.',
    categoryLabel: 'Stories',
    image: galleryAsset('15_story_dreams_to_degrees.png'),
    icon: 'stories',
    layout: 'tile',
  },
  {
    id: 'healing-with-compassion',
    title: 'Healing with Compassion',
    category: 'Stories',
    description: 'Care that restores health, confidence, and hope.',
    categoryLabel: 'Stories',
    image: galleryAsset('16_story_healing_with_compassion.png'),
    icon: 'stories',
    layout: 'tile',
  },
  {
    id: 'empowered-to-inspire',
    title: 'Empowered to Inspire',
    category: 'Stories',
    description: 'Skills and support creating confident community leaders.',
    categoryLabel: 'Stories',
    image: galleryAsset('17_story_empowered_to_inspire.png'),
    icon: 'stories',
    layout: 'tile',
  },
];

export const eventHighlights: EventHighlight[] = [
  {
    title: 'Health Camp for Rural Communities',
    date: '12 Jan 2025',
    description: 'Free health check-ups and awareness session in partnership with local doctors.',
    image: galleryAsset('07_event_health_camp.png'),
  },
  {
    title: 'Republic Day Celebration',
    date: '26 Jan 2025',
    description: 'Celebrating unity, nationhood, and inspiring young minds for a brighter future.',
    image: galleryAsset('08_event_republic_day_celebration.png'),
  },
  {
    title: "Women's Day Workshop",
    date: '08 Mar 2025',
    description: 'Empowering women through skill-building sessions and inspiring conversations.',
    image: galleryAsset('09_event_womens_day_workshop.png'),
  },
];

export const albums: PhotoAlbum[] = [
  { title: 'Education Initiatives', count: 120, image: galleryAsset('10_album_education_initiatives.png') },
  { title: 'Healthcare Camps', count: 95, image: galleryAsset('11_album_healthcare_camps.png') },
  { title: 'Empowerment Programs', count: 88, image: galleryAsset('12_album_empowerment_programs.png') },
  { title: 'Community Outreach', count: 110, image: galleryAsset('13_album_community_outreach.png') },
];

export const actionItems: GalleryActionItem[] = [
  { title: 'Volunteer', description: 'Give your time and skills', icon: 'volunteer', to: '/get-involved' },
  { title: 'Donate', description: 'Your contribution brings change', icon: 'donate', action: 'donate' },
  { title: 'Partner With Us', description: 'Collaborate for greater impact', icon: 'partner', to: '/get-involved' },
  { title: 'Spread the Word', description: 'Inspire others, create change', icon: 'spread', to: '/get-involved' },
];

export const galleryAssets = {
  hero: galleryAsset('02_hero_sapling_banner.png'),
  spotlight: galleryAsset('14_spotlight_story_children.png'),
  ctaLeafLeft: galleryAsset('18_cta_leaf_style_left.png'),
  ctaLeafRight: galleryAsset('19_cta_leaf_style_right.png'),
};
