import { useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Dumbbell, Menu, MessageCircle, Target, Users, X } from 'lucide-react';
import { gym, faqs, placeholderNotice } from './gym-config';

const navItems = [
  ['Programs', '#programs'],
  ['Facilities', '#facilities'],
  ['Trainers', '#trainers'],
  ['Results', '#results'],
  ['Reviews', '#reviews'],
  ['Location', '#location'],
];

function PhotoSlot({ label, className = '', image, eager = false }: { label: string; className?: string; image?: { src: string; alt: string; placeholder: boolean }; eager?: boolean }) {
  return (
    <div className={`image-placeholder ${className}`}>
      {image?.src ? <img className="slot-image" src={image.src} alt={image.alt} width="1200" height="900" loading={eager ? 'eager' : 'lazy'} /> : <span className="mono">{label} / PHOTO PLACEHOLDER</span>}
      {image?.src && image.placeholder && <span className="photo-note mono">REFERENCE PHOTO · REPLACE WITH GYM'S OWN IMAGE</span>}
    </div>
  );
}

function CTA({ children = 'Book free trial', href = gym.contact.bookingUrl, quiet = false }: { children?: ReactNode; href?: string; quiet?: boolean }) {
  return <a className={`btn${quiet ? ' btn-quiet' : ''}`} href={href}>{children}<ArrowUpRight size={16} aria-hidden="true" /></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${gym.name} home`}>
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-type"><strong>{gym.name}</strong><small>{gym.city.toUpperCase()}</small></span>
        </a>
        <div className={`nav-menu${open ? ' is-open' : ''}`}>
          {navItems.map(([title, href]) => <a key={title} href={href} className="nav-link" onClick={() => setOpen(false)}>{title}</a>)}
          <a className="nav-whatsapp" href={gym.contact.whatsapp}><MessageCircle size={15} aria-hidden="true" />WhatsApp</a>
          <CTA>Book free trial</CTA>
        </div>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid wrap">
        <div className="hero-copy rise">
          <p className="eyebrow mono"><span className="live-dot" /> A TRAINING SPACE IN {gym.city.toUpperCase()}</p>
          <h1 className="display">TRAIN HARD.<br />GET REAL <em>RESULTS.</em></h1>
          <p className="hero-sub">Strength training, conditioning and personal coaching built around your goals.</p>
          <div className="hero-actions"><CTA /><a className="text-link" href={gym.contact.whatsapp}><MessageCircle size={16} aria-hidden="true" />WhatsApp us</a></div>
          <p className="hero-rating"><span aria-label="Rating placeholder: five stars">★★★★★</span> {gym.rating} from {gym.reviewCount} members &amp; reviews <small>{placeholderNotice}</small></p>
          <p className="micro-note mono">NO PRESSURE. JUST A FIRST SESSION.</p>
        </div>
        <div className="hero-art">
          <PhotoSlot label="Main training floor" className="hero-photo" image={gym.heroImage} eager />
          <div className="hero-art-stamp"><span>FF</span><small>FORGE<br />FITNESS</small></div>
          <div className="hero-side mono">01 / TRAINING • {gym.city.toUpperCase()}</div>
          <div className="hero-coordinate mono">REFERENCE PHOTO — REPLACE WITH APPROVED GYM PHOTOGRAPHY</div>
        </div>
      </div>
      <div className="hero-bottom wrap"><span className="mono">STRENGTH / CONDITIONING / COACHING</span><a href="#why" aria-label="Scroll to why train here"><ArrowDownRight size={18} /></a><span className="mono">SCROLL TO EXPLORE</span></div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="trust" aria-label="Gym details">
      <div className="wrap trust-inner">
        <div className="trust-label mono">LOCAL DETAILS<br />TO VERIFY</div>
        {['4.9★ Local Rating', '500+ Reviews', 'Expert Trainers', 'Flexible Training'].map((claim, index) => <div className="trust-item" key={claim}><strong className="display">{String(index + 1).padStart(2, '0')}</strong><span>{claim}<small>{placeholderNotice}</small></span></div>)}
        <div className="trust-review"><strong>★★★★★ {gym.rating} <span>·</span> {gym.reviewCount}</strong><small>{placeholderNotice}</small><span>Rating &amp; review count placeholders</span></div>
      </div>
    </section>
  );
}

function SectionIntro({ overline, title, text }: { overline: string; title: ReactNode; text?: string }) {
  return <div className="section-intro"><p className="eyebrow mono">{overline}</p><h2 className="display section-heading">{title}</h2>{text && <p className="intro-text">{text}</p>}</div>;
}

function WhySection() {
  const items = [
    { no: '01', title: 'Expert Coaching', text: 'Guidance shaped around your experience and goals.', icon: <Users aria-hidden="true" /> },
    { no: '02', title: 'Serious Equipment', text: 'Equipment details and images to be confirmed by the gym.', icon: <Dumbbell aria-hidden="true" /> },
    { no: '03', title: 'Goal-Focused Training', text: 'A clear place to start and a plan you can build on.', icon: <Target aria-hidden="true" /> },
    { no: '04', title: 'Supportive Community', text: 'Replace with a verified description of the gym community.', icon: <Users aria-hidden="true" /> },
  ];
  return <section className="section why" id="why"><div className="wrap"><SectionIntro overline="01 / WHY TRAIN HERE" title={<>MORE THAN<br />A GYM.</>} text="Everything you need to train consistently, improve performance and stay accountable." />
    <p className="placeholder why-notice">{placeholderNotice} · COACHING, EQUIPMENT &amp; COMMUNITY DETAILS</p>
    <div className="why-grid">{items.map(({ no, title, text, icon }) => <article className="why-card" key={no}><span className="card-number mono">{no} /</span><span className="card-icon">{icon}</span><h3 className="display">{title}</h3><p>{text}</p></article>)}</div>
  </div></section>;
}

function ProgramCard({ number, name, summary, image }: { number: string; name: string; summary: string; image: typeof gym.heroImage }) {
  return <article className="program-card"><PhotoSlot label={name} image={image} className="program-photo" /><div className="program-top mono"><span>{number} — PROGRAM</span><ArrowUpRight size={18} aria-hidden="true" /></div><h3 className="display">{name}</h3><p>{summary}</p><a className="program-link" href="#contact" aria-label={`Ask about ${name}`}>ASK ABOUT THIS <ArrowRight size={14} /></a></article>;
}

function Programs() {
  return <section className="section programs" id="programs"><div className="wrap"><div className="program-heading"><SectionIntro overline="02 / PROGRAMS" title={<>TRAIN FOR<br />YOUR GOAL.</>} text="Choose a starting point. Details for every program can be tailored to the gym." /><CTA href={gym.contact.whatsapp} quiet>WhatsApp us</CTA></div>
    <p className="placeholder section-placeholder">{placeholderNotice} · PROGRAM AVAILABILITY &amp; PHOTO REFERENCES</p><div className="program-grid">{gym.programs.map(program => <ProgramCard key={program.number} {...program} />)}</div>
  </div></section>;
}

function FacilityCard({ item, index }: { item: typeof gym.facilities[number]; index: number }) {
  return <article className={`facility-card facility-${index + 1}`}><PhotoSlot label={item.name} image={item.image} /><div className="facility-caption"><div><span className="mono">{String(index + 1).padStart(2, '0')} / PLACEHOLDER</span><h3 className="display">{item.name}</h3><p>{item.detail}</p></div><ArrowUpRight size={18} aria-hidden="true" /></div></article>;
}

function Facilities() {
  return <section className="section facilities" id="facilities"><div className="wrap"><div className="facility-head"><SectionIntro overline="03 / FACILITIES" title={<>BUILT FOR<br />BETTER TRAINING.</>} text="Every image and amenity description is a replaceable placeholder until approved gym assets and details are supplied." /><p className="facility-key mono">REFERENCE IMAGES<br />REPLACE BEFORE LAUNCH</p></div>
    <div className="facility-grid">{gym.facilities.map((item, index) => <FacilityCard key={item.name} item={item} index={index} />)}</div>
  </div></section>;
}

function TrainerCard({ trainer, index }: { trainer: typeof gym.trainers[number]; index: number }) {
  return <article className="trainer-card"><PhotoSlot label={`Coach ${index + 1}`} image={trainer.image} /><div className="trainer-meta"><span className="mono">COACH / 0{index + 1}</span><h3 className="display">{trainer.name}</h3><p>{trainer.specialty}</p><small>{trainer.credentials}</small></div></article>;
}

function Coaches() {
  return <section className="section coaches" id="trainers"><div className="wrap"><div className="coach-head"><SectionIntro overline="04 / TRAINERS" title={<>COACHED.<br />NOT JUST SUPERVISED.</>} text="Trainer names, specialties, credentials, and portraits are placeholders pending gym approval." /><CTA href={gym.contact.whatsapp} quiet>Ask about coaching</CTA></div>
    <div className="trainer-grid">{gym.trainers.map((trainer, index) => <TrainerCard key={`${trainer.name}-${index}`} trainer={trainer} index={index} />)}</div>
  </div></section>;
}

function Progress() {
  return <section className="progress-section" id="results"><div className="wrap progress-layout"><div className="progress-image"><PhotoSlot label="Member progress story" image={gym.progressImage} /><div className="progress-overprint mono">ADD VERIFIED MEMBER TRANSFORMATION</div></div><div className="progress-copy"><p className="eyebrow mono">05 / RESULTS</p><h2 className="display">REAL WORK.<br /><em>REAL PROGRESS.</em></h2><p>Member stories and progress visuals belong here only after the gym verifies them and receives permission to share.</p><div className="progress-metrics">{gym.progressMetrics.map((metric, index) => <div className="progress-stat" key={metric.label}><strong className="display">{metric.value}</strong><span>{metric.label}<br /><small>{placeholderNotice}</small></span></div>)}</div><p className="placeholder">DO NOT PUBLISH UNSUPPORTED RESULTS OR TRANSFORMATION PHOTOS</p><CTA>Book free trial</CTA></div></div></section>;
}

function ReviewCard({ review, index }: { review: typeof gym.reviews[number]; index: number }) {
  return <article className="review-card"><div className="review-top"><span className="mono">REVIEW / 0{index + 1}</span><span className="review-stars" aria-label="Rating placeholder">★★★★★</span></div><span className="placeholder">{placeholderNotice}</span><blockquote>“{review.quote}”</blockquote><div className="review-person"><span className="review-avatar">{String(index + 1).padStart(2, '0')}</span><span><strong>{review.name}</strong><small>{review.context}</small></span></div></article>;
}

function Reviews() {
  return <section className="section reviews" id="reviews"><div className="wrap"><SectionIntro overline="06 / REVIEWS" title={<>WHAT MEMBERS<br />SAY.</>} text="Replace these cards with genuine, permissioned reviews before publishing." />
    <p className="review-summary"><span aria-label="Rating placeholder: five stars">★★★★★</span> <strong>{gym.rating}</strong> <span>·</span> {gym.reviewCount} Reviews <small>{placeholderNotice}</small></p>
    <div className="review-grid">{gym.reviews.map((review, index) => <ReviewCard key={index} review={review} index={index} />)}</div>
    <p className="review-disclaimer mono">{placeholderNotice} · REVIEWS, MEMBER NAMES, STAR SCORES & SOURCE</p>
  </div></section>;
}

function Trial() {
  return <section className="trial" id="trial"><div className="wrap trial-inner" id="contact"><div><p className="eyebrow mono">YOUR FIRST SESSION STARTS HERE</p><h2 className="display">COME TRAIN<br />WITH US.</h2><p>See the facility, meet the trainers and experience a session before you commit.</p><ul className="trial-benefits"><li>Tour the facility</li><li>Meet the trainers</li><li>Try a session</li></ul></div><div className="trial-action"><CTA>Book free trial</CTA><a className="btn btn-quiet" href={gym.contact.whatsapp}>Chat on WhatsApp <MessageCircle size={16} aria-hidden="true" /></a><span className="mono">BOOKING &amp; WHATSAPP DESTINATIONS ARE PLACEHOLDERS</span></div><div className="trial-index display">FF<span>01</span></div></div></section>;
}

function Steps() {
  const steps = [
    ['01', 'Book a trial', 'Choose a time to visit once the booking link is configured.'],
    ['02', 'Visit the gym', 'Tour the facility and meet the trainers.'],
    ['03', 'Start training', 'Talk through your goals and choose a next step.'],
  ];
  return <section className="section steps"><div className="wrap steps-wrap"><SectionIntro overline="07 / HOW TO GET STARTED" title={<>THREE STEPS.<br />NO GUESSWORK.</>} /><div className="steps-list">{steps.map(([no, title, text]) => <article className="step" key={no}><span className="mono">{no}</span><h3 className="display">{title}</h3><p>{text}</p><ArrowDownRight size={18} /></article>)}</div></div></section>;
}

function Location() {
  return <section className="section location" id="location"><div className="wrap location-layout"><div className="location-main"><SectionIntro overline="08 / LOCATION" title={<>FIND US.</>} text="Confirm the exact address before you set out." />
      <div className="location-address"><span className="mono">ADDRESS</span><p>{gym.address}</p><span className="placeholder">{placeholderNotice}</span></div>
      <div className="location-actions"><CTA href={gym.mapUrl} quiet>Directions</CTA><CTA href={gym.contact.phone} quiet>Call the gym</CTA><CTA href={gym.contact.whatsapp} quiet>WhatsApp</CTA></div>
      <p className="placeholder contact-placeholder">{placeholderNotice} · PHONE, WHATSAPP & DIRECTIONS TARGETS ARE CONFIGURATION PLACEHOLDERS</p>
    </div><div className="map-panel" role="img" aria-label={`Google Maps placeholder for ${gym.city}, ${gym.state}. Add verified directions before publishing.`}><span className="map-pin"><span /></span><div className="map-copy"><span className="mono">GOOGLE MAPS / PLACEHOLDER</span><strong className="display">{gym.city}, {gym.state}</strong><small>MAP EMBED &amp; DIRECTIONS — REPLACE AFTER ADDRESS VERIFICATION</small></div><div className="map-cross">+</div></div>
    <div className="hours-strip"><span className="mono">OPENING HOURS</span><strong>{gym.hours}</strong><span className="placeholder">{placeholderNotice}</span></div>
  </div></section>;
}

function FAQ() {
  return <section className="section faq" id="faq"><div className="wrap faq-layout"><SectionIntro overline="09 / GOOD TO KNOW" title={<>QUESTIONS,<br />ANSWERED.</>} text="Not sure where to start? Here are a few useful things to know." /><div className="faq-list">{faqs.map((item, index) => <details className="faq-item" key={item.question}><summary><span className="mono">0{index + 1}</span><strong>{item.question}</strong><span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="final-cta"><div className="wrap final-inner"><span className="eyebrow mono">THE NEXT REP IS YOURS</span><h2 className="display">YOUR NEXT WORKOUT<br /><em>STARTS HERE.</em></h2><p>Start with a conversation. See if FORGE feels like your kind of place.</p><div className="final-actions"><CTA>Book free trial</CTA><a className="btn btn-quiet" href={gym.contact.whatsapp}>WhatsApp us <MessageCircle size={16} aria-hidden="true" /></a></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-main"><a className="brand" href="#home" aria-label={`${gym.name} back to top`}><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-type"><strong>{gym.name}</strong><small>{gym.city.toUpperCase()}</small></span></a><p>Serious training.<br />Local to {gym.city}.</p><div className="footer-nav"><span className="mono">EXPLORE</span>{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div><div className="footer-contact"><span className="mono">GET IN TOUCH</span><a href={gym.contact.phone}>{gym.contact.phoneLabel}</a><a href={gym.contact.whatsapp}>WhatsApp — placeholder</a><a href="#location">Address — placeholder</a><a href={gym.contact.instagram}>Instagram — placeholder</a><a href="#location">Opening hours — placeholder</a></div><div className="footer-legal" id="legal-placeholders"><span className="mono">LEGAL</span><a href="#legal-placeholders">Terms — placeholder</a><a href="#legal-placeholders">Privacy — placeholder</a><small>Legal pages must be supplied before publishing.</small></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {gym.name}</span><span className="mono">A PLACE FOR THE WORK.</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>;
}

function MobileStickyCTA() {
  return <div className="mobile-sticky" aria-label="Quick contact actions"><span className="sticky-config-note mono">TRIAL &amp; WHATSAPP DESTINATIONS — PLACEHOLDERS</span><a href={gym.contact.bookingUrl} className="btn">Book free trial <ArrowUpRight size={15} /></a><a href={gym.contact.whatsapp} className="btn btn-quiet" aria-label="WhatsApp contact destination placeholder">WhatsApp <MessageCircle size={15} aria-hidden="true" /></a></div>;
}

function App() {
  return <div className="app-shell" style={{
    '--gym-background': gym.palette.background,
    '--gym-text': gym.palette.text,
    '--gym-secondary': gym.palette.secondary,
    '--gym-accent': gym.palette.accent,
    '--gym-surface': gym.palette.surface,
   } as CSSProperties}>
     <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
     <main id="main-content">
      <Hero /><TrustBar /><WhySection /><Programs /><Facilities /><Coaches /><Progress /><Reviews /><Trial /><Steps /><Location /><FAQ /><FinalCTA />
    </main>
    <Footer /><MobileStickyCTA />
  </div>;
}

export default App;
