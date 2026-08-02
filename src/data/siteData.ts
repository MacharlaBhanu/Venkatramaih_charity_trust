export const site = {
  name: 'Kanneganti Venkataramaiah Charitable Trust',
  shortName: 'KV Charitable Trust',
  tagline: 'Compassion Today, Better Tomorrow',
  url: 'https://kvrcharitabletrust.in',
  description:
    'Kanneganti Venkataramaiah Charitable Trust supports education, healthcare, women empowerment, food support, scholarships, and community welfare initiatives to uplift underprivileged communities.',
  phones: ['+91 88955 43300', '+91 40 2900 43300'],
  emails: ['info@kvgcharitabletrust.in', 'support@kvgcharitabletrust.in'],
  address: {
    line1: 'Plot No. 12, Road No. 3, Banjara Hills,',
    line2: 'Hyderabad, Telangana - 500 084, India.',
    city: 'Hyderabad, Telangana, India',
    pincode: '500 084',
  },
  hours: [
    { day: 'Monday - Friday', time: '9:30 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
    { day: 'Public Holidays', time: 'Closed' },
  ],
  socials: [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  ],
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Initiatives', to: '/initiatives' },
  { label: 'Our Impact', to: '/gallery' },
  { label: 'Stories', to: '/stories' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Contact Us', to: '/contact' },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Our Initiatives', to: '/initiatives' },
    { label: 'Our Impact', to: '/gallery' },
    { label: 'Stories', to: '/stories' },
    { label: 'Contact Us', to: '/contact' },
  ],
  initiatives: [
    { label: 'Education', to: '/initiatives' },
    { label: 'Healthcare', to: '/initiatives' },
    { label: 'Empowerment', to: '/initiatives' },
    { label: 'Social Welfare', to: '/initiatives' },
  ],
  getInvolved: [
    { label: 'Donate', to: '/get-involved' },
    { label: 'Volunteer', to: '/get-involved' },
    { label: 'Partner With Us', to: '/get-involved' },
    { label: 'Spread the Word', to: '/get-involved' },
  ],
};

export const donationConfig = {
  amounts: [500, 1000, 5000, 10000],
  purposes: [
    'Education',
    'Healthcare',
    'Food Support',
    'Women Empowerment',
    'General Donation',
  ],
};
