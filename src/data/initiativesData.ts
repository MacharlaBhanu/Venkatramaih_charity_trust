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
  supportingText: string;
  icon: string;
  image: string;
  stats: { value: string; label: string }[];
}

export const initiatives: Initiative[] = [
  {
    title: 'Education for All',
    description:
      'We provide quality education, learning resources, and skill development opportunities to underprivileged children through classroom support, after-school mentoring, and practical life-skills learning. By improving access to books, guidance, and safe learning environments, we help students stay in school, perform with confidence, and move toward brighter long-term opportunities.',
    supportingText: 'By strengthening access to learning, we help children build confidence and create lasting opportunities for their future.',
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
      'We deliver accessible healthcare through medical camps, preventive checkups, awareness drives, and wellness support for families with limited access to quality care. Our programs focus on early intervention, health education, and continuity of care so communities can prevent avoidable illness and live with greater dignity and security.',
    supportingText: 'Our focus is respectful, timely care that helps families live healthier lives with dignity and reassurance.',
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
      'We equip women with skills, vocational training, financial awareness, and mentorship so they can build independent and sustainable livelihoods. By strengthening confidence, decision-making ability, and access to opportunity, we support women in becoming leaders and positive change-makers within their families and communities.',
    supportingText: 'Every training opportunity supports greater independence, confidence, and leadership within families and communities.',
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
      'We support community development through local infrastructure improvements, sanitation initiatives, and welfare programs that address everyday needs with practical solutions. Working closely with residents helps us create safer, healthier, and more resilient neighborhoods where progress is shared and sustainable.',
    supportingText: 'Working alongside local communities allows us to create practical improvements that remain meaningful over time.',
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
      'We offer scholarships to meritorious and deserving students so that financial hardship does not interrupt talent, ambition, or academic progress. Along with funding support, we encourage continuity in education and career readiness, enabling students to complete their studies and pursue meaningful futures with confidence.',
    supportingText: 'Financial support and encouragement ensure that talent and ambition are never limited by circumstance.',
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
      'We provide nutritious meals and grocery support to vulnerable individuals and families facing hunger, especially during periods of crisis or financial stress. Our food support efforts are designed to bring immediate relief, protect dignity, and ensure that basic nourishment remains accessible when it is needed most.',
    supportingText: 'Reliable food support brings immediate relief while helping vulnerable families face difficult days with dignity.',
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
