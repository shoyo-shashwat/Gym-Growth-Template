import { useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { gym, faqs, placeholderNotice } from './gym-config';

const navItems = [
  ['Training', '#programs'],
  ['The space', '#facilities'],
  ['Coaches', '#coaches'],
  ['Reviews', '#reviews'],
  ['Find us', '#location'],
];

function PhotoSlot({ label, className = '', image, eager = false }: { label: string; className?: string; image?: { src: string; alt: string; placeholder: boolean }; eager?: boolean }) {
  return (
    <div className={`image-placeholder ${className}`} role="img" aria-label={`${label} photo placeholder — replace before publishing`}>
      {image?.src ? <img className="slot-image" src={image.src} alt="" width="1200" height="900" loading={eager ? 'eager' : 'lazy'} /> : <span className="mono">{label} / PHOTO PLACEHOLDER</span>}
    </div>
  );
}

function CTA({ children = 'Book a free trial', href = gym.contact.bookingUrl, quiet = false }: { children?: ReactNode; href?: string; quiet?: boolean }) {
  return <a className={`btn${quiet ? ' btn-quiet' : ''}`} href={href}>{children}<ArrowUpRight size={16} aria-hidden="true" /></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${gym.name} home`}>
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-type"><strong>{gym.name}</strong><small>GREATER NOIDA</small></span>
        </a>
        <div className={`nav-menu${open ? ' is-open' : ''}`}>
          {navItems.map(([title, href]) => <a key={title} href={href} className="nav-link" onClick={() => setOpen(false)}>{title}</a>)}
          <CTA>Start here</CTA>
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
          <p className="hero-sub">A serious place to put in the work. Thoughtful coaching, purposeful training, and room to get stronger at your pace.</p>
          <div className="hero-actions"><CTA /><a className="text-link" href="#programs">Explore training <ArrowDownRight size={16} /></a></div>
          <p className="micro-note mono">NO PRESSURE. JUST A FIRST SESSION.</p>
        </div>
        <div className="hero-art">
          <PhotoSlot label="Main training floor" className="hero-photo" image={gym.heroImage} eager />
          <div className="hero-art-stamp"><span>FF</span><small>BUILT FOR<br />THE WORK</small></div>
          <div className="hero-side mono">01 / TRAINING • {gym.city.toUpperCase()}</div>
          <div className="hero-coordinate mono">FACILITY IMAGE — REPLACE WITH APPROVED GYM PHOTOGRAPHY</div>
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
        <div className="trust-label mono">THE DETAILS<br />THAT MATTER</div>
        <div className="trust-item"><strong className="display">01</strong><span>COACH-LED<br />TRAINING</span></div>
        <div className="trust-item"><strong className="display">02</strong><span>SPACE TO<br />GET TO WORK</span></div>
        <div className="trust-item"><strong className="display">03</strong><span>IN {gym.city.toUpperCase()}<br />FOR YOUR ROUTINE</span></div>
        <div className="trust-review"><strong>4.9/5 <span>·</span> 500+</strong><small>{placeholderNotice}</small><span>Rating & member count demo values</span></div>
      </div>
    </section>
  );
}

function SectionIntro({ overline, title, text }: { overline: string; title: string; text?: string }) {
  return <div className="section-intro"><p className="eyebrow mono">{overline}</p><h2 className="display section-heading">{title}</h2>{text && <p className="intro-text">{text}</p>}</div>;
}

function WhySection() {
  const items = [
    ['01', 'Coaching with purpose', 'Clear guidance that meets you where you are, then helps you move forward.'],
    ['02', 'A plan you can follow', 'Training built around repeatable habits, not quick fixes or loud promises.'],
    ['03', 'Serious, not intimidating', 'A focused training environment with space for every level of experience.'],
    ['04', 'Your local training base', `A neighborhood gym in ${gym.city}, made for showing up consistently.`],
  ];
  return <section className="section why" id="why"><div className="wrap"><SectionIntro overline="01 / WHY FORGE" title={<>GOOD WORK.<br />DONE CONSISTENTLY.</>} text="Progress is built session by session. We make the work clear, the coaching personal, and the next step easier to take." />
    <div className="why-grid">{items.map(([no, title, text]) => <article className="why-card" key={no}><span className="card-number mono">{no} /</span><span className="card-cross">+</span><h3 className="display">{title}</h3><p>{text}</p></article>)}</div>
  </div></section>;
}

function ProgramCard({ number, name, summary }: { number: string; name: string; summary: string }) {
  return <article className="program-card"><div className="program-top mono"><span>{number} — PROGRAM</span><ArrowUpRight size={18} aria-hidden="true" /></div><h3 className="display">{name}</h3><p>{summary}</p><a className="program-link" href="#contact" aria-label={`Ask about ${name}`}>ASK ABOUT THIS <ArrowRight size={14} /></a></article>;
}

function Programs() {
  return <section className="section programs" id="programs"><div className="wrap"><div className="program-heading"><SectionIntro overline="02 / TRAIN WITH INTENT" title={<>FIND YOUR<br />WAY TO TRAIN.</>} text="Start with what fits. We’ll help you make it yours." /><CTA quiet>Talk training with us</CTA></div>
    <p className="placeholder section-placeholder">{placeholderNotice} · PROGRAM TITLES & DESCRIPTIONS</p><div className="program-grid">{gym.programs.map(program => <ProgramCard key={program.number} {...program} />)}</div>
  </div></section>;
}

function FacilityCard({ item, index }: { item: typeof gym.facilities[number]; index: number }) {
  return <article className={`facility-card facility-${index + 1}`}><PhotoSlot label={item.name} image={item.image} /><div className="facility-caption"><div><span className="mono">{String(index + 1).padStart(2, '0')} / PLACEHOLDER</span><h3 className="display">{item.name}</h3><p>{item.detail}</p></div><ArrowUpRight size={18} aria-hidden="true" /></div></article>;
}

function Facilities() {
  return <section className="section facilities" id="facilities"><div className="wrap"><div className="facility-head"><SectionIntro overline="03 / THE SPACE" title={<>ROOM TO<br />PUT IN WORK.</>} text="Get a feel for the place. Every image and facility detail below is a replaceable placeholder until approved gym assets are supplied." /><p className="facility-key mono">ALL SIX IMAGES<br />ARE PLACEHOLDERS</p></div>
    <div className="facility-grid">{gym.facilities.map((item, index) => <FacilityCard key={item.name} item={item} index={index} />)}</div>
  </div></section>;
}

function TrainerCard({ trainer, index }: { trainer: typeof gym.trainers[number]; index: number }) {
  return <article className="trainer-card"><PhotoSlot label={`Coach ${index + 1}`} image={trainer.image} /><div className="trainer-meta"><span className="mono">COACH / 0{index + 1}</span><h3 className="display">{trainer.name}</h3><p>{trainer.credentials}</p></div></article>;
}

function Coaches() {
  return <section className="section coaches" id="coaches"><div className="wrap"><div className="coach-head"><SectionIntro overline="04 / PEOPLE WHO COACH" title={<>GOOD COACHING<br />CHANGES THE WORK.</>} text="Meet the people behind your sessions. Names, credentials, and portraits are placeholders pending gym approval." /><CTA quiet>Ask about coaching</CTA></div>
    <div className="trainer-grid">{gym.trainers.map((trainer, index) => <TrainerCard key={`${trainer.name}-${index}`} trainer={trainer} index={index} />)}</div>
  </div></section>;
}

function Progress() {
  return <section className="progress-section"><div className="wrap progress-layout"><div className="progress-image"><PhotoSlot label="Member progress story" image={gym.progressImage} /><div className="progress-overprint mono">MEMBER STORY PLACEHOLDER<br />NO TRANSFORMATION PHOTOS SUPPLIED</div></div><div className="progress-copy"><p className="eyebrow mono">05 / YOUR PROGRESS</p><h2 className="display">REAL PROGRESS.<br /><em>YOUR TERMS.</em></h2><p>There’s no one-size-fits-all finish line. We’ll help you set a useful direction, build a plan, and notice the work you’re putting in.</p><div className="progress-stat"><strong className="display">—</strong><span>RESULT DATA PLACEHOLDER<br /><small>REPLACE WITH VERIFIED, CONSENTED DATA</small></span></div><p className="placeholder">{placeholderNotice} · ALL TRANSFORMATION IMAGES & DATA</p><CTA>Start with a trial</CTA></div></div></section>;
}

function ReviewCard({ review, index }: { review: typeof gym.reviews[number]; index: number }) {
  return <article className="review-card"><div className="review-top"><span className="mono">REVIEW / 0{index + 1}</span><span className="review-stars" aria-label="Rating placeholder">★★★★★</span></div><span className="placeholder">{placeholderNotice}</span><blockquote>“{review.quote}”</blockquote><div className="review-person"><span className="review-avatar">{String(index + 1).padStart(2, '0')}</span><span><strong>{review.name}</strong><small>{review.context}</small></span></div></article>;
}

function Reviews() {
  return <section className="section reviews" id="reviews"><div className="wrap"><SectionIntro overline="06 / WORD OF MOUTH" title={<>HEAR IT FROM<br />THE MEMBERS.</>} text="These review cards are deliberately sample placeholders. Replace with genuine, permissioned member feedback before publishing." />
    <div className="review-grid">{gym.reviews.map((review, index) => <ReviewCard key={index} review={review} index={index} />)}</div>
    <p className="review-disclaimer mono">{placeholderNotice} · REVIEWS, MEMBER NAMES, STAR SCORES & SOURCE</p>
  </div></section>;
}

function Trial() {
  return <section className="trial" id="trial"><div className="wrap trial-inner" id="contact"><div><p className="eyebrow mono">YOUR FIRST SESSION STARTS HERE</p><h2 className="display">COME SEE<br />WHAT FITS.</h2><p>Tell us what you’re looking for. We’ll help you figure out a good first visit—no commitment required to ask.</p></div><div className="trial-action"><CTA>Book a free trial</CTA><span className="mono">BOOKING LINK PLACEHOLDER — NO BOOKING SUBMITTED</span></div><div className="trial-index display">FF<span>01</span></div></div></section>;
}

function Steps() {
  const steps = [
    ['01', 'Start a conversation', 'Tell us a little about what you want from training.'],
    ['02', 'Come by the gym', 'See the space and ask your questions in person.'],
    ['03', 'Find your rhythm', 'Choose a next step that feels right for you.'],
  ];
  return <section className="section steps"><div className="wrap steps-wrap"><SectionIntro overline="07 / HOW TO GET STARTED" title={<>THREE STEPS.<br />NO GUESSWORK.</>} /><div className="steps-list">{steps.map(([no, title, text]) => <article className="step" key={no}><span className="mono">{no}</span><h3 className="display">{title}</h3><p>{text}</p><ArrowDownRight size={18} /></article>)}</div></div></section>;
}

function Location() {
  return <section className="section location" id="location"><div className="wrap location-layout"><div className="location-main"><SectionIntro overline="08 / COME THROUGH" title={<>FIND YOUR<br />TRAINING FLOOR.</>} text={`A local training space in ${gym.city}. Confirm the exact address before you set out.`} />
      <div className="location-address"><span className="mono">ADDRESS</span><p>{gym.address}</p><span className="placeholder">{placeholderNotice}</span></div>
      <div className="location-actions"><CTA href={gym.mapUrl} quiet>Directions</CTA><CTA href={gym.contact.phone} quiet>Call the gym</CTA><CTA href={gym.contact.whatsapp} quiet>WhatsApp</CTA></div>
      <p className="placeholder contact-placeholder">{placeholderNotice} · PHONE, WHATSAPP & DIRECTIONS TARGETS ARE CONFIGURATION PLACEHOLDERS</p>
    </div><div className="map-panel" role="img" aria-label="Map and directions placeholder. Exact verified address and map embed must be added before publishing."><span className="map-pin"><span /></span><div className="map-copy"><span className="mono">MAP / PLACEHOLDER</span><strong className="display">{gym.city}</strong><small>MAP EMBED & DIRECTIONS — REPLACE AFTER ADDRESS VERIFICATION</small></div><div className="map-cross">+</div></div>
    <div className="hours-strip"><span className="mono">OPENING HOURS</span><strong>{gym.hours}</strong><span className="placeholder">{placeholderNotice}</span></div>
  </div></section>;
}

function FAQ() {
  return <section className="section faq" id="faq"><div className="wrap faq-layout"><SectionIntro overline="09 / GOOD TO KNOW" title={<>QUESTIONS,<br />ANSWERED.</>} text="Not sure where to start? Here are a few useful things to know." /><div className="faq-list">{faqs.map((item, index) => <details className="faq-item" key={item.question}><summary><span className="mono">0{index + 1}</span><strong>{item.question}</strong><span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="final-cta"><div className="wrap final-inner"><span className="eyebrow mono">THE NEXT REP IS YOURS</span><h2 className="display">SHOW UP.<br /><em>WE’LL TAKE IT FROM THERE.</em></h2><p>Start with a conversation. See if FORGE feels like your kind of place.</p><CTA>Take the first step</CTA></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-main"><a className="brand" href="#home" aria-label={`${gym.name} back to top`}><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-type"><strong>{gym.name}</strong><small>GREATER NOIDA</small></span></a><p>Serious training.<br />Local to {gym.city}.</p><div className="footer-nav"><span className="mono">EXPLORE</span>{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div><div className="footer-contact"><span className="mono">GET IN TOUCH</span><a href="#contact">Phone — placeholder</a><a href="#contact">WhatsApp — placeholder</a><a href="#location">Address — placeholder</a></div><div className="footer-legal" id="legal-placeholders"><span className="mono">LEGAL</span><a href="#legal-placeholders">Terms — placeholder</a><a href="#legal-placeholders">Privacy — placeholder</a><small>Legal pages must be supplied before publishing.</small></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {gym.name}</span><span className="mono">A PLACE FOR THE WORK.</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>;
}

function MobileStickyCTA() {
  return <div className="mobile-sticky" aria-label="Quick contact actions"><span className="sticky-config-note mono">TRIAL & WHATSAPP DESTINATIONS — PLACEHOLDERS</span><a href={gym.contact.bookingUrl} className="btn">Book free trial <ArrowUpRight size={15} /></a><a href={gym.contact.whatsapp} className="btn btn-quiet" aria-label="WhatsApp contact destination placeholder">WhatsApp <ArrowUpRight size={15} /></a></div>;
}

function App() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: gym.name,
    url: gym.canonicalUrl,
    areaServed: { '@type': 'City', name: gym.city },
  };
  return <div className="app-shell" style={{
    '--gym-background': gym.palette.background,
    '--gym-text': gym.palette.text,
    '--gym-secondary': gym.palette.secondary,
    '--gym-accent': gym.palette.accent,
    '--gym-surface': gym.palette.surface,
  } as CSSProperties}>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
    <Navbar />
    <main>
      <Hero /><TrustBar /><WhySection /><Programs /><Facilities /><Coaches /><Progress /><Reviews /><Trial /><Steps /><Location /><FAQ /><FinalCTA />
    </main>
    <Footer /><MobileStickyCTA />
  </div>;
}

export default App;
