import { useEffect, useRef, useState } from 'react'

const PHONE_LK = '+94 77 515 8810'
const PHONE_UAE = '+971 56 798 6455'
const EMAIL = 'Vaikunthan@gmail.com'
const FB = 'https://www.facebook.com/kvaikunthan'
const digits = s => s.replace(/[^\d+]/g, '')

const ventures = [
  { icon: '🏢', sector: 'Real Estate & Property Advisory', roles: [['Managing Director', 'SAI PROPERTIES FZ-LLC', 'Dubai, UAE'], ['Director', 'SAI PROPERTIES (PVT) LTD', 'Trincomalee, Sri Lanka']], focus: 'Off-plan investment advisory, commercial property trading, licensing and rental management across global markets.' },
  { icon: '⚙️', sector: 'Electromechanical & Technical Contracting', roles: [['Director', 'TECHVILL Technical Services Contracting Co. L.L.C.', 'Dubai, UAE']], focus: 'Civil works, interior fit-outs, tiling operations and Extra-Low Voltage (ELV) installations.' },
  { icon: '👥', sector: 'Human Resources & Manpower', roles: [['Operations Director', 'AM TO PM FZ-LLC', 'Dubai, UAE']], focus: 'Large-scale workforce sourcing, staffing solutions and recruitment management.' },
  { icon: '☀️', sector: 'Renewable Energy', roles: [['Commercial Director', 'RAM GREEN ENERGY (PVT) LTD / GREEN SOLAR HOLDINGS LANKA', 'Sri Lanka']], focus: 'Solar water pumping, hybrid / off-grid solar systems and energy-efficient cooling.' },
  { icon: '✈️', sector: 'Business Setup & Tourism', roles: [['Director', 'HIKAYAT AL SAHRA TOURISM', 'Deira, Dubai']], focus: 'Trade licence, company formation, visas, attestation, PRO services and travel support.' },
]
const synergy = [
  ['🌍', 'Real Estate Deals', 'Cross-border real estate investment & commercial deal brokering.'],
  ['🔗', 'Trading Partnerships', 'Distribution & trading partnerships across regional hubs.'],
  ['🛠️', 'Subcontracting & Manpower', 'Technical services subcontracting & manpower solutions.'],
]
const statCards = [
  [5, 'Ventures', 'Investments & Business Opportunities', 'M12 22V12M12 12C12 7 8 5 4 5c0 5 3 7 8 7zM12 14c0-4 3-6 8-6 0 5-3 7-8 6'],
  [2, 'Countries', 'UAE & Sri Lanka', 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18'],
  [4, 'Core Sectors', 'Property | Technical Contracting Manpower | Renewable Energy', 'M12 8a2 2 0 100-4 2 2 0 000 4zM5 20a2 2 0 100-4 2 2 0 000 4zM19 20a2 2 0 100-4 2 2 0 000 4zM12 8v4M12 12l-6 4M12 12l6 4'],
  [3, 'Partner Regions', 'India | UAE | Singapore', 'M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 11a2.5 2.5 0 100-5M17 15c2.5 0 4 1.5 4 4'],
]
const sparks = Array.from({ length: 16 }, (_, i) => ({ left: `${(i * 37) % 100}%`, animationDelay: `${(i * 0.9) % 8}s`, animationDuration: `${7 + (i % 5)}s`, width: `${3 + (i % 3)}px`, height: `${3 + (i % 3)}px` }))
const nav = [['home', 'Home', 'M3 11l9-8 9 8v10h-6v-6H9v6H3z'], ['business', 'Business', 'M3 7h18v13H3zM8 7V4h8v3'], ['collab', 'Collaborate', 'M8 12a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 6-5s6 2 6 5M14 15c3 0 8 1 8 5'], ['contact', 'Contact', 'M3 5h18v14H3zM3 6l9 7 9-7']]

function saveContact() {
  const v = `BEGIN:VCARD\nVERSION:3.0\nFN:K. Vaikunthan\nORG:SAI Properties FZ-LLC\nTITLE:Managing Director\nTEL;TYPE=CELL:${PHONE_LK}\nTEL;TYPE=WORK:${PHONE_UAE}\nEMAIL:${EMAIL}\nURL:${FB}\nEND:VCARD`
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([v], { type: 'text/vcard' }))
  a.download = 'Vaikunthan.vcf'
  a.click()
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function Count({ to }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      let i = 0
      const t = setInterval(() => { i++; setN(i); if (i >= to) clearInterval(t) }, 140)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <b ref={ref}>{n}</b>
}

const Icon = ({ d }) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
function Typewriter({ text, speed = 140, eraseSpeed = 70, hold = 1800, gap = 500 }) {
  const [n, setN] = useState(0)
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    let t
    if (!erasing && n < text.length) t = setTimeout(() => setN(n + 1), speed)      // type wenawa
    else if (!erasing) t = setTimeout(() => setErasing(true), hold)                 // full wela nawathinawa
    else if (n > 0) t = setTimeout(() => setN(n - 1), eraseSpeed)                   // ayin wenawa
    else t = setTimeout(() => setErasing(false), gap)                               // ayeth patan ganna
    return () => clearTimeout(t)
  }, [n, erasing, text, speed, eraseSpeed, hold, gap])

  return (
    <>
      <em>{text.slice(0, n)}</em>
      <span className="caret" />
    </>
  )
}
function Rotator({ words, every = 2200 }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % words.length), every)
    return () => clearInterval(t)
  }, [words, every])
  return <span key={i} className="rot">{words[i]}</span>
}
export default function App() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      document.documentElement.style.setProperty('--prog', `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`)
      let cur = 'home'
      nav.forEach(([id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="site">
      <div className="progress" />
      <header className={`top ${scrolled ? 'solid' : ''}`}>
        <div className="wrap topin">
          <a className="logo" onClick={() => go('home')}><span>KV</span><div><b>VAIKUNTHAN</b><small>BUSINESS · DUBAI · LANKA</small></div></a>
          <nav className="links">
            {nav.map(([id, l]) => <a key={id} className={active === id ? 'on' : ''} onClick={() => go(id)}>{l}</a>)}
          </nav>
          <button className="pill" onClick={saveContact}>Save Contact</button>
        </div>
      </header>

      <section id="home" className="hero" onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3)); e.currentTarget.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3)) }}>
        <div className="orb o1" /><div className="orb o2" /><div className="shine" />
        {sparks.map((p, i) => <i key={i} className="spark" style={p} />)}
        <div className="wrap heroin">
          <div className="htxt">
            <div className="badge a1"><svg viewBox="0 0 24 24" width="16" height="16" fill="#d9a441"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" /></svg> Dubai, UAE - Sri Lanka &nbsp;|&nbsp; Open to Partnerships</div>
            <p className="hello a2">Hello, I’m</p>
            <h1 className="a3" aria-label="K. Vaikunthan">K. <Typewriter text="Vaikunthan" speed={200} eraseSpeed={100} hold={2500} /></h1>
            <p className="role a4">Sri Lankan Business Connector</p>
            <p className="focus a4">Focus: <Rotator words={['Real Estate', 'Technical Contracting', 'Manpower Solutions', 'Renewable Energy']} /></p>
            <p className="lead a5">Managing Director &amp; entrepreneur connecting investors and business leaders across India, the UAE, Singapore and Sri Lanka — in property, technical contracting, manpower and renewable energy.</p>
            <div className="cta a6">
              <button className="btn gold" onClick={() => go('business')}>Explore Businesses <span className="arr">→</span></button>
              <button className="btn ghost" onClick={() => go('contact')}>✉ Contact Me</button>
            </div>
            <div className="chips a7">
              <a href={`tel:${digits(PHONE_LK)}`}>📞 {PHONE_LK}</a>
              <a href={`mailto:${EMAIL}`}>✉️ {EMAIL}</a>
            </div>
          </div>
        </div>
       
    <div className="art">
  <img className="art-bg" src={import.meta.env.BASE_URL + "hero-bg.webp"} alt="" fetchpriority="high" />
  <img className="art-person" src={import.meta.env.BASE_URL + "person.webp"} alt="K. Vaikunthan" fetchpriority="high" width="949" height="760" />
  <span className="fchip c1">🏢 Real Estate</span>
<span className="fchip c2">☀️ Solar Energy</span>
<span className="fchip c3">🌍 Dubai · Lanka</span>
</div>
<button className="scroll" onClick={() => go('business')} aria-label="Scroll down"><i /></button>
      </section>

      <section className="wrap stats">
        {statCards.map(([n, t, d, ic], i) => (
          <Reveal key={t} delay={i * 110} className="stat">
            <span className="sic"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#d9a441" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={ic} /></svg></span>
            <Count to={n} /><h4>{t}</h4><span className="sd">{d}</span><u />
          </Reveal>
        ))}
      </section>

      <section id="business" className="sec">
        <div className="wrap">
          <Reveal><p className="eyebrow">What I do</p><h2>Executive Roles &amp; Ventures</h2></Reveal>
          <div className="grid">
            {ventures.map((v, i) => (
              <Reveal key={v.sector} delay={i * 80} className="card venture">
                <div className="vh"><span className="ic">{v.icon}</span><h3>{v.sector}</h3></div>
                {v.roles.map(([r, c, l]) => (
                  <div className="role-row" key={c}><b>{r}</b><span>{c}</span><small>📍 {l}</small></div>
                ))}
                <p className="muted">{v.focus}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="cards-row">
           <img src={import.meta.env.BASE_URL + "card-sai.webp"} alt="SAI Properties business card" loading="lazy" />
<img src={import.meta.env.BASE_URL + "card-hikayat.webp"} alt="Hikayat Al Sahra Tourism business card" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section id="collab" className="sec dark">
        <div className="wrap">
          <Reveal><p className="eyebrow gold">Let’s work together</p><h2>Synergy &amp; Collaboration</h2></Reveal>
          <div className="grid3">
            {synergy.map(([i, t, d], k) => (
              <Reveal key={t} delay={k * 100} className="card glass"><span className="ic">{i}</span><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </div>
          <Reveal className="event">
            <div>
              <small>FEATURED EVENT</small>
              <h3>Global Horizons – Sri Lanka 2026</h3>
              <p>Business Beyond Borders · Colombo Networking Dinner</p>
              <p>📍 Dawn &amp; Dusk, Bambalapitiya &nbsp;·&nbsp; 📅 22 October 2026, 5:30 PM onwards</p>
            </div>
            <button className="btn gold" onClick={() => go('contact')}>Meet Me →</button>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="sec">
        <div className="wrap">
          <Reveal><p className="eyebrow">Get in touch</p><h2>Let’s Connect</h2></Reveal>
          <div className="grid contact">
            <Reveal><a className="card row link" href={`https://wa.me/${PHONE_LK.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"><span className="ic">💬</span><p><b>WhatsApp</b><br />{PHONE_LK}</p></a></Reveal>
            <Reveal delay={60}><a className="card row link" href={`tel:${digits(PHONE_UAE)}`}><span className="ic">📞</span><p><b>UAE Office</b><br />{PHONE_UAE}</p></a></Reveal>
            <Reveal delay={120}><a className="card row link" href={`mailto:${EMAIL}`}><span className="ic">✉️</span><p><b>Email</b><br />{EMAIL}</p></a></Reveal>
            <Reveal delay={180}><a className="card row link" href={FB} target="_blank" rel="noreferrer"><span className="ic">📘</span><p><b>Facebook</b><br />Kangatharan Vaikunthan</p></a></Reveal>
            <Reveal className="span2"><div className="card row"><span className="ic">📍</span><p><b>Dubai Office</b><br />Al Arif Shipping Building, 1st Floor, Office 117, Port Saeed, Deira, Dubai, UAE</p></div></Reveal>
          </div>
          <Reveal><button className="btn gold big" onClick={saveContact}>⬇ Save Contact (.vcf)</button></Reveal>
        </div>
      </section>

      <footer>© 2026 K. Vaikunthan · Dubai | Sri Lanka</footer>

      <nav className="bar">
        {nav.map(([id, l, d]) => <button key={id} className={active === id ? 'on' : ''} onClick={() => go(id)}><Icon d={d} />{l}</button>)}
      </nav>
    </div>
  )
}
