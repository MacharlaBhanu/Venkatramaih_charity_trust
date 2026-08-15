export type GetInvolvedIcon =
  | 'chart'
  | 'clipboard'
  | 'handHeart'
  | 'handshake'
  | 'heart'
  | 'megaphone'
  | 'package'
  | 'pencil'
  | 'star'
  | 'user'
  | 'users';

export const helpOptions = [
  {
    title: 'Donate',
    description: 'Your contribution brings change and creates lasting impact in the lives of those in need.',
    icon: 'handHeart' as GetInvolvedIcon,
    link: 'Donate Now',
    action: 'donate' as const,
    tone: 'blue' as const,
  },
  {
    title: 'Volunteer',
    description: 'Give your time and skills to support communities and be the helping hand.',
    icon: 'user' as GetInvolvedIcon,
    link: 'Join as Volunteer',
    to: '/contact',
    tone: 'green' as const,
  },
  {
    title: 'Partner With Us',
    description: 'Collaborate with us to build sustainable solutions and create greater impact.',
    icon: 'handshake' as GetInvolvedIcon,
    link: 'Partner With Us',
    to: '/contact',
    tone: 'blue' as const,
  },
  {
    title: 'Sponsor a Program',
    description: 'Sponsor an initiative and help us reach more people and change more lives.',
    icon: 'star' as GetInvolvedIcon,
    link: 'Explore Programs',
    to: '/initiatives',
    tone: 'green' as const,
  },
];

export const processSteps = [
  { title: 'Connect', description: 'Reach out to us and share your interest.', icon: 'pencil' as GetInvolvedIcon },
  { title: 'Choose', description: 'Pick a cause or program that inspires you.', icon: 'clipboard' as GetInvolvedIcon },
  { title: 'Get Involved', description: 'Join our initiatives and make a meaningful impact.', icon: 'users' as GetInvolvedIcon },
  { title: 'Track Impact', description: 'See how your contribution is creating change.', icon: 'chart' as GetInvolvedIcon },
  { title: 'Grow Together', description: 'Stay connected and be part of our journey forward.', icon: 'heart' as GetInvolvedIcon },
];

export const volunteerBenefits = [
  'Make a real difference in people’s lives',
  'Gain valuable skills and experience',
  'Connect with like-minded and compassionate people',
  'Personal growth and meaningful fulfillment',
  'Recognition and appreciation for your contribution',
];

export const partnershipOptions = [
  { title: 'CSR Partnerships', icon: 'handshake' as GetInvolvedIcon, tone: 'blue' as const },
  { title: 'Program Collaboration', icon: 'users' as GetInvolvedIcon, tone: 'green' as const },
  { title: 'Resource Support', icon: 'package' as GetInvolvedIcon, tone: 'blue' as const },
  { title: 'Impactful Together', icon: 'handHeart' as GetInvolvedIcon, tone: 'green' as const },
];

export const faqItems = [
  {
    question: 'How can I donate to the trust?',
    answer: 'You can donate through the Donate Now button, via bank transfer, or by contacting our team. Every contribution helps us create lasting impact.',
  },
  {
    question: 'Can I volunteer if I have limited time?',
    answer: 'Absolutely. Whether you can offer a few hours or support occasional events, we will help you find a meaningful way to contribute.',
  },
  {
    question: 'How do I become a partner or collaborator?',
    answer: 'Contact us with your area of interest. Our team will discuss CSR programs, resource support, or a collaboration suited to your organization.',
  },
  {
    question: 'Are donations eligible for tax benefits?',
    answer: 'Yes. Eligible donations receive an official receipt and may qualify for tax benefits under applicable provisions of the Income Tax Act.',
  },
  {
    question: 'How is my contribution used?',
    answer: 'Contributions directly support our education, healthcare, empowerment, and social-welfare initiatives, with transparent impact reporting.',
  },
];
