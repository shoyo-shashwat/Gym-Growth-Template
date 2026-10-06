/**
 * Single source of truth for one gym's demo site.
 * To make a demo for another gym: copy this file's values, swap the images in /public/images, done.
 * Only put verified facts here (see leads.csv notes). Never invent pricing, trainers or offers.
 */

export type Img = { src: string; alt: string };

export type Gym = {
  name: string;
  short: string;
  area: string;
  city: string;
  tagline: string;
  conceptLine: string;
  contact: { phone: string; phoneDisplay: string; whatsapp: string; instagram: string; instagramHandle: string };
  address: { lines: string[]; full: string };
  mapUrl: string;
  mapEmbed: string;
  rating: { score: string; count: string; source: string };
  hours: string;
  hero: { eyebrow: string; line1: string; line2: string; sub: string; image: Img };
  proof: { value: string; label: string }[];
  why: { title: string; text: string }[];
  programs: { name: string; text: string; image: Img }[];
  facilities: { name: string; image: Img }[];
  trainers: { title: string; text: string }[];
  reviews: { quote: string; source: string }[];
  reviewThemes: string[];
  goals: string[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

// Images are public listing photos for the sales demo only. Replace with owner-approved originals before launch.
const img = (n: number, alt: string): Img => ({ src: `/images/hof_${n}.webp`, alt });

export const gym: Gym = {
  name: 'House Of Fitness',
  short: 'HOF',
  area: 'Gamma 1',
  city: 'Greater Noida',
  tagline: 'Train with purpose. Get real results.',
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

  rating: { score: '4.9', count: '700+', source: 'Google reviews' },
  hours: 'Open until 11 PM · Call to confirm today’s timings',

  hero: {
    eyebrow: 'Gamma 1, Greater Noida',
    line1: 'Train with purpose.',
    line2: 'Get real results.',
    sub: 'Quality equipment. Supportive trainers. A motivating place to train.',
    image: img(2, 'Training floor at House Of Fitness with hexagonal ceiling lighting'),
  },

  proof: [
    { value: '4.9★', label: 'Google rating' },
    { value: '700+', label: 'Google reviews' },
    { value: '11 PM', label: 'Open until' },
    { value: 'Gamma 1', label: 'Greater Noida' },
  ],

  why: [
    { title: 'Quality equipment', text: 'Strength stations, free weights and cardio machines members call top-notch.' },
    { title: 'Supportive trainers', text: 'Friendly, knowledgeable people on the floor when you need direction.' },
    { title: 'Motivating atmosphere', text: 'A clean, well-kept space that makes it easy to keep showing up.' },
    { title: 'Gamma 1 location', text: 'Prasandi Market, above Freshlee. Easy to reach from across Greater Noida.' },
  ],

  programs: [
    { name: 'Strength', text: 'Machines, benches and free weights for building real strength.', image: img(0, 'Bench and strength equipment') },
    { name: 'Cardio', text: 'A full cardio area for endurance, fat loss and conditioning.', image: img(3, 'Main gym floor with cardio and strength zones') },
    { name: 'Personal training', text: 'One-to-one coaching built around your goal. Ask the team about options.', image: img(4, 'Training studio') },
    { name: 'Group fitness', text: 'Studio space for group sessions and functional training.', image: img(5, 'Group training studio') },
  ],

  facilities: [
    { name: 'Main gym floor', image: img(3, 'Main gym floor') },
    { name: 'Strength zone', image: img(2, 'Strength stations') },
    { name: 'Group studio', image: img(1, 'Group training studio') },
  ],

  trainers: [
    { title: 'Floor support', text: 'Help with equipment, form and safe progression.' },
    { title: 'Goal-oriented guidance', text: 'Plans that match your experience and what you want to achieve.' },
    { title: 'Accountability', text: 'A team that notices when you show up and when you don’t.' },
  ],

  reviews: [
    { quote: 'Gr Noida biggest gym & amazing cardio area & machines.', source: 'Google review' },
    { quote: 'The equipment is top-notch and the staff is friendly and helpful.', source: 'Justdial member review' },
    { quote: 'I just love it here more than the other gyms I’ve tried in the country so far.', source: 'Justdial member review' },
  ],
  reviewThemes: ['Top-notch equipment', 'Clean & well-kept', 'Friendly trainers', 'Motivating vibe'],

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
    { q: 'Can I visit before joining?', a: 'Yes. Plan a visit, see the floor and ask the team anything. Enquire to pick a time.' },
    { q: 'Do you offer personal training?', a: 'Personal training and trainer support are available. Ask the team about formats and availability.' },
  ],
};
