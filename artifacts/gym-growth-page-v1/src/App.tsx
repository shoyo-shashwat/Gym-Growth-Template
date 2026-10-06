import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Check, Dumbbell, HeartPulse, MapPin, Menu, MessageCircle, Phone, Users, Wind, X } from 'lucide-react';
import { gym, type IconKey } from './gym-config';

const nav = [
  ['Reviews', '#reviews'],
  ['Programs', '#programs'],
  ['Inside', '#inside'],
  ['Visit', '#visit'],
] as const;

const icons: Record<IconKey, ReactNode> = {
  strength: <Dumbbell size={30} />,
  cardio: <HeartPulse size={30} />,
  coach: <Users size={30} />,
  group: <Wind size={30} />,
};

function Btn({ href, children, tone = 'blue' }: { href: string; children: ReactNode; tone?: 'blue' | 'white' | 'sun' }) {
  return (
    <a className={`btn btn-${tone}`} href={href}>
      {children}
    </a>
  );
}

/** Wraps the highlighted phrase in a marker, like the video's review callout. */
function Quote({ quote, highlight }: { quote: string; highlight: string }) {
  const i = quote.indexOf(highlight);
  if (i < 0) return <>{quote}</>;
  return (
    <>
      {quote.slice(0, i)}
      <mark>{highlight}</mark>
      {quote.slice(i + highlight.length)}
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-in">
        <a className="logo" href="#top">
          <span className="logo-mark">{gym.short}</span>
          <span>{gym.name}</span>
        </a>
        <nav className={`nav${open ? ' open' : ''}`} aria-label="Main">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <Btn href="#enquire">Plan a visit</Btn>
        </nav>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

/** Rotating real reviews. Pauses on hover/focus; stays on the first review if the visitor prefers reduced motion. */
function ReviewRotator() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI(v => (v + 1) % gym.reviews.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <div className="rotator" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="rotator-stack" aria-live="off">
        {gym.reviews.map((r, n) => (
          <figure className={`rcard${n === i ? ' on' : ''}`} key={r.quote} aria-hidden={n !== i}>
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>
              <Quote quote={r.quote} highlight={r.highlight} />
            </blockquote>
            <figcaption>{r.source}</figcaption>
          </figure>
        ))}
      </div>
      <div className="dots">
        {gym.reviews.map((r, n) => (
          <button key={r.quote} className={n === i ? 'on' : ''} aria-label={`Show review ${n + 1}`} onClick={() => setI(n)} />
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <h1>{gym.hero.title}</h1>
          <p className="lead">{gym.hero.sub}</p>
          <div className="row">
            <Btn href="#enquire">Plan a visit</Btn>
            <Btn href={gym.contact.whatsapp} tone="white">
              <MessageCircle size={18} /> WhatsApp the gym
            </Btn>
          </div>
          <p className="hours">{gym.hours}</p>
        </div>
        <div className="hero-art">
          <div className="blob" aria-hidden="true" />
          <figure className="sticker sticker-hero">
            <img src={gym.hero.photo.src} alt={gym.hero.photo.alt} width="800" height="1067" />
            <figcaption>{gym.hero.photo.caption}</figcaption>
          </figure>
          <ReviewRotator />
          <div className="badge" aria-label={`${gym.rating.score} stars from ${gym.rating.total} Google reviews`}>
            <strong>{gym.rating.score}</strong>
            <span>
              {gym.rating.total} Google
              <br />
              reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [lead, ...rest] = gym.reviews;
  const max = Math.max(...gym.topics.map(t => t.count));
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <h2>What members say</h2>
        <div className="rev-layout">
          <figure className="feature">
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>
              <Quote quote={lead.quote} highlight={lead.highlight} />
            </blockquote>
            <figcaption>{lead.source}</figcaption>
          </figure>
          <div className="topics">
            <h3>Most mentioned on Google</h3>
            <p className="sub">Topics from {gym.rating.total} reviews</p>
            <ul>
              {gym.topics.map(t => (
                <li key={t.label}>
                  <span>{t.label}</span>
                  <span className="bar">
                    <i style={{ width: `${(t.count / max) * 100}%` }} />
                  </span>
                  <b>{t.count}</b>
                </li>
              ))}
            </ul>
          </div>
          {rest.map(r => (
            <figure className="rev" key={r.quote}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>
                <Quote quote={r.quote} highlight={r.highlight} />
              </blockquote>
              <figcaption>{r.source}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="section band-sky" id="programs">
      <div className="wrap">
        <h2>Pick your way to train</h2>
        <div className="prog-grid">
          {gym.programs.map(p => (
            <article className={`prog tone-${p.tone}`} key={p.name}>
              <span className="icon">{icons[p.icon]}</span>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <a href="#enquire">Ask about {p.name.toLowerCase()}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inside() {
  const tilt = ['-2.5deg', '1.5deg', '-1deg'];
  return (
    <section className="section" id="inside">
      <div className="wrap">
        <h2>A look inside</h2>
        <div className="gallery">
          {gym.gallery.map((g, n) => (
            <figure className="sticker" style={{ ['--tilt' as string]: tilt[n % tilt.length] }} key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section className="section band-sun" id="trainers">
      <div className="wrap split">
        <div>
          <h2>Help when you want it</h2>
          <p className="lead">{gym.trainersLead}</p>
        </div>
        <ul className="checks">
          {gym.trainers.map(t => (
            <li key={t.title}>
              <span className="tick">
                <Check size={18} strokeWidth={3} />
              </span>
              <div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// No backend: the form opens a pre-filled WhatsApp chat to the gym. Swap for an API call when we have one.
function Enquire() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      `Hi ${gym.name}, I'd like to ask about membership.`,
      `Name: ${f.get('name')}`,
      `Phone: ${f.get('phone')}`,
      `Goal: ${f.get('goal')}`,
      `Preferred visit time: ${f.get('time') || 'Any'}`,
      f.get('message') ? `Message: ${f.get('message')}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.open(`${gym.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
  };
  return (
    <section className="section band-blue" id="enquire">
      <div className="wrap enq">
        <div>
          <h2>Plan a visit</h2>
          <p className="lead">Tell us your goal and when you’d like to come in. The team will reply with membership details and timings.</p>
          <div className="row">
            <Btn href={gym.contact.phone} tone="white">
              <Phone size={18} /> Call {gym.contact.phoneDisplay}
            </Btn>
          </div>
        </div>
        <form className="form" onSubmit={submit}>
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
          </label>
          <label>
            Goal
            <select name="goal" defaultValue={gym.goals[0]}>
              {gym.goals.map(g => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
          <label>
            Best time to visit
            <input name="time" placeholder="e.g. Weekdays after 6 PM" />
          </label>
          <label className="full">
            Message (optional)
            <textarea name="message" rows={3} />
          </label>
          <button className="btn btn-blue full" type="submit">
            Get membership details
          </button>
          {sent && <p className="note full">Opening WhatsApp. If nothing opens, call {gym.contact.phoneDisplay}.</p>}
        </form>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>Starting is simple</h2>
        <ol className="steps">
          {gym.steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-no">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="section band-sky" id="visit">
      <div className="wrap visit">
        <div>
          <h2>Find us</h2>
          <address>
            {gym.address.lines.map(l => (
              <span key={l}>{l}</span>
            ))}
          </address>
          <p className="hours">{gym.hours}</p>
          <a className="tel" href={gym.contact.phone}>
            {gym.contact.phoneDisplay}
          </a>
          <div className="row">
            <Btn href={gym.mapUrl}>
              <MapPin size={18} /> Get directions
            </Btn>
            <Btn href={gym.contact.whatsapp} tone="white">
              WhatsApp
            </Btn>
          </div>
        </div>
        <iframe title={`Map to ${gym.name}`} src={gym.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap faq">
        <h2>Good to know</h2>
        <div>
          {gym.faqs.map(f => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Final() {
  return (
    <section className="final">
      <div className="wrap">
        <h2>Your next workout starts here.</h2>
        <div className="row center">
          <Btn href="#enquire">Plan a visit</Btn>
          <Btn href={gym.contact.whatsapp} tone="white">
            WhatsApp the gym
          </Btn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <div>
          <strong>{gym.name}</strong>
          <span>
            {gym.area}, {gym.city}
          </span>
        </div>
        <div>
          <a href={gym.contact.phone}>{gym.contact.phoneDisplay}</a>
          {gym.contact.instagram && <a href={gym.contact.instagram}>{gym.contact.instagramHandle}</a>}
        </div>
        <p className="concept">{gym.conceptLine}</p>
      </div>
    </footer>
  );
}

function Sticky() {
  return (
    <div className="sticky">
      <a className="btn btn-blue" href="#enquire">
        Plan a visit
      </a>
      <a className="btn btn-white" href={gym.contact.whatsapp}>
        WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.title = `${gym.name} | ${gym.area}, ${gym.city}`;
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reviews />
        <Programs />
        <Inside />
        <Trainers />
        <Enquire />
        <Steps />
        <Visit />
        <FAQ />
        <Final />
      </main>
      <Footer />
      <Sticky />
    </>
  );
}
