export const galleryCategories = [
  'All',
  'Education',
  'Healthcare',
  'Empowerment',
  'Community Welfare',
  'Events',
  'Stories',
];

export interface GalleryItem {
  title: string;
  category: string;
  description?: string;
  image: string;
  size: 'large' | 'small' | 'tall';
}

export const galleryItems: GalleryItem[] = [
  {
    title: 'Education for All',
    category: 'Education',
    description: 'Empowering young minds through quality education and learning resources.',
    image:
      'https://images.unsplash.com/photo-1569173675610-42c361a86e37?auto=format&fit=crop&w=800&q=80',
    size: 'large',
  },
  {
    title: 'Healthcare Support',
    category: 'Healthcare',
    description: 'Providing accessible healthcare and promoting well-being in communities.',
    image:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80',
    size: 'small',
  },
  {
    title: 'Women Empowerment',
    category: 'Empowerment',
    description: 'Skill training and livelihood programs to build confidence and independence.',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    size: 'small',
  },
  {
    title: 'Community Welfare',
    category: 'Community Welfare',
    description: 'Supporting families and uplifting communities through essential aid and care.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    size: 'large',
  },
  {
    title: 'Free Health Check-up Camp',
    category: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    size: 'small',
  },
  {
    title: 'Community Food Drive',
    category: 'Community Welfare',
    image:
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80',
    size: 'small',
  },
  {
    title: 'Learning Together',
    category: 'Education',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    size: 'small',
  },
];

export const eventHighlights = [
  {
    title: 'Health Camp for Rural Communities',
    date: '12 Jan 2025',
    text: 'Free health check-ups and awareness session in partnership with local doctors.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Republic Day Celebration',
    date: '26 Jan 2025',
    text: 'Celebrating unity, nationhood, and inspiring young minds for a brighter future.',
    image:
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: "Women's Day Workshop",
    date: '08 Mar 2025',
    text: 'Empowering women through skill-building sessions and inspiring conversations.',
    image:
      'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=600&q=80',
  },
];

export const photoAlbums = [
  {
    title: 'Education Initiatives',
    count: '120 Photos',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Healthcare Camps',
    count: '95 Photos',
    image:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Empowerment Programs',
    count: '88 Photos',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Community Outreach',
    count: '110 Photos',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80',
  },
];
