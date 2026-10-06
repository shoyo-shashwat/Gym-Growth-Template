/**
 * Fitness Yard, Pi 1, Greater Noida. Verified facts only (Google Maps 6 Oct 2026, see leads.csv).
 * Never invent pricing, trainers or offers. Instagram handle not found yet: add it when known.
 */
import { photo as p, type Gym } from '../gym-types';

const slug = 'fitness-yard';
const photo = (file: string, alt: string, caption: string) => p(slug, file, alt, caption);

export const gym: Gym = {
  name: 'Fitness Yard',
  short: 'FY',
  area: 'Pi 1',
  city: 'Greater Noida',
  conceptLine: 'Concept website created for Fitness Yard.',

  contact: {
    phone: 'tel:+917531000751',
    phoneDisplay: '+91 75310 00751',
    // Assumes this number is on WhatsApp. Confirm with the owner.
    whatsapp: 'https://wa.me/917531000751',
  },

  address: {
    lines: ['Mukhiya Ji Plaza, Sector Pi-1,', 'Accher, Pi I & II, Greater Noida', 'Uttar Pradesh 201315'],
    full: 'Mukhiya Ji Plaza, Sector Pi-1, Accher, Pi I & II, Greater Noida, Uttar Pradesh 201315',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fitness+Yard+Mukhiya+Ji+Plaza+Pi+1+Greater+Noida',
  mapEmbed: 'https://www.google.com/maps?q=Fitness+Yard+Mukhiya+Ji+Plaza+Pi+1+Greater+Noida&output=embed',

  rating: { score: '4.9', count: '600+', total: '627', source: 'Google reviews' },
  hours: 'Open until 10 PM. Call to confirm today’s timings.',

  hero: {
    title: '4.9 stars from 600+ members. Come train with them.',
    sub: 'A spacious floor, modern machines and trainers people trust, in Pi 1, Greater Noida.',
    photo: photo('fy_hero.webp', 'Training floor at Fitness Yard with machines under blue ceiling lights', 'The training floor'),
  },

  reviews: [
    {
      quote: 'The trainers are highly motivating, the machines are well maintained and high quality.',
      highlight: 'highly motivating',
      source: 'Google review',
    },
    {
      quote: 'Nice place for a workout, good trainers, nice environment.',
      highlight: 'good trainers',
      source: 'Google review',
    },
    {
      quote: 'It’s located on the main road and have plenty of space for parking.',
      highlight: 'plenty of space for parking',
      source: 'Google review',
    },
  ],

  topics: [
    { label: 'Trainers', count: 74 },
    { label: 'Spacious gym', count: 13 },
    { label: 'Modern machines', count: 9 },
    { label: 'Clean gym', count: 7 },
  ],

  programs: [
    { name: 'Strength', text: 'Machines and weights for building real strength.', icon: 'strength', tone: 'blue' },
    { name: 'Cardio', text: 'Treadmills and cross trainers for endurance and fat loss.', icon: 'cardio', tone: 'coral' },
    { name: 'Personal training', text: 'One-to-one coaching built around your goal. Ask the team about options.', icon: 'coach', tone: 'sun' },
    { name: 'Functional training', text: 'Turf and open space for conditioning and functional work.', icon: 'group', tone: 'mint' },
  ],

  gallery: [
    photo('fy_floor.webp', 'Wide view of the training floor with a turf runway', 'Training floor'),
    photo('fy_functional.webp', 'Turf zone with a tyre and open training space', 'Functional zone'),
    photo('fy_cardio.webp', 'Cardio machines by the window', 'Cardio area'),
  ],

  trainersLead: 'Trainers are the topic Google reviewers mention most: 74 mentions across 627 reviews.',
  trainers: [
    { title: 'Floor support', text: 'Help with equipment, form and safe progression.' },
    { title: 'Goal-oriented guidance', text: 'Plans that match your experience and what you want to achieve.' },
    { title: 'Accountability', text: 'A team that notices when you show up, and when you don’t.' },
  ],

  goals: ['Build muscle', 'Lose weight', 'Get stronger', 'Improve fitness', 'Not sure yet'],

  steps: [
    { title: 'Get in touch', text: 'Send an enquiry, WhatsApp us or call the gym.' },
    { title: 'Plan a visit', text: 'Walk through the floor at Mukhiya Ji Plaza and meet the team.' },
    { title: 'Start training', text: 'Choose a membership and a plan that fits your goal.' },
  ],

  faqs: [
    { q: 'Where is Fitness Yard?', a: 'Mukhiya Ji Plaza, Sector Pi-1, Accher, Pi I & II, Greater Noida, Uttar Pradesh 201315.' },
    { q: 'What are the timings?', a: 'Listings show different hours, so call +91 75310 00751 to confirm today’s timings before you visit.' },
    { q: 'How much is membership?', a: 'Membership options and current pricing are shared by the team. Send an enquiry or WhatsApp us for details.' },
    { q: 'Is there parking?', a: 'Members mention parking space on the main road. Confirm current parking with the team when you visit.' },
    { q: 'Can I visit before joining?', a: 'Yes. Plan a visit, see the floor and ask the team anything. Send an enquiry to pick a time.' },
  ],
};
