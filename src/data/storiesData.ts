export interface ChangeStory {
  eyebrow: string;
  title: string;
  lede: string;
  paragraphs: string[];
  pullQuote: string;
  image: string;
  imageAlt: string;
  highlights: { label: string; value: string; icon: string; tone: 'blue' | 'green' }[];
}

// Long-form versions of the three stories shown on the home page.
export const changeStories: ChangeStory[] = [
  {
    eyebrow: 'Education',
    title: 'From Struggle to Success',
    lede: 'Ravi’s dedication changed his life and gave him hope.',
    paragraphs: [
      'Ravi was the quietest child in his classroom. The son of daily-wage parents, he arrived each morning with a borrowed bag and left each evening without asking a single question. His teachers described him as bright but withdrawn — a boy who had learned early that it was safer not to hope for too much. When lessons moved faster than he could follow, he simply fell further behind, and no one at home had the schooling to help him catch up.',
      'What changed for Ravi was not talent; it was attention. Through our education programme he received the things that make learning possible — textbooks and a uniform of his own, a place to study after school, and a mentor who checked in on him week after week. Slowly, the boy at the back of the room began raising his hand. His mentor still remembers the first time Ravi stayed behind to ask about a mathematics problem, not because he was told to, but because he wanted to understand it.',
      'Today Ravi is a 12th grade topper and speaks openly about becoming an engineer — a word he once would not have said aloud. He now helps younger students in his neighbourhood with their homework, passing on the same patience that was once given to him. His story is a reminder that a child rarely lacks ability. More often, they are only waiting for someone to believe in them long enough for that ability to show.',
    ],
    pullQuote: 'I used to think school was not meant for children like me. Someone showed me it was.',
    image: '/assets/home/story_success-card-v4.jpg',
    imageAlt: 'Ravi smiling confidently at his desk in a classroom',
    highlights: [
      { label: 'From', value: 'Government School Student', icon: 'school', tone: 'blue' },
      { label: 'To', value: '12th Grade Topper (92%)', icon: 'award', tone: 'green' },
      { label: 'Dream', value: 'To become an Engineer', icon: 'heart', tone: 'green' },
    ],
  },
  {
    eyebrow: 'Healthcare',
    title: 'New Hope through Healthcare',
    lede: 'Access to timely medical care created a new beginning.',
    paragraphs: [
      'In many of the villages we serve, illness is not the hardest part — reaching a doctor is. The nearest hospital can be hours away, transport costs more than a day’s earnings, and a working parent who takes a day off to seek treatment loses the wage that feeds the family that night. So symptoms get ignored. Small, treatable conditions are carried quietly for months until they are no longer small or treatable.',
      'Our healthcare initiative was built around that reality rather than against it. Health camps are held close to where families already live, so no one has to choose between a check-up and a day’s income. Screenings catch conditions early, medicines are provided without cost, and those who need specialist care are guided through referral instead of being handed a slip of paper and left to navigate a hospital alone. Follow-up visits matter just as much as the first one — recovery is rarely finished in a single appointment.',
      'The change this brings is quiet and enormous. A mother returns to work because her pain has been treated. A child sits through a full school day because their vision has finally been corrected. An elderly farmer continues living independently because his condition is being managed rather than endured. Health is what allows every other kind of progress — education, income, dignity — to become possible at all.',
    ],
    pullQuote: 'Care given in time does not just heal a person. It keeps a whole family standing.',
    image: '/assets/home/story_healthcare-card-v4.jpg',
    imageAlt: 'A health worker attending to a patient at a community health camp',
    highlights: [
      { label: 'Reach', value: 'Care Brought to the Village', icon: 'health', tone: 'blue' },
      { label: 'Approach', value: 'Early Screening & Follow-up', icon: 'handHeart', tone: 'green' },
      { label: 'Result', value: 'Families Back on Their Feet', icon: 'heart', tone: 'green' },
    ],
  },
  {
    eyebrow: 'School Infrastructure',
    title: 'A Classroom Rebuilt, A Future Renewed',
    lede: 'A brighter, safer classroom gave young learners a place to dream bigger.',
    paragraphs: [
      'A classroom teaches children something before a single lesson begins. A room with a leaking roof, broken windows and no light tells them that their education is an afterthought. Children in these rooms sit on the floor, share torn books in poor light, and stay home entirely through the monsoon months. Teachers do extraordinary work in such spaces, but they should not have to.',
      'Rebuilding a classroom is practical work: a roof that holds through the rains, walls that are sound, windows that let in daylight, fans that make the afternoon bearable, desks and benches so that no child studies on the ground, and clean water and usable toilets — the facilities that decide, in particular, whether older girls keep attending school at all. We rebuild alongside the school and the community rather than around them, so the space continues to be cared for long after the work is done.',
      'What follows is visible almost immediately. Attendance rises, especially through the rainy season. Children stay longer in the day and concentrate better. Teachers can finally teach the way they always wanted to. Parents who once saw the school as a crumbling building begin to see it as somewhere worth sending their child every single morning. A repaired roof turns out to be one of the most direct investments in a child’s future that anyone can make.',
    ],
    pullQuote: 'Give children a room worth showing up to, and they will show up.',
    image: '/assets/home/school-infrastructure-story-card-v3.jpg',
    imageAlt: 'Students learning together in a bright, newly refurbished classroom',
    highlights: [
      { label: 'Before', value: 'Unsafe, Unlit Classrooms', icon: 'landmark', tone: 'blue' },
      { label: 'After', value: 'Bright, Equipped Rooms', icon: 'school', tone: 'green' },
      { label: 'Impact', value: 'Higher Daily Attendance', icon: 'graduation', tone: 'green' },
    ],
  },
];

export const featuredStory = {
  badge: 'Featured Story',
  title: 'From Struggle to Success',
  subtitle: "Ravi’s Journey of Hope",
  text: 'Once a shy and withdrawn child from a low-income family, Ravi struggled to keep up in school. With the right support, mentorship, and resources, he found his confidence and today dreams of becoming an engineer.',
  image: '/assets/stories/03_featured_story_student.png',
  milestones: [
    { label: 'From', value: 'Government School Student', icon: 'school', tone: 'blue' },
    { label: 'To', value: '12th Grade Topper (92%)', icon: 'award', tone: 'green' },
    { label: 'Dream', value: 'To become an Engineer', icon: 'heart', tone: 'green' },
  ],
};

export const transformationStories = [
  {
    category: 'Education',
    icon: 'book',
    title: 'New Hope through Healthcare Access',
    description: 'Meena’s life changed when she received timely medical care and continues to thrive with regular support.',
    image: '/assets/stories/04_story_healthcare_access_clear.png',
  },
  {
    category: 'Healthcare',
    icon: 'health',
    title: 'Healing with Care and Dignity',
    description: 'Lakshmi received life-saving treatment and now helps others in her village live healthier lives.',
    image: '/assets/stories/05_story_healing_with_care_clear.png',
  },
  {
    category: 'Empowerment',
    icon: 'users',
    title: 'Skills that Build Stronger Futures',
    description: 'Through vocational training, Sunitha started her own tailoring unit and now empowers other women.',
    image: '/assets/stories/06_story_skills_future_clear.png',
  },
  {
    category: 'Social Welfare',
    icon: 'handHeart',
    title: 'Food, Support & A Brighter Tomorrow',
    description: 'Arjun and many others receive nutritious meals, education, and the care they need to grow with confidence.',
    image: '/assets/stories/07_story_food_support_clear.png',
  },
];

export const gratitudeQuotes = [
  {
    quote: 'The support I received gave me the chance to study, grow, and dream. Today, I stand tall with confidence and hope.',
    name: 'Ravi',
    role: 'Student',
  },
  {
    quote: 'This trust didn’t just treat my illness, they restored my life and my purpose.',
    name: 'Lakshmi',
    role: 'Beneficiary',
  },
  {
    quote: 'Together, we are creating a community where every child, every woman, every family has the opportunity to thrive.',
    name: 'Community Leader',
    role: '',
  },
];

export const impactStats = [
  { value: '50,000+', label: 'Lives Impacted', icon: 'users', tone: 'blue' },
  { value: '12,000+', label: 'Students Supported', icon: 'graduation', tone: 'blue' },
  { value: '8,500+', label: 'Health Beneficiaries', icon: 'health', tone: 'green' },
  { value: '5,000+', label: 'Volunteers & Supporters', icon: 'handHeart', tone: 'green' },
];

export const journeySteps = [
  { title: 'Support Provided', text: 'Resources, care & mentoring', icon: 'handHeart', tone: 'green' },
  { title: 'Growth Begins', text: 'Confidence, skills & learning', icon: 'award', tone: 'green' },
  { title: 'Opportunities Open', text: 'Education, training & support', icon: 'users', tone: 'blue' },
  { title: 'Future Transformed', text: 'Stronger lives, brighter futures', icon: 'sparkles', tone: 'blue' },
];

export const beforeAfter = {
  before: '/assets/stories/08_before_student_clear.png',
  after: '/assets/stories/09_after_student_clear.png',
  text: 'With access to education and mentorship, Arjun found his path and purpose.',
};
