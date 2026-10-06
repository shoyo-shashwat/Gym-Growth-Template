export type GymImage = { src: string; alt: string; placeholder: boolean };
export type GymReview = { quote: string; name: string; context: string; placeholder: true };
export type GymProfile = {
  name: string;
  city: string;
  canonicalUrl: string;
  palette: { background: string; text: string; secondary: string; accent: string; surface: string };
  contact: { phone: string; whatsapp: string; bookingUrl: string };
  hours: string;
  address: string;
  mapUrl: string;
  heroImage: GymImage;
  progressImage: GymImage;
  programs: { name: string; summary: string; number: string }[];
  facilities: { name: string; detail: string; image: GymImage }[];
  trainers: { name: string; credentials: string; image: GymImage }[];
  reviews: GymReview[];
};

const imagePlaceholder = (subject: string): GymImage => ({
  src: '',
  alt: `${subject} — replace with an approved FORGE FITNESS facility photo`,
  placeholder: true,
});

export const gym: GymProfile = {
  name: 'FORGE FITNESS',
  city: 'Greater Noida',
  canonicalUrl: 'https://REPLACE-WITH-CANONICAL-DOMAIN.example/',
  palette: {
    background: '#0B0B0B',
    text: '#F5F5F5',
    secondary: '#A5A5A5',
    accent: '#C8FF00',
    surface: '#151515',
  },
  contact: {
    phone: '#contact',
    whatsapp: '#contact',
    bookingUrl: '#contact',
  },
  hours: 'HOURS — PLACEHOLDER, VERIFY BEFORE PUBLISHING',
  address: 'ADDRESS DETAILS — PLACEHOLDER, VERIFY BEFORE PUBLISHING',
  mapUrl: '#location',
  heroImage: imagePlaceholder('Main training floor'),
  progressImage: imagePlaceholder('Member progress story'),
  programs: [
    { number: '01', name: 'Strength training', summary: 'Build a stronger foundation, one considered session at a time.' },
    { number: '02', name: 'Personal training', summary: 'Individual coaching shaped around your goals and experience.' },
    { number: '03', name: 'Weight training', summary: 'Learn sound technique across the essential lifts.' },
    { number: '04', name: 'Conditioning', summary: 'Structured work that develops capacity and consistency.' },
    { number: '05', name: 'Mobility & recovery', summary: 'Make room for movement quality and recovery between sessions.' },
    { number: '06', name: 'Beginner coaching', summary: 'A welcoming starting point with guidance at every step.' },
  ],
  facilities: [
    { name: 'Strength floor', detail: 'A considered space for focused training.', image: imagePlaceholder('Strength floor') },
    { name: 'Free weights', detail: 'Equipment selection — details to be confirmed.', image: imagePlaceholder('Free weights area') },
    { name: 'Resistance machines', detail: 'Machine inventory — details to be confirmed.', image: imagePlaceholder('Resistance machine area') },
    { name: 'Conditioning zone', detail: 'Cardio and conditioning setup — details to be confirmed.', image: imagePlaceholder('Conditioning zone') },
    { name: 'Changing rooms', detail: 'Amenities — details to be confirmed.', image: imagePlaceholder('Changing rooms') },
    { name: 'Studio space', detail: 'Studio use and equipment — details to be confirmed.', image: imagePlaceholder('Studio space') },
  ],
  trainers: [
    { name: 'TRAINER NAME — PLACEHOLDER', credentials: 'Credentials and coaching focus — verify before publishing.', image: imagePlaceholder('Trainer portrait') },
    { name: 'TRAINER NAME — PLACEHOLDER', credentials: 'Credentials and coaching focus — verify before publishing.', image: imagePlaceholder('Trainer portrait') },
    { name: 'TRAINER NAME — PLACEHOLDER', credentials: 'Credentials and coaching focus — verify before publishing.', image: imagePlaceholder('Trainer portrait') },
  ],
  reviews: [
    { quote: 'Member review text placeholder — replace with an approved, genuine review.', name: 'MEMBER NAME — PLACEHOLDER', context: 'Review source — verify before publishing', placeholder: true },
    { quote: 'Member review text placeholder — replace with an approved, genuine review.', name: 'MEMBER NAME — PLACEHOLDER', context: 'Review source — verify before publishing', placeholder: true },
    { quote: 'Member review text placeholder — replace with an approved, genuine review.', name: 'MEMBER NAME — PLACEHOLDER', context: 'Review source — verify before publishing', placeholder: true },
  ],
};

export const placeholderNotice = 'PLACEHOLDER — VERIFY BEFORE PUBLISHING';
export const faqs = [
  { question: 'Can I visit before joining?', answer: 'Use the free-trial contact option to ask the team about a visit. Trial availability and booking details must be confirmed before publishing.' },
  { question: 'Do I need training experience?', answer: 'No experience is required to start a conversation. Ask the team about beginner coaching and the best first session for you.' },
  { question: 'What should I bring?', answer: 'Please confirm current entry requirements with the gym. Comfortable training clothes and appropriate footwear are a sensible starting point.' },
  { question: 'What are the membership options?', answer: 'Membership plans and pricing are not published here. Contact the gym directly for current, confirmed options.' },
  { question: 'Where is FORGE FITNESS?', answer: 'The gym is in Greater Noida. Exact address and map details are placeholders until verified by the gym.' },
];
