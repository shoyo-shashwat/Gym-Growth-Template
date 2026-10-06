export type Img = { src: string; alt: string; caption: string };
export type IconKey = 'strength' | 'cardio' | 'coach' | 'group';

export type Gym = {
  name: string;
  short: string;
  area: string;
  city: string;
  conceptLine: string;
  contact: { phone: string; phoneDisplay: string; whatsapp: string; instagram?: string; instagramHandle?: string };
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
  trainersLead: string;
  trainers: { title: string; text: string }[];
  goals: string[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

/** Photos are public listing images for the sales demo only. Replace with owner-approved or professionally shot originals before launch. */
export const photo = (slug: string, file: string, alt: string, caption: string): Img => ({ src: `/images/${slug}/${file}`, alt, caption });
