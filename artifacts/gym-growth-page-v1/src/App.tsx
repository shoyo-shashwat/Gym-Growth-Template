import { useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Dumbbell, MapPin, Menu, MessageCircle, Sparkles, Target, Users, X } from 'lucide-react';
import { gym, faqs, placeholderNotice } from './gym-config';

const navItems = [
  ['Programs', '#programs'],
  ['Facilities', '#facilities'],
  ['Trainers', '#trainers'],
  ['Results', '#results'],
  ['Reviews', '#reviews'],
  ['Location', '#location'],
];

function PhotoSlot({
  label,
  className = '',
  image,
  eager = false,
}: {
  label: string;
  className?: string;
  image?: { src: string; alt: string; placeholder: boolean; slotId?: string };
  eager?: boolean;
}) {
  const slotLabel = image?.slotId ? `${label} · ${image.slotId}` : label;
  return (
    <div className={`image-placeholder ${className}`}>
      {image?.src ? (
        <img className="slot-image" src={image.src} alt={image.alt} width="1200" height="900" loading={eager ? 'eager' : 'lazy'} />
      ) : (
        <span className="mono">
          {slotLabel}
          <br />
          HOUSE OF FITNESS / PHOTO SLOT
        </span>
      )}
      {image?.src && image.placeholder && <span className="photo-note mono">APPROVED GYM PHOTO · REPLACE REFERENCE IF USED</span>}
    </div>
  );
}

function CTA({ children = gym.ctas.primary, href = gym.contact.enquireHref, quiet = false }: { children?: ReactNode; href?: string; quiet?: boolean }) {
  return (
    <a className={`btn${quiet ? ' btn-quiet' : ''}`} href={href}>
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <p className="concept-strip mono">{gym.conceptLabel}</p>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${gym.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-type">
            <strong>{gym.name}</strong>
            <small>{gym.area.toUpperCase()}</small>
          </span>
        </a>
        <div className={`nav-menu${open ? ' is-open' : ''}`}>
          {navItems.map(([title, href]) => (
            <a key={title} href={href} className="nav-link" onClick={() => setOpen(false)}>
              {title}
            </a>
          ))}
          <a className="nav-whatsapp" href={gym.contact.whatsapp}>
            <MessageCircle size={15} aria-hidden="true" />
            {gym.ctas.secondary}
          </a>
          <CTA>{gym.ctas.primary}</CTA>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
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
          <p className="eyebrow mono">
            <span className="live-dot" /> {gym.hero.eyebrow} · {gym.hero.locationLine.toUpperCase()}
          </p>
          <h1 className="display">
            {gym.hero.headlineLine1}
            <br />
            {gym.hero.headlineLine2} <em>{gym.hero.headlineEmphasis}</em>
          </h1>
          <p className="hero-sub">{gym.hero.subheading}</p>
          <p className="hero-location mono">
            <MapPin size={14} aria-hidden="true" /> {gym.hero.locationLine}
          </p>
          <div className="hero-actions">
            <CTA>{gym.ctas.primary}</CTA>
            <a className="text-link" href={gym.contact.whatsapp}>
              <MessageCircle size={16} aria-hidden="true" />
              {gym.ctas.secondary}
            </a>
          </div>
          <p className="hero-rating">
            <span aria-label="Local rating">★★★★★</span> {gym.rating.label} · {gym.rating.countLabel}
          </p>
        </div>
        <div className="hero-art">
          <PhotoSlot label="Main training floor" className="hero-photo" image={gym.heroImage} eager />
          <div className="hero-art-stamp">
            <span>{gym.brandInitials}</span>
            <small>
              {gym.brandStampLines[0]}
              <br />
              {gym.brandStampLines[1]}
            </small>
          </div>
          <div className="hero-side mono">
            01 / TRAINING • {gym.area.toUpperCase()}
          </div>
          <div className="hero-coordinate mono">SLOT {gym.heroImage.slotId} — ADD APPROVED HOUSE OF FITNESS PHOTO</div>
        </div>
      </div>
      <div className="hero-bottom wrap">
        <span className="mono">{gym.hero.bottomTags}</span>
        <a href="#why" aria-label="Scroll to why train here">
          <ArrowDownRight size={18} />
        </a>
        <span className="mono">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="trust" aria-label="Gym highlights">
      <div className="wrap trust-inner">
        <div className="trust-label mono">
          HOUSE OF
          <br />
          FITNESS
        </div>
        {gym.trust.claims.map((claim, index) => (
          <div className="trust-item" key={claim}>
            <strong className="display">{String(index + 1).padStart(2, '0')}</strong>
            <span>{claim}</span>
          </div>
        ))}
        <div className="trust-review">
          <strong>
            ★★★★★ {gym.rating.label} <span>·</span> {gym.rating.countLabel}
          </strong>
          <span>Editable rating labels in gym-config</span>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ overline, title, text }: { overline: string; title: ReactNode; text?: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow mono">{overline}</p>
      <h2 className="display section-heading">{title}</h2>
      {text && <p className="intro-text">{text}</p>}
    </div>
  );
}

const whyIcons = [<Dumbbell key="d" aria-hidden="true" />, <Users key="u" aria-hidden="true" />, <Sparkles key="s" aria-hidden="true" />, <MapPin key="m" aria-hidden="true" />];

function WhySection() {
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <SectionIntro
          overline={gym.why.overline}
          title={
            <>
              {gym.why.titleLine1}
              <br />
              {gym.why.titleLine2}
            </>
          }
          text={gym.why.intro}
        />
        <div className="why-grid">
          {gym.why.items.map(({ no, title, text }, index) => (
            <article className="why-card" key={no}>
              <span className="card-number mono">{no} /</span>
              <span className="card-icon">{whyIcons[index] ?? <Target aria-hidden="true" />}</span>
              <h3 className="display">{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ number, name, summary, image }: { number: string; name: string; summary: string; image: typeof gym.heroImage }) {
  return (
    <article className="program-card">
      <PhotoSlot label={name} image={image} className="program-photo" />
      <div className="program-top mono">
        <span>{number} — PROGRAM</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
      <h3 className="display">{name}</h3>
      <p>{summary}</p>
      <a className="program-link" href="#contact" aria-label={`Enquire about ${name}`}>
        ENQUIRE ABOUT THIS <ArrowRight size={14} />
      </a>
    </article>
  );
}

function Programs() {
  return (
    <section className="section programs" id="programs">
      <div className="wrap">
        <div className="program-heading">
          <SectionIntro
            overline="02 / PROGRAMS"
            title={
              <>
                TRAIN FOR
                <br />
                YOUR GOAL.
              </>
            }
            text={gym.programsSection.intro}
          />
          <CTA href={gym.contact.whatsapp} quiet>
            {gym.ctas.secondary}
          </CTA>
        </div>
        <p className="placeholder section-placeholder">{placeholderNotice} · PROGRAM OFFERINGS</p>
        <div className="program-grid">{gym.programsSection.items.map(program => <ProgramCard key={program.number} {...program} />)}</div>
      </div>
    </section>
  );
}

function FacilityCard({ item, index }: { item: typeof gym.facilities[number]; index: number }) {
  return (
    <article className={`facility-card facility-${index + 1}`}>
      <PhotoSlot label={item.name} image={item.image} />
      <div className="facility-caption">
        <div>
          <span className="mono">
            {String(index + 1).padStart(2, '0')} / {item.image.slotId}
          </span>
          <h3 className="display">{item.name}</h3>
          <p>{item.detail}</p>
        </div>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
    </article>
  );
}

function Facilities() {
  return (
    <section className="section facilities" id="facilities">
      <div className="wrap">
        <div className="facility-head">
          <SectionIntro
            overline="03 / FACILITIES"
            title={
              <>
                BUILT FOR
                <br />
                BETTER TRAINING.
              </>
            }
            text="Each card is a named photo slot for House Of Fitness — add src paths in gym-config when assets are ready."
          />
          <p className="facility-key mono">
            IMAGE SLOTS
            <br />
            hof-facility-*
          </p>
        </div>
        <div className="facility-grid">{gym.facilities.map((item, index) => <FacilityCard key={item.image.slotId} item={item} index={index} />)}</div>
      </div>
    </section>
  );
}

function TrainerBenefitCard({ title, text, index }: { title: string; text: string; index: number }) {
  return (
    <article className="trainer-card trainer-benefit">
      <div className="trainer-benefit-index mono">0{index + 1}</div>
      <div className="trainer-meta">
        <h3 className="display">{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function Coaches() {
  return (
    <section className="section coaches" id="trainers">
      <div className="wrap">
        <div className="coach-head">
          <SectionIntro
            overline={gym.trainers.overline}
            title={
              <>
                {gym.trainers.titleLine1}
                <br />
                {gym.trainers.titleLine2}
              </>
            }
            text={gym.trainers.intro}
          />
          <CTA href={gym.contact.enquireHref} quiet>
            {gym.ctas.primary}
          </CTA>
        </div>
        <p className="trainer-headline display">{gym.trainers.headline}</p>
        <div className="trainer-grid">{gym.trainers.benefits.map((benefit, index) => <TrainerBenefitCard key={benefit.title} {...benefit} index={index} />)}</div>
      </div>
    </section>
  );
}

function Progress() {
  return (
    <section className="progress-section" id="results">
      <div className="wrap progress-layout">
        <div className="progress-image">
          <PhotoSlot label="Member progress story" image={gym.progressImage} />
          <div className="progress-overprint mono">ADD VERIFIED MEMBER STORY ONLY</div>
        </div>
        <div className="progress-copy">
          <p className="eyebrow mono">05 / RESULTS</p>
          <h2 className="display">
            REAL WORK.
            <br />
            <em>REAL PROGRESS.</em>
          </h2>
          <p>Member stories and progress visuals belong here only after the gym verifies them and receives permission to share.</p>
          <div className="progress-metrics">
            {gym.progressMetrics.map(metric => (
              <div className="progress-stat" key={metric.label}>
                <strong className="display">{metric.value}</strong>
                <span>
                  {metric.label}
                  <br />
                  <small>{placeholderNotice}</small>
                </span>
              </div>
            ))}
          </div>
          <p className="placeholder">DO NOT PUBLISH UNSUPPORTED RESULTS OR TRANSFORMATION PHOTOS</p>
          <CTA>{gym.ctas.primary}</CTA>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const { highlight, themes } = gym.reviews;
  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <SectionIntro
          overline={gym.reviews.overline}
          title={
            <>
              {gym.reviews.titleLine1}
              <br />
              {gym.reviews.titleLine2}
            </>
          }
          text={gym.reviews.intro}
        />
        <p className="review-summary">
          <span aria-label="Local rating">★★★★★</span> <strong>{gym.rating.label}</strong>
        </p>
        <ul className="review-themes" aria-label="Common review themes">
          {themes.map(theme => (
            <li key={theme} className="mono">
              {theme}
            </li>
          ))}
        </ul>
        <article className="review-card review-highlight">
          <div className="review-top">
            <span className="mono">REVIEW EXCERPT</span>
            <span className="review-stars" aria-label="Five star review">
              ★★★★★
            </span>
          </div>
          <span className="placeholder">DATA SOURCE: {highlight.dataSource}</span>
          <blockquote>“{highlight.quote}”</blockquote>
          <div className="review-person">
            <span className="review-avatar">★</span>
            <span>
              <strong>{highlight.attribution}</strong>
              <small>Edit quote &amp; dataSource in gym-config.ts</small>
            </span>
          </div>
        </article>
        <p className="review-disclaimer mono">{placeholderNotice} · REVIEW TEXT &amp; DATA SOURCE IN gym-config</p>
      </div>
    </section>
  );
}

function Enquire() {
  return (
    <section className="trial" id="contact">
      <div className="wrap trial-inner">
        <div>
          <p className="eyebrow mono">{gym.enquire.eyebrow}</p>
          <h2 className="display">
            {gym.enquire.titleLine1}
            <br />
            {gym.enquire.titleLine2}
          </h2>
          <p>{gym.enquire.body}</p>
          <ul className="trial-benefits">
            {gym.enquire.bullets.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="trial-action">
          <CTA href={gym.contact.enquireHref}>{gym.ctas.primary}</CTA>
          <a className="btn btn-quiet" href={gym.contact.whatsapp}>
            {gym.ctas.secondary} <MessageCircle size={16} aria-hidden="true" />
          </a>
          <a className="btn btn-quiet" href={gym.contact.phone}>
            {gym.ctas.tertiary}
          </a>
        </div>
        <div className="trial-index display">
          {gym.brandInitials}
          <span>01</span>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section steps">
      <div className="wrap steps-wrap">
        <SectionIntro
          overline="07 / HOW TO GET STARTED"
          title={
            <>
              THREE STEPS.
              <br />
              NO GUESSWORK.
            </>
          }
        />
        <div className="steps-list">
          {gym.steps.map(({ no, title, text }) => (
            <article className="step" key={no}>
              <span className="mono">{no}</span>
              <h3 className="display">{title}</h3>
              <p>{text}</p>
              <ArrowDownRight size={18} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="section location" id="location">
      <div className="wrap location-layout">
        <div className="location-main">
          <SectionIntro overline="08 / LOCATION" title={<>FIND US.</>} text={`Visit us in ${gym.area}, ${gym.city}.`} />
          <div className="location-address">
            <span className="mono">ADDRESS</span>
            {gym.address.lines.map(line => (
              <p key={line}>{line}</p>
            ))}
            <a className="location-phone" href={gym.contact.phone}>
              {gym.contact.phoneDisplay}
            </a>
          </div>
          <div className="location-actions">
            <CTA href={gym.mapUrl} quiet>
              Directions
            </CTA>
            <CTA href={gym.contact.phone} quiet>
              {gym.ctas.tertiary}
            </CTA>
            <CTA href={gym.contact.whatsapp} quiet>
              {gym.ctas.secondary}
            </CTA>
          </div>
        </div>
        <div className="map-panel" role="img" aria-label={`Map link for House Of Fitness, ${gym.address.full}`}>
          <span className="map-pin">
            <span />
          </span>
          <div className="map-copy">
            <span className="mono">GOOGLE MAPS</span>
            <strong className="display">
              {gym.area}, {gym.city}
            </strong>
            <small>Prasandi Market · Gamma 1</small>
          </div>
          <div className="map-cross">+</div>
        </div>
        <div className="hours-strip">
          <span className="mono">OPENING HOURS</span>
          <strong>{gym.hours.mondayToSaturday}</strong>
          <span>
            {gym.hours.sunday} <span className="placeholder">{placeholderNotice}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="wrap faq-layout">
        <SectionIntro overline="09 / GOOD TO KNOW" title={<>QUESTIONS,<br />ANSWERED.</>} text="Answers reflect verified demo information or clearly marked items to confirm with the gym." />
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span className="mono">0{index + 1}</span>
                <strong>{item.question}</strong>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="wrap final-inner">
        <span className="eyebrow mono">READY WHEN YOU ARE</span>
        <h2 className="display">
          YOUR NEXT WORKOUT
          <br />
          <em>STARTS HERE.</em>
        </h2>
        <p>Start with a conversation at House Of Fitness in {gym.area}.</p>
        <div className="final-actions">
          <CTA>{gym.ctas.primary}</CTA>
          <a className="btn btn-quiet" href={gym.contact.whatsapp}>
            {gym.ctas.secondary} <MessageCircle size={16} aria-hidden="true" />
          </a>
          <a className="btn btn-quiet" href={gym.contact.phone}>
            {gym.ctas.tertiary}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const hoursSummary = `${gym.hours.mondayToSaturday}; ${gym.hours.sunday}`;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <a className="brand" href="#home" aria-label={`${gym.name} back to top`}>
            <span className="brand-mark" aria-hidden="true">
              <span />
            </span>
            <span className="brand-type">
              <strong>{gym.name}</strong>
              <small>{gym.area.toUpperCase()}</small>
            </span>
          </a>
          <p>
            Train with purpose.
            <br />
            {gym.hero.locationLine}.
          </p>
          <div className="footer-nav">
            <span className="mono">EXPLORE</span>
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <span className="mono">GET IN TOUCH</span>
            <a href={gym.contact.phone}>{gym.contact.phoneDisplay}</a>
            <a href={gym.contact.whatsapp}>{gym.ctas.secondary}</a>
            <a href="#location">{gym.address.lines[0]}</a>
            <a href={gym.contact.instagram}>{gym.contact.instagramHandle}</a>
            <span>{hoursSummary}</span>
          </div>
          <div className="footer-legal" id="legal-placeholders">
            <span className="mono">DEMO</span>
            <span className="concept-footer mono">{gym.conceptLabel}</span>
            <small>Not the live client site — verify all content before publication.</small>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {gym.name}
          </span>
          <span className="mono">{gym.conceptLabel}</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="mobile-sticky" aria-label="Quick contact actions">
      <span className="sticky-config-note mono">{gym.conceptLabel}</span>
      <a href={gym.contact.enquireHref} className="btn">
        {gym.ctas.primary} <ArrowUpRight size={15} />
      </a>
      <a href={gym.contact.whatsapp} className="btn btn-quiet" aria-label="WhatsApp House Of Fitness">
        {gym.ctas.secondary} <MessageCircle size={15} aria-hidden="true" />
      </a>
    </div>
  );
}

function App() {
  return (
    <div
      className="app-shell"
      style={
        {
          '--gym-background': gym.palette.background,
          '--gym-text': gym.palette.text,
          '--gym-secondary': gym.palette.secondary,
          '--gym-accent': gym.palette.accent,
          '--gym-surface': gym.palette.surface,
        } as CSSProperties
      }
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <WhySection />
        <Programs />
        <Facilities />
        <Coaches />
        <Progress />
        <Reviews />
        <Enquire />
        <Steps />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
