import { useEffect, useState } from 'react'
import { I } from './Icons.jsx'
import { diasporaImg, PHONE, WA, EMAIL, ADDRESS, slides, badges, stats, projects, services, why, testimonials } from './data.js'

const Logo = ({ big }) => (
  <div className={'logo' + (big ? ' big' : '')}>
    <svg viewBox="0 0 64 44" width={big ? 70 : 46} aria-hidden>
      <path d="M6 24 32 4l26 20" fill="none" stroke="#2c5a0e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 42c-9 0-14-6-14-13 9 0 14 5 14 13Z" fill="#6cc21a" />
      <path d="M32 42c9 0 14-6 14-13-9 0-14 5-14 13Z" fill="#2c5a0e" />
    </svg>
    <b>WEZESHA</b><small>HOMES</small>
  </div>
)

const Photo = ({ src, i = 0, label }) => <img className="photo" src={src || `${import.meta.env.BASE_URL}images/scene-${i % 8}.svg`} alt={label} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${import.meta.env.BASE_URL}images/scene-${i % 8}.svg` }} />

const Head = ({ label, a, b }) => (
  <div className="head"><p className="label"><i />{label}</p><h2>{a} <em>{b}</em></h2></div>
)

export default function App() {
  const [menu, setMenu] = useState(false)
  const [i, setI] = useState(0)
  const [mode, setMode] = useState('Ask a question')
  const [f, setF] = useState({ name: '', phone: '', email: '', project: 'Not sure yet / any plot', msg: '' })

  useEffect(() => { const t = setInterval(() => setI(v => (v + 1) % slides.length), 5000); return () => clearInterval(t) }, [])
  const wa = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`
  const send = (e) => {
    e.preventDefault()
    window.open(wa(`Hello Wezesha Homes, I would like to: ${mode}.\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email || '-'}\nPlot: ${f.project}\nMessage: ${f.msg || '-'}`), '_blank')
  }
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const nav = ['Home|#top', 'Projects|#projects', 'About|#about', 'How to buy|#services', 'Gallery|#projects', 'Community|#reviews', 'Contact|#contact']
  const s = slides[i]

  return (
    <div id="top">
      <header className="bar">
        <button className="icon" aria-label="Open menu" onClick={() => setMenu(true)}><span /><span /><span /></button>
        <Logo />
        <nav className="dnav">{nav.filter(n => !n.startsWith('Gallery')).map(n => { const [t, h] = n.split('|'); return <a key={t} href={h}>{t}</a> })}</nav>
        <a className="icon" href={`tel:${PHONE}`} aria-label="Call us"><I.phone /><span className="calltxt">{PHONE}</span></a>
      </header>

      {menu && <div className="scrim" onClick={() => setMenu(false)}>
        <aside className="drawer" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-top"><h3>Menu</h3><button className="x" onClick={() => setMenu(false)} aria-label="Close menu"><I.close /></button></div>
          <nav>{nav.map((n, k) => { const [t, h] = n.split('|'); return <a key={t} href={h} className={k === 0 ? 'on' : ''} onClick={() => setMenu(false)}>{t}<span><I.chev /></span></a> })}</nav>
          <div className="duo"><a href={`tel:${PHONE}`}><I.phone /> Call</a><a href={wa('Hello Wezesha Homes')}><I.wa /> WhatsApp</a></div>
          <a className="btn orange full" href="#contact" onClick={() => setMenu(false)}>Book a site visit</a>
        </aside>
      </div>}

      <main>
        <section className="card hero">
          <Photo src={s.img} i={i} label="Hero photo" />
          <div className="hbody">
          <h1>{s.a}<br /><em>{s.b}</em></h1>
          <p>{s.text}</p>
          <a className={'btn ' + (i === 1 ? 'green' : 'orange')} href={s.to}>{s.cta} <I.arrow /></a>
          {i === 0 && <ul className="badges">{badges.map(([b, ic]) => { const Ic = I[ic]; return <li key={b}><span><Ic /></span>{b}</li> })}</ul>}
          <div className="dots">{slides.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />)}</div>
          </div>
        </section>

        <section className="stats card">{stats.map(([n, x, l]) => <div key={l}><b>{n}{x && <em>{x}</em>}</b><span>{l}</span></div>)}</section>

        <section id="projects" className="sec">
          <Head label="Our projects" a="Plots" b="available now" />
          {projects.map((p, k) => (
            <article className="card proj" key={p.name}>
              <div className="pimg">
                <Photo src={p.img} i={k + 3} label={p.name} />
                <span className={'pill ' + (p.status === 'Selling fast' ? 'hot' : '')}><i />{p.status}</span>
                <span className="chip">{p.short}</span>
              </div>
              <p className="loc"><I.pin /> {p.loc}</p>
              <h3>{p.name}</h3>
              <p className="muted">{p.desc}</p>
              <div className="prow"><b>{p.price}</b><a className="go" href={wa(`Hello, I am interested in ${p.name} (${p.price}).`)} aria-label="Enquire on WhatsApp"><I.up /></a></div>
            </article>
          ))}
          <a className="btn ghost full" href="#contact">Ask about a plot</a>
        </section>

        <section id="services" className="card sec">
          <Head label="What we do" a="Our" b="services" />
          <p className="muted center">Help from choosing a plot to holding your ownership documents.</p>
          {services.map(([t, d, img, ic], k) => { const Ic = I[ic]; return (
            <div className="svc" key={t}><Photo src={img} i={k + 6} label="Service photo" /><div><span className="sico"><Ic /></span><h3>{t}</h3><p className="muted">{d}</p></div></div>
          ) })}
        </section>

        <section id="about" className="card sec">
          <Head label="The Wezesha difference" a="Why choose" b="Wezesha Homes?" />
          {why.map(([t, d], k) => (
            <div className="why" key={t}><b className={k % 2 ? 'g' : ''}>{String(k + 1).padStart(2, '0')}</b><div><h3>{t}</h3><p className="muted">{d}</p></div></div>
          ))}
        </section>

        <section id="reviews" className="card sec">
          <Head label="Testimonials" a="What our clients" b="say" />
          {testimonials.map(t => (
            <blockquote key={t.q}><span className="qm">”</span><p>{t.q}</p><footer><i>{t.n[0]}</i><div><b>{t.n}</b><small>{t.r}</small></div></footer></blockquote>
          ))}
        </section>

        <section id="diaspora" className="card diaspora">
          <Photo src={diasporaImg} i={4} label="Diaspora photo" />
          <div className="pad">
            <p className="label"><i />Kenyans abroad</p>
            <h2>Buy from afar, <em>build back home</em></h2>
            <p className="muted">Living outside Kenya? Speak to our team, view plots remotely and plan your purchase with clear guidance at each step.</p>
            <div className="chips"><span>Germany</span><span>United Kingdom</span><span>United States</span></div>
            <a className="btn orange full" href={wa('Hello, I am buying from abroad.')}>Buying from abroad</a>
          </div>
        </section>

        <section id="contact" className="talk">
          <div className="tl">
          <p className="label"><i />Free site visits</p>
          <h2>Talk to <em>our team</em></h2>
          <p className="muted">Leave your details and we will reach out to answer questions or set up a site visit.</p>
          <ul className="checks">{['Site visits available daily', 'Plots for homes & business', 'Friendly, helpful agents'].map(c => <li key={c}><span><I.check /></span>{c}</li>)}</ul>
          <p className="small">PREFER TO TALK NOW?</p>
          <div className="duo"><a href={`tel:${PHONE}`}><I.phone /> {PHONE.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}</a><a className="wa" href={wa('Hello Wezesha Homes')}><I.wa /> WhatsApp</a></div>
          </div>
          <form className="form" onSubmit={send}>
            <p className="lbl">I would like to…</p>
            <div className="toggle">{['Ask a question', 'Book a site visit'].map(m => <button type="button" key={m} className={m === mode ? 'on' : ''} onClick={() => setMode(m)}>{m}</button>)}</div>
            <label>Full name *<input required placeholder="e.g. Jane Wanjiku" value={f.name} onChange={set('name')} /></label>
            <label>Phone / WhatsApp *<input required type="tel" placeholder="07XX XXX XXX" value={f.phone} onChange={set('phone')} /></label>
            <label>Email (optional)<input type="email" placeholder="you@example.com" value={f.email} onChange={set('email')} /></label>
            <label>Plot you are interested in<select value={f.project} onChange={set('project')}><option>Not sure yet / any plot</option>{projects.map(p => <option key={p.name}>{p.name}</option>)}</select></label>
            <label>Message (optional)<textarea rows="3" value={f.msg} onChange={set('msg')} /></label>
            <button className="btn orange full" type="submit">Send via WhatsApp</button>
          </form>
        </section>

        <section className="cta">
          <h2>Your journey to a plot of your own <em>starts here</em></h2>
          <p>Whether you want land, a family home or an investment, we will help you take the next step.</p>
          <a className="btn orange full" href="#contact">Book a site visit</a>
          <a className="btn outline full" href={wa('Hello Wezesha Homes')}>WhatsApp us</a>
        </section>
      </main>

      <footer className="card foot">
        <Logo big />
        <p className="muted center">Wezesha Homes – better environment, better future. Helping you own a plot with confidence.</p>
        <h4>Get in touch</h4>
        <a href={`tel:${PHONE}`}><I.phone /> {PHONE}</a>
        <a href={`mailto:${EMAIL}`}><I.mail /> {EMAIL}</a>
        <p className="addr"><I.pin /> {ADDRESS}</p>
        <small>© {new Date().getFullYear()} Wezesha Homes. All rights reserved.</small>
      </footer>

      <a className="float" href={wa('Hello Wezesha Homes')} aria-label="Chat on WhatsApp"><I.wa /></a>
    </div>
  )
}
