/**
 * Single source of truth for one gym's demo site.
 * New gym = edit this file + swap the images in /public/images. Verified facts only (see leads.csv notes).
 * Never invent pricing, trainers or offers.
 */

export type Img = { src: string; alt: string; caption: string };
export type IconKey = 'strength' | 'cardio' | 'coach' | 'group';

export type Gym = {
  name: string;
  short: string;
  area: string;
  city: string;
  conceptLine: string;
  contact: { phone: string; phoneDisplay: string; whatsapp: string; instagram: string; instagramHandle: string };
  address: { lines: string[]; full: string };
  mapUrl: string;
  mapEmbed: string;
  rating: { score: string; count: string; total: string; source: string };
  hours: string;
  hero: { title: string; sub: string; photo: Img };
  /** `highlight` must be a substring of `quote`; it gets the marker treatment */
  reviews: { quote: string; highlight: string; source: string }[];
  /** Google's own review-topic counts */
  topics: { label: string; count: number }[];
  programs: { name: string; text: string; icon: IconKey; tone: 'blue' | 'coral' | 'sun' | 'mint' }[];
  gallery: Img[];
  trainers: { title: string; text: string }[];
  goals: string[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

// Photos are public listing images for the sales demo only. Replace with owner-approved or professionally shot originals before launch.
const photo = (file: string, alt: string, caption: string): Img => ({ src: `/images/${file}`, alt, caption });

export const gym: Gym = {
  name: 'House Of Fitness',
  short: 'HOF',
  area: 'Gamma 1',
  city: 'Greater Noida',
  conceptLine: 'Concept website created for House Of Fitness.',

  contact: {
    phone: 'tel:+917290910202',
    phoneDisplay: '+91 72909 10202',
    whatsapp: 'https://wa.me/917290910202',
    instagram: 'https://www.instagram.com/houseoffitness_gr_noida/',
    instagramHandle: '@houseoffitness_gr_noida',
  },

  address: {
    lines: ['2nd Floor, Prasandi Market, above Freshlee,', 'Block F, Gamma 1, Greater Noida', 'Uttar Pradesh 201310'],
    full: '2nd Floor, Prasandi Market, above Freshlee, Block F, Gamma 1, Greater Noida, Uttar Pradesh 201310',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=House+Of+Fitness+Prasandi+Market+Gamma+1+Greater+Noida',
  mapEmbed: 'https://www.google.com/maps?q=House+Of+Fitness+Prasandi+Market+Gamma+1+Greater+Noida&output=embed',

  rating: { score: '4.9', count: '700+', total: '708', source: 'Google reviews' },
  hours: 'Open until 11 PM. Call to confirm today’s timings.',

  hero: {
    title: '4.9 stars from 700+ members. Come train with them.',
    sub: 'Quality equipment, supportive trainers and a floor that keeps you coming back, in Gamma 1, Greater Noida.',
    photo: photo('hof_2.webp', 'Training floor at House Of Fitness with hexagonal ceiling lights', 'The strength floor'),
  },

  reviews: [
    {
      quote: 'The equipment is top-notch and the staff is friendly and helpful.',
      highlight: 'top-notch',
      source: 'Justdial member review',
    },
    {
      quote: 'Gr Noida biggest gym & amazing cardio area & machines.',
      highlight: 'biggest gym',
      source: 'Google review',
    },
    {
      quote: 'I just love it here more than the other gyms I’ve tried in the country so far.',
      highlight: 'love it here',
      source: 'Justdial member review',
    },
  ],

  topics: [
    { label: 'Helpful staff', count: 45 },
    { label: 'Supportive trainers', count: 36 },
    { label: 'Modern equipment', count: 8 },
    { label: 'Polite trainers', count: 6 },
  ],

  programs: [
    { name: 'Strength', text: 'Machines, benches and free weights for building real strength.', icon: 'strength', tone: 'blue' },
    { name: 'Cardio', text: 'A full cardio area for endurance, fat loss and conditioning.', icon: 'cardio', tone: 'coral' },
    { name: 'Personal training', text: 'One-to-one coaching built around your goal. Ask the team about options.', icon: 'coach', tone: 'sun' },
    { name: 'Group fitness', text: 'Studio space for group sessions and functional work.', icon: 'group', tone: 'mint' },
  ],

  gallery: [
    photo('hof_3.webp', 'Main gym floor with strength and cardio zones', 'Main floor'),
    photo('hof_1.webp', 'Group studio with the House Of Fitness wall logo', 'Group studio'),
    photo('hof_5.webp', 'Open studio space with zig-zag lighting', 'Open training space'),
  ],

  trainers: [
    { title: 'Floor support', text: 'Help with equipment, form and safe progression.' },
    { title: 'Goal-oriented guidance', text: 'Plans that match your experience and what you want to achieve.' },
    { title: 'Accountability', text: 'A team that notices when you show up, and when you don’t.' },
  ],

  goals: ['Build muscle', 'Lose weight', 'Get stronger', 'Improve fitness', 'Not sure yet'],

  steps: [
    { title: 'Get in touch', text: 'Send an enquiry, WhatsApp us or call the gym.' },
    { title: 'Plan a visit', text: 'Walk through the floor at Prasandi Market and meet the team.' },
    { title: 'Start training', text: 'Choose a membership and a plan that fits your goal.' },
  ],

  faqs: [
    { q: 'Where is House Of Fitness?', a: '2nd Floor, Prasandi Market, above Freshlee, Block F, Gamma 1, Greater Noida, Uttar Pradesh 201310.' },
    { q: 'What are the timings?', a: 'The gym is generally open from early morning until 11 PM. Call +91 72909 10202 to confirm today’s timings.' },
    { q: 'How much is membership?', a: 'Membership options and current pricing are shared by the team. Send an enquiry or WhatsApp us for details.' },
    { q: 'Can I visit before joining?', a: 'Yes. Plan a visit, see the floor and ask the team anything. Send an enquiry to pick a time.' },
    { q: 'Do you offer personal training?', a: 'Personal training and trainer support are available. Ask the team about formats and availability.' },
  ],
};
