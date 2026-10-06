/**
 * Single source of truth for this sales-demo site.
 * Clone this file (or duplicate the artifact) to spin up another gym.
 */

export type GymImage = {
  src: string;
  alt: string;
  placeholder: boolean;
  /** Stable slot id — drop approved photos in /public and set `src` */
  slotId: string;
};

export type GymReviewHighlight = {
  quote: string;
  /** DATA SOURCE — update when replacing with a permissioned review */
  dataSource: string;
  attribution: string;
};

export type GymSiteConfig = {
  conceptLabel: string;
  placeholderNotice: string;
  name: string;
  area: string;
  city: string;
  state: string;
  postalCode: string;
  canonicalUrl: string;
  brandInitials: string;
  brandStampLines: [string, string];
  palette: { background: string; text: string; secondary: string; accent: string; surface: string };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    enquireHref: string;
    instagram: string;
    instagramHandle: string;
  };
  address: {
    lines: string[];
    full: string;
  };
  mapUrl: string;
  rating: {
    /** Display string — e.g. "4.9★ local rating" (avoid hard-coding exact review counts in claims) */
    label: string;
    /** Soft count for demo — e.g. "700+ reviews" */
    countLabel: string;
  };
  hours: {
    mondayToSaturday: string;
    /** VERIFY BEFORE CLIENT PUBLICATION */
    sunday: string;
    sundayNeedsVerification: true;
  };
  ctas: { primary: string; secondary: string; tertiary: string };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineEmphasis: string;
    subheading: string;
    locationLine: string;
    bottomTags: string;
  };
  trust: { claims: string[] };
  why: {
    overline: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    items: { no: string; title: string; text: string }[];
  };
  programsSection: {
    intro: string;
    items: { number: string; name: string; summary: string; image: GymImage }[];
  };
  facilities: { name: string; detail: string; image: GymImage }[];
  trainers: {
    overline: string;
    titleLine1: string;
    titleLine2: string;
    headline: string;
    intro: string;
    benefits: { title: string; text: string }[];
  };
  progressImage: GymImage;
  heroImage: GymImage;
  progressMetrics: { value: string; label: string }[];
  reviews: {
    overline: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
    themes: string[];
    highlight: GymReviewHighlight;
  };
  enquire: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    bullets: string[];
  };
  steps: { no: string; title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

const hofImage = (slotId: string, subject: string): GymImage => ({
  src: '',
  slotId,
  placeholder: true,
  alt: `${subject} — House Of Fitness photo slot (${slotId}). Add an approved gym image to public/ and set src in gym-config.`,
});

export const gym: GymSiteConfig = {
  conceptLabel: 'CONCEPT WEBSITE — CREATED FOR HOUSE OF FITNESS',
  placeholderNotice: 'VERIFY BEFORE CLIENT PUBLICATION',

  name: 'HOUSE OF FITNESS',
  area: 'Gamma 1',
  city: 'Greater Noida',
  state: 'Uttar Pradesh',
  postalCode: '201310',
  canonicalUrl: 'https://REPLACE-WITH-CANONICAL-DOMAIN.example/',
  brandInitials: 'HOF',
  brandStampLines: ['HOUSE OF', 'FITNESS'],

  palette: {
    background: '#0B0B0B',
    text: '#F5F5F5',
    secondary: '#A5A5A5',
    accent: '#C8FF00',
    surface: '#151515',
  },

  contact: {
    phone: 'tel:+917290910202',
    phoneDisplay: '+91 72909 10202',
    whatsapp: 'https://wa.me/917290910202',
    enquireHref: '#contact',
    instagram: 'https://www.instagram.com/houseoffitness_gr_noida/',
    instagramHandle: '@houseoffitness_gr_noida',
  },

  address: {
    lines: [
      '2nd Floor, Prasandi Market, above Freshlee,',
      'Block F, Gamma 1,',
      'Greater Noida, Uttar Pradesh 201310',
    ],
    full: '2nd Floor, Prasandi Market, above Freshlee, Block F, Gamma 1, Greater Noida, Uttar Pradesh 201310',
  },

  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=House+Of+Fitness+Prasandi+Market+Gamma+1+Greater+Noida',

  rating: {
    label: '4.9★ local rating',
    countLabel: '700+ reviews',
  },

  hours: {
    mondayToSaturday: 'Monday–Saturday: 5 AM – 11 PM',
    sunday: 'Sunday: hours to be confirmed',
    sundayNeedsVerification: true,
  },

  ctas: {
    primary: 'ENQUIRE NOW',
    secondary: 'WHATSAPP US',
    tertiary: 'CALL NOW',
  },

  hero: {
    eyebrow: 'HOUSE OF FITNESS',
    headlineLine1: 'TRAIN WITH PURPOSE.',
    headlineLine2: 'GET REAL',
    headlineEmphasis: 'RESULTS.',
    subheading: 'Quality equipment. Supportive trainers. A motivating place to train.',
    locationLine: 'Gamma 1, Greater Noida',
    bottomTags: 'STRENGTH / CARDIO / PERSONAL TRAINING',
  },

  trust: {
    claims: ['4.9★ Local Rating', '700+ Reviews', 'Supportive Trainers', 'Gamma 1 Location'],
  },

  why: {
    overline: '01 / WHY HOUSE OF FITNESS',
    titleLine1: 'MORE THAN',
    titleLine2: 'A GYM.',
    intro: 'Everything you need to train consistently in Gamma 1 — edit these points after you confirm details with the gym.',
    items: [
      { no: '01', title: 'Quality Equipment', text: 'Train with equipment suited to strength, cardio and functional work.' },
      { no: '02', title: 'Supportive Trainers', text: 'Guidance on the floor when you need direction and encouragement.' },
      { no: '03', title: 'Motivating Atmosphere', text: 'A training environment built to keep you showing up.' },
      { no: '04', title: 'Gamma 1 Location', text: 'Convenient for Greater Noida — confirm exact landmarks with the team.' },
    ],
  },

  programsSection: {
    intro: 'Program names and descriptions are editable placeholders until offerings are verified with House Of Fitness.',
    items: [
      {
        number: '01',
        name: 'Strength',
        summary: 'Build strength with barbells, machines and free weights — confirm equipment on site.',
        image: hofImage('hof-program-strength', 'Strength training area'),
      },
      {
        number: '02',
        name: 'Cardio',
        summary: 'Cardio options for endurance and conditioning — verify machines and layout with the gym.',
        image: hofImage('hof-program-cardio', 'Cardio area'),
      },
      {
        number: '03',
        name: 'Personal Training',
        summary: 'One-to-one coaching — enquire about availability and formats.',
        image: hofImage('hof-program-pt', 'Personal training space'),
      },
      {
        number: '04',
        name: 'Functional Training',
        summary: 'Movement-focused training — confirm zones and equipment with the gym.',
        image: hofImage('hof-program-functional', 'Functional training zone'),
      },
      {
        number: '05',
        name: 'Group Fitness',
        summary: 'Group session formats — confirm schedule and class types before publishing.',
        image: hofImage('hof-program-group', 'Group fitness area'),
      },
    ],
  },

  facilities: [
    {
      name: 'Main Gym Floor',
      detail: 'Primary training floor — add an approved wide shot of House Of Fitness.',
      image: hofImage('hof-facility-main-floor', 'Main gym floor'),
    },
    {
      name: 'Strength Zone',
      detail: 'Free weights and strength stations — replace placeholder when photos are available.',
      image: hofImage('hof-facility-strength', 'Strength zone'),
    },
    {
      name: 'Cardio Area',
      detail: 'Cardio machines and conditioning space — photo slot for verified imagery.',
      image: hofImage('hof-facility-cardio', 'Cardio area'),
    },
    {
      name: 'Functional Space',
      detail: 'Functional training layout — description and photo to be confirmed with the gym.',
      image: hofImage('hof-facility-functional', 'Functional training space'),
    },
    {
      name: 'Reception & Welcome',
      detail: 'Front desk and member welcome area — insert a real reception photo when ready.',
      image: hofImage('hof-facility-reception', 'Reception area'),
    },
    {
      name: 'Changing & Amenities',
      detail: 'Locker and amenity details — verify and photograph before publishing.',
      image: hofImage('hof-facility-amenities', 'Changing and amenities'),
    },
  ],

  trainers: {
    overline: '04 / TRAINERS',
    titleLine1: 'TRAINED TO',
    titleLine2: 'SUPPORT YOUR GOALS.',
    headline: 'TRAINED TO SUPPORT YOUR GOALS',
    intro: 'Trainer names, photos and credentials are intentionally omitted until House Of Fitness confirms what can be published.',
    benefits: [
      {
        title: 'Floor Support',
        text: 'Trainers available to help you use equipment safely and stay on track.',
      },
      {
        title: 'Goal-Oriented Guidance',
        text: 'Ask about training options that match your experience and goals.',
      },
      {
        title: 'Motivation That Lasts',
        text: 'A team culture focused on showing up and progressing over time.',
      },
    ],
  },

  heroImage: hofImage('hof-hero-main', 'House Of Fitness hero — main training floor'),

  progressImage: hofImage('hof-progress-story', 'Verified member progress story'),

  progressMetrics: [
    { value: '—', label: 'VERIFIED RESULT' },
    { value: '—', label: 'MEMBER STORY' },
    { value: '—', label: 'DATA SOURCE' },
  ],

  reviews: {
    overline: '06 / REVIEWS',
    titleLine1: 'WHAT MEMBERS',
    titleLine2: 'SAY.',
    intro: 'Themes and excerpt are derived from local listing feedback — replace with permissioned reviews before launch.',
    themes: ['Quality equipment', 'Helpful trainers', 'Motivating environment'],
    highlight: {
      quote: 'The equipment is top-notch and the staff is friendly and helpful.',
      dataSource: 'Local listing reviews (Google) — verify excerpt and attribution before client publication',
      attribution: 'Local review excerpt',
    },
  },

  enquire: {
    eyebrow: 'GET STARTED',
    titleLine1: 'ENQUIRE',
    titleLine2: 'TODAY.',
    body: 'Reach out to learn about membership, timings and training options at House Of Fitness.',
    bullets: ['Ask about membership', 'Confirm gym timings', 'Plan your visit to Gamma 1'],
  },

  steps: [
    { no: '01', title: 'GET IN TOUCH', text: 'Enquire by WhatsApp, phone or the form destination you configure.' },
    { no: '02', title: 'VISIT THE GYM', text: 'See the facility at Prasandi Market, Gamma 1, and meet the team.' },
    { no: '03', title: 'START TRAINING', text: 'Choose a training path that fits your goals with the gym’s guidance.' },
  ],

  faqs: [
    {
      question: 'Where is House Of Fitness located?',
      answer:
        '2nd Floor, Prasandi Market, above Freshlee, Block F, Gamma 1, Greater Noida, Uttar Pradesh 201310. Phone: +91 72909 10202.',
    },
    {
      question: 'What are the gym timings?',
      answer:
        'Monday–Saturday: 5 AM – 11 PM. Sunday: hours to be confirmed (verify before client publication).',
    },
    {
      question: 'What training options are available?',
      answer:
        'Strength, cardio, personal training, functional training and group fitness are listed on this demo site. Confirm current schedules and formats with the gym before publishing.',
    },
    {
      question: 'How do I enquire about membership?',
      answer:
        'Use Enquire Now to jump to contact options, message on WhatsApp, or call the gym directly. Membership and pricing are confirmed by the team — not listed on this concept site.',
    },
    {
      question: 'Is parking available?',
      answer:
        'Parking availability near Prasandi Market has not been verified for this demo. Please confirm with House Of Fitness when you enquire.',
    },
  ],
};

export const placeholderNotice = gym.placeholderNotice;
export const faqs = gym.faqs;
