import { PROFILE, PHONE_LK, PHONE_UAE, EMAIL, LINKS } from './config.js'
import * as I from './icons.jsx'

function saveContact() {
  const v = [
    'BEGIN:VCARD', 'VERSION:3.0',
    'N:Vaikunthan;K.;;;', `FN:${PROFILE.name}`,
    'ORG:SAI Properties FZ-LLC', `TITLE:${PROFILE.title}`,
    `TEL;TYPE=CELL:${PHONE_LK}`, `TEL;TYPE=WORK:${PHONE_UAE}`,
    `EMAIL:${EMAIL}`, `URL:${LINKS.portfolio}`,
    'ADR;TYPE=WORK:;;Al Arif Shipping Building\\, Office 117\\, Port Saeed;Deira;Dubai;;UAE',
    'END:VCARD',
  ].join('\r\n')
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([v], { type: 'text/vcard' }))
  a.download = 'K-Vaikunthan.vcf'
  document.body.appendChild(a); a.click(); a.remove()
}

// order: Save Contact, Personal Portfolio, Website, WhatsApp, Instagram, LinkedIn, Location, Google Review
const buttons = [
  { label: 'Save Contact', icon: I.User, cls: 'c-blue', onClick: saveContact },
  { label: 'My Site', icon: I.Briefcase, cls: 'c-gold', href: LINKS.portfolio },
  { label: 'WhatsApp', icon: I.Chat, cls: 'c-green', href: LINKS.whatsapp },
  { label: 'Instagram', icon: I.Insta, cls: 'c-insta', href: LINKS.instagram },
  { label: 'LinkedIn', icon: I.Linkedin, cls: 'c-linkedin', href: LINKS.linkedin },
 
]

function ActionButton({ label, icon: Icon, cls, href, onClick, i }) {
  const inner = (
    <>
      <span className={`ic ${cls}`}><Icon /></span>
      <span className="lbl">{label}</span>
      <span className="chev"><I.Chevron /></span>
    </>
  )
  const style = { animationDelay: `${0.35 + i * 0.07}s` }
  return href
    ? <a className="btn" style={style} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
    : <button className="btn" style={style} type="button" onClick={onClick}>{inner}</button>
}

export default function Card() {
  return (
    <main className="page">
      <span className="blob b1" /><span className="blob b2" />
      <section className="card">
        <div className="logo" aria-label="Logo">
          <span className="mark">KV</span>
          <span className="wordmark">Vaikunthan</span>
        </div>

        <div className="photo-wrap">
          <div className="photo"><img src="/person.webp" alt={PROFILE.name} width="949" height="760" /></div>
        </div>

        <h1 className="name">{PROFILE.name}</h1>
        <p className="role">{PROFILE.title}</p>
        <p className="company">{PROFILE.company}</p>
        <p className="tag">{PROFILE.tagline}</p>

        <nav className="list" aria-label="Contact actions">
          {buttons.map((b, i) => <ActionButton key={b.label} i={i} {...b} />)}
        </nav>
        <p className="foot">Tap to connect · Dubai · Sri Lanka</p>
      </section>
    </main>
  )
}
