import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowUpRight, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { gym } from './gym-config';

const nav = [
  ['Why us', '#why'],
  ['Programs', '#programs'],
  ['Facilities', '#facilities'],
  ['Reviews', '#reviews'],
  ['Visit', '#visit'],
] as const;

function Btn({ href, children, variant = 'solid' }: { href: string; children: ReactNode; variant?: 'solid' | 'line' }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-in">
        <a className="logo" href="#top">
          <span className="logo-mark">{gym.short}</span>
          <span className="logo-name">{gym.name}</span>
        </a>
        <nav className={`nav${open ? ' open' : ''}`} aria-label="Main">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <Btn href="#enquire">Enquire now</Btn>
        </nav>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero dark" id="top">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="eyebrow">{gym.hero.eyebrow}</p>
          <h1>
            {gym.hero.line1}
            <br />
            <span className="accent">{gym.hero.line2}</span>
          </h1>
          <p className="lead">{gym.hero.sub}</p>
          <div className="row">
            <Btn href="#enquire">Enquire now</Btn>
            <Btn href={gym.contact.whatsapp} variant="line">
              WhatsApp us
            </Btn>
          </div>
          <p className="hero-rating">
            <b>
              {gym.rating.score}★ · {gym.rating.count} {gym.rating.source}
            </b>
          </p>
        </div>
        <div className="hero-photo">
          <img src={gym.hero.image.src} alt={gym.hero.image.alt} width="800" height="1067" />
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof ivory" aria-label="Highlights">
      <div className="wrap proof-in">
        {gym.proof.map(p => (
          <div key={p.label}>
            <strong>{p.value}</strong>
            <span>{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Head({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  return (
    <div className="head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Why() {
  return (
    <section className="section ivory" id="why">
      <div className="wrap">
        <Head eyebrow="Why House Of Fitness" title={<>More than <span className="muted">a gym.</span></>} />
        <ol className="why-list">
          {gym.why.map((w, i) => (
            <li key={w.title}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="section dark" id="programs">
      <div className="wrap">
        <Head eyebrow="Programs" title={<>Train for <span className="accent">your goal.</span></>} />
        <div className="prog-grid">
          {gym.programs.map((p, i) => (
            <article className="prog" key={p.name}>
              <img src={p.image.src} alt={p.image.alt} loading="lazy" />
              <div className="prog-body">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <a href="#enquire" className="more">
                  Enquire <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section className="section ivory" id="facilities">
      <div className="wrap">
        <Head eyebrow="Facilities" title={<>Built for <span className="muted">better training.</span></>} />
        <div className="fac-grid">
          {gym.facilities.map(f => (
            <figure key={f.name}>
              <img src={f.image.src} alt={f.image.alt} loading="lazy" />
              <figcaption>{f.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section className="section dark band" id="trainers">
      <div className="wrap">
        <Head eyebrow="Trainer support" title={<>Trained to support <span className="accent">your goals.</span></>} />
        <div className="trainer-grid">
          {gym.trainers.map(t => (
            <div key={t.title}>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section ivory" id="reviews">
      <div className="wrap">
        <Head eyebrow="Member proof" title={<>What members <span className="muted">say.</span></>} />
        <p className="stars">
          ★★★★★ <b>{gym.rating.score}</b> · {gym.rating.count} {gym.rating.source}
        </p>
        <div className="rev-grid">
          {gym.reviews.map(r => (
            <blockquote key={r.quote}>
              <p>“{r.quote}”</p>
              <cite>{r.source}</cite>
            </blockquote>
          ))}
        </div>
        <ul className="chips">
          {gym.reviewThemes.map(t => (
            <li key={t}>{t}</li>
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
    <section className="section dark" id="enquire">
      <div className="wrap enq">
        <div>
          <p className="eyebrow">Membership enquiry</p>
          <h2>
            Plan a <span className="accent">visit.</span>
          </h2>
          <p className="lead">Tell us your goal and when you’d like to come in. The team will share membership details and timings.</p>
          <div className="row">
            <Btn href={gym.contact.phone} variant="line">
              <Phone size={15} /> Call now
            </Btn>
            <Btn href={gym.contact.whatsapp} variant="line">
              <MessageCircle size={15} /> WhatsApp
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
            Preferred visit time
            <input name="time" placeholder="e.g. Weekdays after 6 PM" />
          </label>
          <label className="full">
            Message (optional)
            <textarea name="message" rows={3} />
          </label>
          <button className="btn btn-solid full" type="submit">
            Get membership details
          </button>
          {sent && <p className="note full">Opening WhatsApp… if nothing opens, call {gym.contact.phoneDisplay}.</p>}
        </form>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section ivory">
      <div className="wrap">
        <Head eyebrow="How to start" title={<>Three steps. <span className="muted">No guesswork.</span></>} />
        <ol className="steps">
          {gym.steps.map((s, i) => (
            <li key={s.title}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
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
    <section className="section dark" id="visit">
      <div className="wrap visit">
        <div>
          <p className="eyebrow">Location</p>
          <h2>
            Find <span className="accent">us.</span>
          </h2>
          <address>
            {gym.address.lines.map(l => (
              <span key={l}>{l}</span>
            ))}
          </address>
          <p className="hours">{gym.hours}</p>
          <p>
            <a className="tel" href={gym.contact.phone}>
              {gym.contact.phoneDisplay}
            </a>
          </p>
          <div className="row">
            <Btn href={gym.mapUrl}>
              <MapPin size={15} /> Get directions
            </Btn>
            <Btn href={gym.contact.whatsapp} variant="line">
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
    <section className="section ivory" id="faq">
      <div className="wrap faq">
        <Head eyebrow="Good to know" title={<>Questions, <span className="muted">answered.</span></>} />
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
          <a className="btn btn-ink" href="#enquire">
            Enquire now
          </a>
          <a className="btn btn-ink-line" href={gym.contact.whatsapp}>
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer dark">
      <div className="wrap foot-in">
        <div>
          <strong>{gym.name}</strong>
          <span>
            {gym.area}, {gym.city}
          </span>
        </div>
        <div>
          <a href={gym.contact.phone}>{gym.contact.phoneDisplay}</a>
          <a href={gym.contact.instagram}>{gym.contact.instagramHandle}</a>
        </div>
        <p className="concept">{gym.conceptLine}</p>
      </div>
    </footer>
  );
}

function Sticky() {
  return (
    <div className="sticky">
      <a className="btn btn-solid" href="#enquire">
        Enquire
      </a>
      <a className="btn btn-line" href={gym.contact.whatsapp}>
        WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proof />
        <Why />
        <Programs />
        <Facilities />
        <Trainers />
        <Reviews />
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
