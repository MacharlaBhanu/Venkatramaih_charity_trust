export const initiativesStats = [
  { value: '6', label: 'Key Initiatives', icon: 'usersRound' },
  { value: '50,000+', label: 'Lives Impacted', icon: 'heart' },
  { value: '120+', label: 'Projects Completed', icon: 'star' },
  { value: '200+', label: 'Volunteers', icon: 'handHeart' },
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
    image: '/assets/initiatives/schoolgirls_in_classroom_joyful_learning_moment.png',
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
    image: '/assets/initiatives/caring_consultation_in_a_clinic.png',
    stats: [
      { value: '25,000+', label: 'Patients Treated' },
      { value: '85+', label: 'Medical Camps' },
    ],
  },
  {
    title: 'Women Empowerment',
    description:
      'We equip women with skills, training, and resources to become independent and confident change-makers.',
    icon: 'lightbulb',
    image: '/assets/initiatives/sewing_workshop_with_women_in_saris.png',
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
    image: '/assets/initiatives/village_community_joy_in_the_sun.png',
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
    image: '/assets/initiatives/campus_portrait_in_bright_daylight.png',
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
    image: '/assets/initiatives/serving_with_warmth_and_kindness.png',
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
    image: '/assets/initiatives/smiling_schoolgirl_in_a_serene_campus_setting.png',
  },
  {
    title: 'Healing with Compassion',
    text: 'Our medical camp brought essential care to Ramesh, improving his health and hope.',
    image: '/assets/initiatives/friendly_consultation_in_a_bright_clinic.png',
  },
  {
    title: 'Empowered to Inspire',
    text: 'Through skill training, Sunitha started her tailoring unit and now mentors other women.',
    image: '/assets/initiatives/a_collaborative_sewing_workshop_in_progress.png',
  },
];
