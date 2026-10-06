export type GymImage = { src: string; alt: string; placeholder: boolean };
export type GymReview = { quote: string; name: string; context: string; placeholder: true };
export type GymProfile = {
  name: string;
  city: string;
  state: string;
  canonicalUrl: string;
  palette: { background: string; text: string; secondary: string; accent: string; surface: string };
  contact: { phone: string; phoneLabel: string; whatsapp: string; bookingUrl: string; instagram: string };
  hours: string;
  address: string;
  mapUrl: string;
  rating: string;
  reviewCount: string;
  heroImage: GymImage;
  progressImage: GymImage;
  programs: { name: string; summary: string; number: string; image: GymImage }[];
  facilities: { name: string; detail: string; image: GymImage }[];
  trainers: { name: string; specialty: string; credentials: string; image: GymImage }[];
  progressMetrics: { value: string; label: string }[];
  reviews: GymReview[];
};

const imagePlaceholder = (subject: string): GymImage => ({
  src: '',
  alt: `${subject} — replace with an approved FORGE FITNESS facility photo`,
  placeholder: true,
});

const referencePhoto = (src: string, subject: string): GymImage => ({
  src,
  alt: `${subject} — sample reference image, replace with the gym's own approved photo`,
  placeholder: true,
});

export const gym: GymProfile = {
  name: 'FORGE FITNESS',
  city: 'Greater Noida',
  state: 'Uttar Pradesh',
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
    phoneLabel: 'PHONE NUMBER — PLACEHOLDER',
    whatsapp: '#contact',
    bookingUrl: '#contact',
    instagram: '#contact',
  },
  hours: 'HOURS — PLACEHOLDER, VERIFY BEFORE PUBLISHING',
  address: 'Greater Noida, Uttar Pradesh',
  mapUrl: '#location',
  rating: '4.9 / 5',
  reviewCount: '500+',
  heroImage: referencePhoto('/images/forge-gym-floor.jpg', 'Gym floor'),
  progressImage: imagePlaceholder('Member progress story'),
  programs: [
    { number: '01', name: 'Strength & Muscle', summary: 'Build strength with training that meets you where you are.', image: referencePhoto('/images/strength-training.jpg', 'Strength training') },
    { number: '02', name: 'Fat Loss', summary: 'Find a consistent training approach that fits your goals.', image: referencePhoto('/images/functional-training.jpg', 'Conditioning session') },
    { number: '03', name: 'Personal Training', summary: 'One-to-one guidance shaped around your goals.', image: referencePhoto('/images/conditioning.jpg', 'Personal training') },
    { number: '04', name: 'Functional Training', summary: 'Train movement, coordination and capacity together.', image: referencePhoto('/images/weight-training.jpg', 'Functional training') },
    { number: '05', name: 'Conditioning', summary: 'Build a steady routine around purposeful conditioning.', image: referencePhoto('/images/cardio.jpg', 'Conditioning area') },
    { number: '06', name: 'Group Training', summary: 'A shared session format, details to be confirmed.', image: referencePhoto('/images/functional-training.jpg', 'Group training') },
  ],
  facilities: [
    { name: 'Gym Floor', detail: 'Facility description — verify before publishing.', image: referencePhoto('/images/forge-gym-floor.jpg', 'Gym floor') },
    { name: 'Strength Area', detail: 'Facility description — verify before publishing.', image: referencePhoto('/images/strength-training.jpg', 'Strength area') },
    { name: 'Cardio', detail: 'Facility description — verify before publishing.', image: referencePhoto('/images/cardio.jpg', 'Cardio area') },
    { name: 'Functional Zone', detail: 'Facility description — verify before publishing.', image: referencePhoto('/images/functional-training.jpg', 'Functional zone') },
    { name: 'Personal Training', detail: 'Facility description — verify before publishing.', image: referencePhoto('/images/conditioning.jpg', 'Personal training area') },
    { name: 'Changing / Recovery', detail: 'Facility description — verify before publishing.', image: imagePlaceholder('Changing and recovery area') },
  ],
  trainers: [
    { name: 'TRAINER NAME — PLACEHOLDER', specialty: 'SPECIALTY — PLACEHOLDER', credentials: 'CREDENTIAL — VERIFY BEFORE PUBLISHING', image: imagePlaceholder('Trainer portrait') },
    { name: 'TRAINER NAME — PLACEHOLDER', specialty: 'SPECIALTY — PLACEHOLDER', credentials: 'CREDENTIAL — VERIFY BEFORE PUBLISHING', image: imagePlaceholder('Trainer portrait') },
    { name: 'TRAINER NAME — PLACEHOLDER', specialty: 'SPECIALTY — PLACEHOLDER', credentials: 'CREDENTIAL — VERIFY BEFORE PUBLISHING', image: imagePlaceholder('Trainer portrait') },
  ],
  progressMetrics: [
    { value: '—', label: 'VERIFIED RESULT' },
    { value: '—', label: 'MEMBER STORY' },
    { value: '—', label: 'DATA SOURCE' },
  ],
  reviews: [
    { quote: 'Member review text placeholder — replace with an approved, genuine review.', name: 'MEMBER NAME — PLACEHOLDER', context: 'Review source — verify before publishing', placeholder: true },
    { quote: 'Member review text placeholder — replace with an approved, genuine review.', name: 'MEMBER NAME — PLACEHOLDER', context: 'Review source — verify before publishing', placeholder: true },
    { quote: 'Member review text placeholder — replace with an approved, genuine review.', name: 'MEMBER NAME — PLACEHOLDER', context: 'Review source — verify before publishing', placeholder: true },
  ],
};

export const placeholderNotice = 'PLACEHOLDER — VERIFY BEFORE PUBLISHING';
export const faqs = [
  { question: 'Do I need prior gym experience?', answer: 'No experience is needed to ask about getting started. Confirm the available beginner support with the gym.' },
  { question: 'What should I bring for my first session?', answer: 'Ask the gym to confirm its current visitor requirements before you come in.' },
  { question: 'Do you offer personal training?', answer: 'Personal training is listed as a program placeholder. Confirm current availability with the gym.' },
  { question: 'Can I try the gym before joining?', answer: 'Use the free-trial contact option to ask about a visit. Trial details need confirmation before publishing.' },
  { question: 'What are your membership options?', answer: 'Membership details are not published yet. Contact the gym for current options and pricing.' },
];
