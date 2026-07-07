export const initiativesStats = [
  { value: '6', label: 'Key Initiatives', icon: 'grid' },
  { value: '50,000+', label: 'Lives Impacted', icon: 'heart' },
  { value: '120+', label: 'Projects Completed', icon: 'star' },
  { value: '200+', label: 'Volunteers', icon: 'users' },
  { value: '12+', label: 'Years of Service', icon: 'award' },
];

export interface Initiative {
  title: string;
  description: string;
  icon: string;
  image: string;
  stats: { value: string; label: string }[];
}

export const initiatives: Initiative[] = [
  {
    title: 'Education for All',
    description:
      'We provide quality education, learning resources, and skill development opportunities to underprivileged children.',
    icon: 'book',
    image:
      'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=800&q=80',
    stats: [
      { value: '15,000+', label: 'Students Supported' },
      { value: '120+', label: 'Schools & Centers' },
    ],
  },
  {
    title: 'Healthcare Support',
    description:
      'We deliver accessible healthcare, medical camps, awareness programs, and wellness support to all.',
    icon: 'health',
    image:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80',
    stats: [
      { value: '25,000+', label: 'Patients Treated' },
      { value: '85+', label: 'Medical Camps' },
    ],
  },
  {
    title: 'Women Empowerment',
    description:
      'We equip women with skills, training, and resources to become independent and confident change-makers.',
    icon: 'empower',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    stats: [
      { value: '8,500+', label: 'Women Empowered' },
      { value: '60+', label: 'Skill Training Programs' },
    ],
  },
  {
    title: 'Community Welfare',
    description:
      'We support community development, infrastructure, sanitation, and programs that enhance quality of life.',
    icon: 'welfare',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    stats: [
      { value: '100+', label: 'Communities Impacted' },
      { value: '75+', label: 'Development Projects' },
    ],
  },
  {
    title: 'Scholarship Support',
    description:
      'We offer scholarships to meritorious and deserving students to help them pursue their dreams.',
    icon: 'grad',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    stats: [
      { value: '2,300+', label: 'Students Supported' },
      { value: '₹2.8 Cr+', label: 'Scholarships Disbursed' },
    ],
  },
  {
    title: 'Food Support',
    description:
      'We ensure no one sleeps hungry by providing nutritious meals and groceries to those in need.',
    icon: 'food',
    image:
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80',
    stats: [
      { value: '1,20,000+', label: 'Meals Served' },
      { value: '45+', label: 'Food Drives' },
    ],
  },
];

export const initiativesStories = [
  {
    title: 'From Dreams to Degrees',
    text: 'With a scholarship and mentorship, Anjali is now pursuing her engineering dreams and inspiring many more.',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Healing with Compassion',
    text: 'Our medical camp brought essential care to Ramesh, improving his health and hope.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Empowered to Inspire',
    text: 'Through skill training, Sunitha started her tailoring unit and now mentors other women.',
    image:
      'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=600&q=80',
  },
];
